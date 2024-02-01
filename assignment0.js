let GL, vao, program1, program2;
let currColor = [0, 0, 0, 1.0];
let currTriangles = 1;
let maxTriangles = 1;
let useJSON = false;

window.updateTriangles = function() {
}

window.updateColor = function() {
    var redValue = document.getElementById("sliderR").value;
    var greenValue = document.getElementById("sliderG").value;
    var blueValue = document.getElementById("sliderB").value;

    var red = redValue/255;
    var green = greenValue/255;
    var blue = blueValue/255;

    currColor = [red, green, blue, 1.0];
    //console.log(red + ',' + green + ',' + blue);
}


window.checkBox = function() {
    
}

function uploadFile(event) {
    // load file and create buffers
}

async function createPrograms() { 
    // create vertex and fragment shaders, create programs
}

function createShader(source, type) {
    // create shader

};

function createBuffer(vertices) {
    // create buffer
}

function createVAO(posAttribLoc, posBuffer, colAttribLoc, colBuffer) {
    // create vertex array
}

function draw() {
    //console.log("this is working");
    var canvas = document.querySelector("#canvas");
    // Initialize the GL context
    var gl = canvas.getContext("webgl");

    // Only continue if WebGL is available and working
    if (gl === null) {
        alert(
        "Unable to initialize WebGL. Your browser or machine may not support it.",
        );
        return;
    }

    // Set clear color to black, fully opaque
    gl.clearColor(...currColor);
    // Clear the color buffer with specified clear color
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    // initialive canvas
    // create programs
    // draw
    //console.log("canvas created");
    // bind vao
    // use program
    // draw arrays
};

async function initialize() {
    draw();

    var redSlider = document.getElementById("sliderR");
    var greenSlider = document.getElementById("sliderG");
    var blueSlider = document.getElementById("sliderB");

    redSlider.oninput = function(){
        updateColor();
        draw();
    }

    greenSlider.oninput = function(){
        updateColor();
        draw();
    }

    blueSlider.oninput = function(){
        updateColor();
        draw();
    }
    
};

window.onload = initialize;
