import { cn } from "@/lib/utils";
import { ReactNode } from "react";

function P({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) {
  return <p className={cn("", className)}>{children}</p>;
}

export default P;
