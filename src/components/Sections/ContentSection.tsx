import Section from "@/components/Section";

import SkillsSection from "@/components/Sections/SkillsSection";
import TechStackSection from "./TechStackSection";
import ProjectsSection from "./ProjectsSection";
import DeveloperSection from "./DeveloperSection";
import DesignerSection from "./DesignerSection";
export default function ContentSection() {
  return (
    <Section id="Content">
      {/* (`Skills`) */}
      <SkillsSection />

      {/* (`TechStack`) */}
      <TechStackSection className="bg-green-200 overflow-hidden" />

      {/* (`Projects`) */}
      <ProjectsSection className=" bg-amber-200 overflow-hidden" />

      <DeveloperSection className="p-20 bg-lime-200 overflow-hidden" />
      <DesignerSection className="p-20 bg-orange-200 overflow-hidden" />
    </Section>
  );
}
