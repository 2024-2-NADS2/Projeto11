const Usuario = require('./Usuario.js');

class AgendamentoColeta extends Usuario {
    constructor(nome, cpf, email, telefone, cep, uf, cidade, estado, endereco, numero, complemento, bairro, ong, produto, dataAgendada) {
        super(nome, cpf, email, telefone);
        this.cep = cep;
        this.uf = uf;
        this.cidade = cidade;
        this.estado = estado; 
        this.endereco = endereco;
        this.numero = numero;
        this.complemento = complemento;
        this.bairro = bairro;
        this.ong = ong;
        this.produto = produto;
        this.dataAgendada = dataAgendada;
        this.dataColetada = null;
    }

    // Métodos Get
    getCep() { 
        return this.cep; 
    }

    getUf() { 
        return this.uf; 
    }

    getCidade() { 
        return this.cidade; 
    }

    getEstado() {
         return this.estado; 
    } 

    getEndereco() {
         return this.endereco; 
    }

    getNumero() {
         return this.numero; 
    }

    getComplemento() {
         return this.complemento; 
    }

    getBairro() {
         return this.bairro; 
    }

    getOng() {
         return this.ong; 
    }

    getProduto() {
         return this.produto; 
    }

    getDataAgendada() {
         return this.dataAgendada; 
    }

    getDataColetada() {
         return this.dataColetada; 
    }

    // Métodos Set
    setCep(cep) {
         this.cep = cep; 
    }

    setUf(uf) {
         this.uf = uf; 
    }

    setCidade(cidade) {
         this.cidade = cidade; 
    }

    setEstado(estado) {
         this.estado = estado; 
    } 

    setEndereco(endereco) {
         this.endereco = endereco; 
    }

    setNumero(numero) {
         this.numero = numero; 
    }

    setComplemento(complemento) {
         this.complemento = complemento; 
    }

    setBairro(bairro) {
         this.bairro = bairro; 
    }

    setOng(ong) {
         this.ong = ong; 
    }

    setProduto(produto) {
         this.produto = produto; 
    }

    setDataAgendada(dataAgendada) {
         this.dataAgendada = dataAgendada; 
    }

    setDataColetada(dataColetada) { 
        this.dataColetada = dataColetada; 
    }

    confirmarAgendamento() {
        console.log("Dados recebidos para inserção:", {
            nome: this.getNome(),
            cpf: this.getCpf(),
            email: this.getEmail(),
            telefone: this.getTelefone(),
            cep: this.getCep(),
            uf: this.getUf(),
            cidade: this.getCidade(),
            estado: this.getEstado(),
            endereco: this.getEndereco(),
            numero: this.getNumero(),
            complemento: this.getComplemento(),
            bairro: this.getBairro(),
            ong: this.getOng(),
            produto: this.getProduto(),
            dataAgendada: this.getDataAgendada(),
            dataColetada: this.getDataColetada()
        });
    }
}

module.exports = AgendamentoColeta;
