"use client";

import ContactForm from "@/company-profile/components/ContactForm/ContactForm";
import { CONTACT } from "@/company-profile/data/site";
import { useTranslations } from "next-intl";


export default function ContactPreview() {
    const t = useTranslations("contact");

    return (
        <section className="bg-accent-foreground/10 py-20">
            <div className="mx-auto max-w-7xl px-6 md:px-10">
                <div className="grid gap-14 lg:grid-cols-2">
                {/* Location & Contact */}
                <div>
                    <div className="aspect-square w-full overflow-hidden border border-border">
                        <iframe
                            title={t("mapTitle")}
                            src="https://www.openstreetmap.org/export/embed.html?bbox=35.88%2C31.93%2C35.96%2C31.98&layer=mapnik"
                            className="size-full"
                            loading="lazy"
                        />
                    </div>

                    <div className="mt-8 grid gap-6 sm:grid-cols-2">
                        <div>
                            <p className="text-xs uppercase tracking-[0.22em] text-primary">
                                {t("visit")}
                            </p>

                            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                                {CONTACT.address}
                            </p>
                        </div>

                        <div>
                            <p className="text-xs uppercase tracking-[0.22em] text-primary">
                                {t("contact")}
                            </p>

                            <p className="mt-3 text-sm text-muted-foreground">
                                {CONTACT.phone}
                            </p>

                            <p className="text-sm text-muted-foreground">
                                {CONTACT.email}
                            </p>
                        </div>

                        <div className="sm:col-span-2">
                            <p className="text-xs uppercase tracking-[0.22em] text-primary">
                                {t("businessHours")}
                            </p>

                            {CONTACT.hours.map((h) => (
                                <p
                                    key={h.day}
                                    className="mt-2 text-sm text-muted-foreground"
                                >
                                    {h.day} — {h.time}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-primary">
                        {t("eyebrow")}
                    </p>

                    <h2 className="mt-4 text-4xl leading-tight md:text-5xl">
                        {t("title")}
                    </h2>

                    <p className="mt-4 leading-relaxed text-muted-foreground">
                        {t("intro")}
                    </p>

                    <div className="mt-8">
                        <ContactForm />
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
}