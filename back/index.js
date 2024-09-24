const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(bodyParser.json());
app.use(cors());


const pool = new Pool({
  user: 'postgres',          // Usuário do PostgreSQL
  host: 'localhost',         // Host do banco de dados
  database: 'studentdb',     // Nome do banco de dados
  password: '23012002', // Certifique-se de que a senha seja uma string válida
  port: 5432,                // Porta padrão do PostgreSQL
});

// require('dotenv').config();  // Certifique-se de carregar as variáveis de ambiente

// const pool = new Pool({
//   user: process.env.PGUSER,
//   host: process.env.PGHOST,
//   database: process.env.PGDATABASE,
//   password: process.env.PGPASSWORD,  // A senha agora vem do arquivo .env
//   port: process.env.PGPORT,
// });


// Rota para cadastrar aluno (CREATE)
app.post('/students', async (req, res) => {
  const { name, cpf, email, phone, city } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO students (name, cpf, email, phone, city) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [name, cpf, email, phone, city]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao cadastrar aluno' });
  }
});

// Rota para listar alunos (READ)
app.get('/students', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM students');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar alunos' });
  }
});

// Iniciar o servidor
app.listen(3001, () => {
  console.log('Servidor rodando em http://localhost:3001');
});
