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
  ],
};
