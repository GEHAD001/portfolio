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
      className={cn("grid gap-12 p-24 items-center justify-center", className)}
      ref={sectionRef}
    >
      <div className="flex-col-center">
        <H2 className="text-4xl font-bold mb-4">Technology Stack</H2>
        <P>A collection of modren tecnologies I am familiar with.</P>
      </div>
      {techs.map(({ name, description, Icon }) => (
        <motion.div
          style={{
            x: inView ? "0%" : "-200%",
            opacity: inView ? 1 : 0,
          }}
          className={cn(
            "grid grid-flow-row md:grid-flow-col gap-4 items-center transition-[transform_opacity] duration-[2250ms] place-items-center"
          )}
          key={name}
        >
          <Icon size={80} className="place-items-center" />
          <div className="flex flex-col text-center md:text-start">
            <h1 className="text-[clamp(0.5rem,__10vw+0.5em__,1.5rem)]">
              {name}
            </h1>
            <P>{description}</P>
          </div>
        </motion.div>
      ))}
    </Section>
  );
}
