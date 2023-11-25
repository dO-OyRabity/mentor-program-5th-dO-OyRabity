function solve(lines) {
  let test1 = lines.join(' ')
  let test2 = test1.split(' ')
  let count = Number(test2[0])
  // console.log(test2.length)
  // console.log(count)
  // console.log(test2[1])
  for (var i = 1; i <= count * 3; i += 3) {
    if (test2[i + 2] === '1') {
      if (test2[i].length > test2[i + 1].length) {
        console.log('A')
      }
      if (test2[i].length < test2[i + 1].length) {
        console.log('B')
      }
      if (test2[i].length === test2[i + 1].length) {
        let number01 = true
        for (var v = 0; v <= test2[i].length - 1; v++) {
          if (test2[i][v] > test2[i + 1][v]) {
            console.log('A')
            number01 = false
            break
          }
          if (test2[i][v] < test2[i + 1][v]) {
            console.log('B')
            number01 = false
            break
          }
        }
        if (number01 === true) {
          console.log('DRAW')
        }
      }
    }
    if (test2[i + 2] === '-1') {
      if (test2[i].length < test2[i + 1].length) {
        console.log('A')
      }
      if (test2[i].length > test2[i + 1].length) {
        console.log('B')
      }
      if (test2[i].length === test2[i + 1].length) {
        let number = true
        for (var a = 0; a <= test2[i].length - 1; a++) {
          if (test2[i][a] < test2[i + 1][a]) {
            console.log('A')
            number = false
            break
          }
          if (test2[i][a] > test2[i + 1][a]) {
            console.log('B')
            number = false
            break
          }
        }
        if (number === true) {
          console.log('DRAW')
        }
      }
    }
  }
}
