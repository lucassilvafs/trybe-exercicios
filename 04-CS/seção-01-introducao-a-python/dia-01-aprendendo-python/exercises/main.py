2 * 3  # saída: 6
2 + 3  # saída: 5
3 / 2  # saída: 1.5

square_root = 25 ** (1/2)  # raiz quadrada de 25. O operador `**` significa "elevado a"

print(square_root + 1)  # saída: 6.0

counter = 0
# counter++  # esse código vai falhar

# original
counter = counter + 1

# simplificado
counter += 1

3 // 2  # saída: 1

3 / 2  # saída: 1.5

# Anota aí ✏️: O método type(operando) corresponde ao operador typeof operando do JavaScript.

# De olho na dica👀: Assim como qualquer linguagem de programação, Python também possui uma grande 
# quantidade de comandos que precisamos aprender. Para nos ajudar nessa tarefa, podemos digitar help() 
# dentro da linha de comandos do Python que ele nos dará detalhes do comando passado por parâmetro.

help(list)


# O comando help() também pode ser utilizado em cláusulas if ou for, desde que colocado entre aspas e 
# para sair de dentro do comando, basta apertar a tecla q.

help("if")


# Anota aí ✏️: uma lista é uma sequência mutável e ordenada de elementos. Ela pode armazenar elementos 
# heterogêneos, ter seu tamanho variável e crescer à medida que itens são adicionados.

fruits = ["laranja", "maçã", "uva", "abacaxi"]  # elementos são definidos separados por vírgula, envolvidos por colchetes

fruits[0]  # o acesso é feito por índices iniciados em 0

fruits[-1]  # o acesso também pode ser negativo

fruits.append("banana")  # adicionando uma nova fruta

fruits.remove("abacaxi")  # removendo uma fruta

fruits.extend(["pera", "melão", "kiwi"])  # acrescenta uma lista de frutas a lista original

fruits.index("maçã")  # retorna o índice onde a fruta está localizada, neste caso, 1

fruits.sort()  # ordena a lista de frutas


# Tuplas (tuple)
# São similares a listas, porém não podem ser modificados durante a execução do programa.

user = ("Will", "Marcondes", 42)  # elementos são definidos separados por vírgula, envolvidos por parênteses

user[0]  # acesso também por índices


# Conjuntos (set)
# Um conjunto é uma coleção de elementos únicos e não ordenados. Conjuntos implementam operações de união, 
# intersecção e outras.

permissions = {"member", "group"}  # elementos separados por vírgula, envolvidos por chaves

permissions.add("root")  # adiciona um novo elemento ao conjunto

permissions.add("member")  # como o elemento já existe, nenhum novo item é adicionado ao conjunto

permissions.union({"user"})  # retorna um conjunto resultado da união

permissions.intersection({"user", "member"})  # retorna um conjunto resultante da intersecção dos conjuntos

permissions.difference({"user"})  # retorna a diferença entre os dois conjuntos


# Conjuntos imutáveis (frozenset)
# É uma variação do set, porém imutável, ou seja, seus elementos não podem ser modificados durante a 
# execução do programa.

permissions = frozenset(["member", "group"])  # assim como o set, qualquer estrutura iterável pode ser utilizada para criar um frozenset

permissions.union({"user"})  # novos conjuntos imutáveis podem ser criados à partir do original, mas o mesmo não pode ser modificado

permissions.intersection({"user", "member"})  # retorna um conjunto resultante da intersecção dos conjuntos

permissions.difference({"user"})  # retorna a diferença entre os dois conjuntos


# Dicionários (dict)
# Estrutura que associa uma chave a um determinado valor. É a representação do tão famoso objeto que 
# utilizamos em JavaScript.

people_by_id = {1: "Maria", 2: "Fernanda", 3: "Felipe"}  # elementos no formato "chave: valor" separados por vírgula, envolvidos por chaves

people_by_name = {"Maria": 1, "Fernanda": 2, "Felipe": 3}  # outro exemplo, dessa vez usando strings como chaves. As aspas são necessárias para que o Python não ache que `Maria`, `Fernanda` e `Felipe` sejam variáveis.

# elementos são acessados por suas chaves
people_by_id[1]  # saída: Maria

# elementos podem ser removidos com a palavra chave del
del people_by_id[1]
people_by_id.items()  # dict_items([(2, "Fernanda"), (3, "Felipe")])
# é retornada uma coleção iterável de tuplas contendo chaves e valores


# Range (range)
# Estrutura capaz de gerar uma sequência numérica de um valor inicial até um valor final, modificando seu 
# valor de acordo com o passo (step) definido. Pode ser declarado como range( [start], [stop], [step] ), em 
# que start e step podem ser omitidos, possuindo valores iniciais iguais a 0 e 1 respectivamente.
# Anota aí ✏️: O stop não é incluído na sequência, portanto, caso queira uma sequência de 1 até 10 a chamada 
# deverá ser range(1, 11)
# Seus valores são criados à medida que esta sequência é percorrida.

# vamos converter o range em uma lista para ajudar na visualização

# definimos somente o valor de parada
list(range(5))  # saída: [0, 1, 2, 3, 4]

# definimos o valor inicial e o de parada
list(range(1, 6))  # saída: [1, 2, 3, 4, 5]

# definimos valor inicial, de parada e modificamos o passo para 2
list(range(1, 11, 2))  # saída: [1, 3, 5, 7, 9]

# podemos utilizar valores negativos para as entradas também
list(range(10, 0, -1))  # saída: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

# estruturas condicionais

position = ""
if salary <= 2000:
    position = "estagiário"
elif 2000 < salary <= 5800:
    position = "júnior"
elif 5800 < salary <= 7500:
    position = "pleno"
elif 7500 < salary <= 10500:
    position = "senior"
else:
    position = "líder"


# Em alguns casos, em que não seja prejudicada a legibilidade, podemos criar estruturas de mapeamento 
# (dicts) para simplificar o aninhamento de condicionais. Como o exemplo a segui

key = "id"
from_to = {
    "id": "identifier",
    "mail": "email",
    "lastName": "last_name",
}
from_to[key]

# FOR
# Imagine um sistema que faça a listagem de restaurantes. Estes restaurantes possuem uma nota 
# proveniente da avaliação dos seus clientes.
restaurants = [
    {"name": "Restaurante A", "nota": 4.5},
    {"name": "Restaurante B", "nota": 3.0},
    {"name": "Restaurante C", "nota": 4.2},
    {"name": "Restaurante D", "nota": 2.3},
]
# Quando um cliente pede a listagem de restaurantes, ele pode escolher filtrar o resultado de acordo
#  com a nota. Essa filtragem pode ocorrer percorrendo a lista de restaurantes ou criando uma nova 
# lista com somente aqueles que atendem ao filtro, assim como mostra o exemplo abaixo:

filtered_restaurants = []
min_rating = 3.0
for restaurant in restaurants:
    if restaurant["nota"] > min_rating:
        filtered_restaurants.append(restaurant)
print(filtered_restaurants)  # imprime a lista de restaurantes, sem o B e D

# Dado que a maior parte do tempo estamos percorrendo estruturas, os criadores do Python decidiram que
#  o for each seria o laço de repetição principal na linguagem.
# Para cada repetição do nosso laço, um novo elemento da estrutura iterável é atribuído a variável de 
# iteração. No exemplo acima, vemos que a cada iteração um novo restaurante é colocado na variável 
# restaurant.

# Anota ai ✏️: Em alguns casos, podemos ainda querer percorrer uma sequência numérica, e para isto 
# iteramos sobre a estrutura de dados range.

for index in range(5):
    print(index)

# Além de listas, várias outras estruturas são iteráveis, como strings (str), tuplas (tuple), 
# conjuntos (set), dicionários (dict) e até mesmo arquivos.

# Compreensão de lista (list comprehension)

min_rating = 3.0
filtered_restaurants = [
    restaurant
    for restaurant in restaurants
    if restaurant["nota"] > min_rating
]
print(filtered_restaurants)  # imprime a lista de restaurantes, sem o B e D


# A compreensão de listas é declarada da mesma maneira que uma lista comum, porém no lugar dos 
# elementos nós colocamos a iteração que vai gerar os elementos da nova lista.

# De olho na dica👀: É possível filtrar esses elementos utilizando o if.

# Poderíamos listar também somente o nome dos restaurantes, veja o exemplo abaixo:

# min_rating = 3.0
filtered_restaurants = [restaurant["name"]]  # aqui pedimos somente o nome do restaurante
#                        for restaurant in restaurants
#                        if restaurant["nota"] > min_rating]
# print(filtered_restaurants)  # imprime a lista de restaurantes, sem o B e D


# A compreensão de listas também funciona com listas de strings. A seguinte cria uma nova lista de 
# strings com os nomes que contém a letra ‘a’.

names_list = ['Duda', 'Rafa', 'Cris', 'Yuri']
new_names_list = [name for name in names_list if 'a' in name]

# Aqui o for percorre cada nome em "names_list", verifica se existe a letra "a" nele,
# o adiciona à variável "name", e então gera nossa nova lista "new_names_list"
print(new_names_list)

# Saída
['Duda', 'Rafa']


# O exemplo a seguir usa uma compreensão de listas para criar uma lista com o quadrado dos 
# números entre 1 e 10.

quadrados = [x*x for x in range(11)]
print(quadrados)

# Saída
[0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

# Isto é equivalente às operações de map e filter em JavaScript.


# WHILE
# fibonacci

n = 10
last, next = 0, 1
while last < n:
    print(last)
    last, next = next, last + next

# O laço de repetição while acontecerá enquanto a condição for satisfeita.

# Aviso: Tenha cuidado ao manipular a variável presente na condicional ou entrará em uma repetição
#  infinita.
# No exemplo anterior, estamos imprimindo os elementos da sequência até que atinja o valor 10.
# Neste caso, foi utilizado um truque chamado atribuição múltipla. Isto é, atribuição de vários 
# valores a múltiplas variáveis ao mesmo tempo.

# De olho na dica👀: Este truque pode ser utilizado também para fazer a troca de valores entre 
# variáveis: a, b = b, a.

# enumerate
# Em Python, um loop for geralmente é escrito como um loop sobre um objeto iterável. 
# Isso significa que você não precisa de uma variável de contagem para acessar itens no iterável.

# Porém, às vezes, pode acontecer de você querer uma variável que muda em cada iteração do loop. 
# Em vez de criar e incrementar uma variável você mesmo, você pode usar enumerate() do Python para 
# obter um contador e o valor do iterável ao mesmo tempo!

languages = ['Python', 'Java', 'JavaScript']

enumerate_prime = enumerate(languages)

# converte um objeto enumerate em uma lista
print(list(enumerate_prime))

# Saída: [(0, 'Python'), (1, 'Java'), (2, 'JavaScript')]

# Você também pode desestruturar (unpack) os itens da lista ou tupla:

languages = ['Python', 'Java', 'JavaScript']

for index, language in enumerate(['Python', 'Java']):
    print(f'{index} - {language}')
# Saída:
# 0 - Python
# 1 - Java


# De olho na dica: na linha 4 você deve ter reparado algo diferente neste código 
# print(f'{index} - {language}'). A letra f usada dentro do print é chamada de f-string. 
# Ela fornece uma maneira de incorporar expressões dentro de strings literais, usando uma 
# sintaxe mínima. Lembre-se de ler a documentação em caso de dúvidas.


