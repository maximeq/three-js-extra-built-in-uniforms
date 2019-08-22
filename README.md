# three-js-extra-built-in-uniforms
Patch the WebGLRenderer class to add automatic update for some extra uniforms like viewMatrixInverse or projectionMatrixInverse. Update will be done at automatically at render without relying on manually defined onBeforeRender callbacks. 
