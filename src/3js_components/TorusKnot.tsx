import { useRef } from 'react'
import { Mesh } from 'three'
import { useFrame } from '@react-three/fiber'

const TorusKnot = () => {
  const myMesh = useRef<Mesh>(null)
  useFrame(({clock}) => {
    if (myMesh.current){
      myMesh.current.rotation.x = clock.getElapsedTime()
      myMesh.current.rotation.y = clock.getElapsedTime()
      myMesh.current.rotation.z = clock.getElapsedTime()
    }
  })

  return (
    <mesh ref={myMesh} position={[0, 0, 0]} rotation-y={Math.PI * 0.25}>
      <torusKnotGeometry />
      <meshNormalMaterial />
    </mesh>
  )
}

export default TorusKnot