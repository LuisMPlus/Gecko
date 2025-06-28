import React from "react";
import logo from "@/assets/imgs/logo.png";

function Logo({ size = "md" }) {
  // Tamaños: sm, md, lg
  const sizeClasses = {
    sm: "w-8 h-8 sm:w-10 sm:h-10",
    md: "w-12 h-12 sm:w-14 sm:h-14",
    lg: "w-16 h-16 sm:w-20 sm:h-20"
  };
  return (
    <div className="flex-shrink-0">
      <div className="flex items-center">
        <div className={`${sizeClasses[size]} bg-gradient-to-br from-[#F69055] to-[#F6C155] shadow-lg rounded-xl flex items-center justify-center p-1`}>
          <img src={logo} alt="Logo" className="object-contain w-full h-full rounded-lg drop-shadow-md" />
        </div>
        <span className="ml-3 text-white font-extrabold text-lg sm:text-2xl tracking-wide logo-text">
          <span className="">Gecko</span>
        </span>
      </div>
    </div>
  );
}

export default Logo;
