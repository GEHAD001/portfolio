"use client";
import Image from "next/image";
import TextTransition from "@/components/TextTransition";

function Avatar() {
  return (
    <div className="flex-col-center">
      <div className="relative avatar-responsive overflow-clip rounded-full">
        <Image src={"/avatar.png"} alt="img" fill className="object-cover" />
      </div>
    </div>
  );
}

export default Avatar;
