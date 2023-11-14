/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.12 public/3dAssets/woman.gltf 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Woman = (props) => {
  const { nodes, materials } = useGLTF('/3dAssets/woman.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.quintal_001.geometry} material={nodes.quintal_001.material} />
      <mesh geometry={nodes.quartinho_001.geometry} material={nodes.quartinho_001.material} />
      <mesh geometry={nodes.banho_001.geometry} material={nodes.banho_001.material} />
      <mesh geometry={nodes['servi�o_001'].geometry} material={nodes['servi�o_001'].material} />
      <mesh geometry={nodes.despensa_001.geometry} material={nodes.despensa_001.material} />
      <mesh geometry={nodes.cozinha_001.geometry} material={nodes.cozinha_001.material} />
      <mesh geometry={nodes.Susan_001.geometry} material={nodes.Susan_001.material} />
      <mesh geometry={nodes.Layer0_001.geometry} material={nodes.Layer0_001.material} />
    </group>
  )
}

useGLTF.preload('/3dAssets/woman.gltf')
export default Woman;