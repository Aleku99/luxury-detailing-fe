import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Luxury Detailing",
  description:
    "Luxury Detailing provides professional car detailing services to restore and maintain the beauty of your vehicle. Contact us today for affordable and reliable auto detailing services.",
  keywords: [
    "car detailing",
    "auto detailing",
    "paint correction",
    "ceramic coating",
    "engine detailing",
    "headlight restoration",
    "Caransebes",
    "Romania",
    "detailing interior",
    "corectie lac",
    "polish faruri",
    "protectie ceramica",
    "ceramica jante",
    "tratament hidrofob pentru geamuri",
  ],
  creator: "Alexandru Loghin",
  authors: [{ name: "Alexandru Loghin", url: "https://alexandruloghin.com/" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link
        rel="icon"
        type="image/x-icon"
        href="assets/car-detailing.png"
      ></link>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
