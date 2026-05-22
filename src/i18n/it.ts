import type { Translations } from './types';

export const it: Translations = {
  nav: {
    gallery: 'Galleria',
    booking: 'Prenota',
    location: 'Dove Siamo',
    prices: 'Prezzi',
  },
  hero: {
    badge: 'Città, Regione — Italia', // ✏️
    title: 'La tua casa a 2 passi dal mare', // ✏️
    subtitle:
      'Descrizione breve della struttura e della sua posizione ideale.', // ✏️
    ctaPrimary: 'Prenota ora',
    ctaSecondary: 'Scopri le camere',
  },
  gallery: {
    title: 'La Struttura', // ✏️
    subtitle: 'Spazi accoglienti per le tue vacanze', // ✏️
  },
  booking: {
    title: 'Scegli la tua camera',
    subtitle:
      'La struttura dispone di 3 camere doppie private. Prenota su Airbnb o contattaci per uno sconto.', // ✏️
    bookOnAirbnb: 'Prenota su Airbnb',
    comingSoon: 'In arrivo',
    emailCta: "Scrivici un'email",
  },
  location: {
    title: 'Dove Siamo',
    subtitle: 'Nel cuore di [Città], facilmente raggiungibile', // ✏️
    description:
      'Descrizione della posizione, dei servizi nelle vicinanze e di come raggiungere la struttura.', // ✏️
    address: 'Via Example, 1 — 00000 Città (XX)', // ✏️
    openMap: 'Apri in Google Maps',
  },
  prices: {
    title: 'Prezzi',
    subtitle: 'Tariffe aggiornate su Airbnb. Prenota via email per uno sconto esclusivo.',
    airbnbCard: {
      label: 'Tariffe ufficiali',
      note: 'I prezzi variano in base alla stagione e alla disponibilità. Consulta Airbnb per le tariffe aggiornate.', // ✏️
      cta: 'Vedi i prezzi su Airbnb',
    },
    discountCard: {
      badge: 'Offerta esclusiva',
      title: 'Prenota via email, risparmi di più',
      desc: 'Se le date sono disponibili e prenoti via email, applichiamo uno sconto rispetto ad Airbnb.', // ✏️
      cta: 'Richiedi lo sconto',
    },
    minStay: 'Soggiorno minimo: 2 notti', // ✏️
  },
  form: {
    name: 'Nome',
    namePlaceholder: 'Il tuo nome',
    email: 'Email',
    emailPlaceholder: 'la-tua@email.com',
    room: 'Camera',
    roomDefault: 'Scegli una camera',
    checkin: 'Data di arrivo',
    checkout: 'Data di partenza',
    message: 'Messaggio (opzionale)',
    messagePlaceholder: 'Domande, richieste particolari…',
    submit: 'Invia richiesta',
    submitting: 'Invio in corso…',
    successTitle: 'Richiesta inviata!',
    successMsg: 'Grazie per averci scritto. Ti risponderemo entro 24 ore.',
    errorMsg: 'Si è verificato un errore. Riprova o scrivici direttamente.',
  },
  footer: {
    tagline: 'Casa vacanze — [Città]', // ✏️
    contact: 'Contatti',
    rights: '© 2025 [Nome Struttura]. Tutti i diritti riservati.', // ✏️
  },
};
