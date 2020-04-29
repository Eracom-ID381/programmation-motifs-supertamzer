function setup() {
    let navWidth = document.getElementById("nav").offsetWidth;
    let canvas = createCanvas(windowWidth - navWidth, windowHeight);
    canvas.parent('canvas');
    background(255);
    let xoff = 0.0;
}

function draw() {
    noFill(0);
    for (let x = 1; x < height; x = x + 30) {
        for (let y = 1; y < width; y = y + 30) {
            triangle(y, x, 0, height, width, height);
        }
    }
}

function windowResized() {
    let navWidth = document.getElementById("nav").offsetWidth;
    resizeCanvas(windowWidth - navWidth, windowHeight);
    background(255);
}