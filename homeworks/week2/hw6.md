``` js
function isValid(arr) {
  for(var i=0; i<arr.length; i++) {
    if (arr[i] <= 0) return 'invalid'
  }
  for(var i=2; i<arr.length; i++) {
    if (arr[i] !== arr[i-1] + arr[i-2]) return 'invalid'
  }
  return 'valid'
}

isValid([3, 5, 8, 13, 22, 35])
```

## 執行流程

1. ..一個function,用來找前兩個數加起來有沒有等於自身。
2. 迴圈從0開始 i<陣列長度(6) 然後i++
3. if i = 0 > arr[0]=3 , 3 not<= 0

