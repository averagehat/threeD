// Create an empty scene
var scene = new THREE.Scene();

// Create a basic perspective camera
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.z = 90;

// Create a renderer with Antialiasing
// var renderer = new THREE.WebGLRenderer({antialias:true});
// var renderer = new THREE.WebGLRenderer();
// 
// // Configure renderer clear color
// renderer.setClearColor("#000000");
// 
// // Configure renderer size
// renderer.setSize( window.innerWidth, window.innerHeight );
// 
// // Append Renderer to DOM
// document.body.appendChild( renderer.domElement );
    var startTime = Date.now();

var rawShape = new Shape();

      uniforms = {
        time: { type: "f", value: 1.0 },
        resolution: { type: "v2", value: new THREE.Vector2() }
      };
var lamber = new THREE.MeshLambertMaterial()  


 var shaderMat = new THREE.ShaderMaterial({ uniforms: uniforms, vertexShader: document.getElementById('vertexShader').textContent, fragmentShader: document.getElementById('fragmentShader').textContent });

// var myShape = new THREE.Mesh( rawShape, material );
var dumbMaterial = new THREE.MeshBasicMaterial( { color: "#433F81" } );
  //var cube = new THREE.BoxGeometry(30, 30, 30)
 scene.add( new THREE.AmbientLight(0x505050) ); 
var myShape = new THREE.Mesh( rawShape, shaderMat );
scene.add( myShape);
      renderer = new THREE.WebGLRenderer();
      renderer.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1);
      document.body.appendChild(renderer.domElement);

      renderer.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1);
      uniforms.resolution.value.y = window.innerHeight;
      renderer.setSize(window.innerWidth, window.innerHeight);

var render = function () {
  requestAnimationFrame( render );
      var elapsedMilliseconds = Date.now() - startTime;
      var elapsedSeconds = elapsedMilliseconds / 1000.;
      uniforms.time.value = 60. * elapsedSeconds; 
  myShape.rotation.x += 0.01;
  myShape.rotation.y += 0.01;

  // Render the scene
  renderer.render(scene, camera);
};

render();
