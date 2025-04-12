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
    <p
      className={cn(
        "text-primary-text mx-auto max-w-2xl text-sm sm:text-base",
        className,
      )}
    >
      {children}
    </p>
  );
}

export default P;
