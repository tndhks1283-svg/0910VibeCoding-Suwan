import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "김수완 소개",
  description: "김수완의 개인 소개 페이지",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="relative min-h-screen overflow-x-hidden bg-gradient-to-b from-sky-200 via-sky-100 to-lime-100 text-stone-700">
        {/* clouds */}
        <div
          aria-hidden
          className="pointer-events-none fixed -top-8 left-8 h-24 w-40 rounded-full bg-white/70 blur-2xl"
        />
        <div
          aria-hidden
          className="pointer-events-none fixed top-10 right-10 h-20 w-36 rounded-full bg-white/60 blur-2xl"
        />
        <div
          aria-hidden
          className="pointer-events-none fixed top-32 left-1/2 h-16 w-28 -translate-x-1/2 rounded-full bg-white/50 blur-xl"
        />
        {/* grass texture */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-x-0 bottom-0 h-48 opacity-25 [background-image:radial-gradient(circle,#65a30d_1.5px,transparent_1.5px)] [background-size:18px_18px]"
        />
        {children}
      </body>
    </html>
  );
}
