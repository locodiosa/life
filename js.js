var universe = [];

for (var i = 0; i < 900; i++) {
	universe[i] = [];
	for (var j = 0; j < 600; j++) {
		universe[i][j] = Math.floor(Math.random() * 2);
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
	
	for (j = 0; j < universe[j].length; j++) {
		
		for (i = 0; i < universe.length; i++) {
			
			if (universe[i][j] == 1) {
				var x = i * 2;
				var y = j * 2;
				context.fillStyle   = '#000'; 
				context.fillRect(x,y,2,2);
			}
		}
	}
}
				
window.onload = draw;

