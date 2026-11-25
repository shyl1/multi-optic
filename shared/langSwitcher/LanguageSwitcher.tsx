"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { BiGlobe } from "react-icons/bi";

export default function LanguageSwitcher({
  headerScrolled,
}: {
  headerScrolled: boolean;
}) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function switchLocale() {
    const nextLocale = locale === "en" ? "ar" : "en";
    const segments = pathname.split("/");
    segments[1] = nextLocale;
    router.push(segments.join("/"));
  }

  return (
    <button
      type="button"
      onClick={switchLocale}
      aria-label={locale === "ar" ? "Switch to English" : "التبديل إلى العربية"}
      className={`hidden cursor-pointer items-center gap-2 px-1 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors duration-300 md:inline-flex ${
        headerScrolled
          ? "text-foreground hover:text-primary"
          : "text-primary-foreground/85 hover:text-primary-foreground"
      }`}
    >
      <BiGlobe size={15} aria-hidden />
      {locale === "ar" ? "EN" : "AR"}
    </button>
  );
}
