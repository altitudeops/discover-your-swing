export const bookingUrl = "https://app.coachnow.io/facility/5b397090a11de411b44f8e3bd3/coach/christie-quinn/e6d1fb405a3a0138dcd052b26c3d04b2";
export const email = "quinn@discoveryourswing.com";
export const phone = "508-330-6731";

export const socialLinks = [
  { label: "Facebook", href: "https://facebook.com/discoveryourswing" },
  { label: "Instagram", href: "https://instagram.com/discoveryourswing" },
];

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Discover Us" },
  {
    href: "/performance-coaching",
    label: "Performance Coaching",
    children: [
      { href: "/junior-golf", label: "Junior Golf" },
      { href: "/adult-coaching", label: "Adult Coaching" },
      { href: "/performance-coaching", label: "Player Performance Coaching" },
    ],
  },
  { href: "/videos", label: "DYS Videos" },
  { href: "/gift-cards", label: "Gift Cards" },
];

export const testimonials = [
  {
    name: "Luara Y",
    quote:
      "Christie is fabulous with Jr Golfers!! My daughter developed her beautiful swing and love for golf with Christie. Christie has set her up for success in the sport with both solid skills and confidence. Highly recommend Christie to anyone looking for golf instruction!",
  },
  {
    name: "Karen G",
    quote:
      "Christie will customize your lesson to exactly what you need. I saw a positive change right away and also got the tools I needed to transfer my learning onto the golf course! Christie is an excellent golf coach.",
  },
  {
    name: "Kelly H",
    quote:
      "Christie is extremely knowledgable about her sport and is able to break it down for your specific type of learning style. I was able to see improvement in a very small amount of time with my driver and all irons!",
  },
];

export type Program = {
  title: string;
  price: string;
  priceNote?: string;
  meta: string;
  description?: string;
  details?: string[];
};

// Christie's real lesson menu (source: original DiscoverYourSwing.com), with her
// Pastel price corrections (#19–24) applied. Pricing is per-program, per-page —
// not a single fabricated "package ladder."

export const adultPrograms: Program[] = [
  {
    title: "60-Minute Private Lesson",
    price: "$175", // #23
    meta: "60 minutes",
    description:
      "One-on-one coaching tailored to your body, swing, and goals — including video analysis and a clear practice plan you can take to the range.",
  },
  {
    title: "120-Minute On-Course Instruction",
    price: "$200", // #24
    meta: "120 minutes · on course",
    description:
      "Take the work to the course. Christie coaches strategy, scoring, and decision-making where it actually counts.",
  },
  {
    title: "30-Minute Private Lesson",
    price: "$100",
    meta: "30 minutes",
    description: "A focused tune-up session — perfect for a targeted fix or ongoing check-ins.",
  },
  {
    title: "Senior Playing Lesson",
    price: "$150",
    meta: "120 minutes · 6 holes",
    description: "On-course coaching for 6 holes with Christie; covers greens fees for the remaining 12.",
  },
  {
    title: "Adult 5-Pack",
    price: "$600",
    priceNote: "5 × 60-minute lessons",
    meta: "Package",
    description: "Five one-hour private / semi-private lessons for golfers committed to lasting improvement.",
  },
  {
    title: "Custom Group Lesson",
    price: "$300",
    meta: "60 minutes · up to 3 golfers",
    description: "Bring your foursome-in-training. One hour of coaching for up to three golfers.",
  },
];

export const juniorPrograms: Program[] = [
  {
    title: "30-Minute Private Lesson",
    price: "$50",
    meta: "30 minutes",
    description: "Private / semi-private coaching for juniors ages 5–15, tailored to skill level and goals.",
  },
  {
    title: "60-Minute Private Lesson",
    price: "$100",
    meta: "60 minutes",
    description: "A full hour of private / semi-private junior coaching in a fun, supportive environment.",
  },
  {
    title: "120-Minute On-Course Instruction",
    price: "$125",
    priceNote: "San Diego · $150 in Palm Springs",
    meta: "120 minutes · on course",
    description: "On-course junior instruction that builds confidence, course management, and love for the game.",
  },
  {
    title: "Custom Group Lesson",
    price: "$200", // #21
    meta: "60 minutes · up to 3 golfers",
    description: "One hour of group coaching for up to three junior golfers.",
  },
  {
    title: "Performance Playing Lesson",
    price: "$125",
    priceNote: "San Diego · $150 in Palm Springs",
    meta: "6 holes · on course",
    description: "On-course performance coaching for 6 holes with Christie; covers greens fees for the remaining 12.",
  },
  // #20 — Junior "Series" package removed at Christie's request.
];

export const performancePrograms: Program[] = [
  {
    title: "Discover Your Swing!® Assessment",
    price: "$275", // #19 — confirm label with Christie (the hero "Swing Evaluation")
    meta: "Swing evaluation",
    description:
      "Your starting point: a full movement screen and swing analysis that builds your personalized Discover Your Swing!® profile and improvement plan.",
    details: [
      "Movement screening",
      "Video swing analysis",
      "Personalized Discover Your Swing!® profile",
      "Customized improvement plan",
    ],
  },
  {
    title: "Performance Playing Lesson",
    price: "$200", // #22
    meta: "6 holes · on course",
    description:
      "On-course golf instruction for competitive players — 6 holes of coaching with Christie; covers greens fees for the remaining 12.",
  },
];

export const videos = [
  { id: "GTqyo37F7m4", title: "Intro with Christie Quinn" },
  { id: "qFEBVEUh40Y", title: "Bunker Shot Distance Control Made Easy" },
  { id: "8m0s2YfMFww", title: "Find the Best Golf Grip for You" },
  { id: "h3MKFIg-ZVM", title: "Box Putting Drill" },
  { id: "o2V1qgJWtHE", title: "No 3 Putts" },
  { id: "he-mH5nDKwo", title: "Tempo" },
  { id: "Q71I2SJtixs", title: "May the Force Be With You" },
];
