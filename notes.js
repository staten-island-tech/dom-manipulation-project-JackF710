const students = ["Peter", "Christina", "Kim"];
// console.log(students[0]);
students.forEach((student) => console.log(student));

const student = [
  {
    name: "Christina",
    age: 15,
    graduated: false,
  },
  {
    name: "Laith",
    age: 18,
    graduated: True,
  },
  {
    name: "Eyed",
    age: 16,
    graduated: false,
  },
];

//students.forEach((student) => console.log(student.name))

students
  .filter((student) => student.graduated === false)
  .forEach((student) => console.log(student.name));
