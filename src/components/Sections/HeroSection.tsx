import React, { memo } from "react";
import Section from "@/components/Section";
import Avatar from "@/components/Avatar";
import P from "@/components/P";
import TextTransition from "@/components/TextTransition";
import Wrapper from "../Wrapper";
import { DialogContact } from "../DialogContact";

function HeroSectionMemo() {
  return (
    <>
      <Section id="Hero" className="relative bg-amber-50">
        <div className="relative min-h-full">
          <Wrapper className="flex-col-center h-dynamic-screen gap-4 text-center 2xl:sticky 2xl:top-2 2xl:p-20">
            <Avatar />
            <div className="flex-col-center">
              <TextTransition
                prefix="Eng. Jehad"
                first="Developer"
                last="Designer"
              />
            </div>

            <div className="flex-col-center gap-4 px-8">
              <P>
                I&apos;m Jehad Jadallah Hamed, a junior software developer and
                design base on AI. Based in Libya, I recently graduated from
                Omar Al-Mukhtar University (OMU) in 2024, bringing fresh
                perspectives and innovative solutions to the tech world.
              </P>
              <P>
                My portfolio is thoughtfully organized into sections, each
                showcasing unique projects and experiences that demonstrate my
                passion for creating impactful digital solutions.
              </P>
              <DialogContact />
            </div>
          </Wrapper>
        </div>
      </Section>
    </>
  );
}

const HeroSection = memo(HeroSectionMemo);
export default HeroSection;
