import { cn } from "@/lib/utils";
import { ReactNode } from "react";

function P({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("text-lg max-w-2xl mx-auto", className)}>{children}</p>
  );
}

export default P;
