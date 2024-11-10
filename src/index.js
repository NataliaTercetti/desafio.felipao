const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function classificarHeroi(nome, xp) {
    let nivel;

    if (xp < 1000) {
        nivel = "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        nivel = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        nivel = "Prata";
    } else if (xp >= 5001 && xp <= 7000) {
        nivel = "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
        nivel = "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    return `${nome} está no nível de ${nivel}`;
}

rl.question('Digite o nome do herói: ', (nome) => {

    rl.question('Digite a quantidade de experiência (XP) do herói: ', (xp) => {
        xp = parseInt(xp); // Converter a XP para número inteiro

        // Verificar se a entrada de XP é um número válido
        if (isNaN(xp)) {
            console.log("Por favor, insira um número válido para a XP.");
            rl.close();
            return;
        }

        const resultado = classificarHeroi(nome, xp);

        console.log(resultado);

        rl.close();
    });
});
