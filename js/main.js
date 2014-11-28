$(function() {
  var $boatTable = $('.boat');
  var $hitTable = $('.hits');
  var $button = $('button');
  $button.click(fire);

function displayOutput() {
  return $('#displayoutput').val();
}

var player1 = true;
var player2 = false;

function fire() {
    if (player1 === true) {
      $hitTable.toggleClass('hidden');
      player1 = false;
      player2 = true;
    }
    else if (player2 === true) {
      $hitTable.toggleClass('hidden');
      player1 = true;
      player2 = false;
    }
 }
});
