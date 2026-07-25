const AUTO_THEME_ENABLED = 0;

function iconSrc(key, theme) {
    return `icons/contact-${key}-${theme}.svg`;
}

function brandIconSrc(theme) {
    return `icons/gold-vein-${theme}.png`;
}

function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    document.querySelectorAll("img[data-icon]").forEach((img) => {
        img.src = iconSrc(img.dataset.icon, theme);
    });
    document.querySelectorAll("img[data-brand-icon]").forEach((img) => {
        img.src = brandIconSrc(theme);
    });
}

if (AUTO_THEME_ENABLED === 1) {
    const colorSchemeQuery = window.matchMedia("(prefers-color-scheme: dark)");

    applyTheme(colorSchemeQuery.matches ? "dark" : "light");

    colorSchemeQuery.addEventListener("change", (event) => {
        applyTheme(event.matches ? "dark" : "light");
    });
} else {
    applyTheme("light");
}
