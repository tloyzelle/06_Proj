// OMDB connect
var character = {SpiderMan: "Spider-Man", 
Wolverine: "Wolverine", 
BlackPanther: "Black Panther", 
IronMan: "Iron Man", 
CaptainAmerica: "Captain America", 
BlackWidow: "Black Widow",
Mystique: "Mystique",
Venom: "Venom",
Loki: "Loki",
Thor: "Thor",
};

fetch("https://www.omdbapi.com/?s=" + character + "&apikey=94e073f4&type=movie")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

fetch("https://www.omdbapi.com/?s=" + character + "&apikey=94e073f4")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

// ------------------------------------------------------

// marvel developer portal
var PRIV_KEY = "798c0e386c7012b9fbe680a511afe7292fc5887e";
var PUBLIC_KEY = "a6839955954077504b1dd8c4c57724b0";

function getMarvelResponse() {
  // you need a new ts every request
  var ts = new Date().getTime();
  var hash = CryptoJS.MD5(ts + PRIV_KEY + PUBLIC_KEY).toString();

  // the api deals a lot in ids rather than just the strings you want to use
  var characterId = {
      Wolverine: "1009718",
       SpiderMan: "1009610", 
       BlackPanther: "1009187", 
       IronMan: "1009368", 
       CaptainAmerica: "1009220", 
       BlackWidow: "1009189", 
       Mystique: "1009465", 
       Thor: "1009664", 
       Venom: "1010788", 
       Loki: "1009407"}  // (search is by character ID #, we might need to preprogram options)

  var url = "https://gateway.marvel.com:80/v1/public/comics";

  console.log(url);
  $.getJSON(url, {
    ts: ts,
    apikey: PUBLIC_KEY,
    hash: hash,
    characters: characterId,
  })
    .done(function (data) {
      // sort of a long dump you will need to sort through
      console.log(data);
    })
    .fail(function (err) {
      // the error codes are listed on the dev site
      console.log(err);
    });
}

getMarvelResponse();
