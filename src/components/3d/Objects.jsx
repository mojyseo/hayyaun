import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { softShadows, MeshWobbleMaterial, OrbitControls } from 'drei';
import { useSpring, a, config } from 'react-spring/three';

// soft Shadows
softShadows();

const SpinningMesh = ({
  position: initPosition,
  color,
  speed,
  args,
  scale: initScale = [1, 1, 1],
}) => {
  const _mesh = useRef();
  useFrame(() => (_mesh.current.rotation.x = _mesh.current.rotation.y += 0.01));

  const [expand, setExpand] = useState(false);
  const [hover, setHover] = useState(false);
  const [props, set, stop] = useSpring(() => ({
    scale: initScale,
    position: initPosition,
  }));

  const [pointerMovement, setPointerMovement] = useState([0, 0]);
  const _prevPosition = useRef(initPosition);
  // update position
  useEffect(() => {
    const currPostition = [
      _prevPosition.current[0] + pointerMovement[0] * 0.01,
      _prevPosition.current[1] - pointerMovement[1] * 0.01,
      _prevPosition.current[2],
    ];

    const updatePosition = async () => {
      await set({
        position: currPostition,
        config: config.slow,
      });

      _prevPosition.current = currPostition;
    };

    updatePosition();
  }, [pointerMovement]);

  // update scale
  useEffect(() => {
    const updateScale = async () => {
      await set({
        scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1],
      });
    };

    updateScale();
  }, [expand]);

  return (
    <a.mesh
      ref={_mesh}
      onClick={() => setExpand(!expand)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
      onPointerMove={(e) => setPointerMovement([e.movementX, e.movementY])}
      // layout props
      position={props.position}
      scale={props.scale}
      castShadow>
      <boxBufferGeometry attach="geometry" args={args} />
      <MeshWobbleMaterial
        color={hover ? 'lightblue' : color}
        speed={speed}
        attach="material"
        factor={0.6}
      />
    </a.mesh>
  );
};

const Objects = () => {
  return (
    <Canvas
      colorManagement
      shadowMap
      camera={{ position: [0, 1, 10], fov: 60 }}>
      <ambientLight intensity={0.3} />
      <directionalLight
        castShadow
        position={[0, 10, 0]}
        intensity={1.5}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <pointLight position={[-10, 0, -20]} intensity={0.5} />
      <pointLight position={[0, -10, 0]} intensity={1.5} />

      <group>
        <mesh /** floor */
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -3, 0]}
          receiveShadow>
          <planeBufferGeometry attach="geometry" args={[100, 100]} />
          <shadowMaterial attach="material" opacity={0.3} />
        </mesh>
        <SpinningMesh
          position={[-2, 1, -5]}
          args={[1, 1, 1]}
          color="pink"
          speed={6}
        />
        <SpinningMesh
          position={[2, 1, -5]}
          args={[1, 1, 1]}
          color="pink"
          speed={6}
        />
      </group>

      {/* <OrbitControls /> */}
    </Canvas>
  );
};

export default Objects;
