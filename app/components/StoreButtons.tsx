import Image from "next/image";

export const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.yl.laundrygoplus&hl=id";
/** Not on the App Store yet: the button shows "Segera" until this is set. */
export const APP_STORE_URL: string | null = null;

const AppleIcon = ({ className }: { className: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
  </svg>
);

const stores = [
  { name: "Play Store", href: PLAY_STORE_URL, prefix: "Download di" },
  { name: "App Store", href: APP_STORE_URL, prefix: "Segera di" },
];

type Props = {
  // "badge": tombol besar 2 baris (Hero, Cara Pakai, Footer); "compact": tombol kecil untuk Navbar
  variant?: "badge" | "compact";
  theme?: "light" | "dark";
  className?: string;
};

const StoreIcon = ({ name, size, dark }: { name: string; size: number; dark: boolean }) =>
  name === "Play Store" ? (
    <Image src="/google-play-store-icon.svg" alt="" width={size} height={size} />
  ) : (
    <AppleIcon className={dark ? "text-white" : "text-gray-900"} />
  );

const StoreButtons = ({ variant = "badge", theme = "light", className = "" }: Props) => {
  if (variant === "compact") {
    // Navbar: only stores the app is on.
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        {stores
          .filter((store) => store.href)
          .map((store) => (
            <a
              key={store.name}
              href={store.href ?? undefined}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Download LaundryGo+ di ${store.name}`}
              className="flex items-center gap-2 px-3 sm:px-4 py-2.5 bg-white hover:bg-gray-50 border border-gray-200 text-gray-800 rounded-full transition-all font-medium text-sm shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <Image src="/google-play-store-icon.svg" alt="" width={18} height={18} />
              <span className="hidden sm:inline">{store.name}</span>
            </a>
          ))}
      </div>
    );
  }

  const dark = theme === "dark";
  const badgeClass = dark
    ? "bg-gray-900 hover:bg-black text-white border-gray-900 shadow-[0_14px_30px_-12px_rgba(17,24,39,0.55)]"
    : "bg-white hover:bg-gray-50 text-gray-800 border-gray-200 shadow-sm hover:shadow-md";

  return (
    <div className={`flex flex-col sm:flex-row gap-3 ${className}`}>
      {stores.map((store) => {
        const content = (
          <>
            <span className="w-[30px] h-[30px] flex items-center justify-center [&>svg]:w-[30px] [&>svg]:h-[30px]">
              <StoreIcon name={store.name} size={30} dark={dark} />
            </span>
            <span className="flex flex-col items-start leading-tight">
              <span className={`text-xs ${dark ? "text-gray-300" : "text-gray-500"}`}>{store.prefix}</span>
              <span className="text-lg font-bold">{store.name}</span>
            </span>
          </>
        );
        // Not on this store yet: shown, but not a link.
        return store.href ? (
          <a
            key={store.name}
            href={store.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center gap-3 px-5 py-2.5 border rounded-2xl hover:-translate-y-0.5 transition-all ${badgeClass}`}
          >
            {content}
          </a>
        ) : (
          <span
            key={store.name}
            aria-disabled="true"
            title="Versi iPhone sedang disiapkan"
            className={`inline-flex items-center justify-center gap-3 px-5 py-2.5 border rounded-2xl opacity-50 cursor-default ${badgeClass}`}
          >
            {content}
          </span>
        );
      })}
    </div>
  );
};

export default StoreButtons;
