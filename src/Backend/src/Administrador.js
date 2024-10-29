// Administrador.js (Classe que herda de Usuario)
const Usuario = require('./Usuario.js');

class Administrador extends Usuario {
    constructor(id, nome, email, senha, permissao) {
        super(id, nome, email, senha);
        this.permissao = permissao; // Atributo extra para diferenciar o administrador
    }

    // Get
    getPermissao() {
        return this.permissao;
    }

    // Set
    setPermissao(permissao) {
        this.permissao = permissao;
    }

}


module.exports = Administrador;
