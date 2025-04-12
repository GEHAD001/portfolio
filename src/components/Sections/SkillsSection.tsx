"use client";
import { cn } from "@/lib/utils";
import P from "@/components/P";
import { motion } from "motion/react";
import { skills } from "@/database/data";
import Section from "../Section";
import H2 from "../H2";

export default function SkillsSection({ className }: { className?: string }) {
  return (
    <Section className={cn("flex-col-center gap-4", className)}>
      <H2 className="text-4xl font-bold">Skills</H2>
      <P>Here&apos;s what I bring to the table</P>
      <motion.div className={cn("skills-layout gap-4")}>
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
    <div
      className={cn(
        "flex-col-center p-8 rounded-2xl shadow-lg transition-all hover:scale-[1.02]",
        "border-2 border-opacity-20",
        className
      )}
    >
      <h1 className="text-3xl font-semibold mb-2">{title}</h1>
      <P className="text-opacity-90">{description}</P>
    </div>
  );
}
