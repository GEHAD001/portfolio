"use client";
import HeroSection from "@/components/Sections/HeroSection";
import GridBaseLayout from "@/components/Layouts/GridBaseLayout";
import ContentSection from "@/components/Sections/ContentSection";

export default function Home() {
  return (
    <>
      <GridBaseLayout className="gap-2">
        <HeroSection />
        <ContentSection />
      </GridBaseLayout>
    </>
  );
}
