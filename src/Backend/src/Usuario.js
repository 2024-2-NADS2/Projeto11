export default class Usuario { 
    constructor(nome, cpf, email, telefone, senha) {
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.telefone = telefone;
        this.senha = senha;
    }

    // Gets
    getNome() {
        return this.nome;
    }

    getCpf() {
        return this.cpf;
    }

    getEmail() {
        return this.email;
    }

    getTelefone() {
        return this.telefone;
    }

    getSenha() {
        return this.senha;
    }

    // Sets
    setNome(nome) {
        this.nome = nome;
    }

    setCpf(cpf) {
        this.cpf = cpf;
    }

    setEmail(email) {
        this.email = email;
    }

    setTelefone(telefone) {
        this.telefone = telefone;
    }

    setSenha(senha) {
        this.senha = senha;
    }

    visualizarPerfil() {
        console.log(`Nome: ${this.nome}`);
        console.log(`CPF: ${this.cpf}`);
        console.log(`Email: ${this.email}`);
        console.log(`Telefone: ${this.telefone}`);
    }

    validarLogin(email, senha) {
        if (this.email === email && this.senha === senha) {
            return true;
        } else {
            return false;
        }
    }
}
