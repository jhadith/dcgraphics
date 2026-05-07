const localMediaAssets = import.meta.glob(
  [
    "../../imagenes/**/*.{jpg,jpeg,JPG,JPEG,png,webp,gif,mp4,MP4}",
    "!../../imagenes/infoDG-todos/T SHIRTS FLYER.png",
    "!../../imagenes/infoDG-todos/windogs flyer.png",
  ],
  {
    eager: true,
    import: "default",
    query: "?url",
  },
);

function localMedia(folder, filename, alt) {
  const key = `../../imagenes/${folder}/${filename}`;
  const src = localMediaAssets[key];

  if (!src) {
    throw new Error(`Missing media asset: ${key}`);
  }

  return {
    type: /\.(mp4|webm|mov)$/i.test(filename) ? "video" : "image",
    src,
    alt,
  };
}

export const contact = {
  phone: "346-213-2938",
  phoneHref: "tel:+13462132938",
  whatsappHref: "https://wa.me/13462132938",
  email: "info@dg-graphics.com",
  emailHref: "mailto:info@dg-graphics.com",
  address: "14130 Westheimer Rd, Suite C, Houston, TX 77077",
  shopAddress: "14130 Westheimer Rd, Houston, TX 77077, EE. UU.",
  mapHref: "https://www.google.com/maps/search/?api=1&query=14130%20Westheimer%20Rd%20Suite%20C%20Houston%20TX%2077077",
  mapEmbedHref:
    "https://www.google.com/maps?q=14130%20Westheimer%20Rd%20Suite%20C%2C%20Houston%2C%20TX%2077077&output=embed",
  hours: [
    { label: "Monday to Friday", value: "9.30AM to 5.45 PM" },
    { label: "Saturday", value: "10 am to 2 pm or call by appointment" },
  ],
  serviceAreas: ["Houston", "Katy", "Spring", "Sugar Land", "Fulshear", "The Woodlands", "Pearland"],
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Business Signs", href: "/business-signs" },
  { label: "Vehicle Graphics", href: "/vehicle-graphics" },
  { label: "Window Graphics", href: "/window-graphics" },
  { label: "Signs and Banners", href: "/promotional-signs" },
  { label: "Printing & Apparel", href: "/printing-apparel" },
  { label: "Our Work", href: "/our-work" },
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
  hero: [
    localMedia("infoDG-todos", "embr hats.jpeg", "Custom embroidered hats by DG Graphics"),
    localMedia("infoDG-todos", "embroidewry.jpeg", "Embroidery detail from DG Graphics apparel work"),
    localMedia("infoDG-todos", "lettering.gif", "Vinyl lettering sample from DG Graphics"),
    localMedia("infoDG-todos", "Window 5.jpg", "Window graphics project by DG Graphics"),
    localMedia("infoDG-todos", "window 6.webp", "Storefront window graphics sample"),
    localMedia("infoDG-todos", "WINDOW SIGNS SHIPPING CIA.mp4", "Window sign installation and shipping graphics sample"),
    localMedia("infoDG-todos", "windows 4.jpg", "Window signs project example"),
  ],
  signs: [
    localMedia("bussinessSigns-jpg/bussinessSignsNew", "creativefabrica-ai-image-editor-0-bot (4).png", "Custom business sign concept by DG Graphics"),
    localMedia("bussinessSigns-jpg/bussinessSignsNew", "creativefabrica-ai-image-editor-0-bot (5).png", "Custom storefront sign concept by DG Graphics"),
    localMedia("bussinessSigns-jpg/bussinessSignsNew", "dealer sign.png", "Dealer business sign project by DG Graphics"),
    localMedia("bussinessSigns-jpg/bussinessSignsNew", "medical clinic.png", "Medical clinic storefront sign project"),
    localMedia("bussinessSigns-jpg/bussinessSignsNew", "snow channel.png", "Channel letter sign project sample"),
    localMedia("bussinessSigns-jpg/bussinessSignsNew", "TREASURE FOR LESS.png", "Treasure For Less storefront sign project"),
    localMedia("bussinessSigns-jpg", "20230308_093419.jpg", "Business storefront sign project in Houston, TX"),
    localMedia("bussinessSigns-jpg", "20201110_142913.jpg", "Custom business sign installed by DG Graphics"),
    localMedia("bussinessSigns-jpg", "20221103_212849.jpg", "Illuminated storefront sign for a Houston business"),
    localMedia("bussinessSigns-jpg", "IMG-20221203-WA0005.jpg", "Business sign production sample"),
    localMedia("bussinessSigns-jpg", "IMG-20230823-WA0011.jpg", "Commercial sign example by DG Graphics"),
    localMedia("bussinessSigns-jpg", "IMG-20230823-WA0013.jpg", "Outdoor business signage sample"),
    localMedia("bussinessSigns-jpg", "IMG-20230915-WA0009.jpg", "Custom sign project detail"),
  ],
  wraps: [
    localMedia("vehicleSigns-mp4/vehicleSignsNew", "20200903_092533.jpg", "Vehicle graphics project by DG Graphics"),
    localMedia("vehicleSigns-mp4/vehicleSignsNew", "BIG TRUCK SIGN.png", "Large truck sign graphics project"),
    localMedia("vehicleSigns-mp4/vehicleSignsNew", "CDKF0696.JPG", "Commercial vehicle wrap project"),
    localMedia("vehicleSigns-mp4/vehicleSignsNew", "FAMILY HOUSE CLEANING CAR SIGNS .jpg", "Cleaning company vehicle lettering project"),
    localMedia("vehicleSigns-mp4/vehicleSignsNew", "truck signs.png", "Truck signs and vehicle graphics sample"),
    localMedia("vehicleSigns-mp4/vehicleSignsNew", "VIGIA TRUCK 2.jpeg", "Vigia truck graphics detail"),
    localMedia("vehicleSigns-mp4/vehicleSignsNew", "VIGIA TRUCK.jpeg", "Vigia truck graphics project"),
    localMedia("vehicleSigns-mp4", "20191024_150746.jpg", "Commercial vehicle graphics project"),
    localMedia("vehicleSigns-mp4", "20200313_162748.jpg", "Vehicle lettering and graphics detail"),
    localMedia("vehicleSigns-mp4", "20200313_162749.jpg", "Fleet vehicle graphics installed in Houston"),
    localMedia("vehicleSigns-mp4", "20191024_150719.mp4", "Vehicle graphics installation video"),
    localMedia("vehicleSigns-mp4", "20200313_162824.mp4", "Vehicle wrap and lettering video"),
  ],
  windows: [
    localMedia("windowSigns-jpg", "windows 7.png", "Full-color window signs project"),
    localMedia("windowSigns-jpg/windowSignsNew", "WhatsApp Video 2026-05-06 at 3.33.57 PM.mp4", "Window graphics installation video"),
    localMedia("windowSigns-jpg/windowSignsNew", "WhatsApp Video 2026-05-06 at 3.43.06 PM.mp4", "Window graphics project video"),
    localMedia("windowSigns-jpg/windowSignsNew", "wicndow church.mp4", "Church window graphics project video"),
    localMedia("windowSigns-jpg/windowSignsNew", "window installation.mp4", "Window sign installation video"),
    localMedia("windowSigns-jpg", "20220927_140622.jpg", "Window vinyl graphics installation"),
    localMedia("windowSigns-jpg", "CEJAS WINDOWS SIGNS .jpg", "Window lettering and store information graphics"),
    localMedia("windowSigns-jpg", "CEJAS WINDOWS SIGNS 2 .jpg", "Storefront window signs project"),
    localMedia("windowSigns-jpg", "NAILS SAMPLE.jpg", "Nail salon window graphics sample"),
    localMedia("windowSigns-jpg", "window 3.jpg", "Window graphics design sample"),
  ],
  banners: [
    localMedia("promotionalSigns-jpd/PromotionalSignsNew", "20221213_102717 (1).jpg", "Large promotional sign project by DG Graphics"),
    localMedia("promotionalSigns-jpd/PromotionalSignsNew", "20230914_162007.jpg", "Promotional sign production sample"),
    localMedia("promotionalSigns-jpd/PromotionalSignsNew", "magnet sign.png", "Custom magnet sign sample"),
    localMedia("promotionalSigns-jpd/PromotionalSignsNew", "PRINTING PRODUCTS.png", "Printed promotional products by DG Graphics"),
    localMedia("promotionalSigns-jpd/PromotionalSignsNew", "tent.png", "Custom printed tent signage"),
    localMedia("promotionalSigns-jpd/PromotionalSignsNew", "uf4fTjWs-s1000.jpg", "Promotional signage sample"),
    localMedia("promotionalSigns-jpd/PromotionalSignsNew", "walk sign.png", "Walk sign promotional display"),
    localMedia("promotionalSigns-jpd/PromotionalSignsNew", "WhatsApp Image 2022-08-10 at 9.29.11 AM (1).jpeg", "Printed promotional sign sample"),
    localMedia("promotionalSigns-jpd/PromotionalSignsNew", "yard sign.png", "Custom yard sign project"),
    localMedia("promotionalSigns-jpd", "DG OUTDOOR SIGNS.png", "Outdoor promotional signs by DG Graphics"),
    localMedia("promotionalSigns-jpd", "IMG-20220804-WA0009.jpg", "Promotional yard signs"),
    localMedia("promotionalSigns-jpd", "IMG-20220804-WA0013.jpg", "Event and promotional sign sample"),
    localMedia("promotionalSigns-jpd", "z2wBBBRo-s1000.jpg", "Custom promotional sign example"),
    localMedia("promotionalSigns-jpd", "zCu2lAfi-s1000.jpg", "Printed promotional signage sample"),
  ],
  apparel: [
    localMedia("printigAndAppareal-todos/PrintingAndApparelNew", "EMBROIDERY POLO ICT.mp4", "Embroidery polo production video"),
    localMedia("printigAndAppareal-todos/PrintingAndApparelNew", "embroidery.mp4", "Embroidery production sample video"),
    localMedia("printigAndAppareal-todos/PrintingAndApparelNew", "htx sample.png", "Custom HTX apparel printing sample"),
    localMedia("printigAndAppareal-todos/PrintingAndApparelNew", "WhatsApp Video 2026-05-06 at 3.21.17 PM.mp4", "Printing and apparel production video"),
    localMedia("printigAndAppareal-todos", "20220616_114951.jpg", "Custom printed apparel project"),
    localMedia("printigAndAppareal-todos", "20221115_171619 (1).jpg", "Business printing and apparel sample"),
    localMedia("printigAndAppareal-todos", "IMG-20230227-WA0009.jpg", "Printed apparel detail"),
    localMedia("printigAndAppareal-todos", "IMG-20230328-WA0057.jpg", "Custom shirt printing sample"),
    localMedia("printigAndAppareal-todos", "IMG-20230329-WA0017.jpg", "Apparel printing project"),
    localMedia("printigAndAppareal-todos", "WhatsApp Image 2022-12-24 at 10.00.26 AM (1).jpeg", "Custom printed products sample"),
    localMedia("printigAndAppareal-todos", "CGQP6052.MP4", "Printing and apparel production video"),
    localMedia("printigAndAppareal-todos", "EMBROIDERY POLO ICT.mp4", "Embroidery polo production video"),
  ],
};

export const services = [
  {
    slug: "business-signs",
    label: "Business Signs",
    eyebrow: "sign company Houston",
    keyword: "sign company Houston",
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
    slug: "vehicle-graphics",
    label: "Vehicle Graphics",
    eyebrow: "vehicle wraps Houston",
    keyword: "vehicle wraps Houston",
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
    eyebrow: "window graphics Houston",
    keyword: "window graphics Houston",
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
    eyebrow: "promotional signs Houston",
    keyword: "promotional signs Houston",
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
    eyebrow: "printing and apparel Houston",
    keyword: "printing and apparel Houston",
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

export const workTopics = [
  { label: "Business Signs", slug: "business-signs", media: mediaLibrary.signs },
  { label: "Vehicle Graphics", slug: "vehicle-graphics", media: mediaLibrary.wraps },
  { label: "Window Graphics", slug: "window-graphics", media: mediaLibrary.windows },
  { label: "Promotional Signs", slug: "promotional-signs", media: mediaLibrary.banners },
  { label: "Printing & Apparel", slug: "printing-apparel", media: mediaLibrary.apparel },
];
