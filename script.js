// alert("Hello World");
// prompt("Qual é o seu nome?: ");
// confirm("Você deseja sair?");
//comentário, Ctrl + ; VsCode comenta automaticamente.

let nome = prompt('Qual seu nome?:');
const api = "CHAVE_DE_API";
confirm('Você gosta do ' + nome + '?');
confirm(`seu nome é ${nome}`) //<- ATENÇÃO: não está entre aspas, está entre CRÁSE!
console.log(1/0) // <- vai dar Infinity, número inexistente ou muito grande
console.log(1/"a") // <- via dar NaN
console.log(typeof api)