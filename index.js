const DOMSelectors = {
  form: document.querySelector(".form"),
  playerCardContainer: document.querySelector(".player-card-container"),
};

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("player-name").value;
  const rating = document.getElementById("player-rating").value;
  const imageUrl = document.getElementById("player-image").value;

  const playerCardHTML = `
    <div class="fifa-card">
      <div class="fifa-rating">${rating}</div>
      <div class="fifa-image">
        <img src="${imageUrl}" alt="Player Image">
      </div>
      <div class="fifa-info">
        <p class="fifa-name">${name}</p>
      </div>
    </div>
  `;

  DOMSelectors.playerCardContainer.insertAdjacentHTML(
    "beforeend",
    playerCardHTML
  );

  DOMSelectors.form.reset();
});
