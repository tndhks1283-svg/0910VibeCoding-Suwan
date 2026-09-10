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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- root layout applies to every route in this single-page app */}
        <link
          href="https://fonts.googleapis.com/css2?family=Jua&family=Gowun+Dodum&family=Galmuri11:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
