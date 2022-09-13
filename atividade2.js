
const A = prompt('Escreva primeiro valor: ');
const A1= Number (A);

const B = prompt('Escreva segundo valor: ');
const B1 = Number(B);

const C = prompt ('Escreva terceiro valor: ');
const  C1 = Number (C);

if ( A < B && B < C){
  document.write(`Ordem crescente : ${A} ${B} ${C}`)
} else if (A < C && C < B)
{
    document.write(`Ordem crescente : ${A}  ${C} ${B}`)
}else if (B < A && A < C) {
    document.write(`Ordem crescente : ${B} ${A} ${C}`)
    
} else if (B<C && C<A ){
        document.write(`Ordem crescente : ${B} ${C} ${A}`)}
   
        else if (C < A && A < B){    
    document.write(`Ordem crescente : ${C} ${B} ${A}`)}
 
    else if (C<B && B< A){
    document.write(`Ordem crescente : ${C} ${A} ${B}`)}
    