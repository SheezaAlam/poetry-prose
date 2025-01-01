// Get the prose ID from the URL query string
const params = new URLSearchParams(window.location.search);
const proseId = params.get("id");

fetch("./prose.json")
  .then(response => response.json())
  .then(data => {
    // Find the prose with the matching ID
    const prose = data.find(item => item.id == proseId);

    if (prose) {
      // Display prose details dynamically
      document.getElementById("prose-title").textContent = prose.title;
      document.getElementById("prose-description").textContent = prose.description;
      document.getElementById("prose-content").textContent = prose.content;
      document.getElementById("prose-author").textContent = `By: ${prose.author}`;
    } else {
      document.body.textContent = "Prose not found.";
    }
  })
  .catch(error => console.error("Error loading prose data:", error));
