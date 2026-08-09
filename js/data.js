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

  // Facebook is the fastest way to reach the shop — the owner answers there.
  facebookName: "JCTattoo Saranay",
  facebookUrl: "https://www.facebook.com/share/1SfL9qPQ7d/?mibextid=wwXIfr",

  tiktokUrl: "",

  // Walk-ins: no appointment needed inside this window.
  walkIn: {
    label: "Walk-ins Welcome",
    time: "6:00 PM – 1:00 AM",
    blurb: "No appointment needed — drop by the studio on Saranay Road.",
  },

  // Open 6PM–1AM daily. This replaces the old vintage poster's times, which
  // were bare opening hours with no closing time. If any day actually differs,
  // change just that row.
  hours: [
    { day: "Monday", time: "6:00 PM – 1:00 AM" },
    { day: "Tuesday", time: "6:00 PM – 1:00 AM" },
    { day: "Wednesday", time: "6:00 PM – 1:00 AM" },
    { day: "Thursday", time: "6:00 PM – 1:00 AM" },
    { day: "Friday", time: "6:00 PM – 1:00 AM" },
    { day: "Saturday", time: "6:00 PM – 1:00 AM" },
    { day: "Sunday", time: "6:00 PM – 1:00 AM" },
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

  // Age gate. Shown once per browser (choice remembered in localStorage).
  // Tattoo/piercing shops carry this as standard practice — adjust the
  // requirements below to match what the shop actually asks for at the door.
  ageGate: {
    minAge: 18,
    requirements: [
      "A parent or legal guardian must be physically present for the whole session",
      "Valid government ID for both the client and the parent or guardian",
      "A signed parental consent form, completed in the studio",
    ],
    note:
      "Some placements and services are strictly 18+ regardless of consent. Final approval is always at the artist's discretion.",
  },

  currency: "₱",

  // Gallery grouping. The portfolio is sorted into this order at render time,
  // and the filter buttons + marquee follow it, so photos can be appended to
  // `portfolio` below in any order and still land in the right group.
  // Any tag not listed here sorts to the end.
  styleOrder: [
    "Fine Line",
    "Illustrative",
    "Lettering",
    "Traditional",
    "Tribal",
    "Anime",
    "Cartoon",
    "Cover-Up",
    "Piercing",
  ],

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

    // --- Fine line ---
    {
      src: "assets/portfolio/ornamental-sternum.jpg",
      alt: "Ornamental fine line sternum and stomach tattoo with symmetrical flourishes",
      tag: "Fine Line",
    },
    {
      src: "assets/portfolio/red-rose-chest.jpg",
      alt: "Red ink fine line rose tattoo on the chest",
      tag: "Fine Line",
    },
    {
      src: "assets/portfolio/red-butterflies-ear.jpg",
      alt: "Three red fine line butterflies trailing down behind the ear",
      tag: "Fine Line",
    },
    {
      src: "assets/portfolio/red-butterfly-arm.jpg",
      alt: "Red ink butterfly tattoo with dripping wing detail on the forearm",
      tag: "Fine Line",
    },
    {
      src: "assets/portfolio/red-flames-ankle.jpg",
      alt: "Red flame band tattoo wrapping around the ankle",
      tag: "Fine Line",
    },
    {
      src: "assets/portfolio/paw-prints-forearm.jpg",
      alt: "Trail of solid black paw print tattoos up the forearm",
      tag: "Fine Line",
    },

    // --- Illustrative ---
    {
      src: "assets/portfolio/dragon-blossom-sleeve.jpg",
      alt: "Black and grey dragon wrapped in pink cherry blossoms across the upper arm",
      tag: "Illustrative",
    },
    {
      src: "assets/portfolio/koi-yin-yang.jpg",
      alt: "Two koi fish arranged as a yin and yang on the forearm",
      tag: "Illustrative",
    },
    {
      src: "assets/portfolio/scorpion-shoulder.jpg",
      alt: "Realistic black and grey scorpion tattoo on the shoulder",
      tag: "Illustrative",
    },
    {
      src: "assets/portfolio/black-widow-shoulder.jpg",
      alt: "Black widow spider tattoo with red marking on the shoulder",
      tag: "Illustrative",
    },
    {
      src: "assets/portfolio/flash-set-arm.jpg",
      alt: "Arm set of black and grey flash: spider, theatre masks, praying hands and a skull pizza slice",
      tag: "Illustrative",
    },
    {
      src: "assets/portfolio/cross-forearm.jpg",
      alt: "Bold solid black cross tattoo on the forearm",
      tag: "Illustrative",
    },

    // --- Lettering ---
    {
      src: "assets/portfolio/year-1997.jpg",
      alt: "Gothic numerals reading 1997 on the inner arm",
      tag: "Lettering",
    },
    {
      src: "assets/portfolio/year-2004.jpg",
      alt: "Blackletter numerals reading 2004 on the inner arm",
      tag: "Lettering",
    },
    {
      src: "assets/portfolio/angel-number-444.jpg",
      alt: "Red ink 444 with sparkles on the inner arm",
      tag: "Lettering",
    },
    {
      src: "assets/portfolio/latin-script-thigh.jpg",
      alt: "Red script tattoo reading \"sine audacia nulla gloria\" on the thigh",
      tag: "Lettering",
    },
    {
      src: "assets/portfolio/name-script-hip.jpg",
      alt: "Fine line cursive name tattoo on the hip",
      tag: "Lettering",
    },
    {
      src: "assets/portfolio/kanji-ai-leg.jpg",
      alt: "Red kanji character tattoo on the lower leg",
      tag: "Lettering",
    },
    {
      src: "assets/portfolio/kanji-ai-neck.jpg",
      alt: "Red kanji character tattoo on the side of the neck",
      tag: "Lettering",
    },
    {
      src: "assets/portfolio/kanji-ai-ear.jpg",
      alt: "Red kanji character tattoo behind the ear",
      tag: "Lettering",
    },
    {
      src: "assets/portfolio/kanji-ribs.jpg",
      alt: "Vertical black kanji lettering tattoo along the ribs",
      tag: "Lettering",
    },
    {
      src: "assets/portfolio/kanji-ear.jpg",
      alt: "Small vertical kanji lettering tattoo behind the ear",
      tag: "Lettering",
    },

    // --- Anime ---
    {
      src: "assets/portfolio/goku-arm.jpg",
      alt: "Black and grey anime character portraits on the upper arm",
      tag: "Anime",
    },
    {
      src: "assets/portfolio/levi-arm.jpg",
      alt: "Fine line anime portrait with vertical Japanese lettering on the forearm",
      tag: "Anime",
    },
    {
      src: "assets/portfolio/onepiece-crew.jpg",
      alt: "Colour anime crew portraits on the upper arm",
      tag: "Anime",
    },
    {
      src: "assets/portfolio/chibi-duo.jpg",
      alt: "Chibi-style anime character pair on the upper arm",
      tag: "Anime",
    },
    {
      src: "assets/portfolio/zodiac-akatsuki.jpg",
      alt: "Red and black zodiac symbol above a red anime cloud on the forearm",
      tag: "Anime",
    },
    {
      src: "assets/portfolio/pokeball-dotwork.jpg",
      alt: "Dotwork shaded poke ball tattoo on the forearm",
      tag: "Anime",
    },

    // --- Cartoon ---
    {
      src: "assets/portfolio/mickey-forearm.jpg",
      alt: "Colour cartoon mouse character tattoo on the forearm",
      tag: "Cartoon",
    },

    // --- Cover-up ---
    {
      src: "assets/portfolio/rose-coverup.jpg",
      alt: "Red and green rose tattoo covering previous work on the collarbone",
      tag: "Cover-Up",
    },
  ],
};
