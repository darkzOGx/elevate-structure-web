'use client'

import { useState, useRef, useMemo, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Text, Float } from '@react-three/drei'
import { motion } from 'framer-motion'
import * as THREE from 'three'

interface IntroProps {
    onComplete?: () => void
}

// --- 3D Components ---

function SteelBeam({ position, rotation, targetScale, delay = 0 }: any) {
    const mesh = useRef<THREE.Mesh>(null!)
    // Start at scale 0
    const [started, setStarted] = useState(false)

    useFrame((state) => {
        if (!started) {
            if (state.clock.elapsedTime > delay) setStarted(true)
            // Keep scale at 0
            if (mesh.current) mesh.current.scale.set(0, 0, 0)
        } else if (mesh.current) {
            // Lerp to target
            mesh.current.scale.lerp(new THREE.Vector3(targetScale[0], targetScale[1], targetScale[2]), 0.1)
        }
    })

    return (
        <group position={position} rotation={rotation}>
            <mesh ref={mesh}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="#334155" metalness={0.8} roughness={0.2} />
            </mesh>
        </group>
    )
}

function ConstructionScene({ onComplete }: { onComplete?: () => void }) {
    useFrame((state) => {
        if (state.clock.elapsedTime > 8 && onComplete) {
            onComplete()
        }
    })

    return (
        <group>
            {/* Columns */}
            <SteelBeam position={[-2, 0, 0]} targetScale={[0.5, 4, 0.5]} delay={0.5} />
            <SteelBeam position={[2, 0, 0]} targetScale={[0.5, 4, 0.5]} delay={0.7} />
            <SteelBeam position={[-2, 0, -2]} targetScale={[0.5, 4, 0.5]} delay={0.9} />
            <SteelBeam position={[2, 0, -2]} targetScale={[0.5, 4, 0.5]} delay={1.1} />

            {/* Beams */}
            <SteelBeam position={[0, 2, 0]} targetScale={[4.5, 0.5, 0.5]} delay={2.0} />
            <SteelBeam position={[0, 2, -2]} targetScale={[4.5, 0.5, 0.5]} delay={2.2} />
            <SteelBeam position={[-2, 2, -1]} rotation={[0, Math.PI / 2, 0]} targetScale={[2.5, 0.4, 0.4]} delay={2.5} />
            <SteelBeam position={[2, 2, -1]} rotation={[0, Math.PI / 2, 0]} targetScale={[2.5, 0.4, 0.4]} delay={2.7} />

            {/* Diagonal Bracing */}
            <SteelBeam position={[0, 0, 0]} rotation={[0, 0, Math.PI / 4]} targetScale={[5, 0.2, 0.2]} delay={3.5} />

            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                {/* Fallback Text if Font fails props */}
                <Text
                    position={[0, 0, 2]}
                    fontSize={1}
                    color="#f8fafc"
                    anchorX="center"
                    anchorY="middle"
                >
                    ELEVATE
                </Text>
            </Float>
        </group>
    )
}

// 21. Real Structure 3D
export function Structure3DIntro({ onComplete }: IntroProps) {
    console.log("Attempting to render Structure3DIntro")
    return (
        <div
            className="fixed inset-0 z-[100] bg-slate-900"
            // Removed motion.div temporarily to rule out animation hiding it
            // Using standard div
            onClick={() => console.log("Clicked Structure3DIntro container")}
        >
            <div className="absolute top-4 left-4 text-white z-[101]">3D DEBUG MODE</div>
            <Canvas shadows dpr={[1, 2]}
                onCreated={() => console.log("Canvas Created")}
            >
                <Suspense fallback={null}>
                    {/* <Environment preset="city" /> Reverting to environment to see if it works now that we restarted? No, keep it safe */}
                    <PerspectiveCamera makeDefault position={[5, 5, 8]} fov={50} />
                    <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />

                    <ambientLight intensity={0.8} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
                    <pointLight position={[-10, -10, -10]} intensity={1} color="orange" />
                    <directionalLight position={[5, 10, 7]} intensity={1} castShadow />

                    <ConstructionScene onComplete={onComplete} />

                    <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                        <planeGeometry args={[50, 50]} />
                        <meshStandardMaterial color="#1e293b" />
                    </mesh>
                </Suspense>
            </Canvas>
        </div>
    )
}

// 22. Particles 3D
function ParticleCloud({ onComplete }: { onComplete?: () => void }) {
    useFrame((state) => {
        if (state.clock.elapsedTime > 5 && onComplete) onComplete()
    })

    const count = 500
    // Use useMemo to avoid regenerating on every render
    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3)
        for (let i = 0; i < count * 3; i++) pos[i] = (Math.random() - 0.5) * 10
        return pos
    }, [count])

    return (
        <points>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={positions}
                    itemSize={3}
                    args={[positions, 3]} // Fix lint: Missing args
                />
            </bufferGeometry>
            <pointsMaterial size={0.1} color="#22d3ee" sizeAttenuation transparent opacity={0.8} />
        </points>
    )
}

export function Particle3DIntro({ onComplete }: IntroProps) {
    return (
        <motion.div
            className="fixed inset-0 z-50 bg-black"
            onAnimationComplete={onComplete}
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 5.5, duration: 1 }}
        >
            <Canvas dpr={[1, 2]}>
                <OrbitControls autoRotate autoRotateSpeed={5} />
                <Suspense fallback={null}>
                    <ParticleCloud onComplete={onComplete} />
                    <Text position={[0, 0, 0]} fontSize={1.5} color="white">
                        PRECISION
                    </Text>
                </Suspense>
            </Canvas>
        </motion.div>
    )
}

// Export a list of the 3D ones
export const IntroSet3D = [
    { id: 21, name: '3D Structural Assembly', Component: Structure3DIntro },
    { id: 22, name: '3D Particle Swarm', Component: Particle3DIntro },
]
