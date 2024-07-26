import type { Metadata } from "next";
import { Inter } from "next/font/google";
import favicon from "../../public/favicon.ico"
import Thumbnail from "@/images/Thumbnail.jpg"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfólio | Gustavo Pereira",
  description: "Somos especialistas em criação de logos e branding, oferecendo soluções personalizadas que destacam a essência de cada negócio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <head>
    <meta property="og:image" content={Thumbnail.src} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="628" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={Thumbnail.src}  />

    <link rel="image_src" href={Thumbnail.src}  />

    <link rel="icon" href={favicon.src} type="image/x-icon" />
    <link rel="shortcut icon" href={favicon.src} type="image/x-icon" />
</head>

    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </>
  );
}
