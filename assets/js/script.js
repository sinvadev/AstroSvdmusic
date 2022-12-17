var userName = $("#userName");
var userDay = $("#bday");


$("#submitBtn").click(function (e) {
    e.preventDefault()
  var selection = userName.val().trim();
  var selectionDate = userDay.val();


  var resultsPage = "../Astro-music/results.html?q=" + selection + '&date=' + selectionDate;

  location.assign(resultsPage);
});



