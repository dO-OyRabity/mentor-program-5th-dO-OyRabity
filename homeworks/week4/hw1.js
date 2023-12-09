const simple_request = require('request')

simple_request.get('http://localhost:3000/books?_limit=10', (error, res, body) => {
  try {
    let book_list = JSON.parse(body)
    for (var i = 0; i < book_list.length; i++) {
      console.log(book_list[i].id + '.' + book_list[i].name)
    }
  } catch (err) {
    console.log('解析失敗 :(')
    console.log(err.message)
  }
})

// try {
//   JSON.parse('1: 2') // dead
// } catch (err) {
//   console.log('解析失敗 :(')
//   console.log(err.message)
// }

// console.log('next')
