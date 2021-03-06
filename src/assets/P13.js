/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/P13.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0.5]} scale={[1.3, 1.5, 1.9]}>
        <mesh geometry={nodes.mesh_25_4.geometry} material={materials['Material.060']} />
        <mesh geometry={nodes.mesh_25_1.geometry} material={materials['Material.064']} />
        <mesh geometry={nodes.mesh_25_3.geometry} material={materials['Material.065']} />
        <mesh geometry={nodes.mesh_25_5.geometry} material={materials['Material.061']} />
        <mesh geometry={nodes.mesh_25_2.geometry} material={materials['Material.063']} />
        <mesh geometry={nodes.mesh_25_0.geometry} material={materials['Material.062']} />
      </group>
    </group>
  )
}

useGLTF.preload('/P13.gltf')
