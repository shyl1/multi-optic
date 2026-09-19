"use client";

import { WHY } from "@/company-profile/data/site";
import { useTranslations } from "next-intl";

export default function WhyChoose() {
  const t = useTranslations("whyChoose");

  return (
    <section className="bg-accent-foreground/10 py-20">
      <div  className="mx-auto max-w-7xl px-6 md:px-10 ">
        <div className="mx-auto max-w-3xl text-center">
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

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {WHY.map((item, i) => (
          <article
            key={item.key}
            className="border border-border bg-background p-8 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40"
          >
            <span className="text-3xl text-primary/35">
              {String(i + 1).padStart(2, "0")}
            </span>

            <h3 className="mt-4 text-lg">
              {t(`items.${item.key}.title`)}
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {t(`items.${item.key}.text`)}
            </p>
          </article>
        ))}
      </div>
      </div>
    </section>
  );
}