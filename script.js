// Light mode & Dark mode
const toggleButton = document.getElementById("mode-toggle");
const bodyElement = document.body;

const currentMode = localStorage.getItem("theme");

if (currentMode) {
  bodyElement.classList.add(currentMode);
}

toggleButton.addEventListener("click", () => {
  bodyElement.classList.toggle("dark-mode");

  if (bodyElement.classList.contains("dark-mode")) {
    document.getElementById("mode-toggle").innerHTML = "Light Mode";
    localStorage.setItem("theme", "dark-mode");
  } else {
    localStorage.setItem("theme", "light-mode");
    document.getElementById("mode-toggle").innerHTML = "Dark Mode";
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
