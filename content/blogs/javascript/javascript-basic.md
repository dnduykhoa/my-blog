---
title: "JavaScript Cơ Bản – Nền tảng ngôn ngữ web"
date: 2025-09-22
draft: false
description: "Giới thiệu JavaScript, cách chạy chương trình đầu tiên, cú pháp cơ bản, biến, kiểu dữ liệu và toán tử."
tags: ["javascript", "beginner", "cơ bản"]
category: "JavaScript"
author: "Đào Nguyễn Duy Khoa"
weight: 2
---------

## 1. Mở đầu

Nếu HTML là phần “xác” của một trang web, CSS là phần “trang điểm”, thì JavaScript chính là **linh hồn** giúp trang web sống động và tương tác.

> Lần đầu mình thử viết JS, mình thêm `document.getElementById("demo").innerText = "Hello JS";` mà chẳng thấy gì thay đổi. Sau một hồi loay hoay, mình mới phát hiện ra mình… gõ sai `id` 😅. Đây là “cú ngã đầu đời” giúp mình nhớ rằng kiểm tra lại code cẩn thận là rất quan trọng. Bạn có từng bị như vậy chưa?

![Ví dụ chạy JavaScript cơ bản trong trình duyệt](/images/js-basic.png)


## 2. JavaScript chạy ở đâu?

Bạn có thể chạy JavaScript theo 3 cách:

1. **Inline** – trong thẻ HTML:

```html
<button onclick="alert('Xin chào!')">Bấm tôi</button>
```

2. **Internal** – trong thẻ `<script>`:

```html
<script>
  console.log("Hello JavaScript!");
</script>
```

3. **External** – file `.js` riêng:

```html
<script src="main.js"></script>
```

👉 Cách 3 là phổ biến nhất vì dễ quản lý code.



## 3. Biến trong JavaScript

### 3.1 Khai báo biến

* `var`: cũ, ít dùng.
* `let`: biến có thể thay đổi.
* `const`: hằng số, không thay đổi.

```js
let age = 21;
const name = "Khoa";
```



### 3.2 Kiểu dữ liệu cơ bản

* **Number**: 10, 3.14
* **String**: `"Hello"`
* **Boolean**: `true`, `false`
* **Null**: rỗng
* **Undefined**: chưa được gán
* **Object**: `{ key: value }`
* **Array**: `[1, 2, 3]`

```js
let x = 10;         // number
let s = "Xin chào"; // string
let arr = [1, 2, 3];
let obj = { name: "Khoa", age: 21 };
```


## 4. Toán tử trong JavaScript

| Nhóm    | Ví dụ               | Ý nghĩa                        |    |              |
| ------- | ------------------- | ------------------------------ | -- | ------------ |
| Số học  | `+ - * / %`         | Cộng, trừ, nhân, chia, chia dư |    |              |
| So sánh | `== != === !== > <` | So sánh giá trị & kiểu         |    |              |
| Logic   | `&&                 |                                | !` | AND, OR, NOT |
| Gán     | `= += -= *=`        | Gán giá trị                    |    |              |

```js
let a = 5, b = 3;
console.log(a + b);  // 8
console.log(a > b);  // true
console.log(a == "5");  // true (so sánh lỏng)
console.log(a === "5"); // false (so sánh chặt)
```


## 5. In ra kết quả

* `alert("Xin chào");` → hiển thị hộp thoại.
* `console.log("Debug");` → in ra console.
* `document.write("Hello");` → ghi vào trang web.

```js
console.log("Xin chào JavaScript!");
```


## 6. Ví dụ: Tính tuổi từ năm sinh

```html
<!DOCTYPE html>
<html>
  <body>
    <h2>Tính tuổi</h2>
    <input id="year" placeholder="Nhập năm sinh">
    <button onclick="calcAge()">Tính tuổi</button>
    <p id="result"></p>

    <script>
      function calcAge() {
        let year = document.getElementById("year").value;
        let age = 2025 - year;
        document.getElementById("result").innerText = "Tuổi của bạn: " + age;
      }
    </script>
  </body>
</html>
```

👉 Khi nhập năm sinh và bấm nút, JS sẽ tính tuổi và hiển thị ra.



## 7. Lỗi thường gặp

| Lỗi                       | Nguyên nhân                             | Cách khắc phục                  |
| ------------------------- | --------------------------------------- | ------------------------------- |
| `Uncaught ReferenceError` | Gọi biến chưa khai báo                  | Dùng `let/const` khai báo trước |
| Sai `id`                  | HTML không có id tương ứng              | Kiểm tra lại DOM                |
| Quên dấu `;`              | JavaScript có thể chạy nhưng dễ gây bug | Luôn thêm `;` cuối dòng         |
| So sánh nhầm              | Dùng `==` thay vì `===`                 | Dùng `===` để so sánh chặt      |



## 8. Bài tập nhỏ

1. Viết chương trình tính tổng 2 số nhập từ input.
```html
<!DOCTYPE html>
<html>
  <body>
    <h3>Tính tổng hai số</h3>
    <input id="a" type="number" placeholder="Số thứ nhất">
    <input id="b" type="number" placeholder="Số thứ hai">
    <button onclick="sum()">Tính tổng</button>
    <p id="result"></p>

    <script>
      function sum() {
        let a = Number(document.getElementById("a").value);
        let b = Number(document.getElementById("b").value);
        document.getElementById("result").innerText = "Tổng = " + (a + b);
      }
    </script>
  </body>
</html>
```
2. Viết chương trình in ra số chẵn từ 1 đến 20.
```html
<!DOCTYPE html>
<html>
  <body>
    <h3>Số chẵn từ 1 đến 20</h3>
    <button onclick="showEven()">Hiển thị</button>
    <p id="even"></p>

    <script>
      function showEven() {
        let result = "";
        for (let i = 1; i <= 20; i++) {
          if (i % 2 === 0) result += i + " ";
        }
        document.getElementById("even").innerText = result;
      }
    </script>
  </body>
</html>
```
3. Tạo nút bấm, khi bấm sẽ hiển thị “Hello JavaScript!”.
```html
<!DOCTYPE html>
<html>
  <body>
    <h3>Chào JavaScript</h3>
    <button onclick="sayHello()">Bấm tôi</button>
    <p id="msg"></p>

    <script>
      function sayHello() {
        document.getElementById("msg").innerText = "Hello JavaScript!";
      }
    </script>
  </body>
</html>
```



## 9. Tổng kết

Trong bài này, bạn đã học:

* Cách nhúng JavaScript vào web.
* Biến (`let`, `const`), kiểu dữ liệu cơ bản.
* Các toán tử phổ biến.
* Cách in kết quả ra màn hình.
* Ví dụ ứng dụng nhỏ: tính tuổi.

👉 Đây là nền tảng để học tiếp **Bài 2: Cấu trúc điều khiển và Hàm trong JavaScript** – nơi bạn sẽ biết cách viết logic điều kiện, vòng lặp và định nghĩa hàm.



*Hẹn gặp bạn ở bài 2 nhé!* 🚀