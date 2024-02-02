let GL, vao, program1, program2;
let currColor = [1, 1, 1, 1.0];
let currTriangles = 1;
let maxTriangles = 1;
let useJSON = false;

window.updateTriangles = function() {
}

//update the color based on the RGB slider values
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
    //console.log("uploadFile function");
    // load file and create buffers
        const fileInput = document.getElementById("myFile");


        if(fileInput.files.length > 0){
            if(fileInput.files[0].type != 'application/json'){
                alert("Please upload JSON file");
                return;
            }
            //console.log("uploadFile function 2");
            const fr = new FileReader();

            fr.readAsText(fileInput.files[0]);

            fr.addEventListener('load', ()=>{
                const jsonData = JSON.parse(fr.result);
                //let keysinobj = Object.keys(jsonData);
                let posBuffer = jsonData.positions;
                let colBuffer = jsonData.colors;
                console.log("uploaded JSON data:", jsonData);
                console.log(Object.keys(jsonData).length);
                //console.log(keysinobj.length);
                //console.log(posBuffer);
            });
        }
}

async function createPrograms() { 
    // create vertex and fragment shaders, create programs
}

function createShader(source, type) {
    // create shader

};

function createBuffer(vertices) {
    var canvas = document.querySelector("#canvas");
    var gl = canvas.getContext("webgl");
    var positionBuffer = gl.createBuffer();

    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices2D), gl.STATIC_DRAW);
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

    // Set clear color to white, fully opaque
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

    var fileInput = document.getElementById("myFile");
    fileInput.addEventListener("change", uploadFile);
};

window.onload = initialize;