const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

const jwt = require('jsonwebtoken');
const JWT_SECRET = 'reciclotec';


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

function autenticarToken(req, res, next) {
    const token = req.headers['authorization']?.split(' ')[1]; 

    if (!token) {
        return res.status(403).json('Token não fornecido');
    }

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json('Token inválido ou expirado. Faça login novamente.');
        }

        req.user = decoded; 
        next();
    });
}

app.get('/perfil-administrador', (req, res) => {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        return res.status(401).json("Token não fornecido.");
    }

    const token = authHeader.split(' ')[1];
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            console.error('Erro ao verificar token:', err);
            return res.status(403).json("Token inválido.");
        }

        console.log('Token decodificado:', decoded);
        const { id, permissao } = decoded;

        if (permissao !== 'admin' && permissao !== 'ong')  {
            console.warn('Permissão negada para o ID:', id);
            return res.status(403).json("Permissão negada.");
        }

        const sql = "SELECT id, nome, email, senha FROM administrador WHERE id = ?";
        db.query(sql, [id], (err, result) => {
            if (err) {
                return res.status(500).json("Erro ao consultar o banco de dados.");
            }

            if (result.length === 0) {
                return res.status(404).json("Administrador não encontrado.");
            }

            res.status(200).json(result[0]);
        });
    });
});


app.post('/login', (req, res) => {
    const sqlAdmin = "SELECT * FROM administrador WHERE email = ?";
    const sqlUser = "SELECT * FROM usuarios WHERE email = ?";
    const { email, senha } = req.body;

    if (!email || !senha) {
        return res.status(400).json("Por favor, forneça email e senha.");
    }

    db.query(sqlAdmin, [email], (err, adminResult) => {
        if (err) {
            return res.status(500).json("Erro ao consultar o banco de dados.");
        }

        if (adminResult.length > 0) {
            const admin = adminResult[0];
            bcrypt.compare(senha, admin.senha, (err, senhaCorreta) => {
                if (err) {
                    return res.status(500).json("Erro ao verificar a senha.");
                }

                if (senhaCorreta) {

                    const token = jwt.sign(
                        { id: admin.id, email: admin.email, nome: admin.nome, permissao: admin.permissao },
                        JWT_SECRET,
                        { expiresIn: '2h' }
                    );

                    return res.status(200).json({
                        message: "Login bem-sucedido",
                        token,
                        permissao: admin.permissao 
                    });
                } else {
                    return res.status(401).json("Senha incorreta.");
                }
            });
        } else {

            db.query(sqlUser, [email], (err, userResult) => {
                if (err) {
                    return res.status(500).json("Erro ao consultar o banco de dados.");
                }

                if (userResult.length === 0) {
                    return res.status(401).json("Usuário não encontrado.");
                }

                const user = userResult[0];
                bcrypt.compare(senha, user.senha, (err, senhaCorreta) => {
                    if (err) {
                        return res.status(500).json("Erro ao verificar a senha.");
                    }

                    if (senhaCorreta) {

                        const token = jwt.sign(
                            { id: user.id, email: user.email, nome: user.nome, permissao: 'usuario' },
                            JWT_SECRET,
                            { expiresIn: '2h' }
                        );

                        return res.status(200).json({
                            message: "Login bem-sucedido",
                            token,
                            permissao: 'usuario' 
                        });
                    } else {
                        return res.status(401).json("Senha incorreta.");
                    }
                });
            });
        }
    });
});

app.put('/atualizar-perfil', autenticarToken, (req, res) => {
    const { id } = req.user; 
    const { nome, email, senha } = req.body;

    if (!nome || !email) {
        return res.status(400).json("Por favor, forneça nome e email.");
    }

    let queryValues = [nome, email, id];
    let sqlAtualizar = "UPDATE administrador SET nome = ?, email = ? WHERE id = ?";

    if (senha) {
        bcrypt.hash(senha, 10, (err, hashedPassword) => {
            if (err) {
                return res.status(500).json("Erro ao hashear a senha.");
            }

            sqlAtualizar = "UPDATE administrador SET nome = ?, email = ?, senha = ? WHERE id = ?";
            queryValues = [nome, email, hashedPassword, id];

            db.query(sqlAtualizar, queryValues, (err, resultado) => {
                if (err) {
                    return res.status(500).json("Erro ao atualizar o perfil.");
                }

                return res.status(200).json("Perfil atualizado com sucesso.");
            });
        });
    } else {

        db.query(sqlAtualizar, queryValues, (err, resultado) => {
            if (err) {
                return res.status(500).json("Erro ao atualizar o perfil.");
            }

            return res.status(200).json("Perfil atualizado com sucesso.");
        });
    }
});


app.post('/cadastro-administrador', (req, res) => {
    const sqlInserirAdmin = "INSERT INTO administrador (nome, email, senha, empresa, permissao) VALUES (?, ?, ?, ?, ?)";
    const sqlVerificarAdmin = "SELECT * FROM administrador WHERE email = ?";
    const { nome, email, senha, empresa, permissao } = req.body;

    if (!nome || !email || !senha || !empresa || !permissao) {
        return res.status(400).json("Por favor, preencha todos os campos.");
    }

    db.query(sqlVerificarAdmin, [email], (erro, adminExistente) => {
        if (erro) {
            return res.status(500).json("Erro ao verificar o banco de dados.");
        }

        if (adminExistente.length > 0) {
            return res.status(400).json("Email já cadastrado como administrador.");
        }

        bcrypt.hash(senha, 10, (erro, hash) => {
            if (erro) {
                return res.status(500).json("Erro ao hashear a senha.");
            }

            db.query(sqlInserirAdmin, [nome, email, hash, empresa, permissao], (erro, resultado) => {
                if (erro) {
                    return res.status(500).json("Erro ao registrar o administrador.");
                }

                return res.status(201).json("Administrador registrado com sucesso.");
            });
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
    if (!nome || !cpf || !email || !telefone || !cep || !uf || !cidade  || !estado || !endereco || !numero || !bairro || !ong || !produtos || !dataAgendada) {
        return res.status(400).json("Por favor, preencha todos os campos.");
    }

    const agendamento = new AgendamentoColeta( nome, cpf, email, telefone, cep, uf, cidade, estado, endereco, numero,complemento, bairro, ong, produtos.join(', '), dataAgendada);

    agendamento.confirmarAgendamento();

    const sqlInserirAgendamento = `
        INSERT INTO agendamento (nome, cpf, email, telefone, cep, uf, cidade, estado, endereco, numero, complemento, bairro, ong, produto, dataAgendada) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(
        sqlInserirAgendamento,
        [
            agendamento.getNome(), agendamento.getCpf(), agendamento.getEmail(), agendamento.getTelefone(), agendamento.getCep(), agendamento.getUf(), agendamento.getCidade(), agendamento.getEstado(), agendamento.getEndereco(), agendamento.getNumero(),agendamento.getComplemento(), agendamento.getBairro(), agendamento.getOng(), agendamento.getProduto(),agendamento.getDataAgendada()
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

