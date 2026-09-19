"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import aboutImg from "../../../public/assets/images/about.jpg"

const ABOUT_TABS = ["about", "vision", "mission"] as const;

type AboutTab = (typeof ABOUT_TABS)[number];

export default function AboutSection() {
    const t = useTranslations("about");
    const [activeTab, setActiveTab] = useState<AboutTab>("about");

    return (
        <section className="mx-auto w-full max-w-7xl px-6 md:px-10">
            <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

                {/* Content */}
                <div className="order-2 lg:order-1">

                    <p className="eyebrow">{t("eyebrow")}</p>

                    <h2 className="mt-4 text-4xl leading-[1.1] md:text-5xl">
                        {t(`${activeTab}.title`)}
                    </h2>

                    <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
                        <p>{t(`${activeTab}.description`)}</p>

                        <p>{t(`${activeTab}.description2`)}</p>
                    </div>

                    {/* Tabs */}
                    <div className="mt-10 flex flex-wrap gap-2 border-b border-border pb-2">
                        {ABOUT_TABS.map((tab) => {
                            const isActive = activeTab === tab;

                            return (
                                <button
                                    key={tab}
                                    type="button"
                                    onClick={() => setActiveTab(tab)}
                                    className={`
                    px-5 py-3 text-[0.7rem]
                    uppercase tracking-[0.16em]
                    transition-all duration-300
                    ${isActive
                                            ? "bg-primary text-primary-foreground"
                                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                        }
                  `}
                                >
                                    {t(`${tab}.tab`)}
                                </button>
                            );
                        })}
                    </div>

                    {/* Stats only for About */}
                    {/* {activeTab === "about" && (
            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {[
                ["20+", t("stats.years")],
                ["60k", t("stats.patients")],
                ["4", t("stats.branches")],
              ].map(([number, label]) => (
                <div key={label}>
                  <dt className="font-display text-4xl text-primary">
                    {number}
                  </dt>

                  <dd className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    {label}
                  </dd>
                </div>
              ))}
            </dl>
          )} */}

                    {/* <Link
            href="/about"
            className="mt-10 inline-block bg-primary px-9 py-4 text-[0.72rem] uppercase tracking-[0.22em] text-primary-foreground transition-colors hover:bg-[color:var(--primary-deep)]"
          >
            {t("learnMore")}
          </Link> */}

                </div>

                {/* Image */}
                <div className="order-1 lg:order-2 py-20">
                    <div className="overflow-hidden rounded-lg">
                        <Image
                            src={aboutImg}
                            alt={t("imageAlt")}
                            loading="lazy"
                            width={1200}
                            height={1408}
                            className="w-full object-cover transition-transform duration-1000 hover:scale-105"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}