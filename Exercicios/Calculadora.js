/** Crie uma classe Calculadora com um método estático
 *  que permita somar doisnúmeros e exiba esse número na tela.
 * Classe: Calculador
 * aAtributos: não será necessário nenhum atributo
 * Métodos: somar */

 class Calculadora {
     constructor() {}

     static somar(numero1, numero2) {
         const resutaldo = numero1 + numero2;
         console.log(resutaldo);
     }
 }

 Calculadora.somar(10,100);