import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

export default function H2({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2 className={cn("text-4xl font-bold text-primary-text", className)}>
      {children}
    </h2>
  );
}
