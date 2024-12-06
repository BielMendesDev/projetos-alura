let titulo = document.querySelector('h1');
titulo.innerHTML = 'hora do desafio';
let resultado = document.querySelector('h2');
let numero1;
let numero2;

let cidade;

function btnClick(){
    console.log('botão clicado');
}


function btnAlert(){
    alert('eu amo js');
}

function bntPrompt(){
    cidade = prompt('digite sua ciade:');
    alert(`estive em ${cidade} e lembrei de você`)
}

function btnSoma(){
    alert('soma de dois numeros')
    numero1 = prompt('coloque o primeiro numero:')
    numero2 = prompt('coloque o segundo numero:')
    resultado.innerHTML = parseInt(numero1) + parseInt(numero2);
}