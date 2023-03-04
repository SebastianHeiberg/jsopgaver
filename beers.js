const URL = "https://api.punkapi.com/v2/beers"

let myBeers = []

fetch(URL)
.then(res => res.json())
.then(data => {

  myBeers = data.map(beer => ({
    name: beer.name,
    tagline: beer.tagline,
    abv: beer.abv,
    ibu: beer.ibu
  }));
  makeTable(myBeers)
});

function makeTable(beers){
  const tableRows = beers.map(beer => `
  <tr>
      <td>${beer.name}</td>
      <td>${beer.tagline}</td>
      <td>${beer.abv}</td>
      <td>${beer.ibu}</td>
  </tr>
  `)
  const tableRowsAsString = tableRows.join("")
  document.querySelector("#tbl1").innerHTML = tableRowsAsString
}

function showBeers() {
  let abvAbove = document.querySelector("#filter-abv").value
  let filteredBeers = myBeers.filter(beer => beer.abv > abvAbove)
  makeTable(filteredBeers)
}

// Intet af dette virker og jeg forstår ikke hvorfor.

// document.querySelector("#abv-btn").onclick = showBeers

// var button = document.getElementById("abv-btn")
// button.addEventListener("click",showBeers, false)
