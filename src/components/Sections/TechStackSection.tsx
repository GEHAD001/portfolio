import React, { useRef } from "react";
import Section from "../Section";
import { cn } from "@/lib/utils";
import { motion, useInView } from "motion/react";
import H2 from "../H2";
import P from "../P";
import { techs } from "@/database/data";

export default function TechStackSection({
  className,
}: {
  className?: string;
}) {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { amount: 0.25, once: true });

  return (
    <Section
      className={cn("grid items-center justify-center gap-12 p-24", className)}
      ref={sectionRef}
    >
      <div className="flex-col-center">
        <H2 className="mb-4 text-4xl font-bold">Technology Stack</H2>
        <P>A collection of modren tecnologies I am familiar with.</P>
      </div>
      {techs.map(({ name, description, Icon }) => (
        <motion.div
          style={{
            x: inView ? "0%" : "-200%",
            opacity: inView ? 1 : 0,
          }}
          className={cn(
            "grid grid-flow-row items-center gap-6 rounded-xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-sm transition-[transform_opacity] duration-[1850ms] hover:bg-white/10 hover:shadow-xl md:grid-flow-col",
          )}
          key={name}
        >
          <div className="flex-col-center rounded-lg bg-gradient-to-br from-white/10 to-white/5 p-4 shadow-inner">
            <Icon size={80} />
          </div>
          <div className="flex flex-col space-y-2 text-center md:text-start">
            <h1 className="text-xl font-semibold">{name}</h1>
            <P>{description}</P>
          </div>
        </motion.div>
      ))}
    </Section>
  );
}
