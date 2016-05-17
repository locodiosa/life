"use strict";


var ONE_FRAME_TIME = 1000 / 60;

var universe = newUniverse(300, 300);
var generation = 0;

var mainloop = function() {
	universe = nextUniverse(universe);
	draw(universe);
};

setInterval(mainloop, ONE_FRAME_TIME);


function newUniverse(x, y) {
	var universe = new Array(x);

	for (var i = 0; i < universe.length; i++) {
		universe[i] = new Array(y);
	}

	return universe;
}


function fillUniverse(universe) {
	for (var i = 0; i < universe.length; i++) {
		for (var j = 0; j < universe[0].length; j++) {
			universe[i][j] = Math.floor(Math.random() * 2);
		}
	}
}


function nextUniverse(universe) {
	if (generation++ == 0) {
		fillUniverse(universe);
		return universe;
	}

	var universe2 = newUniverse(universe.length, universe[0].length);

	for (var i = 0; i < universe2.length; i++) {
		for (var j = 0; j < universe2[0].length; j++) {
			universe2[i][j] = universe[i][j];
		}
	}

	return universe2;
}


function draw(universe) {
	var canvas  = document.getElementById("canvas");
	canvas.width  = universe.length * 2; 
	canvas.height = universe[0].length * 2; 
		
	var context = canvas.getContext('2d');
	context.fillStyle   = '#eee'; 
	context.fillRect(0, 0, canvas.width, canvas.height);	
		
	context.beginPath();
	point(context, universe);
	context.stroke();	
}


function point(context,universe) {
	context.fillStyle = '#000';
	
	for (var i = 0; i < universe.length; i++) {
		
		for (var j = 0; j < universe[0].length; j++) {
			
			if (universe[i][j] == 1) {
				var x = i * 2;
				var y = j * 2;
				context.fillRect(x,y,2,2);
			}
		}
	}
}
				

