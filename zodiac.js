let Student = []; // สร้างตัวแปร Student เป็น Array
Student[0] = ({ id: '63130500024', name: 'Chokjaroen Tancharoenrat', YearOfBirth: '2002' });// เพิ่ม Object ใน Array ช่องที่ 0 มี id , name , DateOfBirth
Student[1] = ({id: '63130500005', name: 'Kanjanaporn Chuenmaneerat', YearOfBirth: '2001'}); // เพิ่ม Object ใน Array ช่องที่ 1 มี id , name , DateOfBirth
Student[2] = ({ id: '63130500045', name: 'Thanakrit Cankha', YearOfBirth: '2001' }); // เพิ่มObject ใน Array ช่องที่ 2 มี id, name, DateOfBirth
Student[3] = ({ id: '63130500018', name: 'Charidaporn Chuangdonphai', YearOfBirth: '2002' });// เพิ่ม Object ใน Array ช่องที่ 3 มี id , name , DateOfBirth
Student[4] = ({ id: '63130500041', name: 'Tawan Muadmuenwai', YearOfBirth: '2001' }); // เพิ่มObject ใน Array ช่องที่ 4 มี id, name, DateOfBirth
for (let i = 0; i < Student.length; i++) { // for loop แบบ java ที่เคยเรียนมา
    switch (Student[i].YearOfBirth % 12) { // switch แบบ java ที่เคยเรียนมา
        case 0: console.log(`${Student[i].name} | เกิดวันที่ ${Student[i].YearOfBirth} | ปีนักษัตร : monkey`);break;
        case 1: console.log(`${Student[i].name} | เกิดวันที่ ${Student[i].YearOfBirth} | ปีนักษัตร : rooster`);break;
        case 2: console.log(`${Student[i].name} | เกิดวันที่ ${Student[i].YearOfBirth} | ปีนักษัตร : dog`);break;
        case 3: console.log(`${Student[i].name} | เกิดวันที่ ${Student[i].YearOfBirth} | ปีนักษัตร : pig`);break;
        case 4: console.log(`${Student[i].name} | เกิดวันที่ ${Student[i].YearOfBirth} | ปีนักษัตร : rat`);break;
        case 5: console.log(`${Student[i].name} | เกิดวันที่ ${Student[i].YearOfBirth} | ปีนักษัตร : ox`);break;
        case 6: console.log(`${Student[i].name} | เกิดวันที่ ${Student[i].YearOfBirth} | ปีนักษัตร : tiger`);break;
        case 7: console.log(`${Student[i].name} | เกิดวันที่ ${Student[i].YearOfBirth} | ปีนักษัตร : rabbit`);break;
        case 8: console.log(`${Student[i].name} | เกิดวันที่ ${Student[i].YearOfBirth} | ปีนักษัตร : dragon`);break;
        case 9: console.log(`${Student[i].name} | เกิดวันที่ ${Student[i].YearOfBirth} | ปีนักษัตร : snake`);break;
        case 10: console.log(`${Student[i].name} | เกิดวันที่ ${Student[i].YearOfBirth} | ปีนักษัตร : horse`);break;
        case 11: console.log(`${Student[i].name} | เกิดวันที่ ${Student[i].YearOfBirth} | ปีนักษัตร : sheep`);break;
    }
}