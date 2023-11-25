function star_factory(num) {
  let str = ''
  for (let i = 1; i <= num; i++) {
    str += '*'
  }
  return str
}

function make_pyramid(num) {
  for (var i = 1; i <= num; i++) {
    console.log(star_factory(i))
  }
}
