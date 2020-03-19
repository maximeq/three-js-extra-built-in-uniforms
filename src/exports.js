
var THREE = require("three-full");

if(THREE.REVISION !== "101"){
    throw "This version of three-js-extra-built-in-uniforms package has been made for revision 101 only.";
}

var ExtraBuiltInUniforms = {
    viewMatrixInverse : true,
    projectionMatrixInverse : true,
    originalWebGLRenderer : THREE.WebGLRenderer,
    patchedWebGLRenderer : require("./PatchedWebGLRenderer")
};

// Overwrite the WebGLRenderer
THREE.WebGLRenderer = ExtraBuiltInUniforms.patchedWebGLRenderer;

THREE.ExtraBuiltInUniforms = ExtraBuiltInUniforms;

module.exports = ExtraBuiltInUniforms;



