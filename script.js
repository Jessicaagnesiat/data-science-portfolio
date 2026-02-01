const toggle = document.getElementById("themeToggle");
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
    document.body.classList.add("dark");
}

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem(
        "theme",
        document.body.classList.contains("dark") ? "dark" : "light"
    );
});

hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
});
