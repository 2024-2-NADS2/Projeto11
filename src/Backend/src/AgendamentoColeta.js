const Usuario = require('./Usuario.js');

class AgendamentoColeta extends Usuario {
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
            endereco: this.getEndereco(),
            numero: this.getNumero(),
            complemento: this.getComplemento(),
            bairro: this.getBairro(),
            pontoColeta: this.getPontoColeta(),
            produto: this.getProduto(),
            dataAgendada: this.getDataAgendada()
        });
    }
}

module.exports = AgendamentoColeta;
