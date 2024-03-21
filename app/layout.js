
import "./globals.css";

import localFont from 'next/font/local'
import { SpeedInsights } from "@vercel/speed-insights/next"

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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${avenirTs.variable} font-sans`}>
        {children}      
        <SpeedInsights />
        </body>
    </html>
  );
}
