import type { Translations } from './types';

export const en: Translations = {
  nav: {
    gallery: 'Gallery',
    booking: 'Book',
    location: 'Location',
    prices: 'Prices',
  },
  hero: {
    badge: 'City, Region — Italy', // ✏️
    title: 'Your home steps from the sea', // ✏️
    subtitle:
      'Short description of the property and its ideal location.', // ✏️
    ctaPrimary: 'Book now',
    ctaSecondary: 'Discover the rooms',
  },
  gallery: {
    title: 'The Property', // ✏️
    subtitle: 'Welcoming spaces for your holiday', // ✏️
  },
  booking: {
    title: 'Choose your room',
    subtitle:
      'The property has 3 private double rooms. Book on Airbnb or contact us for a discount.', // ✏️
    bookOnAirbnb: 'Book on Airbnb',
    comingSoon: 'Coming soon',
    emailCta: 'Send us an email',
  },
  location: {
    title: 'Location',
    subtitle: 'In the heart of [City], easy to reach', // ✏️
    description:
      'Description of the location, nearby services, and how to reach the property.', // ✏️
    address: 'Via Example, 1 — 00000 City (XX)', // ✏️
    openMap: 'Open in Google Maps',
  },
  prices: {
    title: 'Prices',
    subtitle: 'Up-to-date rates on Airbnb. Book by email for an exclusive discount.',
    airbnbCard: {
      label: 'Official rates',
      note: 'Prices vary by season and availability. Check Airbnb for real-time rates.', // ✏️
      cta: 'View prices on Airbnb',
    },
    discountCard: {
      badge: 'Exclusive offer',
      title: 'Book by email, save more',
      desc: 'If your dates are available and you book by email, we apply a discount vs. Airbnb.', // ✏️
      cta: 'Request the discount',
    },
    minStay: 'Minimum stay: 2 nights', // ✏️
  },
  form: {
    name: 'Name',
    namePlaceholder: 'Your name',
    email: 'Email',
    emailPlaceholder: 'your@email.com',
    room: 'Room',
    roomDefault: 'Choose a room',
    checkin: 'Check-in date',
    checkout: 'Check-out date',
    message: 'Message (optional)',
    messagePlaceholder: 'Questions, special requests…',
    submit: 'Send request',
    submitting: 'Sending…',
    successTitle: 'Request sent!',
    successMsg: 'Thank you for writing to us. We will reply within 24 hours.',
    errorMsg: 'Something went wrong. Please try again or email us directly.',
  },
  footer: {
    tagline: 'Holiday home — [City]', // ✏️
    contact: 'Contact',
    rights: '© 2025 [Property Name]. All rights reserved.', // ✏️
  },
};
