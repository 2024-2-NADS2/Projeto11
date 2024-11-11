const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

const Usuario = require('./Usuario.js');
const AgendamentoColeta = require('./AgendamentoColeta.js');

app.use(express.json());
app.use(cors());

require('dotenv').config();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: {
        rejectUnauthorized: false 
    }
});

// Testa a conexão com o banco de dados
db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar no MySQL: ', err);
    } else {
        console.log('Conectado ao MySQL.');
    }
});


// Rota para realizar o login consultando no banco de dados
app.post('/login', (req, res) => {
    const sql = "SELECT * FROM usuarios WHERE email = ?";
    const { email, senha } = req.body;

    // Validação de entrada, para que todos os campos sejam preenchidos
    if (!email || !senha) {
        return res.status(400).json("Por favor, forneça email e senha.");
    }

    // Verificação do email
    db.query(sql, [email], (err, result) => {
        if (err) {
            return res.status(500).json("Erro ao consultar o banco de dados.");
        }

        // Verifica se o usuário existe
        if (result.length === 0) {
            return res.status(401).json("Usuário não encontrado.");
        }

        const user = result[0];
        const usuario = new Usuario(user.nome, user.cpf, user.email, user.telefone, user.senha);

        bcrypt.compare(senha, usuario.getSenha(), (err, senhaCorreta) => {
            if (err) {
                return res.status(500).json("Erro ao verificar a senha.");
            }

            if (!senhaCorreta) {
                return res.status(401).json("Senha incorreta.");
            }

            // Login foi realizado corretamente
            return res.status(200).json("Login bem-sucedido.");
        });
    });
});

// Rota para cadastrar no banco de dados
app.post('/cadastro', (req, res) => {
    const sqlInserir = "INSERT INTO usuarios (nome, cpf, email, telefone, senha) VALUES (?, ?, ?, ?, ?)";
    const sqlVerificar = "SELECT * FROM usuarios WHERE email = ? OR cpf = ?";
    const { nome, cpf, email, telefone, senha } = req.body;

    // Validação de entrada
    if (!nome || !cpf || !email || !telefone || !senha) {
        return res.status(400).json("Por favor, preencha todos os campos.");
    }

    // Verificação se o email ou CPF já existem no banco de dados
    db.query(sqlVerificar, [email, cpf], (erro, usuariosExistentes) => {
        if (usuariosExistentes.length > 0) {
            return res.status(400).json("Email ou CPF já cadastrados.");
        }

        // Se não houver duplicação, é gerado o hash da senha
        bcrypt.hash(senha, 10, (erro, hash) => {
            if (erro) {
                return res.status(500).json("Erro ao hashear a senha.");
            }

        const usuario = new Usuario(nome, cpf, email, telefone, hash);

            // Inserir novo usuário no banco de dados
            db.query(sqlInserir, [usuario.getNome(), usuario.getCpf(), usuario.getEmail(), usuario.getTelefone(), usuario.getSenha()], (erro, resultado) => {
                if (erro) {
                    return res.status(500).json("Erro ao registrar o usuário.");
                }

                return res.status(201).json("Usuário registrado com sucesso.");
            });
        });
    });
});


// Rota para cadastrar agendamento da coleta no banco de dados
app.post('/agendamentoColeta', (req, res) => {
    const { nome, cpf, email, telefone, cep, uf, cidade, estado, endereco, numero, complemento, bairro, ong, produtos, dataAgendada } = req.body;

    // Verifica se todos os campos estão preenchidos
    if (!nome || !cpf || !email || !telefone || !cep || !uf || !cidade || !endereco || !numero || !bairro || !ong || !produtos || !dataAgendada) {
        return res.status(400).json("Por favor, preencha todos os campos.");
    }

    const agendamento = new AgendamentoColeta( nome, cpf, email, telefone, cep, uf, cidade, estado, endereco, numero,complemento, bairro, ong, produtos.join(', '), dataAgendada);

    agendamento.confirmarAgendamento();
    
    const sqlInserirAgendamento = `
        INSERT INTO agendamento (nome, cpf, email, telefone, cep, uf, cidade, endereco, numero, complemento, bairro, pontoColeta, produto, dataAgendada) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(
        sqlInserirAgendamento,
        [
            agendamento.getNome(), agendamento.getCpf(), agendamento.getEmail(), agendamento.getTelefone(), agendamento.getCep(), agendamento.getUf(), agendamento.getCidade(), agendamento.getEndereco(), agendamento.getNumero(),agendamento.getComplemento(), agendamento.getBairro(), agendamento.getOng(), agendamento.getProduto(),agendamento.getDataAgendada()
        ],
        (erro, resultado) => {
            if (erro) {
                console.error("Erro ao registrar o agendamento:", erro);
                return res.status(500).json("Erro ao registrar o agendamento.");
            }
            return res.status(201).json("Agendamento registrado com sucesso.");
        }
    );
});



// Rota para buscar um usuário ou agendamento com base em uma propriedade - Algoritmo de Busca de Dados com Proriedade Específica
app.get('/buscar', (req, res) => {
  const { tipo, propriedade, valor } = req.query; // tipo = tabelas do banco de dados, propriedades = colunas do banco de dados, valor = atributo para realizar a busca

  if (!tipo || !propriedade || !valor) {
      return res.status(400).json("Por favor, forneça tipo, propriedade e valor para a busca.");
  }

  let sql;
  if (tipo === 'usuarios') {
      sql = `SELECT * FROM usuarios WHERE ?? = ?`; 
  } else if (tipo === 'agendamentos') {
      sql = `SELECT * FROM agendamento WHERE ?? = ?`;
  } else {
      return res.status(400).json("Tipo inválido. Use 'usuarios' ou 'agendamentos'.");
  }

  // Executa a query de busca
  db.query(sql, [propriedade, valor], (err, results) => {
      if (err) {
          return res.status(500).json("Erro ao consultar o banco de dados.");
      }

      if (results.length === 0) {
          return res.status(404).json("Nenhum item encontrado.");
      }

      return res.status(200).json(results);
  });
});


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log("Entrando no sevidor na porta 3000");
})

