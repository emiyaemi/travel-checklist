
// begin business logic
function Traveler(travelPlace, travelMode, travelAccom, travelAct, traveler) {
  this.travelPlace = travelPlace;
  this.travelMode = travelMode;
  this.travelAccom = travelAccom;
  this.travelAct = travelAct;
  this.travelerUser = [];
}

var travelerList = "";

Traveler.prototype.travelerList = function() {
  for(var i = 0; i < this.travelerUser.length; i++) {
    travelerList += "<li>" + this.travelerUser[i]+ "</li>";
  }
}
var travelerSentencePage = "";

Traveler.prototype.travelerSentence = function () {
  for(var i = 0; i < this.travelerUser.length; i++) {
    travelerSentencePage += this.travelerUser[i]+ ", ";
  }
}

// Front End



$(document).ready(function() {

  $("form#userTravelType").submit(function(event){
    event.preventDefault();

    var who = $('#who input:checkbox:checked').val();
    var where = $('#where').val();
    var how = $('#how input:radio:checked').val();
    var staying = $('#staying input:radio:checked').val();
    var activities = $('#activities input:radio:checked').val();

    var newTraveler = new Traveler(where, how, staying, activities);

    $('#who input:checkbox:checked').each(function() {
      who = $(this).val();
      newTraveler.travelerUser.push(who);
    });

    newTraveler.travelerList();

    $(".outputs").show();
    $(".list-who").append(travelerList);
    $(".list-where").text(newTraveler.travelPlace);
    $(".list-how").text(newTraveler.travelMode);
    $(".list-staying").text(newTraveler.travelAccom);
    $(".list-activities").text(newTraveler.travelAct);
  });

  $("#to-next-page").click(function() {
    var who = $('#who input:checkbox:checked').val();
    var where = $('#where').val();
    var how = $('#how input:radio:checked').val();
    var staying = $('#staying input:radio:checked').val();
    var activities = $('#activities input:radio:checked').val();

    var newTraveler = new Traveler(where, how, staying, activities);
    newTraveler.travelerSentence();
    console.log(newTraveler);
    $("#sentenceUser").text(travelerSentencePage + "traveling to " + newTraveler.travelPlace +" by "+ newTraveler.travelMode +  ". Accommodation: " + newTraveler.travelAccom + ". Planned activity: " + newTraveler.travelAct);
  });
});
