"use client";
import { CustomButtonProps } from "@/types";
import Image from "next/image";
import React from "react";

const CustomButton = ({
  title,
  btnType,
  containerStyles,
  textStyle,
  rightIcon,
  handleClick,
}: CustomButtonProps) => {
  return (
    <div>
      <button
        disabled={false}
        type={btnType || "button"}
        className={`custom-btn ${containerStyles}`}
        onClick={handleClick}
      >
        <span className={`flex-1  ${textStyle}`}>{title}</span>
        {rightIcon && (
          <div className="relative w-6 h-6">
            <Image
              src={rightIcon}
              alt="arrow_left"
              fill
              className="object-contain ml-3"
            />
          </div>
        )}
      </button>
    </div>
  );
};

export default CustomButton;
