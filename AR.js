<!DOCTYPE html>
<html>
  <head>
    <title>AR Stack Game</title>
    <script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/ar.js@3.3.2/aframe/build/aframe-ar.min.js"></script>
    <style>
      body { margin: 0; overflow: hidden; }
    </style>
  </head>
  <body>
    <a-scene embedded arjs>
      <!-- Marker -->
      <a-marker preset="hiro">
        <!-- Stack block -->
        <a-box position="0 0.5 0" depth="0.5" height="0.2" width="1" color="#00ffcc"></a-box>
      </a-marker>
      <a-entity camera></a-entity>
    </a-scene>
  </body>
</html>
