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
