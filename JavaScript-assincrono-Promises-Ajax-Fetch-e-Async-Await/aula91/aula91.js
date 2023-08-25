axios('pessoas.json')
.then(resposta => carregaElementoNaPagina(resposta.data))

 const carregaElementoNaPagina = (json) => {
  console.log(json)
  const table = document.createElement('table');


  for (let pessoa of json) {

    const tr = document.createElement('tr');
   


  // Depois disso inserimos essas tds como filhas de tr
    let td = document.createElement('td');
    td.innerHTML = pessoa.nome;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerHTML = pessoa.email;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerHTML = pessoa.salario;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerHTML = pessoa.sexo;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerHTML = pessoa.idade;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerHTML = pessoa.estado;
    tr.appendChild(td);
   
    table.appendChild(tr)
    const resultado = document.querySelector('.resultado')
    resultado.appendChild(table)
    console.log(pessoa.nome)
  }
 }