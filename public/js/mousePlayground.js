var canvas;
var fr = 25;
var grow = false;
var rMin = 10;
var rMax = 300;
var radRect = 4;
var rAcc = 0;

var intro = true;
var x = 0;
var y = 0;

var cx = 100;
var cy = -10;
var r = 40;
var time = 0;
var preTime = 0;
var desp = 0;
var direction = true;

var rot = 0;
var rMap = 1.0;
var dirRot = 1;

var clearAll = true;

var touch = 0;

// CUANDO TOCA IMAGEN SE HACE GRANDE
/*
$(".grid__item").on({
    mouseenter: function () {
        rMap = Math.random(3, 5);
        touch += 100;
        rAcc += 100;
        //console.log(touch);
        dirRot = Math.random(-1, 1)
        //stuff to do on mouse enter
    },
    mouseleave: function () {
        //stuff to do on mouse leave
    }
});

/*
$(document).ready(function() {
    $(".image-grid__item").mouseenter(function() {
        touch += 100;
        rAcc += 100;
        //console.log(touch);
        dirRot = Math.random(-1, 1)
    })
    $(".image-grid__item").hover(function() {
        rMap = Math.random(3, 5);
    })
});

*/

function setup() {
    pixelDensity(2.0);
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.class("canvas");
    canvas.parent('canvasContainer');
    frameRate(fr);
    fill('#ED225D');
    rectMode(CENTER);
    angleMode(DEGREES);
}


function draw() {
    noCursor();
    time = millis() / 1000.0;
    touch *= 0.8;
    var current = createVector(mouseX, mouseY);
    var previous = createVector(pmouseX, pmouseY);
    var dir = p5.Vector.sub(current, previous);
    var magnitude = dir.mag();

    if (intro == false) {

        if (grow == false) { // hacer que cambie el tamaño con el speed
            if (magnitude > windowWidth / 10) {
                rAcc += magnitude / 2;
            }
            if (rAcc > 0) {
                r += rAcc / 2;
                if (r >= rMax) r = rMax;
                rAcc -= rAcc / 4;
            } else {}
        }

        var R = 255;
        var G = 255;
        var B = 255;

        B = B - touch * 2;

        fill(R, G - rAcc / 6, B - rAcc);
        // COLOR CAMBIA CON EL SPEED

        //stroke(0, 15, 22);
        stroke(4, 6, 37);
        var strokeRad = 0;
        if (r >= rMin + 10) {
            //strokeRad = 2 + r / 15;
        } else {
            strokeRad = 0;
        }
        strokeWeight(strokeRad);

        if (grow == true) {
            r *= 1.07;
            if (r >= rMax) r = rMax;
        } else {
            r *= 0.76;
            if (r <= 50) {
                r = rMin;
                if (clearAll) clear();

            } else {
                if (clearAll) clear();
            }
        }
    } else {
        stroke(0, 15, 22);
        strokeWeight(2 + r / 15);
        fill(255);
    }
    // si se mueve el mouse dibujar la ellipse en el mouse

    radRect = map(r, rMin, rMax, 10, 20);
    translate(x, y);
    rot = frameCount * map(r, rMin, rMax, 1, 1.2) * rMap;
    rotate(rot * dirRot);

    if (intro == false && mouseX != 0 && mouseY != 0) {
        x = mouseX;
        y = mouseY;
        //rot = map(rot,rMin/2,rMax/2,0,45);
        rect(0, 0, r, r, radRect);
    }
}

function mousePressed() {
    grow = true;
    rAcc += 90;
    touch + 80;
    rMap = 4 * map(r, rMin, rMax, 1, 2);
    clearAll = false;
}

function mouseReleased() {
    grow = false;
    clear();
    rMap = 1;
    clearAll = true;
}

function mouseMoved() {
    intro = false;
    clear();
    rect(0, 0, r, r, radRect);


}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}