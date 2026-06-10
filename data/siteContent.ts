export const siteContent = {
  name: 'Bella Vista Bistro',
  tagline:
    'Seasonal Italian-inspired plates, candlelit tables, and neighborhood warmth from lunch through late evening.',
  aboutParagraphs: [
    'Bella Vista Bistro was imagined as the sort of place where dinner can stretch comfortably past dessert. The room is warm, the lighting is low, and the menu balances familiar Italian comfort with a polished neighborhood feel.',
    'Our kitchen leans on seasonal ingredients, handmade elements, and shareable plates that work just as well for casual weeknights as they do for celebrations. It is a flexible, welcoming space built for locals, travelers, and anyone who wants an easy, memorable meal.',
    'This website keeps things intentionally simple: browse the menu, check the hours, look through gallery placeholders, and send an inquiry or reservation request without any heavy backend setup.',
  ],
  address: {
    street: '214 Orchard Lane',
    city: 'San Francisco',
    state: 'CA',
    zip: '94107',
  },
  phone: '(415) 555-0147',
  phoneRaw: '+14155550147',
  email: 'hello@bellavistabistro.com',
  hours: [
    { day: 'Monday', hours: '4:00 PM – 9:00 PM' },
    { day: 'Tuesday', hours: '4:00 PM – 9:00 PM' },
    { day: 'Wednesday', hours: '4:00 PM – 9:30 PM' },
    { day: 'Thursday', hours: '4:00 PM – 9:30 PM' },
    { day: 'Friday', hours: '4:00 PM – 10:30 PM' },
    { day: 'Saturday', hours: '11:00 AM – 10:30 PM' },
    { day: 'Sunday', hours: '11:00 AM – 8:30 PM' },
  ],
  socialLinks: [
    { label: 'Instagram', href: '#' },
    { label: 'Facebook', href: '#' },
    { label: 'TikTok', href: '#' },
  ],
} as const
