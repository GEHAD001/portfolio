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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    className: "grid-area-one",
  },

  {
    title: "Designer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    className: "grid-area-two",
  },
  {
    title: "Frontend",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    className: "grid-area-three",
  },
  {
    title: "Technical",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    className: "grid-area-four",
  },
  {
    title: "Communicator",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    className: "grid-area-five",
  },
  {
    title: "Trustworthy",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
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
