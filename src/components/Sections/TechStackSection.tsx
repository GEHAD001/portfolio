import React, { ReactNode, useRef } from "react";
import Section from "../Section";
import { cn } from "@/lib/utils";
import {
  FramermotionOriginal,
  NextjsOriginal,
  ReactOriginal,
  TailwindcssOriginal,
  TypescriptOriginal,
} from "devicons-react";
import { useScroll, motion, useInView, MotionValue } from "motion/react";

const techs: {
  name: string;
  description: string;
  Icon: React.FunctionComponent;
}[] = [
  {
    name: "TypeScript",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, sequi sapiente aspernatur.",
    Icon: TypescriptOriginal,
  },
  {
    name: "Tailwind",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, sequi sapiente aspernatur.",
    Icon: TailwindcssOriginal,
  },
  {
    name: "Next",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, sequi sapiente aspernatur.",
    Icon: NextjsOriginal,
  },
  {
    name: "React",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, sequi sapiente aspernatur.",
    Icon: ReactOriginal,
  },
  {
    name: "Motion",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, sequi sapiente aspernatur.",
    Icon: FramermotionOriginal,
  },
];

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
      {techs.map(({ name, description, Icon }) => (
        <motion.div
          style={{
            x: inView ? "0%" : "-200%",
            opacity: inView ? 1 : 0,
          }}
          className={cn(
            "grid grid-flow-row md:grid-flow-col gap-4 items-center transition-[transform_opacity] duration-[2250ms]"
          )}
          key={name}
        >
          <Icon size={80} />
          <div>
            <h1 className="text-[clamp(0.5rem,__10vw+0.5em__,1.5rem)]">
              {name}
            </h1>
            <p>{description}</p>
          </div>
        </motion.div>
      ))}
    </Section>
  );
}
