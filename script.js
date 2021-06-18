const rootElement = document.querySelector("#root");

const fetchData = async () => {
  const data = await fetch("https://www.whenisthenextmcufilm.com/api").then(
    (res) =>
      res
        .json()
        .then((data) => data)
        .catch((err) => console.error(err))
  );

  rootElement.innerHTML = `
        <h2>${data.title} releases in <i>${data.days_until} days</i>!</h2>
        <p>Realease Date: ${data.release_date}</p>
        <p>Production Type: ${data.type}</p>
        <p>What's afterwards? <a href="/?date=2021-07-08">${data.following_production.title}</a></p>
        <img alt="The poster for ${data.title}." src="${data.poster_url}"/>
        <div class="icons-social">
        <a href="https://github.com/DiljotSG/MCU-Countdown" target="_blank"><i class="fab fa-github"></i></a>
        <a href="https://twitter.com/account/access" target="_blank"><i class="fab fa-twitter"></i></a>
        </div>
        
    `;

  //   // Movie title
  //   const movieTitle = document.createElement("h2");
  //   movieTitle.setAttribute("class", "movie-title");
  //   movieTitle.innerHTML = `${data.title} releases in <i>${data.days_until} days</i>!`;
  //   rootElement.appendChild(movieTitle);
  //   // Movie Release Date
  //   const releaseDate = document.createElement("p");
  //   releaseDate.setAttribute("class", "release-date");
  //   releaseDate.innerHTML = `Realease Date: ${data.release_date}`;
  //   rootElement.appendChild(releaseDate);
  //   // Type
  //   const typeofProduction = document.createElement("p");
  //   typeofProduction.setAttribute("class", "production-type");
  //   typeofProduction.innerHTML = `Production Type: ${data.type}`;
  //   rootElement.appendChild(typeofProduction);
  //   // Next movie title
  //   const nextMovie = document.createElement("p");
  //   nextMovie.setAttribute("class", "next-movie");
  //   nextMovie.innerHTML = `Whats afterWards? <a href="">${data.following_production.title}</a>`;
  //   rootElement.appendChild(nextMovie);
  //   const poster = document.createElement("img");
  //   poster.setAttribute("src", `${data.poster_url}`);
  //   rootElement.appendChild(poster);
  //   console.log(data.following_production);
};
fetchData();
