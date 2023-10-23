const TOKEN = "3538939326320173";

const search = document.querySelector(".header__search");
const form = document.querySelector(".form");

const listEl = document.querySelectorAll(".tab-content");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let API_URL_SEARCH = search.value;
  console.log(API_URL_SEARCH);

  const API_URL = `https://www.superheroapi.com/api.php/${TOKEN}/search/${API_URL_SEARCH}`;

  getHero(API_URL);

  async function getHero(url) {
    try {
      const respons = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (respons.ok) {
        const responsData = await respons.json();
        console.log(responsData);
        console.log(responsData.results[0]);
        const html1 = `<li>
            <h1>${responsData.results[0].name}</h1>
            <img
              src="${responsData.results[0].image.url}"
              alt="Grapefruit slice atop a pile of other slices" />

            </li>`;
        document.getElementById("1").insertAdjacentHTML("beforeend", html1);

        const html2 = `<li><h1>${responsData.results[0].biography["full-name"]}</h1><p>${responsData.results[0].biography.alignment}</p><p>${responsData.results[0].biography["place-of-birth"]}</p><p>${responsData.results[0].biography["first-appearance"]}</p><p>${responsData.results[0].biography.publisher}</p></li>`;
        document.getElementById("2").insertAdjacentHTML("beforeend", html2);

        const html3 = `<li>
            <p>${responsData.results[0].appearance.gender}</p>
            <p>${responsData.results[0].appearance["hair-color"]}</p>
            <p>${responsData.results[0].appearance["eye-color"]}</p>
            <p>${responsData.results[0].appearance.race}</p>
            </li>`;
        document.getElementById("3").insertAdjacentHTML("beforeend", html3);

        const html4 = `<li><p>${responsData.results[0].powerstats.speed}</p><p>${responsData.results[0].powerstats.combat}</p><p>${responsData.results[0].powerstats.power}</p><p>${responsData.results[0].powerstats.strength}</p></li>`;
        document.getElementById("4").insertAdjacentHTML("beforeend", html4);

        const html5 = `<li>
        <p>${responsData.results[0].connections["group-affiliation"]}</p>
        <p>${responsData.results[0].connections.relatives}</p>
        
        </li>`;
        document.getElementById("5").insertAdjacentHTML("beforeend", html5);
      }
    } catch (error) {
      console.log("у вас ошибка");
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const btnEl = document.querySelectorAll(".btn");

  function openTab(tabName) {
    listEl.forEach((tab) => {
      tab.style.display = "none";
    });

    btnEl.forEach((tabBtn) => {
      tabBtn.classList.remove("active");
    });

    document.getElementById(tabName).style.display = "block";

    const activeTablink = Array.from(btnEl).find(
      (tabBtn) => tabBtn.getAttribute("data-tab") === tabName
    );
    activeTablink.classList.add("active");
  }

  btnEl.forEach((tabBtn) => {
    tabBtn.addEventListener("click", function () {
      const tabName = this.getAttribute("data-tab");
      openTab(tabName);
    });
  });

  openTab("1");
});

// const html = `<li><h1></h1><p></p></li>`;
