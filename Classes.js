// POO - Programação Orienta a Objetos
// Polimorfismo 
// Herança 
// Encapsulamento

// Classe tem o nome de Pessoa
class Pessoa {

    // O construtor é o primeiro metódo a ser chamado
    // O construtor pode receber parametros ou não
    // Quando um paramentro é omitido é possível denifir
    // um valor por padrão (idade = 1)
    // Todo parametro precisar ser a mesma quantidade e na ordem
    constructor(nomePessoa, idade = 1, sexo = "M", dataNascimento, cpf, endereco) {
        this.nome = nomePessoa;
        // Que utilizamos o OU (||) para verificar se o paremetro
        // é nulo ser for atribuimos outro valor para a mesma
        this.idade = idade || "Não definida"
        this.sexo = sexo
        this.dataNascimento = dataNascimento;
        this.cpf = cpf;
        this.endereco = endereco;
    }

    // Metodo não estático que possui retorno
    validarCpf() {
        if(this.cpf.length === 11) {
            return true;
        }

        return false;

    }

    static validarCPFEstatico(cpf) {
        console.log(cpf)
        if(cpf.length === 11) {
            return true;
        }

        return false;
    }

    // Metodo não estático que não possui retorno
    validarEndereco() {
        console.log(this.endereco.rua)
    }
 
}


// Toda que eu preciso instanciar
// Preciso utilizar a palavra new
//
// const pessoa1 = new Pessoa("Vinicius",24,"M", new Date())
// const pessoa2 = new Pessoa("Felipe", null,null,null)
// const pessoa3 = new Pessoa("Stefano")

const endereco = {
    rua: 21
}


const pessoa = new Pessoa("Vinicius",24,"M", new Date(), '44430100826', endereco)

// Que todo metódo não estático para ser utilizado precisar
// Que a classe seja instanciada primeiro
console.log(pessoa.validarCpf())
pessoa.validarEndereco()
console.log(Pessoa.validarCPFEstatico('44430100745'))
console.log(Pessoa.validarCPFEstatico(pessoa.cpf))