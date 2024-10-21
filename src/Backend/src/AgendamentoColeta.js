import Usuario from './Usuario.js'; 

export default class AgendamentoColeta extends Usuario {
    constructor(nome, cpf, email, telefone, cep, uf, cidade, endereco, numero, complemento, bairro, pontoColeta, produto, dataAgendada) {
        super(nome, cpf, email, telefone);       
        this.cep = cep;                 
        this.uf = uf;                   
        this.cidade = cidade;           
        this.endereco = endereco;       
        this.numero = numero;           
        this.complemento = complemento; 
        this.bairro = bairro;           
        this.pontoColeta = pontoColeta; 
        this.produto = produto;         
        this.dataAgendada = dataAgendada; 
    }

     // Gets
     getCep() {
        return this.cep;
    }

    getUf() {
        return this.uf;
    }

    getCidade() {
        return this.cidade;
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

    getPontoColeta() {
        return this.pontoColeta;
    }

    getProduto() {
        return this.produto;
    }

    getDataAgendada() {
        return this.dataAgendada;
    }

    // Sets
    setCep(cep) {
        this.cep = cep;
    }

    setUf(uf) {
        this.uf = uf;
    }

    setCidade(cidade) {
        this.cidade = cidade;
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

    setPontoColeta(pontoColeta) {
        this.pontoColeta = pontoColeta;
    }

    setProduto(produto) {
        this.produto = produto;
    }

    setDataAgendada(dataAgendada) {
        this.dataAgendada = dataAgendada;
    }

    confirmarAgendamento() {
        console.log(`Agendamento confirmado para ${this.nome}.`);
        console.log(`Endereço: ${this.endereco}, ${this.numero}, ${this.complemento}, ${this.bairro}, ${this.cidade} - ${this.uf}, CEP: ${this.cep}`);
        console.log(`Ponto de coleta: ${this.pontoColeta}`);
        console.log(`Produto: ${this.produto}`);
        console.log(`Data agendada: ${this.dataAgendada}`);
    }
}
