// FETCH API E AVIOS(JSON).
// fetch para buscar os dados do json.
fetch('pessoas.json')
 .then(resposta => resposta.json()) // aqui ele é convertido para um objeto
 .then(json => carregaElementoNaPagina(json));
//  temos 2 then para pegar a resposta para converter para json e isso retorna uma nova promise, 
// pegamos a nova promise ja convertida e madamos para nossa função.

 const carregaElementoNaPagina = (json) => {
// Aqui criamos uma tabela para 
  const table = document.createElement('table');


  for (let pessoa of json) {
  // criamos o tr 
    const tr = document.createElement('tr');
   
  //  E para cada nome idade e salario criamos uma coluna usando o for

  // Depois disso inserimos essas tds como filhas de tr
    let td = document.createElement('td');
    td.innerHTML = pessoa.nome;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerHTML = pessoa.idade;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerHTML = pessoa.salario;
    tr.appendChild(td);

    // Aqui inserimos a tr como filha de table

    table.appendChild(tr)
// nessa parte buscamos a class resultado e logo em seguida inserimos nela table como filha para ixibir a tabela com os resultados.
    const resultado = document.querySelector('.resultado')

    resultado.appendChild(table)

    console.log(pessoa.nome)
  }
 }

