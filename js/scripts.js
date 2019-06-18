$(document).ready(function() {
  console.log ("Jquery Loaded");
  $("#welcome").click(function(event) {
    event.preventDefault();
      var userName = $("#name").val();
      console.log(userName);
      var initialDeposit = parseInt($("#initialDeposit").val());
      console.log(initialDeposit);
    });
  });
