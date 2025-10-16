---
title: "Cấu trúc điều khiển và Hàm trong JavaScript"
date: 2025-09-24
draft: false
description: "Khám phá cách JavaScript xử lý logic với if, else, switch, vòng lặp, và cách định nghĩa hàm (function, arrow function)."
tags: ["javascript", "beginner", "hàm", "vòng lặp", "điều khiển"]
category: "JavaScript"
author: "Đào Nguyễn Duy Khoa"
weight: 3
---------

## 1. Mở đầu

Trong bài 1, bạn đã làm quen với **biến, kiểu dữ liệu và toán tử**. Nhưng chỉ có dữ liệu thôi thì chưa đủ – chúng ta cần **xử lý logic** để chương trình có thể đưa ra quyết định.

Đây là lúc các cấu trúc điều khiển (if, switch, vòng lặp) và **hàm** xuất hiện.

> Mình còn nhớ hồi đầu học JS, mình viết `if (x = 5)` thay vì `if (x == 5)` 😅. Kết quả là chương trình chạy sai hoàn toàn mà mình không hiểu tại sao. Sau đó mới nhận ra mình đã gán giá trị thay vì so sánh. Bạn có bao giờ nhầm như thế chưa?

![Sơ đồ cấu trúc điều khiển trong JavaScript](/images/js-control-flow.png)


## 2. Cấu trúc rẽ nhánh

### 2.1 If – else

```js
let age = 18;
if (age >= 18) {
  console.log("Bạn đã đủ 18 tuổi.");
} else {
  console.log("Bạn chưa đủ 18 tuổi.");
}
```



### 2.2 If – else if – else

```js
let score = 85;
if (score >= 90) {
  console.log("Xuất sắc");
} else if (score >= 75) {
  console.log("Khá");
} else {
  console.log("Trung bình");
}
```



### 2.3 Switch-case

```js
let day = 3;
switch (day) {
  case 1: console.log("Thứ Hai"); break;
  case 2: console.log("Thứ Ba"); break;
  case 3: console.log("Thứ Tư"); break;
  default: console.log("Ngày khác");
}
```



## 3. Vòng lặp

### 3.1 For

```js
for (let i = 1; i <= 5; i++) {
  console.log("i = " + i);
}
```



### 3.2 While

```js
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
```



### 3.3 Do-while

```js
let j = 1;
do {
  console.log(j);
  j++;
} while (j <= 5);
```



### 3.4 For…of

```js
let arr = ["Táo", "Cam", "Chuối"];
for (let fruit of arr) {
  console.log(fruit);
}
```



### 3.5 For…in

```js
let person = {name: "Khoa", age: 21};
for (let key in person) {
  console.log(key + ": " + person[key]);
}
```



## 4. Hàm trong JavaScript

### 4.1 Hàm cơ bản

```js
function greet(name) {
  return "Xin chào, " + name + "!";
}

console.log(greet("Khoa"));
```



### 4.2 Biểu thức hàm (Function Expression)

```js
const square = function(x) {
  return x * x;
};
console.log(square(5)); // 25
```



### 4.3 Arrow function (ES6)

```js
const add = (a, b) => a + b;
console.log(add(3, 4)); // 7
```



### 4.4 Tham số mặc định

```js
function greet(name = "bạn") {
  console.log("Xin chào, " + name);
}
greet();        // Xin chào, bạn
greet("Khoa");  // Xin chào, Khoa
```



## 5. Ví dụ tổng hợp: Tính tổng số nguyên tố

```js
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function sumPrimes(limit) {
  let sum = 0;
  for (let i = 2; i <= limit; i++) {
    if (isPrime(i)) sum += i;
  }
  return sum;
}

console.log(sumPrimes(20)); // 77
```



## 6. Lỗi thường gặp

| Lỗi                    | Nguyên nhân           | Cách khắc phục                |
| ---------------------- | --------------------- | ----------------------------- |
| `=` thay cho `==`      | Nhầm gán với so sánh  | Dùng `==` hoặc `===`          |
| Vòng lặp vô hạn        | Quên tăng biến đếm    | Kiểm tra điều kiện lặp        |
| Hàm trả về `undefined` | Quên `return`         | Thêm `return` trong hàm       |
| `NaN` khi tính toán    | Dữ liệu không phải số | Kiểm tra kiểu dữ liệu đầu vào |



## 7. Bài tập nhỏ

1. Viết chương trình nhập số và in ra “Chẵn” hoặc “Lẻ”.
```html
<!DOCTYPE html>
<html>
  <body>
    <h3>Kiểm tra số chẵn/lẻ</h3>
    <input id="num" type="number" placeholder="Nhập số">
    <button onclick="check()">Kiểm tra</button>
    <p id="result"></p>

    <script>
      function check() {
        let n = Number(document.getElementById("num").value);
        if (n % 2 === 0)
          document.getElementById("result").innerText = n + " là số chẵn.";
        else
          document.getElementById("result").innerText = n + " là số lẻ.";
      }
    </script>
  </body>
</html>
```
2. Viết hàm tính giai thừa của một số.
```html
<!DOCTYPE html>
<html>
  <body>
    <h3>Tính giai thừa</h3>
    <input id="n" type="number" placeholder="Nhập số">
    <button onclick="calcFactorial()">Tính</button>
    <p id="result"></p>

    <script>
      function factorial(n) {
        if (n === 0 || n === 1) return 1;
        let result = 1;
        for (let i = 2; i <= n; i++) {
          result *= i;
        }
        return result;
      }

      function calcFactorial() {
        let n = Number(document.getElementById("n").value);
        document.getElementById("result").innerText =
          n + "! = " + factorial(n);
      }
    </script>
  </body>
</html>
```
3. Viết hàm tính tổng các số lẻ từ 1 đến N.
```html
<!DOCTYPE html>
<html>
  <body>
    <h3>Tính tổng số lẻ từ 1 đến N</h3>
    <input id="limit" type="number" placeholder="Nhập N">
    <button onclick="calcSumOdd()">Tính tổng</button>
    <p id="result"></p>

    <script>
      function sumOdd(n) {
        let sum = 0;
        for (let i = 1; i <= n; i++) {
          if (i % 2 !== 0) sum += i;
        }
        return sum;
      }

      function calcSumOdd() {
        let n = Number(document.getElementById("limit").value);
        document.getElementById("result").innerText =
          "Tổng các số lẻ từ 1 đến " + n + " là " + sumOdd(n);
      }
    </script>
  </body>
</html>
```
4. Viết hàm kiểm tra chuỗi có phải palindrome hay không.
```html
<!DOCTYPE html>
<html>
  <body>
    <h3>Kiểm tra chuỗi Palindrome</h3>
    <input id="str" placeholder="Nhập chuỗi">
    <button onclick="checkPalindrome()">Kiểm tra</button>
    <p id="result"></p>

    <script>
      function isPalindrome(s) {
        s = s.toLowerCase().replace(/\s/g, "");
        let reversed = s.split("").reverse().join("");
        return s === reversed;
      }

      function checkPalindrome() {
        let s = document.getElementById("str").value;
        if (isPalindrome(s))
          document.getElementById("result").innerText = `"${s}" là Palindrome.`;
        else
          document.getElementById("result").innerText = `"${s}" không phải Palindrome.`;
      }
    </script>
  </body>
</html>
```



## 8. Tổng kết

Trong bài này, bạn đã học:

* Các cấu trúc điều khiển: if, switch.
* Các vòng lặp: for, while, do-while, for…of, for…in.
* Hàm: function, arrow function, tham số mặc định.
* Ví dụ ứng dụng: tính tổng số nguyên tố.

👉 Đây là bước giúp bạn viết **logic phức tạp hơn trong JavaScript**.

Ở **bài 3**, chúng ta sẽ học:
**“Đối tượng, Mảng và OOP trong JavaScript”** – một phần cực quan trọng để làm việc với dữ liệu thực tế.



*Hẹn gặp bạn ở Bài 3 nhé!* 🚀