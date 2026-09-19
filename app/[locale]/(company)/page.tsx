import AboutSection from "@/company-profile/sections/about/About";
import ContactPreview from "@/company-profile/sections/ContactPreview/ContactPreview";
import FeaturedProducts from "@/company-profile/sections/featuredProducts/FeaturedProducts";
import HomeHero from "@/company-profile/sections/HomeHero/Hero";
import Services from "@/company-profile/sections/services/Services";
import Testimonials from "@/company-profile/sections/Testimonials/Testimonials";
import WhyChoose from "@/company-profile/sections/whychooseus/WhyChooseUs";

export function generateStaticParams() {
  return [
    { locale: "ar" },
    { locale: "en" },
  ];
}

export default function page() {
  return (
    <main>
      <HomeHero />

      <AboutSection />

      <Services />

      <FeaturedProducts />

      <WhyChoose />

      <Testimonials />

      <ContactPreview />

    </main>
  )
}
