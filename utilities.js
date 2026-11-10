const themeToggle = document.querySelector("#theme-toggle");
themeToggle.checked = localStorage.getItem("portfolio-theme") === "light";

themeToggle.addEventListener("change", () => {
    let theme = "dark";
    if (themeToggle.checked) {
        theme = "light";
    }
    localStorage.setItem("portfolio-theme", theme);
});
