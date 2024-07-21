// Função para calcular o saldo de vitórias e determinar o nível do jogador
function calcularNivel(vitorias, derrotas) {
    // Calcula o saldo de vitórias
    let saldoVitorias = vitorias - derrotas;
    let nivel;

    // Estrutura de decisão para determinar o nível do jogador com base nas vitórias
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    }

    // Retorna a mensagem com o saldo de vitórias e o nível do jogador
    return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
}

// Exemplo de uso da função
let vitorias = 85; // Altere este valor para testar diferentes cenários
let derrotas = 20; // Altere este valor para testar diferentes cenários

// Chama a função e exibe o resultado
console.log(calcularNivel(vitorias, derrotas));
