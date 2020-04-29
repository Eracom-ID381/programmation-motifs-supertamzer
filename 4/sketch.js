function setup() {
    let navWidth = document.getElementById("nav").offsetWidth;
    let canvas = createCanvas(windowWidth - navWidth, windowHeight);
    canvas.parent('canvas');
    background(255);
}

function draw() {
    stroke(0);
    noFill(0);
    //for (let x = 0; x < width; x = x + 10) {
    //for (let y = 10; y < height; y = y + 10) {
    //quad(width / 2, height / 2, (width / 2) + x, (height/2)+y, (width / 2) + x, (height/2)+y, (width / 2) + x, (height/2)+y);
    //    square(0, 0, x);
    //}

    for (let x = 10; x < width; x += 10) {
        for (let y = 10; y < height; y += 10) {
            square((width / 2), (height / y), y);
            square((width / 2) - y, (height / 2) - y, x);
        }
    }
}
//}

function windowResized() {
    let navWidth = document.getElementById("nav").offsetWidth;
    resizeCanvas(windowWidth - navWidth, windowHeight);
    background(255);
}