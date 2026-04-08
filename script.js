// alert("Hello World");
// prompt("Qual é o seu nome?: ");
// confirm("Você deseja sair?");
//comentário, Ctrl + ; VsCode comenta automaticamente.

//let nome = prompt('Qual seu nome?:');
//const api = "CHAVE_DE_API";
//confirm('Você gosta do ' + nome + '?');
//confirm(`seu nome é ${nome}`) //<- ATENÇÃO: não está entre aspas, está entre CRÁSE!
//console.log(1/0) // <- vai dar Infinity, número inexistente ou muito grande
//console.log(1/"a") // <- via dar NaN
//console.log(typeof api)

// let nome = prompt('Qual é seu nome?');
// let idade = prompt('Qual é sua idade?');
// alert('Seu nome é ' + nome + ', sua idade é ' + idade + ' anos')

//calculadora de Metros para centimetros

// let peso = prompt('Digite seu peso.');
// let altura = prompt('Digite sua altura.');

// let IMC = peso / (altura * altura);
// if(IMC>40){
//     alert('Seloko paizão, vc muda o telefone de ouvido tem que mudar o DDD junto KKKKKKKk')
// }
// alert(`seu ${IMC.toFixed(2)}.`)

let num = parseFloat(prompt('Digite o primeiro digito'));
let num_dois = parseFloat(prompt('Digite o segundo digito'));

let operador = prompt('Digite o operador que deseja')

if(operador === "+"){
    let soma = num + num_dois;
    alert(`O valor da conta ${num} + ${num_dois} é ${soma}`)
}

else if(operador === "-"){
    let soma = num - num_dois;
    alert(`O valor da conta ${num} + ${num_dois} é ${soma}`)
}

else if(operador === "/" && num_dois !== 0){
    let soma = num / num_dois;
    alert(`O valor da conta ${num} / ${num_dois} é ${soma}`)
}

else if(operador === "*"){
        let soma = num * num_dois
}
else{
    alert('Como que você erra algo assim?')
}
alert(`Volte sempre.`)