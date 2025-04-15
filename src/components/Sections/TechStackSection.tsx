import React, { memo, useRef } from "react";
import Section from "../Section";
import { cn } from "@/lib/utils";
import { motion, useInView } from "motion/react";
import H2 from "../H2";
import P from "../P";
import { techs } from "@/database/data";
import Wrapper from "../Wrapper";

function TechStackSectionMemo({ className }: { className?: string }) {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { amount: 0.25, once: true });

  return (
    <Section
      className={cn("grid items-center justify-center gap-4 p-24", className)}
      ref={sectionRef}
    >
      <div className="flex-col-center">
        <H2 className="mb-4 font-bold">Technology Stack</H2>
        <P>A collection of modren tecnologies I am familiar with.</P>
      </div>
      <Wrapper className="flex-col-center gap-2 md:gap-0">
        {techs.map(({ name, description, Icon }) => (
          <motion.div
            key={name}
            style={{
              x: inView ? "0%" : "-200%",
              opacity: inView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className="flex flex-col items-center gap-4 will-change-auto md:flex-row"
          >
            <Icon className="size-15! md:size-40!" />
            <Wrapper className="flex-col-center text-center md:items-start md:text-start">
              <h3 className="text-xl font-bold">{name}</h3>
              <p className="text-gray-600">{description}</p>
            </Wrapper>
          </motion.div>
        ))}
      </Wrapper>
    </Section>
  );
}

const TechStackSection = memo(TechStackSectionMemo);
export default TechStackSection;
