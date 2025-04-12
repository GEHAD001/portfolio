"use client";
import React, { useEffect, useRef, useState } from "react";
import Section from "../Section";
import { cn } from "@/lib/utils";
import { useScroll, useTransform, motion } from "motion/react";
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
    isDesktop ? ["0%", "200%"] : ["0%", "0%"],
  );

  return (
    <Section
      className={cn("grid grid-cols-1 gap-2 lg:grid-cols-2", className)}
      ref={section}
    >
      <div className="relative">
        <motion.div
          style={{ y }}
          className="shadow-md, rounded-xl border-2 bg-gradient-to-r from-purple-100 to-purple-200 p-12 text-3xl will-change-transform"
        >
          <h1>
            What to Expect From me as{" "}
            <span className="text-purple-600">Designer</span>
          </h1>
        </motion.div>
      </div>
      <div className="grid grid-cols-1 gap-2">
        {designerException.map(({ title, description }) => (
          <div
            key={title}
            className="flex-col-center gap-6 rounded-xl border-2 border-purple-200 bg-white/50 p-8 shadow-sm transition-colors duration-300 hover:bg-purple-50 hover:shadow-md"
          >
            <h1 className="text-2xl font-semibold text-purple-800">{title}</h1>
            <p className="text-sm text-purple-900/80">{description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
