export default function CubeLoader() {
  return (
    <div className="flex flex-col mt-50 items-center justify-center gap-12 p-12 min-h-[400px] bg-slate-950/0 perspective-container">
      {/* 3D Scene Wrapper */}
      <div className="relative w-24 h-24 flex items-center justify-center preserve-3d">
        {/* THE SPINNING CUBE CONTAINER */}
        <div className="relative w-full h-full preserve-3d mb-30 animate-cube-spin">
          {/* Internal Core */}
          <div className="absolute inset-0 m-auto w-8 h-8 bg-white rounded-full blur-md shadow-[0_0_40px_rgba(255,255,255,0.8)] animate-pulse-fast" />

          {/* Front */}
          <div className="side-wrapper front">
            <div className="face bg-cyan-500/10 border-2 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.4)]" />
          </div>

          {/* Back */}
          <div className="side-wrapper back">
            <div className="face bg-cyan-500/10 border-2 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.4)]" />
          </div>

          {/* Right */}
          <div className="side-wrapper right">
            <div className="face bg-purple-500/10 border-2 border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.4)]" />
          </div>

          {/* Left */}
          <div className="side-wrapper left">
            <div className="face bg-purple-500/10 border-2 border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.4)]" />
          </div>

          {/* Top */}
          <div className="side-wrapper top">
            <div className="face bg-indigo-500/10 border-2 border-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.4)]" />
          </div>

          {/* Bottom */}
          <div className="side-wrapper bottom">
            <div className="face bg-indigo-500/10 border-2 border-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.4)]" />
          </div>
        </div>

        {/* Floor Shadow */}
        <div className="absolute -bottom-20 w-24 h-8 bg-black/40 blur-xl rounded-[100%] animate-shadow-breathe" />
      </div>

      {/* Loading Text */}
      <div className="flex flex-col items-center gap-1 mt-2">
        <h2 className="text-3xl font-black text-[#101418] leading-tight text-center">
          Analyzing Your AI Tool Spend
        </h2>

        <div className="mt-8 h-6 overflow-hidden">
          <div className="animate-text-slide flex flex-col text-sm text-[#0f6b4a] font-medium">
            <span className="h-6 flex items-center justify-center">
              Scanning subscriptions...
            </span>

            <span className="h-6 flex items-center justify-center">
              Reviewing pricing plans...
            </span>

            <span className="h-6 flex items-center justify-center">
              Calculating yearly savings...
            </span>

            <span className="h-6 flex items-center justify-center">
              Generating recommendations...
            </span>
          </div>
        </div>

        {/* Progress */}
        <div className="w-full max-w-sm mx-auto mt-6">
          <div className="h-2 bg-[#dfe5e1] rounded-full overflow-hidden">
            <div className="h-full bg-[#0f6b4a] rounded-full animate-progress" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .perspective-container {
          perspective: 1200px;
        }

        .preserve-3d {
          transform-style: preserve-3d;
        }

        @keyframes cubeSpin {
          0% {
            transform: rotateX(0deg) rotateY(0deg);
          }

          100% {
            transform: rotateX(360deg) rotateY(360deg);
          }
        }

        @keyframes breathe {
          0%,
          100% {
            transform: translateZ(48px);
            opacity: 0.8;
          }

          50% {
            transform: translateZ(80px);
            opacity: 0.4;
            border-color: rgba(255, 255, 255, 0.8);
          }
        }

        @keyframes pulse-fast {
          0%,
          100% {
            transform: scale(0.8);
            opacity: 0.5;
          }

          50% {
            transform: scale(1.2);
            opacity: 1;
          }
        }

        @keyframes shadow-breathe {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.4;
          }

          50% {
            transform: scale(1.5);
            opacity: 0.2;
          }
        }

        @keyframes glitch {
          0% {
            clip-path: inset(10% 0 80% 0);
            transform: translate(-2px, 1px);
          }

          20% {
            clip-path: inset(80% 0 5% 0);
            transform: translate(2px, -1px);
          }

          40% {
            clip-path: inset(40% 0 50% 0);
            transform: translate(-2px, 2px);
          }

          60% {
            clip-path: inset(10% 0 60% 0);
            transform: translate(2px, -2px);
          }

          80% {
            clip-path: inset(30% 0 20% 0);
            transform: translate(1px, 2px);
          }

          100% {
            clip-path: inset(10% 0 80% 0);
            transform: translate(-2px, 1px);
          }
        }

        @keyframes textSlide {
          0%,
          20% {
            transform: translateY(0);
          }

          25%,
          45% {
            transform: translateY(-24px);
          }

          50%,
          70% {
            transform: translateY(-48px);
          }

          75%,
          95% {
            transform: translateY(-72px);
          }

          100% {
            transform: translateY(0);
          }
        }

        @keyframes progress {
          0% {
            width: 0%;
          }

          20% {
            width: 25%;
          }

          40% {
            width: 50%;
          }

          60% {
            width: 75%;
          }

          80% {
            width: 90%;
          }

          100% {
            width: 100%;
          }
        }

        .animate-cube-spin {
          animation: cubeSpin 8s linear infinite;
        }

        .animate-pulse-fast {
          animation: pulse-fast 2s ease-in-out infinite;
        }

        .animate-shadow-breathe {
          animation: shadow-breathe 3s ease-in-out infinite;
        }

        .animate-glitch-text {
          animation: glitch 2s infinite linear alternate-reverse;
        }

        .animate-text-slide {
          animation: textSlide 8s ease-in-out infinite;
        }

        .animate-progress {
          width: 0%;
          animation: progress 4s ease-in-out infinite;
        }

        .side-wrapper {
          position: absolute;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          transform-style: preserve-3d;
        }

        .face {
          width: 100%;
          height: 100%;
          position: absolute;
          animation: breathe 3s ease-in-out infinite;
          backdrop-filter: blur(2px);
        }

        .front {
          transform: rotateY(0deg) translateZ(48px);
        }

        .back {
          transform: rotateY(180deg) translateZ(48px);
        }

        .right {
          transform: rotateY(90deg) translateZ(48px);
        }

        .left {
          transform: rotateY(-90deg) translateZ(48px);
        }

        .top {
          transform: rotateX(90deg) translateZ(48px);
        }

        .bottom {
          transform: rotateX(-90deg) translateZ(48px);
        }
      `}</style>
    </div>
  );
}

// ----------------------------------------------

// import React from "react";

// export default function CubeLoader() {
//   return (
//     <div className="min-h-screen bg-[#f7f5f2] flex flex-col items-center justify-center overflow-hidden relative px-6">
//       {/* Soft Background Glow */}
//       <div className="absolute top-[-100px] left-[-80px] w-72 h-72 bg-[#0f6b4a]/10 rounded-full blur-3xl" />

//       <div className="absolute bottom-[-120px] right-[-100px] w-80 h-80 bg-cyan-200/30 rounded-full blur-3xl" />

//       {/* Cube Section */}
//       <div className="relative flex items-center justify-center perspective-container">
//         {/* Outer Ring */}
//         <div className="absolute w-44 h-44 border border-[#0f6b4a]/10 rounded-full animate-spin-slow" />

//         {/* Cube */}
//         <div className="relative w-24 h-24 preserve-3d animate-cube-spin">
//           {/* Front */}
//           <div className="face front bg-[#0f6b4a]/10 border border-[#0f6b4a]/30" />

//           {/* Back */}
//           <div className="face back bg-[#0f6b4a]/10 border border-[#0f6b4a]/30" />

//           {/* Right */}
//           <div className="face right bg-cyan-400/10 border border-cyan-400/30" />

//           {/* Left */}
//           <div className="face left bg-cyan-400/10 border border-cyan-400/30" />

//           {/* Top */}
//           <div className="face top bg-emerald-400/10 border border-emerald-400/30" />

//           {/* Bottom */}
//           <div className="face bottom bg-emerald-400/10 border border-emerald-400/30" />
//         </div>

//         {/* Shadow */}
//         <div className="absolute -bottom-14 w-24 h-6 bg-black/10 blur-xl rounded-full animate-shadow" />
//       </div>

//       {/* Content */}
//       <div className="mt-16 text-center max-w-md">
//         {/* Badge */}
//         <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#e8f5ef] text-[#0f6b4a] text-xs tracking-[0.25em] uppercase font-semibold mb-5">
//           <span className="w-2 h-2 rounded-full bg-[#0f6b4a] animate-pulse" />
//           Credex AI Audit
//         </div>

//         {/* Heading */}
//         <h2 className="text-3xl font-black text-[#101418] leading-tight">
//           Analyzing Your AI Tool Spend
//         </h2>

//         {/* Subtitle */}
//         <p className="text-[#5a6168] mt-4 leading-relaxed">
//           Detecting duplicate subscriptions, calculating savings opportunities,
//           and generating optimization insights for your stack.
//         </p>

//         {/* Loading Steps */}
//         <div className="mt-8 h-6 overflow-hidden">
//           <div className="animate-text-slide flex flex-col text-sm text-[#0f6b4a] font-medium">
//             <span>Scanning subscriptions...</span>
//             <span>Reviewing pricing plans...</span>
//             <span>Calculating yearly savings...</span>
//             <span>Generating recommendations...</span>
//           </div>
//         </div>

//         {/* Progress */}
//         <div className="w-full max-w-sm mx-auto mt-6">
//           <div className="h-2 bg-[#dfe5e1] rounded-full overflow-hidden">
//             <div className="h-full bg-[#0f6b4a] rounded-full animate-progress" />
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .perspective-container {
//           perspective: 1200px;
//         }

//         .preserve-3d {
//           transform-style: preserve-3d;
//         }

//         .face {
//           position: absolute;
//           width: 96px;
//           height: 96px;
//           border-radius: 18px;
//           backdrop-filter: blur(4px);
//         }

//         .front {
//           transform: translateZ(48px);
//         }

//         .back {
//           transform: rotateY(180deg) translateZ(48px);
//         }

//         .right {
//           transform: rotateY(90deg) translateZ(48px);
//         }

//         .left {
//           transform: rotateY(-90deg) translateZ(48px);
//         }

//         .top {
//           transform: rotateX(90deg) translateZ(48px);
//         }

//         .bottom {
//           transform: rotateX(-90deg) translateZ(48px);
//         }

//         @keyframes cubeSpin {
//           0% {
//             transform: rotateX(-18deg) rotateY(0deg);
//           }

//           100% {
//             transform: rotateX(342deg) rotateY(360deg);
//           }
//         }

//         @keyframes shadow {
//           0%,
//           100% {
//             transform: scale(1);
//             opacity: 0.25;
//           }

//           50% {
//             transform: scale(1.3);
//             opacity: 0.1;
//           }
//         }

//         @keyframes progress {
//           0% {
//             width: 0%;
//           }

//           100% {
//             width: 100%;
//           }
//         }

//         @keyframes spinSlow {
//           from {
//             transform: rotate(0deg);
//           }

//           to {
//             transform: rotate(360deg);
//           }
//         }

//         @keyframes textSlide {
//           0%,
//           20% {
//             transform: translateY(0);
//           }

//           25%,
//           45% {
//             transform: translateY(-24px);
//           }

//           50%,
//           70% {
//             transform: translateY(-48px);
//           }

//           75%,
//           95% {
//             transform: translateY(-72px);
//           }

//           100% {
//             transform: translateY(0);
//           }
//         }

//         .animate-cube-spin {
//           animation: cubeSpin 8s linear infinite;
//         }

//         .animate-shadow {
//           animation: shadow 3s ease-in-out infinite;
//         }

//         .animate-progress {
//           width: 0%;
//           animation: progress 4s ease-in-out infinite;
//         }

//         .animate-spin-slow {
//           animation: spinSlow 12s linear infinite;
//         }

//         .animate-text-slide {
//           animation: textSlide 8s ease-in-out infinite;
//         }
//       `}</style>
//     </div>
//   );
// }
