let x;
let y;

let obj;
let objSwitch = true;

let xSpeed;
let ySpeed;
let rotateSpeed;


function preload() {
    obj = loadImage ("img/b.svg")
	obj = loadImage("img/a.svg");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	x = random(width);
	y = random(height);

	// x = random(width);
	// y = random(height);


    xSpeed = 20;
	ySpeed = 20;

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }

function draw() {
	background(150, 50);

	x = x + xSpeed;
	y = y + ySpeed;
    image(obj, x, y)


	
	if (x + obj.width >= width) {
		xSpeed = -xSpeed;
        x = width - obj.width;
        changeImage()

	} else if (x <= 0 ) {
        xSpeed = -xSpeed;
        x = 0;
        changeImage()
    }
	
	if (y + obj.height >= height) {
		ySpeed = -ySpeed;
        y = height - obj.height;
        changeImage()

	} else if (y <= 0 ) {
        ySpeed = -ySpeed;
        y = 0;
        changeImage()
    }
}

function changeImage(){
    objSwitch = !objSwitch
    console.log(objSwitch);

    if (objSwitch == true) {
        obj = loadImage("img/b.svg");
    } else{
        obj = loadImage ("img/a.svg");
    }
}