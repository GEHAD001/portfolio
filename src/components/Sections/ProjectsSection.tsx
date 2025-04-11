import React, { useRef } from "react";
import Section from "../Section";
import { cn } from "@/lib/utils";
import { motion, useInView } from "motion/react";
import { colorMapper, projects } from "@/database/data";

export default function ProjectsSection({ className }: { className?: string }) {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { amount: 0.15, once: true });

  return (
    <Section
      className={cn("p-12 md:p-24", className)}
      ref={sectionRef}
      id="Projects"
    >
      <motion.div
        className="mb-12 text-center"
        style={{
          y: inView ? 0 : -50,
          opacity: inView ? 1 : 0,
          transition: "all 0.7s ease-out",
        }}
      >
        <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
        <p className="text-lg max-w-2xl mx-auto">
          A collection of my recent work showcasing my skills and experience in
          web development.
        </p>
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-2 ">
        {projects.map(({ name, description, technologies, link }, index) => (
          <motion.div
            className=" bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-200/20"
            key={name}
            style={{
              y: inView ? 0 : 100,
              opacity: inView ? 1 : 0,
              transition: `all ${0.5 + index * 0.1}s ease-out`,
            }}
          >
            <h3 className="text-2xl font-semibold mb-3">{name}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">
              {description}
            </p>

            <div className="mt-auto">
              <div className="flex flex-wrap gap-2 mb-4">
                {technologies.map((technology) => (
                  <span
                    key={`${name}-${technology}`}
                    className={cn(
                      "text-sm rounded-full px-3 py-1 font-medium",
                      colorMapper[technology] || "bg-gray-200 text-gray-800"
                    )}
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-blue-500 hover:text-blue-700 font-medium transition-colors"
                >
                  View Project →
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
