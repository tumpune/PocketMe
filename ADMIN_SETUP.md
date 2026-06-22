# PocketMe Admin - integrazione gestionale

Aggiornato: 17 giugno 2026

Questo documento descrive come il gestionale PocketMe e collegato al progetto
React/Vite ma tenuto separato dal sito vetrina, e come puo evolvere da demo locale a pannello operativo di
produzione.

## Obiettivo

Creare un'area riservata separata dalla vetrina pubblica. Il gestionale non
deve usare navbar e footer del sito commerciale, ma deve mantenere una identita
visiva coerente con PocketMe:
sfondo scuro, accento ciano, card compatte, bordi luminosi leggeri e layout
responsive.

Il gestionale serve a tracciare entrate e uscite legate a PocketMe, PocketPet e
PocketLove. I ricavi dalle vendite nascono dal brand e non sono versamenti
personali dei soci. Quando serve, pero, un ricavo vendita puo essere attribuito
a Tumpune o Cirino mantenendo la fonte `brand_sales`, cosi resta chiaro che
l'entrata arriva dalle vendite dei prodotti e non dalle tasche del socio.

## Stato attuale

L'area admin e collegata in `src/App.jsx` tramite `react-router-dom`.

Accesso locale:

```text
http://localhost:5173/admin/login
```

Credenziali demo:

```text
Email: admin@pocketme.com
Password: admin123
```

Separazione dalla vetrina:

- le pagine `/admin/*` non renderizzano `Navbar` e `Footer`
- il footer pubblico non contiene il link all'area riservata
- l'accesso admin resta raggiungibile direttamente da `/admin/login`
- `AdminLayout` gestisce sidebar, header gestionale e contenuto interno

## Routing

Rotte pubbliche principali:

```text
/                         -> Home
/prodotti                 -> PocketLove
/prodotti/pocketme        -> Collezione PocketMe
/prodotti/pocketpet       -> Collezione PocketPet
/come-funziona            -> Processo
/faq                      -> FAQ
/contatti                 -> Contatti
/richiedi-preventivo      -> Preventivo
```

Rotte admin:

```text
/admin/login              -> Login admin demo
/admin                    -> redirect a /admin/dashboard
/admin/dashboard          -> Dashboard protetta
/admin/sales-revenue      -> Inserimento ricavi vendita protetto
/admin/add-movement       -> Aggiunta movimento protetta
/admin/movements          -> Archivio movimenti protetto
/admin/movements/sales    -> Movimenti vendita del brand protetti
/admin/movements/income   -> Entrate protette
/admin/movements/expense  -> Uscite protette
/admin/movements/tumpune  -> Movimenti socio Tumpune protetti
/admin/movements/cirino   -> Movimenti socio Cirino protetti
/admin/report             -> Report finanziario protetto
```

Le rotte operative usano `ProtectedRoute`, che reindirizza a `/admin/login` se
la sessione demo non e presente in `localStorage`.

## Struttura file

```text
src/
  components/
    AdminCard.jsx
    AdminLayout.jsx
    MovementFilters.jsx
    MovementForm.jsx
    MovementTable.jsx
    ProtectedRoute.jsx

  pages/
    AdminDashboard.jsx
    AdminLogin.jsx
    AddMovement.jsx
    MovementsPage.jsx
    ReportPage.jsx
    SalesRevenuePage.jsx

  styles/
    admin-cards.css
    admin-dashboard.css
    admin-filters.css
    admin-form.css
    admin-layout.css
    admin-login.css
    admin-page.css
    admin-report.css
    admin-table.css

  utils/
    auth.js
    movements.js
```

## Template UI

Direzione visiva applicata:

```text
Sfondo:          #050402 / #090909
Accento:         #00ffff
Testo primario:  #ffffff
Testo secondario:#d1d5db / #9ca3af
Successo:        #34d399
Errore/Uscita:   #f87171
```

Pattern da mantenere:

- card scure con bordo ciano leggero
- pulsanti primari ciano, testo scuro
- input e select scuri con focus ciano
- sidebar compatta su desktop, overlay su mobile
- tabelle leggibili su desktop e trasformate in blocchi su mobile
- nessun link admin visibile nella vetrina pubblica

Template per una nuova card admin:

```jsx
<AdminCard
  title="Ordini PocketPet"
  value="12"
  icon="PET"
  color="primary"
  onClick={() => navigate('/admin/orders/pocketpet')}
/>
```

Template per una nuova voce sidebar:

```javascript
{ label: 'Ordini', path: '/admin/orders', icon: 'ORD' }
```

## Autenticazione demo

File:

```text
src/utils/auth.js
```

Chiave localStorage:

```text
pocketme_admin_auth
```

Funzioni:

```javascript
login(email, password)
logout()
isAuthenticated()
getAuthData()
```

Nota: questa autenticazione e solo dimostrativa. Non va usata in produzione per
dati reali o sensibili.

Template produzione consigliato:

```text
POST /api/admin/login
POST /api/admin/logout
GET  /api/admin/session
```

Sessione consigliata:

```json
{
  "user": {
    "id": "usr_admin_001",
    "email": "admin@pocketme.com",
    "role": "owner"
  },
  "expiresAt": "2026-06-17T18:00:00.000Z"
}
```

## Gestione movimenti

File:

```text
src/utils/movements.js
```

Chiave localStorage:

```text
pocketme_movements
```

Template movimento:

```json
{
  "id": "mov_123",
  "type": "income",
  "partner": "Tumpune",
  "source": "brand_sales",
  "amount": 149.9,
  "date": "2026-06-17",
  "category": "Vendita PocketMe",
  "description": "Ordine PocketMe personalizzato",
  "paymentMethod": "Bonifico",
  "product": "PocketMe",
  "quantity": 1,
  "createdAt": "2026-06-17T10:00:00.000Z",
  "updatedAt": "2026-06-17T10:00:00.000Z"
}
```

Origini contabili:

```text
Brand    -> ricavi vendite, costi generali e movimenti del marchio
Tumpune  -> movimenti legati direttamente al socio Tumpune
Cirino   -> movimenti legati direttamente al socio Cirino
```

Regola importante:

```text
Le vendite di prodotti PocketMe, PocketPet e PocketLove devono sempre avere
source "brand_sales".

Il campo partner/origine puo essere:
- "Brand" quando il ricavo resta generale del marchio
- "Tumpune" o "Cirino" quando il ricavo vendita viene attribuito a un socio

In questo modo il socio puo indicare che l'entrata gli viene attribuita, ma la
fonte contabile resta il ricavo generato dal brand.
```

Categorie attuali:

```text
Vendita PocketMe
Vendita PocketPet
Vendita PocketLove
Materiali
Produzione 3D
Packaging
Spedizioni
Marketing
Rimborsi
Altro
```

Metodi pagamento attuali:

```text
Contanti
Bonifico
Carta
PayPal
Altro
```

Funzioni disponibili:

```javascript
getAllMovements()
addMovement(movement)
updateMovement(id, updates)
deleteMovement(id)
getMovementById(id)
filterMovements(filters)
calculateTotals(movements)
calculateBrandSalesTotals()
getRecentMovements(limit)
getMovementsByPartner(partner)
calculateTotalsByPartner(partner)
getBrandSalesMovements()
getMovementOwnerLabel(movement)
getMovementSourceLabel(movement)
getCategories()
getPaymentMethods()
getProductTypes()
getMovementSources()
resetAllMovements()
```

## Funzionalita presenti

Dashboard:

- riepilogo entrate, uscite e saldo totale
- riepilogo ricavi vendita del brand
- statistiche separate per Tumpune e Cirino
- ultimi 5 movimenti
- card dei soci cliccabili verso i relativi movimenti
- card vendite cliccabili verso ricavi e archivio vendite

Movimenti:

- archivio completo
- viste filtrate per vendite brand, entrate, uscite e origine
- filtri per tipo, origine, categoria, testo e periodo
- modifica movimento tramite form inline
- eliminazione con conferma

Ricavi vendite:

- pagina dedicata `/admin/sales-revenue`
- prodotto venduto: PocketMe, PocketPet, PocketLove
- ricavo in euro
- quantita venduta
- attribuzione ricavo a Brand, Tumpune o Cirino
- data vendita
- metodo di pagamento opzionale
- descrizione o riferimento ordine opzionale
- salvataggio automatico con fonte `brand_sales`
- se il ricavo viene attribuito a un socio, resta comunque riconoscibile come
  ricavo da vendite del brand

Aggiunta movimento:

- tipo movimento
- origine: Brand, Tumpune o Cirino
- fonte movimento: Movimento brand, Ricavi vendite brand, Movimento socio, Altro
- importo
- data
- categoria PocketMe
- descrizione
- metodo di pagamento opzionale
- validazione dei campi obbligatori

Report:

- riepilogo generale
- riepilogo ricavi vendite brand
- dati separati per socio
- totale movimenti registrati
- media entrate/uscite calcolata su tutti i movimenti
- ultimi 15 movimenti

## Template API futura

Quando il gestionale passa da `localStorage` a backend, mantenere lo stesso
contratto dati e sostituire solo `src/utils/movements.js`.

Endpoint consigliati:

```text
GET    /api/admin/movements
POST   /api/admin/movements
GET    /api/admin/movements/:id
PATCH  /api/admin/movements/:id
DELETE /api/admin/movements/:id
GET    /api/admin/reports/summary
```

Payload creazione ricavo vendita:

```json
{
  "type": "income",
  "partner": "Cirino",
  "source": "brand_sales",
  "amount": 149.9,
  "date": "2026-06-17",
  "category": "Vendita PocketMe",
  "description": "Ordine PocketMe personalizzato",
  "paymentMethod": "Bonifico",
  "product": "PocketMe",
  "quantity": 1
}
```

Il payload sopra registra un'entrata attribuita a Cirino, ma la fonte resta
`brand_sales`: quindi non e un versamento personale del socio.

Payload creazione movimento generico:

```json
{
  "type": "expense",
  "partner": "Cirino",
  "amount": 32.5,
  "date": "2026-06-17",
  "category": "Packaging",
  "description": "Scatole regalo PocketLove",
  "paymentMethod": "Carta"
}
```

Risposta report consigliata:

```json
{
  "totals": {
    "income": 1200,
    "expense": 420,
    "balance": 780
  },
  "brandSales": {
    "revenue": 840,
    "quantity": 8,
    "count": 6
  },
  "partners": {
    "Tumpune": {
      "income": 700,
      "expense": 210,
      "balance": 490
    },
    "Cirino": {
      "income": 500,
      "expense": 210,
      "balance": 290
    }
  }
}
```

## Idee evolutive

Priorita alta:

- sostituire credenziali demo con login backend
- salvare movimenti su database
- mantenere i ricavi vendita separati dai movimenti dei soci
- aggiungere export CSV mensile
- aggiungere ruoli `owner`, `operator`, `viewer`
- aggiungere backup automatico dei movimenti

Priorita media:

- dashboard ordini da form preventivo e contatti EmailJS
- stato ordine: ricevuto, in modellazione, stampa, rifinitura, spedito
- anagrafica clienti e prodotti ordinati
- allegati foto cliente collegati all'ordine
- report mensile per prodotto PocketMe, PocketPet, PocketLove

Priorita bassa:

- grafici per andamento vendite
- notifiche interne per ordini in ritardo
- tema admin compatto per uso mobile in laboratorio
- sezione impostazioni per categorie e metodi pagamento

## Checklist produzione

Prima di usare dati reali:

- rimuovere credenziali demo dal frontend
- usare sessioni sicure lato server
- validare input anche lato backend
- proteggere endpoint admin con autorizzazione
- spostare i dati da `localStorage` a database
- aggiungere log di creazione, modifica ed eliminazione
- aggiungere export e backup
- verificare layout mobile e desktop

## Verifica tecnica

Comandi da eseguire dopo modifiche:

```bash
npm run lint
npm run build
npm run dev
```

Percorsi da controllare nel browser:

```text
/admin/login
/admin/dashboard
/admin/sales-revenue
/admin/add-movement
/admin/movements
/admin/movements/sales
/admin/movements/income
/admin/movements/expense
/admin/report
```
