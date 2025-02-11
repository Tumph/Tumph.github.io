"use client";

import { useEffect, useRef } from "react";
import "./App.css";

const App = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const particles = [];
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        speed: Math.random() * 0.5 + 0.1,
      });
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(0, 255, 255, 0.5)";
      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();
        particle.y -= particle.speed;
        if (particle.y < 0) {
          particle.y = canvas.height;
        }
      });
    };

    const animate = () => {
      drawParticles();
      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="app">
      <canvas ref={canvasRef} className="background-canvas" />
      <div className="content">
        <header>
          <h1>Aryan Gupta</h1>
          <p>
            Computer Engineering Student • University of Waterloo • Class of
            2028
          </p>
        </header>
        <main>
          <section className="about">
            <h2>About Me</h2>
            <p>
              I'm a Computer Engineering student at the University of Waterloo,
              currently working on software engineering projects that span
              automation, AI, and scalable systems. I've interned at companies
              ranging from startups to global firms, building tools that improve
              workflows and efficiency. In the past, I founded platforms for
              education and automation, always looking for ways to apply
              technology to real-world problems. I enjoy solving complex
              technical challenges and learning from the process.
            </p>
          </section>
          <section className="skills">
            <h2>Core Competencies</h2>
            <ul>
              <li>Software Engineering &amp; Development</li>
              <li>Automation &amp; Workflow Optimization</li>
              <li>AI &amp; Machine Learning Applications</li>
              <li>Scalable Systems &amp; Infrastructure</li>
              <li>Web Development &amp; Platform Engineering</li>
            </ul>
          </section>
        </main>
        <footer>
          <p>Connect with me:</p>
          <div className="social-links">
            <a href="https://www.x.com/argupta_" className="social-link">
              Twitter
            </a>
            <a
              href="https://www.linkedin.com/in/aryangoopta"
              className="social-link"
            >
              Linkedin
            </a>
            <a href="https://www.github.com/Tumph" className="social-link">
              Github
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
