// Page redirects
const scrollButtons = document.querySelectorAll(".scrollButton");

scrollButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // Get the target section's ID from the data-target attribute
    const targetPageId = this.getAttribute("data-target");

    // Get the section element by its ID
    const targetPage = document.getElementById(targetPageId);

    // Scroll to the target section smoothly
    if (targetPage) {
      targetPage.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// copyright year
document.getElementById("year").textContent = new Date().getFullYear();

// Custom Cursor------------
// Select the custom cursor element
const cursor = document.querySelector(".custom-cursor");

// Smoothly update cursor position
document.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

// Light mode/Dark mode-----------
function toggleTheme() {
  let body = document.body;
  let sun = document.getElementById("sun");
  let moon = document.getElementById("moon");

  // Toggle dark mode class
  body.classList.toggle("dark-mode");

  // Check if dark mode is applied
  let isDarkMode = body.classList.contains("dark-mode");

  // Store the preference in localStorage
  localStorage.setItem("theme", isDarkMode ? "dark" : "light");

  // Adjust sun and moon visibility
  sun.style.opacity = isDarkMode ? "0" : "1";
  moon.style.opacity = isDarkMode ? "1" : "0";
}

// Check user preference on page load
window.onload = function () {
  let savedTheme = localStorage.getItem("theme");
  let body = document.body;
  let sun = document.getElementById("sun");
  let moon = document.getElementById("moon");

  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    sun.style.opacity = "0";
    moon.style.opacity = "1";
  } else {
    sun.style.opacity = "1";
    moon.style.opacity = "0";
  }
};

// Frontend Projects

