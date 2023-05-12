let number = 10

if(number % 3 == 0 && number % 5 == 0) {
  console.log('fizzBuzz')
  return 'fizzBuzz'
}
if(number % 5 == 0) {
  console.log('fizz')
  return 'fizz'
}
if(number % 3 == 0) {
  console.log('buzz')
  return 'buzz'
}

