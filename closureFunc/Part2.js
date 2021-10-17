import { whohaveloweststudentid } from "./Part1.js"; // import ฟังก์ชั่น whohaveloweststudentid จาก Part1.js 

let Group7_Id = [5, 18, 24, 41, 45]; // สร้าง Array Group7_Id เก็บรหัส 3 ตัวสุดท้ายแบบไม่นับเลข 0 (005 = 5 , 018 = 18, 024 = 24 , 041 = 41, 045 = 45)
let Group8_Id = [12, 22, 35, 37, 47]; // สร้าง Array Group8_Id เก็บรหัส 3 ตัวสุดท้ายแบบไม่นับเลข 0 (012 = 12 , 022 = 22, 035 = 35 , 037 = 37, 047 = 47)
let Group9_Id = [27, 38, 54, 48, 25]; // สร้าง Array Group9_Id เก็บรหัส 3 ตัวสุดท้ายแบบไม่นับเลข 0 (027 = 27 , 038 = 38, 054 = 54 , 048 = 48, 025 = 25)

whohaveloweststudentid(Group7_Id)(); // Case 1 : เรียกใช้ฟังก์ชั่น whohaveloweststudentid แล้วใส่ Group7_Id ไปใน Parameter เพื่อหาเลขรหัสที่น้อยที่สุด
whohaveloweststudentid(Group8_Id)(); // Case 2 : เรียกใช้ฟังก์ชั่น whohaveloweststudentid แล้วใส่ Group8_Id ไปใน Parameter เพื่อหาเลขรหัสที่น้อยที่สุด
whohaveloweststudentid(Group9_Id)(); // Case 3 : เรียกใช้ฟังก์ชั่น whohaveloweststudentid แล้วใส่ Group9_Id ไปใน Parameter เพื่อหาเลขรหัสที่น้อยที่สุด