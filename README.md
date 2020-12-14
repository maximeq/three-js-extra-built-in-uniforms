THIS LIBRARY IS DEPRECATED, instead we use the Dualbox Three.js fork : https://github.com/dualbox/three.js

# three-js-extra-built-in-uniforms
Patch the WebGLRenderer class to add automatic update for some extra uniforms like viewMatrixInverse or projectionMatrixInverse. Update will be done at automatically at render without relying on manually defined onBeforeRender callbacks.

## General
Since THREE.WebGLRenderer has no public function which could be properly extended, and no prototype, the way things are done in this package is a bit hacky : the WebGLRenderer file is copied from three-full and patched to update the wanted uniforms when WebGLRenderer.render is called. 
Note that the uniforms checks and updates are done just before the object.onBeforeRender, so everything done by this package could be done manually for each object. However, it may be a pain to manage onBeforeRender, essince materials can be switched, objects cloned, etc... 

## Added Uniforms
### viewMatrixInverse
Inverse of the viewMatrix. 
### projectionMatrixInverse
Inverse of the projectionMatrix. 

## Usage
Builds can be imported directly from dist/browser into a webpage, THREE must be defined. 
THREE.WebGLRenderer will be replaced with the patched renderer.

Once imported, all materials defining uniforms.viewMatrixInverse or uniforms.projectionMatrixInverse will see those uniforms updated at render. 

## Limitations
Uniform names viewMatrixInverse and projectionMatrixInverse are reserved. If this package is used with another package providing materials with one of those uniforms, they will also be automatically updated, with no way to prevent that. 
