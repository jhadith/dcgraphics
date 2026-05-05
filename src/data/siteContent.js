const localMediaAssets = import.meta.glob(
  [
    "../../imagenes/**/*.{jpg,jpeg,png,webp,gif,mp4,MP4}",
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
    { label: "Monday - Friday", value: "9am - 6pm" },
    { label: "Saturday", value: "10am - 3pm" },
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

export const businessSignsDropdown = [
  { label: "Window Graphics", href: "/window-graphics" },
  { label: "Channel Letters", href: "/channel-letters" },
  { label: "Light Box Signs", href: "/light-box-signs" },
  { label: "Pylon Signs", href: "/pylon-signs" },
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
    localMedia("bussinessSigns-jpg", "20230308_093419.jpg", "Business storefront sign project in Houston, TX"),
    localMedia("bussinessSigns-jpg", "20201110_142913.jpg", "Custom business sign installed by DG Graphics"),
    localMedia("bussinessSigns-jpg", "20221103_212849.jpg", "Illuminated storefront sign for a Houston business"),
    localMedia("bussinessSigns-jpg", "IMG-20221203-WA0005.jpg", "Business sign production sample"),
    localMedia("bussinessSigns-jpg", "IMG-20230823-WA0011.jpg", "Commercial sign example by DG Graphics"),
    localMedia("bussinessSigns-jpg", "IMG-20230823-WA0013.jpg", "Outdoor business signage sample"),
    localMedia("bussinessSigns-jpg", "IMG-20230915-WA0009.jpg", "Custom sign project detail"),
    localMedia("bussinessSigns-jpg", "IMG-20230915-WA0018.jpg", "Storefront sign project detail"),
  ],
  wraps: [
    localMedia("vehicleSigns-mp4", "20191024_150746.jpg", "Commercial vehicle graphics project"),
    localMedia("vehicleSigns-mp4", "20200313_162748.jpg", "Vehicle lettering and graphics detail"),
    localMedia("vehicleSigns-mp4", "20200313_162749.jpg", "Fleet vehicle graphics installed in Houston"),
    localMedia("vehicleSigns-mp4", "20191024_150719.mp4", "Vehicle graphics installation video"),
    localMedia("vehicleSigns-mp4", "20200313_162824.mp4", "Vehicle wrap and lettering video"),
  ],
  windows: [
    localMedia("windowSigns-jpg", "windows 7.png", "Full-color window signs project"),
    localMedia("windowSigns-jpg", "20230918_115702.jpg", "Storefront window graphics in Houston, TX"),
    localMedia("windowSigns-jpg", "20220927_140622.jpg", "Window vinyl graphics installation"),
    localMedia("windowSigns-jpg", "CEJAS WINDOWS SIGNS .jpg", "Window lettering and store information graphics"),
    localMedia("windowSigns-jpg", "CEJAS WINDOWS SIGNS 2 .jpg", "Storefront window signs project"),
    localMedia("windowSigns-jpg", "NAILS SAMPLE.jpg", "Nail salon window graphics sample"),
    localMedia("windowSigns-jpg", "window 3.jpg", "Window graphics design sample"),
    localMedia("windowSigns-jpg", "windows 4.jpg", "Window sign project example"),
  ],
  banners: [
    localMedia("promotionalSigns-jpd", "DG OUTDOOR SIGNS.png", "Outdoor promotional signs by DG Graphics"),
    localMedia("promotionalSigns-jpd", "20221213_102717.jpg", "Large promotional sign project"),
    localMedia("promotionalSigns-jpd", "IMG-20220804-WA0009.jpg", "Promotional yard signs"),
    localMedia("promotionalSigns-jpd", "IMG-20220804-WA0013.jpg", "Event and promotional sign sample"),
    localMedia("promotionalSigns-jpd", "z2wBBBRo-s1000.jpg", "Custom promotional sign example"),
    localMedia("promotionalSigns-jpd", "zCu2lAfi-s1000.jpg", "Printed promotional signage sample"),
  ],
  apparel: [
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

export const subServices = [
  {
    slug: "channel-letters",
    parentSlug: "business-signs",
    label: "Channel Letters",
    keyword: "channel letters Houston",
    title: "Channel letters in Houston, TX for storefront visibility.",
    summary:
      "Custom channel letters help your storefront look professional day and night with dimensional, illuminated signage built around your brand.",
    offerings: ["Front-lit letters", "Dimensional letters", "Storefront letters", "LED options", "Design support", "Installation guidance"],
    media: mediaLibrary.signs,
  },
  {
    slug: "light-box-signs",
    parentSlug: "business-signs",
    label: "Light Box Signs",
    keyword: "light box signs Houston",
    title: "Light box signs in Houston, TX for bright daily exposure.",
    summary:
      "Light box signs give businesses a clear illuminated presence for storefronts, plazas, and high-traffic locations.",
    offerings: ["Illuminated sign faces", "Cabinet signs", "Storefront light boxes", "Replacement faces", "Outdoor materials", "Installation support"],
    media: mediaLibrary.signs,
  },
  {
    slug: "pylon-signs",
    parentSlug: "business-signs",
    label: "Pylon Signs",
    keyword: "pylon signs Houston",
    title: "Pylon signs in Houston, TX for roadside business visibility.",
    summary:
      "Pylon and tall outdoor signs help customers find your business from the road, parking lot, or shopping center entrance.",
    offerings: ["Roadside signs", "Multi-tenant signs", "Outdoor sign faces", "Directional visibility", "Durable materials", "Quote guidance"],
    media: mediaLibrary.signs,
  },
  {
    slug: "full-wraps",
    parentSlug: "vehicle-graphics",
    label: "Full Wraps",
    keyword: "vehicle wraps Houston",
    title: "Full vehicle wraps in Houston, TX that turn vehicles into advertising.",
    summary:
      "Full wraps cover cars, trucks, vans, and fleet vehicles with brand graphics that promote your business everywhere you drive.",
    offerings: ["Full vehicle wraps", "Fleet wraps", "Van wraps", "Truck wraps", "Brand design", "Vinyl installation"],
    media: mediaLibrary.wraps,
  },
  {
    slug: "custom-banners",
    parentSlug: "promotional-signs",
    label: "Custom Banners",
    keyword: "banners Houston",
    title: "Custom banners in Houston, TX for events, openings, and promotions.",
    summary:
      "Banners are a fast, flexible way to promote grand openings, events, sales, real estate, and temporary business messages.",
    offerings: ["Vinyl banners", "Event banners", "Grand opening banners", "Outdoor banners", "Retractable options", "Fast quote support"],
    media: mediaLibrary.banners,
  },
  {
    slug: "business-cards",
    parentSlug: "printing-apparel",
    label: "Business Cards",
    keyword: "business cards Houston",
    title: "Business cards in Houston, TX for sharp first impressions.",
    summary:
      "Printed business cards keep your brand ready for meetings, networking, walk-ins, and customer follow-up.",
    offerings: ["Full-color cards", "Matte or glossy options", "Brand layout help", "Small business cards", "Print-ready artwork", "Local pickup"],
    media: mediaLibrary.apparel,
  },
];
