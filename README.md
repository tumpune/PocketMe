# PocketMe

Sito React/Vite per PocketMe, PocketPet e PocketLove: mini figure 3D personalizzate da foto reali.

## Comandi

```bash
npm install
npm run dev
npm run lint
npm run build
npm run preview
```

## EmailJS

Il form preventivo e il form contatti usano EmailJS. Le variabili possono essere configurate in un file `.env` locale:

```bash
VITE_EMAILJS_SERVICE_ID=service_xxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxx
VITE_EMAILJS_QUOTE_TEMPLATE_ID=template_xxxxx
VITE_EMAILJS_CONTACT_TEMPLATE_ID=template_xxxxx
VITE_EMAILJS_PUBLIC_KEY=public_key_xxxxx
```

Se le variabili non sono presenti, il sito usa i valori di fallback definiti in `src/config/emailjs.js`.
