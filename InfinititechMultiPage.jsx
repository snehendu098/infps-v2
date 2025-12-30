import React, { useState, useEffect, useRef } from 'react';

// ============================================
// INFINITITECH PARTNERS - MULTI-PAGE WEBSITE
// ParticleField + Aurora + All Original Effects
// ============================================

// ==========================================
// UTILITY HOOKS
// ==========================================

const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handler = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);
  
  return position;
};

const useInView = (threshold = 0.1) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  
  return [ref, inView];
};

// ==========================================
// PARTICLE FIELD BACKGROUND
// ==========================================

const ParticleField = () => {
  const canvasRef = useRef(null);
  const mouse = useMousePosition();
  const mouseRef = useRef({ x: 0, y: 0 });
  
  useEffect(() => {
    mouseRef.current = mouse;
  }, [mouse]);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);
    
    class Particle {
      constructor() {
        this.reset();
      }
      
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.z = Math.random() * 1000;
        this.size = Math.random() * 2 + 0.5;
        this.speedZ = Math.random() * 2 + 0.5;
        this.color = Math.random() > 0.5 ? '#00ffcc' : '#ff6b35';
      }
      
      update() {
        this.z -= this.speedZ;
        if (this.z <= 0) this.reset();
        
        // Mouse influence
        const dx = mouseRef.current.x - this.x;
        const dy = mouseRef.current.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200) {
          this.x -= dx * 0.02;
          this.y -= dy * 0.02;
        }
      }
      
      draw() {
        const scale = 1000 / (1000 + this.z);
        const x = (this.x - canvas.width / 2) * scale + canvas.width / 2;
        const y = (this.y - canvas.height / 2) * scale + canvas.height / 2;
        const size = this.size * scale;
        const alpha = Math.min(scale * 0.8, 1);
        
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        const hex = Math.floor(alpha * 255).toString(16).padStart(2, '0');
        ctx.fillStyle = this.color + hex;
        ctx.fill();
      }
    }
    
    // Initialize particles
    for (let i = 0; i < 300; i++) {
      particles.push(new Particle());
    }
    
    const animate = () => {
      ctx.fillStyle = 'rgba(8, 12, 21, 0.15)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      
      // Draw connections
      ctx.strokeStyle = 'rgba(0, 255, 204, 0.03)';
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none'
      }}
    />
  );
};

// ==========================================
// AURORA BACKGROUND
// ==========================================

const AuroraBackground = () => (
  <div className="aurora-container">
    <div className="aurora aurora-1" />
    <div className="aurora aurora-2" />
    <div className="aurora aurora-3" />
  </div>
);

// ==========================================
// SPLIT TEXT ANIMATION
// ==========================================

const SplitText = ({ text, className = '', delay = 0 }) => {
  const [ref, inView] = useInView(0.3);
  const words = text.split(' ');
  
  return (
    <span ref={ref} className={`split-text ${className}`}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="word-wrapper">
          {word.split('').map((char, charIndex) => (
            <span
              key={charIndex}
              className={`split-char ${inView ? 'animate' : ''}`}
              style={{
                animationDelay: `${delay + (wordIndex * 0.1) + (charIndex * 0.03)}s`
              }}
            >
              {char}
            </span>
          ))}
          <span>&nbsp;</span>
        </span>
      ))}
    </span>
  );
};

// ==========================================
// BLUR TEXT ANIMATION
// ==========================================

const BlurText = ({ text, className = '', delay = 0 }) => {
  const [ref, inView] = useInView(0.3);
  
  return (
    <span ref={ref} className={`blur-text ${className} ${inView ? 'in-view' : ''}`}>
      {text.split('').map((char, i) => (
        <span
          key={i}
          className="blur-char"
          style={{ animationDelay: `${delay + i * 0.02}s` }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};

// ==========================================
// MAGNETIC BUTTON
// ==========================================

const MagneticButton = ({ children, onClick, className = '' }) => {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e) => {
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.3, y: y * 0.3 });
  };
  
  const handleMouseLeave = () => setPosition({ x: 0, y: 0 });
  
  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      className={`magnetic-button ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
    >
      <span className="magnetic-button-inner">{children}</span>
      <span className="magnetic-button-glow" />
    </button>
  );
};

// ==========================================
// TILT CARD
// ==========================================

const TiltCard = ({ children, className = '' }) => {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState('');
  const [glare, setGlare] = useState({ x: 50, y: 50 });
  
  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    const rotateX = (y - 0.5) * -20;
    const rotateY = (x - 0.5) * 20;
    
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
    setGlare({ x: x * 100, y: y * 100 });
  };
  
  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)');
  };
  
  return (
    <div
      ref={cardRef}
      className={`tilt-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform }}
    >
      <div
        className="tilt-card-glare"
        style={{
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.2) 0%, transparent 60%)`
        }}
      />
      {children}
    </div>
  );
};

// ==========================================
// ANIMATED COUNTER
// ==========================================

const AnimatedCounter = ({ end, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView(0.5);
  const hasAnimated = useRef(false);
  
  useEffect(() => {
    if (inView && !hasAnimated.current) {
      hasAnimated.current = true;
      const startTime = Date.now();
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(eased * end));
        
        if (progress < 1) requestAnimationFrame(animate);
      };
      
      animate();
    }
  }, [inView, end, duration]);
  
  return <span ref={ref}>{count}{suffix}</span>;
};

// ==========================================
// SCROLL PROGRESS
// ==========================================

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress((window.scrollY / height) * 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="scroll-progress">
      <div className="scroll-progress-bar" style={{ width: `${progress}%` }} />
    </div>
  );
};

// ==========================================
// CUSTOM CURSOR
// ==========================================

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [hovered, setHovered] = useState(false);
  
  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };
    const leave = () => setHidden(true);
    
    const checkHover = () => {
      const hoverable = document.querySelectorAll('a, button, .tilt-card, .magnetic-button, .nav-link');
      hoverable.forEach(el => {
        el.addEventListener('mouseenter', () => setHovered(true));
        el.addEventListener('mouseleave', () => setHovered(false));
      });
    };
    
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseleave', leave);
    setTimeout(checkHover, 500);
    
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseleave', leave);
    };
  }, []);
  
  return (
    <>
      <div
        className={`custom-cursor ${hidden ? 'hidden' : ''} ${hovered ? 'hovered' : ''}`}
        style={{ left: position.x, top: position.y }}
      />
      <div
        className={`custom-cursor-dot ${hidden ? 'hidden' : ''}`}
        style={{ left: position.x, top: position.y }}
      />
    </>
  );
};

// ==========================================
// NAVIGATION
// ==========================================

const Navigation = ({ currentPage, setCurrentPage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navItems = ['Home', 'About', 'Services', 'Products', 'Portfolio', 'Team', 'Contact'];
  
  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <div className="nav-logo" onClick={() => setCurrentPage('Home')} style={{ cursor: 'pointer' }}>
          <span className="logo-symbol">∞</span>
          <span className="logo-text">Infinititech</span>
        </div>
        
        <div className={`nav-links ${mobileOpen ? 'open' : ''}`}>
          {navItems.map((item, i) => (
            <button
              key={i}
              className={`nav-link ${currentPage === item ? 'active' : ''}`}
              onClick={() => { setCurrentPage(item); setMobileOpen(false); }}
            >
              {item}
            </button>
          ))}
        </div>
        
        <MagneticButton className="nav-cta" onClick={() => setCurrentPage('Contact')}>
          Let's Talk
        </MagneticButton>
        
        <button
          className={`nav-mobile-toggle ${mobileOpen ? 'open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
};

// ==========================================
// FOOTER
// ==========================================

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-main">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="logo-symbol">∞</span>
            <span>Infinititech Partners</span>
          </div>
          <p className="footer-tagline">
            Transform your digital vision into reality with cutting-edge technology solutions.
          </p>
        </div>
        
        <div className="footer-links">
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><span>Home</span></li>
              <li><span>About</span></li>
              <li><span>Services</span></li>
              <li><span>Portfolio</span></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Resources</h4>
            <ul>
              <li><span>Products</span></li>
              <li><span>Team</span></li>
              <li><span>Contact</span></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><span>hello@infinititech.com</span></li>
              <li><span>India</span></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2024 Infinititech Partners. All rights reserved.</p>
        <div className="footer-legal">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </div>
  </footer>
);

// ==========================================
// PAGE HERO
// ==========================================

const PageHero = ({ label, title, titleAccent, description }) => (
  <section className="page-hero">
    <AuroraBackground />
    <div className="page-hero-content">
      {label && (
        <div className="hero-badge">
          <span className="badge-dot" />
          <span>{label}</span>
        </div>
      )}
      <h1 className="page-hero-title">
        <SplitText text={title} />
        {titleAccent && (
          <>
            <br />
            <SplitText text={titleAccent} className="accent" delay={0.3} />
          </>
        )}
      </h1>
      {description && (
        <p className="page-hero-desc">
          <BlurText text={description} delay={0.6} />
        </p>
      )}
    </div>
  </section>
);

// ==========================================
// CTA SECTION
// ==========================================

const CTASection = ({ title1, title2, setCurrentPage }) => (
  <section className="cta-section">
    <div className="cta-glow glow-1" />
    <div className="cta-glow glow-2" />
    <div className="cta-content">
      <h2 className="cta-title">
        <SplitText text={title1} />
        <br />
        <SplitText text={title2} className="accent" delay={0.2} />
      </h2>
      <p className="cta-desc">
        <BlurText text="Let's discuss your project and bring your vision to life" delay={0.4} />
      </p>
      <MagneticButton className="btn-primary large" onClick={() => setCurrentPage('Contact')}>
        Get in Touch
        <svg viewBox="0 0 24 24" className="btn-arrow">
          <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </MagneticButton>
    </div>
  </section>
);

// ==========================================
// HOME PAGE
// ==========================================

const HomePage = ({ setCurrentPage }) => {
  const values = [
    { icon: '⚡', title: 'Our Mission', desc: 'Empower businesses with cutting-edge technology solutions that drive growth and digital transformation.' },
    { icon: '🔭', title: 'Our Vision', desc: 'Be the most trusted technology partner globally, known for excellence and innovation.' },
    { icon: '💎', title: 'Our Values', desc: 'Integrity, Innovation, Excellence, and Customer-Centricity guide everything we do.' }
  ];
  
  const stats = [
    { value: 50, suffix: '+', label: 'Projects Delivered' },
    { value: 30, suffix: '+', label: 'Happy Clients' },
    { value: 4, suffix: '', label: 'Team Members' },
    { value: 6, suffix: '', label: 'Services Offered' }
  ];
  
  const services = [
    { icon: '🏢', title: 'Data Center', desc: 'Enterprise-grade solutions' },
    { icon: '⚙️', title: 'MDC Software', desc: 'Custom software solutions' },
    { icon: '🌆', title: 'Smart City', desc: 'IoT-powered infrastructure' },
    { icon: '💼', title: 'CRM/ERP/POS', desc: 'Enterprise software suite' },
    { icon: '📱', title: 'Web & Mobile', desc: 'Digital experiences' },
    { icon: '📈', title: 'Marketing', desc: 'Growth strategies' }
  ];
  
  const products = [
    { name: 'Marketplace', tagline: 'B2B Commodity Trading', gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
    { name: 'Accubooks', tagline: 'Enterprise Accounting', gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' },
    { name: 'School ERP', tagline: 'School Management', gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' },
    { name: 'Fleet Management', tagline: 'Enterprise Telematics', gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' }
  ];

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <AuroraBackground />
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot" />
            <span>Leading Technology Partner</span>
          </div>
          
          <h1 className="hero-title">
            <SplitText text="Transform" className="hero-line" />
            <SplitText text="Innovate &" className="hero-line accent" delay={0.3} />
            <SplitText text="Scale" className="hero-line" delay={0.6} />
          </h1>
          
          <p className="hero-subtitle">
            <BlurText text="Data Center Management • Custom Software • Smart City Solutions • Digital Services" delay={1} />
          </p>
          
          <div className="hero-ctas">
            <MagneticButton className="btn-primary" onClick={() => setCurrentPage('Contact')}>
              Start Your Project
              <svg viewBox="0 0 24 24" className="btn-arrow">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </MagneticButton>
            <MagneticButton className="btn-secondary" onClick={() => setCurrentPage('Services')}>
              Explore Services
            </MagneticButton>
          </div>
          
          <div className="hero-scroll">
            <div className="scroll-indicator">
              <div className="scroll-dot" />
            </div>
            <span>Scroll to explore</span>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="hero-sphere" />
          <div className="hero-ring ring-1" />
          <div className="hero-ring ring-2" />
          <div className="hero-ring ring-3" />
        </div>
      </section>
      
      {/* About Preview */}
      <section className="section about-preview">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">About Us</span>
            <h2 className="section-title">
              <SplitText text="Bridging Technology" />
              <br />
              <SplitText text="& Business Needs" className="accent" delay={0.3} />
            </h2>
          </div>
          
          <div className="about-values">
            {values.map((value, i) => (
              <TiltCard key={i} className="value-card">
                <span className="value-icon">{value.icon}</span>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-desc">{value.desc}</p>
              </TiltCard>
            ))}
          </div>
          
          <div className="about-stats">
            {stats.map((stat, i) => (
              <div key={i} className="stat-item">
                <span className="stat-value">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Services Preview */}
      <section className="section services-preview">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">Our Services</span>
            <h2 className="section-title">
              <SplitText text="Comprehensive" />
              <br />
              <SplitText text="Technology Solutions" className="accent" delay={0.2} />
            </h2>
          </div>
          
          <div className="services-grid">
            {services.map((service, i) => (
              <TiltCard key={i} className="service-card-mini">
                <span className="service-icon">{service.icon}</span>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
              </TiltCard>
            ))}
          </div>
          
          <div className="section-cta">
            <MagneticButton onClick={() => setCurrentPage('Services')}>
              View All Services
              <svg viewBox="0 0 24 24" className="btn-arrow">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </MagneticButton>
          </div>
        </div>
      </section>
      
      {/* Products Preview */}
      <section className="section products-preview">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">Our Products</span>
            <h2 className="section-title">
              <SplitText text="Production-Ready" />
              <br />
              <SplitText text="Enterprise Solutions" className="accent" delay={0.2} />
            </h2>
          </div>
          
          <div className="products-grid">
            {products.map((product, i) => (
              <TiltCard key={i} className="product-card">
                <div className="product-visual" style={{ background: product.gradient }}>
                  <div className="product-cube">
                    <div className="cube-face front" />
                    <div className="cube-face back" />
                    <div className="cube-face left" />
                    <div className="cube-face right" />
                    <div className="cube-face top" />
                    <div className="cube-face bottom" />
                  </div>
                </div>
                <div className="product-content">
                  <span className="product-tagline">{product.tagline}</span>
                  <h3 className="product-name">{product.name}</h3>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>
      
      <CTASection title1="Ready to Transform" title2="Your Business?" setCurrentPage={setCurrentPage} />
    </>
  );
};

// ==========================================
// ABOUT PAGE
// ==========================================

const AboutPage = ({ setCurrentPage }) => {
  const values = [
    { icon: '🎯', title: 'Integrity', desc: 'Honest communication and delivering on our promises.' },
    { icon: '💡', title: 'Innovation', desc: 'Constantly exploring new technologies and methodologies.' },
    { icon: '⭐', title: 'Excellence', desc: 'High standards and exceeding expectations.' },
    { icon: '🤝', title: 'Customer-Centricity', desc: 'Your success is our success.' },
    { icon: '🚀', title: 'Agility', desc: 'Adapting quickly to changing landscapes.' },
    { icon: '👥', title: 'Collaboration', desc: 'Working as an extension of your team.' }
  ];
  
  const stats = [
    { icon: '📦', value: 50, suffix: '+', label: 'Projects Delivered' },
    { icon: '😊', value: 30, suffix: '+', label: 'Happy Clients' },
    { icon: '👨‍💻', value: 4, suffix: '', label: 'Team Members' },
    { icon: '⚡', value: 6, suffix: '', label: 'Services' },
    { icon: '🏆', value: 99, suffix: '%', label: 'Satisfaction' },
    { icon: '🕐', value: 24, suffix: '/7', label: 'Support' }
  ];

  return (
    <>
      <PageHero
        label="About Us"
        title="Technology Partners"
        titleAccent="You Can Trust"
        description="We combine technical expertise with business acumen to deliver transformative solutions."
      />
      
      {/* Story Section */}
      <section className="section story-section">
        <div className="section-container">
          <div className="story-grid">
            <div className="story-text">
              <span className="section-tag">Our Story</span>
              <h2 className="section-title">
                <SplitText text="Building the Future" />
                <br />
                <SplitText text="of Technology" className="accent" delay={0.2} />
              </h2>
              <p>
                Founded with a vision to bridge the gap between innovative technology and real-world 
                business needs, Infinititech Partners has grown from a small team of passionate 
                developers to a full-service technology company.
              </p>
              <p>
                We believe that technology should empower businesses, not complicate them. That's why 
                we focus on delivering solutions that are not only cutting-edge but also practical, 
                scalable, and aligned with your business goals.
              </p>
            </div>
            <div className="story-visual">
              <div className="story-image">
                <div className="story-pattern" />
              </div>
              <div className="story-stat-card">
                <span className="stat-big-value">5+</span>
                <span className="stat-big-label">Years of Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="section mv-section">
        <div className="section-container">
          <div className="mv-grid">
            <TiltCard className="mv-card mission-card">
              <span className="mv-icon">⚡</span>
              <h3 className="mv-title">Our Mission</h3>
              <p className="mv-text">
                Empower businesses of all sizes with cutting-edge technology solutions that drive 
                growth, improve efficiency, and enable digital transformation.
              </p>
            </TiltCard>
            <TiltCard className="mv-card vision-card">
              <span className="mv-icon">🔭</span>
              <h3 className="mv-title">Our Vision</h3>
              <p className="mv-text">
                Be the most trusted technology partner globally, known for excellence, innovation, 
                and the measurable impact we create for our clients.
              </p>
            </TiltCard>
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section className="section values-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">Core Values</span>
            <h2 className="section-title">
              <SplitText text="What Drives" />
              <br />
              <SplitText text="Everything We Do" className="accent" delay={0.2} />
            </h2>
          </div>
          
          <div className="values-grid">
            {values.map((value, i) => (
              <TiltCard key={i} className="value-card">
                <span className="value-icon">{value.icon}</span>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-desc">{value.desc}</p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>
      
      {/* Stats */}
      <section className="section stats-section">
        <div className="section-container">
          <div className="stats-grid">
            {stats.map((stat, i) => (
              <TiltCard key={i} className="stat-card">
                <span className="stat-card-icon">{stat.icon}</span>
                <span className="stat-card-value">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </span>
                <span className="stat-card-label">{stat.label}</span>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>
      
      <CTASection title1="Let's Build Something" title2="Amazing Together" setCurrentPage={setCurrentPage} />
    </>
  );
};

// ==========================================
// SERVICES PAGE
// ==========================================

const ServicesPage = ({ setCurrentPage }) => {
  const services = [
    {
      icon: '🏢',
      title: 'Data Center Management',
      desc: 'Enterprise-grade data center solutions with 24/7 monitoring and optimal performance.',
      full: 'We provide comprehensive data center management services including infrastructure design, implementation, and ongoing maintenance. Our team ensures maximum uptime, security, and efficiency.',
      features: ['Infrastructure Design', 'Power Management', 'Cooling Systems', 'Security', 'Monitoring', 'Disaster Recovery']
    },
    {
      icon: '⚙️',
      title: 'Custom MDC Software',
      desc: 'Tailored modular data center software solutions for your specific needs.',
      full: 'Our custom MDC software solutions are built to optimize your data center operations. From DCIM to asset tracking, we create tools that give you complete visibility and control.',
      features: ['DCIM Solutions', 'Asset Tracking', 'Capacity Planning', 'Environmental Monitoring', 'Analytics', 'Automation']
    },
    {
      icon: '🌆',
      title: 'Smart City Solutions',
      desc: 'IoT-powered urban infrastructure for smarter, more efficient cities.',
      full: 'Transform urban environments with our IoT-powered smart city solutions. We help municipalities improve citizen services, reduce costs, and create sustainable communities.',
      features: ['Traffic Management', 'Smart Lighting', 'Waste Management', 'Air Quality', 'Public Safety', 'Citizen Engagement']
    },
    {
      icon: '💼',
      title: 'CRM, ERP & POS',
      desc: 'Complete enterprise software suite for seamless business operations.',
      full: 'Our enterprise software solutions integrate all aspects of your business. From customer relationships to inventory management, we provide tools that drive efficiency.',
      features: ['Customer Management', 'Sales Automation', 'Inventory', 'HR Management', 'Payroll', 'Reporting']
    },
    {
      icon: '📱',
      title: 'Web & Mobile Development',
      desc: 'Cross-platform digital experiences that engage and convert.',
      full: 'We build modern, responsive web and mobile applications using cutting-edge technologies. Our solutions are scalable, secure, and designed for exceptional user experience.',
      features: ['React/Next.js', 'React Native', 'Progressive Web Apps', 'API Development', 'UI/UX Design', 'E-commerce']
    },
    {
      icon: '📈',
      title: 'Digital Marketing',
      desc: 'Data-driven growth strategies to maximize your online presence.',
      full: 'Our digital marketing services help you reach your target audience effectively. We combine creativity with data to deliver measurable results and sustainable growth.',
      features: ['SEO/SEM', 'Social Media', 'Content Marketing', 'Email Marketing', 'PPC Campaigns', 'Analytics']
    }
  ];

  return (
    <>
      <PageHero
        label="Our Services"
        title="Comprehensive Technology"
        titleAccent="Solutions"
        description="From data center management to digital marketing, we offer a full spectrum of technology services."
      />
      
      <section className="section services-full">
        <div className="section-container">
          <div className="services-list">
            {services.map((service, i) => (
              <TiltCard key={i} className="service-full-card">
                <div className="service-full-header">
                  <span className="service-full-icon">{service.icon}</span>
                  <div>
                    <h3 className="service-full-title">{service.title}</h3>
                    <p className="service-full-short">{service.desc}</p>
                  </div>
                </div>
                <p className="service-full-desc">{service.full}</p>
                <div className="service-full-features">
                  <h4>Key Features</h4>
                  <ul>
                    {service.features.map((f, j) => (
                      <li key={j}>
                        <svg viewBox="0 0 24 24" width="18" height="18">
                          <path d="M5 12l5 5L20 7" stroke="#00ffcc" strokeWidth="2" fill="none" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <MagneticButton className="btn-primary" onClick={() => setCurrentPage('Contact')}>
                  Get Started
                  <svg viewBox="0 0 24 24" className="btn-arrow">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                </MagneticButton>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>
      
      <CTASection title1="Need a Custom" title2="Solution?" setCurrentPage={setCurrentPage} />
    </>
  );
};

// ==========================================
// PRODUCTS PAGE
// ==========================================

const ProductsPage = ({ setCurrentPage }) => {
  const products = [
    {
      name: 'Marketplace',
      tagline: 'B2B Commodity Trading',
      desc: 'Enterprise B2B marketplace with tokenization, escrow payments, and blockchain integration for global commodity trading.',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      features: ['Tokenization', 'Escrow Payments', 'Blockchain', 'Multi-currency', 'KYC/AML', 'Analytics']
    },
    {
      name: 'Accubooks',
      tagline: 'Enterprise Accounting',
      desc: 'Multi-tenant accounting solution with double-entry bookkeeping, inventory management, HR & payroll integration.',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      features: ['Double-entry', 'Multi-tenant', 'Payroll', 'Inventory', 'Financial Reports', 'Tax Compliance']
    },
    {
      name: 'School ERP',
      tagline: 'School Management',
      desc: 'Complete school management system covering admissions, academics, fees, transport, and parent communication.',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      features: ['Admissions', 'Academics', 'Fee Management', 'Transport', 'Exams', 'Parent Portal']
    },
    {
      name: 'Fleet Management',
      tagline: 'Enterprise Telematics',
      desc: 'Real-time GPS tracking, ELD compliance, driver management, and comprehensive fleet analytics platform.',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      features: ['GPS Tracking', 'ELD Compliance', 'Driver Management', 'Route Optimization', 'Fuel Analytics', 'Maintenance']
    }
  ];

  return (
    <>
      <PageHero
        label="Our Products"
        title="Production-Ready"
        titleAccent="Enterprise Solutions"
        description="Powerful, scalable software products built with modern technologies and ready for deployment."
      />
      
      <section className="section products-full">
        <div className="section-container">
          <div className="products-list">
            {products.map((product, i) => (
              <div key={i} className={`product-featured ${i % 2 === 1 ? 'reverse' : ''}`}>
                <TiltCard className="product-featured-visual" style={{ background: product.gradient }}>
                  <div className="product-3d-element">
                    <div className="cube-scene">
                      <div className="cube-face front" />
                      <div className="cube-face back" />
                      <div className="cube-face left" />
                      <div className="cube-face right" />
                      <div className="cube-face top" />
                      <div className="cube-face bottom" />
                    </div>
                  </div>
                </TiltCard>
                <div className="product-featured-content">
                  <span className="product-tagline">{product.tagline}</span>
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-desc">{product.desc}</p>
                  <div className="product-features">
                    {product.features.map((f, j) => (
                      <span key={j} className="product-feature-tag">{f}</span>
                    ))}
                  </div>
                  <div className="product-actions">
                    <MagneticButton className="btn-primary" onClick={() => setCurrentPage('Contact')}>
                      Request Demo
                    </MagneticButton>
                    <MagneticButton>Learn More</MagneticButton>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <CTASection title1="Ready to See" title2="Our Products in Action?" setCurrentPage={setCurrentPage} />
    </>
  );
};

// ==========================================
// PORTFOLIO PAGE
// ==========================================

const PortfolioPage = ({ setCurrentPage }) => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'Smart City', 'Enterprise', 'Data Center', 'E-Commerce'];
  
  const projects = [
    { category: 'Smart City', title: 'Smart City Dashboard', client: 'Municipal Corp', desc: 'Real-time urban monitoring system for efficient city management.', tech: ['React', 'Node.js', 'IoT', 'MongoDB'], gradient: 'linear-gradient(135deg, #00ffcc, #00ccff)' },
    { category: 'Enterprise', title: 'Enterprise CRM Platform', client: 'Manufacturing Co', desc: 'Custom CRM solution with sales pipeline and analytics.', tech: ['Next.js', 'PostgreSQL', 'Redis'], gradient: 'linear-gradient(135deg, #ff6b35, #ff9f1c)' },
    { category: 'Data Center', title: 'Data Center Monitor', client: 'IT Services', desc: 'Comprehensive MDC management dashboard with real-time monitoring.', tech: ['Vue.js', 'Python', 'Docker'], gradient: 'linear-gradient(135deg, #667eea, #764ba2)' },
    { category: 'E-Commerce', title: 'Multi-Vendor Marketplace', client: 'Retail Group', desc: 'B2B marketplace platform with 200+ vendors.', tech: ['React', 'Node.js', 'Stripe'], gradient: 'linear-gradient(135deg, #f093fb, #f5576c)' },
    { category: 'Enterprise', title: 'Telemedicine Platform', client: 'Healthcare', desc: 'HIPAA-compliant video consultation platform.', tech: ['React Native', 'WebRTC', 'AWS'], gradient: 'linear-gradient(135deg, #4facfe, #00f2fe)' },
    { category: 'E-Commerce', title: 'Digital Banking App', client: 'FinTech', desc: 'Mobile banking with 50K+ downloads.', tech: ['Flutter', 'Node.js', 'PostgreSQL'], gradient: 'linear-gradient(135deg, #43e97b, #38f9d7)' }
  ];
  
  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <>
      <PageHero
        label="Our Portfolio"
        title="Explore Our"
        titleAccent="Success Stories"
        description="Discover how we've helped businesses transform through innovative technology solutions."
      />
      
      <section className="section portfolio-section">
        <div className="section-container">
          <div className="portfolio-filter">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-btn ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="portfolio-grid">
            {filtered.map((project, i) => (
              <TiltCard key={i} className="portfolio-card">
                <div className="portfolio-visual" style={{ background: project.gradient }}>
                  <span className="portfolio-category">{project.category}</span>
                </div>
                <div className="portfolio-content">
                  <span className="portfolio-client">{project.client}</span>
                  <h3 className="portfolio-title">{project.title}</h3>
                  <p className="portfolio-desc">{project.desc}</p>
                  <div className="portfolio-tech">
                    {project.tech.map((t, j) => (
                      <span key={j} className="tech-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>
      
      <CTASection title1="Have a Project" title2="In Mind?" setCurrentPage={setCurrentPage} />
    </>
  );
};

// ==========================================
// TEAM PAGE
// ==========================================

const TeamPage = ({ setCurrentPage }) => {
  const team = [
    { name: 'Sudipto Mitra', role: 'Founder & Lead Developer', initials: 'SM', color: '#00ffcc', skills: ['Full-Stack', 'Architecture', 'Cloud', 'Leadership'] },
    { name: 'Pallabi Datta', role: 'HR Manager', initials: 'PD', color: '#ff6b35', skills: ['Talent Acquisition', 'Team Building', 'HR Operations'] },
    { name: 'Snehendu Roy', role: 'Full-stack MERN Developer', initials: 'SR', color: '#667eea', skills: ['React', 'Node.js', 'MongoDB', 'TypeScript'] },
    { name: 'Soumyadip Chanda', role: 'AI/ML Developer', initials: 'SC', color: '#ec4899', skills: ['Machine Learning', 'Python', 'TensorFlow', 'Data Science'] }
  ];
  
  const culture = [
    { icon: '🚀', title: 'Innovation First', desc: 'Creative thinking and exploring new technologies.' },
    { icon: '🤝', title: 'Collaboration', desc: 'Working together to achieve common goals.' },
    { icon: '📚', title: 'Continuous Learning', desc: 'Investing in growth through training.' },
    { icon: '⚖️', title: 'Work-Life Balance', desc: 'Flexible arrangements for thriving.' }
  ];

  return (
    <>
      <PageHero
        label="Our Team"
        title="Meet The Experts"
        titleAccent="Behind Infinititech"
        description="A dedicated team of technology professionals passionate about delivering excellence."
      />
      
      <section className="section team-section">
        <div className="section-container">
          <div className="team-grid">
            {team.map((member, i) => (
              <TiltCard key={i} className="team-card">
                <div className="team-avatar" style={{ background: member.color, boxShadow: `0 0 40px ${member.color}50` }}>
                  <span className="avatar-glow" style={{ background: member.color }} />
                  {member.initials}
                </div>
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role" style={{ color: member.color }}>{member.role}</p>
                <div className="team-skills">
                  {member.skills.map((skill, j) => (
                    <span key={j} className="skill-tag">{skill}</span>
                  ))}
                </div>
                <div className="team-socials">
                  <span className="social-link">Li</span>
                  <span className="social-link">Tw</span>
                  <span className="social-link">Gh</span>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>
      
      <section className="section culture-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">Our Culture</span>
            <h2 className="section-title">
              <SplitText text="What Makes Us" />
              <br />
              <SplitText text="Different" className="accent" delay={0.2} />
            </h2>
          </div>
          
          <div className="culture-grid">
            {culture.map((item, i) => (
              <TiltCard key={i} className="culture-card">
                <span className="culture-icon">{item.icon}</span>
                <h3 className="culture-title">{item.title}</h3>
                <p className="culture-desc">{item.desc}</p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>
      
      <CTASection title1="Want to Join" title2="Our Team?" setCurrentPage={setCurrentPage} />
    </>
  );
};

// ==========================================
// CONTACT PAGE
// ==========================================

const ContactPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const contactInfo = [
    { icon: '✉️', title: 'Email Us', content: 'hello@infinititech.com' },
    { icon: '📞', title: 'Call Us', content: '+91 98765 43210' },
    { icon: '📍', title: 'Visit Us', content: 'India' },
    { icon: '🕐', title: 'Business Hours', content: 'Mon-Fri: 9AM-6PM IST' }
  ];
  
  const faqs = [
    { q: 'What is your typical project timeline?', a: 'Project timelines vary based on scope. Simple projects take 4-8 weeks, while complex enterprise solutions may take 3-6 months.' },
    { q: 'Do you provide ongoing support?', a: 'Yes! We offer comprehensive maintenance and support packages to ensure your solutions run smoothly.' },
    { q: 'What technologies do you specialize in?', a: 'We specialize in React, Next.js, Node.js, React Native, Python, and cloud platforms like AWS and Azure.' }
  ];
  
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <PageHero
        label="Contact Us"
        title="Let's Start a"
        titleAccent="Conversation"
        description="Have a project in mind? We're here to help bring your vision to life."
      />
      
      <section className="section contact-info-section">
        <div className="section-container">
          <div className="contact-info-grid">
            {contactInfo.map((info, i) => (
              <TiltCard key={i} className="contact-info-card">
                <span className="info-icon">{info.icon}</span>
                <h4 className="info-title">{info.title}</h4>
                <p className="info-content">{info.content}</p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>
      
      <section className="section contact-form-section">
        <div className="section-container">
          <div className="contact-wrapper">
            <div className="contact-form-info">
              <span className="section-tag">Get in Touch</span>
              <h2 className="section-title">
                <SplitText text="Let's Discuss" />
                <br />
                <SplitText text="Your Project" className="accent" delay={0.2} />
              </h2>
              <p className="contact-form-desc">
                Fill out the form and we'll get back to you within 24 hours.
              </p>
              <div className="contact-expectations">
                <h4>What to Expect</h4>
                <ul>
                  <li><span className="expect-num">1</span> We review your inquiry</li>
                  <li><span className="expect-num">2</span> Schedule a discovery call</li>
                  <li><span className="expect-num">3</span> Receive a detailed proposal</li>
                </ul>
              </div>
            </div>
            
            <div className="contact-form-container">
              {!formSubmitted ? (
                <form className="contact-form" onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }}>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Full Name *</label>
                      <input type="text" placeholder="John Doe" required />
                    </div>
                    <div className="form-group">
                      <label>Email *</label>
                      <input type="email" placeholder="john@example.com" required />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Company</label>
                      <input type="text" placeholder="Your Company" />
                    </div>
                    <div className="form-group">
                      <label>Phone</label>
                      <input type="tel" placeholder="+1 234 567 890" />
                    </div>
                  </div>
                  <div className="form-group full">
                    <label>Service Interested In</label>
                    <select>
                      <option value="">Select a service</option>
                      <option>Data Center Management</option>
                      <option>Custom Software</option>
                      <option>Smart City Solutions</option>
                      <option>Web & Mobile Development</option>
                      <option>Digital Marketing</option>
                    </select>
                  </div>
                  <div className="form-group full">
                    <label>Project Details *</label>
                    <textarea rows={5} placeholder="Tell us about your project..." required />
                  </div>
                  <MagneticButton className="btn-primary large" type="submit">
                    Send Message
                    <svg viewBox="0 0 24 24" className="btn-arrow">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" />
                    </svg>
                  </MagneticButton>
                </form>
              ) : (
                <div className="form-success">
                  <div className="success-icon">✓</div>
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
                  <MagneticButton onClick={() => setFormSubmitted(false)}>
                    Send Another Message
                  </MagneticButton>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      <section className="section faq-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">FAQ</span>
            <h2 className="section-title">
              <SplitText text="Frequently Asked" />
              <br />
              <SplitText text="Questions" className="accent" delay={0.2} />
            </h2>
          </div>
          
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`faq-item ${openFaq === i ? 'open' : ''}`}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className="faq-question">
                  <h4>{faq.q}</h4>
                  <span className="faq-toggle">{openFaq === i ? '−' : '+'}</span>
                </div>
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

// ==========================================
// MAIN APP
// ==========================================

export default function InfinititechWebsite() {
  const [currentPage, setCurrentPage] = useState('Home');
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);
  
  const renderPage = () => {
    switch (currentPage) {
      case 'Home': return <HomePage setCurrentPage={setCurrentPage} />;
      case 'About': return <AboutPage setCurrentPage={setCurrentPage} />;
      case 'Services': return <ServicesPage setCurrentPage={setCurrentPage} />;
      case 'Products': return <ProductsPage setCurrentPage={setCurrentPage} />;
      case 'Portfolio': return <PortfolioPage setCurrentPage={setCurrentPage} />;
      case 'Team': return <TeamPage setCurrentPage={setCurrentPage} />;
      case 'Contact': return <ContactPage />;
      default: return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };
  
  return (
    <div className="app">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap');
        
        :root {
          --color-bg: #080c15;
          --color-bg-elevated: #0d1320;
          --color-bg-card: #111827;
          --color-text: #f8fafc;
          --color-text-muted: #94a3b8;
          --color-primary: #00ffcc;
          --color-secondary: #ff6b35;
          --color-accent: #667eea;
          --color-border: rgba(255, 255, 255, 0.08);
          --font-display: 'Space Grotesk', sans-serif;
          --font-body: 'Inter', sans-serif;
          --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body, .app {
          background: var(--color-bg);
          color: var(--color-text);
          font-family: var(--font-body);
          line-height: 1.6;
          overflow-x: hidden;
          cursor: none;
        }
        
        button {
          font-family: inherit;
          border: none;
          background: none;
          cursor: none;
        }
        
        input, textarea, select {
          font-family: inherit;
        }
        
        ::selection {
          background: var(--color-primary);
          color: var(--color-bg);
        }
        
        /* Custom Cursor */
        .custom-cursor {
          position: fixed;
          width: 40px;
          height: 40px;
          border: 2px solid var(--color-primary);
          border-radius: 50%;
          pointer-events: none;
          transform: translate(-50%, -50%);
          transition: width 0.3s, height 0.3s, border-color 0.3s, opacity 0.3s;
          z-index: 10000;
          mix-blend-mode: difference;
        }
        
        .custom-cursor.hidden { opacity: 0; }
        .custom-cursor.hovered {
          width: 60px;
          height: 60px;
          border-color: var(--color-secondary);
        }
        
        .custom-cursor-dot {
          position: fixed;
          width: 6px;
          height: 6px;
          background: var(--color-primary);
          border-radius: 50%;
          pointer-events: none;
          transform: translate(-50%, -50%);
          z-index: 10001;
          transition: opacity 0.3s;
        }
        
        .custom-cursor-dot.hidden { opacity: 0; }
        
        /* Scroll Progress */
        .scroll-progress {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.1);
        }
        
        .scroll-progress-bar {
          height: 100%;
          background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
          transition: width 0.1s;
        }
        
        /* Navigation */
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          padding: 20px 40px;
          transition: all 0.4s var(--ease-out-expo);
        }
        
        .nav.scrolled {
          background: rgba(8, 12, 21, 0.9);
          backdrop-filter: blur(20px);
          padding: 15px 40px;
          border-bottom: 1px solid var(--color-border);
        }
        
        .nav-inner {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 1.4rem;
        }
        
        .logo-symbol {
          font-size: 2rem;
          background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .nav-links {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .nav-link {
          padding: 8px 16px;
          font-size: 0.9rem;
          color: var(--color-text-muted);
          transition: color 0.3s;
          position: relative;
          cursor: none;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 16px;
          right: 16px;
          height: 2px;
          background: var(--color-primary);
          transform: scaleX(0);
          transition: transform 0.3s var(--ease-out-expo);
        }
        
        .nav-link:hover, .nav-link.active {
          color: var(--color-text);
        }
        
        .nav-link:hover::after, .nav-link.active::after {
          transform: scaleX(1);
        }
        
        .nav-cta {
          padding: 10px 24px !important;
          background: linear-gradient(135deg, var(--color-primary), var(--color-accent)) !important;
          border-radius: 100px !important;
          font-weight: 600 !important;
          font-size: 0.9rem !important;
          color: var(--color-bg) !important;
        }
        
        .nav-mobile-toggle {
          display: none;
          flex-direction: column;
          gap: 5px;
          padding: 10px;
        }
        
        .nav-mobile-toggle span {
          display: block;
          width: 24px;
          height: 2px;
          background: var(--color-text);
          transition: all 0.3s;
        }
        
        @media (max-width: 1024px) {
          .nav-links { display: none; }
          .nav-mobile-toggle { display: flex; }
          .nav-links.open {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: var(--color-bg-elevated);
            padding: 20px;
            gap: 10px;
            border-bottom: 1px solid var(--color-border);
          }
        }
        
        /* Aurora Background */
        .aurora-container {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }
        
        .aurora {
          position: absolute;
          width: 150%;
          height: 150%;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.3;
          animation: aurora-drift 20s ease-in-out infinite;
        }
        
        .aurora-1 {
          top: -50%;
          left: -25%;
          background: radial-gradient(circle, var(--color-primary) 0%, transparent 60%);
        }
        
        .aurora-2 {
          top: 0;
          right: -25%;
          background: radial-gradient(circle, var(--color-secondary) 0%, transparent 60%);
          animation-delay: -7s;
        }
        
        .aurora-3 {
          bottom: -50%;
          left: 25%;
          background: radial-gradient(circle, var(--color-accent) 0%, transparent 60%);
          animation-delay: -14s;
        }
        
        @keyframes aurora-drift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(5%, 5%) scale(1.1); }
          50% { transform: translate(-5%, 10%) scale(0.9); }
          75% { transform: translate(10%, -5%) scale(1.05); }
        }
        
        /* Split Text Animation */
        .split-text { display: inline; }
        .word-wrapper { display: inline-block; }
        
        .split-char {
          display: inline-block;
          opacity: 0;
          transform: translateY(100%) rotateX(-90deg);
          transform-origin: bottom center;
        }
        
        .split-char.animate {
          animation: char-reveal 0.8s var(--ease-out-expo) forwards;
        }
        
        @keyframes char-reveal {
          to {
            opacity: 1;
            transform: translateY(0) rotateX(0);
          }
        }
        
        /* Blur Text Animation */
        .blur-text .blur-char {
          display: inline-block;
          opacity: 0;
          filter: blur(10px);
          transform: translateY(20px);
        }
        
        .blur-text.in-view .blur-char {
          animation: blur-reveal 0.6s var(--ease-out-expo) forwards;
        }
        
        @keyframes blur-reveal {
          to {
            opacity: 1;
            filter: blur(0);
            transform: translateY(0);
          }
        }
        
        /* Magnetic Button */
        .magnetic-button {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 32px;
          background: transparent;
          border: 1px solid var(--color-border);
          border-radius: 100px;
          font-weight: 600;
          font-size: 1rem;
          color: var(--color-text);
          cursor: none;
          transition: transform 0.15s ease-out;
          overflow: hidden;
        }
        
        .magnetic-button-inner {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .magnetic-button-glow {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
          opacity: 0;
          transition: opacity 0.3s;
        }
        
        .magnetic-button:hover .magnetic-button-glow { opacity: 1; }
        .magnetic-button:hover {
          color: var(--color-bg);
          border-color: transparent;
        }
        
        .btn-primary {
          background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
          color: var(--color-bg);
          border: none;
        }
        
        .btn-primary .magnetic-button-glow {
          background: linear-gradient(135deg, var(--color-secondary), var(--color-primary));
        }
        
        .btn-primary.large {
          padding: 20px 48px;
          font-size: 1.1rem;
        }
        
        .btn-arrow {
          width: 20px;
          height: 20px;
          transition: transform 0.3s;
        }
        
        .magnetic-button:hover .btn-arrow {
          transform: translateX(5px);
        }
        
        /* Tilt Card */
        .tilt-card {
          position: relative;
          transform-style: preserve-3d;
          transition: transform 0.15s ease-out;
          will-change: transform;
        }
        
        .tilt-card-glare {
          position: absolute;
          inset: 0;
          border-radius: inherit;
          pointer-events: none;
          z-index: 10;
        }
        
        /* Section Styles */
        .section {
          padding: 150px 0;
          position: relative;
          z-index: 1;
        }
        
        .section-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }
        
        .section-tag {
          display: inline-block;
          padding: 10px 24px;
          background: rgba(0, 255, 204, 0.1);
          border: 1px solid rgba(0, 255, 204, 0.2);
          border-radius: 100px;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--color-primary);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 24px;
        }
        
        .section-title {
          font-family: var(--font-display);
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 700;
          line-height: 1.15;
        }
        
        .section-title .accent,
        .accent {
          background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .section-cta {
          text-align: center;
          margin-top: 50px;
        }
        
        /* Hero Section */
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          padding: 120px 40px 80px;
          overflow: hidden;
        }
        
        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 900px;
        }
        
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 12px 24px;
          background: rgba(0, 255, 204, 0.08);
          border: 1px solid rgba(0, 255, 204, 0.2);
          border-radius: 100px;
          margin-bottom: 32px;
        }
        
        .badge-dot {
          width: 10px;
          height: 10px;
          background: var(--color-primary);
          border-radius: 50%;
          animation: pulse 2s ease-in-out infinite;
          box-shadow: 0 0 10px var(--color-primary);
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.3); opacity: 0.6; }
        }
        
        .hero-badge span {
          font-size: 0.9rem;
          color: var(--color-primary);
          font-weight: 500;
        }
        
        .hero-title {
          font-family: var(--font-display);
          font-size: clamp(3rem, 10vw, 7rem);
          font-weight: 700;
          line-height: 1;
          margin-bottom: 30px;
        }
        
        .hero-line {
          display: block;
        }
        
        .hero-subtitle {
          font-size: 1.2rem;
          color: var(--color-text-muted);
          margin-bottom: 40px;
          max-width: 600px;
        }
        
        .hero-ctas {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }
        
        .hero-scroll {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }
        
        .scroll-indicator {
          width: 26px;
          height: 42px;
          border: 2px solid var(--color-border);
          border-radius: 14px;
          display: flex;
          justify-content: center;
          padding-top: 10px;
        }
        
        .scroll-dot {
          width: 4px;
          height: 8px;
          background: var(--color-primary);
          border-radius: 2px;
          animation: scrollDot 2s ease-in-out infinite;
        }
        
        @keyframes scrollDot {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(10px); opacity: 0.3; }
        }
        
        .hero-scroll span {
          font-size: 0.75rem;
          color: var(--color-text-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        
        .hero-visual {
          position: absolute;
          right: 10%;
          top: 50%;
          transform: translateY(-50%);
          width: 500px;
          height: 500px;
        }
        
        .hero-sphere {
          position: absolute;
          width: 300px;
          height: 300px;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          background: radial-gradient(circle at 30% 30%, rgba(0, 255, 204, 0.4), transparent 60%);
          border-radius: 50%;
          filter: blur(30px);
        }
        
        .hero-ring {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          border: 1px solid var(--color-border);
          border-radius: 50%;
          animation: ring-rotate 20s linear infinite;
        }
        
        .ring-1 { width: 350px; height: 350px; }
        .ring-2 { width: 420px; height: 420px; animation-duration: 25s; animation-direction: reverse; }
        .ring-3 { width: 490px; height: 490px; animation-duration: 30s; }
        
        @keyframes ring-rotate {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        
        /* Page Hero */
        .page-hero {
          min-height: 60vh;
          display: flex;
          align-items: center;
          position: relative;
          padding: 160px 40px 100px;
          overflow: hidden;
        }
        
        .page-hero-content {
          position: relative;
          z-index: 2;
          max-width: 900px;
        }
        
        .page-hero-title {
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 7vw, 5rem);
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 24px;
        }
        
        .page-hero-desc {
          font-size: 1.2rem;
          color: var(--color-text-muted);
          max-width: 700px;
        }
        
        /* Cards */
        .value-card, .service-card-mini, .culture-card, .stat-card, .contact-info-card {
          padding: 36px;
          background: var(--color-bg-card);
          border: 1px solid var(--color-border);
          border-radius: 24px;
          transition: border-color 0.3s;
        }
        
        .value-card:hover, .service-card-mini:hover {
          border-color: rgba(0, 255, 204, 0.3);
        }
        
        .value-icon, .service-icon, .culture-icon {
          font-size: 2.5rem;
          margin-bottom: 20px;
          display: block;
        }
        
        .value-title, .service-title, .culture-title {
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 12px;
        }
        
        .value-desc, .service-desc, .culture-desc {
          color: var(--color-text-muted);
          line-height: 1.7;
        }
        
        /* Grids */
        .about-values, .values-grid, .culture-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
          margin-bottom: 60px;
        }
        
        .about-stats, .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 24px;
          padding: 50px;
          background: linear-gradient(135deg, rgba(0, 255, 204, 0.05), rgba(102, 126, 234, 0.05));
          border: 1px solid var(--color-border);
          border-radius: 24px;
        }
        
        .stat-item, .stat-card {
          text-align: center;
        }
        
        .stat-value, .stat-card-value {
          display: block;
          font-family: var(--font-display);
          font-size: clamp(2rem, 4vw, 3.5rem);
          font-weight: 700;
          background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1.1;
        }
        
        .stat-label, .stat-card-label {
          display: block;
          margin-top: 8px;
          color: var(--color-text-muted);
          font-size: 0.9rem;
        }
        
        .stat-card-icon {
          font-size: 2rem;
          margin-bottom: 16px;
          display: block;
        }
        
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
        }
        
        .service-card-mini {
          padding: 28px;
          text-align: center;
        }
        
        /* Products */
        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }
        
        .product-card {
          background: var(--color-bg-card);
          border: 1px solid var(--color-border);
          border-radius: 24px;
          overflow: hidden;
        }
        
        .product-visual {
          height: 160px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .product-cube {
          width: 50px;
          height: 50px;
          position: relative;
          transform-style: preserve-3d;
          animation: cube-rotate 8s linear infinite;
        }
        
        .cube-face {
          position: absolute;
          width: 50px;
          height: 50px;
          background: rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
        
        .cube-face.front { transform: translateZ(25px); }
        .cube-face.back { transform: translateZ(-25px) rotateY(180deg); }
        .cube-face.left { transform: translateX(-25px) rotateY(-90deg); }
        .cube-face.right { transform: translateX(25px) rotateY(90deg); }
        .cube-face.top { transform: translateY(-25px) rotateX(90deg); }
        .cube-face.bottom { transform: translateY(25px) rotateX(-90deg); }
        
        @keyframes cube-rotate {
          from { transform: rotateX(0) rotateY(0); }
          to { transform: rotateX(360deg) rotateY(360deg); }
        }
        
        .product-content {
          padding: 24px;
        }
        
        .product-tagline {
          display: block;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--color-primary);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 6px;
        }
        
        .product-name {
          font-family: var(--font-display);
          font-size: 1.4rem;
          font-weight: 600;
        }
        
        /* Products Full */
        .products-list {
          display: flex;
          flex-direction: column;
          gap: 60px;
        }
        
        .product-featured {
          display: grid;
          grid-template-columns: 400px 1fr;
          gap: 50px;
          align-items: center;
        }
        
        .product-featured.reverse {
          grid-template-columns: 1fr 400px;
        }
        
        .product-featured.reverse .product-featured-visual {
          order: 2;
        }
        
        .product-featured-visual {
          height: 400px;
          border-radius: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .product-3d-element {
          perspective: 200px;
        }
        
        .cube-scene {
          width: 80px;
          height: 80px;
          position: relative;
          transform-style: preserve-3d;
          animation: cube-rotate 12s linear infinite;
        }
        
        .cube-scene .cube-face {
          width: 80px;
          height: 80px;
        }
        
        .cube-scene .cube-face.front { transform: translateZ(40px); }
        .cube-scene .cube-face.back { transform: translateZ(-40px) rotateY(180deg); }
        .cube-scene .cube-face.left { transform: translateX(-40px) rotateY(-90deg); }
        .cube-scene .cube-face.right { transform: translateX(40px) rotateY(90deg); }
        .cube-scene .cube-face.top { transform: translateY(-40px) rotateX(90deg); }
        .cube-scene .cube-face.bottom { transform: translateY(40px) rotateX(-90deg); }
        
        .product-featured-content .product-name {
          font-size: 2rem;
          margin-bottom: 16px;
        }
        
        .product-featured-content .product-desc {
          color: var(--color-text-muted);
          line-height: 1.8;
          margin-bottom: 24px;
        }
        
        .product-features {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 28px;
        }
        
        .product-feature-tag {
          padding: 8px 16px;
          background: rgba(0, 255, 204, 0.1);
          border: 1px solid rgba(0, 255, 204, 0.2);
          border-radius: 100px;
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--color-primary);
        }
        
        .product-actions {
          display: flex;
          gap: 16px;
        }
        
        /* Services Full */
        .services-list {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }
        
        .service-full-card {
          padding: 40px;
          background: var(--color-bg-card);
          border: 1px solid var(--color-border);
          border-radius: 24px;
        }
        
        .service-full-header {
          display: flex;
          gap: 20px;
          margin-bottom: 24px;
        }
        
        .service-full-icon {
          font-size: 3rem;
          flex-shrink: 0;
        }
        
        .service-full-title {
          font-family: var(--font-display);
          font-size: 1.6rem;
          font-weight: 600;
          margin-bottom: 8px;
        }
        
        .service-full-short {
          color: var(--color-text-muted);
        }
        
        .service-full-desc {
          color: var(--color-text-muted);
          line-height: 1.8;
          margin-bottom: 28px;
        }
        
        .service-full-features h4 {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 16px;
          color: var(--color-primary);
        }
        
        .service-full-features ul {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 12px;
          list-style: none;
          margin-bottom: 28px;
        }
        
        .service-full-features li {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--color-text-muted);
        }
        
        /* Portfolio */
        .portfolio-filter {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: center;
          margin-bottom: 50px;
        }
        
        .filter-btn {
          padding: 10px 24px;
          background: transparent;
          border: 1px solid var(--color-border);
          border-radius: 100px;
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--color-text-muted);
          cursor: none;
          transition: all 0.3s;
        }
        
        .filter-btn:hover {
          border-color: var(--color-primary);
          color: var(--color-text);
        }
        
        .filter-btn.active {
          background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
          border-color: transparent;
          color: var(--color-bg);
        }
        
        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 24px;
        }
        
        .portfolio-card {
          background: var(--color-bg-card);
          border: 1px solid var(--color-border);
          border-radius: 24px;
          overflow: hidden;
        }
        
        .portfolio-visual {
          height: 200px;
          display: flex;
          align-items: flex-end;
          padding: 20px;
          position: relative;
        }
        
        .portfolio-visual::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
        }
        
        .portfolio-category {
          position: relative;
          z-index: 1;
          padding: 6px 14px;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(10px);
          border-radius: 100px;
          font-size: 0.75rem;
          font-weight: 600;
        }
        
        .portfolio-content {
          padding: 24px;
        }
        
        .portfolio-client {
          display: block;
          font-size: 0.8rem;
          color: var(--color-text-muted);
          margin-bottom: 6px;
        }
        
        .portfolio-title {
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 10px;
        }
        
        .portfolio-desc {
          color: var(--color-text-muted);
          font-size: 0.95rem;
          margin-bottom: 16px;
        }
        
        .portfolio-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        
        .tech-tag {
          padding: 5px 12px;
          background: rgba(0, 255, 204, 0.1);
          border-radius: 100px;
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--color-primary);
        }
        
        /* Team */
        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
        }
        
        .team-card {
          padding: 40px;
          background: var(--color-bg-card);
          border: 1px solid var(--color-border);
          border-radius: 24px;
          text-align: center;
        }
        
        .team-avatar {
          width: 100px;
          height: 100px;
          margin: 0 auto 25px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-display);
          font-size: 2rem;
          font-weight: 700;
          color: var(--color-bg);
          position: relative;
        }
        
        .avatar-glow {
          position: absolute;
          inset: -10px;
          border-radius: 50%;
          opacity: 0.3;
          filter: blur(20px);
          z-index: -1;
        }
        
        .team-name {
          font-family: var(--font-display);
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 8px;
        }
        
        .team-role {
          margin-bottom: 20px;
          font-weight: 500;
        }
        
        .team-skills {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 8px;
          margin-bottom: 20px;
        }
        
        .skill-tag {
          padding: 5px 12px;
          background: rgba(0, 255, 204, 0.1);
          border-radius: 100px;
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--color-primary);
        }
        
        .team-socials {
          display: flex;
          justify-content: center;
          gap: 12px;
        }
        
        .social-link {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--color-border);
          border-radius: 50%;
          color: var(--color-text-muted);
          font-size: 0.8rem;
          font-weight: 600;
          transition: all 0.3s;
          cursor: pointer;
        }
        
        .social-link:hover {
          background: var(--color-primary);
          border-color: var(--color-primary);
          color: var(--color-bg);
        }
        
        /* Contact */
        .contact-info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 24px;
        }
        
        .contact-info-card {
          text-align: center;
        }
        
        .info-icon {
          font-size: 2rem;
          margin-bottom: 16px;
          display: block;
        }
        
        .info-title {
          font-family: var(--font-display);
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 8px;
        }
        
        .info-content {
          color: var(--color-text-muted);
        }
        
        .contact-wrapper {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 60px;
          align-items: start;
        }
        
        .contact-form-desc {
          color: var(--color-text-muted);
          line-height: 1.7;
          margin-bottom: 36px;
        }
        
        .contact-expectations h4 {
          font-size: 1rem;
          margin-bottom: 20px;
        }
        
        .contact-expectations ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        
        .contact-expectations li {
          display: flex;
          align-items: center;
          gap: 16px;
          color: var(--color-text-muted);
        }
        
        .expect-num {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
          border-radius: 50%;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--color-bg);
          flex-shrink: 0;
        }
        
        .contact-form-container {
          background: var(--color-bg-card);
          border: 1px solid var(--color-border);
          border-radius: 24px;
          padding: 40px;
        }
        
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        
        .form-row {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .form-group.full {
          grid-column: 1 / -1;
        }
        
        .form-group label {
          font-size: 0.9rem;
          font-weight: 600;
        }
        
        .form-group input,
        .form-group select,
        .form-group textarea {
          padding: 14px 18px;
          background: var(--color-bg-elevated);
          border: 1px solid var(--color-border);
          border-radius: 12px;
          font-size: 1rem;
          color: var(--color-text);
          transition: border-color 0.3s;
          cursor: none;
        }
        
        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--color-primary);
        }
        
        .form-group select {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 14px center;
          background-size: 18px;
          padding-right: 48px;
        }
        
        .form-group select option {
          background: var(--color-bg-elevated);
        }
        
        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }
        
        .form-success {
          text-align: center;
          padding: 60px 40px;
        }
        
        .success-icon {
          width: 80px;
          height: 80px;
          margin: 0 auto 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
          border-radius: 50%;
          font-size: 2.5rem;
          color: var(--color-bg);
        }
        
        .form-success h3 {
          font-size: 1.5rem;
          margin-bottom: 12px;
        }
        
        .form-success p {
          color: var(--color-text-muted);
          margin-bottom: 28px;
        }
        
        /* FAQ */
        .faq-list {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        
        .faq-item {
          background: var(--color-bg-card);
          border: 1px solid var(--color-border);
          border-radius: 16px;
          overflow: hidden;
          cursor: pointer;
          transition: border-color 0.3s;
        }
        
        .faq-item:hover {
          border-color: rgba(0, 255, 204, 0.3);
        }
        
        .faq-question {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 24px 28px;
        }
        
        .faq-question h4 {
          font-size: 1.05rem;
          font-weight: 600;
        }
        
        .faq-toggle {
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          color: var(--color-primary);
        }
        
        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease;
        }
        
        .faq-item.open .faq-answer {
          max-height: 300px;
        }
        
        .faq-answer p {
          padding: 0 28px 24px;
          color: var(--color-text-muted);
          line-height: 1.7;
        }
        
        /* CTA Section */
        .cta-section {
          padding: 150px 40px;
          position: relative;
          overflow: hidden;
        }
        
        .cta-glow {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          filter: blur(130px);
          opacity: 0.3;
        }
        
        .cta-glow.glow-1 {
          top: -200px;
          left: -150px;
          background: var(--color-primary);
        }
        
        .cta-glow.glow-2 {
          bottom: -200px;
          right: -150px;
          background: var(--color-secondary);
        }
        
        .cta-content {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 700px;
          margin: 0 auto;
        }
        
        .cta-title {
          font-family: var(--font-display);
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 700;
          line-height: 1.15;
          margin-bottom: 20px;
        }
        
        .cta-desc {
          font-size: 1.15rem;
          color: var(--color-text-muted);
          margin-bottom: 36px;
        }
        
        /* Footer */
        .footer {
          padding: 80px 0 40px;
          background: var(--color-bg-elevated);
          border-top: 1px solid var(--color-border);
          position: relative;
          z-index: 10;
        }
        
        .footer-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
        }
        
        .footer-main {
          display: flex;
          justify-content: space-between;
          gap: 60px;
          margin-bottom: 60px;
        }
        
        .footer-brand {
          max-width: 400px;
        }
        
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 1.2rem;
          margin-bottom: 20px;
        }
        
        .footer-tagline {
          color: var(--color-text-muted);
          line-height: 1.7;
        }
        
        .footer-links {
          display: flex;
          gap: 60px;
        }
        
        .footer-col h4 {
          font-family: var(--font-display);
          font-weight: 600;
          margin-bottom: 20px;
        }
        
        .footer-col ul {
          list-style: none;
        }
        
        .footer-col li {
          margin-bottom: 12px;
          color: var(--color-text-muted);
        }
        
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 40px;
          border-top: 1px solid var(--color-border);
          color: var(--color-text-muted);
          font-size: 0.9rem;
        }
        
        .footer-legal {
          display: flex;
          gap: 30px;
        }
        
        /* Story Section */
        .story-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        
        .story-text p {
          color: var(--color-text-muted);
          line-height: 1.8;
          margin-top: 20px;
        }
        
        .story-visual {
          position: relative;
        }
        
        .story-image {
          height: 400px;
          background: var(--color-bg-card);
          border-radius: 24px;
          overflow: hidden;
          position: relative;
        }
        
        .story-pattern {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 50%, var(--color-secondary) 100%);
          opacity: 0.2;
        }
        
        .story-stat-card {
          position: absolute;
          bottom: 24px;
          right: 24px;
          padding: 20px 28px;
          background: var(--color-bg-elevated);
          border: 1px solid var(--color-border);
          border-radius: 16px;
          backdrop-filter: blur(10px);
        }
        
        .stat-big-value {
          display: block;
          font-family: var(--font-display);
          font-size: 2.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .stat-big-label {
          color: var(--color-text-muted);
          font-size: 0.9rem;
        }
        
        /* MV Section */
        .mv-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        
        .mv-card {
          padding: 40px;
          background: var(--color-bg-card);
          border: 1px solid var(--color-border);
          border-radius: 24px;
          position: relative;
          overflow: hidden;
        }
        
        .mv-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
        }
        
        .mission-card::before {
          background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
        }
        
        .vision-card::before {
          background: linear-gradient(90deg, var(--color-secondary), var(--color-primary));
        }
        
        .mv-icon {
          font-size: 3rem;
          margin-bottom: 20px;
          display: block;
        }
        
        .mv-title {
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 16px;
        }
        
        .mv-text {
          color: var(--color-text-muted);
          line-height: 1.8;
        }
        
        /* Responsive */
        @media (max-width: 1024px) {
          .story-grid, .mv-grid, .contact-wrapper, .product-featured {
            grid-template-columns: 1fr;
          }
          
          .product-featured.reverse .product-featured-visual {
            order: 0;
          }
          
          .hero-visual {
            display: none;
          }
        }
        
        @media (max-width: 768px) {
          .section { padding: 100px 0; }
          .section-container { padding: 0 20px; }
          .hero { padding: 100px 20px 60px; }
          .page-hero { padding: 140px 20px 80px; }
          .form-row { grid-template-columns: 1fr; }
          .footer-main { flex-direction: column; }
          .footer-links { gap: 40px; }
          .footer-bottom { flex-direction: column; gap: 20px; text-align: center; }
        }
      `}</style>
      
      <ParticleField />
      <ScrollProgress />
      <CustomCursor />
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main>
        {renderPage()}
      </main>
      
      <Footer />
    </div>
  );
}
