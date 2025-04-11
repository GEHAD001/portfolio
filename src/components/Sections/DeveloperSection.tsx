import React from "react";
import Section from "../Section";
import { cn } from "@/lib/utils";
import Wrapper from "../Wrapper";

const developerException: {
  title: string;
  description: string;
  className: string;
}[] = [
  {
    title: "Plan & Search before Anything",
    description:
      "before takes any desciton that don't have expernice on it, should plan, search, and ask experts to get better result",
    className: "grid-area-one",
  },
  {
    title: "Learn from mastikes",
    description:
      "as any Human make mastikes, but should learn from it when happen to try much as possible to make it less and less",
    className: "grid-area-two",
  },
  {
    title: "Verstile",
    description:
      "with build good foundation, I can move between frameworks and libraries because I am focus on Theortical",
    className: "grid-area-three",
  },
  {
    title: "Levrage Power of AI",
    description:
      "my ophoinoe about AI is make it as friend not enemy, that will help us to do awsowe things in less-time, (time is gold and should know about that)",
    className: "grid-area-four",
  },
  {
    title: "Confidence in what I Know",
    description:
      "i am from type that let any learn topic take time to understand, to raise to confidence level",
    className: "grid-area-five",
  },
  {
    title: "Trusted and honest",
    description:
      "I Honest and i am not take any non-logical Decsion or unTrusted",
    className: "grid-area-six",
  },
];

export default function DeveloperSection({
  className,
}: {
  className?: string;
}) {
  return (
    <Section className={cn("", className)}>
      <h1>What Did You Expect From me As Developer</h1>
      <Wrapper className="developer-layout gap-2">
        {developerException.map(({ title, description, className }) => (
          <div className={cn("border p-2", className)} key={title}>
            {title}
            {description}
          </div>
        ))}
      </Wrapper>
    </Section>
  );
}
