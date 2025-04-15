import React, { memo } from "react";
import { cn } from "@/lib/utils";
import P from "@/components/P";
import { motion } from "motion/react";
import { skills } from "@/database/data";
import Section from "../Section";
import H2 from "../H2";

function SkillsSectionMemo({ className }: { className?: string }) {
  return (
    <Section className={cn("flex-col-center gap-4", className)}>
      <H2 className="font-bold">Skills</H2>
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
    <motion.div
      className={cn(
        "flex-col-center gap-2 rounded-lg bg-white p-4 shadow-lg",
        className,
      )}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-center text-sm text-balance text-gray-600">
        {description}
      </p>
    </motion.div>
  );
}

const SkillsSection = memo(SkillsSectionMemo);
export default SkillsSection;
