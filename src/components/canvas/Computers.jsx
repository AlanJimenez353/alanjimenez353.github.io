import {Suspense,useEffect,useState} from 'react'
import {Canvas} from '@react-three/fiber'
import { OrbitControls,Preload,useGLTF } from '@react-three/drei'

import CanvasLoader from "../Loader";

const Computers = ({isMobile}) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

    return(
      <mesh>
        <hemisphereLight intensity={0.15} groundColor="black"/>
        <pointLight intensity={1}/>
        <primitive object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0,-3.5,-2.2] : [0,-3.65,-1.5]}
        />
      </mesh>
    )

    
    
}
const ComputersCanvas= ()=>{
  const [isMobile,setIsMobile]=useState(false);

  useEffect(()=>{

    //Agrego eventListener para los cambios en el tamaño de pantalla 
    const mediaQuery=window.matchMedia('(max-width:500px)');
    //Seteo el valor inicial del valor is mobile en el estado de la variable 
    setIsMobile(mediaQuery.matches);
    //Defino un callback para manejar los cambios en el tamaño de la pantalla 
    const handleMediaQueryChange=(event)=>{
      setIsMobile(event.matches);
    }
    //Agrego el callback como un listener para los cambios en los media query
    mediaQuery.addEventListener('change',handleMediaQueryChange);
    //Quito el listener cuando el componente es desmontado
    return()=>{
      mediaQuery.removeEventListener('change',handleMediaQueryChange);
    }
  },[])

  return(
    <Canvas frameloop='demand'
    shadows
    camera={{position:[20,3,5], fov:25}}
    gl={{preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls 
        enableZoom={false}
        maxPolarAngle={Math.PI/2}
        minPolarAngle={Math.PI/2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all/>


    </Canvas>
  )
}
export default ComputersCanvas