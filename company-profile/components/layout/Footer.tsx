"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";
import { CONTACT, SERVICES } from "@/company-profile/data/site";
import { BiMapPin, BiPhone } from "react-icons/bi";
import { RiMvAiLine } from "react-icons/ri";




export default function Footer() {
  const t = useTranslations("footer");
  const serviceT = useTranslations("services");

  return (
    <footer className="bg-[color:var(--primary-deep)] text-primary-foreground">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:px-10 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <p className="text-3xl">Multi Optic</p>

          <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
            {t("description")}
          </p>

          <div className="mt-6 flex gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="border border-primary-foreground/25 p-2.5 transition-colors hover:bg-primary-foreground/10"
            >
              <FaFacebook className="size-4" />
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="border border-primary-foreground/25 p-2.5 transition-colors hover:bg-primary-foreground/10"
            >
              <BsInstagram className="size-4" />
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="border border-primary-foreground/25 p-2.5 transition-colors hover:bg-primary-foreground/10"
            >
              <LiaLinkedin className="size-4" />
            </a>

            <a
              href="#"
              aria-label="YouTube"
              className="border border-primary-foreground/25 p-2.5 transition-colors hover:bg-primary-foreground/10"
            >
              <FaYoutube className="size-4" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xs uppercase tracking-[0.28em] text-primary-foreground/60">
            {t("quickLinks")}
          </h3>

          <ul className="mt-5 space-y-2.5 text-sm">
            <li>
              <Link
                href="/"
                className="text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                {t("home")}
              </Link>
            </li>

            <li>
              <Link
                href="/products"
                className="text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                {t("products")}
              </Link>
            </li>

            <li>
              <Link
                href="/#about"
                className="text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                {t("about")}
              </Link>
            </li>

            <li>
              <Link
                href="/#services"
                className="text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                {t("services")}
              </Link>
            </li>

            <li>
              <Link
                href="/#contact"
                className="text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                {t("contact")}
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xs uppercase tracking-[0.28em] text-primary-foreground/60">
            {t("servicesTitle")}
          </h3>

          <ul className="mt-5 space-y-2.5 text-sm text-primary-foreground/80">
            {SERVICES.slice(0, 6).map((service) => (
              <li key={service.key}>
                {serviceT(`items.${service.key}.title`)}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xs uppercase tracking-[0.28em] text-primary-foreground/60">
            {t("contactTitle")}
          </h3>

          <ul className="mt-5 space-y-4 text-sm text-primary-foreground/80">
            <li className="flex gap-3">
              <BiMapPin className="mt-0.5 size-4 shrink-0" aria-hidden />
              <span>{CONTACT.address}</span>
            </li>

            <li className="flex gap-3">
              <BiPhone className="mt-0.5 size-4 shrink-0" aria-hidden />

              <a
                href={`tel:${CONTACT.phone}`}
                className="transition-colors hover:text-primary-foreground"
              >
                {CONTACT.phone}
              </a>
            </li>

            <li className="flex gap-3">
              <RiMvAiLine className="mt-0.5 size-4 shrink-0" aria-hidden />

              <a
                href={`mailto:${CONTACT.email}`}
                className="transition-colors hover:text-primary-foreground"
              >
                {CONTACT.email}
              </a>
            </li>
          </ul>

          <Link
            href="/#contact"
            className="mt-7 inline-block border border-primary-foreground/30 px-6 py-3 text-xs uppercase tracking-[0.2em] transition-colors hover:bg-primary-foreground hover:text-primary"
          >
            {t("contactUs")}
          </Link>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-6 py-6 text-xs text-primary-foreground/60 md:flex-row md:items-center md:justify-between md:px-10">
          <p>
            © {new Date().getFullYear()} Multi Optic. {t("rights")}
          </p>

          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-primary-foreground"
            >
              {t("privacy")}
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-primary-foreground"
            >
              {t("terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}