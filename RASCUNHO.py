V1, V2, R = 0.0, 0.0, 0.0
OP = ""

def SOMA(A1, A2, AR):
    AR[0] = A1 + A2

def SUBTRACAO(S1, S2, SR):
    SR[0] = S1 - S2

def MULTIPLICACAO(M1, M2):
    MR = M1 * M2
    return MR

def DIVISAO(D1, D2):
    DR = D1 / D2
    return DR

print("Bem vindo à calculadora!")
V1 = float(input("Insira o primeiro valor: "))
V2 = float(input("Insira o segundo valor: "))
OP = input("Digite '+' para soma, '-' para subtração, '*' para multiplicação ou '/' para divisão: ")

if OP == '+':
    AR = [0.0]
    SOMA(V1, V2, AR)
    print("O resultado é", AR[0])
elif OP == '-':
    SR = [0.0]
    SUBTRACAO(V1, V2, SR)
    print("O resultado é", SR[0])
elif OP == '*':
    result_multiplicacao = MULTIPLICACAO(V1, V2)
    print("O resultado é", result_multiplicacao)
elif OP == '/':
    result_divisao = DIVISAO(V1, V2)
    print("O resultado é", result_divisao)
else:
    print("OPÇÃO INVÁLIDA")

input("Pressione qualquer tecla para encerrar!")
