"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { PRODUCTS } from "@/company-profile/data/site";

export default function FeaturedProducts() {
  const t = useTranslations("products");

  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <section className="mx-auto max-w-7xl px-6 md:px-10 py-20 ">
      {/* Heading */}
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

      {/* Products */}
      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {featuredProducts.map((product) => (
          <article key={product.slug} className="group">
            <div className="overflow-hidden bg-muted">
              <Image
                src={product.image}
                alt={product.name}
                loading="lazy"
                width={800}
                height={800}
                className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <p className="mt-5 text-[0.65rem] uppercase tracking-[0.24em] text-primary">
              {t(`categories.${product.category}`)}
            </p>

            <h3 className="mt-2 text-xl">
              {product.name}
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {product.short}
            </p>
          </article>
        ))}
      </div>

      {/* Store Button */}
      <div className="mt-12 flex justify-center">
        <Link
          href="/products"
          className="border border-primary px-8 py-3.5 text-[0.72rem] uppercase tracking-[0.22em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          {t("viewStore")}
        </Link>
      </div>
    </section>
  );
}