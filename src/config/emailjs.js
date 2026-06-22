export const EMAILJS_SERVICE_ID =
  import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_rrkclsy'

export const EMAILJS_QUOTE_TEMPLATE_ID =
  import.meta.env.VITE_EMAILJS_QUOTE_TEMPLATE_ID ||
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID ||
  'template_b2wh41q'

export const EMAILJS_CONTACT_TEMPLATE_ID =
  import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID ||
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID ||
  EMAILJS_QUOTE_TEMPLATE_ID

export const EMAILJS_PUBLIC_KEY =
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'gcFZOY9GOjN_NrOLb'
