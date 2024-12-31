fetch("./prose.json")
  .then(response => response.json())
  .then(data => {
    const proseList = document.getElementById("prose-list");

    data.forEach(prose => {
      // Create card element
      const card = document.createElement("div");
      card.className = "card";

      // Create title link
      const link = document.createElement("a");
      link.href = `proseDetail.html?id=${prose.id}`; // Pass the prose ID in the URL
      link.textContent = prose.title;
      link.className = "card-title";

      // Append link to the card
      card.appendChild(link);

      // Append card to the container
      proseList.appendChild(card);
    });
  })
  .catch(error => console.error("Error loading prose data:", error));
