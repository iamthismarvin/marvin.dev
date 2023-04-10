import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

interface useThreeOptions {
  canvas: HTMLCanvasElement | null
  cameraOptions?: { fov: number; aspect: number; near: number; far: number }
  texture: string
}

export const useThree = () => {
  let scene: THREE.Scene,
    camera: THREE.PerspectiveCamera,
    renderer: THREE.WebGLRenderer,
    sphere: THREE.Mesh,
    sphereTexture: THREE.Texture,
    controls: OrbitControls,
    material: THREE.MeshBasicMaterial

  function init({
    canvas,
    texture,
    cameraOptions = {
      fov: 90,
      aspect: window.innerWidth / window.innerHeight,
      near: 0.1,
      far: 1000,
    },
  }: useThreeOptions) {
    // Create scene & camera
    scene = new THREE.Scene()
    camera = new THREE.PerspectiveCamera(
      cameraOptions.fov,
      cameraOptions.aspect,
      cameraOptions.near,
      cameraOptions.far,
    )
    camera.position.z = 5

    // Create render
    renderer = new THREE.WebGLRenderer({
      canvas: canvas!,
      antialias: true,
    })
    renderer.setSize(window.innerWidth, window.innerHeight)

    // Create sphere
    sphereTexture = new THREE.TextureLoader().load(texture)
    const geometry = new THREE.SphereGeometry(50, 32, 32)
    material = new THREE.MeshBasicMaterial({
      map: sphereTexture,
      side: THREE.BackSide,
    })
    sphere = new THREE.Mesh(geometry, material)
    scene.add(sphere)

    // Create controls
    controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.enablePan = false
    controls.autoRotate = true
    controls.autoRotateSpeed = 1
    controls.dampingFactor = 0.05
    controls.rotateSpeed = 0.3
    controls.minDistance = 10
    controls.maxDistance = 50
  }

  function animate() {
    requestAnimationFrame(animate)
    controls.update()
    renderer.render(scene, camera)
  }

  function handleDispose() {
    renderer.dispose()
    controls.dispose()
  }

  function handleResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  }

  function updateSkybox(texture: string) {
    sphereTexture = new THREE.TextureLoader().load(texture)
    material.map = sphereTexture
    material.needsUpdate = true
  }

  return { init, animate, handleDispose, handleResize, updateSkybox }
}
