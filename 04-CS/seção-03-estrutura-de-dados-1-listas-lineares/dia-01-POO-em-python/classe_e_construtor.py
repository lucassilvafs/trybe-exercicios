class Exemplo:
    def __init__(self):
        print("Inicializando Exemplo")
        self.__privado = "Eu sou privado"

    def __new__(cls, *args, **kwargs):
        print("Criando uma nova instância de Exemplo")
        instance = super().__new__(cls)
        return instance

    def __metodo_privado(self):
        print("Este é um método privado")

    def metodo_publico(self):
        print("Este é um método público")
        self.__metodo_privado()


exemplo = Exemplo()
exemplo.__metodo_privado() # Erro: AttributeError: 'Exemplo' object has no attribute '__metodo_privado'


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


meu_liquidificador = Liquidificador("Azul", 200, 127, 200)
seu_liquidificador = Liquidificador(
    cor="Vermelho", potencia=250, tensao=220, preco=100
)
