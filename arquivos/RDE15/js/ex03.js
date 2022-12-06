var nome;
var  n1, n2, soma;
nome=prompt("Insira seu nome:");
n1=parseFloat(prompt(nome+", digite um valor:"));
n2=parseFloat(prompt(nome+", digite outro valor:"));
soma=n1+n2;
alert("Resultado da soma: "+soma);
document.write("<h2>"+nome+", o resultado é: "+soma+"</h2>");