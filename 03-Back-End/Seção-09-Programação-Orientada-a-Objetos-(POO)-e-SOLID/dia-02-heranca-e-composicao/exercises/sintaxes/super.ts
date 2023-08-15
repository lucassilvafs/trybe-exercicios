// Super
// Sempre que você, na subclasse, queira referenciar a superclasse, poderá utilizar a palavra reservada super. Super bacana, né? 🤣

// Deixando a gracinha de lado, vamos a um exemplo que não funciona:

class Animal {
  constructor(protected birthDate: Date) { }
}
class Bird extends Animal {
  constructor(public name: string) { } // ERRO: constructor deve respeitar o contrato da superclasse
}

// Em TypeScript, o método construtor de uma subclasse deve ser o mesmo da superclasse 
// (os exemplos anteriores funcionaram pois não tinham o construtor), ou deve chamar o da superclasse.

// Agora vamos a um exemplo que funciona:

class Animal {
  constructor(protected birthDate: Date) { }
}
class Bird extends Animal {
  constructor(public name: string) {
    super(new Date());
  }
}

