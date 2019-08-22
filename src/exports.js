
var THREE = require("three-full");

if(THREE.REVISION !== "101"){
    throw "This version of three-js-extra-built-in-uniforms package has been made for revision 101 only.";
}

var ExtraBuiltInUniforms = {
    viewMatrixInverse : true,
    projectionMatrixInverse : true,
    originalWebGLRenderer : THREE.WebGLRenderer
};

// Overwrite the WebGLRenderer
THREE.WebGLRenderer = require("./PatchedWebGLRenderer");

module.exports = ExtraBuiltInUniforms;



