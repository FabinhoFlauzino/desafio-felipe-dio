/**
 * Criar uma variavel para armazenar o nome e a experiencia(XP) de um herói
 * Depois utilize uma estrutura de decisão para mostrar as mesagens abaixo
 * 
 * Se XP for menor que 1000 = Ferro
 * Se XP for maior que 1001 e menor 2000 = Bronze
 * Se XP for maior que 2001 e menor 5000 = Prata
 * Se XP for maior que 5001 e menor 7000 = Ouro
 * Se XP for maior que 7001 e menor 9000 = Ascendente
 * Se XP for maior que 9001 e menor 10000 = Imortal
 * Se XP for maior ou igual 10001 = Radiante
 * 
 */

let xp = 10001
let heroi = "Uzumaki"


if (xp <= 1000) {
  console.log(`O herói ${heroi} está no nível Ferro`);
} else if(xp > 1001 && xp <= 2000) {
  console.log(`O herói ${heroi} está no nível Bronze`);
} else if(xp > 2001 && xp <= 5000) {
  console.log(`O herói ${heroi} está no nível Prata`);
} else if(xp > 5001 && xp <= 7000) {
  console.log(`O herói ${heroi} está no nível Ouro`);
} else if(xp > 7001 && xp <= 9000) {
  console.log(`O herói ${heroi} está no nível Ascendente`);
} else if(xp > 9001 && xp <= 10000) {
  console.log(`O herói ${heroi} está no nível Imortal`);
} else if(xp >= 10001) {
  console.log(`O herói ${heroi} está no nível Radiante`);
} 

