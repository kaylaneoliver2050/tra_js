//1° questão 

let valor = 15     

if (valor == 10){         
    document.write("o valor é igual a 10!");
}else if (valor >= 10){
    document.write("o valor é maior que 10!");
}else if (valor <= 10 && valor >= 0){
    document.write("o valor é menor que 10!");
}else {
    document.write("valor inválido")
}

//2° questão

let p = 8           
let s = 10          
let t = 5           
let q = 7           
let r = p+s+t+q     
let m = r/4        

document.write(
   
    "primeira nota : "+p+
    "<br>segunda nota : "+s+
    "<br>terceira nota : "+t+
    "<br>quarta nota : "+q+
    "<br>somatoria : "+r+
    "<br>média : "+m+
    "<br><br>resultado : " );

if (m >= 9 && m <=10){        

    document.write(
        "A<br>"+
        "APROVADO!");
}else if (m >= 6 && m <= 9){  

    document.write(
        "B<br>"+
        "APROVADO!");
}else if (m >= 2 && m <= 6){  

    document.write(
        "C<br>"+
        "RECUPERAÇÃO!");
}else if (m >= 0 && m <= 6){   

    document.write(
        "D<br>"+
        "REPROVADO!");
}else {

    document.write(
        "valor inválido");
}

//3° questão

let empregado = [1, 2, 3, 4]
let anoNasc = 1977;
let anoAtual = 2022;
let idade = anoAtual - anoNasc;
let tempTrabalho = idade - 50;
if(idade >=50 && tempTrabalho >= 30){
    document.write("<br>Empregado: "+ empregado[3] + "<br>Idade: " + idade + " anos. <br> Ingressou na empresa á: " + tempTrabalho + " anos <br>Requer aposentadoria")
    

}else if (idade >= 65 || tempTrabalho >= 30){
    document.write("<br>Empregado: "+ empregado[2] + "<br>Idade: " + idade + " anos. <br> Ingressou na empresa á: " + tempTrabalho + " anos <br>Requer aposentadoria")
}

else {
    document.write("<br>Empregado: "+ empregado[1] + "<br>Idade:"  + idade + " anos. <br> Ingressou na empresa á: " + tempTrabalho + " anos <br>Não requer aposentadoria")
}
//4° questão


let nomeProduto = "macarrão";
    let quantidade = 5;
    let preço = 5.00;
    let totalpreço = quantidade * preço;
    let descontos = [2, 3, 5]

    if (quantidade <= 5) {
        let porcent = (descontos[0] * totalpreço) / 100;
        let desc = totalpreço - porcent;

        document.write(nomeProduto + "<br>Quantidade: " + quantidade + "<br>Preço: " + preço + " R$<br>Preço Total: " + totalpreço + " R$ <br>Desconto a ser aplicado: " + descontos[0] + "% <br>Preço Com Desconto: " + desc + "R$")

    } else if (quantidade > 5 && quantidade <= 10) {

        let porcent = (descontos[1] * totalpreço) / 100;
        let desc = totalpreço - porcent;

        document.write(nomeProduto + "<br>Quantidade: " + quantidade + "<br>Preço: " + preço + " R$<br>Preço Total: " + totalpreço + "<br>Desconto a ser aplicado: " + descontos[1] + "% <br>Preço Com Desconto: " + desc)


    } else if (quantidade > 10) {
        let porcent = (descontos[2] * totalpreço) / 100;
        let desc = totalpreço - porcent;

        document.write(nomeProduto + "<br>Quantidade: " + quantidade + "<br>Preço: " + preço + " R$<br>Preço Total: " + totalpreço + "<br>Desconto a ser aplicado: " + descontos[2] + "% <br>Preço Com Desconto: " + desc)

    }
    


//5º questão
    let codigo= 6;

         if (codigo == 1) {
            document.write("<br>Código selecionado: " + codigo + "<br>Pão ")
        } else if (codigo >= 2 && codigo <= 4) {
            document.write("<br>Código selecionado: " + codigo + "<br>Bolacha")
        } else if (codigo >= 5 && codigo <= 6) {
            document.write("<br>Código selecionado: " + codigo + "<br>Recheado De Chocolate")
        } else if (codigo == 7) {
            document.write("<br>Código selecionado: " + codigo + "<br>Bis")
        } else if (codigo >= 8 && codigo <= 15) {
            document.write("<br>Código selecionado: " + codigo + "cFatias Amantegadas")
        } else {
            document.write("Código Inválido")
     
        }

//6º Questão

let number = 104
let quant = 4

switch (number) {
    case 100:
        let cQuente = quant * 1.70
        document.write("<br> preço  do Cachorro Quente simples é " + cQuente + " R$")
        break;
    case 101:
        let bSimples = quant * 2.30
        document.write("<br> preço do Bauru Simples é " + bauSimples + " R$")
        break;

    case 102:
        let bComOvo = quant * 2.60
        document.write("<br> preço do Bauru Com Ovo é " + bauComOvo + " R$")
        break;

    case 103:
        let hamb = quant * 2.40
        document.write("<br> preço do Hamburguer é " + hamb + " R$")
        break;

    case 104:
        let cheeseb = quant * 2.50
        document.write("<br> preço do Cheeseburguer é " + cheeseb + " R$")
        break;

    case 105:
        let refri = quant * 1.00
        document.write("<br> preço do Refrigerante é " + refri + " R$")
        break;
}

//7º Questão
  var num = 104
  while (num <= 110){
      document.write(num)
      document.write(", ")
      num++
  }

//8º Questão 
 let num = 15
 for (let n = 1; n <= num && num >= 0; n++) {
     document.write(n + ", ");

 }

//9º Questão
tabuada ( ) ;

     function  tabuada ( )  {

       for  ( var  contagem  =  1  ;  contagem  <=  10  ;  contagem  ++ )

         documento . escreva ( " 5 x "  +  contagem  +  " = "  +  (  10  *  contagem )  +  "<br/>"  ) ;
    }


//10º Questão
 document.write("Crescente: ");
 for (let number = 1; number <= 10; number++) {
     document.write(number +", ");
     

 }
 document.write("<br>");
 document.write("Decrescente: ");
 for (let number2 = 10; number2 >= 1; number2--) {
     document.write(number2 + ", ")
 }
