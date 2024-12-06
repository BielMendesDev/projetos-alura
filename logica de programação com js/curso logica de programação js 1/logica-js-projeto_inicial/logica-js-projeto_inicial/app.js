
//comando de alerta no navegador
alert('bem vindo ao jogo do numero secreto');

//variáveis
let numeroMaximo = prompt('digite o número máximo que deseja');
let numeroMinimo = 1;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + numeroMinimo );
let chute;
let tentativas = 1;

//dica do número no console 
console.log(numeroSecreto);


//loop de tentativas
while(chute != numeroSecreto){
    chute = prompt(`digite um número entre ${numeroMaximo} e ${numeroMinimo}`);
    if (chute == numeroSecreto){
        break;
    } else {
        if (chute > numeroSecreto){
            alert(`numero secreto é menor que ${chute}`);
        } else {
            alert(`numero secreto é maior que ${chute}`);
        }
        tentativas++;
    }
} 

//operador terminario
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`você acertou o número secreto com ${tentativas} ${palavraTentativa}`); 



chute > numeroSecreto ? 'menor' : 'maior';