/* global document, fetch */

const APIKey = "08ca1d300293084d7d4dab3d4cdb374d";
const URL = "https://api.themoviedb.org/3/search/movie?api_key=";
let data = [];
const form = document.getElementById("form");
const searchQuery = document.getElementById("inlineFormInputName");
const table = document.getElementById("table");
const pager = document.getElementById("pager");
const tableBody = table.getElementsByTagName("tbody")[0];
const tableHead = table.querySelector(".table-categories");
const pageInfo = document.querySelector(".page-info");
const allPages = document.querySelector(".all-pages");
const statuses = document.getElementsByTagName("i");
let totalPages;

const writeTable = data => {
  table.classList.add("visible");
  tableBody.innerHTML = "";

  data.forEach(item => {
    const tableRow = document.createElement("tr");
    // id
    const id = document.createElement("td");
    id.innerHTML = item.id;
    // title
    const title = document.createElement("td");
    title.innerHTML = item.title;
    // language
    const language = document.createElement("td");
    language.innerHTML = item.original_language;
    // popularityIndex
    const popularityIndex = document.createElement("td");
    popularityIndex.innerHTML = item.popularity;
    // votesCount
    const votesCount = document.createElement("td");
    votesCount.innerHTML = item.vote_count;
    // rating
    const rating = document.createElement("td");
    rating.innerHTML = item.vote_average;
    // releaseDate
    const releaseDate = document.createElement("td");
    releaseDate.innerHTML = item.release_date;

    tableRow.appendChild(id);
    tableRow.appendChild(title);
    tableRow.appendChild(language);
    tableRow.appendChild(popularityIndex);
    tableRow.appendChild(votesCount);
    tableRow.appendChild(rating);
    tableRow.appendChild(releaseDate);

    tableBody.appendChild(tableRow);
  });
};

const fetchData = (page = 1) => {
  const inputValue = searchQuery.value;

  if (page === 1) {
    pager.selectedIndex = 0;
  }

  if (inputValue !== "") {
    fetch(`${URL + APIKey}&query=${inputValue}&page=${page}`)
      .then(response => response.json())
      .then(json => {
        data = json.results;
        if (data.length === 0) {
          alert("Sorry, no matches were found.");
        }

        totalPages = json.total_pages;
        pageInfo.classList.remove("hidden");
        allPages.innerHTML = totalPages;
        pager.innerHTML = "";

        for (let i = 0; i < totalPages; i++) {
          const pagerOption = document.createElement("option");
          pagerOption.innerHTML = i + 1;
          pager.appendChild(pagerOption);
        }

        pager.selectedIndex = page - 1;

        for (let i = 0; i < statuses.length; i++) {
          statuses[i].classList.remove("fa-caret-up");
          statuses[i].classList.remove("fa-caret-down");
        }

        writeTable(data);
      })
      .catch(error => console.log(error));
  } else {
    alert("Please enter the value");
  }
};

const sortByNumberUp = key => {
  data.sort((a, b) => a[key] - b[key]);
};
const sortByNumberDown = key => {
  data.sort((a, b) => b[key] - a[key]);
};

const sortByAlphabetUp = key => {
  data.sort((a, b) => {
    if (a[key] < b[key]) return -1;
    if (a[key] > b[key]) return 1;
    return 0;
  });
};
const sortByAlphabetDown = key => {
  data.sort((a, b) => {
    if (b[key] < a[key]) return -1;
    if (b[key] > a[key]) return 1;
    return 0;
  });
};

form.addEventListener("submit", e => {
  e.preventDefault();

  fetchData();
});

pager.addEventListener("change", () => {
  fetchData(pager.options[pager.selectedIndex].value);
});

tableHead.addEventListener("click", e => {
  const dataSort = e.target.getAttribute("data-sort");
  const targerStatus = e.target.getElementsByTagName("i")[0];

  if (e.target.getAttribute("data-sort-by") === "number") {
    if (e.target.getAttribute("data-sorted-up") !== "up") {
      sortByNumberUp(dataSort);
      e.target.setAttribute("data-sorted-up", "up");
      for (let i = 0; i < document.getElementsByTagName("i").length; i++) {
        statuses[i].classList.remove("fa-caret-up");
        statuses[i].classList.remove("fa-caret-down");
      }
      targerStatus.classList.remove("fa-caret-down");
      targerStatus.classList.add("fa-caret-up");
    } else {
      sortByNumberDown(dataSort);
      e.target.setAttribute("data-sorted-up", "down");
      for (let i = 0; i < statuses.length; i++) {
        statuses[i].classList.remove("fa-caret-down");
        statuses[i].classList.remove("fa-caret-up");
      }
      targerStatus.classList.remove("fa-caret-up");
      targerStatus.classList.add("fa-caret-down");
    }

    writeTable(data);
  } else if (e.target.getAttribute("data-sort-by") === "alphabet") {
    if (e.target.getAttribute("data-sorted-up") !== "up") {
      sortByAlphabetUp(dataSort);
      e.target.setAttribute("data-sorted-up", "up");
      for (let i = 0; i < statuses.length; i++) {
        statuses[i].classList.remove("fa-caret-down");
        statuses[i].classList.remove("fa-caret-up");
      }
      targerStatus.classList.remove("fa-caret-down");
      targerStatus.classList.add("fa-caret-up");
    } else {
      sortByAlphabetDown(dataSort);
      e.target.setAttribute("data-sorted-up", "down");
      for (let i = 0; i < statuses.length; i++) {
        statuses[i].classList.remove("fa-caret-down");
        statuses[i].classList.remove("fa-caret-up");
      }
      targerStatus.classList.remove("fa-caret-up");
      targerStatus.classList.add("fa-caret-down");
    }

    writeTable(data);
  } else {
    alert("Error");
  }
});
