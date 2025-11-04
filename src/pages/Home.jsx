import React from "react";
import Servicos from "../components/Servicos";
import { Link } from "react-router-dom";

export default function Home() {
  const noticias = [
    {
      id: 1,
      slug: "relatorio-auditoria-2025",
      titulo: "CGE divulga relatório de auditoria do primeiro semestre",
      resumo:
        "A Controladoria Geral do Estado (CGE-RO) divulgou o relatório referente às auditorias realizadas nos órgãos e entidades do Poder Executivo Estadual durante o primeiro semestre de 2025.",
      data: "15/05/2025",
    },
    {
      id: 2,
      slug: "transparencia-novas-funcionalidades",
      titulo: "Portal da Transparência implementa novas funcionalidades",
      resumo:
        "O Portal da Transparência do Estado de Rondônia ganhou novas funcionalidades que tornam o acesso às informações públicas mais ágil e intuitivo.",
      data: "28/04/2025",
    },
    {
      id: 3,
      slug: "curso-capacitacao-servidores",
      titulo: "CGE promove curso de capacitação para servidores",
      resumo:
        "A CGE promoveu um curso de capacitação voltado a servidores públicos, com foco na gestão de documentos e transparência pública.",
      data: "10/04/2025",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* 🟦 Seção de destaque */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">CGE NET Mirror GO</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Portal de Transparência e Acesso à Informação da Controladoria-Geral do Estado de Rondônia.
        </p>
      </section>

      {/* 🟩 Seção de serviços (dinâmica via SQL Server) */}
      <Servicos />

      {/* 🟧 Seção de notícias */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
          Últimas Notícias
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {noticias.map((n) => (
            <div
              key={n.id}
              className="border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all bg-white p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">
                  {n.titulo}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{n.resumo}</p>
              </div>
              <div className="flex justify-between items-center text-sm text-gray-500 mt-auto">
                <span>{n.data}</span>
                {/* 🔹 Agora usando slugs nas URLs */}
                <Link
                  to={`/noticias/${n.slug}`}
                  className="text-blue-700 font-medium hover:underline"
                >
                  Ler mais →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🟨 Rodapé simples */}
      <footer className="bg-gray-100 text-center py-6 mt-10 text-sm text-gray-500">
        © {new Date().getFullYear()} Controladoria-Geral do Estado de Rondônia (CGE-RO)
      </footer>
    </main>
  );
}
