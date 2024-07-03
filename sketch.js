var z = 2;
var minSize = 2; // Minimum size of the box
var maxSize = 250; // Maximum size of the box

let palette = [
    "#EC4300",
    "#007A59",
    "#2A64AF",
    "#8A7752"
];

let colors = [];

function setup() { 
    createCanvas(800, 800, WEBGL);
    noStroke();
    rectMode(CENTER);
    
    // Generate and store random colors for each cube
    for (var y = -2; y <= 2; y++) {
        colors[y + 2] = [];
        for (var x = -2; x <= 2; x++) {
            colors[y + 2][x + 2] = random(palette);
        }
    }
} 
  
function draw() { 
    background("#C8BEA8");
    ambientLight(200);
    directionalLight(200, 200, 200, -1, -1, -1);

    for (var y = -2; y <= 2; y++) {
        for (var x = -2; x <= 2; x++) {
            // Adjust the noise parameters to ensure each cube has a unique scale
            let n = noise(x * 0.2 + frameCount * 0.001, y * 0.2 + frameCount * 0.001, z * 0.2);
            // Map the noise value to the desired size range
            let boxSize = map(n, 0, 1, minSize, maxSize);
            
            push();
                fill(colors[y + 2][x + 2]);
                translate(250 * x, 250 * y, -250 * z);
                rotateX(frameCount * 0.002);
                rotateY(x * frameCount * 0.002);
                box(boxSize);
            pop();
        }
    }
}
