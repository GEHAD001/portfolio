import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";
import { playFair } from "@/app/fonts";

export default function H2({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "text-primary-text text-2xl font-bold md:text-2xl xl:text-3xl",
        playFair.className,
        className,
      )}
    >
      {children}
    </h2>
  );
}
