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

    // Metodo para confirmar agendamento
    confirmarAgendamento() {
        console.log(`Agendamento confirmado para ${this.nome}.`);
        console.log(`Endereço: ${this.endereco}, ${this.numero}, ${this.complemento}, ${this.bairro}, ${this.cidade} - ${this.uf}, CEP: ${this.cep}`);
        console.log(`Ponto de coleta: ${this.pontoColeta}`);
        console.log(`Produto: ${this.produto}`);
        console.log(`Data agendada: ${this.dataAgendada}`);
    }
}
