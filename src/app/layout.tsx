import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata:Metadata = {
  generator: "Next.js",
  openGraph: {
    images: "https://joyadeep.com.np/images/mee.jpg"
  },
  title: 'Joyadeep | Portfolio',
  description: 'Welcome to the portfolio of Joyadeep. Explore my work in web development. Contact me for collaborations or inquiries.',
  keywords: ["joyadeep", "joyadeep limbu", "portfolio", "frontend developer", "react"],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <GsapConfig /> */}
        {/* <ThemeProvider
          attribute='class'
          defaultTheme='light'
          enableSystem={false}
          storageKey='portfolio-theme'
        > */}

        {children}
        {/* </ThemeProvider> */}
        <Toaster/>
      </body>
    </html>
  );
}
