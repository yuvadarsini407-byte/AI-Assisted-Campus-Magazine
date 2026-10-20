const searchBox = document.getElementById("articleSearch");

searchBox.addEventListener("input", function () {
  const query = this.value.toLowerCase().trim();

  document.querySelectorAll(".article-card").forEach(card => {
    const text = card.textContent.toLowerCase();

    card.hidden = !text.includes(query);
  });
});
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  themeToggle.textContent =
    document.body.classList.contains("dark-mode")
      ? "☀️ Light Mode"
      : "🌙 Dark Mode";
});
