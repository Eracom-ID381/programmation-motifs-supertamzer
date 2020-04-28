function setup() {
    let navWidth = document.getElementById("nav").offsetWidth;
    let canvas = createCanvas(windowWidth - navWidth, windowHeight);
    canvas.parent('canvas');
    background(255);
}

function draw() {
    let r = random(1, 50);
    noFill();
    for (let x = 0; x < width; x = x + 30) {
        for (let y = 0; y < height; y = y + 21) {
            circle(x, y, 150);
        }
    }
}



function windowResized() {
    let navWidth = document.getElementById("nav").offsetWidth;
    resizeCanvas(windowWidth - navWidth, windowHeight);
    background(255);
}