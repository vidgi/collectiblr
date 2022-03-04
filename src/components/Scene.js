/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import {useFrame} from '@react-three/fiber'
import { Html } from "@react-three/drei"

function getSiteURL(url){
  var url = url.substring(url.indexOf("/") + 1)
  return `/collectible/${url}`
}

function getDisplayTitle(url){
  var url = url.substring(url.indexOf("/") + 1)
  return url.replace(/-/g,' ')
}

export default function Scene({ ...props }) {
  const siteURL = getSiteURL(props.URL)
  const displayTitle = getDisplayTitle(props.URL)
  const { nodes } = useGLTF(`/assets/${props.URL}.glb`)
  console.log(nodes)
  const ref = useRef()
  // const rotationVal = -Math.PI / 2
  // useFrame(() => (rotationVal = rotationVal +0.01))
  // useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))
  useFrame((state) => {
    if (props.animate){
    const t = state.clock.getElapsedTime()
    ref.current.rotation.y = t/8
    ref.current.scale.y = 1*Math.sin(t/1.6)+2
    ref.current.scale.x = 1*Math.sin(t/1.6)+2
    ref.current.scale.z = 1*Math.sin(t/1.6)+2
    }
  })

  return (
    <group ref={ref} dispose={null}>
    {/* <group rotation={[rotationVal, 0, 0]} scale={[1, 1, 1]}> */}
    <mesh geometry={nodes['mesh_0'].geometry} material={nodes['mesh_0'].material} scale={props.scale} position = {props.position}> 
           <meshStandardMaterial
              color={"#000000"}
              wireframe = {true}
              transparent={false}
              opacity={1}
              wireframeLinewidth = {1}
         />
         <Html distanceFactor={5} center>
           <div className ="annotation">
           <a href={siteURL}>{displayTitle}</a>
           </div>
          </Html>
      </mesh>
      {/* </group> */}

          </group>
          

  )
}

