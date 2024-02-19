// Funções recursivas
// teste de aula
function recursiva(max) {
  console.log(max);
  if (max >= 100000) return;
  max += 1;
  recursiva(max)
}

recursiva(0);