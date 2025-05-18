import React, { useRef, useEffect } from 'react';

// Brand-inspired color palette (professional, subtle)
const COLORS = [
  '#0C7C92', // primary
  '#6EC9C4', // secondary
  '#16284F', // accent
  '#8B5CF6', // purple
  '#F43F5E', // pink
];

const PARTICLE_COUNT = 40; // Slightly reduced for performance and subtlety

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to viewport
    const setCanvasSize = () => {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      opacity: number;
      constructor(width: number, height: number) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 1.5 + 0.8; // smaller, more elegant
        this.speedX = Math.random() * 0.8 - 0.4;
        this.speedY = Math.random() * 0.8 - 0.4;
        this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
        this.opacity = Math.random() * 0.4 + 0.3; // softer, less distracting
      }
      draw(ctx: CanvasRenderingContext2D) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.restore();
      }
      update(width: number, height: number) {
        this.x += this.speedX;
        this.y += this.speedY;
        // Reset if out of bounds
        if (
          this.x < 0 ||
          this.x > width ||
          this.y < 0 ||
          this.y > height
        ) {
          this.x = Math.random() * width;
          this.y = Math.random() * height;
          this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
          this.opacity = Math.random() * 0.4 + 0.3;
        }
      }
    }

    // Create particles
    let particles: Particle[] = [];
    function initParticles() {
      particles = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(new Particle(canvas!.width, canvas!.height));
      }
    }
    initParticles();

    // Animation loop
    function animate() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      for (let p of particles) {
        p.update(canvas!.width, canvas!.height);
        p.draw(ctx!);
      }
      animationRef.current = requestAnimationFrame(animate);
    }
    animate();

    // Clean up
    return () => {
      window.removeEventListener('resize', setCanvasSize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="particle-canvas"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        background: 'transparent',
        transition: 'opacity 0.3s',
      }}
      aria-hidden="true"
    />
  );
};

export default ParticleBackground;