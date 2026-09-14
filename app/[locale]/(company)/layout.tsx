import Header from "@/company-profile/components/layout/Header";


export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <>
      <Header />

      <main>{children}</main>

      {/* <CompanyFooter /> */}
    </>
  );
}