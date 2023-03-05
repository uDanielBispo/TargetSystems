function main(){
    let num = window.prompt("Digite um numero: ");
    let fibonacci = [0, 1];

    num = parseInt(num);

    while(fibonacci.slice(-1)[0] < num){
        fibonacci.push(fibonacci.slice(-1)[0] + fibonacci.slice(-2, -1)[0]);
    };


    if(fibonacci.includes(num)){
        window.alert(`O numero ${num} pertence à sequencia de fibonacci: \nfibonacci ${fibonacci}`);
    }else{ 
        window.alert(`O numero ${num} não pertence a sequencia de fibonacci:\n fibonacci ${fibonacci}`);
    }
}
while (true){
    main();
}