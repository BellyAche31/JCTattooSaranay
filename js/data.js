/**
 * Site content config. Edit the values below to update the site —
 * every field marked TODO is a placeholder and should be replaced
 * with real business info before launch.
 */
const SITE = {
  businessName: "JCTATTOO Saranay",
  shortName: "JCTATTOO",
  tagline: "Tattoo & Body Piercing",

  // TODO: confirm real location / neighborhood
  location: "Saranay",

  // TODO: replace with real phone number
  phone: "",
  phoneDisplay: "Phone coming soon",

  // TODO: replace with real email if the shop uses one
  email: "",

  // TODO: confirm the real Instagram handle (guessed from the logo text)
  instagramHandle: "@jctattoosaranay",
  instagramUrl: "https://instagram.com/jctattoosaranay",

  // TODO: add Facebook/TikTok/etc if the shop uses them
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
        "Professional, hygienic piercing services using sterile equipment and quality jewelry.",
    },
    {
      title: "Consultations",
      description:
        "Not sure what you want yet? Send a message with your idea, size, and placement for a free consultation.",
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
