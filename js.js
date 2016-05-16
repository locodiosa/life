"use strict";


var ONE_FRAME_TIME = 1000 / 60;

var mainloop = function() {
	updateGame();
	draw();
};

setInterval(mainloop, ONE_FRAME_TIME);


var universe = [];

for (var i = 0; i < 900; i++) {
	universe[i] = [];
	
	for (var j = 0; j < 600; j++) {
		universe[i][j] = Math.floor(Math.random() * 2);
	}
}

var nextUniverse = universe;

for (var j = 0; j < nextUniverse[j].length; j++) {
		
		for (var i = 0; i < nextUniverse.length; i++) {
			
			if ((nextUniverse[i][j] == 1) && (nextUniverse[i+1][j+1] == 1)) {
				nextUniverse[i][j] = 0;
			}
		}
	}



function draw() {
	var canvas  = document.getElementById("canvas");
	canvas.width  = universe.length * 2; 
	canvas.height = universe[j].length * 2; 
		
	var context = canvas.getContext('2d');
	context.fillStyle   = '#eee'; 
	context.fillRect(0, 0, canvas.width, canvas.height);	
		
	context.beginPath();
	point(context,universe);
	context.stroke();	
}


function point(context,universe) {
	
	for (var j = 0; j < universe[j].length; j++) {
		
		for (var i = 0; i < universe.length; i++) {
			
			if (universe[i][j] == 1) {
				var x = i * 2;
				var y = j * 2;
				context.fillStyle = '#000'; 
				context.fillRect(x,y,2,2);
			}
		}
	}
}
				

