"use client";

import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { TESTIMONIALS } from "@/company-profile/data/site";
import Image from "next/image";
import { SiTarget } from "react-icons/si";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";



export default function Testimonials() {
  const t = useTranslations("testimonials");

  return (
    <section className="py-20">
     <div className="mx-auto max-w-7xl px-6 md:px-10">
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

      <div className="relative mx-auto mt-14 max-w-3xl">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl: ".testimonial-prev",
            nextEl: ".testimonial-next",
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop
          spaceBetween={24}
          slidesPerView={1}
        >
          {TESTIMONIALS.map((testimonial) => (
            <SwiperSlide key={testimonial.key}>
              <figure className="px-10 text-center md:px-16">
                <Image
                  src={testimonial.image}
                  alt={t(`items.${testimonial.key}.name`)}
                  loading="lazy"
                  width={200}
                  height={200}
                  className="mx-auto size-20 rounded-full object-cover"
                />

                <div className="mt-5 flex justify-center gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, index) => (
                    <SiTarget
                      key={index}
                      className="size-4 fill-primary text-primary"
                    />
                  ))}
                </div>

                <blockquote className="mt-6 text-xl leading-relaxed text-foreground md:text-2xl">
                  “{t(`items.${testimonial.key}.text`)}”
                </blockquote>

                <figcaption className="mt-6">
                  <p className="text-sm uppercase tracking-[0.16em] text-primary">
                    {t(`items.${testimonial.key}.name`)}
                  </p>

                  <p className="mt-1 text-sm text-muted-foreground">
                    {t(`items.${testimonial.key}.role`)}
                  </p>
                </figcaption>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          type="button"
          aria-label={t("previous")}
          className="testimonial-prev absolute left-0 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center border border-border bg-background transition-colors hover:border-primary hover:text-primary"
        >
          <BiChevronLeft className="size-4" />
        </button>

        <button
          type="button"
          aria-label={t("next")}
          className="testimonial-next absolute right-0 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center border border-border bg-background transition-colors hover:border-primary hover:text-primary"
        >
          <BiChevronRight className="size-4" />
        </button>
      </div>
     </div>
    </section>
  );
}