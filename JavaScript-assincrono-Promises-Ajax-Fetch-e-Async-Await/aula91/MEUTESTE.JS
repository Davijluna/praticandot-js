fetch('pessoas.json')
  .then(respostas => respostas.json())
  .then(json => minhafuncao(json))

  function minhafuncao(json) {
    for(let xablau of json) {
      console.log(xablau.idade)
    }
  }

  