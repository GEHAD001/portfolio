import ContactNav from "@/components/ContactNav";
import Section from "@/components/Section";
import Avatar from "@/components/Avatar";
import P from "@/components/P";
import TextTransition from "@/components/TextTransition";
import Wrapper from "../Wrapper";

export default function HeroSection() {
  return (
    <>
      <Section id="Hero" className="  ">
        <div className="relative h-full">
          <Wrapper className="2xl:sticky 2xl:top-2 bg-amber-200 2xl:p-20 flex-col-center h-dynamic-screen">
            <Avatar />
            <div className="flex-col-center">
              <TextTransition
                prefix="Eng.Gehad"
                first="Developer"
                last="Designer"
              />
            </div>
            <P>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
              blanditiis beatae officiis laudantium molestias ullam non optio.
              Magnam hic odio repellendus deserunt ex temporibus porro odit!
              Itaque nobis vero laudantium?
            </P>

            <div className="absolute bottom-8 left-8">
              <ContactNav />
            </div>
          </Wrapper>
        </div>
      </Section>
    </>
  );
}
