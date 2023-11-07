let V1 = 0.0;
let V2 = 0.0;
let R = 0.0;
let OP = "";

function SOMA(A1, A2, AR) {
    AR[0] = A1 + A2;
}

function SUBTRACAO(S1, S2, SR) {
    SR[0] = S1 - S2;
}

function MULTIPLICACAO(M1, M2) {
    return M1 * M2;
}

function DIVISAO(D1, D2) {
    return D1 / D2;
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Bem vindo à calculadora!");

rl.question("Insira o primeiro valor: ", function(value1) {
    V1 = parseFloat(value1);

    rl.question("Insira o segundo valor: ", function(value2) {
        V2 = parseFloat(value2);

        rl.question("Digite '+' para soma, '-' para subtração, '*' para multiplicação ou '/' para divisão: ", function(operation) {
            OP = operation;

            if (OP === '+') {
                const AR = [0.0];
                SOMA(V1, V2, AR);
                console.log("O resultado é", AR[0]);
            } else if (OP === '-') {
                const SR = [0.0];
                SUBTRACAO(V1, V2, SR);
                console.log("O resultado é", SR[0]);
            } else if (OP === '*') {
                const result_multiplicacao = MULTIPLICACAO(V1, V2);
                console.log("O resultado é", result_multiplicacao);
            } else if (OP === '/') {
                const result_divisao = DIVISAO(V1, V2);
                console.log("O resultado é", result_divisao);
            } else {
                console.log("OPÇÃO INVÁLIDA");
            }

            console.log("Pressione Enter para encerrar!");
            rl.close();
        });
    });
});
