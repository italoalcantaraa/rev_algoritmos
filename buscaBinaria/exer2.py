# Escreva um programa onde o computador escolhe um número aleatório de 1 a 100 e você tenta adivinhar. 
# O diferencial: após você acertar, o programa deve dizer se você foi eficiente como um logaritmo ou não.
import random
import math

def jogar_adivinhacao(numero_alvo, limite_max):
    tentativas = 0
    limite_logaritmo = math.ceil(math.log2(limite_max)) #7
    
    while True:
        tentativas += 1
        try: 
            chute = int(input(f"Tentativa {tentativas} - Informe o número: "))
        except ValueError:
            print("Número inválido!")
            continue
    
        if chute == numero_alvo:
            print("Acertou!")
            return tentativas, limite_logaritmo
        if chute > numero_alvo:
            print("Muito alto!")
        else:
            print("Muito baixo!")

MAX = 100
numero_sorteado = random.randint(1, 100)

tentativas, limite_logaritmo = jogar_adivinhacao(numero_sorteado, MAX)

if tentativas > limite_logaritmo:
    print("Você não foi tão eficimente como um algoritmo")
else: 
    print("Você foi tão eficimente como um algoritmo")

