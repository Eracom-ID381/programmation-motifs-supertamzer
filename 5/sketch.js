function setup() {
    let navWidth = document.getElementById("nav").offsetWidth;
    let canvas = createCanvas(windowWidth - navWidth, windowHeight);
    canvas.parent('canvas');
    background(255);
}

function draw() {
    noFill(0);
    stroke(0);
    stroke(random(200, 255), random(20, 50), random(200, 255));
    for (let x = 0; x < width; x = x + 10) {
        for (let y = 0; y < height; y = y + 100) {
            line(x, y, 1000, 1000);
            line(1000, -200, x, y);
        }
    }
}

function windowResized() {
    let navWidth = document.getElementById("nav").offsetWidth;
    resizeCanvas(windowWidth - navWidth, windowHeight);
    background(255);
}