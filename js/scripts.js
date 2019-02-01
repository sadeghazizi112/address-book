$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var nameInput = $("input#name").val();
    var numberInput= $("input#number").val();
    var dateInput = $("input#date").val();
    var emailInput = $("input#email").val();

    $(".name").append(nameInput);
    $(".number").append(numberInput);
    $(".date").append(dateInput);
    $(".email").append(emailInput);

    $("#contactinfo").show();

    event.preventDefault();
  });
});
