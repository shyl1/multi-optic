import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Optic Platform",
  description: "Optic Platform",
};

// export function generateStaticParams() {
//   return [
//     { locale: "ar" },
//     { locale: "en" },
//   ];
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}