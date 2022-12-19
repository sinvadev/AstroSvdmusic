var titleDisplay = $("#horoscope-title");
var playlistDisplay = $("#music-player");
var horoscopeDisplay = $("#daily-horoscope");
var mood;
var fortune;
var compatibility;
var luckyNumber;
var luckyTime;

// Collects user data from initial page, puts it into an array. We then take the info for that array and save it into local storage as well running the getHoroscope function with the date from the array.
function getUserInput() {
  var userDataArr = document.location.search.split("&");
  var uName = userDataArr[0].split("=").pop();
  var uDate = userDataArr[1].split("=").pop();
  localStorage.setItem(uName, uDate);
  getHoroscope(uDate);
}
getUserInput();

// Takes user date from the getUserInput and assaigns it a horoscope.
function getHoroscope(uDate) {
  uDate = dayjs(uDate).format("MM-DD");

  if (dayjs(uDate).isBetween("01-20", dayjs("02-18"))) {
    runApi("aquarius");
    displayHoroscope("Aquarius");
  } else if (dayjs(uDate).isBetween("02-19", dayjs("03-20"))) {
    runApi("pisces");
    displayHoroscope("Pisces");
  } else if (dayjs(uDate).isBetween("03-21", dayjs("04-19"))) {
    runApi("aries");
    displayHoroscope("Aries");
  } else if (dayjs(uDate).isBetween("04-20", dayjs("05-20"))) {
    runApi("taurus");
    displayHoroscope("Taurus");
  } else if (dayjs(uDate).isBetween("05-21", dayjs("06-20"))) {
    runApi("gemini");
    displayHoroscope("Gemini");
  } else if (dayjs(uDate).isBetween("06-21", dayjs("07-22"))) {
    runApi("cancer");
    displayHoroscope("Cancer");
  } else if (dayjs(uDate).isBetween("07-23", dayjs("08-22"))) {
    runApi("leo");
    displayHoroscope("Leo");
  } else if (dayjs(uDate).isBetween("08-23", dayjs("09-22"))) {
    runApi("virgo");
    displayHoroscope("Virgo");
  } else if (dayjs(uDate).isBetween("09-23", dayjs("10-22"))) {
    runApi("libra");
    displayHoroscope("Libra");
  } else if (dayjs(uDate).isBetween("10-23", dayjs("11-21"))) {
    runApi("scorpio");
    displayHoroscope("Scorpio");
  } else if (dayjs(uDate).isBetween("11-22", dayjs("12-21"))) {
    runApi("sagittarius");
    displayHoroscope("Sagittarius");
  } else if (dayjs(uDate).isBetween("12-22", dayjs("01-19"))) {
    runApi("capricorn");
    displayHoroscope("Capricorn");
  } else {
    console.log("fail");
  }
}

function displayHoroscope(horoscopeSign) {
  titleDisplay.text(horoscopeSign);

  var signIconImage = $("#hIconImage");
  signIconImage.addClass('iconImageDisplay')
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
          " Your lucky number today is: " +
          luckyNumber +
          " Your lucky hour today will be: " +
          luckyTime
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
