class A:
    def faz_algo(self, valor):
        print(valor)


class B(A):
    def faz_outra_coisa(self):
        print("Vou printar o valor pelo método criado em A")
        # Chama o método da classe A, que neste caso é a superclasse, passando
        # o `self` explicitamente
        A.faz_algo(self, valor=1) # abaixo a chamada usando o método super()
        # super().faz_algo(valor=1)


b = B()
b.faz_outra_coisa()
# Vou printar o valor pelo método criado em A
# 1


# Observação sobre a linha 11: dada uma classe X qualquer que possua um método y que recebe self,
#  ou seja, uma classe normal com um método normal, e um objeto z que é uma instância dessa classe,
#  as duas chamadas são equivalentes: z.y() e X.y(z). Normalmente utilizamos a primeira, que é um 
# “açúcar sintático” para a segunda, para evitar a complexidade de chamar o nome da classe, bem como
#  passar o objeto em questão como parâmetro.

# Mas observe que a chamada comentada cria um acoplamento, ou seja, temos que chamar explicitamente
#  A dentro de um método de B. Uma forma de melhorar isso é acessando a superclasse de B (que neste
#  caso é de fato A) sem chamá-la explicitamente, delegando a um método que vai buscar qual que é a
#  superclasse. Esse método é o super(). O exemplo anterior pode ter a linha A.faz_algo(self, valor=1)
#  alterada para super().faz_algo(valor=1). Importante observar a remoção do self na passagem de 
# parâmetros para a faz_algo. Mudar de acesso direto para super não somente não traz nenhum prejuízo
#  como ainda traz uma melhoria: Se eu mudar a classe da qual B herda de A para qualquer outra que 
# possua o método faz_algo, tudo continua a funcionar.


# Herança multi-nível
# Uma classe pode herdar de outra que herda de outra, ou seja, A herda de B, B herda de C. Não há
#  diferenças significativas no funcionamento, mas é interessante saber que é possível e relativamente
#  normal. Por mais que você não escreva algo assim, é possível que veja bastante em códigos de outras
#  pessoas.
class C: # C 
    def x(self): # método de exemplo
        print(1)

class B(C): # B herda de C
    pass

class A(B): # A herda de B
    pass


a = A()
a.x()
# 1


# Herança múltipla
# Em Python existe também a chamada herança múltipla, não tão comum a outras linguagens, que é a
#  capacidade que uma classe tem de herdar de mais de uma classe ao mesmo tempo. Ou seja, uma classe A
#  pode herdar de B e C simultaneamente, sem que haja herança multi-nível.
class A(B, C): 
    pass

# ⚠️ Importante: o uso de herança múltipla é bastante desencorajado, pois gera complexidade extra na
#  hierarquia de classes. Isso exige maior controle da pessoa desenvolvedora sobre o funcionamento
#  implícito da linguagem, podendo levar a comportamentos inesperados na aplicação.

