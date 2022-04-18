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
