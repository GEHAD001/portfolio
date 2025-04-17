import React, { memo } from "react";
import Section from "../Section";
import { cn } from "@/lib/utils";
import Wrapper from "../Wrapper";
import { developerException } from "@/database/data";
import H2 from "../H2";
import P from "../P";
import { playFair } from "@/app/fonts";

function DeveloperSectionMemo({ className }: { className?: string }) {
  return (
    <Section className={cn("flex-col-center bg-blue-50", className)}>
      <H2 className="mb-4 font-bold">
        How I Work as a{" "}
        <span className="typing-9 inline-flex overflow-hidden bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-nowrap text-transparent">
          Developer
        </span>
      </H2>
      <P className="mx-auto max-w-2xl text-center text-gray-600">
        I love solving problems and creating great solutions. Here&apos;s my
        approach to development!
      </P>
      <Wrapper className="developer-layout mt-8 gap-4">
        {developerException.map(({ title, description, className }) => (
          <div
            className={cn(
              "rounded-xl p-6 shadow-md transition-all hover:shadow-lg",
              className,
            )}
            key={title}
          >
            <h3 className={`mb-2 text-lg font-bold ${playFair.className}`}>
              {title}
            </h3>
            <p className="text-sm text-balance text-gray-600">{description}</p>
          </div>
        ))}
      </Wrapper>
    </Section>
  );
}

const DeveloperSection = memo(DeveloperSectionMemo);
export default DeveloperSection;
