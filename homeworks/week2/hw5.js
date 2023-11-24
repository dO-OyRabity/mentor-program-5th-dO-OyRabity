function join(arr, concatStr) {
  var result = ''
  for (var i = 0; i <= arr.length * 2 - 2; i++) {
    if (i % 2 === 0) {
      result += arr[i / 2]
      console.log(i)
    } else {
      result += concatStr
    }
  }
  return result
}

function repeat(str, times) {
  var result = ''
  for (var i = 1; i <= times; i++) {
    result += str
  }
  return result
}

console.log(join(['a', 'c', 'd', 'e', 'f', 'g'], '!'))
console.log(repeat('a', 5))
