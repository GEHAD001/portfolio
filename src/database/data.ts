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
      "I love building cool websites and apps! I use modern tools to create fast, reliable solutions that work great for everyone.",
    className: "grid-area-one bg-blue-100 hover:bg-blue-200",
  },
  {
    title: "Designer",
    description:
      "I create user-friendly designs that look great and work smoothly. Making websites that everyone can use easily is my priority!",
    className: "grid-area-two bg-purple-100 hover:bg-purple-200",
  },
  {
    title: "Frontend",
    description:
      "I make websites look awesome and work smoothly! Using the latest tools to build interfaces that users love.",
    className: "grid-area-three bg-rose-100 hover:bg-rose-200",
  },
  {
    title: "Technical",
    description:
      "I know my way around computers - both the physical stuff and the software side. Always ready to solve tech puzzles!",
    className: "grid-area-four bg-emerald-100 hover:bg-emerald-200",
  },
  {
    title: "Communicator",
    description:
      "I'm great at working with others! Clear communication and team collaboration are my strong points.",
    className: "grid-area-five bg-amber-100 hover:bg-amber-200",
  },
  {
    title: "Trustworthy",
    description:
      "You can count on me to get things done right! I deliver quality work on time and keep everyone in the loop.",
    className: "grid-area-six bg-cyan-100 hover:bg-cyan-200",
  },
];

export const projects: {
  name: string;
  description: string;
  technologies: string[];
}[] = [
  {
    name: "Portfolio",
    description:
      "Hey there! This is the website you're looking at right now. I built it to show off my work and skills in a fun, interactive way!",
    technologies: ["Next", "React", "Tailwind", "Motion"],
  },
  {
    name: "Archive Graduation CMS",
    description:
      "My graduation project! I created a super-easy way for universities to manage their digital archives. It's like a smart filing cabinet that makes finding and organizing documents a breeze.",
    technologies: ["Vue", "Django", "PostgreSQL", "Tailwind"],
  },
  {
    name: "Cabin Management System",
    description:
      "A handy tool for cabin rental businesses! It helps track bookings, manage cabin availability, and keep guest info organized - making vacation planning smooth and stress-free.",
    technologies: ["React", "React Router", "Supabase", "Tailwind"],
  },
  {
    name: "Fast Typing",
    description:
      "Want to type faster? This fun app helps you improve your typing speed and accuracy through interactive exercises. It's like a gym for your fingers!",
    technologies: ["React", "Tailwind", "Sqlite"],
  },
  {
    name: "Mini Games Collection",
    description:
      "Take a break with these fun browser games! Play classic favorites like Tic-Tac-Toe and Rock Paper Scissors. Perfect for a quick mental refresh!",
    technologies: ["HTML", "CSS", "JS"],
  },
  {
    name: "Productivity Suite",
    description:
      "Your digital assistant for staying organized! Keep track of tasks, take notes, and study with flashcards - all in one place. It's like having a super-smart notebook!",
    technologies: ["Next", "React", "Tailwind", "MongoDB"],
  },
];

export const designerException: {
  title: string;
  description: string;
}[] = [
  {
    title: "Smart Layouts",
    description:
      "I create websites that look great on any device! Using modern layout techniques, I ensure everything stays organized and easy to navigate.",
  },
  {
    title: "Beautiful Typography",
    description:
      "I make text look amazing and super easy to read! From headlines to body text, every word gets the perfect style and spacing.",
  },
  {
    title: "Design Systems",
    description:
      "I build design systems that keep everything looking consistent and professional. Think of it as a perfect recipe for beautiful websites!",
  },
  {
    title: "Color Magic",
    description:
      "I choose colors that work for everyone! My color combinations look great and are easy on the eyes, making websites accessible to all users.",
  },
  {
    title: "Smooth Animations",
    description:
      "I add life to websites with smooth, purposeful animations! These little touches make the experience more engaging and intuitive.",
  },
];

export const techs: {
  name: string;
  description: string;
  Icon: React.ComponentType<{ size?: number; className?: string }>;
}[] = [
  {
    name: "TypeScript",
    description:
      "Leveraging TypeScript for type-safe development, enabling robust enterprise applications with enhanced code maintainability and scalability.",
    Icon: TypescriptOriginal,
  },
  {
    name: "Tailwind",
    description:
      "Utilizing Tailwind CSS for rapid UI development with utility-first approach, ensuring consistent design systems and optimal performance.",
    Icon: TailwindcssOriginal,
  },
  {
    name: "Next",
    description:
      "Implementing Next.js for server-side rendering and static site generation, optimizing performance and SEO while maintaining excellent developer experience.",
    Icon: NextjsOriginal,
  },
  {
    name: "React",
    description:
      "Building scalable component architectures with React, emphasizing reusability, state management, and modern hooks patterns.",
    Icon: ReactOriginal,
  },
  {
    name: "Motion",
    description:
      "Crafting fluid animations and transitions using Framer Motion, enhancing user experience while maintaining optimal performance metrics.",
    Icon: FramermotionOriginal,
  },
];

export const contacts: {
  label: string;
  value: string;
  id: string;
}[] = [
  {
    label: "Email",
    value: "eng.jihadjadallah@gmail.com",
    id: "email",
  },
  {
    label: "Telegram",
    value: "+218922478039",
    id: "telegram",
  },
  {
    label: "What's App",
    value: "+218922478039",
    id: "whatsapp",
  },
  {
    label: "Github",
    value: "https://github.com/GEHAD001",
    id: "github",
  },
];

export const developerException: {
  title: string;
  description: string;
  className: string;
}[] = [
  {
    title: "Research First, Code Later",
    description:
      "Before diving in, I take time to research and plan. This helps me find the best solutions and avoid common pitfalls!",
    className:
      "grid-area-one bg-blue-100 hover:bg-blue-200 md:bg-blue-200 md:hover:bg-blue-300",
  },
  {
    title: "Always Learning",
    description:
      "Every challenge is a chance to learn! I see mistakes as stepping stones to becoming a better developer.",
    className: "grid-area-two bg-blue-100 hover:bg-blue-200",
  },
  {
    title: "Adaptable & Flexible",
    description:
      "I love learning new technologies! With strong fundamentals, I can quickly adapt to different tools and frameworks.",
    className: "grid-area-three bg-blue-100 hover:bg-blue-200",
  },
  {
    title: "AI-Friendly Developer",
    description:
      "I embrace AI as a powerful tool that helps me work smarter and faster. It's like having a super-helpful coding buddy!",
    className: "grid-area-four bg-blue-100 hover:bg-blue-200",
  },
  {
    title: "Deep Understanding",
    description:
      "I take the time to really understand what I'm working with. This helps me write better code and solve problems more effectively.",
    className: "grid-area-five bg-blue-100 hover:bg-blue-200",
  },
  {
    title: "Reliable Partner",
    description:
      "You can count on me to be honest, make smart decisions, and always keep your best interests in mind.",
    className:
      "grid-area-six bg-blue-100 hover:bg-blue-200 md:bg-blue-200 md:hover:bg-blue-300",
  },
];
