import { DoubleSide } from "three";

import { OrbitControls, useGLTF } from '@react-three/drei';
import { GLTFResult } from '../../public/lowpoly_tree_pack/Scene';
import { Route } from 'react-router';

const resourses_path = './lowpoly_tree_pack'

interface TreeProps {
    geometry: any,
    material: any,
    rotation: any,
    position: number[],
    scale: any,
}


export function TreeLoader() {
    const { nodes, materials } = useGLTF(resourses_path + '/scene.gltf') as GLTFResult
    let TreeMashs: TreeProps[] = [
        {geometry: nodes.Plane002_Material003_0.geometry, material: materials['Material.003'], position: [-282.24, 249.56, 805.29], rotation: [-Math.PI / 2, 0, -0.76], scale: 100},
        {geometry: nodes.Plane006_Material003_0.geometry, material: materials['Material.003'], position: [376.99, 280.1, 792.86], rotation: [-Math.PI / 2, 0, 0], scale: 100},
        {geometry: nodes.Cone002_Material007_0.geometry, material: materials['Material.007'], position: [-836.64, 217.3, 811.29], rotation: [-1.57, -0.05, 3.12], scale: [76, 75.9, 108.93]},
        {geometry: nodes.Plane009_Material008_0.geometry, material: materials['Material.008'], position: [-1139.31, 238.08, 805.47], rotation: [-Math.PI / 2, 0, 0], scale: 64.06},
        {geometry: nodes.Plane011_Material007_0.geometry, material: materials['Material.007'], position: [-573.51, 140.81, 811.94], rotation: [-Math.PI / 2, 0, 2.44], scale: 100},
        {geometry: nodes.Plane012_Material009_0.geometry, material: materials['Material.009'], position: [-1498.19, 226.47, 803.06], rotation: [-Math.PI / 2, 0, 0], scale: 100},
        {geometry: nodes.Plane013_Material011_0.geometry, material: materials['Material.011'], position: [343.35, 241.44, 29.56], rotation: [-Math.PI / 2, 0, 0], scale: 113.42},
        {geometry: nodes.Icosphere001_Material018_0.geometry, material: materials['Material.018'], position: [-4.39, 291.43, -3.11], rotation: [-1.55, -0.17, 0.14], scale: [73.41, 65.57, 99.7]},
        {geometry: nodes.Icosphere003_Material004_0.geometry, material: materials['Material.004'], position: [-301.74, 184.54, 29.53], rotation: [Math.PI / 2, 0, Math.PI], scale: [58.17, 58.17, 94.2]},
        {geometry: nodes.Icosphere011_Material016_0.geometry, material: materials['Material.016'], position: [-568.32, 207.26, 20.78], rotation: [-1.53, -0.19, -0.09], scale: [50.4, 50.4, 72]},
        {geometry: nodes.Cube002_Material001_0.geometry, material: materials['Material.001'], position: [-839.46, 212.27, -11.83], rotation: [-Math.PI / 2, 0, 0], scale: 42.83},
        {geometry: nodes.Cube004_Material020_0.geometry, material: materials['Material.020'], position: [-1097.76, 217.69, 1.59], rotation: [-Math.PI / 2, 0, Math.PI / 2], scale: 42.83},
        {geometry: nodes.Icosphere012_Material002_0.geometry, material: materials['Material.002'], position: [127.36, 26.64, 1244.43], rotation: [-Math.PI / 2, 0, 0], scale: 52.07},
        {geometry: nodes.Icosphere014_Material002_0.geometry, material: materials['Material.002'], position: [-24, 28.02, 1244.14], rotation: [-Math.PI / 2, 0, 0], scale: 52.07},
        {geometry: nodes.Icosphere016_Material002_0.geometry, material: materials['Material.002'], position: [-271.86, 28.02, 1248.45], rotation: [-Math.PI / 2, 0, 0], scale: 52.07},
        {geometry: nodes.Icosphere017_Material002_0.geometry, material: materials['Material.002'], position: [-410.83, 26.64, 1248.66], rotation: [-Math.PI / 2, 0, 0], scale: 52.07},
        {geometry: nodes.Icosphere018_Material002_0.geometry, material: materials['Material.002'], position: [-562.19, 28.02, 1248.36], rotation: [-Math.PI / 2, 0, 0], scale: 52.07},
        {geometry: nodes.Icosphere019_Material012_0.geometry, material: materials['Material.012'], position: [-148.05, 38.39, 1243.52], rotation: [-Math.PI / 2, 0, 1.55], scale: 41.16},
        {geometry: nodes.Icosphere020_Material006_0.geometry, material: materials['Material.006'], position: [391.05, 38.95, 1243.29], rotation: [1.66, 0, 1.59], scale: 41.16},
        {geometry: nodes.Plane014_Material004_0.geometry, material: materials['Material.004'], position: [45.7, 251.12, 793.72], rotation: [-Math.PI / 2, 0, 2.44], scale: 118.71},
        {geometry: nodes.Circle001_Material015_0.geometry, material: materials['Material.015'], position: [-1335.63, 179.61, 5.14], rotation: [-Math.PI / 2, 0.04, 2.01], scale: [50.9, 47.9, 99.27]},
        {geometry: nodes.Icosphere021_Material002_0.geometry, material: materials['Material.002'], position: [265.32, 28.02, 1247], rotation: [-Math.PI / 2, 0, 0], scale: 52.07},
        {geometry: nodes.Plane015_Material023_0.geometry, material: materials['Material.023'], position: [-1564.59, 279.7, 18.15], rotation: [-Math.PI / 2, 0, 0], scale: 100},
        {geometry: nodes.Icosphere004_Material028_0.geometry, material: materials['Material.028'], position: [-562.55, 28.33, 1042.27], rotation: [1.66, 0, 1.59], scale: 41.16},
        {geometry: nodes.Icosphere005_Material012_0.geometry, material: materials['Material.012'], position: [-562.19, 28.02, 1042.19], rotation: [1.66, 0, 1.59], scale: 41.16},
        {geometry: nodes.Icosphere006_Material028_0.geometry, material: materials['Material.028'], position: [-410.82, 26.55, 1042.6], rotation: [1.66, 0, 1.59], scale: 41.16},
        {geometry: nodes.Icosphere007_Material012_0.geometry, material: materials['Material.012'], position: [-410.83, 26.64, 1042.49], rotation: [1.66, 0, 1.59], scale: 41.16},
        {geometry: nodes.Icosphere008_Material028_0.geometry, material: materials['Material.028'], position: [-272.22, 27.83, 1042.37], rotation: [1.66, 0, 1.59], scale: 41.16},
        {geometry: nodes.Icosphere010_Material012_0.geometry, material: materials['Material.012'], position: [-271.86, 28.02, 1042.28], rotation: [1.66, 0, 1.59], scale: 41.16},
        {geometry: nodes.Icosphere013_Material028_0.geometry, material: materials['Material.028'], position: [-148.01, 38.7, 1037.27], rotation: [1.66, 0, 1.59], scale: 41.16},
        {geometry: nodes.Icosphere015_Material012_0.geometry, material: materials['Material.012'], position: [-148.05, 38.39, 1037.35], rotation: [1.66, 0, 1.59], scale: 41.16},
        {geometry: nodes.Icosphere022_Material028_0.geometry, material: materials['Material.028'], position: [-24.36, 28.33, 1038.05], rotation: [1.66, 0, 1.59], scale: 41.16},
        {geometry: nodes.Icosphere023_Material012_0.geometry, material: materials['Material.012'], position: [-24, 28.02, 1037.97], rotation: [1.66, 0, 1.59], scale: 41.16},
        {geometry: nodes.Icosphere024_Material028_0.geometry, material: materials['Material.028'], position: [127.37, 26.55, 1038.37], rotation: [1.66, 0, 1.59], scale: 41.16},
        {geometry: nodes.Icosphere025_Material012_0.geometry, material: materials['Material.012'], position: [127.36, 26.64, 1038.26], rotation: [1.66, 0, 1.59], scale: 41.16},
        {geometry: nodes.Icosphere026_Material028_0.geometry, material: materials['Material.028'], position: [264.96, 27.83, 1040.93], rotation: [1.66, 0, 1.59], scale: 41.16},
        {geometry: nodes.Icosphere027_Material012_0.geometry, material: materials['Material.012'], position: [265.32, 28.02, 1040.83], rotation: [1.66, 0, 1.59], scale: 41.16},
        {geometry: nodes.Icosphere028_Material028_0.geometry, material: materials['Material.028'], position: [391.08, 39.52, 1037.24], rotation: [1.66, 0, 1.59], scale: 41.16},
        {geometry: nodes.Icosphere029_Material012_0.geometry, material: materials['Material.012'], position: [391.05, 38.95, 1037.12], rotation: [1.66, 0, 1.59], scale: 41.16},
    ]


    function randomNumber(min:number, max:number, step:number){
        return Math.floor(Math.random() * (max - min) / step) * step + min
    }
    function randomLocation(min:number, max:number, step:number){
        return [randomNumber(min, max, step), randomNumber(min, max, step)]
    }

    interface getTreeArgsProp {
        type: number,
        x: number,
        y: number,
        z: number,
    }
    function getTreeArgs(count:number){
        let arg:getTreeArgsProp[] = []

        var i = 0;
        const tree_edge = 15
        for( var x = -20; x <= 20; x++){
            for( var z = -20; z <= 20; z++ ){
                if(i % 2 == 0 && ((x < -tree_edge || x > tree_edge) || (z < -tree_edge || z > tree_edge)) ){
                    arg.push({type: randomNumber(0, TreeMashs.length, 1), x: x, y: 0, z: z})
                }
                i++
            }
        }
        return arg
    }

    const generated_trees = getTreeArgs(150).map((arg: getTreeArgsProp, i) => (
        <mesh castShadow receiveShadow key={i} geometry={TreeMashs[arg.type].geometry} material={TreeMashs[arg.type].material} position={[arg.x, TreeMashs[arg.type].position[1]/100, arg.z]} rotation={TreeMashs[arg.type].rotation} scale={TreeMashs[arg.type].scale / 100} />
    ))

    const generated_floor = getTreeArgs(150).map( function (arg: getTreeArgsProp, i){
        const floor_height = 0.25
        return (<mesh position={[0,0,0]}  rotation={[Math.PI/2,0,0]} key={i} receiveShadow>
            <planeGeometry args={[42,42]}></planeGeometry>
            <meshStandardMaterial color={'green'} side={DoubleSide} />
        </mesh>)
    })



    return (
        <>
            {generated_trees}
            {generated_floor}
        </>
    )
}

useGLTF.preload(resourses_path + '/scene.gltf')