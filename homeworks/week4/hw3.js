const simple_request = require('request')

simple_request(`https://restcountries.com/v3.1/name/${process.argv[2]}`, (error, res, body) => {
  if (error) {
    console.log('something goes wrong :(')
    return
  }

  let country_data = []

  try {
    country_data = JSON.parse(body) // [...]
  } catch (error) {
    console.log('解析錯誤 :(')
  }

  // 200 ~ 399
  if (res.statusCode >= 200 && res.statusCode < 400) {
    for (var i = 0; i < country_data.length; i++) {
      let currencies = Object.keys(country_data[i].currencies)
      console.log(`
      國家:${country_data[i].name.official}
      首都:${country_data[i].capital}
      貨幣:${currencies.join(',')}
      國碼:${my_func(country_data[i].idd)}`)
    }
  } else {
    // 400~
    console.log('找不到任何國家資訊')
  }
})

function my_func(data) {
  let result = []
  const head_num = data.root
  const tail = data.suffixes
  for (var i = 0; i < tail.length; i++) {
    let str = ''
    str = head_num + tail[i]
    result.push(str)
  }

  return result
}
