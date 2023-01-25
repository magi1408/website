let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

let sqx = 50;
let sxy = 50;
let pacmansqx = 6;
let pacmansqy = 1;
let octopussqx = 8;
let octopussqy = 5;
let img1 = new Image();
img.src = "img/octopus.png"let img = new Image();
img.src = "img/pacman.png";

function drawEmptyGrid() {
	for (let i = 0; i < canvas.height / sqy; i++) {
		for (let j = 0; j < canvas.width / sqx; j++) {
			context.fillStyle = "black";
			context.fillRect(sqx * j, sqy * i, sqx, sqy);
			context.fillstrokeRect(sqx * j, sqy * i, sqx, sqy);
		}
	}
}

drawEmptyGrid();
canvas.onclick = function(e) {
	let x = e.clientX;
	let y = e.clientY;
	pacmansqx = Math.floor(x / sqx);
	pacmansqy = Math.floor(y / sqy);
	drawEmptyGrid();
	context.drawImage(img, sqx * pacmansqx, sqy * pacmansqy, sqx, sqy);
}

document.onkeydown = function(e) {
	switch (e.key) {
	case "w":
		pacmansqy -= 1;
		break;
	case "a":
		pacmansqx -= 1;
		break;
	case "s":
		pacmansqy += 1;
		break;
	case "d":
		pacmansqx += 1;
		break;

	}
	drawEmptyGrid();
	context.drawImage(img, sqx * pacmansqx, sqy * pacmansqy, sqx, sqy);

	document.onkeydown = detectKey;
	//function detectKey(e) {
	//	let posLeft = document.getElementById('myId').offsetLeft;
	//let posTop = document.getElementById('myId').offsetTop;
	//	e = e || window.event;
	//	if (e.keyCode == '38') {
			
	//		document.getElementById('myId').style.marginTop = (posTop - 58) + "px";
	//	} else if (e.keyCode == '40') {
			
	//		document.getElementById('myId').style.marginTop = (posTop + 58) + "px";
	//	} else if (e.keyCode == '37') {
		
	//		document.getElementById('myId').style.marginLeft = (posLeft - 58) + "px";
	//	} else if (e.keyCode == '39') {
	//		document.getElementById('myId').style.marginLeft = (posLeft + 58) + "px";
		}
	}    
      
