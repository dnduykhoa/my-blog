---
title: "Cấu trúc và Dữ liệu trong Java"
date: 2025-09-11
draft: false
description: "Khám phá cách Java lưu trữ và xử lý dữ liệu qua biến, kiểu dữ liệu, toán tử và các cấu trúc điều khiển."
tags: ["java", "cơ bản", "biến", "toán tử", "cấu trúc điều khiển"]
category: "Java"
author: "Đào Nguyễn Duy Khoa"
weight: 3
-----------------------------

## 1. Mở đầu

Trong bài trước, bạn đã chạy thành công chương trình **Hello World**. Nhưng chắc chắn bạn sẽ muốn làm nhiều thứ hơn là chỉ in chữ ra màn hình, đúng không?
Ví dụ: tính tuổi, kiểm tra số chẵn lẻ, hoặc in ra bảng cửu chương.

Để viết những chương trình hữu ích, bạn cần biết cách **"lưu trữ dữ liệu (biến, kiểu dữ liệu)"** và **"xử lý logic (if-else, vòng lặp)"**. Đây là **“xương sống”** của mọi chương trình Java. Hãy cùng tìm hiểu từng phần nhé.

> Ngày đầu mình học vòng lặp for, mình viết nhầm điều kiện i <= 10 thành i >= 10 và chương trình chạy vô tận. Máy treo luôn 😅. Từ đó mình rút ra bài học: vòng lặp phải có điểm dừng rõ ràng. Bạn có từng gặp vòng lặp vô hạn chưa?

## 2. Biến trong Java

### 2.1 Khái niệm

* **Biến** giống như chiếc hộp dùng để lưu trữ dữ liệu.
* Mỗi biến có **tên gọi** và **kiểu dữ liệu**.

### 2.2 Cú pháp khai báo

```java
KiểuDữLiệu tênBiến = giá_trị_khởi_tạo;
```

Ví dụ:

```java
int age = 21;
double height = 1.75;
String name = "Khoa";
```

### 2.3 Quy tắc đặt tên biến

* Bắt đầu bằng chữ cái hoặc dấu gạch dưới `_`, không được bắt đầu bằng số.
* Nên dùng **camelCase**: ví dụ `studentAge`, `maxSpeed`.
* Không trùng với từ khóa Java (`class`, `int`, `if`…).


## 3. Kiểu dữ liệu trong Java

Java có hai nhóm chính:

### 3.1 Kiểu dữ liệu nguyên thủy (Primitive Types)

| Kiểu    | Kích thước | Giá trị ví dụ | Ghi chú          |
| ------- | ---------- | ------------- | ---------------- |
| byte    | 1 byte     | 100           | Số nhỏ           |
| short   | 2 byte     | 30000         | Số nhỏ           |
| int     | 4 byte     | 500000        | Phổ biến nhất    |
| long    | 8 byte     | 1000000000L   | Thêm chữ `L`     |
| float   | 4 byte     | 3.14f         | Thêm `f`         |
| double  | 8 byte     | 3.14159       | Mặc định số thực |
| char    | 2 byte     | 'A'           | Ký tự Unicode    |
| boolean | 1 bit      | true / false  | Logic            |

### 3.2 Kiểu dữ liệu tham chiếu (Reference Types)

* **String** – chuỗi ký tự
* **Array** – mảng
* **Class / Object** – đối tượng

Ví dụ:

```java
String greeting = "Xin chào!";
int[] numbers = {1, 2, 3, 4, 5};
```

## 4. Toán tử trong Java

### 4.1 Toán tử số học

```java
int a = 10, b = 3;
System.out.println(a + b); // 13
System.out.println(a % b); // 1
```

### 4.2 Toán tử so sánh

* `==` : bằng
* `!=` : khác
* `>`  : lớn hơn
* `<`  : nhỏ hơn

Ví dụ:

```java
int x = 5, y = 7;
System.out.println(x < y); // true
```

### 4.3 Toán tử logic

* `&&` (AND)
* `||` (OR)
* `!`  (NOT)

Ví dụ:

```java
boolean isAdult = true;
boolean hasID = false;
System.out.println(isAdult && hasID); // false
```

## 5. Cấu trúc điều khiển

### 5.1 Cấu trúc rẽ nhánh – if/else

```java
int age = 18;
if (age >= 18) {
    System.out.println("Đủ tuổi trưởng thành");
} else {
    System.out.println("Chưa đủ tuổi");
}
```

### 5.2 switch-case

```java
int day = 3;
switch(day) {
    case 1: System.out.println("Thứ Hai"); break;
    case 2: System.out.println("Thứ Ba"); break;
    case 3: System.out.println("Thứ Tư"); break;
    default: System.out.println("Không hợp lệ");
}
```


### 5.3 Vòng lặp for

```java
for (int i = 1; i <= 5; i++) {
    System.out.println("i = " + i);
}
```

### 5.4 Vòng lặp while

```java
int i = 1;
while (i <= 5) {
    System.out.println("i = " + i);
    i++;
}
```

### 5.5 Vòng lặp do-while

```java
int j = 1;
do {
    System.out.println("j = " + j);
    j++;
} while (j <= 5);
```


## 6. Ví dụ tổng hợp

### 6.1 Bài toán: Tính chỉ số BMI

```java
import java.util.Scanner;

public class BMI {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Nhập cân nặng (kg): ");
        double weight = sc.nextDouble();
        System.out.print("Nhập chiều cao (m): ");
        double height = sc.nextDouble();

        double bmi = weight / (height * height);
        System.out.println("Chỉ số BMI = " + bmi);

        if (bmi < 18.5) System.out.println("Gầy");
        else if (bmi < 24.9) System.out.println("Bình thường");
        else System.out.println("Thừa cân");
    }
}
```


## 7. Lỗi thường gặp

| Lỗi                        | Nguyên nhân           | Cách khắc phục            |
| -------------------------- | --------------------- | ------------------------- |
| `cannot convert`           | Gán sai kiểu dữ liệu  | Kiểm tra lại biến và kiểu |
| `missing ;`                | Quên dấu `;`          | Thêm `;` cuối dòng        |
| `variable not initialized` | Biến chưa gán giá trị | Khởi tạo trước khi dùng   |
| Vòng lặp vô hạn            | Quên tăng biến lặp    | Kiểm tra điều kiện lặp    |


## 8. Bài tập nhỏ

1. Viết chương trình in ra **bảng cửu chương** từ 1–9.
2. Viết chương trình nhập một số và kiểm tra số đó có phải **số nguyên tố**.
3. Viết chương trình tính **tổng các số chẵn từ 1 đến N**.


## 9. Tổng kết

Trong bài này, bạn đã học được:

* Khái niệm **biến, kiểu dữ liệu, toán tử** trong Java.
* Cách sử dụng **cấu trúc rẽ nhánh** (`if-else`, `switch`).
* Cách sử dụng **vòng lặp** (`for`, `while`, `do-while`).
* Cách áp dụng kiến thức qua **bài toán BMI**.

👉 Với nền tảng này, bạn có thể viết các chương trình tính toán, xử lý dữ liệu và giải các bài toán logic.

Ở **bài tiếp theo**, chúng ta sẽ bước sang phần thú vị hơn:
**“Lập trình Hướng Đối Tượng (OOP) trong Java”** – nơi bạn làm quen với class, object và các tính chất OOP.


*Hẹn gặp bạn ở Bài 3 nhé!* 🚀
