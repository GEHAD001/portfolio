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
        "text-primary-text text-[clamp(14px,__2.5vw,__16px)]",
        className,
      )}
    >
      {children}
    </p>
  );
}

export default P;
