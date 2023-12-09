## 請以自己的話解釋 API 是什麼

API 是一個類似存放資料的地方，並附上一個使用說明書，告訴你如何使用/利用這些資訊。
API 可能是別人提供給你或你提供給別人，可以選擇性的開放那些資料/功能要公開出去給別人使用。
比如一間餐廳他可能會給你他餐點的資訊，但不會給你餐廳營業額資訊。

## 請找出三個課程沒教的 HTTP status code 並簡單介紹

205 rest contnet : 伺服器有成功處理請求，但東西可以返回給用戶端。
412 precondition failed : 使用者用不是 HTTP 的方式對 HTTP 請求。
511 network authenticate required : 用戶端需要進行身分驗證才能得網路存取權限，但不是透過原來的伺服器阻饒你，而是透過代理的網路攔截程式。

## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

| 說明             | Method | path             | 參數                           | 範例                      |
| ---------------- | ------ | ---------------- | ------------------------------ | ------------------------- |
| 獲取所有餐廳資訊 | GET    | /restraurant     | \_limit:限制回傳資料數量       | /restraurant?\_limit=數量 |
| 獲取單一餐廳資訊 | GET    | /restraurant/:id | 無                             | /restraurant/:id          |
| 新增餐廳         | POST   | /restraurant     | name: 店名 rate:(0-5) website: | 無                        |
| 刪除餐廳         | DELETE | /restraurant/:id | 無                             | 無                        |
| 更改餐廳資訊     | PATCH  | /restraurant/:id | name: 店名 rate:(0-5) website: | 無                        |

### request 範例

https://restraurants-information/v1/restraurant

### response

```json
{
  "id": 1,
  "name": "大牛牛肉麵",
  "rate": 4,
  "website": "http://danou.com.tw/"
}
```
