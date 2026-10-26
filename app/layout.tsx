import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "عيسى ستور | تسوق بثقة",
  description: "متجر عيسى ستور للأدوات المكتبية والخردوات والهدايا والمنتجات المخصصة.",
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ar" dir="rtl"><body>{children}</body></html>;
}