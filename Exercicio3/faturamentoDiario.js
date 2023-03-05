class Faturamento{
    constructor(dados){
        this.dados = dados;
        this.faturamento = [];
        this.separaFaturamento(this.faturamento);
    }
    
    separaFaturamento(faturamento){
        let i = 0;
        this.dados.forEach(e => {
            if(e.valor != 0){
                this.faturamento[i] = e.valor;
                i++;
            }
        });          
    }
    menorValor(){
        let menor = Math.min.apply(null, this.faturamento);
        console.log(`Menor faturamento: ${menor}`);
    }
    maiorValor(){
        let maior = Math.max.apply(null, this.faturamento);
        console.log(`Maior faturamento: ${maior}`);
    }
    diasSuperioresAMedia(){
        let qtdItens = this.faturamento.length;
        let soma = 0;
        let qtdDiasSuperiores = 0;

        this.faturamento.forEach(e => {
            soma += e; 
        });

        let media = soma/qtdItens;

        this.faturamento.forEach(e => {
            if(e > media)
                qtdDiasSuperiores++;
        });

        console.log(`Qtd de dias com faturamento superior a media: ${qtdDiasSuperiores}`);
    }
}

function analiseFaturamentoDiario(dados){
    let faturamento = new Faturamento(dados);
    faturamento.menorValor();
    faturamento.maiorValor();
    faturamento.diasSuperioresAMedia();
}

function main(){
    const dados = require('./dados.json');
    analiseFaturamentoDiario(dados);
}
main();
