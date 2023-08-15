// Observe que temos, na classe Animal, um atributo privado birthDate (data de nascimento). 
// Você não pode acessar ou alterar este atributo fora da classe Animal.

class Animal {
  constructor(private birthDate: Date) { } // Repare no private

}
class Bird extends Animal {
  showBirthDate() {
    console.log(this.birthDate); // ERRO! birthDate é privado e não é visível pra subclasse Bird.
  }
}

//Entretanto, às vezes precisamos manter alguns atributos e métodos privados do mundo externo, 
// mas possíveis de serem modificados dentro de subclasses. É aí que entra o protected.

class Animal {
  constructor(protected birthDate: Date) { } // Protected: classe filha pode ler e escrever, mas acessos externos não
}
class Bird extends Animal {
  showBirthDate() {
    console.log(this.birthDate); // Okay!
  }
}