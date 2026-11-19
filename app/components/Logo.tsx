import Image from "next/image";

/** The app icon (white mark on terracotta) and the lowercase "laundrygo+" wordmark, like in the app. */
const Logo = ({ dark = false, priority = false }: { dark?: boolean; priority?: boolean }) => (
  <span className="flex items-center gap-2.5">
    <span className="w-10 h-10 relative bg-brand rounded-xl flex items-center justify-center shadow-sm overflow-hidden">
      <Image src="/laundrygoplus-icon.svg" alt="" fill className="object-contain scale-[0.7]" priority={priority} />
    </span>
    <span className={`font-[family-name:var(--font-comfortaa)] text-xl font-bold tracking-tight ${dark ? "text-white" : "text-gray-900"}`}>
      laundrygo<span className="text-brand-light">+</span>
    </span>
    <span className="sr-only">LaundryGo+</span>
  </span>
);

export default Logo;
