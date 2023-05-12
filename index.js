// const carrinho[]


// const fruta = {
//     nome:"damasco",
//     disponibilidade:true
// }

// function adicionarproduto(fruta) {

// carrinho.push(fruta)
// }

// adicionarproduto(fruta1)
// adicionarproduto(fruta2)
// adicionarproduto(fruta3)

// console.log(carrinho;);

// const numero = Number(prompt("digite um numero"))
// const outronumero = Number(prompt("digite outro numero"))

// if (numero >outronumero) {
//     console.log(`${numero} é maior que ${outronumero}`);

// }else if (outronumero > numero) {
//     console.log(`${outronumero} é maior que ${numero}`);
// }else{
//     console.log(`${outronumero} é igual a ${numero}`);
// }

// const numero = Number(prompt("digite um numero"))

// if (numero % 2 === 0){
//     console.log("o numero é par");
// }else{
//     console.log("o numero é impar")
// }




// let paisOrigem
//  switch (paisOrigem) {
//      case "Brasil":
//          console.log("Brasileiro");
//          break;
//      case "Estados Unidos":
//      console.log("Americano");
//      break
//      case "Italia":
//          console.log("Italiano");
//          break

//  default:
// console.log("Nacionalidade não encontrada");        
//  }

//  const pokemon = prompt("diugite um pokemon")

//  switch(pokemon){
//     case "Bulbasauro"
//     console.log("voce escolheu Bulbasauro");
//     break;

//     case "charmander"
//     console.log("voce escolheu Charmander");
//     break;

//     case "squirtle"
//     console.log("voce escolheu squirtle");
//     break;

//     default
//  }




// const idade = Number(prompt("quantos anos voce tem?"))
// const minimo = 18

//     if(idade > minimo){
//         console.log("voce tem idade suficiente");
//     }else if(idade < minimo){
//             console.log("sinto muito voce não tem idade suficiente");
//         }else{
//             console.log("voce tem idade suficiente");
//         }

// function matricula(concluido, idade, faculdade) {
//     if (concluido === "sim" && idade >= 18 && faculdade === "não"){
//         console.log("matricula realizada");
// } else

// const concluido = prompt("voce ja concluiu o ensino medio? (sim/não")
// const idade = prompt("voce tem quantos anos?")




// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

//o codigo analiza se o numero é par ou impar
//o codigo so imprimira "passou no teste" se for digitado um numero par no prompt
//so sera impresso  "Não passou no teste" caso seja digitado um numero impar




// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

//voce escolhe uma fruta e sera impresso o valor da fruta no console
//"o preço da fruta "maça" é ,R$2.25"
//não aconteceria nada




// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

//a primeira linha serve para abrir uma barra de resposta no promopt, pedindo um numero
//se for digitado -10 não aparecera nada no console
//sera enviado uma menssagem informando que ista ainda não foi definido



// const pergunta = Number(prompt("qual sua idade?"))

// if (pergunta >= 18){
//     console.log("voce pode dirigir");
// }else{
//     console.log("sinto muito");
// }




// const pergunta = prompt("por favor digite M (matutino) ou V (Vespertino) ou N (Noturno).")

// if (pergunta === "m"){
//     console.log("Bom Dia!");
// }else if (pergunta === "v"){
//     console.log("Boa Tarde");
// }else if (pergunta === "n"){
//     console.log("Boa Noite");
// }else {
//     console.log("por favor digite  m,v ou n ");
// }

// const turno = prompt(`Informe se o seu turno é matutino (escreva a letra "M"),  vespertino (Digite a letra "V") ou noturno(digite a letra "N"). `)

// switch (turno.toLowerCase()) {
//     case "m":
//         console.log(`Bom dia!`);
//         break;
//     case "v":
//     console.log(`Boa tarde!`);
//     break
//     case "n":
//         console.log(`Boa noite!`);
//         break

// default:
// console.log(`Informe o seu turno por gentileza(Utilize as letras de cada turno "M", "V" e "N" `);        
// }




const pergunta1 = prompt("qual genero de filme quer assistir?")
const pergunta2 = Number(prompt("qua faixa de preço?"))

if (pergunta1 === "fantasia" && pergunta2 < 15){
    console.log("Bom filme");
}else{
    console.log("Escolha outro filme :(");
}