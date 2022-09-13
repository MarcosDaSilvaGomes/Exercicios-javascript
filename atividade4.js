const valor = ('Digite um valor: ')
let r =0
if (valor %2 ==0){
    r = Math.sqrt(valor)
}else {
    r = Math.pow(valor , 2)
 } document.write(`O resultado é : ${r}`)