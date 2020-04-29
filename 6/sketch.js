function setup() {
    let navWidth = document.getElementById("nav").offsetWidth;
    let canvas = createCanvas(windowWidth - navWidth, windowHeight);
    canvas.parent('canvas');
    background(255);
}

function draw() {
    noFill(0);
    for (let x = 0; x < width; x = x + 10) {
        stroke(random(0, x), random(0, x), random(0, x));
        triangle(width / 2, height / 3, x, 0, x, 100);
        triangle(width / 2, height / 6, x, 0, x, 100);
        triangle(width / 2, height / 8, x, 0, x, 100);

        triangle(width / 2, height, x, 0, x, 100);
        triangle(x, 0, x, 0, width / 2, height);
    }
}

function windowResized() {
    let navWidth = document.getElementById("nav").offsetWidth;
    resizeCanvas(windowWidth - navWidth, windowHeight);
    background(255);
}