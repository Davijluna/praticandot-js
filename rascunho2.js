// function getRandom(min, max) {
//   return Math.random() * (max - min) + min;
// } 


// console.log(getRandom(1, 15))

// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// console.log(getRandomIntInclusive(1, 15))

// const num = Math.floor(-45.01)
// console.log(num)

// let fruta = "abacate"
// for(let i = 0; i < fruta.length; i += 1) {
//   let novaLet = fruta.replace(/a/g, "o")
//   console.log(novaLet)
// }

// const str = "Twas the night before XmAs...";
// const newstr = str.replace(/xmas/i, "Substitui olha rs!!!!");
// console.log(newstr, '@@@@@@@');

const number = [1, 4, 7, 0, 9];
const recebe = '';
for (let i = 0; i < number.length; i +=1) {
  recebe += recebe.push(number[i]);
  console.log(recebe)
}
