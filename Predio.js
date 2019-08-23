// Para utilizar um classe ou qualquer funcionalidade de outro arquivo.
// É preciso utilizar a para reservada "require" e passar o caminho
// do arquivo.
const Moradia = require('./Moradia')

 // Para utilizar herança é preciso
 // usar a palavra reservada "extends"
class Predio extends Moradia {
   constructor(tipo,tamanho, qtdQuartos ,portao,cor, elevador) {
       super(tipo,tamanho, qtdQuartos ,portao,cor)
       this.elevador = elevador;
   }

   // Para metodos sobrescritos utilza-se o mesmo nome
   // que foi criado na classe base.
   getInformacao() {
       // para chamar o metodo sobrescrito utiliza-se a palavra
       // reservada "super" e o nome do metodo
       super.getInformacao();
       console.log(`Elevador: ${this.elevador}`);
   }
}

let predio = new Predio("Predio","Pequeno",2,2,"Branco","descendo");
predio.getInformacao()
predio.acaoPortao();
predio.getInformacao()