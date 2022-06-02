// BAI 1 
/** 
    - đầu vào,
        + lương 1 ngày 
        + số ngày làm 
    - xử lý ,
        + tạo biến lương 1 ngày gắn giá trị là  100000
        + tạo biến số ngày làm gắn giá trị là 17
        + tổng lương = Luong1Ngay * SoNgayLam

    -đầu ra.
     tổng lương =?

*/

var username = "BAI TAP 1";
console.log(username);

var Luong1Ngay = 100000;
console.log("Luong1Ngay: " + Luong1Ngay);

var SoNgayLam = 17;
console.log("SoNgayLam: " + SoNgayLam);

var CongThucTinh = "Luong1Ngay * SoNgayLam";
console.log("cong thuc tinh: " + CongThucTinh);

CongThucTinh = Luong1Ngay * SoNgayLam
console.log("tong luong: " + CongThucTinh + " vnd");

// BAI 2 
/**
    -đầu vào
        + munber 1
        + munber 2
        + munber 3
        + munber 4
        + munber 5
    - xử lý . 
        + tạo biến number1 gán giá trị bằng 4
        + tạo biến number1 gán giá trị bằng 2
        + tạo biến number1 gán giá trị bằng 9
        + tạo biến number1 gán giá trị bằng 7
        + tạo biến number1 gán giá trị bằng 9

        giá trị trung bình = (number1 + number2 + number3 + number4 + number5)/5
    
    -đầu ra.
        Gía trị trung hình = ?


 */
var username2 = "BAI TAP 2"
console.log(username2);

var number1 = 4;
console.log("gia tri 1 la: " + number1);

var number2 = 2;
console.log("gia tri 2 la: " + number2);

var number3 = 9;
console.log("gia tri 3 la: " + number3);

var number4 = 7;
console.log("gia tri 4 la: " + number4);

var number5 = 9;
console.log("gia tri 5 la: " + number5);

var trungBinh = "(number1 + number2 + number3 + number4 + number5)/5";
console.log("cong thuc tinh =" + trungBinh);

trungBinh = (number1 + number2 + number3 + number4 + number5)/5;
console.log("gia tri trung binh: " + trungBinh);
 
// BAI 3 
/**
    - đầu vào.
        + giá 1 usd
        + đồng usd
    - xử lý 
        +  tạo biến giá 1 usd gắn giá trị là 23500
        + tạo biến đồng USD gắn giá trị là 2
        + giá trị quy đổi = gia1Usd * USD
    - đầu ra.
        + giá trị quy đổi = ?

 */
var username3 = "BAI TAP 3"
console.log(username3);

var gia1Usd = 23500;
console.log("gia 1 usd =" + gia1Usd + " vnd");

var USD = 2 ;
console.log("usd = " + USD + "$");

var giaTriQuyDoivnd = "gia1Usd * USD";
console.log("gia tri = " + giaTriQuyDoivnd);

giaTriQuyDoivnd = gia1Usd * USD;
console.log("gia tri quy doi = " + giaTriQuyDoivnd + "vnd");

// BAI 4 
/**
     - đầu vào.
        + a
        + b
    - xử lý.
        - tạo biến cạnh a gán giá trị là 4
        - tạo biến cạnh b gán giá trị là 7
        - diện tích = a * b
        - chu vi = ( a + b ) * 2
    - đầu ra.
        - diện tích = ?
        chu vi= ?
 */
var username4 = "BAI TAP 4"
console.log(username4);

var a = 4;
console.log("chieu dai= " + a);

var b = 7;
console.log("chieu rong= "+ b);

var dienTich = "chieu dai * chieu rong";
console.log("dien tich ="+ dienTich);

dienTich = a * b;
console.log("dien tich = " + dienTich );

var chuVi = "(chieu dai + chieu rong)*2";
console.log("chu vi =" + chuVi );

chuVi = ( a + b ) * 2;
console.log("chu vi =" + chuVi);

// BAI 5 
/**
    - đầu vào.
        + number6
        + number7
        + number8
    - xử lý.
        -tạo biến nunber6 gán giá trị là 12
        -tạo biến nunber7 gán giá trị là 44
        -tạo biến nunber8 gán giá trị là 83
        
        + Tach lay hang chuc => number6 % 10 / 10 => lam tron so Math.floor( number6 % 10 / 10)
        + Tach lay hang don vi => number6 % 10
        + tong =  hang chuc + don vi
    - đầu ra.
        +Tổng = ?



 */
var username5 = "BAI TAP 5"
console.log(username5);

var number6 = 12;
console.log("number6=" + number6);
var number7 = 44;
console.log("number7=" + number7);
var number8 = 83;
console.log("number8=" + number8);
var tongnumber6 = 0;
var tongnumber7 = 0;
var tongnumber8 = 0;

var hangChuc = Math.floor(number6 / 10);
console.log("hangchucnumber6 =" + hangChuc);

var hangDonVi = number6 % 10;
console.log("donvinumber6 =" + hangDonVi);

tongnumber6 = hangChuc + hangDonVi;
console.log("tong number6 =" + tongnumber6);
// tuong tu cac so tiep theo nhu tren 
var hangChuc = Math.floor(number7 / 10);
console.log("hangchucnumber7 =" + hangChuc);

var hangDonVi = number7 % 10;
console.log("donvinumber7 =" + hangDonVi);

tongnumber7 = hangChuc + hangDonVi;
console.log("tong number7 =" + tongnumber7);

var hangChuc = Math.floor(number8 / 10);
console.log("hangchucnumber8 =" + hangChuc);

var hangDonVi = number8 % 10;
console.log("donvinumber8 =" + hangDonVi);

tongnumber8 = hangChuc + hangDonVi;
console.log("tong number8 =" + tongnumber8);