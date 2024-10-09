const DOMSelectors = {
  header: document.querySelector("h1"),
  cardHeader: document.querySelector(".card-header"),
  button: document.querySelector(".btn"),
};
console.button.addEventListener("click", function (event) {
  console.log(event.target.parentElement);
  event.target.parentElement.style.backgroundColor = "red";
});
DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(document.querySelector("input").value);
});

//select all buttons as nodelist (can use for each)
const btns = document.querySelectorAll("btn");
//make array from buttons if i want to use filter etc.
const newbtns = Array.from(btns);
//iterate through array and change each buttons color
newbtns.forEach((btn) => (btn.style.backgroundColor = "blue"));

newbtns.forEach((btn) =>
  btn.addEventListener("click", function (event) {
    console.log(event.target.textContent);
  })
);

DOMSelectors.container.insertAdjacentHTML(
  "beforeend",
  '<div class="card"><h2 class="card header">${movie.title}</h2></div>'
);
