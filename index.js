var randomnumber1 =Math.floor(Math.random()*6)+1;

var randomdiceimage = "dice" + randomnumber1 + ".png";
var randomimagessoure = "images/" + randomdiceimage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomimagessoure);



var randomnumber2 = Math.floor(Math.random()*6)+1;

var randomimagessoure2 = "images/dice" + randomnumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomimagessoure2);

if (randomnumber1 > randomnumber2){
    document.querySelector("h1").innerHTML=" Player1 wins";
}

else if (randomnumber2>randomnumber1){
    document.querySelector("h1").innerHTML="Player2 wins";
}
else{
    document.querySelector("h1").innerHTML= "Draw";
}