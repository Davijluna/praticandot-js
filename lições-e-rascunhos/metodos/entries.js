const a = ["a", "b", "c"];

/**
 * TODO: Iterando com índice e elemento
 */

for (const [index, element] of a.entries()) {
  console.log(index, element)
}

/**
 * TODO: Usando um loop for...of
 */

const array = ["a", "b", "c"];
const arrayEntries = array.entries();

for (const element of arrayEntries) {
  console.log(element);
}

/**
 * TODO: Iterando matrizes esparsas
 */

for (const element of [, "a"].entries()) {
  console.log(element);
}

/**
 * TODO: Chamando entradas() em objetos não array
 */

const arrayLike = {
  length: 3,
  0: "a",
  1: "b",
  2: "c",
  3: "d", // ignored by entries() since length is 3
};
for (const entry of Array.prototype.entries.call(arrayLike)) {
  console.log(entry);
}