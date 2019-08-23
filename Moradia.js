class Moradia {
    constructor(tipo,tamanho, qtdQuartos ,portao = 1,cor) {
        this.tipo = tipo;
        this.tamanho = tamanho;
        this.qtdQuartos = qtdQuartos;
        this.portao = portao;
        this.cor = cor;
        this.portaoAberto = false;
    }

    getInformacao() {
        console.log(`
        Cor da(o) ${this.tipo}: ${this.cor}
        Tamanho d(o) ${this.tipo}: ${this.tamanho}
        Portão: ${this.portao}
        Qtd de Quartos: ${this.qtdQuartos}
        Portão aberto: ${this.portaoAberto}`)
    }

    acaoPortao() {
        this.portaoAberto = !this.portaoAberto;
    }
}

module.exports = Moradia;
// let casa = new Moradia("pequena",3,1,"branca");
// casa.getInformacao();
// casa.acaoPortao();
// casa.getInformacao();