"use client";
import Image from "next/image";

function Avatar() {
  return (
    <div className="flex-col-center">
      <div className="relative w-48 h-48 md:w-64 md:h-64 overflow-clip rounded-full">
        <Image src={"/avatar.png"} alt="img" fill className="object-cover" />
      </div>
    </div>
  );
}

export default Avatar;
