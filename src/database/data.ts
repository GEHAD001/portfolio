import {
  FramermotionOriginal,
  NextjsOriginal,
  ReactOriginal,
  TailwindcssOriginal,
  TypescriptOriginal,
} from "devicons-react";

export const colorMapper: { [key: string]: string } = {
  Tailwind: "bg-blue-200 text-white",
  Vue: "bg-green-200 text-white",
  Django: "bg-green-500 text-white",
  React: "bg-blue-400 text-white",
  Next: "bg-black text-white",
  Motion: "bg-purple-400 text-white",
  "React Router": "bg-red-400 text-white",
  Supabase: "bg-emerald-500 text-white",
  Sqlite: "bg-blue-600 text-white",
  HTML: "bg-orange-500 text-white",
  CSS: "bg-blue-500 text-white",
  JS: "bg-yellow-400 text-black",
  MongoDB: "bg-green-600 text-white",
  PostgreSQL: "bg-blue-700 text-white",
};

export const skills: {
  title: string;
  description: string;
  className?: string;
}[] = [
  {
    title: "Developer",
    description:
      "Can develop and maintain web applications using modern web technologies.",
    className: "grid-area-one",
  },

  {
    title: "Designer",
    description:
      "design and create visually appealing and user-friendly websites.",
    className: "grid-area-two",
  },
  {
    title: "Frontend",
    description:
      "Can create responsive and interactive user interfaces using modern web technologies.",
    className: "grid-area-three",
  },
  {
    title: "Technical",
    description: "can solve technical problems of computers and software.",
    className: "grid-area-four",
  },
  {
    title: "Communicator",
    description:
      "can effectively communicate technical concepts to non-technical stakeholders.",
    className: "grid-area-five",
  },
  {
    title: "Trustworthy",
    description:
      "can trust me on my work and can provide reliable and timely support.",
    className: "grid-area-six",
  },
];

export const projects: {
  name: string;
  description: string;
  technologies: string[];
  link?: string;
}[] = [
  {
    name: "Portfolio",
    description:
      "A professional portfolio website showcasing my skills, projects, and experience using modern web technologies.",
    technologies: ["Next", "React", "Tailwind", "Motion"],
    link: "https://portfolio.example.com",
  },
  {
    name: "Archive Graduation CMS",
    description:
      "A comprehensive content management system developed for my university graduation project, integrating modern technologies for optimal performance and user experience.",
    technologies: ["Vue", "Django", "PostgreSQL", "Tailwind"],
    link: "https://archive-cms.example.com",
  },
  {
    name: "Cabin Management System",
    description:
      "A full-featured property management application built with React, allowing users to manage cabin bookings, availability, and customer information.",
    technologies: ["React", "React Router", "Supabase", "Tailwind"],
    link: "https://cabin-system.example.com",
  },
  {
    name: "Fast Typing",
    description:
      "An interactive typing practice application designed to improve typing speed and accuracy, implemented with different state management approaches for performance comparison.",
    technologies: ["React", "Tailwind", "Sqlite"],
    link: "https://fast-typing.example.com",
  },
  {
    name: "Mini Games Collection",
    description:
      "A collection of browser-based mini-games including Tic-Tac-Toe, Dice Roller, Rock Paper Scissors, and Number Guessing, demonstrating core web development principles.",
    technologies: ["HTML", "CSS", "JS"],
    link: "https://mini-games.example.com",
  },
  {
    name: "Productivity Suite",
    description:
      "An all-in-one productivity application featuring daily notes, task management, flashcard system, and other organizational tools to enhance personal and professional efficiency.",
    technologies: ["Next", "React", "Tailwind", "MongoDB"],
    link: "https://productivity-suite.example.com",
  },
];

export const designerException: {
  title: string;
  description: string;
}[] = [
  {
    title: "Build Complex Layouts",
    description:
      "because I am confidence with CSS-Grid and Flexbox, I can build complex layouts with ease.",
  },
  {
    title: "Typography",
    description:
      "because now basics of typography is well understood, I can build typography with ease.",
  },
  {
    title: "Consistency",
    description:
      "Picking right layout, colors, typography for building consistncy design.",
  },
  {
    title: "Coloring",
    description: "Laverge Power of AI to pick right colors for projects.",
  },
  {
    title: "Motion",
    description: "I can build motion (Optimized) for website with ease .",
  },
];

export const techs: {
  name: string;
  description: string;
  Icon: React.FunctionComponent;
}[] = [
  {
    name: "TypeScript",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, sequi sapiente aspernatur.",
    Icon: TypescriptOriginal,
  },
  {
    name: "Tailwind",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, sequi sapiente aspernatur.",
    Icon: TailwindcssOriginal,
  },
  {
    name: "Next",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, sequi sapiente aspernatur.",
    Icon: NextjsOriginal,
  },
  {
    name: "React",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, sequi sapiente aspernatur.",
    Icon: ReactOriginal,
  },
  {
    name: "Motion",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, sequi sapiente aspernatur.",
    Icon: FramermotionOriginal,
  },
];
