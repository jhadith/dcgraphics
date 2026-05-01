export const contact = {
  phone: "346-213-2938",
  phoneHref: "tel:+13462132938",
  whatsappHref: "https://wa.me/13462132938",
  email: "info@dg-graphics.com",
  emailHref: "mailto:info@dg-graphics.com",
  address: "14130 Westheimer Rd, Suite C, Houston, TX 77077",
  mapHref: "https://www.google.com/maps/search/?api=1&query=14130%20Westheimer%20Rd%20Suite%20C%20Houston%20TX%2077077",
  hours: [
    { label: "Monday - Friday", value: "9am - 6pm" },
    { label: "Saturday", value: "10am - 3pm" },
  ],
  serviceAreas: ["Houston", "Katy", "Spring", "Sugar Land", "Fulshear", "The Woodlands", "Pearland"],
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Business Signs", href: "/business-signs" },
  { label: "Vehicle Wraps", href: "/vehicle-wraps" },
  { label: "Window Graphics", href: "/window-graphics" },
  { label: "Banners", href: "/promotional-signs" },
  { label: "Printing & Apparel", href: "/printing-apparel" },
  { label: "Contact", href: "/contact" },
];

export const sharedBenefits = [
  {
    title: "Custom design support",
    text: "Bring a logo, a sketch, or just an idea. The team helps shape it into production-ready artwork.",
  },
  {
    title: "Local Houston production",
    text: "Work directly with a nearby print and sign shop instead of a distant online vendor.",
  },
  {
    title: "Quote-first process",
    text: "Call, WhatsApp, or send photos to get a fast estimate before production begins.",
  },
];

export const testimonials = [
  {
    name: "Star Techn. Foundation Repair",
    quote:
      "Great quality service. Loved our business printed shirts. Yard signs look amazing and good quality work material.",
  },
  {
    name: "Joshua Walker",
    quote:
      "DG Graphics is awesome. Very professional, A+ customer service. Diego is amazing. Fair pricing.",
  },
  {
    name: "Marvin Santos",
    quote:
      "Very professional. Diego helped me clarify my ideas for my business card. I highly recommend DG Graphics LLC.",
  },
];

export const mediaLibrary = {
  signs: [
    { type: "image", src: "https://dg-graphics.com/wp-content/uploads/2026/04/2.png", alt: "Installed channel letter sign" },
    { type: "video", src: "https://dg-graphics.com/wp-content/uploads/2026/04/Channel-letters-5.mp4", alt: "Channel letter sign production" },
  ],
  wraps: [
    { type: "image", src: "https://dg-graphics.com/wp-content/uploads/2026/04/10.png", alt: "Commercial vehicle wrap" },
    { type: "image", src: "https://dg-graphics.com/wp-content/uploads/2026/04/vehicule-warp.png", alt: "Vehicle wrap detail" },
    { type: "video", src: "https://dg-graphics.com/wp-content/uploads/2026/04/Vehicle-Wraps-1.mp4", alt: "Vehicle wrap installation" },
  ],
  windows: [
    { type: "image", src: "https://dg-graphics.com/wp-content/uploads/2026/04/12.png", alt: "Storefront window graphics" },
    { type: "image", src: "https://dg-graphics.com/wp-content/uploads/2026/04/9.png", alt: "Window vinyl installation" },
  ],
  banners: [
    { type: "image", src: "https://dg-graphics.com/wp-content/uploads/2026/04/5.png", alt: "Promotional banner and signs" },
  ],
  apparel: [
    { type: "image", src: "https://dg-graphics.com/wp-content/uploads/2026/04/7.png", alt: "Custom printed apparel" },
    { type: "image", src: "https://dg-graphics.com/wp-content/uploads/2026/04/3.png", alt: "Printed business products" },
    { type: "video", src: "https://dg-graphics.com/wp-content/uploads/2026/04/Printing-Apparel.mp4", alt: "Printing and apparel production" },
  ],
};

export const services = [
  {
    slug: "business-signs",
    label: "Business Signs",
    eyebrow: "Houston sign maker",
    title: "Business signs built to make your storefront stand out.",
    summary:
      "Custom front signs, channel letters, light boxes, LED signs, lobby signs, and outdoor signage designed, produced, and installed in Houston.",
    process: "Design - Produce - Install",
    highlights: ["Permit assistance", "Front signs", "Channel letters", "Light boxes", "LED signs", "Lobby signs"],
    offerings: [
      "Front signs",
      "Canopy signs",
      "Interior signs",
      "Dimensional letters",
      "Outdoor signs",
      "Commercial sign installation",
    ],
    benefits: [
      {
        title: "Permit assistance",
        text: "Guidance through the sign permit process so the project can move with fewer delays.",
      },
      {
        title: "Built for Houston weather",
        text: "Materials are selected for heat, rain, humidity, and daily outdoor exposure.",
      },
      {
        title: "Professional installation",
        text: "Signs are installed with attention to placement, finish, and long-term durability.",
      },
    ],
    media: mediaLibrary.signs,
  },
  {
    slug: "vehicle-wraps",
    label: "Vehicle Wraps",
    eyebrow: "Houston wrap shop",
    title: "Turn cars, trucks, vans, and fleets into moving billboards.",
    summary:
      "Full wraps, partial wraps, fleet graphics, vehicle lettering, decals, and color-change wraps with design and installation support.",
    process: "Design - Produce - Install",
    highlights: ["Full wraps", "Partial wraps", "Fleet graphics", "Truck wraps", "Van wraps", "3M vinyl"],
    offerings: ["Full vehicle wraps", "Partial wraps", "Fleet lettering", "Vinyl decals", "Color change wraps", "Car wrap installation"],
    benefits: [
      {
        title: "One-time advertising investment",
        text: "A wrap promotes the business every day without recurring ad spend.",
      },
      {
        title: "Premium vinyl",
        text: "Wrap materials are chosen to handle Houston sun, rain, and humidity.",
      },
      {
        title: "Clean installation",
        text: "Installed with care for a sharp finish across curves, panels, and edges.",
      },
    ],
    media: mediaLibrary.wraps,
  },
  {
    slug: "window-graphics",
    label: "Window Graphics",
    eyebrow: "Storefront visibility",
    title: "Make windows work harder for your brand.",
    summary:
      "Window decals, frosted vinyl, perforated graphics, privacy film, storefront lettering, and full-color window graphics.",
    process: "Design - Produce - Install",
    highlights: ["Window decals", "Frosted vinyl", "Perforated vinyl", "Privacy film", "Logo on glass", "Window tinting"],
    offerings: ["Storefront graphics", "Hours decals", "Full-color graphics", "Glass logos", "Removable vinyl", "Privacy graphics"],
    benefits: [
      {
        title: "Street-level impact",
        text: "Use storefront glass to communicate services, hours, promotions, and brand personality.",
      },
      {
        title: "Removable options",
        text: "Update seasonal graphics or offers without damaging the glass.",
      },
      {
        title: "Clean application",
        text: "Vinyl is installed to reduce bubbles, wrinkles, and alignment issues.",
      },
    ],
    media: mediaLibrary.windows,
  },
  {
    slug: "promotional-signs",
    label: "Promotional Signs & Banners",
    eyebrow: "Fast-turnaround signage",
    title: "Banners and promotional signs for events, launches, and daily visibility.",
    summary:
      "Cost-effective banners, yard signs, flags, A-frame signs, retractable banners, real estate signs, and grand opening materials.",
    process: "Design - Produce - Deliver",
    highlights: ["Banners", "Yard signs", "Flags", "A-frame signs", "Event signage", "24-48 hour options"],
    offerings: ["Retractable banners", "Grand opening banners", "Flat signs", "Real estate signs", "Custom flags", "Event signs"],
    benefits: [
      {
        title: "Fast quotes",
        text: "Ideal for urgent promotions, events, and openings that need a quick response.",
      },
      {
        title: "Budget-friendly formats",
        text: "Choose from temporary, reusable, indoor, and outdoor sign options.",
      },
      {
        title: "Design help available",
        text: "Send a concept or message and DG Graphics can prepare artwork for production.",
      },
    ],
    media: mediaLibrary.banners,
  },
  {
    slug: "printing-apparel",
    label: "Printing & Apparel",
    eyebrow: "Print shop and apparel",
    title: "Business printing and branded apparel under one roof.",
    summary:
      "Business cards, flyers, menus, brochures, stickers, labels, DTF transfers, custom shirts, embroidered hats, polos, uniforms, and event apparel.",
    process: "Design - Print - Deliver",
    highlights: ["Business cards", "Flyers", "Menus", "DTF transfers", "Custom shirts", "Embroidery"],
    offerings: [
      "Brochures",
      "Postcards",
      "Stickers and labels",
      "Full-color shirts",
      "Uniforms and work shirts",
      "Hats, polos, hoodies, and jackets",
    ],
    benefits: [
      {
        title: "Two clear product paths",
        text: "Print materials and custom apparel can be quoted together for launches, events, and teams.",
      },
      {
        title: "DTF and screen print options",
        text: "Pick the production method that fits the artwork, quantity, and garment type.",
      },
      {
        title: "Brand consistency",
        text: "Keep cards, flyers, uniforms, and promotional items aligned across the business.",
      },
    ],
    media: mediaLibrary.apparel,
  },
];
