/**
 * Regenerates the Hall of Fame table from GitHub, in both language editions.
 *
 *   node scripts/contributors.mjs        # rewrite the block
 *   node scripts/contributors.mjs --check # fail if it is out of date
 *
 * Counts commits, pull requests and issues across every non-archived
 * repository of the account, then rewrites what sits between the two
 * `contributors:start` / `contributors:end` markers. Project accounts are
 * excluded: this page honours the people who showed up from outside.
 *
 * Needs the `gh` CLI, authenticated. Anonymous calls hit the 60/hour limit
 * long before the repositories are walked.
 */
import { execFile } from 'node:child_process';
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { promisify } from 'node:util';
import { fileURLToPath } from 'node:url';

const run = promisify(execFile);
const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');

const OWNER = 'TigerTag-Project';
/** The project's own accounts — the page is for everyone else. */
const TEAM = new Set(['BenGlut', 'TigerTag-Project']);

const START = '<!-- contributors:start -->';
const END = '<!-- contributors:end -->';

const PAGES = [
  {
    file: 'docs/hall-of-fame.md',
    header: '| Who | Commits | Pull requests | Issues |',
    line: (l, c) => `| **[@${l}](https://github.com/${l})** | ${c.commits || '—'} | ${c.prs || '—'} | ${c.issues || '—'} |`,
  },
  {
    file: 'i18n/fr/hall-of-fame.md',
    header: '| Qui | Commits | Pull requests | Issues |',
    line: (l, c) => `| **[@${l}](https://github.com/${l})** | ${c.commits || '—'} | ${c.prs || '—'} | ${c.issues || '—'} |`,
  },
];

async function gh(endpoint) {
  try {
    const { stdout } = await run('gh', ['api', endpoint], { maxBuffer: 32 * 1024 * 1024 });
    return stdout.trim() ? JSON.parse(stdout) : [];
  } catch {
    return [];
  }
}

async function collect() {
  const repos = (await gh(`users/${OWNER}/repos?per_page=100`)).filter((r) => !r.archived);
  if (!repos.length) throw new Error('no repositories returned — is `gh` authenticated?');

  const tally = new Map();
  const bump = (login, key, n = 1) => {
    if (TEAM.has(login)) return;
    const e = tally.get(login) ?? { commits: 0, prs: 0, issues: 0 };
    e[key] += n;
    tally.set(login, e);
  };

  for (const { name } of repos) {
    for (const c of await gh(`repos/${OWNER}/${name}/contributors?per_page=100`)) {
      if (c?.type === 'User') bump(c.login, 'commits', c.contributions ?? 0);
    }
    for (const i of await gh(`repos/${OWNER}/${name}/issues?state=all&per_page=100`)) {
      if (i?.user?.type === 'User') bump(i.user.login, i.pull_request ? 'prs' : 'issues');
    }
  }

  // Most involved first; commits and pull requests weigh more than issues only
  // because they take longer, not because an issue matters less.
  return [...tally.entries()].sort(
    ([, a], [, b]) => b.commits + b.prs * 5 + b.issues * 3 - (a.commits + a.prs * 5 + a.issues * 3),
  );
}

const block = (page, people) =>
  [START, '', page.header, '|---|---|---|---|', ...people.map(([l, c]) => page.line(l, c)), '', END].join('\n');

const check = process.argv.includes('--check');
const people = await collect();
let stale = 0;

for (const page of PAGES) {
  const file = path.join(ROOT, page.file);
  const current = await readFile(file, 'utf8');
  const i = current.indexOf(START);
  const j = current.indexOf(END);
  if (i === -1 || j === -1) throw new Error(`${page.file}: markers not found`);

  const next = current.slice(0, i) + block(page, people) + current.slice(j + END.length);
  if (next === current) continue;
  if (check) {
    console.error(`contributors: ${page.file} is out of date — run \`node scripts/contributors.mjs\``);
    stale++;
    continue;
  }
  await writeFile(file, next);
  console.log(`contributors: updated ${page.file}`);
}

if (check && stale) process.exit(1);
console.log(`contributors: ${people.length} contributor(s) outside the project's own accounts`);
