import React, { memo, useRef } from "react";
import Section from "../Section";
import { cn } from "@/lib/utils";
import { motion, useInView } from "motion/react";
import { colorMapper, projects } from "@/database/data";
import P from "../P";
import H2 from "../H2";

function ProjectsSectionMemo({ className }: { className?: string }) {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { amount: 0.15, once: true });

  return (
    <Section className={cn("", className)} ref={sectionRef} id="Projects">
      <motion.div
        className="mb-12 text-center"
        style={{
          y: inView ? 0 : -50,
          opacity: inView ? 1 : 0,
          transition: "all 0.7s ease-out",
        }}
      >
        <H2 className="mb-4 text-4xl font-bold">Featured Projects</H2>
        <P className="mx-auto max-w-2xl text-lg">
          A collection of my recent work showcasing my skills and experience in
          web development.
        </P>
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-2">
        {projects.map(({ name, description, technologies }, index) => (
          <motion.div
            className="flex h-full flex-col rounded-xl border border-gray-200/20 bg-white/10 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl"
            key={name}
            style={{
              y: inView ? 0 : 100,
              opacity: inView ? 1 : 0,
              transition: `all ${0.5 + index * 0.1}s ease-out`,
            }}
          >
            <h3 className="mb-3 text-2xl font-semibold">{name}</h3>
            <p className="mb-4 flex-grow text-gray-700 dark:text-gray-300">
              {description}
            </p>

            <div className="mt-auto">
              <div className="mb-4 flex flex-wrap gap-2">
                {technologies.map((technology) => (
                  <span
                    key={`${name}-${technology}`}
                    className={cn(
                      "rounded-full px-3 py-1 text-sm font-medium",
                      colorMapper[technology] || "bg-gray-200 text-gray-800",
                    )}
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

const ProjectsSection = memo(ProjectsSectionMemo);
export default ProjectsSection;
