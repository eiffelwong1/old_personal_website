
import { Html, useGLTF } from '@react-three/drei';
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TreeLoader } from './TreeLoader'

import "./HobbieExperience.css"

const resourses_path = './'

const telescope_path = resourses_path + 'reflector_telescope.glb'
const car_path = resourses_path + 'muscle_car.glb'
const macbook_path = resourses_path + 'macbook.glb'
const frisbee_path = resourses_path + 'frisbee.glb'
const milkyway_pic_path = resourses_path + 'milkyway_in_zion.jpg'

interface HobbieExperienceProps {
}

export function HobbieExperience(props:HobbieExperienceProps) {
    const telescope = useLoader(GLTFLoader, telescope_path)
    const car = useLoader(GLTFLoader, car_path)
    const macbook = useLoader(GLTFLoader, macbook_path)
    const frisbee = useLoader(GLTFLoader, frisbee_path)
    return (    
        <>  
            <directionalLight castShadow intensity={1} position={[1, 2, 3]} />
            <ambientLight intensity={0.5} />
            <TreeLoader></TreeLoader>

            {/*telescope*/}
            <primitive object={telescope.scene} scale={0.01} position={[-5, 0, 5]} rotation={[0,Math.PI/2,0]}/>
            <Html center position={[-6, 4, 6]}>
                <p className='scen_text'>Astronomy!! I take photos of galaxy, nebulas and stars too</p>
                <img src={milkyway_pic_path} alt="Astronomy" width="100%" height="100%"></img>
            </Html>

            {/*auto cross*/}
            <primitive object={car.scene} scale={3} position={[-5, 0, -5]} rotation={[0,Math.PI/2,0]}/>
            <Html center position={[-5, 4, -5]}>
                <p className='scen_text'>Cars and Auto Cross!! Dream car is Porsche 911</p>
            </Html>

            {/*coding*/}
            <primitive object={macbook.scene} scale={5} position={[2, 0.1, 2]} rotation={[0,0,0]}/>
            <Html center position={[2, 4, 2]}>
                <p className='scen_text'>Coding. <br/> Well , that's why I became a Software Engineer</p>
            </Html>

            {/*frisbee*/}
            <primitive object={frisbee.scene} scale={1} position={[5, 0.1, -5]} rotation={[0,0,0]}/>
            <Html center position={[5, 4, -5]}>
                <p  className='scen_text'>Recently got into Frisbee, Enjoying it so far</p>
            </Html>

        </>
    )
}

export default HobbieExperience