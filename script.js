// //Task1
let data = [
        {name: 'daniel', age: 45},
        {name: 'john', age: 34},
        {name: 'robert', age: null},
        {name: 'jen', age: undefined},
        {name: null, age: undefined}];
// console.log(data);

const filteredData = data.filter(function(item) {
    return item.age != null && item.age != undefined && item.name != null;
  });
  
  console.log(filteredData);




// // Task2
const students = [
    { name: "Leyla", points: 500 },
    { name: "Akif", points: 500 },
    { name: "Fikret", points: 3000 },
    { name: "Rashad", points: 500 },
    { name: "Turkan", points: 1900 },
    { name: "Sabir", points: 1000 },
    { name: "Idris", points: 340 },
    { name: "Nijat", points: 940 },
    { name: "Ismet", points: 1780 },
  ];
  let newStudents = students.map((student)=> {
        return {
            name: student.name,
            points: student.points+30
        }
    })
console.log(newStudents);







// // Task3

let numbers = [1.5, 2.56, 5.1, 12.33];
// one way
let num=numbers.map(Math.round); 
console.log(num);


// // two way
for (let i = 0; i < numbers.length; i++) {
    numbers[i] = Math.round(numbers[i]);
}
console.log(numbers);









// Task4

let bdays = ['08-14', '10-04', '04-21', '08/14', '10/04', '04/21'];
var bdays2 = bdays.map(function(elem) {
    return elem.replace('-', '/');
    });
console.log(bdays2);



// //Task5

//one way
const b = "5,4,3,2,1";

// One way
let array1=b.split(",");
// console.log(array1);
// console.log(typeof(array1));

var sum = array1.reduce(function (x, y) {
    return +x + +y;
}, 0);

console.log( sum);



// //Two way
function sumStr(str){
    let strArr = str.split(",");
    let sum = strArr.reduce(function(total, num){
      return parseFloat(total) + parseFloat(num);
    });

    return sum;
}
console.log(sumStr(b));
