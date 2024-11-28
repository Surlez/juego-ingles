// Alternar tema oscuro/claro
document.getElementById("toggleTheme").addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
});

// Buscador de temas
document.getElementById("searchBox").addEventListener("input", (event) => {
    const searchValue = event.target.value.toLowerCase();
    const articles = document.querySelectorAll(".article-preview");

    articles.forEach(article => {
        const text = article.textContent.toLowerCase();
        article.style.display = text.includes(searchValue) ? "block" : "none";
    });
});
