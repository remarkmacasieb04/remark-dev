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
  slug: string;
  title: string;
  description: string;
  role: string;
  problem: string;
  solution: string;
  outcome: string;
  tech: string[];
  imageSrc?: string;
  imagePlaceholder: string;
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
  headline: "Aspiring Full-Stack Developer",
  age: 21,
  birthday: "April 24, 2004",
  availability: "Available for web development projects and collaborative opportunities.",
  university: "Pangasinan State University",
  degree: "Bachelor of Science in Information Technology",
  specialization: "Mobile and Web Development",
  collegeYears: "2022 - 2026",
  expectedGraduation: "2026",
  currentFocus: "Web interfaces, backend features, and full-stack implementation",
  preferredWork: "Frontend, backend, and full-stack development",
  highSchool: "Basista National High School",
  highSchoolYears: "2016 - 2022",
  heroIntro:
    "Aspiring developer focused on React, Next.js, Laravel, and practical full-stack builds.",
  about:
    "I build clean, functional web experiences with a practical approach to frontend and backend development. I enjoy turning ideas into usable systems that are clear, efficient, and ready to grow.",
  values: [
    {
      title: "Learning by building",
      description:
        "I improve through real projects that strengthen both technical execution and problem solving.",
    },
    {
      title: "Balanced development",
      description:
        "I work across interface and backend needs to build solutions that feel complete and reliable.",
    },
    {
      title: "Clear and practical",
      description:
        "I value code and experiences that are useful, understandable, and built with purpose.",
    },
  ],
  stats: [
    { label: "Current focus", value: "Frontend + Backend" },
    { label: "Experience", value: "OJT at Outsoar PH" },
    { label: "Featured work", value: "3 Case Studies" },
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
    {
      title: "Databases & Tools",
      description:
        "Practical experience with databases, version control, and deployment tools.",
      skills: ["Mysql", "PostgreSQL", "Sqlite", "Git"],
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
        "My interest in technology started in high school, where I built the discipline and curiosity that led me into development.",
    },
    {
      title: "Technical growth",
      period: "2022 - 2026",
      description:
        "At Pangasinan State University, I continue developing my skills in web and mobile development through coursework and project work.",
    },
    {
      title: "OJT at Outsoar PH",
      period: "2026 - Present",
      description:
        "Contributed to the Cooper attendance system using Laravel, Node.js, Discord, Redis, Traefik, and Nginx in a real team environment.",
    },
    {
      title: "Full-stack direction",
      period: "Present",
      description:
        "I am continuing to build practical experience across frontend and backend work with a focus on clear, reliable web solutions.",
    },
  ] satisfies JourneyStep[],
  projects: [
    {
      slug: "cooper-attendance-system",
      title: "Cooper Attendance System",
      description: "Attendance system built during my OJT at Outsoar PH.",
      role: "OJT Developer",
      problem:
        "Teams needed a more organized way to manage attendance with a workflow that could connect to existing communication tools.",
      solution:
        "Helped build a system around Laravel, Node.js, and Discord with Redis, Traefik, and Nginx supporting the application flow.",
      outcome:
        "Shows my experience working on a practical attendance platform in a collaborative setup.",
      tech: ["Laravel", "Node.js", "Discord", "Redis", "Traefik", "Nginx"],
      imageSrc:"/images/projects/cooper.png",
      imagePlaceholder: "Attendance dashboard preview",
      demoUrl: "https://cooper.outsoar.it.com/",
      githubUrl: "https://github.com/outsoarph/cooper",
    },
    {
      slug: "juanfix",
      title: "Juanfix.com",
      description: "Service-booking concept for on-demand home services.",
      role: "Web Application Concept",
      problem:
        "Customers need a simpler way to find trusted home services and request help in one place.",
      solution:
        "Planned a booking flow that keeps discovery, selection, and requests straightforward.",
      outcome:
        "Shows my approach to user flow and clear service organization.",
      tech: ["Laravel", "Tailwind CSS", "Mysql", "PHP"],
      imageSrc: "/images/projects/juanfix.png",
      imagePlaceholder: "Home services booking UI",
      demoUrl: "https://juanfix.com/",
      githubUrl: "",
    },
    {
      slug: "alumni-survey",
      title: "Alumni Survey",
      description: "Survey and records flow for collecting alumni information.",
      role: "Web data collection project",
      problem:
        "Schools need a clearer way to gather alumni records without confusing forms.",
      solution:
        "Built a cleaner survey experience with structured inputs and organized records.",
      outcome:
        "Shows my focus on usable forms and practical data capture.",
      tech: ["PHP", "JavaScript", "Tailwind CSS"],
      imageSrc: "/images/projects/alumni.png",
      imagePlaceholder: "Survey form and records table",
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
      withPlaceholder("Upwork", process.env.NEXT_PUBLIC_UPWORK_URL),
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
      "Portfolio website for Remark F. Macasieb, an aspiring full-stack developer focused on practical web development.",
    siteUrl,
  },
};

export const assistantContext = `
Portfolio Owner: Remark F. Macasieb
Professional Role: Junior Developer
Career Goal: Aspiring Full-Stack Developer

Education:
- Pangasinan State University
- Bachelor of Science in Information Technology
- Specialization: Mobile and Web Development
- College Years: 2022 - 2026

About:
- Remark is a junior web developer focused on practical web development.
- He works across frontend and backend implementation.
- He values clean user experiences, clarity, and practical problem solving.
- He is currently building experience through projects and OJT work at Outsoar PH.

Skills:
- PHP
- HTML
- CSS
- Tailwind CSS
- JAVASCRIPT
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
- Mysql
- Git
- PostgreSQL
- Sqlite

Projects:
1. Juanfix.com
   Description: Service-booking concept for on-demand home services.
   Role: Web Application Concept
   Problem: Customers need a simpler way to discover trusted home services and request help in one place.
   Solution: Planned a booking-focused flow that keeps service discovery and requests straightforward.
   Tags: Flutter, Laravel, Tailwind CSS, Mysql

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

export function getProjectBySlug(slug: string) {
  return portfolio.projects.find((project) => project.slug === slug);
}
