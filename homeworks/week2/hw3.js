function reverse(str) {
  var result = ''
  var count = str.length
  for(var i = count-1 ; i>=0 ; i--){
    result+=str[i]
  }
  console.log(result)
}

reverse('hello');
