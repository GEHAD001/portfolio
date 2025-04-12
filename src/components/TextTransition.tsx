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
        "flex items-center gap-2 rounded bg-black p-2 text-2xl text-white",
        className,
      )}
    >
      <div>{prefix}</div>
      <div className="flex h-[2rem] flex-col overflow-hidden leading-[2rem]">
        <motion.span
          style={{ y: firstWordY }}
          className="relative bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent transition-transform duration-1000 will-change-transform"
        >
          {first}
        </motion.span>
        <motion.span
          style={{ y: lastWordY }}
          className="relative text-purple-600 transition-transform duration-1000"
        >
          {last}
        </motion.span>
      </div>
    </div>
  );
}

export default TextTransition;
