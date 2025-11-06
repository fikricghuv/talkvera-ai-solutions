import React, { useState, useEffect } from 'react';
import { Shield, Lock, Key, CheckCircle, User, Users, Eye, EyeOff } from 'lucide-react';

const AccessControlAnimation = () => {
  const [activeLayer, setActiveLayer] = useState(0);
  const [scanning, setScanning] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [showData, setShowData] = useState(false);
  const [pulseRing, setPulseRing] = useState(0);

  const roles = [
    { name: 'Admin', icon: Shield, color: 'text-red-400', bgColor: 'bg-red-500/20', borderColor: 'border-red-500/50' },
    { name: 'Manager', icon: Users, color: 'text-blue-400', bgColor: 'bg-blue-500/20', borderColor: 'border-blue-500/50' },
    { name: 'User', icon: User, color: 'text-green-400', bgColor: 'bg-green-500/20', borderColor: 'border-green-500/50' }
  ];

  const securityLayers = [
    'Authentication',
    'Authorization',
    'Encryption',
    'Monitoring'
  ];

  useEffect(() => {
    // Layer cycling animation
    const layerInterval = setInterval(() => {
      setActiveLayer(prev => (prev + 1) % securityLayers.length);
    }, 2000);

    // Pulse ring animation
    const pulseInterval = setInterval(() => {
      setPulseRing(prev => (prev + 1) % 3);
    }, 800);

    // Authentication sequence
    const authTimeout = setTimeout(() => {
      setScanning(false);
      setAuthenticated(true);
      setTimeout(() => setShowData(true), 500);
    }, 3000);

    // Reset sequence
    const resetTimeout = setTimeout(() => {
      setScanning(true);
      setAuthenticated(false);
      setShowData(false);
    }, 6000);

    return () => {
      clearInterval(layerInterval);
      clearInterval(pulseInterval);
      clearTimeout(authTimeout);
      clearTimeout(resetTimeout);
    };
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center p-8">
      <div className="relative w-full max-w-md aspect-square">
        {/* Glow background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>

        {/* Main container */}
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Outer rotating ring - Security layers */}
          <div className="absolute inset-0 animate-spin-slow">
            {securityLayers.map((layer, index) => {
              const angle = (index * 360) / securityLayers.length;
              const isActive = index === activeLayer;
              return (
                <div
                  key={index}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-140px)`
                  }}
                >
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300 ${
                    isActive 
                      ? 'bg-blue-500 text-white scale-110' 
                      : 'bg-gray-800 text-gray-400 scale-90'
                  }`}>
                    {layer}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pulse rings */}
          {[0, 1, 2].map((ring) => (
            <div
              key={ring}
              className={`absolute inset-0 rounded-full border-2 border-blue-500/30 transition-all duration-1000 ${
                pulseRing === ring ? 'scale-100 opacity-100' : 'scale-125 opacity-0'
              }`}
              style={{ 
                width: '60%',
                height: '60%',
                top: '20%',
                left: '20%'
              }}
            ></div>
          ))}

          {/* Central shield with scanning effect */}
          <div className="relative z-10">
            <div className={`relative p-8 rounded-3xl border-2 transition-all duration-500 ${
              authenticated 
                ? 'bg-green-500/10 border-green-500/50' 
                : 'bg-gray-900 border-gray-700'
            }`}>
              {/* Scanning line */}
              {scanning && (
                <div className="absolute inset-0 overflow-hidden rounded-3xl">
                  <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-scan"></div>
                </div>
              )}

              {/* Shield icon */}
              <div className="relative">
                <Shield className={`w-24 h-24 transition-all duration-500 ${
                  authenticated ? 'text-green-400' : 'text-blue-400'
                }`} strokeWidth={1.5} />
                
                {/* Lock overlay */}
                <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                  authenticated ? 'opacity-0 scale-50' : 'opacity-100 scale-100'
                }`}>
                  <Lock className="w-10 h-10 text-blue-400" />
                </div>

                {/* Check mark when authenticated */}
                {authenticated && (
                  <div className="absolute inset-0 flex items-center justify-center animate-scale-in">
                    <CheckCircle className="w-12 h-12 text-green-400" />
                  </div>
                )}

                {/* Key floating animation */}
                {!authenticated && (
                  <div className="absolute -top-8 -right-8 animate-float">
                    <Key className="w-6 h-6 text-yellow-400" />
                  </div>
                )}
              </div>
            </div>

            {/* Role badges below shield */}
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 flex gap-3 w-max">
              {roles.map((role, index) => {
                const RoleIcon = role.icon;
                const delay = index * 200;
                return (
                  <div
                    key={index}
                    className={`${role.bgColor} ${role.borderColor} border rounded-lg p-3 transition-all duration-500 hover:scale-110 ${
                      authenticated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: `${delay}ms` }}
                  >
                    <RoleIcon className={`w-5 h-5 ${role.color}`} />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Data visibility indicators - Four corners */}
          {[
            { top: '10%', left: '10%', delay: 0 },
            { top: '10%', right: '10%', delay: 100 },
            { bottom: '30%', left: '10%', delay: 200 },
            { bottom: '30%', right: '10%', delay: 300 }
          ].map((pos, index) => (
            <div
              key={index}
              className="absolute transition-all duration-500"
              style={{ 
                ...pos,
                opacity: showData ? 1 : 0,
                transform: showData ? 'scale(1)' : 'scale(0.5)',
                transitionDelay: `${pos.delay}ms`
              }}
            >
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-2">
                <div className="flex items-center gap-2">
                  {showData ? (
                    <Eye className="w-4 h-4 text-green-400" />
                  ) : (
                    <EyeOff className="w-4 h-4 text-gray-500" />
                  )}
                  <div className={`w-8 h-1 rounded-full transition-colors ${
                    showData ? 'bg-green-400' : 'bg-gray-600'
                  }`}></div>
                </div>
              </div>
            </div>
          ))}

          {/* Access denied/granted text */}
          {/* <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 text-center">
            <div className={`text-sm font-semibold transition-all duration-300 ${
              authenticated 
                ? 'text-green-400 opacity-100' 
                : scanning 
                  ? 'text-blue-400 opacity-100'
                  : 'text-gray-500 opacity-0'
            }`}>
              {scanning ? 'Verifying Access...' : authenticated ? 'Access Granted ✓' : ''}
            </div>
          </div> */}

          {/* Floating security particles */}
          {[...Array(8)].map((_, i) => {
            const angle = (i * 360) / 8;
            return (
              <div
                key={i}
                className="absolute top-1/2 left-1/2 w-2 h-2 bg-blue-400 rounded-full animate-orbit"
                style={{
                  '--orbit-angle': `${angle}deg`,
                  '--orbit-radius': '180px',
                  '--orbit-duration': '12s',
                  '--orbit-delay': `-${i * 1.5}s`,
                  animationDelay: `var(--orbit-delay)`,
                  opacity: 0.6
                } as React.CSSProperties}
              ></div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes scan {
          0% {
            top: 0;
          }
          100% {
            top: 100%;
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes scale-in {
          from {
            transform: scale(0);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes orbit {
          from {
            transform: translate(-50%, -50%) rotate(var(--orbit-angle)) translateX(var(--orbit-radius)) rotate(calc(-1 * var(--orbit-angle)));
          }
          to {
            transform: translate(-50%, -50%) rotate(calc(var(--orbit-angle) + 360deg)) translateX(var(--orbit-radius)) rotate(calc(-1 * (var(--orbit-angle) + 360deg)));
          }
        }

        .animate-scan {
          animation: scan 2s linear infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-float {
          animation: float 2s ease-in-out infinite;
        }

        .animate-scale-in {
          animation: scale-in 0.5s ease-out forwards;
        }

        .animate-orbit {
          animation: orbit var(--orbit-duration) linear infinite;
        }
      `}</style>
    </div>
  );
};

export default AccessControlAnimation;