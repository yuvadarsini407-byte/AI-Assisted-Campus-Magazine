document.querySelectorAll(".bookmark-btn").forEach(button => {
  button.addEventListener("click", () => {
    const article = button.closest(".article-card");
    const title = article.querySelector("h3").textContent;

    const saved = JSON.parse(
      localStorage.getItem("campusBookmarks") || "[]"
    );

    const index = saved.indexOf(title);

    if (index === -1) {
      saved.push(title);
    } else {
      saved.splice(index, 1);
    }

    localStorage.setItem(
      "campusBookmarks",
      JSON.stringify(saved)
    );

    button.textContent =
      index === -1 ? "★ Saved" : "☆ Save article";
  });
});const searchBox = document.getElementById("articleSearch");

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
