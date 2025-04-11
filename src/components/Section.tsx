import { cn } from "@/lib/utils";
import { ReactNode, Ref } from "react";

function Section({
  children,
  className,
  id,
  ref,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  ref?: Ref<HTMLDivElement>;
}) {
  return (
    <section className={cn("", className)} id={id} ref={ref}>
      {children}
    </section>
  );
}
export default Section;
