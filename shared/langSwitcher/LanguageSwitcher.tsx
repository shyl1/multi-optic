
"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import Button from "../Button/Button";
import { BiGlobe } from "react-icons/bi";

export default function LanguageSwitcher({ headerScrolled }: { headerScrolled: () => void }) {
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
        <Button
            onClick={switchLocale}
            className={`
      hidden border px-3 py-2.5 text-[0.68rem]
      uppercase tracking-[0.18em] md:inline-flex cursor-pointer
      ${headerScrolled
                    ? "border-primary bg-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    : "border-0 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
                }
    `}
        >
            <BiGlobe size={16} strokeWidth={1.2} />
            {locale === "ar" ? "EN" : "AR"}
        </Button>

    );
}