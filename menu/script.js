function toggleTheme() {
    const themeLink = document.getElementById("light-mode");
    const  powerBtn = document.getElementById("powerButton");
    if (themeLink.getAttribute("href") === "style.css") {
        themeLink.setAttribute("href", "style dark.css");  
        // powerBtn.innerHTML = "⚫";
    } else {
        themeLink.setAttribute("href", "style.css");  
        // powerBtn.innerHTML = href='⚪';
    }
}
