const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json')
const escreve = require('./modules/escrever')
const ler = require('./modules/ler');

// const pessoas = [
//   {nome: 'João'},
//   {nome: 'Davi'},
//   {nome: 'Maria'},
//   {nome: 'Mara'},
// ];

// // Todo: covertendo para json:

// const json = JSON.stringify(pessoas, '', 2);
// escreve(caminhoArquivo, json);

async function leArquivo(caminho) {
 const dados = await ler(caminho);
 renderizaDados(dados);
//  return dados;
}

function renderizaDados(dados) {
  // console.log(dados)
  // TODO: desconvertendo de JSON para Objeto 
   dados = JSON.parse(dados);
   dados.forEach(valor => {
    console.log(valor.nome)
   });
};

leArquivo(caminhoArquivo)

// const dadosArquivo = leArquivo(caminhoArquivo).then(dados => console.log(dados));
// // console.log(dadosArquivo)