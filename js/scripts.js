// target your button and assign an ask function that outputs a random image to your page


// Click Event Listener with function(event)
document.getElementById('askBtn').addEventListener("click", function(event) {
  console.log(this, 'event listener');
});

//Function that uses Math.floor and Math.random to generate a random number and then is used to change the name of the image source being shown-and therefore the actual image shown
function randomPic(event) {
  var randomNum = Math.floor((Math.random()*20)+1);
  $('#randomImg').attr('src', 'img/magic8ball_' + randomNum + '.png');
}
