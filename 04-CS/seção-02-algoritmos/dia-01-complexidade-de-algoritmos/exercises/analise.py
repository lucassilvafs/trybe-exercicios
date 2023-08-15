def calculations(n):
    number1 = 0
    for n1 in range(n):
        number1 += n1

    number2 = 0
    for n1 in range(n):
       for n2 in range(n):
            number2 += n1 + n2

    number3 = 0
    for n1 in range(n):
       for n2 in range(n):
           for n3 in range(n):
               number3 += n1 + n2 + n3

    return number1, number2, number3

n1, n2, n3 = calculations(100)
print(f'{n1}, {n2}, {n3}')

# Esse algoritmo tem três estruturas de repetição evidentes: uma linear, uma quadrática e uma cúbica.

# Qual é a Ordem de Complexidade dele? 🤔
# Resposta: A rigor, ela seria O(n + n² + n³).

# De olho na dica👀: Se os loops estão aninhados você os multiplica, e se estão paralelos você os soma.

# Podemos pensar em alguns outros exemplos:

# Um algoritmo de busca binária que roda três vezes teria O(3 * log n) de complexidade;

# Um algoritmo que roda uma busca binária num array de tamanho n para cada elemento de um array de tamanho m teria O(m * log n) de complexidade.

# Anota aí 🖊: Para valores grandes, dizer a maior ordem de complexidade do conjunto já basta para uma boa análise. Sendo assim, ao analisar várias estruturas de repetição em paralelo, responda somente com o valor da estrutura que tiver maior ordem de complexidade na hora de fazer a sua análise.

def linear_search(numbers, target):
    n = len(numbers) # N será a quantidade de elementos da lista
    for index in range(0, n): # vamos iterar a lista completa
        if numbers[index] == target: # se encontrar o elemento alvo, retorne a posição
            return index

    return -1 # Não encontrou? Retorne -1


print(linear_search([1, 2, 3], 2))  # saída: 1
print(linear_search([1, 2, 3], 4))  # saída: -1

# Dizemos que, para entradas muito grandes, esse algoritmo é O(n).

# O que acontece, porém, caso tenhamos sorte e o número que procuramos seja o primeiro do array?🤔
# Resposta: Nesse caso, mesmo para uma entrada infinita, nossa complexidade será O(1). Esse é o melhor caso desse algoritmo. De forma análoga, o pior caso é o número ser o último elemento do array, ou seja O(n).

# Você pode estar se perguntando: “E o caso médio”? 🤔
# Resposta: Seria algo como O(n * 1/2), por exemplo. Nesse caso, o número que procuramos está no meio da lista. Mas, para entradas muito grandes, aprendemos a desprezar os números menos relevantes da soma, então, podemos simplificar e dizer que o caso médio é O(n) também.

# Diferentes algoritmos têm diferentes cenários de melhor caso, pior caso e caso médio. Veremos vários exemplos disso ao longo das próximas seções.


# As complexidades que estudamos foram:

# Constantes: O(1);
# Logarítmicos: O(log n);
# Linear: O(n);
# Quadráticos: O(n²);
# Cúbicos: O(n³);
# Exponencial: O(2ⁿ);
# Fatorial: O(n!).
