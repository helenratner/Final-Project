//nav.js

window.onload = function color(){
	var triangles = document.querySelectorAll(".st0");
	
	for(i=0; i<triangles.length; i++){

		var r = Math.floor((Math.random()*255)+1);
		var g = Math.floor((Math.random()*255)+1);
		var b = Math.floor((Math.random()*255)+1);
		var col = "rgb(" + r + "," + g + "," + b + ")";

		tri = triangles[i];
		tri.style.fill= col;
	}
	
}


function logo(){

	var triangles = document.querySelectorAll(".st4");

	for(i=0; i<triangles.length; i++){

		tri = triangles[i];
		tri.style.opacity= 0;
	}

}

function hover(){
	var log = document.querySelector("#logo");

	log.style.fill="#575757";
}

function off(){
	var log = document.querySelector("#logo");

	log.style.fill= "black";
}


function hover2(){
	var des = document.querySelector("#design");

	des.style.fill="#575757";
}

function off2(){
	var des = document.querySelector("#design");

	des.style.fill= "black";
}

function hover3(){
	var fin = document.querySelector("#fineart");

	fin.style.fill="#575757";
}

function off3(){
	var fin = document.querySelector("#fineart");

	fin.style.fill= "black";
}

function hover4(){
	var abo = document.querySelector("#about");

	abo.style.fill="#575757";
}

function off4(){
	var abo = document.querySelector("#about");

	abo.style.fill= "black";
}

function hover5(){
	var con = document.querySelector("#contact");

	con.style.fill="#575757";
}

function off5(){
	var con = document.querySelector("#contact");

	con.style.fill= "black";
}

var log = document.querySelector("#logo");
var log1 = document.querySelector("#logoo");

var des = document.querySelector("#design");
var des1 = document.querySelector("#designn");

var fin = document.querySelector("#fineart");
var fin1 = document.querySelector("#fineartt");

var abo = document.querySelector("#about");
var abo1 = document.querySelector("#aboutt");

var con = document.querySelector("#contact");
var con1 = document.querySelector("#contactt");

log1.addEventListener("mouseover", hover);
log1.addEventListener("mouseout", off);
log.addEventListener("mouseover", hover);
log.addEventListener("mouseout", off);

des1.addEventListener("mouseover", hover2);
des1.addEventListener("mouseout", off2);
des.addEventListener("mouseover", hover2);
des.addEventListener("mouseout", off2);

fin1.addEventListener("mouseover", hover3);
fin1.addEventListener("mouseout", off3);
fin.addEventListener("mouseover", hover3);
fin.addEventListener("mouseout", off3);

abo1.addEventListener("mouseover", hover4);
abo1.addEventListener("mouseout", off4);
abo.addEventListener("mouseover", hover4);
abo.addEventListener("mouseout", off4);

con1.addEventListener("mouseover", hover5);
con1.addEventListener("mouseout", off5);
con.addEventListener("mouseover", hover5);
con.addEventListener("mouseout", off5);

/*log.addEventListener("click", logo);
log1.addEventListener("click", logo);

des.addEventListener("click", logo);
des1.addEventListener("click", logo);

fin.addEventListener("click", logo);
fin1.addEventListener("click", logo);

abo.addEventListener("click", logo);
abo1.addEventListener("click", logo);

con.addEventListener("click", logo);
con1.addEventListener("click", logo);
*/

var dimension = [document.documentElement.clientWidth, document.documentElement.clientHeight];
var canvas = document.getElementById("canvas");
canvas.width = dimension[0];
canvas.height = dimension[1];

var ctx = canvas.getContext("2d");

var PI2 = Math.PI * 2;
var cx = dimension[0]/2;
var cy = dimension[1]/2;
var outerRadius = dimension[0];
var minCircle = 5 / 2;
var maxCircle = 10 / 2;
var randomCircles = [];
var randomCircleCount = 500 + parseInt(Math.random() * 3.99);

while (randomCircles.length < randomCircleCount) {
    randomCircle();
}


function randomCircle() {
    var radius = minCircle + Math.random() * (maxCircle - minCircle);
    var distFromCenter =  radius + Math.random() * (outerRadius - radius * 2);
    var angle = Math.random() * PI2;
    var x = cx + distFromCenter * Math.cos(angle);
    var y = cy + distFromCenter * Math.sin(angle);
    var hit = false;
    for (var i = 0; i < randomCircles.length; i++) {
        var circle = randomCircles[i];
        var dx = circle.cx - x;
        var dy = circle.cy - y;
        var r = circle.radius + radius;
        if (dx * dx + dy * dy <= r * r) {
            hit = true;
        }
    }
    if (!hit) {
        var color = randomColor();
        randomCircles.push({
            cx: x,
            cy: y,
            radius: radius,
            color: color
        });
        drawCircle(x, y, radius, color);
    }
}


function drawCircle(cx, cy, radius, color) {
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, PI2);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
   }


function randomColor(){
	var colors = ["#EEF511","#B2B3AF","#BEBF9F","#5E5E51","#84856E","797A57"];
	var num = Math.floor((Math.random()*colors.length)+1);

	var color = colors[num];
	return(color);
}