---
sourceHash: 33f31e38f0f7b39c2f10eecad9ed04781f70c374bcaa8b98a621704e2e319907
sourcePath: docs/developers/cloud-api.md
---

# API cloud et intégration tierce

## Le contrat

Les applications tierces se connectent au backend TigerSystem — du Firebase
standard — selon le **schéma Firebase habituel** :

1. Récupérer la configuration publique du SDK :
 `https://tigertag-cdn.web.app/__/firebase/init.json`
2. `firebase.initializeApp(config)`
3. Authentifier le **compte TigerTag de l'utilisateur lui-même** (le fait que la
 configuration soit publique est intentionnel — la sécurité est appliquée côté
 serveur par les règles Firestore).
4. Lire et écrire les données de cet utilisateur dans le périmètre documenté.

## Documentation de référence

Le contrat d'intégration complet se trouve dans
**[TigerTag_Firebase_Integration](https://github.com/TigerTag-Project/TigerTag_Firebase_Integration)** :

| Doc | Contenu |
|---|---|
| `docs/01-firebase-config.md` | Configuration du projet et connexion |
| `docs/02-authentication.md` | Flux d'authentification |
| `docs/03-data-model.md` | Collections et champs Firestore (la référence du modèle de données) |
| `docs/04-friend-system.md` | Codes de découverte, demandes, inventaires partagés |
| `docs/05-rate-limiting.md` | Limites d'usage équitable |
| `examples/` | CLI Python, ESP32/Arduino, Home Assistant, passerelle Spoolman |

## Règles de sécurité — à quoi s'attendre

- `users/{uid}/**` est réservé au propriétaire par défaut.
- Les écritures d'un utilisateur vers un autre exigent toujours une **relation
 préalable** (par exemple une amitié acceptée) — il n'existe aucun chemin
 d'écriture ouvert.
- Certaines collections sont soumises à une **liste blanche de champs** : les
 écritures portant des champs non listés sont rejetées.
- Les champs réservés aux administrateurs (rôles, indicateurs de débogage) ne
 sont jamais inscriptibles par le client.

## Points de terminaison HTTP

`cdn.tigertag.io` vit dans le **même projet Firebase** que les comptes : il
héberge la base de données de référence partagée, les images de bobines (y
compris les photos produit TigerTag+) et les points de terminaison HTTP liés à
la base de données TigerSystem.

| Point de terminaison | Rôle |
|---|---|
| `https://cdn.tigertag.io/healthz/` | Contrôle de santé |
| `https://cdn.tigertag.io/setSpoolWeightByRfid?ApiKey=&uid=&weight=` | Transmettre le poids d'une bobine par UID de puce (utilisé par les appareils de type balance) |

> **TODO :** catalogue complet de l'API HTTP (modèle d'authentification, formes
> d'erreur) — à documenter dans le dépôt d'intégration et à résumer ici.

---

**◀ Précédent :** [SDK](./sdks.md) · **▲ [Index de la documentation](../../README.md)** · **Suivant ▶** [FAQ](../faq/README.md)

**Voir aussi :** [Inventaire et synchronisation cloud](../concepts/inventory-and-cloud-sync.md), [Architecture](../architecture/overview.md)
