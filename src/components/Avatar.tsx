"use client";
import Image from "next/image";
import { memo } from "react";

function AvatarMemo() {
  return (
    <div className="flex-col-center">
      <div className="relative h-[clamp(6rem,14vw__,__12rem)] w-[clamp(6rem,14vw__,__12rem)] overflow-clip rounded-full">
        <Image src={"/avatar.png"} alt="img" fill className="object-cover" />
      </div>
    </div>
  );
}

const Avatar = memo(AvatarMemo);
export default Avatar;
