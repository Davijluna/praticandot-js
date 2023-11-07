let arrayDeObjetos = [
  {
    id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad',
    firstName: 'Sharonda',
    lastName: 'Spry',
    managers: [
      '0e7b460e-acf4-4e17-bcb3-ee472265db83',
      'fdb2543b-5662-46a7-badc-93d960fdc0a8'
    ],
    responsibleFor: [
      '533bebf3-6bbe-41d8-9cdf-46f7d13b62ae',
      '89be95b3-47e4-4c5b-b687-1fabf2afa274'
    ]
  }
]

for (const object of arrayDeObjetos) {
  console.log(object.managers.length)
}