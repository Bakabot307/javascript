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
