// target your button and assign an ask function that outputs a random image to your page



// Array of all images
// var allImg = ['img/magic8ball_1.png', 'img/magic8ball_2.png', 'img/magic8ball_3.png', 'img/magic8ball_4.png', 'img/magic8ball_5.png', 'img/magic8ball_6.png', 'img/magic8ball_7.png', 'img/magic8ball_8.png', 'img/magic8ball_9.png', 'img/magic8ball_10.png', 'img/magic8ball_11.png', 'img/magic8ball_12.png', 'img/magic8ball_13.png', 'img/magic8ball_14.png', 'img/magic8ball_15.png', 'img/magic8ball_16.png', 'img/magic8ball_17.png', 'img/magic8ball_18.png', 'img/magic8ball_19.png', 'img/magic8ball_20.png'];
// console.log(allImg);

function randomPic() {
    var magicBallImg = new Array();
    magicBallImg[0] = "img/magic8ball_1.png";
    magicBallImg[1] = "img/magic8ball_2.png";
    magicBallImg[2] = "img/magic8ball_3.png";
    var random = Math.floor(Math.random() * magicBallImg.length);
    document.getElementById("randomImg").src = magicBallImg[random];
  }
