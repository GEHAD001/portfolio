"use client";
import { cn } from "@/lib/utils";
import P from "@/components/P";
import { motion } from "motion/react";
import { skills } from "@/database/data";

export default function SkillsSection({ className }: { className?: string }) {
  return (
    <motion.div
      className={cn(" bg-green-100 2xl:p-20 skills-layout gap-2", className)}
    >
      {skills.map(({ title, description, className }) => (
        <SkillCard
          title={title}
          description={description}
          className={className}
          key={title}
        />
      ))}
    </motion.div>
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
