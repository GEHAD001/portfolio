import Section from "@/components/Section";

import SkillsSection from "@/components/Sections/SkillsSection";
import TechStackSection from "./TechStackSection";
import ProjectsSection from "./ProjectsSection";
import DeveloperSection from "./DeveloperSection";
import DesignerSection from "./DesignerSection";
import ContactSection from "./ContactSection";
import { memo } from "react";
function ContentSectionMemo() {
  return (
    <Section id="Content" className="flex-col-center gap-4">
      <SkillsSection className="w-full rounded-2xl bg-amber-50 p-12 shadow-lg md:p-16" />

      <TechStackSection className="w-full rounded-2xl bg-emerald-50 p-12 shadow-lg md:p-16" />

      <ProjectsSection className="w-full rounded-2xl bg-rose-50 p-12 shadow-lg md:p-16" />

      <DeveloperSection className="w-full rounded-2xl p-12 shadow-lg md:p-16" />

      <DesignerSection className="w-full rounded-2xl bg-purple-50 p-12 shadow-lg md:p-16" />

      <ContactSection className="w-full rounded-2xl bg-indigo-50 p-12 shadow-lg md:p-16" />
    </Section>
  );
}

const ContentSection = memo(ContentSectionMemo);
export default ContentSection;
