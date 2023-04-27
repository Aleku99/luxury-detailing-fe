import Link from "next/link";
import "./globals.css";

export default function Home() {
  return (
    <div className="home-page-background">
      <div className="min-h-[100vh] bg-black bg-opacity-80 flex flex-col justify-center items-center">
        <h1 className="text-white text-3xl text-shadow text-center mb-8 mt-48">
          Luxury Detailing - Transformă-ți Mașina într-o Bijuterie pe Roti
        </h1>
        <h2 className="text-white text-xl text-shadow text-center mb-8">
          Servicii Profesionale de Curățare și Îngrijire Auto pentru un Aspect
          Impecabil și O Protecție de Lungă Durată
        </h2>
        <div className="flex flex-col justify-between items-center gap-8 m-8 sm:flex-row">
          <Link
            href="/gallery"
            style={{ WebkitTapHighlightColor: "transparent" }}
          >
            <button
              className="bg-[#212529] hover:bg-white hover:text-[#212529] text-white font-bold py-6 px-12 rounded-full transition-all duration-200"
              style={{ WebkitTapHighlightColor: "transparent" }}
            >
              Galerie
            </button>
          </Link>
          <Link
            href="/services"
            style={{ WebkitTapHighlightColor: "transparent" }}
          >
            <button
              className="bg-[#212529] hover:bg-white hover:text-[#212529] text-white font-bold py-6 px-12 rounded-full transition-all duration-200"
              style={{ WebkitTapHighlightColor: "transparent" }}
            >
              Servicii
            </button>
          </Link>
        </div>
        <h1 className="text-shadow text-3xl text-white text-center m-8">
          Despre noi
        </h1>
        <div></div>
        <p className=" flex flex-row justify-center items-center text-white text-shadow text-center text-lg mb-48 xl:w-[50%]">
          Bine ați venit pe site-ul nostru de detalii auto! Echipa noastră de
          profesioniști cu experiență oferă servicii de detaliere de înaltă
          calitate, inclusiv detalii interioare și exterioare, corectarea
          vopselei, acoperiri ceramice și multe altele. Folosim doar cele mai
          bune produse și echipamente pentru a ne asigura că mașina
          dumneavoastră primește cel mai bun tratament posibil. Misiunea noastră
          este să vă depășim așteptările și să vă lăsăm complet mulțumit de
          rezultate.
        </p>
      </div>
    </div>
  );
}
