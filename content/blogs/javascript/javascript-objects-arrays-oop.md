---
title: "Đối tượng, Mảng và OOP trong JavaScript"
date: 2025-09-27
draft: false
description: "Khám phá cách làm việc với Object, Array, và lập trình hướng đối tượng trong JavaScript với ES6 Class và Prototype."
tags: ["javascript", "object", "array", "oop"]
category: "JavaScript"
author: "Đào Nguyễn Duy Khoa"
weight: 4
---------

## 1. Mở đầu

Trong bài 2, bạn đã biết cách sử dụng **if, vòng lặp và hàm** để xử lý logic. Nhưng khi chương trình lớn hơn, bạn sẽ cần cách **tổ chức dữ liệu** hiệu quả hơn.

👉 Đó là lý do có **Object (đối tượng)** và **Array (mảng)**, hai cấu trúc dữ liệu cốt lõi trong JavaScript. Và để nâng cao, ta có **OOP (Object-Oriented Programming)** với class và prototype.

> Hồi mình mới học JS, mình viết danh sách sinh viên bằng… 5 biến riêng lẻ: `name1`, `name2`, `name3`… 😅. Rất lộn xộn! Sau này mình mới biết dùng **array** và **object**, mọi thứ gọn gàng hơn hẳn. Bạn đã từng code “cồng kềnh” như vậy chưa?

{{</* image src="/images/js-object-array.png" alt="Object và Array trong JavaScript" */>}}

---

## 2. Object trong JavaScript

### 2.1 Khai báo object

```js
let student = {
  name: "Khoa",
  age: 21,
  study: function() {
    console.log(this.name + " đang học JavaScript.");
  }
};

console.log(student.name); // Khoa
student.study();
```

### 2.2 Thêm và xóa thuộc tính

```js
student.class = "CNTT";
delete student.age;
```

---

## 3. Array trong JavaScript

### 3.1 Khai báo array

```js
let fruits = ["Táo", "Cam", "Chuối"];
console.log(fruits[0]); // Táo
```

### 3.2 Các phương thức hay dùng

```js
fruits.push("Xoài");   // thêm phần tử
fruits.pop();          // xóa phần tử cuối
fruits.shift();        // xóa phần tử đầu
fruits.unshift("Lê");  // thêm phần tử đầu
```

---

### 3.3 Duyệt mảng

```js
for (let fruit of fruits) {
  console.log(fruit);
}
```

---

### 3.4 Các phương thức hiện đại

```js
let numbers = [1, 2, 3, 4, 5];

let squares = numbers.map(n => n * n);
console.log(squares); // [1,4,9,16,25]

let even = numbers.filter(n => n % 2 === 0);
console.log(even); // [2,4]

let sum = numbers.reduce((acc, n) => acc + n, 0);
console.log(sum); // 15
```

---

## 4. Lập trình Hướng Đối Tượng (OOP)

### 4.1 Constructor function

```js
function Student(name, age) {
  this.name = name;
  this.age = age;
}

let s1 = new Student("Khoa", 21);
console.log(s1.name);
```

---

### 4.2 Prototype

```js
Student.prototype.sayHello = function() {
  console.log("Xin chào, tôi là " + this.name);
};

s1.sayHello();
```

---

### 4.3 Class (ES6)

```js
class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  study() {
    console.log(this.name + " đang học JS.");
  }
}

let s2 = new Student("Lan", 20);
s2.study();
```

---

### 4.4 Kế thừa với `extends`

```js
class Person {
  constructor(name) {
    this.name = name;
  }
}

class Teacher extends Person {
  teach() {
    console.log(this.name + " đang giảng bài.");
  }
}

let t1 = new Teacher("Thầy Minh");
t1.teach();
```

---

{{</* image src="/images/js-class-diagram.png" alt="Class và kế thừa trong JavaScript" */>}}

---

## 5. Ví dụ tổng hợp: Quản lý sinh viên

```js
class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  display() {
    console.log("Tên: " + this.name + ", Tuổi: " + this.age);
  }
}

let list = [
  new Student("Khoa", 21),
  new Student("Lan", 20),
];

list.forEach(s => s.display());
```

---

## 6. Lỗi thường gặp

| Lỗi                             | Nguyên nhân                | Giải pháp               |
| ------------------------------- | -------------------------- | ----------------------- |
| `undefined` khi truy cập object | Sai key                    | Kiểm tra tên thuộc tính |
| `is not a function`             | Gọi method chưa định nghĩa | Xem lại class/prototype |
| Thêm phần tử ngoài mảng         | Dùng sai chỉ số            | Chỉ số phải < length    |
| Quên `new` khi tạo object       | Không tạo instance         | Dùng `new ClassName()`  |

---

## 7. Bài tập nhỏ

1. Tạo object `car` có thuộc tính `brand`, `speed`, và method `drive()`.
2. Tạo mảng chứa 5 số và tính tổng.
3. Viết class `Animal` và class con `Dog`, override method `sound()`.
4. Tạo danh sách sinh viên (array of objects) và in ra tất cả.

---

## 8. Tổng kết

Trong bài này, bạn đã học:

* Object và cách thêm/xóa thuộc tính.
* Array và các phương thức quan trọng (`map`, `filter`, `reduce`).
* OOP trong JavaScript: constructor, prototype, class, kế thừa.
* Ví dụ quản lý sinh viên bằng class.

👉 Đây là bước quan trọng để bạn làm việc với **dữ liệu phức tạp và mô hình hóa đối tượng trong JS**.

Ở **bài 4**, chúng ta sẽ học:
**“DOM & Tương tác với Web”** – nơi JS thật sự “thể hiện sức mạnh” khi làm web sống động.

---

*Hẹn gặp bạn ở Bài 4 nhé!* 🚀