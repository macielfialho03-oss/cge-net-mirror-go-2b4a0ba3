import { Search } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Consultas = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow gov-container py-10">
        <h1 className="text-3xl font-bold text-gov-blue-dark flex items-center gap-2">
          <Search size={32} /> Consultas
        </h1>
        <p className="mt-4 text-gray-700">
          Realize consultas em bases de dados públicas e explore informações relevantes.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Consultas;
