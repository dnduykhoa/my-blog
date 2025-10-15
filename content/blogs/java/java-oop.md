---
title: "Lập trình Hướng Đối Tượng (OOP) trong Java"
date: 2025-09-12
draft: false
description: "Khám phá bốn tính chất quan trọng của OOP trong Java: Đóng gói, Kế thừa, Đa hình và Trừu tượng"
tags: ["java", "oop", "class", "object"]
categories: ["Java"]
author: "Đào Nguyễn Duy Khoa"
weight: 4
-----------------------------

## 1. Mở đầu

Bạn còn nhớ ở hai bài trước, chúng ta đã làm quen với **biến, kiểu dữ liệu, toán tử và cấu trúc điều khiển**. Với những kiến thức đó, bạn có thể viết được nhiều chương trình nhỏ.

Nhưng khi dự án lớn dần (ví dụ: quản lý sinh viên, bán hàng online, game...), nếu chỉ viết code bằng `if-else` và `for` thì chương trình sẽ trở nên **rối rắm, khó bảo trì**.

> Hồi mới học OOP, mình cực kỳ rối giữa class và object. Mình cứ nghĩ chúng giống nhau. Chỉ khi làm mini project quản lý sinh viên trong Hugo blog của mình, mình mới ngộ ra: class giống như bản thiết kế, còn object là sản phẩm tạo ra. Bạn có thấy vậy không?

👉 Đó là lúc **Lập trình Hướng Đối Tượng (OOP – Object-Oriented Programming)** xuất hiện để giải quyết vấn đề.
Java chính là một trong những ngôn ngữ tiêu biểu nhất cho OOP.

---

## 2. OOP là gì?

**OOP** là phương pháp lập trình lấy **đối tượng (object)** làm trung tâm.
Trong đời sống, chúng ta thấy mọi thứ đều là **đối tượng**: Sinh viên, Sách, Ô tô, Tài khoản ngân hàng…

Mỗi đối tượng có:

* **Thuộc tính (Attributes)**: đặc điểm, dữ liệu của nó.
* **Phương thức (Methods)**: hành động mà nó thực hiện được.

Ví dụ:

* Đối tượng “Sinh viên”:

  * Thuộc tính: `tên`, `mã số`, `ngành học`.
  * Phương thức: `đăng ký môn học()`, `tính điểm()`.

👉 Đây chính là cách mà Java giúp chúng ta **mô phỏng thế giới thực bằng code**.

---

## 3. Các khái niệm cơ bản

### 3.1 Class và Object

* **Class (lớp)**: Bản thiết kế, khuôn mẫu cho đối tượng.
* **Object (đối tượng)**: Thực thể được tạo ra từ class.

Ví dụ:

```java
class Student {
    String name;
    int age;

    void study() {
        System.out.println(name + " đang học Java");
    }
}

public class Main {
    public static void main(String[] args) {
        Student sv = new Student();
        sv.name = "Khoa";
        sv.age = 21;
        sv.study();  // Output: Khoa đang học Java
    }
}
```

---

## 4. Bốn tính chất quan trọng của OOP

### 4.1 Đóng gói (Encapsulation)

* Giấu chi tiết bên trong đối tượng.
* Chỉ cho phép truy cập thông qua **getter** và **setter**.

Ví dụ:

```java
class BankAccount {
    private double balance;

    public void deposit(double amount) {
        balance += amount;
    }

    public double getBalance() {
        return balance;
    }
}
```

👉 `balance` bị ẩn đi, không thể thay đổi trực tiếp từ bên ngoài.

---

### 4.2 Kế thừa (Inheritance)

* Một class có thể **kế thừa** từ class khác.
* Giúp tái sử dụng code, mở rộng tính năng.

Ví dụ:

```java
class Person {
    String name;
    void eat() {
        System.out.println(name + " đang ăn");
    }
}

class Student extends Person {
    void study() {
        System.out.println(name + " đang học");
    }
}

public class Main {
    public static void main(String[] args) {
        Student sv = new Student();
        sv.name = "Lan";
        sv.eat();
        sv.study();
    }
}
```

---

### 4.3 Đa hình (Polymorphism)

* **Nhiều hình thái khác nhau** của cùng một phương thức.
* Gồm **Overloading** và **Overriding**.

Ví dụ Overloading:

```java
class Calculator {
    int add(int a, int b) {
        return a + b;
    }
    double add(double a, double b) {
        return a + b;
    }
}
```

Ví dụ Overriding:

```java
class Animal {
    void sound() { System.out.println("Động vật kêu"); }
}

class Dog extends Animal {
    @Override
    void sound() { System.out.println("Gâu gâu"); }
}
```

---

### 4.4 Trừu tượng (Abstraction)

* Ẩn chi tiết, chỉ cho người dùng thấy **cái gì làm được** chứ không cần biết **làm thế nào**.
* Thực hiện bằng **Abstract class** hoặc **Interface**.

Ví dụ Abstract:

```java
abstract class Animal {
    abstract void sound();
}

class Cat extends Animal {
    void sound() { System.out.println("Meo meo"); }
}
```

Ví dụ Interface:

```java
interface Vehicle {
    void move();
}

class Car implements Vehicle {
    public void move() {
        System.out.println("Ô tô di chuyển bằng bánh xe");
    }
}
```

---

## 5. Ví dụ tổng hợp

Giả sử bạn cần mô phỏng **quản lý sinh viên**:

```java
class Person {
    String name;
    int age;
}

class Student extends Person {
    String studentId;

    void study() {
        System.out.println(name + " đang học");
    }
}

public class Main {
    public static void main(String[] args) {
        Student sv = new Student();
        sv.name = "Khoa";
        sv.age = 21;
        sv.studentId = "SV001";

        System.out.println("Tên: " + sv.name);
        sv.study();
    }
}
```

---

## 6. Lỗi thường gặp

| Lỗi                    | Nguyên nhân                              | Cách khắc phục                     |
| ---------------------- | ---------------------------------------- | ---------------------------------- |
| `cannot find symbol`   | Gọi đến biến/phương thức chưa định nghĩa | Kiểm tra chính tả, khai báo đầy đủ |
| `NullPointerException` | Đối tượng chưa được khởi tạo bằng `new`  | Dùng `new` để tạo object           |
| Lạm dụng kế thừa       | Kế thừa không hợp lý, gây rối code       | Chỉ kế thừa khi có quan hệ “is-a”  |

---

## 7. Bài tập nhỏ

1. Tạo class `Animal` với phương thức `sound()`. Kế thừa tạo `Dog` và `Cat` rồi override `sound()`.
2. Viết chương trình quản lý **sách trong thư viện**: class `Book` (title, author, year), thêm phương thức in thông tin.
3. Tạo interface `Shape` với phương thức `area()`. Cài đặt `Rectangle` và `Circle`.

---

## 8. Tổng kết

Trong bài này, bạn đã học:

* OOP là gì và tại sao quan trọng.
* Các khái niệm class, object.
* 4 tính chất cơ bản: **Đóng gói, Kế thừa, Đa hình, Trừu tượng**.
* Ví dụ tổng hợp và các lỗi thường gặp.

👉 Đây chính là **linh hồn của Java**. Khi nắm vững OOP, bạn sẽ dễ dàng học tiếp các framework như Spring, Hibernate hoặc phát triển ứng dụng Android.

Ở **bài 4**, chúng ta sẽ tìm hiểu:
**“Thư viện & Công cụ mạnh mẽ trong Java”** – gồm Collections, Exception Handling và IO.

---

*Hẹn gặp bạn ở Bài 4 nhé!* 🚀