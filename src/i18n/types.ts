export interface SeasonPrice {
  name: string;
  period: string;
  price: string;
  highlight: boolean;
}

export interface FormTranslations {
  name: string;
  namePlaceholder: string;
  email: string;
  emailPlaceholder: string;
  room: string;
  roomDefault: string;
  checkin: string;
  checkout: string;
  message: string;
  messagePlaceholder: string;
  submit: string;
  submitting: string;
  successTitle: string;
  successMsg: string;
  errorMsg: string;
}

export interface Translations {
  nav: {
    gallery: string;
    booking: string;
    location: string;
    prices: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  gallery: {
    title: string;
    subtitle: string;
  };
  booking: {
    title: string;
    subtitle: string;
    bookOnAirbnb: string;
    comingSoon: string;
    emailCta: string;
  };
  location: {
    title: string;
    subtitle: string;
    description: string;
    address: string;
    openMap: string;
  };
  prices: {
    title: string;
    subtitle: string;
    airbnbCard: {
      label: string;
      note: string;
      cta: string;
    };
    discountCard: {
      badge: string;
      title: string;
      desc: string;
      cta: string;
    };
    minStay: string;
  };
  form: FormTranslations;
  footer: {
    tagline: string;
    contact: string;
    rights: string;
  };
}
