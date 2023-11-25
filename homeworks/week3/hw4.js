function re(str) {
  let new_str = str.split('')
  let c_str = []
  let result = ''
  for (var i = new_str.length - 1; i >= 0; i--) {
    c_str.push(new_str[i])
  }
  result = c_str.join('')
  console.log(result)

  if (str === result) {
    console.log('Y')
  } else {
    console.log('Q')
  }
}

re('aaaaa')

function re(str) {
  let new_str = str.split('')
  new_str.reverse()
  let ans = true
  for (var i = new_str.length - 1; i >= Math.floor(str.length / 2) + 1; i--) {
    if (str[i] != new_str[i]) {
      console.log('Q')
      ans = false
      break
    }
  }
  if (ans === true) {
    console.log('Y')
  }
}
