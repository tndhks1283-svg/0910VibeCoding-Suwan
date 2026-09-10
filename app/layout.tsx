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
      <body className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-rose-50 via-violet-50 to-sky-50 text-neutral-800">
        <div
          aria-hidden
          className="pointer-events-none fixed -top-24 -left-24 h-72 w-72 rounded-full bg-pink-200/50 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none fixed top-1/3 -right-24 h-72 w-72 rounded-full bg-sky-200/50 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none fixed -bottom-24 left-1/3 h-72 w-72 rounded-full bg-violet-200/50 blur-3xl"
        />
        {children}
      </body>
    </html>
  );
}
