import ContactNav from "@/components/ContactNav";
import Section from "@/components/Section";
import Avatar from "@/components/Avatar";
import P from "@/components/P";
import TextTransition from "@/components/TextTransition";
import Wrapper from "../Wrapper";

export default function HeroSection() {
  return (
    <>
      <Section id="Hero" className="relative bg-amber-50">
        <div className="relative min-h-full p-20">
          <Wrapper className="flex-col-center h-dynamic-screen gap-4 text-center 2xl:sticky 2xl:top-2 2xl:p-20">
            <Avatar />
            <div className="flex-col-center">
              <TextTransition
                prefix="Eng.Gehad"
                first="Developer"
                last="Designer"
              />
            </div>

            <div className="flex-col-center gap-2">
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
            </div>

            <div className="absolute bottom-8 left-8">
              <ContactNav />
            </div>
          </Wrapper>
        </div>
      </Section>
    </>
  );
}
