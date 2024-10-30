const Usuario = require('./Usuario.js');

// Classe Administrador é uma herança da classe Usuario
class Administrador extends Usuario {
    constructor(id, nome, email, senha, permissao) {
        super(id, nome, email, senha);
        this.permissao = permissao; 
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
