let Group7_Name = ['Chokjaroen', 'Charidaporn', 'Thanakrit', 'Tawan', 'Kanjanaporn']; // สร้าง Array Group7_Name ขึ้นมาเพื่อเก็บชื่อสมาชิกในกลุ่ม
console.log(Group7_Name); // console.log เพื่อแสดง Array Group7_Name
Group7_Name.fill('INT201'); // เรียกใช้ function fill() parameter ที่ใส่เข้าไปเป็น value: 'INT201'
console.log(Group7_Name); // console.log เพื่อแสดง Array Group7_Name หลังจากที่ทำการใช้ function fill
// ถ้าใช้คำสั่ง function fill แล้วใส่แค่ parameter value มันจะเข้าไปเปลี่ยน element ทุกตัวใน array นั้นๆให้เป็นค่าที่เราใส่ลงไป (INT201)

let Group7_Info = [
    { id: '63130500005', firstname: 'Kanjanaporn' },
    { id: '63130500018', firstname: 'Charidaporn' },
    { id: '63130500024', firstname: 'Chokjaroen' },
    { id: '63130500041', firstname: 'Tawan' },
    { id: '63130500045', firstname: 'Thanakrit' }
]; // สร้าง Array Group7_Info ขึ้นมาเพื่อเก็บ Object ของสมาชิกในกลุ่ม (รหัสนักศึกษา , ชื่อ)
console.log(Group7_Info); // console.log เพื่อแสดง Array Group7_Info
Group7_Info.fill({ id: '99999999999', firstname: 'INT201' }, 2); // เรียกใช้ function fill() parameter ที่ใส่เข้าไปเป็น value: {id:'99999999999',firstname:'INT201'} และ start: 2
console.log(Group7_Info); // console.log เพื่อแสดง Array Group7_Id หลังจากที่ทำการใช้ function fill
// ถ้าใช้ function fill แล้วใส่ parameter value , start ตัว function จะเข้าไปเปลี่ยน element ทุกตัวใน array นั้นๆให้เป็นค่าที่เราใส่ลงไป ({id:'99999999999',firstname:'INT201'}) โดยจะเริ่มจาก index ที่ start (2)

let Group7_Function = [
    () => "Hello! From 1st Function :)",
    () => "Hi! From 2nd Function :D",
    () => "Greeting! From 3rd Function :P",
    () => "Sawaddee! From 4th Function :O",
    () => "Ayo! From 5th Function XD"]; // สร้าง Array Group7_Function ขึ้นมาเพื่อเก็บ anonymous function
console.log(Group7_Function); // console.log เพื่อแสดง Array Group7_Function
Group7_Function.fill(() => "Fill! Function :X", 2, 4); // เรียกใช้ function fill() parameter ที่ใส่เข้าไปเป็น value: 'INT201' , start: 2 และ end: 4
console.log(Group7_Function); // console.log เพื่อแสดง Array Group7_Function หลังจากที่ทำการใช้ function fill
// ถ้าใช้ function fill แล้วใส่ parameter value , start , end ตัว function จะเข้าไปเปลี่ยน element ทุกตัวใน array นั้นๆให้เป็นค่าที่เราใส่ลงไป (() => "Fill! Function :X") โดยจะเริ่มจาก index ที่ start (2) จนถึง index ที่ end (4)
console.log(Group7_Function[0]()); // console.log เพื่อแสดง Hello! From 1st Function :)
console.log(Group7_Function[1]()); // console.log เพื่อแสดง Hi! From 2nd Function :D
console.log(Group7_Function[2]()); // console.log เพื่อแสดง Fill! Function :X
console.log(Group7_Function[3]()); // console.log เพื่อแสดง Fill! Function :X
console.log(Group7_Function[4]()); // console.log เพื่อแสดง Ayo! From 5th Function XD
Group7_Function.fill(() => "Fill! Function :X", 0, 7); // ในกรณีที่ใส่ end เกินจำนวนขนาดของ array ตัว function fill ก็จะ fill จนถึงขนาดสูงสุดของ array

/* find function syntax
find((element) => { ... } ) element = ค่าที่เราต้องการจะหา
find((element, index) => { ... } ) index = ตำแหน่ง index ของค่าตัวนั้นๆ
find((element, index, array) => { ... } ) array = array ที่เราต้องการจะหา
*/

const Group7_Id = [63130500005, 63130500018, 63130500024, 63130500041, 63130500045]; // สร้าง Array Group7_Id ขึ้นมาเพื่อเก็บรหัสนักศึกษา
console.log(Group7_Id); // console.log เพื่อแสดง Array Group7_Id
const findId = Group7_Id.find(element => element > 63130500018); // สร้างตัวแปร findId แล้วเรียกใช้ function find ของ array Group7_Id โดยกำหนดสิ่งที่เราต้องการจะ find คือ id ที่มากกว่า 63130500018
console.log(findId); // console.log เพื่อแสดง findId (ผลออกมาเป็น 63130500024 เพราะ function find จะทำจนกว่าจะ true แล้วจะเอามาแค่ค่าเดียวซึ่งก็คือ 63130500024 เพราะมันมากกว่า 63130500018)

const findH = Group7_Id.find((element, index) => index > 3); // สร้างตัวแปร findH แล้วเรียกใช้ function find ของ array Group7_Id โดยกำหนดสิ่งที่เราต้องการจะ find คือ index ที่มากกว่า 3
console.log(findH); // console.log เพื่อแสดง findH (ผลออกมาเป็น 63130500045 เพราะ function find จะทำจนกว่าจะ true แล้วจะเอาแค่ค่าเดียวซึ่งก็คือ 63130500045 (เพราะเป็น index ที่ 4 มันมากกว่า 3))

const find = Group7_Id.find((element, index, array) => { // สร้างตัวแปร find แล้วเรียกใช้ function find ของ array Group7_Id โดยกำหนดสิ่งที่เราต้องการจะ find คือ element ที่มีค่ามากกว่า 63130500005 และมี index ที่มากกว่า 2
    console.log(array); // console.log เพื่อแสดง Array array
    return element > 63130500005 && index > 2;
});
console.log(find); // console.log เพื่อแสดง find (ผลออกมาเป็น 63130500041 เพราะ function find จะทำจนกว่า true แล้วจะเอาแค่ค่าเดียวซึ่งก็คือ 63130500018 แต่มันไม่เข้าเงื่อนไขที่ว่า index จะต้องมากกว่า 2 ฉนั้นมันเลยหาไปเรื่อยๆ จนกว่า index จะมากกว่า 2 ซึ่งก็คือ 63130500041 (index ที่ 3))























// let Group7_name = ['a', 'b', 'c'];
// console.log(Group7_name);

// Group7_name.fill('cat');
// console.log(Group7_name);

// let Group7_Info = [
//   { name:'a', kind: 'cat'},
//   { name:'b', kind: 'dog'},
//   { name:'c', kind: 'ermine'}
// ];

// //console.log(Group7_Info);

// Group7_Info.fill({name: 'd', kind: 'human'},2)
// console.log(Group7_Info);

// let Group7_function = [
//     () => 'Hello',
//     () => 'Hi',
//     () => 'Hey'
// ]
// console.log(Group7_function)
// Group7_function.fill(() => "use fill method",2,3);
// console.log(Group7_function);

// console.log(Group7_function[0]());
// console.log(Group7_function[1]());
// console.log(Group7_function[2]());

// Group7_function.fill(() => "FILL FUNCTION",0,7)
// console.log(Group7_function[3]());

// const groupid = [1,2,3,4,5]
// console.log(groupid)

// const findId = groupid.find(element => element > 2)
// console.log(findId);

// const findIndex = groupid.find((element,index) => index > 3)
// console.log(findIndex);

// const findeia = groupid.find((element,index,array) => 
// {
//   return element > 2 && index > 2;
// })
// console.log(findeia);