import React, { memo } from "react";
import Section from "@/components/Section";
import Avatar from "@/components/Avatar";
import P from "@/components/P";
import TextTransition from "@/components/TextTransition";
import Wrapper from "../Wrapper";
import { DialogContact } from "../DialogContact";

// Note: Most Websites Ignore define Height at all.

function HeroSectionMemo() {
  return (
    <>
      <Section id="Hero" className="relative">
        <Wrapper className="relative xl:min-h-full">
          {/* Sticky Content */}
          <Wrapper className="flex-col-center gap-4 rounded-2xl bg-amber-100 p-[clamp(1rem,__6vw,__1.125rem)] py-8 text-center xl:sticky xl:top-4 xl:py-12">
            <Avatar />
            <div className="flex-col-center">
              <TextTransition
                prefix="Eng. Jehad"
                first="Developer"
                last="Designer"
                className="font-bold"
              />
            </div>

            <div className="flex-col-center mx-auto max-w-3/4 gap-4 md:max-w-1/2 xl:max-w-3/4">
              <P>
                I&apos;m Jehad Jadallah Hamed, a junior software developer and
                design base on AI. Based in Libya, I recently graduated from
                Omar Al-Mukhtar University (OMU) in 2024, bringing fresh
                perspectives and innovative solutions to the tech world.
              </P>
              <DialogContact />
            </div>
          </Wrapper>
        </Wrapper>
      </Section>
    </>
  );
}

const HeroSection = memo(HeroSectionMemo);
export default HeroSection;
