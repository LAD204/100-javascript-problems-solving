# Bộ 100 Bài Tập Luyện Tư Duy Giải Quyết Vấn Đề — JavaScript

> Mục tiêu: rèn khả năng phân tích đề bài, chọn cấu trúc dữ liệu/thuật toán phù hợp, và viết code sạch, đúng, hiệu quả.
> Cách dùng: đọc đề → tự nghĩ hướng giải trên giấy trước khi code → code → tự test với nhiều trường hợp (kể cả input "xấu") → so sánh với gợi ý độ phức tạp.

**Quy ước độ khó:**
- 🟢 Dễ (1–40): cú pháp cơ bản, vòng lặp, điều kiện, chuỗi/mảng đơn giản
- 🟡 Trung bình (41–75): thuật toán, cấu trúc dữ liệu, đệ quy, closure, thao tác object/array nâng cao
- 🔴 Nâng cao (76–100): quy hoạch động, đồ thị, tối ưu hiệu năng, thiết kế hệ thống nhỏ

---

## 🟢 PHẦN 1: CƠ BẢN (Bài 1–40)

### Nhóm A: Số học & điều kiện (1–10)

**Bài 1.** Viết hàm `isEven(n)` kiểm tra một số nguyên có phải số chẵn không.

**Bài 2.** Viết hàm `fizzBuzz(n)` in ra các số từ 1 đến n; số chia hết cho 3 in "Fizz", chia hết cho 5 in "Buzz", chia hết cho cả hai in "FizzBuzz".

**Bài 3.** Viết hàm tính tổng các chữ số của một số nguyên dương (VD: 1234 → 1+2+3+4 = 10).

**Bài 4.** Viết hàm kiểm tra một số có phải số nguyên tố không.

**Bài 5.** Viết hàm tính giai thừa của n (n!) bằng vòng lặp.

**Bài 6.** Viết hàm tìm ước chung lớn nhất (GCD) và bội chung nhỏ nhất (LCM) của hai số.

**Bài 7.** Viết hàm đảo ngược một số nguyên (VD: 1234 → 4321). Chú ý số âm.

**Bài 8.** Viết hàm kiểm tra một số có phải là số chính phương (perfect square) không, không dùng `Math.sqrt`.

**Bài 9.** Viết hàm chuyển đổi nhiệt độ giữa Celsius và Fahrenheit, cho phép người dùng chọn chiều chuyển đổi.

**Bài 10.** Viết hàm tính điểm trung bình và xếp loại (Giỏi/Khá/TB/Yếu) từ một mảng điểm số, xử lý trường hợp mảng rỗng.

### Nhóm B: Chuỗi (11–20)

**Bài 11.** Viết hàm đảo ngược một chuỗi mà không dùng `reverse()`.

**Bài 12.** Viết hàm kiểm tra chuỗi có phải palindrome (đối xứng) không, bỏ qua khoảng trắng và không phân biệt hoa/thường.

**Bài 13.** Viết hàm đếm số lần xuất hiện của mỗi ký tự trong chuỗi, trả về object.

**Bài 14.** Viết hàm kiểm tra hai chuỗi có phải là anagram của nhau không (chứa cùng các ký tự, khác thứ tự).

**Bài 15.** Viết hàm viết hoa chữ cái đầu mỗi từ trong câu (Title Case).

**Bài 16.** Viết hàm đếm số từ trong một câu, xử lý nhiều khoảng trắng liên tiếp.

**Bài 17.** Viết hàm tìm ký tự xuất hiện nhiều nhất trong chuỗi.

**Bài 18.** Viết hàm kiểm tra một chuỗi có chứa tất cả các chữ cái a-z (pangram) không.

**Bài 19.** Viết hàm nén chuỗi kiểu run-length encoding (VD: "aaabbc" → "a3b2c1").

**Bài 20.** Viết hàm kiểm tra dấu ngoặc trong chuỗi có hợp lệ không — chỉ xét ngoặc tròn `()` trước, dùng cách đơn giản (đếm), chưa cần stack.

### Nhóm C: Mảng cơ bản (21–30)

**Bài 21.** Viết hàm tìm giá trị lớn nhất và nhỏ nhất trong mảng số, không dùng `Math.max/min`.

**Bài 22.** Viết hàm loại bỏ phần tử trùng lặp trong mảng, giữ nguyên thứ tự xuất hiện đầu tiên.

**Bài 23.** Viết hàm tính tổng và trung bình cộng của mảng số.

**Bài 24.** Viết hàm đảo ngược mảng tại chỗ (in-place), không dùng `reverse()`.

**Bài 25.** Viết hàm trộn hai mảng đã sắp xếp thành một mảng sắp xếp (không dùng `sort()`).

**Bài 26.** Viết hàm tìm phần tử xuất hiện nhiều nhất trong mảng.

**Bài 27.** Viết hàm chia một mảng thành các mảng con có kích thước n (chunk array).

**Bài 28.** Viết hàm làm phẳng (flatten) một mảng lồng nhau 1 cấp, không dùng `flat()`.

**Bài 29.** Viết hàm tìm phần tử xuất hiện đúng một lần trong mảng mà các phần tử khác đều xuất hiện hai lần.

**Bài 30.** Viết hàm xoay mảng sang phải k vị trí (VD: [1,2,3,4,5] xoay 2 → [4,5,1,2,3]).

### Nhóm D: Object, Điều kiện & Bài toán ứng dụng nhỏ (31–40)

**Bài 31.** Viết hàm gộp hai object, nếu trùng key thì lấy giá trị của object thứ hai.

**Bài 32.** Viết hàm lấy danh sách các key có giá trị là số từ một object bất kỳ.

**Bài 33.** Viết hàm chuyển một mảng object `[{id, name}]` thành object tra cứu nhanh theo id (`{id: {id, name}}`).

**Bài 34.** Viết hàm tính tổng tiền hóa đơn từ mảng sản phẩm `{name, price, quantity}`, áp dụng giảm giá 10% nếu tổng trên 500.000đ.

**Bài 35.** Viết hàm kiểm tra năm có phải năm nhuận không.

**Bài 36.** Viết hàm chuyển số thành chữ số La Mã (trong khoảng 1–3999).

**Bài 37.** Viết hàm tạo lịch đếm ngược đơn giản: nhận số ngày còn lại, trả về chuỗi mô tả ("còn 3 ngày", "hôm nay", "đã qua 2 ngày").

**Bài 38.** Viết hàm phân loại danh sách sinh viên theo học lực dựa trên điểm, trả về object nhóm theo loại (`{Gioi: [...], Kha: [...]}`).

**Bài 39.** Viết hàm kiểm tra một mảng có phải là "tam giác hợp lệ" không — tức 3 số bất kỳ trong mảng 3 phần tử có thể tạo thành tam giác.

**Bài 40.** Viết hàm mô phỏng máy ATM đơn giản: cho số tiền cần rút và mệnh giá có sẵn `[500000, 200000, 100000, 50000]`, trả về số tờ tiền cần dùng cho mỗi mệnh giá (thuật toán tham lam).

---

## 🟡 PHẦN 2: TRUNG BÌNH (Bài 41–75)

### Nhóm E: Đệ quy (41–50)

**Bài 41.** Viết hàm tính giai thừa bằng đệ quy.

**Bài 42.** Viết hàm tính số Fibonacci thứ n bằng đệ quy, sau đó tối ưu bằng memoization.

**Bài 43.** Viết hàm đệ quy tính tổng các phần tử của mảng lồng nhau ở nhiều cấp bất kỳ (deep flatten + sum).

**Bài 44.** Viết hàm đệ quy sinh tất cả các hoán vị (permutations) của một mảng.

**Bài 45.** Viết hàm đệ quy sinh tất cả các tập con (subsets/power set) của một mảng.

**Bài 46.** Viết hàm đệ quy tính lũy thừa `power(base, exp)` với độ phức tạp O(log n) (fast exponentiation).

**Bài 47.** Viết hàm đệ quy đếm số cách leo cầu thang n bậc, mỗi bước leo 1 hoặc 2 bậc.

**Bài 48.** Viết hàm đệ quy giải bài toán Tháp Hà Nội (Tower of Hanoi), in ra các bước di chuyển.

**Bài 49.** Viết hàm đệ quy làm phẳng object lồng nhau thành object 1 cấp với key dạng `"a.b.c"`.

**Bài 50.** Viết hàm đệ quy kiểm tra một chuỗi ngoặc `()[]{}` có hợp lệ không (cân bằng và đúng thứ tự) bằng cách dùng stack.

### Nhóm F: Cấu trúc dữ liệu & thuật toán sắp xếp/tìm kiếm (51–62)

**Bài 51.** Cài đặt thuật toán Bubble Sort từ đầu.

**Bài 52.** Cài đặt thuật toán Selection Sort từ đầu.

**Bài 53.** Cài đặt thuật toán Binary Search trên mảng đã sắp xếp (cả dạng vòng lặp và đệ quy).

**Bài 54.** Cài đặt cấu trúc Stack (dùng mảng) với các phương thức `push, pop, peek, isEmpty`.

**Bài 55.** Cài đặt cấu trúc Queue (dùng mảng) với các phương thức `enqueue, dequeue, front, isEmpty`.

**Bài 56.** Dùng Stack vừa cài đặt ở bài 54 để kiểm tra chuỗi ngoặc hợp lệ (áp dụng lại bài 50 nhưng dùng class Stack).

**Bài 57.** Cài đặt Linked List đơn giản (singly linked list) với các phương thức `add, remove, find, toArray`.

**Bài 58.** Viết hàm sắp xếp mảng object theo nhiều tiêu chí (VD: sắp theo `department`, nếu trùng thì sắp theo `salary` giảm dần).

**Bài 59.** Cài đặt thuật toán Merge Sort (chia để trị).

**Bài 60.** Cài đặt thuật toán Quick Sort (chọn pivot, phân hoạch).

**Bài 61.** Viết hàm tìm k phần tử lớn nhất trong mảng mà không sắp xếp toàn bộ mảng (dùng ý tưởng partial selection).

**Bài 62.** Viết hàm gộp các khoảng thời gian chồng lấn (merge intervals): input `[[1,3],[2,6],[8,10]]` → output `[[1,6],[8,10]]`.

### Nhóm G: Closure, hàm bậc cao & xử lý bất đồng bộ cơ bản (63–70)

**Bài 63.** Viết hàm `counter()` dùng closure để tạo bộ đếm, mỗi lần gọi tăng 1, có `reset()`.

**Bài 64.** Viết hàm `debounce(fn, delay)` — giới hạn số lần gọi hàm, chỉ thực thi sau khi ngừng gọi trong khoảng `delay` ms.

**Bài 65.** Viết hàm `throttle(fn, limit)` — giới hạn hàm chỉ được gọi tối đa 1 lần trong mỗi khoảng `limit` ms.

**Bài 66.** Viết hàm `memoize(fn)` tổng quát — cache kết quả của bất kỳ hàm nào dựa trên tham số đầu vào.

**Bài 67.** Viết hàm `curry(fn)` biến một hàm nhiều tham số thành chuỗi hàm nhận từng tham số một.

**Bài 68.** Viết hàm `pipe(...fns)` và `compose(...fns)` để kết hợp nhiều hàm xử lý theo chuỗi.

**Bài 69.** Viết hàm mô phỏng gọi 3 API tuần tự bằng `Promise` (dùng `setTimeout` giả lập), mỗi API phụ thuộc kết quả API trước.

**Bài 70.** Viết hàm `Promise.all` tự cài đặt lại (`myPromiseAll`) nhận mảng promise, trả về mảng kết quả theo đúng thứ tự.

### Nhóm H: Bài toán ứng dụng logic (71–75)

**Bài 71.** Cho mảng giao dịch `{type: 'income'|'expense', amount}`, viết hàm tính số dư cuối, tổng thu, tổng chi.

**Bài 72.** Viết hàm phân trang (pagination): nhận mảng dữ liệu, số trang, số item/trang → trả về dữ liệu của trang được yêu cầu.

**Bài 73.** Viết hàm tìm hai số trong mảng có tổng bằng một giá trị target cho trước (Two Sum), độ phức tạp O(n).

**Bài 74.** Viết hàm kiểm tra một ma trận vuông (2D array) có phải ma trận đối xứng qua đường chéo chính không.

**Bài 75.** Viết hàm xoay ma trận vuông 90 độ theo chiều kim đồng hồ, tại chỗ (in-place) nếu có thể.

---

## 🔴 PHẦN 3: NÂNG CAO (Bài 76–100)

### Nhóm I: Quy hoạch động — Dynamic Programming (76–85)

**Bài 76.** Bài toán cái túi 0/1 (Knapsack Problem): cho mảng vật phẩm `{weight, value}` và trọng lượng túi tối đa, tìm giá trị lớn nhất có thể mang theo.

**Bài 77.** Bài toán dãy con chung dài nhất (Longest Common Subsequence - LCS) giữa hai chuỗi.

**Bài 78.** Bài toán dãy con tăng dài nhất (Longest Increasing Subsequence - LIS) trong mảng số.

**Bài 79.** Bài toán đổi tiền tối ưu (Coin Change): tìm số lượng tờ tiền ít nhất để đủ một số tiền cho trước, hoặc trả về -1 nếu không thể.

**Bài 80.** Bài toán khoảng cách chỉnh sửa (Edit Distance): tính số phép biến đổi tối thiểu (thêm/xóa/sửa) để biến chuỗi A thành chuỗi B.

**Bài 81.** Bài toán tổng con lớn nhất của dãy con liên tiếp (Maximum Subarray Sum - Kadane's Algorithm).

**Bài 82.** Bài toán đường đi có tổng nhỏ nhất trong ma trận (Minimum Path Sum) chỉ được đi phải hoặc xuống.

**Bài 83.** Bài toán chia mảng thành k phần có tổng gần bằng nhau nhất (Partition Problem, phiên bản đơn giản k=2).

**Bài 84.** Bài toán số cách để tạo thành một tổng từ tập số cho trước, mỗi số dùng không giới hạn (Combination Sum, đếm số cách).

**Bài 85.** Bài toán chuỗi con palindrome dài nhất (Longest Palindromic Substring).

### Nhóm J: Đồ thị & Cây (86–93)

**Bài 86.** Cài đặt duyệt đồ thị theo chiều rộng — BFS, trên đồ thị biểu diễn dạng adjacency list.

**Bài 87.** Cài đặt duyệt đồ thị theo chiều sâu — DFS (cả đệ quy và dùng stack tường minh).

**Bài 88.** Viết hàm phát hiện chu trình (cycle) trong đồ thị có hướng.

**Bài 89.** Viết hàm tìm đường đi ngắn nhất giữa hai đỉnh trong đồ thị không trọng số (dùng BFS).

**Bài 90.** Cài đặt cây nhị phân tìm kiếm (Binary Search Tree) với `insert, search, delete`.

**Bài 91.** Viết hàm duyệt cây nhị phân theo 3 cách: pre-order, in-order, post-order (đệ quy và lặp).

**Bài 92.** Viết hàm kiểm tra một cây nhị phân có cân bằng (balanced) không.

**Bài 93.** Viết hàm sắp xếp topo (topological sort) cho đồ thị có hướng không chu trình (DAG) — ứng dụng: thứ tự học các môn tiên quyết.

### Nhóm K: Tối ưu hiệu năng, thiết kế & bài toán tổng hợp (94–100)

**Bài 94.** Cho một mảng rất lớn (giả lập 1 triệu phần tử), viết và so sánh 2 cách tính tổng: dùng vòng lặp `for` thường và dùng `reduce()`. Đo thời gian thực thi bằng `performance.now()` và giải thích khác biệt.

**Bài 95.** Thiết kế một cấu trúc `LRUCache` (Least Recently Used Cache) với `get(key)` và `put(key, value)`, giới hạn dung lượng, tự động loại bỏ phần tử ít dùng nhất khi đầy — độ phức tạp O(1) cho cả hai thao tác.

**Bài 96.** Viết hàm `deepClone(obj)` tự cài đặt (không dùng `structuredClone` hay `JSON.parse/stringify`), xử lý được object lồng nhau, mảng, và tham chiếu vòng (circular reference).

**Bài 97.** Thiết kế một hệ thống rate limiter đơn giản: cho phép tối đa N request trong mỗi cửa sổ thời gian T giây (sliding window), viết hàm `isAllowed()`.

**Bài 98.** Cho danh sách nhân viên với `{id, managerId, name}`, viết hàm dựng lại cây tổ chức (org chart) dạng lồng nhau từ danh sách phẳng này.

**Bài 99.** Viết một event emitter đơn giản từ đầu (`on, off, emit`) tương tự Node.js `EventEmitter`, hỗ trợ nhiều listener cho cùng một sự kiện.

**Bài 100.** Bài toán tổng hợp: Thiết kế và cài đặt một hệ thống đặt phòng khách sạn đơn giản trong bộ nhớ — gồm các phòng, mỗi phòng có các khoảng ngày đã đặt; viết hàm kiểm tra phòng trống trong khoảng ngày cho trước, hàm đặt phòng (không cho đặt trùng), và hàm liệt kê tất cả phòng trống trong một khoảng ngày. Yêu cầu tổ chức code rõ ràng bằng class hoặc module.

---

## Gợi ý cách luyện tập hiệu quả

1. **Không nhìn đáp án ngay** — dành ít nhất 10–15 phút suy nghĩ hướng giải trước khi tra cứu.
2. **Viết test case trước khi code** (kể cả input rỗng, âm, trùng lặp, cực lớn) — đây là kỹ năng quan trọng ngang với việc giải đúng.
3. **Sau khi giải xong, tự hỏi**: độ phức tạp thời gian/không gian là gì? Có cách nào tối ưu hơn không?
4. **Với các bài từ 76 trở đi**, hãy thử giải bằng brute-force trước, sau đó mới tối ưu bằng DP/thuật toán chuyên biệt — việc thấy được *tại sao* cần tối ưu quan trọng hơn việc thuộc lòng công thức.
5. Có thể làm theo thứ tự nhóm, hoặc chọn ngẫu nhiên mỗi ngày 2–3 bài xen kẽ độ khó để luyện phản xạ.
