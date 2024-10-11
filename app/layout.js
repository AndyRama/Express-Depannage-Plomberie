import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/app/components/Navigation"
import Footer from "@/app/components/Footer"

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

export const metadata = {
  title: "Express Dépannage Plomberie ",
  description: "Expresse Dépannage Plomberie intervient 24h/24 et 7j/7 pour tous vos besoins en plomberie et sanitaires ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation/>
        {children}
        <Footer className={"mt-[50px]"}/>
      </body>
    </html>
  );
}
