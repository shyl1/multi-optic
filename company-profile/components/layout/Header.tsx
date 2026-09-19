"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { CONTACT, NAV } from "@/company-profile/data/site";
import Button from "@/shared/Button/Button";
import IconButton from "@/shared/IconButton/IconButton";
import { BiMenu, BiPhone, BiShoppingBag, BiX } from "react-icons/bi";
import LanguageSwitcher from "@/shared/langSwitcher/LanguageSwitcher";



export default function Header() {
  const t = useTranslations("header");

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerScrolled = scrolled || open;

  const phone = `tel:${CONTACT.phone.replace(/\s/g, "")}`;

  return (
    <header
      className={`
        fixed inset-x-0 top-0 z-50
        transition-all duration-500
        ${
          headerScrolled
            ? "border-b border-border bg-background/95 py-3 backdrop-blur-md"
            : "border-b border-transparent py-5 sm:py-6"
        }
      `}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 md:px-10">

        {/* Logo */}
        <Link
          href="#home"
          onClick={() => setOpen(false)}
          className="flex items-baseline gap-2"
        >
          <span
            className={`
              font-display text-2xl leading-none tracking-tight
              transition-colors sm:text-3xl
              ${
                headerScrolled
                  ? "text-primary"
                  : "text-primary-foreground"
              }
            `}
          >
            Multi Optic
          </span>

          <span
            className={`
              hidden text-[0.6rem] uppercase tracking-[0.35em]
              sm:block
              ${
                headerScrolled
                  ? "text-muted-foreground"
                  : "text-primary-foreground/70"
              }
            `}
          >
            Vision Care
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-5 lg:flex xl:gap-7">
          {NAV.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={`
                text-[0.75rem] uppercase tracking-[0.12em]
                transition-colors duration-300
                ${
                  headerScrolled
                    ? "text-foreground hover:text-primary"
                    : "text-primary-foreground/85 hover:text-primary-foreground"
                }
              `}
            >
              {t(item.key)}
            </Link>
          ))}

          <LanguageSwitcher headerScrolled={headerScrolled} />
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3">

          {/* Desktop Book Now */}
          <Button
            href={phone}
            className={`
              hidden
              border
              px-4 py-2.5
              text-[0.68rem]
              uppercase
              tracking-[0.18em]
              md:inline-flex
              ${
                headerScrolled
                  ? "border-primary bg-primary text-primary-foreground hover:bg-primary-deep"
                  : "border-primary-foreground/50 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
              }
            `}
          >
            <BiShoppingBag className="size-3.5" />
            {t("shopNow")}
          </Button>

          {/* Mobile Menu */}
          <IconButton
  ariaLabel={open ? t("closeMenu") : t("openMenu")}
  ariaExpanded={open}
  onClick={() => setOpen((value) => !value)}
  className={`
    rounded-md p-2 lg:hidden
    ${
      headerScrolled
        ? "text-foreground"
        : "text-primary-foreground"
    }
  `}
>
  {open ? (
    <BiX className="size-6" />
  ) : (
    <BiMenu className="size-6" />
  )}
</IconButton>
       
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`
          overflow-hidden transition-all duration-300 lg:hidden
          ${open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <nav className="mx-auto flex max-w-7xl flex-col px-4 pb-5 pt-4 sm:px-6">
          {NAV.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              onClick={() => setOpen(false)}
              className="
                border-b border-border py-4
                text-sm uppercase tracking-[0.12em]
                text-foreground
                transition-colors
                hover:text-primary
              "
            >
              {t(item.key)}
            </Link>
          ))}

          {/* Mobile Book Now */}
          <Button
            href={phone}
            className="mt-4 w-full"
          >
            <BiShoppingBag className="size-4" />
            {t("shopNow")}
          </Button>
        </nav>
      </div>
    </header>
  );
}