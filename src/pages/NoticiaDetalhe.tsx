import { useParams, Link } from "react-router-dom";
import React from "react";

const noticias = [
  {
    id: 1,
    slug: "relatorio-auditoria-2025",
    titulo: "CGE divulga relatório de auditoria do primeiro semestre",
    data: "15/05/2025",
    categoria: "Auditoria",
    conteudo: `
A Controladoria Geral do Estado (CGE-RO) divulgou o relatório referente às auditorias realizadas 
nos órgãos e entidades do Poder Executivo Estadual durante o primeiro semestre de 2025.

O relatório apresenta os principais achados e recomendações para aprimorar a gestão pública
e fortalecer a transparência dos gastos públicos.`,
  },
  {
    id: 2,
    slug: "transparencia-novas-funcionalidades",
    titulo: "Portal da Transparência implementa novas funcionalidades",
    data: "28/04/2025",
    categoria: "Portal",
    conteudo: `
O Portal da Transparência do Estado de Rondônia ganhou novas funcionalidades 
que tornam o acesso às informações públicas mais ágil e intuitivo.

Entre as melhorias estão a nova interface de busca, exportação de dados 
e integração com serviços da CGE Digital.`,
  },
  {
    id: 3,
    slug: "curso-capacitacao-servidores",
    titulo: "CGE promove curso de capacitação para servidores",
    data: "10/04/2025",
    categoria: "Capacitação",
    conteudo: `
A CGE promoveu um curso de capacitação voltado a servidores públicos,
com foco na gestão de documentos e transparência pública.

O evento abordou boas práticas de governança, compliance e auditoria interna.`,
  },
];

export default function NoticiaDetalhe() {
  const { id } = useParams<{ id: string }>();

  console.log("🧩 ID recebido pela rota:", id);

  const noticia = noticias.find(
    (n) => n.slug === id || n.id === Number(id)
  );

  if (!noticia) {
    return (
      <div className="max-w-4xl mx-auto py-10 text-center">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">
          Notícia não encontrada
        </h2>
        <p className="text-gray-600 mb-6">
          O ID recebido foi: <strong>{id}</strong>
        </p>
        <Link to="/" className="text-blue-700 underline">
          Voltar
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      <h1 className="text-3xl font-bold text-blue-900 mb-4">
        {noticia.titulo}
      </h1>
      <p className="text-sm text-gray-500 mb-2">
        {noticia.categoria} • {noticia.data}
      </p>
      <div className="text-gray-700 leading-relaxed whitespace-pre-line">
        {noticia.conteudo}
      </div>
      <div className="mt-6">
        <Link to="/" className="text-blue-700 font-medium hover:underline">
          ← Voltar para notícias
        </Link>
      </div>
    </div>
  );
}
