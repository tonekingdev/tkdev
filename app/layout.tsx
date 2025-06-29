import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import dynamic from "next/dynamic";
import BackToTop from "@/components/BackToTop";
import JsonLd from "@/components/JsonLd";

const Header = dynamic(() => import('@/components/Header'), { ssr: true })
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true })

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata = {
  title: 'Tone King Development',
  description: 'Expert web and mobile app development services for startups and SMBs.',
  authors: [{ name: 'Tone King Development'}],
  metadataBase: new URL('https://tonekingdev.com'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/img/android-chrome-512x512.png',
    shortcut: '/img/android-chrome-192x192.png',
    apple: '/img/apple-touch-icon.png',
  },
  social: {
    facebook: 'Tone King Development',
    instagram: '@tonekingdevelopment',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <Providers>
          <div className="relative z-10 flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
        <BackToTop />
        <JsonLd />
      </body>
    </html>
  );
}
