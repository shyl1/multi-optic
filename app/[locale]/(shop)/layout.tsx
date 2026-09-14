
export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <ShopHeader /> */}

      <main>{children}</main>

      {/* <ShopFooter /> */}
    </>
  );
}