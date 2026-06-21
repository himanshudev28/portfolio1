import { useRef, Suspense, type RefObject } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sparkles, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

/* ── Shared material factory ────────────────────────────────────────────────── */
/* Body: neutral charcoal — no cold blue tint */
function bodyMat()   { return { color:'#111010', metalness:0.88, roughness:0.22 } }
/* Accent: coral-rose (#E11D48) — matches portfolio palette */
function accentMat() { return { color:'#C0182E', metalness:0.1, roughness:0.6, emissive:'#7F0010', emissiveIntensity:0.35 } }
/* Knee: slightly lighter coral */
function kneeAccent(){ return { color:'#E11D48', metalness:0.2, roughness:0.45, emissive:'#9F0828', emissiveIntensity:0.28 } }

/* ── Head ──────────────────────────────────────────────────────────────────── */
function Head({ headRef }: { headRef: RefObject<THREE.Group> }) {
  const visorRef = useRef<THREE.MeshStandardMaterial>(null)
  const antRef   = useRef<THREE.Mesh>(null)

  useFrame(({ clock, pointer }) => {
    const t = clock.elapsedTime
    if (headRef.current) {
      headRef.current.rotation.y += (pointer.x * 0.45 - headRef.current.rotation.y) * 0.07
      headRef.current.rotation.x += (-pointer.y * 0.25 - headRef.current.rotation.x) * 0.07
    }
    if (visorRef.current) {
      visorRef.current.emissiveIntensity = 0.5 + Math.sin(t * 1.2) * 0.28
    }
    if (antRef.current) {
      antRef.current.scale.setScalar(0.85 + Math.sin(t * 2.8) * 0.15)
    }
  })

  return (
    <group ref={headRef} position={[0, 1.85, 0]}>
      {/* Helmet shell */}
      <mesh>
        <boxGeometry args={[2.1, 2.1, 2.1]} />
        <meshStandardMaterial {...bodyMat()} />
      </mesh>

      {/* Helmet top ridge */}
      <mesh position={[0, 1.08, 0]}>
        <boxGeometry args={[1.5, 0.14, 1.5]} />
        <meshStandardMaterial {...accentMat()} />
      </mesh>

      {/* Side panels */}
      {([-1,1] as const).map((s) => (
        <mesh key={s} position={[s * 1.1, 0, 0]}>
          <boxGeometry args={[0.12, 0.85, 0.85]} />
          <meshStandardMaterial {...accentMat()} />
        </mesh>
      ))}

      {/* Visor recess frame */}
      <mesh position={[0, 0.12, 1.06]}>
        <boxGeometry args={[1.65, 1.05, 0.08]} />
        <meshStandardMaterial color="#0A0808" metalness={0.95} roughness={0.05} />
      </mesh>

      {/* Visor — warm gold glow, contrasts with rose body */}
      <mesh position={[0, 0.12, 1.1]}>
        <boxGeometry args={[1.42, 0.88, 0.05]} />
        <meshStandardMaterial
          ref={visorRef}
          color="#F59E0B"
          emissive="#D97706"
          emissiveIntensity={0.6}
          transparent
          opacity={0.92}
          roughness={0.04}
          metalness={0.05}
        />
      </mesh>

      {/* Visor reflection strip */}
      <mesh position={[0.28, 0.3, 1.13]}>
        <boxGeometry args={[0.32, 0.08, 0.02]} />
        <meshBasicMaterial color="#FEF3C7" transparent opacity={0.5} />
      </mesh>

      {/* Chin vent */}
      <mesh position={[0, -0.88, 0.88]}>
        <boxGeometry args={[1.1, 0.28, 0.28]} />
        <meshStandardMaterial {...accentMat()} />
      </mesh>
      {[-0.3, 0, 0.3].map((x) => (
        <mesh key={x} position={[x, -0.88, 1.0]}>
          <boxGeometry args={[0.06, 0.22, 0.05]} />
          <meshBasicMaterial color="#FB7185" />
        </mesh>
      ))}

      {/* Antenna */}
      <mesh position={[0, 1.55, 0]}>
        <cylinderGeometry args={[0.05, 0.06, 0.9, 8]} />
        <meshStandardMaterial {...accentMat()} />
      </mesh>
      <mesh ref={antRef} position={[0, 2.05, 0]}>
        <sphereGeometry args={[0.16, 16, 16]} />
        <meshBasicMaterial color="#FBBF24" />
      </mesh>
    </group>
  )
}

/* ── Body ──────────────────────────────────────────────────────────────────── */
function Body() {
  return (
    <group position={[0, -0.25, 0]}>
      {/* Torso */}
      <mesh>
        <boxGeometry args={[2.5, 2.1, 1.55]} />
        <meshStandardMaterial {...bodyMat()} />
      </mesh>

      {/* Shoulder pads */}
      {([-1, 1] as const).map((s) => (
        <mesh key={s} position={[s * 1.3, 0.82, 0]}>
          <boxGeometry args={[0.32, 0.55, 1.0]} />
          <meshStandardMaterial {...accentMat()} />
        </mesh>
      ))}

      {/* Chest panel */}
      <mesh position={[0, 0.2, 0.83]}>
        <boxGeometry args={[1.4, 1.1, 0.1]} />
        <meshStandardMaterial color="#1a0808" metalness={0.4} roughness={0.6} emissive="#2a0a10" emissiveIntensity={0.25} />
      </mesh>

      {/* Chest panel dots */}
      {[[-0.38, 0.42], [0, 0.42], [0.38, 0.42], [-0.38, 0.1], [0, 0.1], [0.38, 0.1]].map(([x, y], i) => (
        <mesh key={i} position={[x, y, 0.91]}>
          <sphereGeometry args={[0.08, 8, 8]} />
          <meshBasicMaterial color={i === 1 ? '#FBBF24' : i === 4 ? '#4ADE80' : '#FB7185'} />
        </mesh>
      ))}

      {/* Chest bar */}
      <mesh position={[0, -0.22, 0.91]}>
        <boxGeometry args={[0.9, 0.12, 0.04]} />
        <meshBasicMaterial color="#E11D48" />
      </mesh>

      {/* Waist belt */}
      <mesh position={[0, -0.98, 0]}>
        <boxGeometry args={[2.6, 0.28, 1.6]} />
        <meshStandardMaterial {...accentMat()} />
      </mesh>
    </group>
  )
}

/* ── Arm ───────────────────────────────────────────────────────────────────── */
function Arm({ side, armRef }: { side: 1 | -1; armRef: RefObject<THREE.Group> }) {
  return (
    <group ref={armRef} position={[side * 1.78, -0.15, 0]} rotation={[0, 0, side * 0.08]}>
      {/* Shoulder joint */}
      <mesh>
        <sphereGeometry args={[0.42, 16, 16]} />
        <meshStandardMaterial {...accentMat()} />
      </mesh>
      {/* Upper arm */}
      <mesh position={[0, -0.82, 0]}>
        <boxGeometry args={[0.55, 1.25, 0.55]} />
        <meshStandardMaterial {...bodyMat()} />
      </mesh>
      {/* Elbow */}
      <mesh position={[0, -1.55, 0]}>
        <sphereGeometry args={[0.32, 12, 12]} />
        <meshStandardMaterial {...bodyMat()} />
      </mesh>
      {/* Forearm */}
      <mesh position={[0, -2.3, 0]}>
        <boxGeometry args={[0.46, 1.1, 0.46]} />
        <meshStandardMaterial {...bodyMat()} />
      </mesh>
      {/* Wrist accent ring */}
      <mesh position={[0, -2.92, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 0.18, 12]} />
        <meshStandardMaterial {...accentMat()} />
      </mesh>
      {/* Hand */}
      <mesh position={[0, -3.18, 0]}>
        <sphereGeometry args={[0.36, 12, 12]} />
        <meshStandardMaterial {...bodyMat()} />
      </mesh>
    </group>
  )
}

/* ── Leg ───────────────────────────────────────────────────────────────────── */
function Leg({ side }: { side: 1 | -1 }) {
  return (
    <group position={[side * 0.75, -2.15, 0]}>
      {/* Hip joint */}
      <mesh>
        <sphereGeometry args={[0.45, 12, 12]} />
        <meshStandardMaterial {...bodyMat()} />
      </mesh>
      {/* Thigh */}
      <mesh position={[0, -0.85, 0]}>
        <boxGeometry args={[0.68, 1.4, 0.68]} />
        <meshStandardMaterial {...bodyMat()} />
      </mesh>
      {/* Knee */}
      <mesh position={[0, -1.65, 0]}>
        <sphereGeometry args={[0.38, 12, 12]} />
        <meshStandardMaterial {...kneeAccent()} />
      </mesh>
      {/* Shin */}
      <mesh position={[0, -2.45, 0]}>
        <boxGeometry args={[0.6, 1.3, 0.6]} />
        <meshStandardMaterial {...bodyMat()} />
      </mesh>
      {/* Ankle accent */}
      <mesh position={[0, -3.15, 0]}>
        <cylinderGeometry args={[0.34, 0.34, 0.2, 12]} />
        <meshStandardMaterial {...accentMat()} />
      </mesh>
      {/* Boot */}
      <mesh position={[0, -3.5, 0.14]}>
        <boxGeometry args={[0.72, 0.42, 0.98]} />
        <meshStandardMaterial {...accentMat()} />
      </mesh>
      {/* Boot sole */}
      <mesh position={[0, -3.73, 0.14]}>
        <boxGeometry args={[0.74, 0.12, 1.0]} />
        <meshStandardMaterial color="#1a0808" metalness={0.3} roughness={0.8} />
      </mesh>
    </group>
  )
}

/* ── Orbit ring ────────────────────────────────────────────────────────────── */
function OrbitRing() {
  const ringRef = useRef<THREE.Mesh>(null)
  useFrame(({ clock }) => {
    if (ringRef.current) {
      ringRef.current.rotation.z = clock.elapsedTime * 0.6
      ringRef.current.rotation.x = Math.PI / 2 + Math.sin(clock.elapsedTime * 0.3) * 0.2
    }
  })
  return (
    <mesh ref={ringRef} position={[0, -0.3, 0]}>
      <torusGeometry args={[3.8, 0.022, 8, 80]} />
      <meshBasicMaterial color="#E11D48" transparent opacity={0.25} />
    </mesh>
  )
}

/* ── Full robot assembled ──────────────────────────────────────────────────── */
function Robot() {
  const robotRef = useRef<THREE.Group>(null)
  const headRef  = useRef<THREE.Group>(null)
  const lArmRef  = useRef<THREE.Group>(null)
  const rArmRef  = useRef<THREE.Group>(null)

  useFrame(({ clock, pointer }) => {
    const t = clock.elapsedTime
    if (!robotRef.current) return

    // Floating
    robotRef.current.position.y = Math.sin(t * 0.75) * 0.2

    // Gentle body sway toward cursor
    robotRef.current.rotation.y += (pointer.x * 0.2 - robotRef.current.rotation.y) * 0.04
    robotRef.current.rotation.x += (-pointer.y * 0.06 - robotRef.current.rotation.x) * 0.04

    // Arm pendulum swing
    if (lArmRef.current) lArmRef.current.rotation.x = Math.sin(t * 0.75) * 0.14
    if (rArmRef.current) rArmRef.current.rotation.x = -Math.sin(t * 0.75) * 0.14
  })

  return (
    <group ref={robotRef} scale={0.34}>
      <Head headRef={headRef} />
      <Body />
      <Arm side={-1} armRef={lArmRef} />
      <Arm side={1}  armRef={rArmRef} />
      <Leg side={-1} />
      <Leg side={1}  />
      <OrbitRing />
    </group>
  )
}

/* ── Ground glow ───────────────────────────────────────────────────────────── */
function GroundGlow() {
  const ref = useRef<THREE.Mesh>(null)
  useFrame(({ clock }) => {
    if (ref.current) {
      (ref.current.material as THREE.MeshBasicMaterial).opacity =
        0.15 + Math.sin(clock.elapsedTime * 0.8) * 0.06
    }
  })
  return (
    <mesh ref={ref} position={[0, -1.6, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <circleGeometry args={[1.8, 40]} />
      <meshBasicMaterial color="#E11D48" transparent opacity={0.18} />
    </mesh>
  )
}

/* ── Scene ─────────────────────────────────────────────────────────────────── */
function Scene() {
  return (
    <>
      <ambientLight intensity={1.4} color="#1A0808" />
      <pointLight position={[4, 5, 6]}    intensity={6}   color="#F43F5E" />
      <pointLight position={[-4, -2, 4]}  intensity={3}   color="#F59E0B" />
      <pointLight position={[0, -5, -4]}  intensity={2}   color="#FDA4AF" />
      <pointLight position={[0, 2, 4]}    intensity={1.5} color="#F2EEE8" />

      <Sparkles
        count={90}
        scale={5.5}
        size={0.9}
        speed={0.35}
        color="#FB7185"
        opacity={0.45}
      />

      <Robot />
      <GroundGlow />
    </>
  )
}

/* ── Distortion sphere bg decoration ──────────────────────────────────────── */
function GlowSphere() {
  return (
    <mesh position={[0.8, 0.4, -2]} scale={1.8}>
      <sphereGeometry args={[1, 32, 32]} />
      <MeshDistortMaterial
        color="#7F0010"
        distort={0.55}
        speed={1.5}
        transparent
        opacity={0.12}
      />
    </mesh>
  )
}

/* ── Exported canvas wrapper ───────────────────────────────────────────────── */
export default function Robot3D() {
  return (
    <Canvas
      camera={{ position: [0, 0.4, 8.5], fov: 36 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
      dpr={[1, 2]}
    >
      <Suspense fallback={null}>
        <Scene />
        <GlowSphere />
      </Suspense>
    </Canvas>
  )
}
