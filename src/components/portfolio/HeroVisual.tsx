export function HeroVisual() {
  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[34rem]"
      aria-hidden="true"
    >
      {/* glow blobs */}
      <div
        className="blob left-[8%] top-[12%] size-56 animate-pulse-glow"
        style={{ background: "var(--cyan)" }}
      />
      <div
        className="blob right-[6%] top-[30%] size-64 animate-pulse-glow"
        style={{ background: "var(--violet)", animationDelay: "1.4s" }}
      />
      <div
        className="blob bottom-[8%] left-[28%] size-52 animate-pulse-glow"
        style={{ background: "var(--magenta)", animationDelay: "2.6s" }}
      />

      {/* rotating neon rings */}
      <div className="absolute inset-6 animate-spin-slow rounded-full border border-cyan/35" />
      <div className="absolute inset-14 animate-spin-rev rounded-full border border-dashed border-violet/45" />
      <div className="absolute inset-24 animate-spin-slow rounded-full border border-magenta/35" />

      <svg viewBox="0 0 400 400" className="relative size-full animate-float">
        <defs>
          <linearGradient id="hv-shield" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00F5D4" />
            <stop offset="50%" stopColor="#2563FF" />
            <stop offset="100%" stopColor="#A855F7" />
          </linearGradient>
          <linearGradient id="hv-line" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00F5D4" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
          <radialGradient id="hv-core">
            <stop offset="0%" stopColor="#F8FAFC" />
            <stop offset="60%" stopColor="#00F5D4" />
            <stop offset="100%" stopColor="#2563FF" stopOpacity="0.1" />
          </radialGradient>
          <filter id="hv-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="5" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* circuit grid */}
        <g stroke="url(#hv-line)" strokeWidth="0.8" opacity="0.35">
          {Array.from({ length: 9 }).map((_, i) => (
            <line key={`h${i}`} x1="20" y1={40 + i * 40} x2="380" y2={40 + i * 40} />
          ))}
          {Array.from({ length: 9 }).map((_, i) => (
            <line key={`v${i}`} x1={40 + i * 40} y1="20" x2={40 + i * 40} y2="380" />
          ))}
        </g>

        {/* network links */}
        <g stroke="url(#hv-line)" strokeWidth="1.6" opacity="0.85" filter="url(#hv-glow)">
          <polyline
            fill="none"
            points="60,90 140,140 200,110 270,160 340,120"
            strokeDasharray="12 10"
            style={{ animation: "dash 9s linear infinite" }}
          />
          <polyline
            fill="none"
            points="50,300 130,260 210,300 290,250 360,290"
            strokeDasharray="10 12"
            style={{ animation: "dash 12s linear infinite" }}
          />
        </g>

        {/* nodes */}
        {[
          [60, 90, "#00F5D4"],
          [140, 140, "#A855F7"],
          [270, 160, "#EC4899"],
          [340, 120, "#FF7A18"],
          [130, 260, "#A3FF12"],
          [290, 250, "#2563FF"],
          [360, 290, "#00F5D4"],
          [50, 300, "#8B5CF6"],
        ].map(([x, y, c], i) => (
          <circle
            key={i}
            cx={x as number}
            cy={y as number}
            r="5"
            fill={c as string}
            filter="url(#hv-glow)"
            style={{ animation: `pulse-glow ${3 + i * 0.4}s ease-in-out infinite` }}
          />
        ))}

        {/* shield */}
        <g filter="url(#hv-glow)">
          <path
            d="M200 80 L296 118 V206 c0 56 -42 92 -96 114 c-54 -22 -96 -58 -96 -114 V118 Z"
            fill="rgba(7,21,43,0.72)"
            stroke="url(#hv-shield)"
            strokeWidth="3"
          />
          <circle cx="200" cy="196" r="46" fill="url(#hv-core)" opacity="0.55" />
          {/* lock */}
          <rect x="176" y="192" width="48" height="40" rx="8" fill="#07152B" stroke="#00F5D4" strokeWidth="2.5" />
          <path d="M186 192 v-12 a14 14 0 0 1 28 0 v12" fill="none" stroke="#EC4899" strokeWidth="2.5" />
          <circle cx="200" cy="210" r="4.5" fill="#A3FF12" />
        </g>

        {/* floating particles */}
        {[
          [80, 200, "#00F5D4"],
          [320, 210, "#A855F7"],
          [110, 60, "#EC4899"],
          [300, 340, "#A3FF12"],
          [240, 50, "#FF7A18"],
          [170, 350, "#2563FF"],
        ].map(([x, y, c], i) => (
          <circle
            key={`p${i}`}
            cx={x as number}
            cy={y as number}
            r="2.6"
            fill={c as string}
            style={{ animation: `float-y ${5 + i}s ease-in-out infinite`, animationDelay: `${i * 0.5}s` }}
          />
        ))}
      </svg>
    </div>
  );
}
