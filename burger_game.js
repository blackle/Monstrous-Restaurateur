
var bunBottom;
var bunTop;
var cheese;
var patty;

var bunBottomPos = [ 400, 300 ];
var pattyPos = [ 380, 300 ];
var cheesePos = [ 360, 300 ];
var bunTopPos = [ 325, 300 ];

var bunBottomStartPos = [ 400, 300 ];
var pattyStartPos = [ 380, 300 ];
var cheeseStartPos = [ 360, 300 ];
var bunTopStartPos = [ 325, 300 ];

var bunBottomEndPos = [ 250, 25 ];
var pattyEndPos = [ 210, 270 ];
var cheeseEndPos = [ 50, 460 ];
var bunTopEndPos = [ 230, 520 ];

var bunBottomTick = 0;
var pattyTick = 0;
var cheeseTick = 0;
var bunTopTick = 0;

var current_index = 0;

var bass = new Audio("./snd/bass.mp3");
var tom = new Audio("./snd/tom.mp3");
var floor = new Audio("./snd/floor.mp3");
var hit = new Audio("./snd/hit.mp3");

function interpolate(a, b, x) {
	var x2 = x**3;
	return a*x2 + b*(1-x2);
}

function interpolateXY(a, b, x) {
	return [interpolate(a[0],b[0],x),interpolate(a[1],b[1],x)];
}

function setXY(tag, pos) {
	tag.style.top = ""+pos[0]+"px";
	tag.style.left = ""+pos[1]+"px";
}

function setXYOfAll() {
	setXY(bunBottom, bunBottomPos);
	setXY(patty, pattyPos);
	setXY(cheese, cheesePos);
	setXY(bunTop, bunTopPos);
}

function animate_burgers() {

if (current_index == 3) {
	bunBottomTick += 0.05;
	if (bunBottomTick <= 1.05) {
		bunBottomPos = interpolateXY(bunBottomEndPos, bunBottomStartPos, bunBottomTick);
	} else {
		current_index += 1;
	}
}

if (current_index == 2) {
	pattyTick += 0.05;
	if (pattyTick <= 1.05) {
		pattyPos = interpolateXY(pattyEndPos, pattyStartPos, pattyTick);
	} else {
		current_index += 1;
	}
}

if (current_index == 1) {
	cheeseTick += 0.05;
	if (cheeseTick <= 1.05) {
		cheesePos = interpolateXY(cheeseEndPos, cheeseStartPos, cheeseTick);
	} else {
		current_index += 1;
	}
}

if (current_index == 0) {
	bunTopTick += 0.05;
	if (bunTopTick <= 1.05) {
		bunTopPos = interpolateXY(bunTopEndPos, bunTopStartPos, bunTopTick);
	} else {
		current_index += 1;
	}
}

	setXYOfAll();

if (current_index < 4) {
	setTimeout(animate_burgers, 25);
}
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

var oldRand = 0;

function randomMolly() {
	var molly = document.getElementById("mollyDance");

	var newRand = getRandomInt(0,8);
	if (newRand == oldRand) {
		newRand = oldRand+1;
	}

	molly.style.display = "block";
	molly.style.backgroundPositionX = newRand*165+"px";
	oldRand = newRand;
}

function onLoad() {
	bunBottom = document.getElementById("bun_bottom");
	cheese = document.getElementById("cheese");
	patty = document.getElementById("patty");
	bunTop = document.getElementById("bun_top");

	bunTop.onmousedown = function() {
		bunTop.style.transform = "rotate(-7deg)";
		floor.currentTime = 0;
		floor.play();
		randomMolly();
	}
	bunTop.onmouseup = function() {
		bunTop.style.transform = "";
	}

	cheese.onmousedown = function() {
		cheese.style.transform = "rotate(-7deg)";
		hit.currentTime = 0;
		hit.play();
		randomMolly();
	}
	cheese.onmouseup = function() {
		cheese.style.transform = "";
	}

	patty.onmousedown = function() {
		patty.style.transform = "rotate(-7deg)";
		tom.currentTime = 0;
		tom.play();
		randomMolly();
	}
	patty.onmouseup = function() {
		patty.style.transform = "";
	}

	bunBottom.onmousedown = function() {
		bunBottom.style.transform = "rotate(7deg)";
		bass.currentTime = 0;
		bass.play();
		randomMolly();
	}
	bunBottom.onmouseup = function() {
		bunBottom.style.transform = "";
	}


	setXYOfAll();

	bunBottom.style.display = "block";
	cheese.style.display = "block";
	patty.style.display = "block";
	bunTop.style.display = "block";

	setTimeout(animate_burgers, 500);
}