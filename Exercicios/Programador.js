const Funcionario = require('./Funcionario');

class Programador extends Funcionario {
    calcularSalario() {
        super.calcularSalario();
        this.total = this.total + 300;
    }
}

const programador = new Programador(1000)
programador.calcularSalario();
programador.exibirSalario();