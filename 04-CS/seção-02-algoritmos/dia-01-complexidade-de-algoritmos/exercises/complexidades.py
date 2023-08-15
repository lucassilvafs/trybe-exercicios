def squared_array(numbers):
    array_of_squares = []
    for number in numbers:
        array_of_squares.append(number * number)

    return array_of_squares

# Anota aí 🖊: Se falamos em ordem de complexidade 
# sem especificar se é de tempo ou de memória, assuma que é de tempo!
# linear O(n) e constante O(1)

# Os arrays têm sempre o mesmo tamanho
def multiply_arrays(array1, array2):
    result = []
    for number1 in array1:
        for number2 in array2:
            result.append(number1 + number2)

    return result


def multiply_arrays(array1, array2):
    result = []
    number_of_iterations = 0

    for number1 in array1:
        print(f'Array 1: {number1}')
        for number2 in array2:
            print(f'Array 2: {number2}')
            result.append(number1 * number2)
            number_of_iterations += 1

    print(f'{number_of_iterations} iterações!')
    return result


meu_array = [1, 2, 3, 4, 5]

multiply_arrays(meu_array, meu_array)

# Para o exemplo acima, no qual as duas entradas continham 5 elementos, 
# foram necessárias 25 operações para obtermos o resultado final!

# Anota aí 🖊: conforme aumentamos o tamanho dos arrays de entrada, 
# o número de operações para a execução do algoritmo cresce ao quadrado. 
# Isso significa que, para entradas de tamanho n, a quantidade de 
# operações para executar o algoritmo é de n². Sendo assim, a 
# complexidade desse algoritmo é dada por O(n²) e a chamamos de 
# Complexidade Quadrática.

# A Ordem de Complexidade diz respeito à taxa de crescimento do tempo de execução (ou espaço de memória ocupado) de um algoritmo, na medida em que aumentamos o tamanho da sua entrada;

# Uma complexidade é O(1) (constante), quando o tempo de execução do algoritmo independe do tamanho da entrada;

# Uma complexidade é O(n) (linear) quando a taxa de crescimento em seu tempo de execução é linear: se aumentamos a entrada em 2 vezes, aumentamos o tempo de execução em 2 vezes;

# Uma complexidade é O(n²) (quadrática) quando a taxa de crescimento do tempo de execução do algoritmo é quadrática: se aumentamos a entrada em 2 vezes, aumentamos o tempo de execução em 4 (ou 2²) vezes;

# Uma complexidade é O(n³) (cúbica) quando a taxa de crescimento do tempo de execução do algoritmo é cúbica: se aumentamos a entrada em 2 vezes, aumentamos o tempo de execução em 8 (2³) vezes.


# complexidade logaritmica O(log n)
# Suponha que temos um algoritmo cuja entrada n é igual a 4, se tivermos um algoritmo O(log n) a ser executado com essa entrada, teremos que fazer apenas 2 operações para executá-lo, pois log₂n (lê-se: “log de n na base 2”) é igual a 2. Se a nossa entrada fosse o dobro, ou seja, 8 teríamos que realizar apenas 3 operações para chegar ao fim da execução. Ao dobrar o valor da entrada novamente, com n igual a 16, teríamos que realizar apenas 4 operações (log₂n é igual a 4) e assim sucessivamente.

# Anota aí 🖊: O número de operações para executar o algoritmo logarítmico tem uma relação inversa ao tamanho da entrada: quanto maior ela é, menor o número de operações e, consequentemente, menor o tempo para a execução do algoritmo!

# A estrutura deve estar ordenada para que a busca binária funcione
def binary_search(numbers, target):
    # definir os índices
    start = 0
    end = len(numbers) - 1

    while start <= end: # os índices podem ser no máximo iguais, o início não pode ultrapassar o fim
        mid = (start + end) // 2 # encontro o meio

        if numbers[mid] == target: # se o elemento do meio for o alvo, devolve a posição do meio
            return mid
        
        if target < numbers[mid]: # se o elemento for menor, atualiza o índice do fim
            end = mid - 1
        else: # caso contrário, atualiza o índice do inicio
            start = mid + 1
    
    return -1 # Não encontrou? Retorna -1

numbers = [2, 3, 4, 10, 40]
target = 40

result = binary_search(numbers, target)
print(f"Elemento encontrado na posição: {result}")


# Essas complexidades caracterizam algoritmos que, para aumentos pequenos no tamanho da entrada, aumentam enormemente o número de operações a serem realizadas para serem executados e, consequentemente, seu tempo de execução. A relação do tempo de execução/espaço ocupado em cada caso é a seguinte:

# Exponencial: 2ⁿ (O(2ⁿ));
# Fatorial: n! (O(n!)).

# No caso de um algoritmo com Ordem de Complexidade Exponencial, para uma entrada de dados n que possui vinte elementos, o algoritmo realizará aproximadamente um milhão (ou 2²⁰) de operações. Para o caso fatorial, os mesmos vinte elementos rendem 24 quatrilhões de operações! (O número exato é: 2432902008176640000 operações 😨).

