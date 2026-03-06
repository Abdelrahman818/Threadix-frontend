import OurVission from '@/components/OurVission';
import WelcomeLottie from '@/components/WelcomeLottie';
import '@/styles/about.css';

export default function About() {
  return (
    <div className="about-page">

      {/* HERO SECTION */}
      <section className="about-hero">
        <h1>About Threadix</h1>
        <p>Your trusted store for premium, stylish, and high-quality fashion.</p>
      </section>

      {/* STORY SECTION */}
      <section className="story">
        <div className="story-text">
          <h2>Our Story</h2>
          <p>
            Threadix started with a simple vision: create modern, minimal,  
            and premium-quality clothing that fits everyone.  
            We blend creativity, comfort, and style to bring you pieces  
            that feel as good as they look.
          </p>

          <p>
            Every product is crafted with precision from the stitching  
            to the materials ensuring durability and unmatched quality.
          </p>
        </div>

        <div className="story-img">
          <WelcomeLottie />
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="values">
        <h2>What We Believe In</h2>

        <div className="values-grid">
          <div className="value-box">
            <h3>Quality</h3>
            <p>We use premium fabrics with attention to the smallest details.</p>
          </div>

          <div className="value-box">
            <h3>Design</h3>
            <p>Every piece is crafted to match modern fashion trends.</p>
          </div>

          <div className="value-box">
            <h3>Comfort</h3>
            <p>Soft, breathable materials so you can feel confident daily.</p>
          </div>

          <div className="value-box">
            <h3>Trust</h3>
            <p>We deliver what we promise no compromises, no shortcuts.</p>
          </div>
        </div>
      </section>

      {/* TEAM SECTION (Optional) */}
      <section className="vision">
        <div className="vision-img">
          <OurVission />
        </div>

        <div className="vision-text">
          <h2>Our Vision</h2>
          <p>
            Our goal is to build a global brand trusted for its quality  
            and loved for its style.  
            Threadix is more than clothing it's a lifestyle.
          </p>
        </div>
      </section>

    </div>
  );
}
