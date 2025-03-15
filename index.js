function themeChangeHandler() {
  const isDarkTheme = document.body.classList.contains("dark-theme");
  const themeSwitcherLogo = document.getElementById("theme-switcher-logo");
  const themeMode = document.getElementById("theme-mode");

  if (isDarkTheme) {
    document.body.classList.remove("dark-theme");
    themeSwitcherLogo.src = "./assets/images/icon-moon.svg";
    themeMode.textContent = "Dark Mode";
  } else {
    document.body.classList.add("dark-theme");
    themeSwitcherLogo.src = "./assets/images/icon-sun.svg";
    themeMode.textContent = "Light Mode";
  }
}

function initialise() {
  document
    .getElementById("theme-switcher")
    .addEventListener("click", themeChangeHandler);
}

document.addEventListener("DOMContentLoaded", function () {
  initialise();
});
