let student = [
    { id: "001", gpax: 3.5, department: "CS" },
    { id: "002", gpax: 3.8, department: "IT" },
    { id: "003", gpax: 3.2, department: "DSI" },
];

let checkGpax = (std) => { //สร้างฟังก์ชันเก็บใน checkGpax
    return std.gpax >= 3.5; // return ค่าที่ได้จากการเปรียบเทียบ โดยเข้าถึง gpax (property value) ของ param ที่ส่งมา
};
let checkDepart = (std) => { //สร้างฟังก์ชันเก็บใน checkDepart
    return std.department.toLowerCase() == "cpe"; // return ค่าที่ได้จากการเปรียบเทียบ โดยเข้าถึง department (property value) ของ param ที่ส่งมา

};

let checkId = (std) => { //สร้างฟังก์ชันเก็บใน checkId
    return std.id == "001"; // return ค่าที่ได้จากการเปรียบเทียบ โดยเข้าถึง id (property value) ของ param ที่ส่งมา

};

// arrow function
console.log(
    student.some((std) => {
        return std.gpax >= 3.5; //แสดงค่าtrueเพราะใช้some หากมีค่าใดตรงกับเงื่อนไข จะทำให้return true ทันที
    })
);

console.log(
    student.some((std) => {
        return std.id == "002"; // return ค่าที่ได้จากการเปรียบเทียบ โดยเข้าถึง id (property value) ของ param ที่ส่งมา
    })
);

console.log(
    student.some((std) => {
        return std.department.toLowerCase() == "it"; // return ค่าที่ได้จากการเปรียบเทียบ โดยเข้าถึง department (property value) ของ param ที่ส่งมา
    })
);

// callback function
console.log(student.some(checkGpax)); //true
console.log(student.some(checkDepart)); //false
console.log(student.some(checkId)); //true