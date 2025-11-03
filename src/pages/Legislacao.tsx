import { BookOpen } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Legislacao = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow gov-container py-10">
        <h1 className="text-3xl font-bold text-gov-blue-dark flex items-center gap-2">
          <BookOpen size={32} /> Legislação
        </h1>
        <p className="mt-4 text-gray-700">
          Consulte leis, decretos e normativas relacionadas à transparência pública.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Legislacao;

