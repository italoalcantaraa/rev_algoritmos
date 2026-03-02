# implemente uma função que recebe uma lista ordenada e um número alvo. 
# A função deve retornar o índice do alvo. Se não encontrar, retorne -1 */#

def buscar_alvo(lista, numero_alvo):
    baixo = 0
    alto = len(lista) - 1
    
    while baixo <= alto:
        meio = (baixo + alto) // 2 #divisao inteira
        chute = lista[meio]

        if chute == numero_alvo:
            return meio
        if chute > numero_alvo:
            alto = meio - 1
        else:
            baixo = meio + 1
    
    return -1

lista = [10, 20, 30, 40, 50, 60]
alvo = 50

pos = buscar_alvo(lista, alvo)
print(pos)