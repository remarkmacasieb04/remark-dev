export type SkillGroup = {
  title: string;
  description: string;
  skills: string[];
};

export type EducationEntry = {
  school: string;
  credential: string;
  focus?: string;
  years: string;
};

export type JourneyStep = {
  title: string;
  period: string;
  description: string;
};

export type ProjectEntry = {
  title: string;
  description: string;
  role: string;
  problem: string;
  solution: string;
  outcome: string;
  tech: string[];
  demoUrl?: string;
  githubUrl?: string;
};

type SocialLink = {
  label: string;
  href: string;
  placeholder: boolean;
};

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://your-portfolio.vercel.app";
const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "";

function withPlaceholder(label: string, href?: string): SocialLink {
  return {
    label,
    href: href && href.trim().length > 0 ? href : "#",
    placeholder: !href || href.trim().length === 0,
  };
}

export const portfolio = {
  name: "Remark F. Macasieb",
  firstName: "Remark",
  role: "Junior Developer",
  headline: "Aspiring Full Stack Developer",
  age: 21,
  birthday: "April 24, 2004",
  availability: "Open to internships, junior roles, and collaboration on practical digital products.",
  university: "Pangasinan State University",
  degree: "Bachelor of Science in Information Technology",
  specialization: "Mobile and Web Development",
  collegeYears: "2022 - 2026",
  expectedGraduation: "2026",
  currentFocus: "Responsive UI, product flow, and practical full-stack foundations",
  preferredWork: "Junior frontend, web, and full-stack opportunities",
  highSchool: "Basista National High School",
  highSchoolYears: "2016 - 2022",
  heroIntro:
    "BSIT student focused on React, Next.js, Flutter, and practical full-stack growth through real builds.",
  about:
    "I am a BSIT student at Pangasinan State University who enjoys turning ideas into clean, usable web and mobile experiences. My current work focuses on practical interfaces, better product flow, and the steady transition into junior full-stack opportunities.",
  values: [
    {
      title: "Learning by building",
      description:
        "I use projects as a way to sharpen both the technical and problem-solving sides of development.",
    },
    {
      title: "Frontend with full-stack direction",
      description:
        "I care about polished interfaces, but I am equally motivated to understand the systems behind them.",
    },
    {
      title: "Grounded and ambitious",
      description:
        "My work reflects a practical mindset: ship something useful, make it readable, and keep improving.",
    },
  ],
  stats: [
    { label: "Current focus", value: "Responsive UI + Product Flow" },
    { label: "Education", value: "BSIT, expected 2026" },
    { label: "Featured work", value: "2 Case Studies" },
  ],
  skillGroups: [
    {
      title: "Frontend",
      description:
        "Responsive interfaces, component-driven layouts, and modern client-side experiences.",
      skills: ["React", "Next.js", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    },
    {
      title: "Backend",
      description:
        "Server-side logic, application flow, and practical full-stack foundations.",
      skills: ["Node.js", "PHP", "Python", "Laravel", "Django"],
    },
    {
      title: "Mobile",
      description:
        "Cross-platform and Android-focused development for usable, performance-aware apps.",
      skills: ["Flutter", "Kotlin", "Java"],
    },
    {
      title: "Languages",
      description:
        "A flexible base across web, backend, and academic programming environments.",
      skills: ["JavaScript", "PHP", "Python", "Java", "C++", "Kotlin"],
    },
  ] satisfies SkillGroup[],
  education: [
    {
      school: "Pangasinan State University",
      credential: "Bachelor of Science in Information Technology",
      focus: "Mobile and Web Development",
      years: "2022 - 2026",
    },
  ] satisfies EducationEntry[],
  journey: [
    {
      title: "Academic foundation",
      period: "2016 - 2022",
      description:
        "My journey started with a steady interest in technology during high school, where I built the discipline and curiosity that pushed me toward development.",
    },
    {
      title: "Focused technical growth",
      period: "2022 - 2026",
      description:
        "At Pangasinan State University, I am deepening my understanding of mobile and web development through coursework, experimentation, and project work.",
    },
    {
      title: "Full-stack direction",
      period: "Now",
      description:
        "I am actively shaping my skills around real product thinking, aiming to build reliable apps from interface to backend as I move into professional development.",
    },
  ] satisfies JourneyStep[],
  projects: [
    {
      title: "Juanfix.com",
      description: "Service-booking concept for on-demand home services.",
      role: "Mobile product concept",
      problem:
        "Customers need a simpler way to discover trusted home services and request help in one place.",
      solution:
        "Planned a booking-focused flow that keeps service discovery, selection, and requests straightforward.",
      outcome:
        "Shows my approach to user flow, service organization, and convenience-first interface design.",
      tech: ["Flutter", "Laravel", "Tailwind CSS"],
      demoUrl: "",
      githubUrl: "",
    },
    {
      title: "Alumni Survey",
      description: "Survey and records flow for collecting alumni information.",
      role: "Web data collection project",
      problem:
        "Schools need a clearer way to gather alumni records without relying on confusing or messy forms.",
      solution:
        "Built a cleaner survey experience focused on structured inputs, approachable forms, and organized records.",
      outcome:
        "Shows my focus on usable forms, practical data capture, and straightforward admin-side thinking.",
      tech: ["PHP", "JavaScript", "Tailwind CSS"],
      demoUrl: "",
      githubUrl: "",
    },
  ] satisfies ProjectEntry[],
  contact: {
    email: contactEmail,
    emailPlaceholder: contactEmail.trim().length === 0,
    socialLinks: [
      withPlaceholder("GitHub", process.env.NEXT_PUBLIC_GITHUB_URL),
      withPlaceholder("LinkedIn", process.env.NEXT_PUBLIC_LINKEDIN_URL),
      withPlaceholder("Facebook", process.env.NEXT_PUBLIC_FACEBOOK_URL),
    ],
    resumeUrl: process.env.NEXT_PUBLIC_RESUME_URL ?? "",
  },
  chatbotStarters: [
    "Introduce Remark in one paragraph.",
    "What technologies does Remark work with?",
    "What is Remark studying right now?",
    "What kind of roles is Remark looking for?",
    "Tell me about Juanfix.com.",
  ],
  seo: {
    title: "Remark F. Macasieb | Junior Developer Portfolio",
    description:
      "Portfolio website for Remark F. Macasieb, a junior developer aspiring to become a full stack developer with a focus on mobile and web development.",
    siteUrl,
  },
};

export const assistantContext = `
Portfolio Owner: Remark F. Macasieb
Professional Role: Junior Developer
Career Goal: Aspiring Full Stack Developer

Education:
- Pangasinan State University
- Bachelor of Science in Information Technology
- Specialization: Mobile and Web Development
- College Years: 2022 - 2026
- Expected Graduation: 2026

About:
- Remark is a junior developer.
- He specializes in mobile and web development.
- He is aiming to become a full stack developer.
- He values clean user experiences, product clarity, and practical problem solving.
- He is currently focused on responsive UI and practical full-stack growth.

Skills:
- JavaScript
- HTML
- CSS
- Tailwind CSS
- PHP
- C++
- Java
- Kotlin
- Node.js
- Python
- Laravel
- Django
- Flutter
- React
- Next.js

Projects:
1. Juanfix.com
   Description: Service-booking concept for on-demand home services.
   Role: Mobile product concept
   Problem: Customers need a simpler way to discover trusted home services and request help in one place.
   Solution: Planned a booking-focused flow that keeps service discovery and requests straightforward.
   Tags: Flutter, Laravel, Tailwind CSS

2. Alumni Survey
   Description: Survey and records flow for collecting alumni information.
   Role: Web data collection project
   Problem: Schools need a clearer way to gather alumni records without confusing forms.
   Solution: Built a cleaner survey experience focused on structured inputs and organized records.
   Tags: PHP, JavaScript, Tailwind CSS

Contact Status:
- Use the published email and public social links when available.
- If a link or resume has not been published yet, explain that it is available on request.
`.trim();
