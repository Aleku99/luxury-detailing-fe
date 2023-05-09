import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Luxury Detailing Caransebeș",
  description:
    "Luxury Detailing este o companie stabilita in Caransebes ce oferă servicii profesionale de detaliere auto pentru a restaura și menține frumusețea vehiculului dumneavoastră.",
  keywords: [
    "car detailing",
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
  robots: "index, follow",
  canonical: "https://www.luxurydetailing.ro/",
  opengraph: {
    title: "Luxury Detailing Caransebeș",
    url: "https://www.luxurydetailing.ro/",
    description:
      "Luxury Detailing este o companie stabilita in Caransebes ce oferă servicii profesionale de detaliere auto pentru a restaura și menține frumusețea vehiculului dumneavoastră.",
    image: "assets/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro">
      <link rel="icon" type="image/x-icon" href="assets/logo.jpg" />
      <link rel="canonical" href="https://www.luxurydetailing.ro/" />
      <meta property="og:title" content="Luxury Detailing Caransebeș" />
      <meta property="og:url" content="https://www.luxurydetailing.ro/" />
      <meta
        property="og:description"
        content="Luxury Detailing este o companie stabilita in Caransebes ce oferă servicii profesionale de detaliere auto pentru a restaura și menține frumusețea vehiculului dumneavoastră."
      />
      <meta property="og:image" content="./assets/logo.png" />
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
