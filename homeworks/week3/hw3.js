function prime(num) {
  let number_case = []
  for (var i = 1; i <= num; i++) {
    if (num % i === 0) {
      number_case.push(i)
      console.log(number_case)
    }
  }
  if (number_case.length <= 2 && number_case.length != 0) {
    console.log('Prime')
  } else {
    console.log('Composite')
  }
}

// function prime(num){
// let count = 0
// for(var i = 1 ; i<=num ; i++){
// if(num%i===0){
// count+=1
// }
// }
// if(count<=2 && count!=0){
// console.log('Prime')
// }
// else{
// console.log('Composite')
// }
// }
