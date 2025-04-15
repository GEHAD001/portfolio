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
    <main className={cn("base-layout my-1 lg:my-4", className)}>
      {children}
    </main>
  );
}

const GridBaseLayout = memo(GridBaseLayoutMemo);
export default GridBaseLayout;
