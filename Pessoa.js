//criando a classe Pessoa
class Pessoa {
    #cpf; //atributo privado

    //método construtor - atributos da classe
    constructor(nome, idade, cpf, telefone) {
        this.nome = nome;
        this.idade = idade;
        this.#cpf = cpf;
        this.telefone = telefone;

    }

    //método da classe - ação da classe
    mostrarDetalhes() {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}`);

    }
    felizAniversario() {
        this.idade += 1;
        console.log(`Parabéns ${this.nome}! Agora você tem ${this.idade} anos!`);

    }
    #mostrarCPF() {
        console.log(`CPF: ${this.#cpf}`);
    }

}
export default Pessoa;


