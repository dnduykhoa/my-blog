---
title: "Java Cơ Bản – Nền tảng cho người mới bắt đầu"
date: 2025-09-10
draft: false
description: "Giới thiệu Java, lịch sử, ưu điểm, cách cài đặt môi trường và viết chương trình đầu tiên."
tags: ["java", "cơ bản", "beginner"]
category: "Java"
author: "Đào Nguyễn Duy Khoa"
weight: 2
-----------------------------

## 1. Mở đầu

Bạn có bao giờ tự hỏi: *“Vì sao Java lại tồn tại hơn 25 năm và vẫn được dùng rộng rãi trong lập trình web, ứng dụng di động, và cả trí tuệ nhân tạo?”*
Câu trả lời nằm ở sự **đơn giản, mạnh mẽ và ổn định** mà Java mang lại.

> Mình còn nhớ lần đầu cài JDK bị lỗi PATH, gõ `java -version` mà máy báo “command not found”. Loay hoay cả buổi tối mới sửa được. Nếu bạn cũng gặp tình huống này thì đừng nản, vì đây là “nghi thức nhập môn” của dân Java 😂. Bạn đã từng gặp chưa?

![Hành trình học Java cho người mới bắt đầu](/images/java-learning-roadmap.png)

## 2. Java là gì?

**Java** là một ngôn ngữ lập trình hướng đối tượng (OOP) ra đời năm 1995 bởi **Sun Microsystems** (sau này thuộc Oracle).
Điểm đặc biệt khiến Java nổi bật là khẩu hiệu:

> **"Write Once, Run Anywhere"** – *Viết một lần, chạy mọi nơi.*

![Write Once, Run Anywhere trong Java](/images/java-write-once-run-anywhere.png)

## 3. Lịch sử ra đời và sự phát triển

* **1991**: Dự án “Oak” được khởi xướng bởi James Gosling.
* **1995**: Đổi tên thành Java, ra mắt công chúng.
* **2006**: Java trở thành **mã nguồn mở** thông qua OpenJDK.
* **2010 – nay**: Oracle tiếp quản, Java liên tục được nâng cấp, hiện tại là **Java 21** (LTS).


## 4. Ưu điểm của Java

| Ưu điểm            | Giải thích                                       |
| ------------------ | ------------------------------------------------ |
| Độc lập nền tảng   | Chạy được trên mọi hệ điều hành nhờ JVM          |
| Hướng đối tượng    | Giúp viết code dễ quản lý, tái sử dụng           |
| Bảo mật cao        | Java có lớp Security Manager kiểm soát quyền hạn |
| Thư viện phong phú | Có sẵn hàng ngàn thư viện hỗ trợ                 |
| Cộng đồng lớn      | Hàng triệu lập trình viên Java trên toàn cầu     |

## 5. Ứng dụng thực tế của Java

Bạn có thể tìm thấy Java trong rất nhiều công nghệ xung quanh mình:

* **Ứng dụng Android**: Hầu hết các app trên Google Play ban đầu viết bằng Java.
* **Web backend**: Các trang như LinkedIn, Amazon, eBay dùng Java cho hệ thống máy chủ.
* **Ngân hàng – Tài chính**: Hệ thống giao dịch sử dụng Java vì tính ổn định.
* **IoT & Thiết bị nhúng**: Nhiều TV thông minh, thẻ SIM chạy Java.

![Ứng dụng thực tế của Java](/images/java-applications.png)

## 6. Chuẩn bị môi trường lập trình Java

* Tải **Java Development Kit (JDK)** từ Oracle hoặc OpenJDK.
* Cài đặt và cấu hình PATH.

```bash
java -version
```

Nếu hiển thị phiên bản → ✅ cài thành công.

![Quy trình biên dịch và chạy chương trình Java](/images/java-compile-run-process.png)

## 7. Viết chương trình Java đầu tiên
Tạo file `HelloWorld.java`:

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Xin chào, Java!");
    }
}
```

Biên dịch & chạy:

```bash
javac HelloWorld.java
java HelloWorld
```

Kết quả:

```
Xin chào, Java!
```


## 8. Phân tích cú pháp cơ bản

* **class HelloWorld**: định nghĩa lớp.
* **public static void main**: điểm bắt đầu chương trình.
* **System.out.println**: in ra màn hình.


## 9. Lỗi thường gặp

| Lỗi                        | Nguyên nhân            | Cách khắc phục                            |
| -------------------------- | ---------------------- | ----------------------------------------- |
| `javac: command not found` | PATH chưa cài đúng     | Cấu hình lại PATH                         |
| `class not found`          | Gõ sai lệnh            | Dùng `java HelloWorld` (không có `.java`) |
| Thiếu dấu `;`              | Quên kết thúc câu lệnh | Thêm `;`                                  |


## 10. Ví dụ mở rộng: Máy tính cộng đơn giản

```java
import java.util.Scanner;

public class Calculator {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Nhập số thứ nhất: ");
        int a = sc.nextInt();
        System.out.print("Nhập số thứ hai: ");
        int b = sc.nextInt();
        int sum = a + b;
        System.out.println("Tổng = " + sum);
    }
}
```

## 11. Bài tập nhỏ cho bạn

1. In ra tên, tuổi và trường học của bạn.
```java
public class PersonalInfo {
    public static void main(String[] args) {
        String name = "Nguyễn Văn A";
        int age = 20;
        String school = "Đại học Công nghệ Thông tin";

        System.out.println("Tên: " + name);
        System.out.println("Tuổi: " + age);
        System.out.println("Trường: " + school);
    }
}
```
2. Nhập 2 số và tính hiệu, tích, thương.
```java
import java.util.Scanner;

public class BasicOperations {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Nhập số thứ nhất: ");
        int a = sc.nextInt();

        System.out.print("Nhập số thứ hai: ");
        int b = sc.nextInt();

        int hieu = a - b;
        int tich = a * b;
        double thuong = (b != 0) ? (double) a / b : Double.NaN;

        System.out.println("Hiệu = " + hieu);
        System.out.println("Tích = " + tich);
        if (b != 0)
            System.out.println("Thương = " + thuong);
        else
            System.out.println("Không thể chia cho 0!");
    }
}
```
3. In ra câu chào: *“Xin chào [Tên của bạn]!”*.
```java
import java.util.Scanner;

public class Greeting {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Nhập tên của bạn: ");
        String name = sc.nextLine();

        System.out.println("Xin chào " + name + "!");
    }
}
```


## 12. Tổng kết

Trong bài này, chúng ta đã tìm hiểu:

* Java là gì, lịch sử và ưu điểm.
* Cách cài JDK, viết & chạy Hello World.
* Cấu trúc cơ bản của chương trình.
* Một số lỗi thường gặp.

👉 Đây là bước khởi đầu quan trọng để bạn tiếp tục học Java.

Ở bài 2, chúng ta sẽ học:
**“Cấu trúc và Dữ liệu trong Java”** – biến, kiểu dữ liệu, toán tử, vòng lặp.


*Hẹn gặp bạn ở bài 2 nhé!* 🚀