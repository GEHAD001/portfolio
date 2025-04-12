"use client";
import { cn } from "@/lib/utils";
import P from "@/components/P";
import { motion } from "motion/react";
import { skills } from "@/database/data";
import Section from "../Section";
import H2 from "../H2";

export default function SkillsSection({ className }: { className?: string }) {
  return (
    <Section className={cn("flex-col-center", className)}>
      <H2 className="text-4xl font-bold mb-4">Skills</H2>
      <P>
        A collection of my recent work showcasing my skills and experience in
        web development.
      </P>
      <motion.div className={cn("skills-layout gap-2")}>
        {skills.map(({ title, description, className }) => (
          <SkillCard
            title={title}
            description={description}
            className={className}
            key={title}
          />
        ))}
      </motion.div>
    </Section>
  );
}

function SkillCard({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div className={cn("flex-col-center border-2 p-8 rounded-xl", className)}>
      <h1 className="text-3xl font-semibold">{title}</h1>
      <P>{description}</P>
    </div>
  );
}
