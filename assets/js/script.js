var userName = $("#userEntry");
var userDay = $("#birthDay");


$("#submitBtn").click(function () {
  var selection = userName.val().trim();
  var selectionDate = userDay.val();


  var resultsPage = "./results.html?q=" + selection + '&date=' + selectionDate;

  location.assign(resultsPage);
});



