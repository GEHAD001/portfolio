"use client";
import React, { useEffect, useRef, useState } from "react";
import Section from "../Section";
import { cn } from "@/lib/utils";
import { useScroll, useTransform, motion } from "motion/react";
import P from "../P";
import { designerException } from "@/database/data";

export default function DesignerSection({ className }: { className?: string }) {
  const section = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkWidth = () => setIsDesktop(window.innerWidth >= 1024);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  const { scrollYProgress } = useScroll({
    target: section,
    offset: ["start end", "end"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    isDesktop ? ["0%", "200%"] : ["0%", "0%"]
  );

  return (
    <Section
      className={cn("grid grid-cols-1 lg:grid-cols-2 gap-2", className)}
      ref={section}
    >
      <div className="relative">
        <motion.div style={{ y }} className=" text-3xl border-2 p-12">
          <h1>What Did Expect From me as Designer</h1>
        </motion.div>
      </div>
      <div className="grid grid-cols-1 gap-2">
        {designerException.map(({ title, description }) => (
          <div key={title} className="border-2 flex-col-center gap-8 p-12">
            <h1 className="text-3xl">{title}</h1>
            <P>{description}</P>
          </div>
        ))}
      </div>
    </Section>
  );
}
