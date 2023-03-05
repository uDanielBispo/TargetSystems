class Distribuidora{
    constructor(locais, valores){
        this.locais = locais;
        this.valores = valores;
        this.total = this.calcTotal();
        this.porcentagens = this.calcPorcentagem(this.valores, this.total);
    }   

    calcTotal(){
        let total = 0;
        this.valores.forEach(e => {
            total += e;
        });
        return total;
    }

    calcPorcentagem(valores, total){
        let porcentagens = [];
        valores.forEach(e => {
            porcentagens.push((e*100)/total);
        });
        return porcentagens;
    }

    logPorcentagens(){
        let indice = 0;
        this.porcentagens.forEach(e => {
            console.log(this.locais[indice] + ": " + e.toFixed(2) + "%"); 
            indice++;
        });  
    }
}

function main() {
    let distribuidora = new Distribuidora(
        ["SP", "RJ", "MG", "ES", "Outros"],
        [67836.43, 36678.66, 29229.88, 27165.48, 19849.53]
    );
    distribuidora.logPorcentagens();
}
main();