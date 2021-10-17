// Group 7 Part 1

function whohaveloweststudentid(StudentId = [0]) { // สร้างฟังก์ชั่น whohaveloweststudentid ที่กำหนด Default Parameter เป็น StudentId = [0]

    function findlowestid() { // สร้างฟังก์ชั่น findlowestid
        console.log(Math.min(...StudentId)); // console.log แสดงผลของตัวเลขที่น้อยที่สุดของ StudentId ที่รับเข้ามา
    }
    return findlowestid; // return findlowestid 
}

let Group7_Id = [5, 18, 24, 41, 45]; // สร้าง Array Group7_Id เก็บรหัส 3 ตัวสุดท้ายแบบไม่นับเลข 0 (005 = 5 , 018 = 18, 024 = 24 , 041 = 41, 045 = 45)
let Group9_Id = [27, 38, 54, 48, 25]; // สร้าง Array Group9_Id เก็บรหัส 3 ตัวสุดท้ายแบบไม่นับเลข 0 (027 = 27 , 038 = 38, 054 = 54 , 048 = 48, 025 = 25)

whohaveloweststudentid(Group7_Id)(); // Case 1 : เรียกใช้ฟังก์ชั่น whohaveloweststudentid แล้วใส่ Group7_Id ไปใน Parameter เพื่อหาเลขรหัสที่น้อยที่สุด
whohaveloweststudentid([12, 22, 35, 37, 47])(); // Case 2 : เรียกใช้ฟังก์ชั่น whohaveloweststudentid แล้วใส่ [12, 22, 35, 37, 47] ไปใน Parameter เพื่อหาเลขรหัสที่น้อยที่สุด
whohaveloweststudentid(Group9_Id)(); // Case 3 : เรียกใช้ฟังก์ชั่น whohaveloweststudentid แล้วใส่ Group9_Id ไปใน Parameter เพื่อหาเลขรหัสที่น้อยที่สุด

whohaveloweststudentid()(); // เรียกใช้ฟังก์ชั่น whohaveloweststudentid แต่ไม่ใส่อะไรเข้าไปใน Parameter เลย

// Group 7 Part 2 (Export)
export { whohaveloweststudentid }; // Export ฟังก์ชั่น whohaveloweststudentid 