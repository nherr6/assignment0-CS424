
let GL, vao, program1, program2;
let currColor = [0, 0, 0, 0];
let currTriangles = 1;
let maxTriangles = 1;
let useJSON = false;

window.updateTriangles = function() {
}

window.updateColor = function() {

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

    // bind vao
    // use program
    // draw arrays
};

async function initialize() {
    const canvas = document.querySelector("#canvas");
    // Initialize the GL context
    const gl = canvas.getContext("webgl");

    // Only continue if WebGL is available and working
    if (gl === null) {
        alert(
        "Unable to initialize WebGL. Your browser or machine may not support it.",
        );
        return;
    }

    // Set clear color to black, fully opaque
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    // Clear the color buffer with specified clear color
    gl.clear(gl.COLOR_BUFFER_BIT);
    // initialive canvas
    // create programs
    // draw
};
 
window.onload = initialize;
