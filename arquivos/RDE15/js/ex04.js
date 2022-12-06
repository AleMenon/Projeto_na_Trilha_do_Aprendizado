var nome;
var  n1, n2, soma;
nome=prompt("Insira seu nome:");
n1=parseFloat(prompt(nome+", digite um valor:"));
if(n1==0){
    n1=parseFloat(prompt(nome+", digite novamente o valor:"));
}
n2=parseFloat(prompt(nome+", digite outro valor:"));
if(n2==0){
    n2=parseFloat(prompt(nome+", digite novamente o valor:"));
}
soma=n1/n2;
if(soma==0){
    alert("Divisões por zero não existem.");
}
else{
alert("Resultado da divisão: "+soma);
document.write("<h2>"+nome+", o resultado é: "+soma+"</h2>");
}