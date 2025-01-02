
fetch("./prose.json")
  .then(response => response.json())
  .then(data => {
    const proseList = document.getElementById("prose-list");

    data.forEach(prose => {
      // Create card container
      const cardContainer = document.createElement("div");
      cardContainer.className = "col-md-3 mb-4";

      // Create prose card
      const card = document.createElement("div");
      card.className = "prose-card";

      // Create title link
      const link = document.createElement("a");
      link.href = `proseDetail.html?id=${prose.id}`;
      link.style.textDecoration = "none";
      link.style.color = "inherit";

      // Create prose title
      const title = document.createElement("h4");
      title.className = "prose-title";
      title.textContent = prose.title;

      // Create prose author
      const author = document.createElement("p");
      author.className = "prose-author";
      author.textContent = `- ${prose.author}`;

      // Append title and author to the link
      link.appendChild(title);
      link.appendChild(author);

      // Append link to the card
      card.appendChild(link);

      // Append card to the container
      cardContainer.appendChild(card);

      // Append container to the prose list
      proseList.appendChild(cardContainer);
    });
  })
  .catch(error => console.error("Error loading prose data:", error));


