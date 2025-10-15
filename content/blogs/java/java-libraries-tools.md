---
title: "Thư viện & Công cụ mạnh mẽ trong Java"
date: 2025-09-13
draft: false
description: "Khám phá Collections Framework, xử lý ngoại lệ, nhập/xuất dữ liệu và những hướng phát triển nâng cao trong Java."
tags: ["java", "collections", "exception", "io", "công cụ"]
category: "Java"
author: "Đào Nguyễn Duy Khoa"
weight: 5
-----------------------------

## 1. Mở đầu

Sau khi đã học về **ngôn ngữ cơ bản** và **OOP**, bạn có thể viết được nhiều chương trình nhỏ.
Nhưng nếu muốn làm các ứng dụng lớn hơn, bạn cần tận dụng những **thư viện và công cụ mạnh mẽ** mà Java cung cấp sẵn.

Trong bài này, chúng ta sẽ tìm hiểu ba “vũ khí” quan trọng:

1. **Collections Framework** – để quản lý dữ liệu phức tạp.
2. **Exception Handling** – để xử lý lỗi an toàn.
3. **Input/Output (I/O)** – để đọc và ghi dữ liệu từ file.

Cuối cùng, mình cũng sẽ giới thiệu ngắn gọn những **hướng phát triển nâng cao** như JDBC, JavaFX, Spring, Android.

---

## 2. Collections Framework

### 2.1 Giới thiệu

Collections Framework là **bộ công cụ mạnh mẽ** để quản lý dữ liệu dạng tập hợp: danh sách, tập hợp không trùng, ánh xạ khóa-giá trị.

Thay vì dùng mảng cố định (`int[]`), bạn có thể dùng `ArrayList`, `HashSet`, `HashMap` để quản lý dữ liệu linh hoạt hơn.

### 2.2 Các thành phần chính

* **List**: danh sách có thứ tự, cho phép trùng lặp. (`ArrayList`, `LinkedList`)
* **Set**: tập hợp không cho phép trùng lặp. (`HashSet`, `TreeSet`)
* **Map**: lưu trữ dữ liệu theo cặp *key–value*. (`HashMap`, `TreeMap`)

### 2.3 Ví dụ

```java
import java.util.*;

public class CollectionDemo {
    public static void main(String[] args) {
        // List
        List<String> names = new ArrayList<>();
        names.add("Java");
        names.add("Python");
        names.add("Java"); // cho phép trùng
        System.out.println("List: " + names);

        // Set
        Set<String> set = new HashSet<>(names);
        System.out.println("Set: " + set); // không trùng

        // Map
        Map<String, Integer> scores = new HashMap<>();
        scores.put("Khoa", 90);
        scores.put("Lan", 85);
        System.out.println("Điểm của Khoa: " + scores.get("Khoa"));
    }
}
```

👉 Nhờ Collections, bạn có thể dễ dàng quản lý hàng ngàn bản ghi dữ liệu.

---

## 3. Exception Handling (Xử lý ngoại lệ)

### 3.1 Tại sao cần?

Trong thực tế, chương trình thường gặp lỗi: chia cho 0, nhập sai dữ liệu, file không tồn tại... Nếu không xử lý tốt, chương trình sẽ **dừng đột ngột**.

👉 Java cung cấp **Exception Handling** để kiểm soát lỗi an toàn.

### 3.2 Cú pháp try-catch

```java
try {
    int a = 5 / 0; // lỗi chia cho 0
} catch (ArithmeticException e) {
    System.out.println("Lỗi: " + e.getMessage());
}
```

### 3.3 finally

Dùng để **luôn chạy** một đoạn code dù có lỗi hay không.

```java
try {
    String str = null;
    System.out.println(str.length());
} catch (NullPointerException e) {
    System.out.println("Null pointer!");
} finally {
    System.out.println("Kết thúc xử lý");
}
```

### 3.4 throw và throws

```java
public void checkAge(int age) throws Exception {
    if (age < 18) throw new Exception("Chưa đủ tuổi!");
}
```

---

## 4. Input/Output (I/O) trong Java

### 4.1 Đọc file văn bản

```java
import java.io.*;

public class ReadFile {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new FileReader("data.txt"));
        String line;
        while ((line = br.readLine()) != null) {
            System.out.println(line);
        }
        br.close();
    }
}
```

### 4.2 Ghi file văn bản

```java
import java.io.*;

public class WriteFile {
    public static void main(String[] args) throws IOException {
        BufferedWriter bw = new BufferedWriter(new FileWriter("output.txt"));
        bw.write("Xin chào Java I/O!");
        bw.close();
    }
}
```

👉 Đây là bước quan trọng để xây dựng ứng dụng lưu trữ dữ liệu.

---

## 5. Ví dụ tổng hợp: Quản lý sinh viên với Collections + I/O

```java
import java.io.*;
import java.util.*;

public class StudentManager {
    public static void main(String[] args) throws IOException {
        List<String> students = new ArrayList<>();
        students.add("Khoa");
        students.add("Lan");
        students.add("Minh");

        // Ghi ra file
        BufferedWriter bw = new BufferedWriter(new FileWriter("students.txt"));
        for (String s : students) {
            bw.write(s);
            bw.newLine();
        }
        bw.close();

        // Đọc lại từ file
        BufferedReader br = new BufferedReader(new FileReader("students.txt"));
        String line;
        System.out.println("Danh sách sinh viên:");
        while ((line = br.readLine()) != null) {
            System.out.println(line);
        }
        br.close();
    }
}
```

👉 Ở ví dụ này, bạn đã kết hợp Collections và I/O để **lưu và đọc dữ liệu sinh viên từ file**.

---

## 6. Lỗi thường gặp

| Lỗi                               | Nguyên nhân                  | Cách khắc phục                      |
| --------------------------------- | ---------------------------- | ----------------------------------- |
| `FileNotFoundException`           | File không tồn tại           | Kiểm tra đường dẫn file             |
| `NullPointerException`            | Biến tham chiếu `null`       | Luôn khởi tạo object trước khi dùng |
| `ConcurrentModificationException` | Sửa danh sách khi đang duyệt | Dùng Iterator để tránh xung đột     |

---

## 7. Bài tập nhỏ

1. Viết chương trình lưu trữ danh sách tên người dùng vào file rồi đọc lại.
2. Viết chương trình nhập điểm của sinh viên và tìm người có điểm cao nhất (dùng HashMap).
3. Tạo class `Book` và lưu danh sách sách vào file `books.txt`.

---

## 8. Hướng phát triển nâng cao

Sau khi nắm vững cơ bản, bạn có thể học thêm:

* **JDBC** – kết nối và làm việc với cơ sở dữ liệu (MySQL, PostgreSQL).
* **JavaFX / Swing** – xây dựng ứng dụng giao diện người dùng (desktop app).
* **Spring Framework** – xây dựng ứng dụng web, API backend.
* **Android Development** – phát triển ứng dụng di động.

👉 Đây là các bước để bạn đi xa hơn trong con đường Java Developer.

---

## 9. Tổng kết

Trong bài này, chúng ta đã tìm hiểu:

* **Collections Framework**: quản lý dữ liệu linh hoạt với List, Set, Map.
* **Exception Handling**: xử lý lỗi an toàn với try-catch-finally.
* **I/O**: đọc/ghi file để lưu trữ dữ liệu.
* Ví dụ tổng hợp quản lý sinh viên.
* Hướng phát triển nâng cao với JDBC, JavaFX, Spring, Android.

🎉 Như vậy, qua 4 bài blog, bạn đã có cái nhìn **toàn diện về Java cơ bản** – từ chạy chương trình đầu tiên, xử lý dữ liệu, OOP đến sử dụng thư viện mạnh mẽ.

👉 Giờ bạn đã sẵn sàng bước vào những dự án Java thực tế! 🚀

---

*Xin chúc mừng bạn đã hoàn thành series 4 bài học Java cơ bản!* 🎉
