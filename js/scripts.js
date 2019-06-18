function addCommas(num)
  {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
  }



$(document).ready(function() {
  var currentBal = "";
  console.log ("Jquery Loaded");
  $("#welcome").click(function(event) {
    event.preventDefault();
      var userName = $("#name").val();
      console.log(userName);
      var initialDeposit = parseFloat($("#initialDeposit").val());
      console.log(addCommas(initialDeposit));
      currentBal = initialDeposit;
      console.log(currentBal);
      $("#currentBal").text(addCommas(currentBal));
      $("#userName").text(userName);
      $(".register").hide();
      // $("#currentBal").text(initialDeposit);
  })


  $("#deposit").click(function(event) {
    event.preventDefault();
      var deposit = parseFloat($("#depositInput").val());
      console.log(deposit);
      currentBal += deposit;
      console.log(currentBal);
      $("#currentBal").text(addCommas(currentBal));
      $("form").trigger("reset");

  })
  $("#withdraw").click(function(event) {
    event.preventDefault();
      var withdraw = parseFloat($("#withdrawInput").val());
      console.log(withdraw);
      currentBal -= withdraw;
      console.log(currentBal);
      $("#currentBal").text(addCommas(currentBal));
      $("form").trigger("reset");
  })

});
