$(document).ready(function() {
  var currentBal = "";
  console.log ("Jquery Loaded");
  $("#welcome").click(function(event) {
    event.preventDefault();
      var userName = $("#name").val();
      console.log(userName);
      var initialDeposit = parseFloat($("#initialDeposit").val());
      console.log(initialDeposit);
      currentBal = initialDeposit;
      console.log(currentBal);
      $("#currentBal").text(currentBal);
      // $("#currentBal").text(initialDeposit);
  })


  $("#deposit").click(function(event) {
    event.preventDefault();
      var deposit = parseFloat($("#depositInput").val());
      console.log(deposit);
      currentBal += deposit;
      console.log(currentBal);
      $("#currentBal").text(currentBal);
  })
  $("#withdraw").click(function(event) {
    event.preventDefault();
      var withdraw = parseFloat($("#withdrawInput").val());
      console.log(withdraw);
      currentBal -= withdraw;
      console.log(currentBal);
      $("#currentBal").text(currentBal);
  })

});
