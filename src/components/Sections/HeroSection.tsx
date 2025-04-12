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
        <div className="relative h-full">
          <Wrapper className="2xl:sticky 2xl:top-2 2xl:p-20 flex-col-center gap-4 h-dynamic-screen text-center">
            <Avatar />
            <div className="flex-col-center">
              <TextTransition
                prefix="Eng.Gehad"
                first="Developer"
                last="Designer"
              />
            </div>

            <div>
              <P>
                I&apos;m Jehad Jadallah Hamed, junior software developer and
                designer base on AI, live in libya, gradutaed from OMU (Omar
                Almokhtar Unversity) In 2024.
              </P>
              <P>
                My Portfolio Split into Section, each Section tell about itself
                and the story behind it.
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
