"use client";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import { motion, motionValue, useTransform } from "motion/react";

function TextTransition({
  prefix,
  first,
  last,
  className,
}: {
  prefix?: string;
  first?: string;
  last?: string;
  className?: string;
}) {
  const switcher = motionValue(0);

  useEffect(() => {
    const switcherInterval = setInterval(() => {
      switcher.set(switcher.get() === 0 ? 1 : 0);
    }, 2000);

    return () => {
      clearInterval(switcherInterval);
    };
  }, [switcher]);

  const firstWordY = useTransform(switcher, [0, 1], ["0", "100%"]);
  const lastWordY = useTransform(switcher, [0, 1], ["0", "-100%"]);

  return (
    <div
      className={cn(
        "flex items-center gap-2 bg-black text-white p-2 rounded text-2xl",
        className
      )}
    >
      <div>{prefix}</div>
      <div className="flex flex-col h-[2rem] leading-[2rem]  overflow-hidden">
        <motion.span
          style={{ y: firstWordY }}
          className="relative transition-transform duration-1000"
        >
          {first}
        </motion.span>
        <motion.span
          style={{ y: lastWordY }}
          className="relative transition-transform duration-1000"
        >
          {last}
        </motion.span>
      </div>
    </div>
  );
}

export default TextTransition;
