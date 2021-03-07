// Number of cells wide
// Number of cells high
const SIZE = 50;
// Width of each cell
let xDim;
// Height of each cell
let yDim;

let prim = {
    r: 203,
    g: 153,
    b: 126
}

let sec = {
    r: 221,
    g: 190,
    b: 169
}

let third = {
    r: 183,
    g: 183,
    b: 164
}

function setup()
{
    createCanvas(1000,1000);
    background(240, 239, 235, 50);
    xDim = Math.floor(width / SIZE);
    yDim = Math.floor(height / SIZE);
}

function draw()
{
    for(let row = 0; row < SIZE; row++)
    {
        for(let col = 0; col < SIZE; col++)
        {
            push()
            // Translate center to the center of the current grid square
            translate(col * xDim + xDim / 2 , row * yDim + yDim / 2);
            // Determine how the line will be drawn...
            let orientation = Math.floor(random(4));
            let color = Math.floor(random(3));
            let sWeight = Math.floor(random(4)) + 1;
            switch(color)
            {
                case 0:
                    stroke(prim.r, prim.g, prim.b);
                    strokeWeight(sWeight);
                    break;
                case 1:
                    stroke(sec.r, sec.g, sec.b);
                    strokeWeight(sWeight);
                    break;
                case 2: 
                    stroke(third.r, third.g, third.b);
                    strokeWeight(sWeight);
                    break;
            }
            switch(orientation)
            {
                case 0:
                    rotate(0);
                    line(0, - yDim / 2, 0, yDim / 2);
                    break;
                case 1:
                    rotate(PI / 2);
                    line(0, - yDim / 2, 0, yDim / 2);
                    break;
                case 2:
                    rotate(PI);
                    line(0, - yDim / 2, 0, yDim / 2);
                    break;
                case 3:
                    rotate(3 * PI / 2);
                    line(0, - yDim / 2, 0, yDim / 2);
                    break;
            }
            pop()
        }
    }
    noLoop();
}