// Light mode & Dark mode
const toggleButton = document.getElementById("mode-toggle");
const bodyElement = document.body;

// Get the stored theme from localStorage
const currentMode = localStorage.getItem("theme");

// Apply the stored theme
if (currentMode) {
  bodyElement.classList.add(currentMode);
  toggleButton.innerHTML =
    currentMode === "dark-mode" ? "Light Mode" : "Dark Mode";
} else {
  localStorage.setItem("theme", "light-mode"); // Default to light mode
}

// Toggle between Light and Dark mode
toggleButton.addEventListener("click", () => {
  bodyElement.classList.toggle("dark-mode");

  if (bodyElement.classList.contains("dark-mode")) {
    toggleButton.innerHTML = "Light Mode";
    localStorage.setItem("theme", "dark-mode");
  } else {
    toggleButton.innerHTML = "Dark Mode";
    localStorage.setItem("theme", "light-mode");
  }
});

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
