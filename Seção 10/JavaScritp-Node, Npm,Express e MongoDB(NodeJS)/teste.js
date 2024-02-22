function timeConversion(s) {
  let strinSlice = s.slice(0, 8);
  const hoursSplit = strinSlice.replace(/[^0-9]/g, '');
  let number0 = hoursSplit[0];
  let number1 = hoursSplit[1];
  let joinNumber = number0.concat(number1);
  let numberPM = Number(joinNumber) + 12
  let concatNumber = s.slice(2, 8)
  
  if(s.slice(-2) === "PM" && joinNumber < 12) {
      console.log(numberPM + concatNumber)
  } if(s.slice(-2) === "AM" && joinNumber == 12) {
      console.log("00" + concatNumber)
  }else {
      console.log(hoursSplit[0]+hoursSplit[1]+concatNumber)
  }

}

const s = "06:40:03AM";
// valor esperado > 06:40:03

timeConversion(s);
