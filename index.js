const DOMSelectors = {
  form: document.querySelector(".form"),
  playerCardContainer: document.querySelector(".player-card-container"),
};

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get the input values
  const name = document.getElementById("player-name").value;
  const rating = document.getElementById("player-rating").value;
  const position = document.getElementById("player-position").value;

  // Create a new player card element
  const playerCardHTML = `
    <div class="player-card">
      <h3>${name}</h3>
      <p>Rating: ${rating}</p>
      <p>Position: ${position}</p>
    </div>
  `;

  // Insert the new player card into the container
  DOMSelectors.playerCardContainer.insertAdjacentHTML(
    "beforeend",
    playerCardHTML
  );

  // Clear the form fields
  DOMSelectors.form.reset();
});
