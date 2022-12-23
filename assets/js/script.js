var userName = $("#userName");
var userDay = $("#bday");


$("#submitBtn").click(function (e) {
    e.preventDefault()
  var selection = userName.val().trim();
  var selectionDate = userDay.val();

  var resultsPage = "../Astro-music/results.html?q=" + selection + '&date=' + selectionDate;

  location.assign(resultsPage);
});

$('#navSignBtn').click(function (e) {
    e.preventDefault();
    var signContainer = $('#signContainer');
    signContainer.toggleClass('hidden');
});
$('#aboutMeBtn').click(function (e) {
    e.preventDefault();
    var aboutContainer = $('#aboutMe');
    aboutContainer.toggleClass('hidden');
});


$('#aquarius').click(function (e) {
    e.preventDefault();
    var aquarius = "aquarius";
    
    var resultsPage = "../Astro-music/results.html?q=" + aquarius + '&date=2022-01-21';

    location.assign(resultsPage);
 });



 $('#pisces').click(function (e) {
  e.preventDefault();
  var pisces = "pisces";
  
  var resultsPage = "../Astro-music/results.html?q=" + pisces + '&date=2022-02-20';

  location.assign(resultsPage);
});


$('#aries').click(function (e) {
  e.preventDefault();
  var aries = "aries";
  
  var resultsPage = "../Astro-music/results.html?q=" + aries + '&date=2022-03-22';

  location.assign(resultsPage);
});


$('#taurus').click(function (e) {
  e.preventDefault();
  var taurus = "taurus";
  
  var resultsPage = "../Astro-music/results.html?q=" + taurus + '&date=2022-04-21';

  location.assign(resultsPage);
});

$('#gemini').click(function (e) {
  e.preventDefault();
  var gemini = "gemini";
  
  var resultsPage = "../Astro-music/results.html?q=" + gemini + '&date=2022-05-22';

  location.assign(resultsPage);
});

$('#cancer').click(function (e) {
  e.preventDefault();
  var cancer = "cancer";
  
  var resultsPage = "../Astro-music/results.html?q=" + cancer + '&date=2022-06-22';

  location.assign(resultsPage);
});

$('#leo').click(function (e) {
  e.preventDefault();
  var leo = "leo";
  
  var resultsPage = "../Astro-music/results.html?q=" + leo + '&date=2022-07-24';

  location.assign(resultsPage);
});

$('#virgo').click(function (e) {
  e.preventDefault();
  var virgo = "virgo";
  
  var resultsPage = "../Astro-music/results.html?q=" + virgo + '&date=2022-08-24';

  location.assign(resultsPage);
});

$('#libra').click(function (e) {
  e.preventDefault();
  var libra = "libra";
  
  var resultsPage = "../Astro-music/results.html?q=" + libra + '&date=2022-09-24';

  location.assign(resultsPage);
});

$('#scorpio').click(function (e) {
  e.preventDefault();
  var scorpio = "scorpio";
  
  var resultsPage = "../Astro-music/results.html?q=" + scorpio + '&date=2022-10-24';

  location.assign(resultsPage);
});

$('#sagittarius').click(function (e) {
  e.preventDefault();
  var sagittarius = "sagittarius";
  
  var resultsPage = "../Astro-music/results.html?q=" + sagittarius + '&date=2022-11-23';

  location.assign(resultsPage);
});

$('#capricorn').click(function (e) {
  e.preventDefault();
  var capricorn = "capricorn";
  
  var resultsPage = "../Astro-music/results.html?q=" + capricorn + '&date=2022-12-23';

  location.assign(resultsPage);
});

// window.localStorage.setItem("userForm", "userName","bday")

