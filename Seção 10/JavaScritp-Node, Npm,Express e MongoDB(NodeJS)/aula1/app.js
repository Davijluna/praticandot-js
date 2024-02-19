// ! importando com classes.

const path = require('path');
const {Pessoa} = require('./mod1');

const p1 = new Pessoa('Luiz');
console.log(p1);

// * Importando o modulo do aruqivo mod1.
// * 1 podemos usar o caminho absoluto que é o caminho completo do arquivo.
// * 2 ou o caminho relativo que é da pasta que estou até o arquivo.
// const mod1 = require('./mod1');
// console.log(mod1)