"use client";
import Image from "next/image";
import { memo } from "react";

function AvatarMemo() {
  return (
    <div className="flex-col-center">
      <div className="relative h-32 w-32 overflow-clip rounded-full md:h-52 md:w-52">
        <Image src={"/avatar.png"} alt="img" fill className="object-cover" />
      </div>
    </div>
  );
}

const Avatar = memo(AvatarMemo);
export default Avatar;
