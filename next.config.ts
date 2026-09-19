import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";


const withNextIntl = createNextIntlPlugin("./i18n/requests.ts");

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",

  images: {
    unoptimized: true,
  },
};

export default withNextIntl(nextConfig);
