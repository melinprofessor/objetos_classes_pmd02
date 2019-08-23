
// Objetos
// Objeto Literal, é um JSON estático.
const Pessoa = {
    nome: "Vinicius",
    idade: 21,
    sexo: "M",
    endereco: {
        rua: "",
        cep: "",
        cidade: "",
        telefone: [{
            id: 1,
            numero: 999
        },
        {
            id: 2,
            numero: 5555
        }
    ]
    }
}

console.log(Pessoa)


// Objeto sendo criando da maneira antiga
const carro = new Object();
carro.anoFabricao = 2019;
carro.cor = "Branco";
carro.modelo = "Mustang";
console.log(carro);


const carro2 = Object.assign({ combustivel: "flex"},carro);

console.log(carro2);


// Desestruturação

const {nome, idade, endereco} = Pessoa;

console.log(nome,idade, endereco);