import React, { useEffect, useState } from 'react'

const Loading: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setIsVisible(false), 600)
    }
    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
    }
    return () => window.removeEventListener('load', handleLoad)
  }, [])

  return (
    <div
      className={`fixed inset-0 w-screen h-screen z-[9999] flex items-center justify-center transition-opacity duration-700 bg-gradient-to-br from-primary to-primary-light ${
        isVisible ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'
      }`}
    >
      <div className="relative w-36 h-36 flex items-center justify-center bg-white/20 rounded-full shadow-xl">
        {/* Animated spinning ring */}
        <span
          className="absolute inset-0 rounded-full border-4 border-white/30 border-t-primary border-b-primary-light animate-spin"
          style={{ animationDuration: '1.6s' }}
        />
        {/* Logo with rotate and pulse */}
        <img
          src="/assets/images/Asset 21@30x.png"
          alt="Loading..."
          className="w-24 h-24 object-contain z-10 select-none pointer-events-none animate-[spin_1.2s_linear_infinite,pulse_2s_ease-in-out_infinite]"
          style={{
            animationName: 'spin, pulse',
            animationDuration: '1.2s, 2s',
            animationIterationCount: 'infinite, infinite',
            animationTimingFunction: 'linear, ease-in-out',
          }}
        />
        {/* Custom keyframes for pulse */}
        <style>
          {`
            @keyframes pulse {
              0% { opacity: 1; filter: brightness(1);}
              50% { opacity: 0.85; filter: brightness(1.08);}
              100% { opacity: 1; filter: brightness(1);}
            }
          `}
        </style>
      </div>
    </div>
  )
}

export default Loading