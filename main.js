img = "";

function preload() {
    img = loadImage('dog_cat.jpg');
}

function setup() {
    canvas = createCanvas (640, 420);
    canvas.center();
}

function draw() {
    image(img, 0, 0, 640, 420);
fill ('#676a99');
text("Dog",120, 70);
noFill();
stroke('#000aad');
rect(40,60, 380, 350);
}