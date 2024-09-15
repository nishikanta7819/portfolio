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

// Like and unlike button
function handleLike() {
  const likeButton = document.getElementById("likeButton");
  const unlikeButton = document.getElementById("unlikeButton");

  // Check if it's already liked
  if (likeButton.textContent === "Like") {
    likeButton.textContent = "Liked";
    unlikeButton.textContent = "Unlike"; // Reset unlike if it was clicked
  } else {
    likeButton.textContent = "Like"; // Toggle back to default
  }
}

function handleUnlike() {
  const likeButton = document.getElementById("likeButton");
  const unlikeButton = document.getElementById("unlikeButton");

  // Check if it's already unliked
  if (unlikeButton.textContent === "Unlike") {
    unlikeButton.textContent = "Unliked";
    likeButton.textContent = "Like"; // Reset like if it was clicked
  } else {
    unlikeButton.textContent = "Unlike"; // Toggle back to default
  }
}
