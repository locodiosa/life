"use strict";


var ONE_FRAME_TIME = 1000 / 60;

var mainloop = function() {
	createUniverse(universe);
	draw();
};

setInterval(mainloop, ONE_FRAME_TIME);


var universe = [];


function newUniverse(universe) {
	
	for (var i = 0; i < 900; i++) {
		universe[i] = [];

		for (var j = 0; j < 600; j++) {
			universe[i][j] = 0;
		}
	}
}


function createUniverse(universe) {
	newUniverse(universe);
	
	for (var i = 0; i < universe.length; i++) {
				
		for (var j = 0; j < universe[0].length; j++) {
			universe[i][j] = Math.floor(Math.random() * 2);
		}
	}
}


function draw() {
	var canvas  = document.getElementById("canvas");
	canvas.width  = universe.length * 2; 
	canvas.height = universe[0].length * 2; 
		
	var context = canvas.getContext('2d');
	context.fillStyle   = '#eee'; 
	context.fillRect(0, 0, canvas.width, canvas.height);	
		
	context.beginPath();
	point(context,universe);
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
				

