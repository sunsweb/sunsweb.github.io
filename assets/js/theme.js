(function () {
  var root = document.documentElement;
  var toggle = document.getElementById("theme-toggle");

  if (!toggle) {
    return;
  }

  var toggleIcon = toggle.querySelector("img");
  var moonIconPath = "assets/images/moon.png";
  var sunIconPath = "assets/images/sun.svg";

  function updateToggleIcon(theme) {
    if (!toggleIcon) {
      return;
    }

    var isDark = theme === "dark";
    toggleIcon.src = isDark ? sunIconPath : moonIconPath;
    toggleIcon.alt = isDark ? "Sun icon" : "Moon icon";
    toggle.setAttribute("title", isDark ? "Switch to light mode" : "Switch to dark mode");
  }

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    toggle.setAttribute("aria-pressed", String(theme === "dark"));
    updateToggleIcon(theme);
  }

  var currentTheme = root.getAttribute("data-theme");

  if (!currentTheme) {
    currentTheme = "light";
    applyTheme(currentTheme);
  } else {
    toggle.setAttribute("aria-pressed", String(currentTheme === "dark"));
    updateToggleIcon(currentTheme);
  }

  toggle.addEventListener("click", function () {
    var nextTheme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
  });
})();
