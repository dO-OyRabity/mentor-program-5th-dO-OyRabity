function capitalize(str) {
  if (str.charCodeAt(0) >= 65 && str.charCodeAt(0) <= 90) {
    return str
  } else if (str.charCodeAt(0) >= 97 && str.charCodeAt(0) <= 122) {
    var head = String.fromCharCode(str.charCodeAt(0) - 32)
    for (var i = 1; i <= str.length - 1; i++) {
      head += str[i]
    }
    return head
  } else {
    return str
  }
}

console.log(capitalize('hello'))

//65  90 big
//97  122 small
