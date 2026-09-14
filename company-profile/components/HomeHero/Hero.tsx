"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";



import Link from "next/link";
import { slides } from "@/company-profile/data/site";



export default function HomeHero() {
    const t = useTranslations("home.hero");

    return (
        <section
            id="home"
            className="relative h-screen min-h-[700px] overflow-hidden"
        >
            {/* Background Slider */}
            <div className="absolute inset-0 z-0">
                <Swiper
                     modules={[Autoplay, EffectFade, Pagination]}
                    effect="fade"
                    autoplay={{
                        delay: 6000,
                        disableOnInteraction: false,
                    }}
                    loop
                    speed={1200}
                     pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return `<button type="button" class="${className} hero-pagination-line" aria-label="Go to slide ${
                index + 1
              }"></button>`;
            },
          }}
                    className="h-full w-full"
                >
                    {slides.map((slide) => (
                        <SwiperSlide
                            key={slide.src}
                            className="relative h-full"
                        >
                            <Image
                                src={slide.src}
                                alt={slide.alt}
                                fill
                                priority
                                sizes="100vw"
                                className="object-cover"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Overlay */}
            <div
                className="
      pointer-events-none
      absolute inset-0 z-10
      bg-gradient-to-r
      from-[color:var(--primary-deep)]/90
      via-[color:var(--primary-deep)]/65
      to-transparent
      rtl:bg-gradient-to-l
    "
            />

            {/* Content */}
            <div className="relative z-20 flex h-screen min-h-[700px] items-center">
                <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
                    <div className="max-w-2xl">
                        <p className="eyebrow text-primary-foreground/70">
                            {t("eyebrow")}
                        </p>

                        <h1 className="mt-6 text-5xl leading-[1.03] text-primary-foreground sm:text-6xl md:text-7xl">
                            {t("title")}
                        </h1>

                        <p className="mt-7 max-w-lg text-base leading-relaxed text-primary-foreground/85 md:text-lg">
                            {t("description")}
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <Link
                                href="/products"
                                className="bg-primary-foreground px-9 py-4 text-[0.72rem] uppercase tracking-[0.22em] text-primary transition-transform duration-300 hover:-translate-y-0.5"
                            >
                                {t("explore")}
                            </Link>

                            <Link
                                href="/contact"
                                className="border border-primary-foreground/60 px-9 py-4 text-[0.72rem] uppercase tracking-[0.22em] text-primary-foreground transition-colors hover:bg-primary-foreground/10"
                            >
                                {t("bookExam")}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}