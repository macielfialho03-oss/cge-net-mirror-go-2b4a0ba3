import express from "express";
import cors from "cors";
import sql from "mssql";

const app = express();
app.use(cors());
app.use(express.json());

// 🔗 Configuração do SQL Server
const dbConfig = {
  user: "admin_cgero_teste",
  password: "Cge@2023",
  server: "172.16.16.6",
  database: "DbCgeNet_Dev",
  options: { trustServerCertificate: true },
};

// 🟢 Conectar ao banco
sql.connect(dbConfig)
  .then(() => console.log("✅ Conectado ao SQL Server"))
  .catch((err) => console.error("❌ Erro ao conectar:", err));

app.get("/", (req, res) => {
  res.send("Servidor backend ativo 🚀");
});

// 📋 LISTAR serviços
app.get("/api/servicos", async (req, res) => {
  try {
    const result = await sql.query`SELECT * FROM Servicos`;
    res.json(result.recordset);
  } catch (err) {
    console.error("Erro ao buscar serviços:", err);
    res.status(500).send("Erro ao buscar serviços");
  }
});

// ➕ CRIAR serviço
app.post("/api/servicos", async (req, res) => {
  const { Nome, Descricao, IconType, Link, LinkText, ImageUrl } = req.body;
  try {
    await sql.query`
      INSERT INTO Servicos (Nome, Descricao, IconType, Link, LinkText, ImageUrl)
      VALUES (${Nome}, ${Descricao}, ${IconType}, ${Link}, ${LinkText}, ${ImageUrl})
    `;
    res.status(201).send("Serviço criado com sucesso!");
  } catch (err) {
    console.error("Erro ao criar serviço:", err);
    res.status(500).send("Erro ao criar serviço");
  }
});

// ✏️ ATUALIZAR serviço
app.put("/api/servicos/:id", async (req, res) => {
  const { id } = req.params;
  const { Nome, Descricao, IconType, Link, LinkText, ImageUrl } = req.body;
  try {
    await sql.query`
      UPDATE Servicos
      SET Nome = ${Nome}, Descricao = ${Descricao}, IconType = ${IconType},
          Link = ${Link}, LinkText = ${LinkText}, ImageUrl = ${ImageUrl}
      WHERE Id = ${id}
    `;
    res.send("Serviço atualizado com sucesso!");
  } catch (err) {
    console.error("Erro ao atualizar serviço:", err);
    res.status(500).send("Erro ao atualizar serviço");
  }
});

// 🗑️ DELETAR serviço
app.delete("/api/servicos/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await sql.query`DELETE FROM Servicos WHERE Id = ${id}`;
    res.send("Serviço removido com sucesso!");
  } catch (err) {
    console.error("Erro ao remover serviço:", err);
    res.status(500).send("Erro ao remover serviço");
  }
});

app.listen(3001, () => {
  console.log("🌐 Backend rodando em http://localhost:3001");
});
