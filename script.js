var canv = document.createElement('canvas');
canv.id = "canvas";
var context = canv.getContext('2d');
canv.setAttribute("width", 300);
canv.setAttribute("height", 300);
canv.style.border = "1px solid black";

var box1 = new Image();
var box2 = new Image(); 
var box3 = new Image(); 
box1.id = "box1"; 
box2.id = "box2";
box3.id = "box3";
box1.src = 'http://riley.dev.kargo.com/code-test/test0.png';
box2.src = 'http://riley.dev.kargo.com/code-test/test1.png';
box3.src = 'http://riley.dev.kargo.com/code-test/test2.png';
var a = 150;
var b = 150;
var c = 100;
var d = 100;
var x = 50;
var y = 50;
var atZero = false;

function init(){
	window.requestAnimationFrame(draw);
	return setInterval(draw, 200);
};

function draw () {
	

	context.save();
	context.clearRect(0,0,300,300);
	context.drawImage(box1, x, y, 100, 100);

	if(x>0){
		x -= 1;
		y -= 1;
		context.restore();
		context.drawImage(box1, x, y, 100, 100);

		// if(x == 0){
		// 	while(x<=200){
		// 		x += 1;
		// 		y = 0;
		// 		context.clearRect(0,0,300,300);
		// 		context.restore();
		// 		context.drawImage(box1, x, y, 100, 100);
		// 	};
		// };	
	};
	context.save();
	context.drawImage(box2, 100, 100, 100, 100);
	// if(a == 200){
	// 	c -= 1;
	// 	d -= 1;
	// 	context.restore();
	// 	context.clearRect(0,0,300,300);
	// 	context.drawImage(box2, 100, 100, c, d);
	// }


  	context.drawImage(box3, a, b, 100, 100);

	if(a<200){
		a += 1;
		b += 1;
		context.restore();
		context.drawImage(box3, a, b, 100, 100);
	};
	if(b==200){
		b -= 1;
		context.restore();
		context.drawImage(box3, a, b, 100, 100);
	};
	context.restore();
	context.beginPath();

  	

  	window.requestAnimationFrame(draw);
  	document.body.appendChild(canv);
};

init();