import Link from "next/link";

const Hero = () => {
  return (
    <section className="hero">

      <div className="home-effects absolute">

        <svg width="100%" height="100%" viewBox="0 0 1440 900" xmlns="http://www.w3.org/2000/svg">
          <rect width="1440" height="900" fill="transparent"/>

          <defs>
            <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="2" fill="rgba(255,255,255,0.06)"/>
            </pattern>
          </defs>

          <rect width="1440" height="900" fill="url(#dots)" />

          <circle cx="280" cy="200" r="70" fill="rgba(255,255,255,0.05)" />
          <circle cx="1200" cy="320" r="120" fill="rgba(255,255,255,0.04)" />

          <rect x="950" y="100" width="80" height="80" fill="rgba(255,255,255,0.05)" transform="rotate(15 980 130)" />
          <rect x="200" y="550" width="100" height="100" fill="rgba(255,255,255,0.05)" transform="rotate(-12 250 600)" />

          <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="60%" stopColor="rgba(0,0,0,0)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.4)" />
          </linearGradient>

          <rect width="1440" height="900" fill="url(#fade)"/>
        </svg>
      </div>

      <div className="hero-content">
        <h1>Find Your Style With <span>THREADIX</span></h1>
        <p>Premium streetwear inspired by anime, gaming, and modern culture.</p>

        <div className="hero-buttons">
          <Link href='/shop' className="btn-primary">Shop Now</Link>
          <a href="#collections" className="btn-outline">Explore Collections</a>
        </div>
      </div>
    </section>
  )
}

export default Hero;
