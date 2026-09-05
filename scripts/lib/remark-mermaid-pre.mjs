/**
 * Turn ```mermaid fences into <pre class="mermaid">source</pre>.
 *
 * This is exactly what `rehype-mermaid`'s `pre-mermaid` strategy emits, minus
 * its dependency chain: that package pulls in `mermaid-isomorphic`, which
 * imports Playwright at load time even when no diagram is rendered at build
 * time. Requiring a headless browser (and its system libraries) on the deploy
 * image, just to leave the diagram source untouched, is not a trade worth
 * making — the browser draws these diagrams anyway.
 *
 * Running as a remark plugin also keeps the mermaid blocks away from Expressive
 * Code, which would otherwise render them as syntax-highlighted source.
 */
const ESCAPES = { '&': '&amp;', '<': '&lt;', '>': '&gt;' };

function escapeHtml(value) {
  return value.replace(/[&<>]/g, (char) => ESCAPES[char]);
}

function visit(node, parent, index) {
  if (node.type === 'code' && node.lang === 'mermaid' && parent) {
    parent.children[index] = {
      type: 'html',
      value: `<pre class="mermaid">${escapeHtml(node.value)}</pre>`,
    };
    return;
  }
  const children = node.children;
  if (!Array.isArray(children)) return;
  for (let i = children.length - 1; i >= 0; i -= 1) visit(children[i], node, i);
}

export function remarkMermaidPre() {
  return (tree) => visit(tree, null, 0);
}

export default remarkMermaidPre;
