var titleDisplay = $("#horoscope-title");
var playlistDisplay = $("#music-player");
var horoscopeDisplay = $("#daily-horoscope");
var userDataArr = document.location.search.split("&");
var uName = userDataArr[0].split("=").pop();
var uDate = userDataArr[1].split("=").pop();
var uDataArry = [];
var mood;
var fortune;
var compatibility;
var luckyNumber;
var luckyTime;
var previousUser;

function getUserInput() {
  window.localStorage.setItem("arry", JSON.stringify(uDataArry));
}

function showPreviousSearch() {
  var currentLocal = JSON.parse(window.localStorage.getItem("arry")) || [];
  console.log(currentLocal);
  currentLocal.push(uName, uDate);
  uDataArry = currentLocal;

  console.log(uDataArry);
  getUserInput();

  var previousDisplay = $("#previous-searches");

  for (let i = 0; i < uDataArry.length; i++) {
    if (i % 2 === 0) {
      var previousBtn = $("<button>");
      var previousDate = dayjs(uDataArry[i + 1]).format("MMM-DD-YYYY");
      previousBtn.addClass(
        "previousUserBtn border-4 border-slate-800 border-solid bg-rose-500 h-16 m-2 w-fit text-1xl text-center"
      );

      previousBtn.html(uDataArry[i] + "<br>" + previousDate);
      previousDisplay.append(previousBtn);
    }
  }

  $(".previousUserBtn").click(function () {
    getHoroscope(this.innerHTML.split('<br>')[1]);
  });
}

showPreviousSearch();

getHoroscope(uDate);

// Takes user date from the getUserInput and assaigns it a horoscope.
function getHoroscope(uDate) {
  console.log(uDate);
  uDate = dayjs(uDate).format("MM-DD");
  console.log(uDate);

  if (uDate == "01-01") {
    runApi("capricorn");
    displayHoroscope("Capricorn");
  } else if (dayjs(uDate).isBetween("01-01", dayjs("01-20"))) {
    runApi("capricorn");
    displayHoroscope("Capricorn");
  } else if (dayjs(uDate).isBetween("01-19", dayjs("02-19"))) {
    runApi("aquarius");
    displayHoroscope("Aquarius");
  } else if (dayjs(uDate).isBetween("02-18", dayjs("03-21"))) {
    runApi("pisces");
    displayHoroscope("Pisces");
  } else if (dayjs(uDate).isBetween("03-20", dayjs("04-20"))) {
    runApi("aries");
    displayHoroscope("Aries");
  } else if (dayjs(uDate).isBetween("04-19", dayjs("05-21"))) {
    runApi("taurus");
    displayHoroscope("Taurus");
  } else if (dayjs(uDate).isBetween("05-20", dayjs("06-22"))) {
    runApi("gemini");
    displayHoroscope("Gemini");
  } else if (dayjs(uDate).isBetween("06-21", dayjs("07-23"))) {
    runApi("cancer");
    displayHoroscope("Cancer");
  } else if (dayjs(uDate).isBetween("07-22", dayjs("08-23"))) {
    runApi("leo");
    displayHoroscope("Leo");
  } else if (dayjs(uDate).isBetween("08-22", dayjs("09-23"))) {
    runApi("virgo");
    displayHoroscope("Virgo");
  } else if (dayjs(uDate).isBetween("09-22", dayjs("10-23"))) {
    runApi("libra");
    displayHoroscope("Libra");
  } else if (dayjs(uDate).isBetween("10-22", dayjs("11-22"))) {
    runApi("scorpio");
    displayHoroscope("Scorpio");
  } else if (dayjs(uDate).isBetween("11-21", dayjs("12-22"))) {
    runApi("sagittarius");
    displayHoroscope("Sagittarius");
  } else if (dayjs(uDate).isBetween("12-21", dayjs("12-31"))) {
    runApi("capricorn");
    displayHoroscope("Capricorn");
  } else if (uDate === "12-31") {
    runApi("capricorn");
    displayHoroscope("Capricorn");
  } else {
    console.log("fail");
  }
}

function displayHoroscope(horoscopeSign) {
  titleDisplay.text(horoscopeSign);

  var signIconImage = $("#hIconImage");
  signIconImage.addClass("iconImageDisplay");
  signIconImage.attr("src", "./assets/images/" + horoscopeSign + ".png");
}

function runApi(horoscopeSign) {
  var url = "https://aztro.sameerkumar.website?sign=";
  var date = "&day=today";

  fetch(url + horoscopeSign + date, {
    method: "POST",
  })
    .then((response) => response.json())
    .then((data) => {
      mood = data.mood;
      fortune = data.description;
      compatibility = data.compatibility;
      luckyNumber = data.lucky_number;
      luckyTime = data.lucky_time;

      horoscopeDisplay.html(
        fortune +
          "<br>" +
          '<span class="numberEl">' +
          " Your lucky number today is: " +
          luckyNumber +
          "</span>" +
          "<br>" +
          '<span class="dateEl">' +
          " Your lucky hour today will be: " +
          luckyTime +
          "</span>"
      );
      getPlaylist(mood);
    });
}

function getPlaylist(mood) {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "870cc61e81mshb090eec036f4409p189514jsnd21785448db6",
      "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
    },
  };

  fetch(
    "https://spotify23.p.rapidapi.com/search/?q=" +
      mood +
      "&type=playlists&offset=0&limit=5&numberOfTopResults=5",
    options
  )
    .then((response) => response.json())
    .then((data) => {
      var playlistNumArr = data.playlists.items[0].data.uri.split(":");
      var spotifyPlaylist = playlistNumArr[2];
      playlistDisplay.removeClass("hidden");
      playlistDisplay.attr(
        "src",
        "https://open.spotify.com/embed/playlist/" + spotifyPlaylist
      );
    })

    .catch((err) => console.error(err));
}
