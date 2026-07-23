const THEME_STORAGE_KEY = "theme";

function iconSrc(key, theme) {
    return key === "style" ? `icons/style-${theme}.svg` : `icons/contact-${key}-${theme}.svg`;
}

function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    document.querySelectorAll("img[data-icon]").forEach((img) => {
        img.src = iconSrc(img.dataset.icon, theme);
    });
}

const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
applyTheme(storedTheme === "dark" ? "dark" : "light");

document.getElementById("theme-toggle").addEventListener("click", () => {
    const nextTheme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    applyTheme(nextTheme);
});
