# classe abstrata
# Uma classe abstrata é aquela que não pode possuir instâncias a partir dela, existindo apenas para 
# ser herdada.

# Na verdade o Python é uma linguagem tão permissiva que você até consegue criar instâncias da classe 
# abstrata, mas conceitualmente é algo que não deve ser feito.
# Para criar uma classe abstrata em Python, basta criar uma classe que herda de abc.ABC:
from abc import ABC


class Database(ABC):
    pass

# métodos abstratos
# Nas classes abstratas podemos ter (mas não temos a obrigação de ter) alguns métodos abstratos, 
# que são métodos que não possuem uma implementação, e servem para obrigar a classe normal que herda 
# da classe abstrata a implementá-los (por meio da sobrescrita de métodos). Por exemplo, na classe 
# Database podemos ter o método abstrato connect. Esse método não possui implementação em Database, 
# mas MongoDatabase e MySQLDatabase, classes normais, são obrigadas a implementá-lo.

# Para declarar um método como abstrato, utilizamos o decorador @abc.abstractmethod, e preenchemos o
#  corpo do método com um pass, com Ellipsis (...) ou com um raise NotImplementedError:
from abc import ABC, abstractmethod


class Database(ABC):
    @abstractmethod
    def execute(self, query):
        ...
        # ou pass
        # ou com um raise NotImplementedError


class MongoDatabase(Database):
    def execute(self, query):
        print(f"executando query '{query}' no mongo")


class MySQLDatabase(Database):
    def execute(self, query):
        print(f"executando query '{query}' no mysql")

# Uma classe abstrata pode herdar de outra classe abstrata, e então pode ou não implementar os 
# métodos abstratos da superclasse.

# Interfaces são o equivalente a classes abstratas que somente possuem métodos abstratos, ou seja, 
# nenhum método já é implementado. Em algumas linguagens de programação existe uma palavra reservada 
# e uma sintaxe específica para a criação e uso de interfaces. Em Python são apenas classes abstratas 
# comuns que são herdadas por classes normais.

# A diferença de uma classe abstrata para uma interface é que uma classe abstrata pode possuir métodos
#  que as subclasses irão herdar e reaproveitar, enquanto que a interface é só um contrato para definir
#  métodos que devem ser implementados.
def minha_func(database): # repare que o d é minúsculo
    if isinstance(database, Database):
        database.execute("query qualquer")
    else:
        print(f"{database} não é um Database válido")

db1 = MongoDatabase()
db2 = MySQLDatabase()

minha_func(db1)
minha_func(db2)
minha_func("db_inválido")

# executando query 'query qualquer' no mongo
# executando query 'query qualquer' no mysql
# db_inválido não é um Database válido

# A função isinstance retorna se um objeto é instância de uma classe ou de qualquer uma de suas 
# subclasses.

# Pode não parecer tão impressionante, mas Python possui type hints, e as tipagens poderiam ser 
# avaliadas em tempo de checagem estática, e não de execução, como foi com o uso de isinstance:

# repare que coloco o tipo do parâmetro, ou seja, `database` é do tipo
# `Database`
def minha_func(database: Database):
    database.execute("query qualquer")


# métodos estáticos
class Classe:
    @staticmethod
    def método_estático():
        print("Olá")


objeto = Classe()
Classe.método_estático()
objeto.método_estático()
# Saída:
# Olá
# Olá

# atributos de classe
class Classe:
    atributo_da_classe = 1


objeto_1 = Classe()
objeto_2 = Classe()

print(Classe.atributo_da_classe)  # Saída: 1
print(objeto_1.atributo_da_classe)  # Saída: 1
print(objeto_2.atributo_da_classe)  # Saída: 1

Classe.atributo_da_classe = 2
print(Classe.atributo_da_classe)  # Saída: 2
print(objeto_1.atributo_da_classe)  # Saída: 2
print(objeto_2.atributo_da_classe)  # Saída: 2

objeto_1.atributo_da_classe = 3
print(Classe.atributo_da_classe)  # Saída: 2
print(objeto_1.atributo_da_classe)  # Saída: 3
print(objeto_2.atributo_da_classe)  # Saída: 2


# métodos de classe
class Classe:
    _atributo_da_classe = 1

    @classmethod
    def seta_atributo_da_classe(cls, valor):
        cls._atributo_da_classe = valor

    @classmethod
    def retorna_atributo_da_classe(cls):
        return cls._atributo_da_classe


objeto_1 = Classe()
objeto_2 = Classe()

print(Classe.retorna_atributo_da_classe())  # Saída: 1
print(objeto_1.retorna_atributo_da_classe())  # Saída: 1
print(objeto_2.retorna_atributo_da_classe())  # Saída: 1

Classe.seta_atributo_da_classe(2)
print(Classe.retorna_atributo_da_classe())  # Saída: 2
print(objeto_1.retorna_atributo_da_classe())  # Saída: 2
print(objeto_2.retorna_atributo_da_classe())  # Saída: 2

objeto_1.seta_atributo_da_classe(3)
print(Classe.retorna_atributo_da_classe())  # Saída: 3
print(objeto_1.retorna_atributo_da_classe())  # Saída: 3
print(objeto_2.retorna_atributo_da_classe())  # Saída: 3


# chamando métodos
# Arquivo main.py
class Classe:
    atributo_da_classe = 1

    def __init__(self):
        self.atributo_do_objeto = 2

    def método_normal(self):
        print(self)

    @classmethod
    def método_de_classe(cls):
        print(cls)

    @staticmethod
    def método_estático():
        print("Olá")


objeto = Classe()

# Acessando atributo do objeto
print(objeto.atributo_do_objeto)
# Não dá pra chamar usando a classe (Classe.atributo_do_objeto dá erro)
# Saída:
# 2

# Acessando atributo da classe
print(Classe.atributo_da_classe)
print(objeto.atributo_da_classe) 
# Saída:
# 1
# 1

# Chamando o método normal
Classe.método_normal(objeto)  # Ou Classe.método_normal(self=objeto)
objeto.método_normal() # Açúcar sintático para a forma da linha acima
# Saída:
# <__main__.Classe object at 0x7f2304ab3d30>
# <__main__.Classe object at 0x7f2304ab3d30>

# Chamando o método estático
Classe.método_estático()
objeto.método_estático()
# Saída:
# Olá
# Olá

# Chamando o método de classe
Classe.método_de_classe()  # Observe que não precisa passar nenhum parâmetro
objeto.método_de_classe() 
# Saída:
# <class '__main__.Classe'>
# <class '__main__.Classe'>
