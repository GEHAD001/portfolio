import { cn } from "@/lib/utils";
import { memo, ReactNode } from "react";

function GridBaseLayoutMemo({
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

const GridBaseLayout = memo(GridBaseLayoutMemo);
export default GridBaseLayout;
