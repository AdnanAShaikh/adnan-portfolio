
export const Avatar = () => {
  return (
    <div className="relative w-full max-w-[420px] aspect-square mx-auto flex items-center justify-center">
      {/* Background Splatter / Brush Stroke SVG */}
      <svg
        viewBox="0 0 500 500"
        className="absolute inset-0 w-full h-full animate-pulse-slow select-none pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="splatterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f43f5e" /> {/* rose-500 */}
            <stop offset="50%" stopColor="#e11d48" /> {/* rose-600 */}
            <stop offset="100%" stopColor="#9f1239" /> {/* rose-800 */}
          </linearGradient>
          <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#9f1239" floodOpacity="0.15" />
          </filter>
        </defs>

        {/* Artistic paint splatter / brush shapes */}
        <g filter="url(#shadow)">
          <path
            d="M 120 180 
               C 100 100, 220 60, 360 80 
               C 460 95, 480 180, 450 270 
               C 420 360, 380 430, 270 450 
               C 160 470, 90 410, 80 320 
               C 70 230, 140 260, 120 180 Z"
            fill="url(#splatterGrad)"
            opacity="0.95"
          />
        </g>

        {/* Splattered dots of varying sizes */}
        <circle cx="85" cy="115" r="14" fill="#e11d48" opacity="0.7" />
        <circle cx="430" cy="370" r="18" fill="#be123c" opacity="0.8" />
        <circle cx="395" cy="75" r="10" fill="#f43f5e" opacity="0.6" />
        <circle cx="105" cy="405" r="16" fill="#9f1239" opacity="0.75" />
        <circle cx="45" cy="275" r="12" fill="#be123c" opacity="0.5" />
        <circle cx="280" cy="40" r="8" fill="#f43f5e" opacity="0.5" />
      </svg>

      {/* Foreground SVG Avatar Character */}
      <svg
        viewBox="0 0 500 500"
        className="relative z-10 w-[85%] h-[85%] drop-shadow-2xl transition-transform duration-500 hover:scale-105"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="beanieGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f43f5e" />
            <stop offset="100%" stopColor="#be123c" />
          </linearGradient>
          <linearGradient id="sweaterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" /> {/* slate-800 */}
            <stop offset="100%" stopColor="#0f172a" /> {/* slate-900 */}
          </linearGradient>
          <linearGradient id="skinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffedd5" /> {/* orange-100 */}
            <stop offset="100%" stopColor="#fed7aa" /> {/* orange-200 */}
          </linearGradient>
        </defs>

        {/* Neck */}
        <rect x="230" y="320" width="40" height="60" fill="url(#skinGrad)" rx="6" />
        <path d="M 230 350 L 270 350 L 250 375 Z" fill="#fda4af" opacity="0.4" /> {/* Neck shadow */}

        {/* Head */}
        <circle cx="250" cy="260" r="75" fill="url(#skinGrad)" />

        {/* Ears */}
        <circle cx="170" cy="265" r="14" fill="#fed7aa" />
        <circle cx="330" cy="265" r="14" fill="#fed7aa" />

        {/* Red Beanie Hat (inspired by reference image) */}
        <path d="M 175 228 C 175 140, 325 140, 325 228 Z" fill="url(#beanieGrad)" />
        <rect x="165" y="215" width="170" height="22" rx="11" fill="#be123c" />
        <circle cx="250" cy="138" r="14" fill="#f43f5e" /> {/* Pom-pom */}
        {/* Beanie texture lines */}
        <line x1="210" y1="160" x2="215" y2="215" stroke="#9f1239" strokeWidth="2.5" strokeLinecap="round" opacity="0.4" />
        <line x1="250" y1="155" x2="250" y2="215" stroke="#9f1239" strokeWidth="2.5" strokeLinecap="round" opacity="0.4" />
        <line x1="290" y1="160" x2="285" y2="215" stroke="#9f1239" strokeWidth="2.5" strokeLinecap="round" opacity="0.4" />

        {/* Beard (homage to reference image) */}
        <path
          d="M 175 260 
             C 175 350, 325 350, 325 260 
             C 325 295, 310 340, 250 340 
             C 190 340, 175 295, 175 260 Z"
          fill="#451a03" /* Dark brown */
        />
        {/* Mustache */}
        <path
          d="M 215 295 
             C 225 285, 275 285, 285 295 
             C 270 302, 230 302, 215 295 Z"
          fill="#3b1301"
        />

        {/* Smile (friendly, warm) */}
        <path d="M 235 308 Q 250 320 265 308" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />

        {/* Eyebrows */}
        <path d="M 195 225 Q 212 215 228 226" fill="none" stroke="#3b1301" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M 272 226 Q 288 215 305 225" fill="none" stroke="#3b1301" strokeWidth="3.5" strokeLinecap="round" />

        {/* Eyes & Glasses (sleek design) */}
        <circle cx="215" cy="245" r="4.5" fill="#0f172a" />
        <circle cx="285" cy="245" r="4.5" fill="#0f172a" />

        {/* Glasses Frame */}
        <circle cx="215" cy="245" r="22" fill="none" stroke="#e11d48" strokeWidth="3.5" />
        <circle cx="285" cy="245" r="22" fill="none" stroke="#e11d48" strokeWidth="3.5" />
        <line x1="237" y1="245" x2="263" y2="245" stroke="#e11d48" strokeWidth="3.5" />
        <line x1="180" y1="245" x2="193" y2="245" stroke="#e11d48" strokeWidth="3.5" />
        <line x1="307" y1="245" x2="320" y2="245" stroke="#e11d48" strokeWidth="3.5" />

        {/* Nose */}
        <path d="M 246 252 Q 250 264 254 252" fill="none" stroke="#d97706" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />

        {/* Sweater (Dark Charcoal with a Yellow T-Shirt Collar & Rose Stripes) */}
        <path
          d="M 140 395 
             C 140 395, 175 355, 250 355 
             C 325 355, 360 395, 360 395 
             L 395 500 
             L 105 500 Z"
          fill="url(#sweaterGrad)"
        />
        {/* Yellow shirt collar (reference image color accent) */}
        <path d="M 220 356 C 220 356, 250 384, 280 356 Z" fill="#eab308" />

        {/* Red accent striping on sweater */}
        <path d="M 130 435 L 370 435 L 366 450 L 134 450 Z" fill="#e11d48" opacity="0.9" />
        <path d="M 120 475 L 380 475 L 377 485 L 123 485 Z" fill="#be123c" opacity="0.75" />
      </svg>

      {/* Floating Micro-interactions / Dev Tech Tags */}
      <div className="absolute top-[10%] left-[5%] bg-white border border-brand-red-100 shadow-md py-1.5 px-3 rounded-full text-xs font-semibold text-brand-dark flex items-center gap-1.5 animate-float select-none">
        <span className="w-2 h-2 rounded-full bg-brand-red-500 animate-ping"></span>
        💻 Frontend
      </div>
      <div className="absolute bottom-[18%] right-[-2%] bg-white border border-brand-red-100 shadow-md py-1.5 px-3 rounded-full text-xs font-semibold text-brand-dark flex items-center gap-1.5 animate-float select-none [animation-delay:2s]">
        🤖 AI Enthusiast
      </div>
      <div className="absolute top-[48%] right-[-5%] bg-white border border-brand-red-100 shadow-md p-2 rounded-full shadow-lg text-xs animate-float select-none [animation-delay:4s]">
        💾 Database
      </div>
      <div className="absolute bottom-[8%] left-[8%] bg-white border border-brand-red-100 shadow-md p-2 rounded-full shadow-lg text-lg animate-float select-none [animation-delay:1.5s]">
        💿
      </div>
    </div>
  );
};
