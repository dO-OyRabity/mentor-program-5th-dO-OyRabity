function judgement(num1, num) {
  for (var i = num1; i <= num; i++) {
    let number_case = []
    let count = 0
    let num3 = i
    while (num3 >= 1) {
      number_case.push(num3 % 10)
      num3 /= 10
      num3 = Math.floor(num3)
      count += 1
    }
    number_case.push(count)
    number_case.reverse()
    let result = 0
    for (var v = 1; v < number_case.length; v++) {
      result += Math.pow(Number(number_case[v]), Number(number_case[0]))
    }
    if (result === i) {
      console.log(result)
    }
  }
}
