import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function GridBaseLayout({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <main className={cn("base-layout lg:h-dynamic-screen", className)}>
      {children}
    </main>
  );
}
