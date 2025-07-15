/* 
Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"
*/

let nomeDoHeroi = "Comandate";
let xpQuantidade = 2000;

let nivelDoHeroi;

if (xpQuantidade < 1000) {
  nivelDoHeroi = "Ferro ⚒️";
} else if (xpQuantidade >= 1001 && xpQuantidade <= 2000) {
  nivelDoHeroi = "Bronze 🥉";
} else if (xpQuantidade >= 2001 && xpQuantidade <= 5000) {
  nivelDoHeroi = "Prata 🥈";
} else if (xpQuantidade >= 5001 && xpQuantidade <= 7000) {
  nivelDoHeroi = "Ouro 🥇";
} else if (xpQuantidade >= 7001 && xpQuantidade <= 8000) {
  nivelDoHeroi = "Platina 🏆";
} else if (xpQuantidade >= 8001 && xpQuantidade <= 9000) {
  nivelDoHeroi = "Ascendente ⭐";
} else if (xpQuantidade >= 9001 && xpQuantidade <= 10000) {
  nivelDoHeroi = "imortal 🤖";
} else if (xpQuantidade >= 10001) {
  nivelDoHeroi = "Radiante 🌟";
}

console.log(
  `O herói de nome: ${nomeDoHeroi}, está no nível de ${nivelDoHeroi}.`
);
