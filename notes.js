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

//select all buttons as nodelist (can use for each)
const buttons = document.querySelectorAll("button");
//make array from buttons if i want to use filter etc.
const newButtons = Array.from(buttons);
//iterate through array and change each buttons color
newButtons.forEach((button) => (button.style.backgroundColor = "blue"));

newButtons.forEach((button) =>
  button.addEventListener("click", function (event) {
    console.log(event.target.textContent);
  })
);

DOMSelectors.container.insertAdjacentHTML(
  "beforeend",
  '<div class="card"><h2 class="card header">${movie.title}</h2></div>'
);

function getRGB() {
  let R = Math.floor(Math.random() * 256);
  let G = Math.floor(Math.random() * 256);
  let B = Math.floor(Math.random() * 256);
  return { R, G, B }; //ends function
}
//create the HTML for inputs, cards and container aka where the cards go

//select/query the HTML form and get values from inputs

//turn values into object Movie, Game, User

//insert card with object into HTML

//add event listener for remove button in JS
