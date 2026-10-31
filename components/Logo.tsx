import Image from "next/image";
import logo from "@/public/brand/logo.png";

const sizes = { sm: "h-11 w-auto", md: "h-20 w-auto", lg: "h-48 w-auto sm:h-56" };

export default function Logo({ className = "", size = "md", priority }: { className?: string; size?: keyof typeof sizes; priority?: boolean }) {
  return (
    <Image
      src={logo}
      alt="LC Imports"
      priority={priority}
      quality={95}
      sizes="(max-width: 640px) 240px, 320px"
      className={`select-none ${sizes[size]} ${className}`}
    />
  );
}
