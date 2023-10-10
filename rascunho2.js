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

let fruta = "abacate"
for(let i = 0; i < fruta.length; i += 1) {
  let novaLet = fruta.replace(/a/g, "o")
  console.log(novaLet)
}
