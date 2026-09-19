"use client";

import ServiceIcon from "@/company-profile/components/serviceIcon/ServiceIcon";
import { SERVICES } from "@/company-profile/data/site";
import { useTranslations } from "next-intl";

export default function Services() {
  const t = useTranslations("services");

  return (
   <section className="bg-[color:var(--primary-soft)] py-20">
    
 <div className="mx-auto w-full max-w-7xl px-6 md:px-10 ">
      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-primary">
          {t("eyebrow")}
        </p>

        <h2 className="mt-4 text-4xl leading-[1.1] md:text-5xl">
          {t("title")}
        </h2>

        <p className="mt-5 leading-relaxed text-muted-foreground">
          {t("intro")}
        </p>
      </div>

      <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((service) => (
          <article
            key={service.key}
            className="group bg-background p-8 transition-colors duration-500 hover:bg-[color:var(--primary-soft)]"
          >
            <ServiceIcon name={service.icon} />

            <h3 className="mt-5 text-xl">
              {t(`items.${service.key}.title`)}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {t(`items.${service.key}.text`)}
            </p>

            <span className="mt-5 block h-px w-0 bg-primary transition-all duration-500 group-hover:w-12" />
          </article>
        ))}
      </div>
    </div>
   </section>
  );
}