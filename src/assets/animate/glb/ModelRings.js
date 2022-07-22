import { useEffect, useRef } from "react";
import { useGLTF, useAnimations, PerspectiveCamera } from "@react-three/drei";
import mod from "./rings.glb";

export default function ModelRings({ ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(mod);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions?.["Culture_3|Take 001|BaseLayer.001"].play();
    actions?.["C|Take 001|BaseLayer.001"].play();
    actions?.["Technology_3|Take 001|BaseLayer.001"].play();
    actions?.["Tor_C|Take 001|BaseLayer.001"].play();
    actions?.["T|Take 001|BaseLayer.001"].play();
  });
  return (
    <PerspectiveCamera position={[0.2, 0.2, 0]} rotation={[0.2, 1, 0]}>
      <group ref={group} {...props} dispose={null}>
        <group name="Scene">
          <group name="group" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group
              name="Culture_3"
              position={[-160.07, 32.78, -50.7]}
              rotation={[0.7, 0.55, 2.85]}
            >
              <mesh
                name="Tor_C"
                geometry={nodes.Tor_C.geometry}
                material={materials.glass}
                position={[-116.79, -29.61, 162.03]}
                scale={[13.18, 13.18, 17.65]}
              />
            </group>
            <group
              name="Technology_3"
              position={[104.75, 97.32, -97.31]}
              rotation={[0.43, -0.49, -0.42]}
            >
              <mesh
                name="Tor_T"
                geometry={nodes.Tor_T.geometry}
                material={materials.glass}
                position={[26.2, -24.38, 153.83]}
                scale={[13.18, 13.18, 18.53]}
              />
            </group>
            <mesh
              name="C"
              geometry={nodes.C.geometry}
              material={materials.letter}
              position={[66.99, -39.46, -34.72]}
              rotation={[0.7, 0.55, 2.85]}
              scale={[1.3, 1, 1.06]}
            />
            <mesh
              name="T"
              geometry={nodes.T.geometry}
              material={materials.letter}
              position={[-35.24, 81.71, 14.54]}
              rotation={[0.43, -0.49, -0.42]}
              scale={[1.3, 1, 1.06]}
            />
          </group>
        </group>
      </group>
    </PerspectiveCamera>
  );
}

useGLTF.preload(mod);
