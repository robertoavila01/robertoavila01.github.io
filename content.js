/* =====================================================================
   YOUR PORTFOLIO CONTENT
   This is the only file you need to edit.
   Change the text between the quotes "like this", save, and refresh.
   Every style (theme) reads from this file, so you only fill it in once.
   ===================================================================== */

window.PORTFOLIO = {

  /* ---------- STYLE ----------
     Pick your look: "terminal", "clean", or "story".
     showThemePicker: true shows the style switcher in the corner.
     Set it to false once you've picked your favorite.            */
  theme: "clean",
  showThemePicker: true,

  /* ---------- ABOUT YOU ---------- */
  name: "Roberto Avila",
  initials: "RA",                       // shown if you don't add a photo
  photo: "",                            // optional: "images/headshot.jpg"
  headline: "Mechanical Engineering and Robotics student at the University of Texas at Austin",
  tagline: "I like building things people actually use.",   // used by the Story style
  school: "UT Austin, Class of 2027",
  location: "Austin, TX",
  status: "Looking for Summer 2027 internships",             // leave "" to hide

  about: "I've worked on AI evaluation at AWS, a browser-based compiler at a startup, and the platform my SHPE chapter runs on. Before all that, I built an online store for my family's candy business.",

  /* ---------- CONTACT ---------- */
  email: "robertoavila@utexas.edu",
  resume: "resume.pdf",                 // upload your resume with this exact name, or "" to hide
  links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/roberto-avila-a88b8028b/" },
    { label: "GitHub",   url: "https://github.com/robertoavila01" },
  ],

  /* ---------- EXPERIENCE ----------
     Newest first. Copy a { ... }, block to add another.
     Jobs, internships, research, org leadership, and your own
     business all count.                                           */
  experience: [
    {
      role: "Packing Equipment & Automation Engineer",
      org: "Procter & Gamble - Gillette",
      place: "Boston, MA",
      dates: "May 2026 – August 2026",
      summary: "Evaluated a front-of-line robotic automation solution and designed a 5-product parallel gripper, simulating cycle time in RobotStudio before physical builds.",
      tags: ["SolidWorks", "RobotStudio", "GD&T", "Automation"],
    },
    {
      role: "Chief Engineer",
      org: "Aerial Solutions for Combating Emergencies & Natural Disasters",
      place: "Austin, TX",
      dates: "June 2025 – May 2026",
      summary: "Led a 30+ member org converting a gas ATV into an all-electric paraglider drone, hitting 90% of technical milestones over four months.",
      tags: ["SolidWorks", "Leadership", "Machining"],
    },
    {
      role: "Mechatronics Engineer",
      org: "Aerial Solutions for Combating Emergencies & Natural Disasters",
      place: "Austin, TX",
      dates: "October 2024 – May 2025",
      summary: "Designed a servo-driven throttle control for a 7.5kW electric powertrain and integrated it with a Pixhawk flight controller for proof of concept.",
      tags: ["SolidWorks", "Pixhawk", "Electronics"],
    },
    {
      role: "Community Outreach Chair",
      org: "Society of Hispanic Professional Engineers",
      place: "Austin, TX",
      dates: "July 2024 – Present",
      summary: "Founded a SHPE Jr. chapter for first-gen students, with 90% of members going on to apply to STEM programs in college.",
      tags: ["Leadership", "Community Outreach"],
    },
  ],

  /* ---------- PROJECTS ----------
     2 to 4 projects works best. Class projects count!
     "result" is one line about what happened or what you learned.
     "url" can link to a demo, GitHub repo, or photos ("" for none). */
  projects: [
    {
      name: "Projectile Shooting Robot",
      when: "Class Project · Jan – May 2024",
      stack: ["SolidWorks", "Laser Cutting", "3D Printing"],
      summary: "Designed a spring-launcher robot with a laser-cut chassis and 3D-printed components built for durability and weight savings.",
      result: "Consistently hit targets over 1 meter away",
      url: "",
    },
  ],

  /* ---------- SKILLS ----------
     Group them however makes sense for your major.               */
  skills: [
    { group: "Design & CAD",          items: ["SolidWorks", "GD&T", "Mechanical Design"] },
    { group: "Robotics & Automation", items: ["RobotStudio", "Robotics & Automation", "Programming"] },
    { group: "Manufacturing",         items: ["Machining", "Fabrication", "Soldering"] },
    { group: "Other",                 items: ["Project Management"] },
  ],

  /* ---------- AWARDS (optional, use [] for none) ---------- */
  awards: [],
};