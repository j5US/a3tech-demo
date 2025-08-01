// import { Geist, Geist_Mono } from "next/font/google";
import "@/app/_styles/globals.css"
import { Inconsolata } from 'next/font/google';
import { Anton } from 'next/font/google';
import NavBar from "@/app/_components/NavBar";
import Footer from "./_components/Footer";
import { DarkModeProvider } from "./_context/DarkModeContext";
import CollapsibleMenu from "./_components/CollapsibleMenu";
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const inconsolata = Inconsolata({
  subsets: ['latin'],
  // weight: ['400', '700'],       
  variable: '--font-inconsolata',
  display: 'swap',
});

const anton = Anton({
  subsets: ['latin'],
  weight: "400",
  variable: '--font-anton',
  display: 'swap',
});

export const metadata = {
  title: "AAA Tech Corporation",
  // description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light-mode">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={`${anton.variable} ${inconsolata.variable} antialiased`}
      >
        <DarkModeProvider>

          <NavBar />
          {/* <CollapsibleMenu/> */}
          {children}
          <Footer />
        </DarkModeProvider>
      </body>
    </html>
  );
}
