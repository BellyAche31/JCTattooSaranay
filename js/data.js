/**
 * Site content config. Edit the values below to update the site —
 * every field marked TODO is a placeholder and should be replaced
 * with real business info before launch.
 */
const SITE = {
  businessName: "JCTATTOO Saranay",
  shortName: "JCTATTOO",
  tagline: "Tattoo & Body Piercing",
  motto: "You Think It, We Ink It",

  location: "Saranay Road, North Caloocan, Caloocan City, Philippines 1421",
  mapsUrl: "https://share.google/DCXSFshg1ObL0ouDX",

  phone: "0991 240 1492",

  // TODO: replace with real email if the shop uses one
  email: "",

  instagramHandle: "@jcstattoo0503",
  instagramUrl: "https://instagram.com/jcstattoo0503",

  // TODO: add the shop's Facebook page URL (page name is "JCTattoo Saranay")
  facebookUrl: "",
  tiktokUrl: "",

  // TODO: confirm whether these are opening or closing times, and that they're current
  hours: [
    { day: "Monday", time: "8:30 PM" },
    { day: "Tuesday", time: "8:30 PM" },
    { day: "Wednesday", time: "6:00 PM" },
    { day: "Thursday", time: "6:00 PM" },
    { day: "Friday", time: "8:30 PM" },
    { day: "Saturday", time: "6:00 PM" },
    { day: "Sunday", time: "6:00 PM" },
  ],

  // TODO: replace with the artist's real name and bio
  artist: {
    name: "JC",
    bio: "Tattoo artist and piercer at JCTATTOO Saranay, specializing in fine line, illustrative, and lettering work — plus safe, professional body piercing.",
  },

  services: [
    {
      title: "Custom Tattoos",
      description:
        "Fine line, illustrative, lettering, and traditional-style tattoos, designed around your idea and placement.",
    },
    {
      title: "Body Piercing",
      description:
        "Professional, hygienic piercing services using sterile equipment and quality jewelry. See the full piercing price list below.",
    },
    {
      title: "Consultations",
      description:
        "Not sure what you want yet? Send a message with your idea, size, and placement for a free consultation.",
    },
  ],

  currency: "₱",

  // Tattoo rates. Only the minimalist rate is a fixed number — everything
  // bigger is quoted per design, so don't invent prices here.
  tattooPricing: [
    {
      name: "Minimalist Tattoo",
      price: 600,
      blurb: "Small, simple line work — script, symbols, tiny fine line pieces.",
    },
    {
      name: "Custom & Larger Pieces",
      price: null,
      priceLabel: "Quoted",
      blurb: "Priced per design based on size, detail and placement. Send your idea for a quote.",
    },
  ],

  // Piercing price list — default jewelry only, per the shop's posted rate card.
  piercingPricing: [
    {
      category: "Ear Piercings",
      items: [
        { name: "Standard Lobe", price: 200 },
        { name: "Upper Lobe", price: 200 },
        { name: "Triple Lobe", price: 200 },
        { name: "Helix / Mid Helix", price: 250 },
        { name: "Forward Helix", price: 250 },
        { name: "Tragus", price: 280 },
        { name: "Anti-Tragus", price: 280 },
        { name: "Conch", price: 280 },
        { name: "Flat", price: 280 },
        { name: "Rook", price: 300 },
        { name: "Faux Rook", price: 300 },
        { name: "Daith", price: 300 },
      ],
    },
    {
      category: "Lip Piercings",
      items: [
        { name: "Medusa", price: 290 },
        { name: "Monroe", price: 290 },
        { name: "Ashley", price: 290 },
        { name: "Labret", price: 290 },
        { name: "Vertical Labret", price: 290 },
        { name: "Spider Bites", price: 450 },
        { name: "Snake Bites", price: 450 },
        { name: "Shark Bites", price: 450 },
        { name: "Dahlia", price: 450 },
      ],
    },
    {
      category: "Facial Piercings",
      items: [
        { name: "Nostril", price: 280 },
        { name: "Double Nostril", price: 350 },
        { name: "Septum", price: 300 },
        { name: "Bridge", price: 400 },
        { name: "Eyebrow", price: 380 },
        { name: "Both Eyebrow", price: 600 },
      ],
    },
    {
      category: "Body Piercings",
      items: [
        { name: "Nipple", price: 300 },
        { name: "Both Nipple", price: 600 },
        { name: "Navel / Belly", price: 300 },
      ],
    },
    {
      category: "Oral Piercings",
      items: [
        { name: "Tongue", price: 300 },
        { name: "Smiley", price: 300 },
      ],
    },
  ],

  portfolio: [
    {
      src: "assets/portfolio/fine-line-hand.jpeg",
      alt: "Fine line hand tattoos — sparkles, heart, and dotwork",
      tag: "Fine Line",
    },
    {
      src: "assets/portfolio/dragon-sleeve.jpeg",
      alt: "Fine line dragon tattoos on upper arm",
      tag: "Illustrative",
    },
    {
      src: "assets/portfolio/lily-hip.jpeg",
      alt: "Fine line lily flower tattoo with flourishes",
      tag: "Fine Line",
    },
    {
      src: "assets/portfolio/script-shoulder.jpeg",
      alt: "Script lettering tattoo across the shoulder blade",
      tag: "Lettering",
    },
    {
      src: "assets/portfolio/tribal-back.jpeg",
      alt: "Tribal-style lower back tattoo",
      tag: "Tribal",
    },
    {
      src: "assets/portfolio/wave-calf.jpeg",
      alt: "Fine line ocean wave tattoo on the calf",
      tag: "Fine Line",
    },
    {
      src: "assets/portfolio/floral-shoulder.jpeg",
      alt: "Fine line floral vine tattoo across the shoulder",
      tag: "Fine Line",
    },
    {
      src: "assets/portfolio/koala-arm.jpeg",
      alt: "Minimal koala outline tattoo on the forearm",
      tag: "Fine Line",
    },
    {
      src: "assets/portfolio/sun-moon-matching.jpeg",
      alt: "Matching sun and moon tattoos, \"live by the sun, love by the moon\"",
      tag: "Fine Line",
    },
    {
      src: "assets/portfolio/eye-portrait.jpeg",
      alt: "Illustrative sketch-style eye portrait tattoo",
      tag: "Illustrative",
    },
    {
      src: "assets/portfolio/bow-wrists-matching.jpeg",
      alt: "Matching red fine line bow tattoos on two wrists",
      tag: "Fine Line",
    },
    {
      src: "assets/portfolio/lip-piercing.jpeg",
      alt: "Vertical labret lip piercings with spike jewelry",
      tag: "Piercing",
    },
    {
      src: "assets/portfolio/bow-bicep.jpeg",
      alt: "Traditional-style shaded bow tattoo on the bicep",
      tag: "Traditional",
    },
    {
      src: "assets/portfolio/elephant-arm.jpeg",
      alt: "Illustrative dotwork elephant tattoo on the shoulder",
      tag: "Illustrative",
    },
    {
      src: "assets/portfolio/ear-piercing-1.jpeg",
      alt: "Curated ear piercing set: rook, tragus, and lobe",
      tag: "Piercing",
    },
    {
      src: "assets/portfolio/cherub-cloud.jpeg",
      alt: "Fine line cherub sleeping on a cloud tattoo",
      tag: "Fine Line",
    },
    {
      src: "assets/portfolio/ear-piercing-2.jpeg",
      alt: "Ear piercing set with curved barbell and studs",
      tag: "Piercing",
    },
    {
      src: "assets/portfolio/nose-piercing.jpeg",
      alt: "Simple nose stud piercing",
      tag: "Piercing",
    },
    {
      src: "assets/portfolio/scorpion-tribal.jpeg",
      alt: "Bold black tribal scorpion tattoo",
      tag: "Tribal",
    },
    {
      src: "assets/portfolio/cartoon-split-face.jpeg",
      alt: "Split-style cartoon character portrait tattoo",
      tag: "Cartoon",
    },
    {
      src: "assets/portfolio/bart-pig.jpeg",
      alt: "Line art cartoon tattoo of a character riding a pig",
      tag: "Cartoon",
    },
    {
      src: "assets/portfolio/traditional-color.jpeg",
      alt: "Bold color traditional-style tattoo",
      tag: "Traditional",
    },
    {
      src: "assets/portfolio/cherub-daisy.jpeg",
      alt: "Fine line cherub and daisy flower tattoo",
      tag: "Fine Line",
    },
    {
      src: "assets/portfolio/rainbow-brush.jpeg",
      alt: "Brush-stroke style color rainbow tattoo",
      tag: "Illustrative",
    },
    {
      src: "assets/portfolio/dnr-lettering.jpeg",
      alt: "\"Do Not Resuscitate\" typewriter-style script tattoo",
      tag: "Lettering",
    },
    {
      src: "assets/portfolio/blue-daisies.jpeg",
      alt: "Color fine line blue daisy bouquet tattoo",
      tag: "Fine Line",
    },
    {
      src: "assets/portfolio/ear-piercing-3.jpeg",
      alt: "Ear piercing set with rook hoop and studs",
      tag: "Piercing",
    },
    {
      src: "assets/portfolio/cat-chain-gengar.jpeg",
      alt: "Anime and pop-culture tattoo set: cat, chain cross, and ghost character",
      tag: "Cartoon",
    },
    {
      src: "assets/portfolio/ghost-tattooist.jpeg",
      alt: "Playful ghost mascot tattoo holding a coffee and tattoo machine",
      tag: "Cartoon",
    },
    {
      src: "assets/portfolio/hercules-snake.jpeg",
      alt: "Illustrative classical-style tattoo of a man wrestling a serpent",
      tag: "Illustrative",
    },
  ],
};
