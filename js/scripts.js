$(document).ready(function() {
  $("form#villains").submit(function(event) {
    $("img").hide();
    var humorVariable = $("select#humor").val();
    var capeVariable = $("select#capes").val();
    if (humorVariable === "anti-humor" && capeVariable === "anti-cape") {
      result = "President Snow";
      $("#snow").show();

    } else if (humorVariable === "pro-humor" && capeVariable === "pro-cape") {
      result = "Loki";
    } if (result === "Loki"){
      $("#loki").show();

    } else if (humorVariable === "pro-humor" && capeVariable === "anti-cape") {
      result = "the Joker";
      $("#joker").show();

    } else if (humorVariable === "anti-humor" && capeVariable === "pro-cape") {
        result = "Darth Vader";
        $("#vader").show();
    }
    $("#position").text(result);
    $("#result").show();


    event.preventDefault();
  });

});
