# Cache de Nadal

## Publicar-lo a GitHub Pages
1. Crea un repositori nou a GitHub i puja `index.html`, `config.js` i aquest `README.md`.
2. Ves a **Settings → Pages**, a *Source* tria **Deploy from a branch**, branca `main`, carpeta `/ (root)` i desa.
3. Al cap d’un minut tindràs l’enllaç: `https://EL-TEU-USUARI.github.io/NOM-DEL-REPO/`. Envia’l per WhatsApp o fes-ne un QR.

## Personalitzar preguntes i paraules
Edita només `config.js` (hi ha instruccions i exemples). Després de desar el canvi a GitHub, la pàgina s’actualitza en un minut.

## Classificació compartida entre tots els mòbils (opcional)
1. Entra a https://console.firebase.google.com i crea un projecte (sense Analytics).
2. **Build → Realtime Database → Create database** i tria *Start in test mode*.
3. A la pestanya **Rules** posa:
   `{ "rules": { "ranking": { ".read": true, ".write": true } } }`
   i prem *Publish*.
4. Copia l’adreça de la base de dades (acaba en `firebasedatabase.app`) i enganxa-la a `firebaseUrl` de `config.js`.

Per esborrar la classificació, elimina el node `ranking` des de la consola de Firebase.
