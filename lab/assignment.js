// ## CƠ BẢN
// 1. Viết hàm tính chu vi hình chữ nhật
// 2. Viết hàm tính diện tích hình chữ nhật
// 3. Viết hàm xuất ra n số lẻ nhỏ nhất
// 4. Viết hàm xuất ra n số lẻ gần nhất bắt đầu từ m.
// 5. Viết hàm kiểm tra một số có phải là số nguyên tố hay không? Biết số nguyên tố là số chia hết cho một và chính nó.
// 6.  Viết hàm xuất ra n số nguyên tố nhỏ nhất.
// 7. Viết hàm trả ra danh sách tất cả số nhỏ hơn n
//     - getLessThan(n): number[]
//     - Ví dụ getLessThan(3) sẽ trả ra mảng [0,1,2]
// 8. Viết hàm tìm ra vị trí phần tử đầu tiên nằm trong mảng
//     - find(arr, chuoiCanTim): number
//     - Ví dụ find([1,2,3,2,5], 2) sẽ trả ra vi tri 1
// 9.Viết hàm tìm ra tất cả vị trí phần tử nằm trong mảng
//     - filter (arr, chuoiCanTim): number
//     - Ví dụ filter([1,2,3,2,5], 2) sẽ trả ra vi tri [1, 3]
// 10. Định nghĩa một mảng nhân viên gồm 2 thông tin: họ tên, tuổi bao gồm 5 nhân viên
// 11. Viết hàm sắp xếp tuổi nhân viên giảm dần
//     - sortDesc(arr): arr
//     - Ví dụ sortDesc([{name: 'hieu', age: 30}, {name:'tuan', age: 40}]) sẽ trả ra kết quả [{name:'tuan', age: 40}, {name: 'hieu', age: 30}]
// 12. Tìm trong mảng nhân viên có tuổi = x
//     - find(arr, age: number): nhan_vien
//     - Ví dụ find([{name: 'hieu', age: 30}, {name:'tuan', age: 40}], 40) => sẽ trả ra kết quả {name:'tuan', age: 40}

// ## GIẢI THUẬT: ĐỆ QUY, TÌM KIẾM, SẮP XẾP
// 1. (1 điểm) Viết hàm xuất ra số finbonaci tại vị trí n
//     - finbonaci(n): number
//     - Đầu vào là vị trí n
//     - Đầu ra là giá trị số finbonaci tại vị trí n
//     - Ví dụ: Day finbonaci la: 1 1 2 3 5 8 thì finbonaci(5) = 5

// 2. (1 điểm) Tính giai thừa của n. Biết rằng n! = 1*2*3*....*n
//     - giaiThua(n): number

// 3. (1 điểm) Viết thuật toán sắp xếp bubble sort
//     - function bubbleSort(arr: number[]): number[]
//     - Đầu vào là một mảng các số
//     - Đầu ra là một mảng các số đã được sắp xếp

// 4. (1 điểm) Cho mang [5,4,2,7,6] sử dụng hàm bubbleSort để sắp xếp lại và trả ra kết quả

// 5. (1 điểm) Viết thuật toán tìm kiếm tuần tự
//     - function linearSearch(arr, soCanTim): number
//     - Đầu vào là một mảng các số & số cần tìm
//     - Đầu ra là vị trí số cần tìm

// 6. (1 điểm) Cho mang [5,4,2,7,6] sử dụng hàm linearSearch để tìm vị trí số 6 trong mảng

// 7. (2 điểm) Viết thuật toán tìm kiếm nhị phân
//     - function binarySearch(arr, soCanTim): number
//     - Đầu vào là một mảng các số & số cần tìm
//     - Đầu ra là vị trí số cần tìm

// 8. (1 điểm) Cho mang [5,4,2,7,6]
//     - Sử dụng hàm bubbleSort để sắp xếp lại
//     - Sử dụng hàm binarySearch để tìm ra vị trị số 7 trong mảng

// 9. (1 điểm) Tạo ra mảng từ 1 -> 1048576 tăng dần từ nhỏ tới lớn.
//     - Sử dụng hàm binarySearch để tìm ra vị trị số 1048576 trong mảng, in ra màn hình số lần so sánh của thuật toán
//     - 1048576 = 2 ^ 20 => Kiểm tra xem số lần so sánh có phải bằng 20 không?

// ## CẤU TRÚC DỮ LIỆU
// 1. Xây dựng cấu trúc dữ liệu danh sách liên kết đôi (double-linked list)
// 2. Lưu trữ danh sách các số 1,4,7,8 vào danh sách liên kết
// 3. Viết hàm thêm một phần tử vào đầu danh sách
// 4. Thêm 9 vào cuối danh sách đã có
// 5. Viết hàm thêm phần tử vào đầu danh sách
// 6. Thêm 5 vào đầu danh sách đã có
// 7. Viết hàm xóa phần tử ở đầu danh sách & trả ra giá trị bị xóa
// 8. Xóa phần tử đầu tiên ra khỏi danh sách đã có, và in ra màn hình giá trị của phần tử đó
// 9. Viết hàm xóa phần tử cuối cùng danh sách & trả ra giá trị bị xóa
// 10. Xóa phần cuối cùng ra khỏi danh sách đã có, và in ra màn hình giá trị của phần tử đó

// 11. Xây dựng cấu trúc dữ liẹu queue bằng cấu trúc dữ liệu danh sách liên kết đã xây dựng từ trước
// 12. Viết hàm thêm phần tử vào queue: function enQueue(value)
// 13. Thêm các phần 1,3,6,7 vao queue
// 14. Viết hàm lấy phần tử ra khỏi queue: function deQueue(): value

// 15. Xây dựng cấu trúc dữ liẹu stack bằng cấu trúc dữ liệu danh sách liên kết đã xây dựng từ trước
// 16. Viết hàm thêm phần tử vào stack: function push(value)
// 17. Thêm các phần 1,3,6,7 vao stack
// 18. Viết hàm lấy phần tử ra khỏi stack: function pop(): value

// 1. Viết hàm tính chu vi hình chữ nhật
function chuViHCN(a, b) {
  var chuvi = a + b;
  return chuvi;
}
console.log("chu vi");
console.log(chuViHCN(2, 3));

// 2. Viết hàm tính diện tích hình chữ nhật

function dientichHCN(a, b) {
  var dienTich = a * b;
  return dienTich;
}
console.log("dien tich hcn la:", dientichHCN(2, 3));
// 3. Viết hàm xuất ra n số lẻ nhỏ nhất

function soLeNN(n) {
  var mang = [];
  for (var i = 1; i < n; i += 2) {
    if (i % 2 != 0) {
      mang.push(i);
    }
  }
  return mang;
}
console.log(" so  le nn: ", soLeNN(20));
// 4. Viết hàm xuất ra n số lẻ gần nhất bắt đầu từ m.

function soLeNNtum(n, m) {
  var mang = [];
  for (var i = m; i < n; i += 2) {
    if (i % 2 != 0) {
      mang.push(i);
    }
  }
  return mang;
}

console.log("so nguyen le bat dau tu m");
console.log(soLeNNtum(10, 2));

// 5. Viết hàm kiểm tra một số có phải là số nguyên tố hay không? Biết số nguyên tố là số chia hết cho một và chính nó.

function soNguyenTo(n) {
  var isNguyenTo = true;
  if (n < 2) {
    isNguyenTo = true;
  } else if (n == 2) {
    isNguyenTo = true;
  } else if (n % 2 == 0) {
    isNguyenTo = false;
  } else {
    for (let i = 3; i < n; i += 2) {
      if (n % i == 0) {
        isNguyenTo = false;
      }
    }
  }
  if (isNguyenTo) {
    console.log(n, "la so nguyen to");
  } else {
    console.log(n, "khong phai la so nguyen to");
  }
}
soNguyenTo(7);
// 6.  Viết hàm xuất ra n số nguyên tố nhỏ nhất.
function soNguyenToNhoNhat(n) {
  arr = [];
  for (let i = 0; i < n; i++) {
    soNguyenTo(i);
    arr.push(i);
  }
  return arr;
}
console.log("n so nguyen to ");
soNguyenToNhoNhat(10);

// 7. Viết hàm trả ra danh sách tất cả số nhỏ hơn n
//     - getLessThan(n): number[]
//     - Ví dụ getLessThan(3) sẽ trả ra mảng [0,1,2]

function getLessThan(n) {
  var mang = [];
  for (var i = 0; i < n; i++) {
    mang.push(i);
  }
  return mang;
}
console.log("so nho hon");
console.log(getLessThan(3));
// 8. Viết hàm tìm ra vị trí phần tử đầu tiên nằm trong mảng
function findFirstItem(arr) {
  var firstItem = arr[0];
  console.log(firstItem);
  return firstItem;
}
var arr = [2, 1, 6, 8, 9, 10];
console.log("vi tri dau tien");
findFirstItem(arr);

//     - find(arr, chuoiCanTim): number
//     - Ví dụ find([1,2,3,2,5], 2) sẽ trả ra vi tri 1
// 9.Viết hàm tìm ra tất cả vị trí phần tử nằm trong mảng
function timViTri(arr, n) {
  var arr1 = [];
  arr.map((item, index) => {
    if (item == n) {
      arr1.push(index);
    }
  });
  return arr1;
}
console.log("vi tri");
console.log(timViTri(arr, 1));
//     - filter (arr, chuoiCanTim): number
//     - Ví dụ filter([1,2,3,2,5], 2) sẽ trả ra vi tri [1, 3]
// 10. Định nghĩa một mảng nhân viên gồm 2 thông tin: họ tên, tuổi bao gồm 5 nhân viên
// 11. Viết hàm sắp xếp tuổi nhân viên giảm dần
//     - sortDesc(arr): arr
//     - Ví dụ sortDesc([{name: 'hieu', age: 30}, {name:'tuan', age: 40}]) sẽ trả ra kết quả [{name:'tuan', age: 40}, {name: 'hieu', age: 30}va]
var student = [
  { name: "tuan", age: 40 },
  { name: "hieu", age: 30 },
];
function sort(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i].age < arr[j].age) {
        let temp = 0;
        arr[j].age = arr[i].age;
        arr[i].age = temp;
      }
    }
  }
  return arr;
}

console.log("sort tuoi", sort(student));
// 12. Tìm trong mảng nhân viên có tuổi = x
//     - find(arr, age: number): nhan_vien
// - Ví dụ find([{name: 'hieu', age: 30}, {name:'tuan', age: 40}], 40) => sẽ trả ra kết quả {name:'tuan', age: 40}
function findAge(arr, n) {
  arr.map((item, index) => {
    if (item.age == n) {
      console.log(item);
    }
  });
}
console.log("tim tuoi");
findAge(student, 40);

// 1. (1 điểm) Viết hàm xuất ra số finbonaci tại vị trí n
//     - finbonaci(n): number
//     - Đầu vào là vị trí n
//     - Đầu ra là giá trị số finbonaci tại vị trí n
//     - Ví dụ: Day finbonaci la: 1 1 2 3 5 8 thì finbonaci(5) = 5

const fibonacci = (num) => {
  if (num == 1 || num == 2) {
    return 1;
  }
  if (num > 2) {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
};
console.log(fibonacci(10));

// 2. (1 điểm) Tính giai thừa của n. Biết rằng n! = 1*2*3*....*n
//     - giaiThua(n): number

const giaiThua = (num) => {
  if (num > 0) {
    return num * giaiThua(num - 1);
  }
  return 1;
};
console.log(giaiThua(3));
// 3. (1 điểm) Viết thuật toán sắp xếp bubble sort
//     - function bubbleSort(arr: number[]): number[]
//     - Đầu vào là một mảng các số
//     - Đầu ra là một mảng các số đã được sắp xếp

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = 0;
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
};

// 4. (1 điểm) Cho mang [5,4,2,7,6] sử dụng hàm bubbleSort để sắp xếp lại và trả ra kết quả
let array = [5, 4, 2, 7, 6];
bubbleSort(array);
console.log(array);
// 5. (1 điểm) Viết thuật toán tìm kiếm tuần tự
//     - function linearSearch(arr, soCanTim): number
//     - Đầu vào là một mảng các số & số cần tìm
//     - Đầu ra là vị trí số cần tìm

const find = (arr, soCanTim) => {
  arr.map((x, index) => {
    if (x == soCanTim) {
      console.log("vi tri thu", x, "la:", index);
    }
  });
};
// 6. (1 điểm) Cho mang [5,4,2,7,6] sử dụng hàm linearSearch để tìm vị trí số 6 trong mảng
let array2 = [5, 4, 2, 7, 6];
find(array2, 6);
// 7. (2 điểm) Viết thuật toán tìm kiếm nhị phân
//     - function binarySearch(arr, soCanTim): number
//     - Đầu vào là một mảng các số & số cần tìm
//     - Đầu ra là vị trí số cần tìm
const binarySearch = (array3, value) => {
  let start = 0;
  let end = array3.length - 1;
  let count = 0;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    count++;

    if (array3[mid] == value) {
      console.log("count", count);
      return mid;
    }
    if (value < array3[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return -1;
};

// 8. (1 điểm) Cho mang [5,4,2,7,6]
//     - Sử dụng hàm bubbleSort để sắp xếp lại
//     - Sử dụng hàm binarySearch để tìm ra vị trị số 7 trong mảng
let arr = [5, 4, 2, 7, 6];
console.log(binarySearch(arr, 7));
// 9. (1 điểm) Tạo ra mảng từ 1 -> 1048576 tăng dần từ nhỏ tới lớn.
//     - Sử dụng hàm binarySearch để tìm ra vị trị số 1048576 trong mảng, in ra màn hình số lần so sánh của thuật toán
//     - 1048576 = 2 ^ 20 => Kiểm tra xem số lần so sánh có phải bằng 20 không?
let arr2 = [];
for (let i = 0; i < 1048576; i++) {
  arr2.push(i);
}
console.log(binarySearch(arr2, 1048575));

// ## DANH SÁCH LIÊN KẾT
// 1. Xây dựng cấu trúc dữ liệu danh sách liên kết đôi (double-linked list)
// 2. Lưu trữ danh sách các số 1,4,7,8 vào danh sách liên kết
// 3. Viết hàm thêm một phần tử vào đầu danh sách
// 4. Thêm 9 vào cuối danh sách đã có
// 5. Viết hàm thêm phần tử vào đầu danh sách
// 6. Thêm 5 vào đầu danh sách đã có
// 7. Viết hàm xóa phần tử ở đầu danh sách & trả ra giá trị bị xóa
// 8. Xóa phần tử đầu tiên ra khỏi danh sách đã có, và in ra màn hình giá trị của phần tử đó
// 9. Viết hàm xóa phần tử cuối cùng danh sách & trả ra giá trị bị xóa
// 10. Xóa phần cuối cùng ra khỏi danh sách đã có, và in ra màn hình giá trị của phần tử đó

// ## STACK & QUEUE
// 11. Xây dựng cấu trúc dữ liẹu queue bằng cấu trúc dữ liệu danh sách liên kết đã xây dựng từ trước
// 12. Viết hàm thêm phần tử vào queue: function enQueue(value)
// 13. Thêm các phần 1,3,6,7 vao queue
// 14. Viết hàm lấy phần tử ra khỏi queue: function deQueue(): value
class Node {
  constructor(value) {
    this.next = null;
    this.prev = null;
    this.value = value;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // ; 2. Lưu trữ danh sách các số 1,4,7,8 vào danh sách liên kết
  push(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      let temp = this.tail;

      this.tail = node;
      node.prev = temp;
      temp.next = node;
    }
    this.length++;
    return this;
  }
  // ; 3. Viết hàm thêm một phần tử vào đầu danh sách
  // ; 5. Viết hàm thêm phần tử vào đầu danh sách
  pushIntoHead(value) {
    let node = new Node(value);
    let temp = this.head;
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.head = node;
      node.next = temp;
      temp.prev = node;
    }
    this.length++;
    return this;
  }
  // ; 7. Viết hàm xóa phần tử ở đầu danh sách & trả ra giá trị bị xóa
  deleteFirstNode() {
    let temp = this.head;
    console.log("delete:", temp.value);
    if (!this.head) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = temp.next;
      this.head.prev = null;
      temp.next = null;
    }
    this.length--;
    return this;
  }
  // ; 9. Viết hàm xóa phần tử cuối cùng danh sách & trả ra giá trị bị xóa
  deleteLastNode() {
    let temp = this.tail;
    console.log("delete last node:", temp.value);
    if (!this.head) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = temp.prev;
      this.tail.next = null;
      temp.prev = null;
    }
    this.length--;
    return this;
  }
  getFirst() {
    let temp = this.head;
    return temp.value;
  }
}

let list = new LinkedList();
list.push(1);
list.push(4);
list.push(7);
list.push(8);
list.pushIntoHead(0);
// ; 4. Thêm 9 vào cuối danh sách đã có
// ; 6. Thêm 5 vào đầu danh sách đã có
list.push(9);
// ; 8. Xóa phần tử đầu tiên ra khỏi danh sách đã có, và in ra màn hình giá trị của phần tử đó
list.deleteFirstNode();
// ; 9. Viết hàm xóa phần tử cuối cùng danh sách & trả ra giá trị bị xóa
list.deleteLastNode();
console.log(list);

// ## STACK & QUEUE
// 11. Xây dựng cấu trúc dữ liẹu queue bằng cấu trúc dữ liệu danh sách liên kết đã xây dựng từ trước
// 12. Viết hàm thêm phần tử vào queue: function enQueue(value)
// 13. Thêm các phần 1,3,6,7 vao queue
// 14. Viết hàm lấy phần tử ra khỏi queue: function deQueue(): value

let first = null;
let last = null;
function enQueue(value) {
  let temp = new Node(value);
  if (last == null) {
    first = last = temp;
    return;
  }
  last.next = temp;
  last = temp;
}
function deQueue() {
  if (first == null) {
    return;
  }
  let temp = first;
  console.log("dequeue", temp.value);
  first = first.next;
  if (first == null) {
    last = null;
  }
}

enQueue(10);
enQueue(20);
enQueue(30);
deQueue();
deQueue();

console.log(first.value);
console.log(last.value);
