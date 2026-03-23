"use client"


import { useEffect,useRef } from 'react';
import * as THREE from 'three';

export const ParticleWave = () =>{
        const mountRef = useRef<HTMLDivElement>(null);

        useEffect(() => {
        if (!mountRef.current) return;

        // 1. 基本設定（シーン、カメラ、レンダラー）
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
        // カメラ位置
        camera.position.set(0, 150, 400);
        // 少し下を向かせる
        camera.lookAt(0, 0, 0);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); // 背景透過
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        // 2. パーティクルの生成（BufferGeometryを使用して高速化）
        const SEPARATION = 30, AMOUNTX = 200, AMOUNTY = 150; //SEPARATION 粒と粒の隙間 AMOUNTX 横方向の粒,AMOUNTY　奥行きの粒
        const numParticles = AMOUNTX * AMOUNTY;
        const positions = new Float32Array(numParticles * 3);
        const scales = new Float32Array(numParticles);

        let i = 0, j = 0;
        for (let ix = 0; ix < AMOUNTX; ix++) {
            for (let iy = 0; iy < AMOUNTY; iy++) {
            positions[i] = ix * SEPARATION - ((AMOUNTX * SEPARATION) / 2); // x
            positions[i + 1] = 0;                                          // y (後でアニメーション)
            positions[i + 2] = iy * SEPARATION - ((AMOUNTY * SEPARATION) / 2); // z
            scales[j] = 1;

            i += 3;
            j++;
            }
        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1));

        // カスタムシェーダーで丸い光の粒を作る
         //strength(光の強さ)
        const material = new THREE.ShaderMaterial({
            uniforms: {
            color: { value: new THREE.Color(0x00aaff) }, // 水色に変更（0xffffffで白）
            },
            blending:THREE.AdditiveBlending,
            transparent:true,
            depthWrite:false,
            vertexShader: `
            attribute float scale;
            void main() {
                vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
                gl_PointSize = scale * ( 600.0 / - mvPosition.z );
                gl_Position = projectionMatrix * mvPosition;
            }
            `,
            fragmentShader: `
            uniform vec3 color;
            void main() {
                float dist = length(gl_PointCoord - vec2( 0.5 )); 
                float strength = 1.0 -(dist * 2.0); 
                strength = max(0.0,strength);
                strength = pow(strength,3.0);
                gl_FragColor = vec4( color, strength );
            }
            `
        });

        const particles = new THREE.Points(geometry, material);
        scene.add(particles);

        // 3. アニメーションループ
        let count = 0;
        let animationFrameId: number;

        const render = () => {
            const positions = particles.geometry.attributes.position.array;
            const scales = particles.geometry.attributes.scale.array;

            let i = 0, j = 0;
            for (let ix = 0; ix < AMOUNTX; ix++) {
            for (let iy = 0; iy < AMOUNTY; iy++) {
                // 元のコードと同じ波の計算式
                positions[i + 1] = (Math.sin((ix + count) * 0.3) * 50) + (Math.sin((iy + count) * 0.5) * 30);
                scales[j] = (Math.sin((ix + count) * 0.3) + 1) * 4 + (Math.sin((iy + count) * 0.5) + 1) * 4;
                i += 3;
                j++;
            }
            }

            particles.geometry.attributes.position.needsUpdate = true;
            particles.geometry.attributes.scale.needsUpdate = true;

            renderer.render(scene, camera);
            count += 0.1;
            animationFrameId = requestAnimationFrame(render);
        };

        render();

        // 4. ウィンドウリサイズ対応
        const onWindowResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', onWindowResize);

        // 5. クリーンアップ（ページ遷移時にメモリリークを防ぐ）
        return () => {
            window.removeEventListener('resize', onWindowResize);
            cancelAnimationFrame(animationFrameId);
            if (mountRef.current) {
            mountRef.current.removeChild(renderer.domElement);
            }
            geometry.dispose();
            material.dispose();
        };
        }, []);

        // 背景として固定配置するスタイル
        return <div ref={mountRef} className="absolute top-0 left-0 w-full h-full -z-10" />;
}
