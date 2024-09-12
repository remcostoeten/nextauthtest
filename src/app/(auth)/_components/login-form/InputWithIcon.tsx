'use client';

import { Input } from "@/components/ui";
import * as React from "react";

type InputWithIconProps = {
  id: string;
  placeholder: string;
  iconSrc: string;
  type: "text" | "password";
  showPasswordToggle?: boolean;
};

export default function InputWithIcon({
  id,
  placeholder,
  iconSrc,
  type,
  showPasswordToggle,
}: InputWithIconProps) {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className="flex  gap-3 items-center px-4 py-3 mt-2 w-full text-sm leading-none rounded-md border border-solid bg-white bg-opacity-10 border-white border-opacity-10 min-h-[44px] text-white text-opacity-30 max-md:max-w-full">
      <img
        loading="lazy"
        src={iconSrc}
        alt=""
        className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
      />
      <Input
        id={id}
        type={type === "password" && !showPassword ? "password" : "text"}
        placeholder={placeholder}
        className="self-stretch my-auto bg-transparent border-none text-white text-opacity-30 placeholder-white placeholder-opacity-30 focus:ring-0"
      />
      {showPasswordToggle && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="focus:outline-none"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/878440fa0b130eee749fb89c5d6a20e7ee31bbdfe40b0176fd1d17f383c2f54a?placeholderIfAbsent=true&apiKey=3cf1db2ab1694ce4be6d4ee2ec473197"
            alt={showPassword ? "Hide password" : "Show password"}
            className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
          />
        </button>
      )}
    </div>
  );
}
