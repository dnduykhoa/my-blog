---

title: "DOM & Tương tác với Web trong JavaScript"
date: 2025-10-02
draft: false
description: "Tìm hiểu cách JavaScript thao tác với HTML qua DOM, thay đổi nội dung, style và xử lý sự kiện để tạo ứng dụng web sống động."
tags: ["javascript", "dom", "event", "web"]
category: "JavaScript"
author: "Đào Nguyễn Duy Khoa"
weight: 5
---------

## 1. Mở đầu

Bạn đã biết **Object, Array, OOP** trong JavaScript. Nhưng JS sẽ chẳng có ý nghĩa gì nếu nó không **tương tác với HTML/CSS** để làm web sống động.

👉 Đó chính là **DOM (Document Object Model)** – cây mô hình đại diện cho toàn bộ trang web.

> Mình còn nhớ lần đầu viết code `document.getElementById("title").innerText = "Xin chào JS";` và thấy ngay dòng chữ trên web thay đổi. Mình cảm thấy “wow, mình vừa điều khiển được cả website bằng code của mình!”. Bạn có nhớ lần đầu tiên bạn thấy web “chuyển động” nhờ JS không?

![DOM trong JavaScript](/images/js-dom.png)


## 2. DOM là gì?

* DOM là **cây phân cấp** của tất cả các phần tử trong HTML.
* Mỗi thẻ HTML là **một node**.
* JavaScript có thể **truy cập và thay đổi** node này.

Ví dụ: HTML

```html
<h1 id="title">Xin chào</h1>
```

JavaScript:

```js
document.getElementById("title").innerText = "Xin chào JavaScript!";
```



## 3. Truy cập phần tử

### 3.1 Theo ID

```js
let el = document.getElementById("title");
```

### 3.2 Theo class

```js
let items = document.getElementsByClassName("item");
```

### 3.3 Theo tag

```js
let divs = document.getElementsByTagName("div");
```

### 3.4 Query selector (hiện đại)

```js
let el = document.querySelector("#title");
let list = document.querySelectorAll(".item");
```



## 4. Thay đổi nội dung và style

```js
let el = document.getElementById("title");
el.innerText = "Chào bạn!";
el.style.color = "red";
el.style.fontSize = "24px";
```


## 5. Xử lý sự kiện (Events)

### 5.1 Gắn sự kiện trực tiếp

```html
<button onclick="alert('Bạn vừa click!')">Click me</button>
```



### 5.2 Dùng addEventListener

```js
let btn = document.getElementById("myBtn");
btn.addEventListener("click", function() {
  alert("Bạn vừa bấm nút!");
});
```



### 5.3 Sự kiện thường gặp

* `click`
* `mouseover`
* `keydown`
* `submit`



## 6. Ví dụ tổng hợp: To-do List

HTML:

```html
<input id="task" type="text" placeholder="Nhập công việc">
<button id="addBtn">Thêm</button>
<ul id="list"></ul>
```

JavaScript:

```js
let addBtn = document.getElementById("addBtn");
let list = document.getElementById("list");

addBtn.addEventListener("click", function() {
  let taskInput = document.getElementById("task");
  let li = document.createElement("li");
  li.innerText = taskInput.value;
  list.appendChild(li);
  taskInput.value = "";
});
```

Kết quả: bạn có một ứng dụng **To-do List** 

![Ứng dụng To-do List bằng JavaScript](/images/js-todo.png)

## 7. Lỗi thường gặp

| Lỗi                         | Nguyên nhân                  | Giải pháp                                         |
| --------------------------- | ---------------------------- | ------------------------------------------------- |
| `null` khi getElementById   | ID không tồn tại             | Kiểm tra lại ID trong HTML                        |
| Sự kiện không hoạt động     | Gắn event trước khi DOM load | Đặt script cuối body hoặc dùng `DOMContentLoaded` |
| CSS không áp dụng           | Sai cú pháp `style`          | Đúng dạng camelCase: `backgroundColor`            |
| Thêm element không hiển thị | Quên append vào DOM          | Dùng `appendChild()` hoặc `innerHTML`             |



## 8. Bài tập nhỏ

1. Viết chương trình thay đổi màu nền trang khi bấm nút.

HTML:
```html
<button id="colorBtn">Đổi màu nền</button>
```

JavaScript:
```js
document.getElementById("colorBtn").addEventListener("click", function() {
  document.body.style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
});
```

2. Làm ứng dụng “Đếm số ký tự” khi nhập vào ô input.

HTML:
```html
<input id="textInput" type="text" placeholder="Nhập nội dung...">
<p>Số ký tự: <span id="count">0</span></p>
```

JavaScript:
```js
let input = document.getElementById("textInput");
let count = document.getElementById("count");

input.addEventListener("input", function() {
  count.innerText = input.value.length;
});
```

3. Tạo form đăng nhập, khi bấm submit thì in ra tên người dùng.

HTML:
```html
<form id="loginForm">
  <input id="username" type="text" placeholder="Tên người dùng">
  <input type="password" placeholder="Mật khẩu">
  <button type="submit">Đăng nhập</button>
</form>
<p id="result"></p>
```

JavaScript:
```js
let form = document.getElementById("loginForm");
let result = document.getElementById("result");

form.addEventListener("submit", function(e) {
  e.preventDefault(); // Ngăn load lại trang
  let name = document.getElementById("username").value;
  result.innerText = "Xin chào, " + name + "!";
});
```
4. Viết ứng dụng quiz nhỏ: hiện câu hỏi, chọn đáp án, báo đúng/sai.

HTML:
```html
<p id="question">JavaScript là ngôn ngữ phía ...?</p>
<button class="answer">Client</button>
<button class="answer">Server</button>
<button class="answer">Cả hai</button>
<p id="feedback"></p>
```


JavaScript:
```js
let answers = document.querySelectorAll(".answer");
let feedback = document.getElementById("feedback");

answers.forEach(btn => {
  btn.addEventListener("click", function() {
    if (btn.innerText === "Cả hai") {
      feedback.innerText = "✅ Chính xác!";
    } else {
      feedback.innerText = "❌ Sai rồi, thử lại nhé!";
    }
  });
});
```



## 9. Tổng kết

Trong bài này, bạn đã học:

* DOM là gì và cách JS thao tác với HTML.
* Cách truy cập phần tử (ID, class, querySelector).
* Cách thay đổi nội dung và style bằng JS.
* Cách xử lý sự kiện với addEventListener.
* Ứng dụng To-do List thực tế.

👉 Đây chính là lúc bạn thấy JavaScript **biến trang web tĩnh thành trang web động**.



## 10. Kết thúc series

🎉 Xin chúc mừng! Bạn đã hoàn thành 4 bài học cơ bản về JavaScript:

1. **JavaScript cơ bản** – nền tảng và cú pháp.
2. **Cấu trúc điều khiển & Hàm** – xử lý logic.
3. **Đối tượng, Mảng & OOP** – quản lý dữ liệu.
4. **DOM & Tương tác Web** – ứng dụng thực tế.

👉 Sau khi học xong, bạn có thể:

* Viết chương trình JS cơ bản.
* Làm ứng dụng mini chạy trong trình duyệt.
* Có nền tảng để học nâng cao: **AJAX, API, React, Node.js**.



*Chúc bạn sớm trở thành JavaScript Developer và xây dựng những website tuyệt vời!* 🌐🚀