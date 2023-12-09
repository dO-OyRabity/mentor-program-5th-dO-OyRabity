// console.log(process.argv)
const simple_request = require('request')

const END_POINT = 'http://localhost:3000/books'

function user_enter_what(abc) {
  if (process.argv[2] === 'list') {
    simple_request(`${END_POINT}?_limit=20`, (error, res, body) => {
      if (error) {
        console.log('network error')
        return
      }

      try {
        const books_list = JSON.parse(body)
        console.log(books_list.length)
        for (var i = 0; i < books_list.length; i++) {
          console.log(books_list[i].id + '.' + books_list[i].name)
        }
      } catch (err) {
        console.log('Error')
        console.log(err.message)
      }
    })
  }
  if (process.argv[2] === 'read') {
    simple_request(`${END_POINT}/${process.argv[3]}`, (error, res, body) => {
      if (error) {
        console.log('network error')
        return
      }
      try {
        if (body === '{}') {
          console.log('no book')
          return
        }

        const book = JSON.parse(body)
        console.log(`${book.id}.${book.name}`)
      } catch (err) {
        console.log('Error')
        console.log(err.message)
      }
    })
  }
  if (process.argv[2] === 'delete') {
    simple_request.delete(`${END_POINT}/${process.argv[3]}`, (error, res, body) => {
      if (error) {
        console.log('network error')
        return
      }
      console.log('刪除成功')
    })
  }
  if (process.argv[2] === 'creat') {
    simple_request.post(END_POINT, { form: { name: process.argv[3] } }, (error, res, body) => {
      if (error) {
        console.log('network error')
        return
      }
      console.log(body)
      console.log('新增成功')
      // let books = JSON.parse(body)
      // books.push({ id: book.length + 1, name: process[3] })
    })
  }
  if (process.argv[2] === 'update') {
    simple_request.patch(
      `${END_POINT}/${process.argv[3]}`,
      {
        form: { name: process.argv[4] }
      },
      (error, res, body) => {
        if (error) {
          console.log('network error')
          return
        }
        console.log(body)
        console.log('修改成功')
      }
    )
  }
}
user_enter_what()

// console.log(Object.values({})) // [ 1, 2 ]
