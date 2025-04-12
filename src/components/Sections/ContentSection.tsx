import Section from "@/components/Section";

import SkillsSection from "@/components/Sections/SkillsSection";
import TechStackSection from "./TechStackSection";
import ProjectsSection from "./ProjectsSection";
import DeveloperSection from "./DeveloperSection";
import DesignerSection from "./DesignerSection";
import ContactSection from "./ContactSection";
export default function ContentSection() {
  return (
    <Section id="Content">
      {/* (`Skills`) */}
      <SkillsSection className="bg-amber-300 p-12 md:p-24" />

      {/* (`TechStack`) */}
      <TechStackSection className="p-12 md:p-24 bg-green-200 overflow-hidden" />

      {/* (`Projects`) */}
      <ProjectsSection className="p-12 md:p-24 bg-amber-200 overflow-hidden" />

      <DeveloperSection className="p-12 md:p-24 bg-lime-200 overflow-hidden" />
      <DesignerSection className="p-12 md:p-24 bg-orange-200 overflow-hidden" />
      <ContactSection className="p-12 md:p-24 bg-lime-200 overflow-hidden" />
    </Section>
  );
}
