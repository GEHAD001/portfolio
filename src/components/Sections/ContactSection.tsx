import React, { memo } from "react";
import Section from "../Section";
import { cn } from "@/lib/utils";
import { DialogContact } from "../DialogContact";
import { playFair } from "@/app/fonts";

function ContactSectionMemo({ className }: { className?: string }) {
  return (
    <Section className={cn("flex", className)}>
      <div className="w-full">
        <h2 className={`mb-4 text-3xl font-semibold ${playFair.className}`}>
          Contact
        </h2>
        <p className="mb-4">
          If you have any questions, suggestions, or just want to say hello,
          feel free to reach out to me. I&apos;m always open to new
          opportunities and collaborations.
        </p>
        <div className="flex-col-center">
          <DialogContact />
        </div>
      </div>
    </Section>
  );
}

const ContactSection = memo(ContactSectionMemo);
export default ContactSection;
