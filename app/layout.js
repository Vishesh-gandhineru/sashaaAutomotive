
import "./globals.css";
import Head from "next/head";
import { Metadata } from "next";

import localFont from 'next/font/local'
import { SpeedInsights } from "@vercel/speed-insights/next"
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

const avenirTs = localFont({
  src: [
    {
      path: '../public/fonts/AvenirLTStd-Black.otf',
      weight: '800'
    },
    {
      path: '../public/fonts/AvenirLTStd-Roman.otf',
      weight: '400'
    }
  ],
  variable: '--font-avenirTs'
})


export const metadata = {
  title: "Sashaa Automotive",
  description: "One stop shop for premium European Spare Parts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${avenirTs.variable} font-sans`}>
      <Head>
			<link rel='icon' href='/favicon.ico' />
		</Head>
        {children}      
        <SpeedInsights />
        </body>
    </html>
  );
}
