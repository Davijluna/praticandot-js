const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json')
const escreve = require('./modules/escrever')


const pessoas = [
  {nome: 'João'},
  {nome: 'Davi'},
  {nome: 'Maria'},
  {nome: 'Mara'},
];

// Todo: covertendo para json:

const json = JSON.stringify(pessoas, '', 2);
escreve(caminhoArquivo, json);