import Usuario from './Usuario.js'; 
import AgendamentoColeta from '../AgendamentoColeta.js'; 

const pessoa1 = new Usuario("Fulano", 123456789, "fulano@gmail.com", 11970382953, 1234);

pessoa1.visualizarPerfil();

let verificacao = pessoa1.validarLogin("fulano@gmail.com", 1234);
console.log();

if (verificacao) {
    console.log("Login bem-sucedido!");
    console.log();

    const agendamento = new AgendamentoColeta(
        pessoa1.nome, 
        pessoa1.cpf, 
        pessoa1.email, 
        pessoa1.telefone, 
        "03983-160", 
        "SP", 
        "São Paulo", 
        "Rua Oscar Freire", 
        "20253", 
        "Casa", 
        "Pranja Jorn Debora", 
        "Ecobraz Emigre", 
        "Televisão", 
        "2024-10-01"
    );
    
    agendamento.confirmarAgendamento();
} else {
    console.log("[Erro] Email ou senha inválidos");
}


