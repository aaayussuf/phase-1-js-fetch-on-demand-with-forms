const init = () => {
    const inputForm = document.querySelector("form");
  
    inputForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const input = document.querySelector("input#searchByID");
  
      // Fetch data based on user input
      fetch(`http://localhost:3000/movies/${input.value}`)
        .then((response) => {
          // Check if the response is ok (status code 200-299)
          if (!response.ok) {
            throw new Error("Movie not found");
          }
          return response.json();
        })
        .then((data) => {
          // Update the DOM with fetched data
          const title = document.querySelector("section#movieDetails h4");
          const summary = document.querySelector("section#movieDetails p");
  
          title.innerText = data.title;
          summary.innerText = data.summary;
        })
        .catch((error) => {
          // Handle errors (e.g., invalid ID or network issues)
          const title = document.querySelector("section#movieDetails h4");
          const summary = document.querySelector("section#movieDetails p");
  
          title.innerText = "Error";
          summary.innerText = error.message;
        });
    });
  };
  
  document.addEventListener("DOMContentLoaded", init);
  