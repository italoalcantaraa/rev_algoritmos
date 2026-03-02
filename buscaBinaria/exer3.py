# Use a lógica da busca binária para encontrar o maior número (o pico) em tempo O(log n).

def busca_binaria(lista):
    esq = 0
    dir = len(lista) - 1
    
    while True:      
        meio = (esq + dir) // 2
        
        if lista[meio] > lista[meio + 1] and lista[meio] >= lista[meio - 1]:
            return lista[meio]
        if lista[meio] <= lista[meio + 1]:
            esq = meio + 1 
        else:
            dir = meio - 1


lista = [1, 2]
resultado = busca_binaria(lista)
print(resultado)
        
        