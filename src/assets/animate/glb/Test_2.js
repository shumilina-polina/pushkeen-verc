import { useEffect, useRef } from "react";
import { useGLTF, useAnimations, PerspectiveCamera } from "@react-three/drei";
import mod from "./test_2.glb";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(mod);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions?.["Culture_4|LOGO|BaseLayer.001"].play();
    actions?.["Technology_4|LOGO|BaseLayer.001"].play();
    actions?.["culture|LOGO|BaseLayer.001"].play();
    actions?.["pTorus12|LOGO|BaseLayer.001"].play();
    actions?.["pTorus14|LOGO|BaseLayer.001"].play();
    actions?.["technology|LOGO|BaseLayer.001"].play();
    actions?.["test|LOGO|BaseLayer"].play();
  });
  return (
    <PerspectiveCamera position={[0.2, 0.2, 0]} rotation={[0.2, 1, 0]}>
      <group ref={group} {...props} dispose={null}>
        <group name="Scene">
          <group name="test" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group
              name="Culture_4"
              position={[-160.07, 32.78, -50.7]}
              rotation={[0.7, 0.55, 2.85]}
            >
              <mesh
                name="pTorus12"
                geometry={nodes.pTorus12.geometry}
                material={materials.steklo}
                position={[-116.79, -29.61, 162.03]}
              />
            </group>
            <group
              name="Technology_4"
              position={[104.75, 97.32, -97.31]}
              rotation={[0.43, -0.49, -0.42]}
            >
              <mesh
                name="pTorus14"
                geometry={nodes.pTorus14.geometry}
                material={materials.steklo}
                position={[26.2, -24.38, 153.83]}
              />
            </group>
            <mesh
              name="culture"
              geometry={nodes.culture.geometry}
              material={materials["letters.001"]}
              position={[67.77, -38.87, -34.86]}
              rotation={[0.7, 0.55, 2.85]}
            />
            <mesh
              name="technology"
              geometry={nodes.technology.geometry}
              material={materials["letters.001"]}
              position={[38.91, 12.97, 17.57]}
              rotation={[0.43, -0.49, -0.34]}
            />
          </group>
        </group>
      </group>
    </PerspectiveCamera>
  );
}

useGLTF.preload(mod);
