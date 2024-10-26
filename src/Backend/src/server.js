const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

const Usuario = require('./Usuario.js');

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "reciclotec"
})

// Testa a conexão com o banco de dados
db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar no MySQL: ', err);
    } else {
        console.log('Conectado ao MySQL.');
    }
});

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM usuarios WHERE email = ?";
    const { email, senha } = req.body;

    // Validação de entrada (opcional, mas recomendado)
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

            // Sucesso no login
            return res.status(200).json("Login bem-sucedido.");
        });
    });
});


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

        // Se não houver duplicação, geramos o hash da senha
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


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log("Entrando no sevidor na porta 3000");
})

