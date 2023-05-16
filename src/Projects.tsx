
import { Canvas } from "@react-three/fiber";
import TorusKnot from "./3js_components/TorusKnot";
import './Projects.css';

const Projects = () => {
    return (
        <>
            <div className='loading'>
                <Canvas>
                    <TorusKnot />
                </Canvas>
            </div>
            <div className='projects-main'>
                <h1>Project: Still under Construction</h1>
                <p>See resume and github for projects that I am proud of</p>
            </div>
        </>
    )
}

export default Projects;