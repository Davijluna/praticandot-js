// FUNÇÕES GERADORAS

function* geradora1() {
  yield 'valor 1';

  yield 'valor 2';

  yield 'valor 3';
}

const g1 = geradora1();

for (let valor of g1) {
  console.log(valor);
}

// console.log(g1.next().value)
// console.log(g1.next().value)
// console.log(g1.next())
// console.log(g1.next())


function* gerador2() {
  let i = 0;

  while(true) {
    yield i;
     i++;
  }
}

const g2 = gerador2();
  console.log(g2.next().value)
  console.log(g2.next().value)
  console.log(g2.next().value)
  console.log(g2.next().value)
  console.log(g2.next().value)
  console.log(g2.next().value)
  console.log(g2.next().value)
  console.log(g2.next().value)