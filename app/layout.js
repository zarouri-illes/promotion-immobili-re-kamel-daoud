import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kamel Daoud",
  description: "La promotion immobilière Daoud Kamel pour une expérience immobilière exceptionnelle. Avec un service personnalisé, une expertise du marché et un dévouement sans faille, nous priorisons vos besoins uniques. Que vous achetiez, vendiez ou investissiez, faites-nous confiance pour obtenir des résultats avec intégrité et professionnalisme. Votre propriété de rêve vous attend avec nous.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
