import { useRef } from 'react'
import { Mesh } from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stats, OrbitControls } from '@react-three/drei'
import HobbieExperience from './3js_components/HobbieExperience'
import * as THREE from 'three'

import './Hobbies.css'


const TorusKnot = () => {
  const myMesh = useRef<Mesh>(null)
  useFrame((state, delta) => {
    if (myMesh.current){
      myMesh.current.rotation.x += delta
      myMesh.current.rotation.y += delta
      myMesh.current.rotation.z += delta
    }
  })

  return (
    <HobbieExperience/>
  )
}


function Hobbies() {
  
  return (
    <div className='hobbies-main'>
      <Canvas camera={{ position: [6, 8, 4] }} shadows > 
        <OrbitControls />
        <primitive object={new THREE.AxesHelper(10)} />
        <HobbieExperience />
      </Canvas>
    </div>
  )
}

export default Hobbies