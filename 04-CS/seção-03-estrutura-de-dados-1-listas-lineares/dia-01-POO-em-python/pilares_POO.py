# ENCAPSULAMENTO
class Liquidificador:
    def __init__(self, cor, potencia, tensao, preco):
        self.preco = preco
        self.cor = cor
        self._potencia = potencia
        self._tensao = tensao
        self.__ligado = False
        self.__velocidade = 0
        self.__velocidade_maxima = 3
        self.__corrente_atual_no_motor = 0

    def ligar(self, velocidade):
        if velocidade > self.__velocidade_maxima or velocidade < 0:
            raise ValueError(
                f"Velocidade deve estar entre 0 e {self.__velocidade_maxima}"
            )

        self.__velocidade = velocidade
        self.__corrente_atual_no_motor = (
            (self._potencia / self._tensao) / self.__velocidade_maxima
        ) * velocidade
        self.__ligado = True

    def desligar(self):
        self.__ligado = False
        self.__velocidade = 0

    def esta_ligado(self):
        return self.__ligado
    

# ABSTRAÇÃO
liquidificador_vermelho = Liquidificador("Vermelho", 250, 220, 100)
liquidificador_vermelho.ligar(1)
print("Está ligado?", liquidificador_vermelho.esta_ligado())
# Está ligado? True
liquidificador_vermelho.desligar()
print("Está ligado?", liquidificador_vermelho.esta_ligado())
# Está ligado? False

# COMPOSIÇÃO
class Pessoa:
    def __init__(self, nome, saldo_na_conta):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.liquidificador = None

    def __str__(self):
        return f"{self.nome} - possui {self.saldo_na_conta} reais em sua conta."

    def comprar_liquidificador(self, liquidificador):
        if liquidificador.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= liquidificador.preco
            self.liquidificador = liquidificador


pessoa_cozinheira = Pessoa("Jacquin", 1000)
pessoa_cozinheira.comprar_liquidificador(liquidificador_vermelho)

print(pessoa_cozinheira)
# retorno: Pessoa object at 0x7f53bbe1b580>

# após isso:
# def __str__(self):
#        return f"{self.nome} - possui {self.saldo_na_conta} reais em sua conta."
print(pessoa_cozinheira)
# retorno: Jacquin - possui 800 reais em sua conta.

# HERANÇA
class Eletrodomestico:
    def __init__(self, cor, potencia, tensao, preco):
        self.preco = preco
        self.cor = cor
        self._potencia = potencia
        self._tensao = tensao
        self.__ligado = False
        self.__velocidade = 0
        self.__velocidade_maxima = 3
        self.__corrente_atual_no_motor = 0

    def ligar(self, velocidade):
        if velocidade > self.__velocidade_maxima or velocidade < 0:
            raise ValueError(
                f"Velocidade deve estar entre 0 e {self.__velocidade_maxima}"
            )

        self.__velocidade = velocidade
        self.__corrente_atual_no_motor = (
            (self._potencia / self._tensao) / self.__velocidade_maxima
        ) * velocidade
        self.__ligado = True

    def desligar(self):
        self.__ligado = False
        self.__velocidade = 0

    def esta_ligado(self):
        return self.__ligado

    @property
    def cor(self):
        return self.__cor.upper()

    @cor.setter
    def cor(self, nova_cor):
        self.__cor = nova_cor


class Liquidificador(Eletrodomestico):
    pass
# essa classe herdou de eletrodomestico os métodos e atributos (públicos e protegidos) 
# definidos em Eletrodomestico. Podemos criar novos métodos e atributos que não 
# existem na superclasse a vontade. Novos métodos só precisam ter sua definição, mas novos atributos 
# (declarados no __init__) exigirão o uso de polimorfismo.

# Polimorfismo

# Sobrecarga de métodos
# Ela acontece quando mais de um método pode ser definido com o mesmo nome, mas aceitando parâmetros
# em quantidades ou tipos diferentes. Não tem suporte nativo no Python, por causa da tipagem dinâmica
# mas tem em outras linguagens como o C++ 

#// Código em C++
#include "stdio.h"

#int func(int a) { return a + 1; }
#int func(char b) { return 4; }

#int main() { printf("%d %d", func(1), func('a')); }
#// saída: 2 4


# parâmetros opcionais
# Pensando no exemplo da classe Pessoa, para declarar uma nova pessoa informamos a idade, o nome e 
# saldo_na_conta. Mas será que é necessário? Podemos deixar alguns opcionais?
# Com isso a depender de como chamamos o método, coisas diferentes irão acontecer. Se passarmos uma 
# idade, ela será valorada como um atributo da pessoa. Se não passarmos, o valor será None. Nesse caso 
# estamos apenas definindo o valor da variável, mas poderíamos ter uma série de ifs que iriam realizar 
# ações diferentes com base nos parâmetros de entrada, o que não é uma sobrecarga (pois só um método é 
# declarado), mas se assemelha a ela no uso prático.
class Pessoa:
    def __init__(self, nome, idade=None, saldo_na_conta=None):
        self.idade = idade
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.brinquedos = []

pessoa_1 = Pessoa("Marcelo", 22, 700)
pessoa_2 = Pessoa("Matheus")
pessoa_3 = Pessoa("Maria", 33)
pessoa_4 = Pessoa("Márcia", saldo_na_conta=100)


# Sobrescrita de métodos
# Já a sobrescrita de métodos é mais comum em qualquer linguagem que possua orientação a objetos. 
# A sobrescrita ocorre quando um método definido em uma superclasse é novamente definido 
# (reescrito/sobrescrito) na subclasse
class Liquidificador(Eletrodomestico):
    def esta_ligado(self):
        return False
    

# super
#Por meio dessa referência, você pode acessar métodos da superclasse por meio da subclasse. 
# Para isso utilizamos a notação super().método()
class Liquidificador(Eletrodomestico):
    def esta_ligado(self):
        return "Sim" if super().esta_ligado() else "Não"
    

class Liquidificador(Eletrodomestico):
    pass

class Ventilador(Eletrodomestico):
    def __init__(self, cor, potencia, tensao, preco, quantidade_de_portas=1):
        # Chamada ao construtor da superclasse
        super().__init__(cor, potencia, tensao, preco)
        
        # Faz outras coisas específicas dessa subclasse
        self.quantidade_de_portas = quantidade_de_portas


class Pessoa:
    def __init__(self, nome, saldo_na_conta):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.eletrodomesticos = []

    # Permite a aquisição de qualquer eletrodoméstico
    def comprar_eletrodomestico(self, eletrodomestico):
        if eletrodomestico.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= eletrodomestico.preco
            self.eletrodomestico.append(eletrodomestico)
