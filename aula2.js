let umaFuncao = function(){
    console.log('Fui armazenada em uma variável');
}
umaFuncao();

function f(funcao){
    funcao();
}

function g(){
    function outrFuncao(){
        console.log('fui criado por G');
    }
    return outrFuncao();
}
f(function(){
    console.log('estou sendo passada para F');
    
})

const ehIgual = 1 < 2 && 1 < 0 || 1 < 2 ;
console.log(ehIgual);


/* const ehPar = (n) => {
    return n % 2 === 0
}
console.log(ehPar(11)); */

/* 
const hello = () => console.log('hello');
hello();

const dobro = (valor) => valor *2;
console.log(dobro(10)); */

/* const dobro = function(n){
    return n * 2
}
const res = dobro(4);
console.log(res);

const triplo = function(n = 5){
    return n * 3
}

const res2 = triplo();
console.log(res2)
 */

/* function soma(a, b){
    return a + b;
}
const res = soma(2,3);
console.log(res);
 */

/* 
function hello(){
    console.log('Oi');
}
hello();

function hello(nome){
    console.log('Oi, ' + nome);
}

hello('pedro');
 */



/* const nomes = ['Maria','Julia','Ana']
const testeArrow = nomes.every((n) => n.endsWith('a'))
console.log(testeArrow);
 */

/* 
console.log(1 == 1); true
console.log(1 == '1'); true
console.log(1 === '1'); false
console.log(true == 1); true
console.log(true === 1); false */

/* const n1 = 2;
const n2 = '3';
const n3 = n1 * n2; //realiza as coerção para o tipo  'number'
console.log(n3); //resultado '6' */

// const valores = [1, 2, 3, 4];
// const soma = valores.reduce((ac, v) => ac + v);
// console.log(soma);

// const nomes = ['Ana Maria', 'Antonio', 'Rodrigo', 'Alex', 'Cristina'];

// const inicial = nomes.every(n => n.startsWith('A'))
// console.log(inicial);

// const inicial = nomes.map(n => n.charAt(0))
// console.log(inicial);

// const apenasComA = nomes.filter((n) => {
//   return n.startsWith('A')
// })
// console.log(apenasComA);

// const apenasComA = nomes.sort();
// console.log(apenasComA);

// const v2 = [2, 'abc', true]
// console.log(v2)

// for (let i = 0; i < v2.length; i++) {
//   console.log(v2[i]);
// }

// v1 = [];
// console.log(v1.length);
// v1[0] = 3.4;
// console.log(v1.length);
// v1[10]= 2;
// console.log(v1.length);
// console.log(v1[3]);

// const nome = "José"; //Variável constante não pode ser alterada após sua atribuição

//let = seja
// let nome2 = 'José';
// nome2 = 'Antonio';
// nome2 = 2;
// let idade = 19;
// console.log(nome2);




/*
 * variáveis JS var let e const
 */