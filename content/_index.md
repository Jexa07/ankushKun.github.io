---
title: "INDEX"
draft: true
---

<!-- Loads model-viewer for modern browsers -->
<script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.js"></script>
<!-- Loads model-viewer for older browsers -->
<script nomodule src="https://unpkg.com/@google/model-viewer/dist/model-viewer-legacy.js"></script>
<style>
model-viewer#model{
  --poster-color: transparent;
  width:100%;
  height:369px
}
</style>
<model-viewer id="model" src="/laptop.glb" alt="A 3D model of a Computer" camera-controls exposure="0.2" shadow-intensity="1" shadow-softness="1" loading="eager" disable-zoom auto-rotate background-color="transparent" camera-orbit="30deg 50deg"></model-viewer>
<script>
