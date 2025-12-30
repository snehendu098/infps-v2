import React, { useState, useEffect, useRef } from 'react';

// ============================================
// INFINITITECH PARTNERS - COMPLETE WEBSITE PREVIEW
// ============================================

// Hooks
const useInView = (options = {}) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsInView(true);
    }, { threshold: options.threshold || 0.1 });
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  
  return [ref, isInView];
};

// Animation Components
const SplitHeading = ({ children, delay = 0 }) => {
  const [ref, isInView] = useInView();
  const words = children.split(' ');
  
  return (
    <span ref={ref} style={{ display: 'inline' }}>
      {words.map((word, i) => (
        <span key={i} style={{ display: 'inline-block', overflow: 'hidden' }}>
          <span style={{
            display: 'inline-block',
            transform: isInView ? 'translateY(0)' : 'translateY(100%)',
            transition: `transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay + i * 0.08}s`
          }}>
            {word}
          </span>
          {i < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </span>
  );
};

const RevealText = ({ children, delay = 0 }) => {
  const [ref, isInView] = useInView();
  
  return (
    <span ref={ref} style={{ display: 'inline-block', overflow: 'hidden' }}>
      <span style={{
        display: 'inline-block',
        transform: isInView ? 'translateY(0)' : 'translateY(100%)',
        opacity: isInView ? 1 : 0,
        transition: `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`
      }}>
        {children}
      </span>
    </span>
  );
};

// UI Components
const MagneticButton = ({ children, className = '', onClick, href }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const ref = useRef(null);
  
  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    setPos({
      x: (e.clientX - rect.left - rect.width / 2) * 0.3,
      y: (e.clientY - rect.top - rect.height / 2) * 0.3
    });
  };
  
  const style = {
    transform: `translate(${pos.x}px, ${pos.y}px)`,
    transition: 'transform 0.2s ease-out'
  };
  
  const baseStyle = {
    ...style,
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    padding: '16px 32px',
    fontSize: '1rem',
    fontWeight: 600,
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '100px',
    cursor: 'pointer',
    textDecoration: 'none',
    color: '#fff',
    background: 'transparent',
    position: 'relative',
    overflow: 'hidden'
  };
  
  const primaryStyle = className.includes('btn-primary') ? {
    background: 'linear-gradient(135deg, #00ffcc, #667eea)',
    border: 'none',
    color: '#050810'
  } : {};
  
  const Component = href ? 'a' : 'button';
  
  return (
    <Component
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      style={{ ...baseStyle, ...primaryStyle }}
    >
      {children}
    </Component>
  );
};

const TiltCard = ({ children, style = {} }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const ref = useRef(null);
  
  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setTilt({ x: (y - 0.5) * -10, y: (x - 0.5) * 10 });
  };
  
  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{
        ...style,
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: 'transform 0.1s ease-out'
      }}
    >
      {children}
    </div>
  );
};

const AnimatedCounter = ({ end, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [ref, isInView] = useInView();
  const animated = useRef(false);
  
  useEffect(() => {
    if (isInView && !animated.current) {
      animated.current = true;
      const duration = 2000;
      const start = Date.now();
      const animate = () => {
        const elapsed = Date.now() - start;
        const progress = Math.min(elapsed / duration, 1);
        setCount(Math.floor((1 - Math.pow(1 - progress, 4)) * end));
        if (progress < 1) requestAnimationFrame(animate);
      };
      animate();
    }
  }, [isInView, end]);
  
  return <span ref={ref}>{count}{suffix}</span>;
};

const ArrowIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Section Header
const SectionHeader = ({ label, title, titleAccent }) => (
  <div style={{ textAlign: 'center', marginBottom: '60px' }}>
    {label && (
      <span style={{
        display: 'inline-block',
        padding: '10px 22px',
        background: 'rgba(0, 255, 204, 0.08)',
        border: '1px solid rgba(0, 255, 204, 0.2)',
        borderRadius: '100px',
        fontSize: '0.85rem',
        fontWeight: 600,
        color: '#00ffcc',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        marginBottom: '24px'
      }}>
        <RevealText>{label}</RevealText>
      </span>
    )}
    <h2 style={{
      fontSize: 'clamp(2rem, 5vw, 3.5rem)',
      fontWeight: 800,
      lineHeight: 1.15,
      letterSpacing: '-0.03em'
    }}>
      <SplitHeading>{title}</SplitHeading>
      {titleAccent && (
        <>
          <br />
          <span style={{
            background: 'linear-gradient(135deg, #00ffcc, #667eea)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            <SplitHeading delay={0.2}>{titleAccent}</SplitHeading>
          </span>
        </>
      )}
    </h2>
  </div>
);

// Navigation
const Navigation = ({ currentPage, setCurrentPage }) => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navItems = ['Home', 'About', 'Services', 'Products', 'Portfolio', 'Team', 'Contact'];
  
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      padding: scrolled ? '14px 40px' : '20px 40px',
      background: scrolled ? 'rgba(5, 8, 16, 0.9)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : 'none',
      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }} onClick={() => setCurrentPage('Home')}>
          <div style={{
            width: '42px',
            height: '42px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #00ffcc, #667eea)',
            borderRadius: '10px',
            fontSize: '22px',
            fontWeight: 700,
            color: '#050810'
          }}>∞</div>
          <span style={{ fontSize: '1.2rem', fontWeight: 700 }}>Infinititech</span>
        </div>
        
        <div style={{ display: 'flex', gap: '8px' }}>
          {navItems.map(item => (
            <button
              key={item}
              onClick={() => setCurrentPage(item)}
              style={{
                padding: '10px 16px',
                background: 'none',
                border: 'none',
                fontSize: '0.9rem',
                fontWeight: 500,
                color: currentPage === item ? '#fff' : '#a0aec0',
                cursor: 'pointer',
                position: 'relative'
              }}
            >
              {item}
              {currentPage === item && (
                <span style={{
                  position: 'absolute',
                  bottom: '4px',
                  left: '16px',
                  right: '16px',
                  height: '2px',
                  background: 'linear-gradient(135deg, #00ffcc, #667eea)'
                }} />
              )}
            </button>
          ))}
        </div>
        
        <MagneticButton className="btn-primary" onClick={() => setCurrentPage('Contact')}>
          Let's Talk
        </MagneticButton>
      </div>
    </nav>
  );
};

// Footer
const Footer = () => (
  <footer style={{
    background: '#0f1520',
    borderTop: '1px solid rgba(255,255,255,0.08)',
    padding: '80px 40px 24px'
  }}>
    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 2fr', gap: '80px', marginBottom: '40px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <div style={{
              width: '42px',
              height: '42px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, #00ffcc, #667eea)',
              borderRadius: '10px',
              fontSize: '22px',
              fontWeight: 700,
              color: '#050810'
            }}>∞</div>
            <span style={{ fontSize: '1.1rem', fontWeight: 700 }}>Infinititech Partners</span>
          </div>
          <p style={{ color: '#a0aec0', lineHeight: 1.7, marginBottom: '28px', maxWidth: '350px' }}>
            Transform your digital vision into reality with cutting-edge technology solutions.
          </p>
          <div style={{ display: 'flex', gap: '12px' }}>
            {['LinkedIn', 'Twitter', 'GitHub'].map(s => (
              <div key={s} style={{
                width: '42px',
                height: '42px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '10px',
                color: '#a0aec0',
                fontSize: '12px',
                cursor: 'pointer'
              }}>{s[0]}</div>
            ))}
          </div>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
          {[
            { title: 'Quick Links', items: ['Home', 'About', 'Services', 'Portfolio'] },
            { title: 'Resources', items: ['Products', 'Team', 'Contact'] },
            { title: 'Contact', items: ['hello@infinititech.com', 'India'] }
          ].map((col, i) => (
            <div key={i}>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '20px' }}>{col.title}</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {col.items.map((item, j) => (
                  <li key={j} style={{ marginBottom: '12px' }}>
                    <span style={{ color: '#a0aec0', fontSize: '0.95rem' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      
      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.08)',
        paddingTop: '24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <p style={{ color: '#64748b', fontSize: '0.9rem' }}>© 2024 Infinititech Partners. All rights reserved.</p>
        <div style={{ display: 'flex', gap: '28px' }}>
          <span style={{ color: '#64748b', fontSize: '0.9rem' }}>Privacy Policy</span>
          <span style={{ color: '#64748b', fontSize: '0.9rem' }}>Terms of Service</span>
        </div>
      </div>
    </div>
  </footer>
);

// Page Hero Component
const PageHero = ({ label, title, titleAccent, description }) => (
  <section style={{
    position: 'relative',
    padding: '180px 40px 100px',
    overflow: 'hidden'
  }}>
    <div style={{
      position: 'absolute',
      width: '600px',
      height: '600px',
      top: '-200px',
      left: '-200px',
      background: '#00ffcc',
      borderRadius: '50%',
      filter: 'blur(120px)',
      opacity: 0.3,
      pointerEvents: 'none'
    }} />
    <div style={{
      position: 'absolute',
      width: '500px',
      height: '500px',
      bottom: '-150px',
      right: '-150px',
      background: '#667eea',
      borderRadius: '50%',
      filter: 'blur(120px)',
      opacity: 0.3,
      pointerEvents: 'none'
    }} />
    
    <div style={{ maxWidth: '900px', position: 'relative', zIndex: 2 }}>
      {label && (
        <span style={{
          display: 'inline-block',
          padding: '10px 22px',
          background: 'rgba(0, 255, 204, 0.08)',
          border: '1px solid rgba(0, 255, 204, 0.2)',
          borderRadius: '100px',
          fontSize: '0.85rem',
          fontWeight: 600,
          color: '#00ffcc',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          marginBottom: '28px'
        }}>
          <RevealText>{label}</RevealText>
        </span>
      )}
      <h1 style={{
        fontSize: 'clamp(2.5rem, 7vw, 5rem)',
        fontWeight: 800,
        lineHeight: 1.1,
        letterSpacing: '-0.03em',
        marginBottom: '24px'
      }}>
        <SplitHeading>{title}</SplitHeading>
        {titleAccent && (
          <>
            <br />
            <span style={{
              background: 'linear-gradient(135deg, #00ffcc, #667eea)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              <SplitHeading delay={0.3}>{titleAccent}</SplitHeading>
            </span>
          </>
        )}
      </h1>
      {description && (
        <p style={{ fontSize: '1.2rem', color: '#a0aec0', lineHeight: 1.7, maxWidth: '700px' }}>
          <RevealText delay={0.5}>{description}</RevealText>
        </p>
      )}
    </div>
  </section>
);

// CTA Section
const CTASection = ({ title1, title2 }) => (
  <section style={{ padding: '140px 40px', position: 'relative', overflow: 'hidden' }}>
    <div style={{
      position: 'absolute',
      width: '500px',
      height: '500px',
      top: '-200px',
      left: '-150px',
      background: '#00ffcc',
      borderRadius: '50%',
      filter: 'blur(130px)',
      opacity: 0.25
    }} />
    <div style={{
      position: 'absolute',
      width: '500px',
      height: '500px',
      bottom: '-200px',
      right: '-150px',
      background: '#ff6b35',
      borderRadius: '50%',
      filter: 'blur(130px)',
      opacity: 0.25
    }} />
    <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 10 }}>
      <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '20px' }}>
        <SplitHeading>{title1}</SplitHeading>
        <br />
        <span style={{ background: 'linear-gradient(135deg, #00ffcc, #667eea)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          <SplitHeading delay={0.2}>{title2}</SplitHeading>
        </span>
      </h2>
      <p style={{ fontSize: '1.15rem', color: '#a0aec0', marginBottom: '36px' }}>
        <RevealText delay={0.4}>Let's discuss your project and bring your vision to life</RevealText>
      </p>
      <MagneticButton className="btn-primary">
        <span>Get in Touch</span>
        <ArrowIcon />
      </MagneticButton>
    </div>
  </section>
);

// ==========================================
// HOME PAGE
// ==========================================

const HomePage = ({ setCurrentPage }) => (
  <>
    {/* Hero */}
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      padding: '120px 40px 80px',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        width: '600px',
        height: '600px',
        top: '-200px',
        right: '-100px',
        background: '#00ffcc',
        borderRadius: '50%',
        filter: 'blur(120px)',
        opacity: 0.35
      }} />
      <div style={{
        position: 'absolute',
        width: '400px',
        height: '400px',
        bottom: '-100px',
        left: '-100px',
        background: '#667eea',
        borderRadius: '50%',
        filter: 'blur(120px)',
        opacity: 0.35
      }} />
      <div style={{
        position: 'absolute',
        width: '300px',
        height: '300px',
        top: '40%',
        left: '30%',
        background: '#ff6b35',
        borderRadius: '50%',
        filter: 'blur(120px)',
        opacity: 0.15
      }} />
      
      <div style={{ maxWidth: '900px', position: 'relative', zIndex: 10 }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '12px',
          padding: '12px 24px',
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '100px',
          marginBottom: '32px'
        }}>
          <span style={{
            width: '10px',
            height: '10px',
            background: '#00ffcc',
            borderRadius: '50%',
            animation: 'pulse 2s ease-in-out infinite'
          }} />
          <span style={{ fontSize: '0.9rem', color: '#a0aec0' }}>Leading Technology Partner</span>
        </div>
        
        <h1 style={{
          fontSize: 'clamp(3rem, 10vw, 7rem)',
          fontWeight: 800,
          lineHeight: 1,
          letterSpacing: '-0.04em',
          marginBottom: '28px'
        }}>
          <span style={{ display: 'block' }}><SplitHeading>Transform,</SplitHeading></span>
          <span style={{ display: 'block', background: 'linear-gradient(135deg, #00ffcc, #667eea)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            <SplitHeading delay={0.2}>Innovate &</SplitHeading>
          </span>
          <span style={{ display: 'block' }}><SplitHeading delay={0.4}>Scale</SplitHeading></span>
        </h1>
        
        <p style={{ fontSize: '1.2rem', color: '#a0aec0', lineHeight: 1.7, marginBottom: '40px', maxWidth: '600px' }}>
          <RevealText delay={0.6}>
            Data Center Management • Custom Software • Smart City Solutions • Digital Services
          </RevealText>
        </p>
        
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <MagneticButton className="btn-primary" onClick={() => setCurrentPage('Contact')}>
            <span>Start Your Project</span>
            <ArrowIcon />
          </MagneticButton>
          <MagneticButton onClick={() => setCurrentPage('Services')}>
            <span>Explore Services</span>
          </MagneticButton>
        </div>
      </div>
    </section>
    
    {/* About Preview */}
    <section style={{ padding: '100px 40px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <SectionHeader label="About Infinititech" title="Bridging Technology" titleAccent="& Business Needs" />
        
        <p style={{ fontSize: '1.25rem', color: '#a0aec0', lineHeight: 1.8, textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px' }}>
          Founded with a vision to bridge the gap between innovative technology and real-world business needs.
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '60px' }}>
          {[
            { icon: '⚡', title: 'Our Mission', desc: 'Empower businesses with cutting-edge technology solutions.' },
            { icon: '🔭', title: 'Our Vision', desc: 'Be the most trusted technology partner globally.' },
            { icon: '💎', title: 'Our Values', desc: 'Integrity, Innovation, Excellence, Customer-Centricity.' }
          ].map((item, i) => (
            <TiltCard key={i} style={{
              padding: '36px',
              background: '#12182a',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '20px'
            }}>
              <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '20px' }}>{item.icon}</span>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '12px' }}>{item.title}</h3>
              <p style={{ color: '#a0aec0', lineHeight: 1.7 }}>{item.desc}</p>
            </TiltCard>
          ))}
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '24px',
          padding: '50px',
          background: 'linear-gradient(135deg, rgba(0, 255, 204, 0.05), rgba(102, 126, 234, 0.05))',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '20px'
        }}>
          {[
            { value: 50, suffix: '+', label: 'Projects Delivered' },
            { value: 30, suffix: '+', label: 'Happy Clients' },
            { value: 4, suffix: '', label: 'Team Members' },
            { value: 6, suffix: '', label: 'Services' }
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <span style={{
                display: 'block',
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: 800,
                background: 'linear-gradient(135deg, #00ffcc, #667eea)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                lineHeight: 1.1
              }}>
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </span>
              <span style={{ display: 'block', marginTop: '8px', fontSize: '0.9rem', color: '#a0aec0' }}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
    
    {/* Services Preview */}
    <section style={{ padding: '100px 40px', background: '#0a0f1a' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <SectionHeader label="Our Services" title="Comprehensive Technology" titleAccent="Solutions" />
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {[
            { icon: '🏢', title: 'Data Center Management', desc: 'Enterprise-grade data center solutions' },
            { icon: '⚙️', title: 'Custom MDC Software', desc: 'Tailored modular data center software' },
            { icon: '🌆', title: 'Smart City Solutions', desc: 'IoT-powered urban infrastructure' },
            { icon: '💼', title: 'CRM, ERP & POS', desc: 'Complete enterprise software suite' },
            { icon: '📱', title: 'Web & Mobile Dev', desc: 'Cross-platform digital experiences' },
            { icon: '📈', title: 'Digital Marketing', desc: 'Data-driven growth strategies' }
          ].map((service, i) => (
            <TiltCard key={i} style={{
              padding: '32px',
              background: '#12182a',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '20px'
            }}>
              <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '20px' }}>{service.icon}</span>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '10px' }}>{service.title}</h3>
              <p style={{ color: '#a0aec0', fontSize: '0.95rem', lineHeight: 1.6 }}>{service.desc}</p>
            </TiltCard>
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <MagneticButton onClick={() => setCurrentPage('Services')}>
            <span>View All Services</span>
            <ArrowIcon />
          </MagneticButton>
        </div>
      </div>
    </section>
    
    {/* Products Preview */}
    <section style={{ padding: '100px 40px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <SectionHeader label="Our Products" title="Production-Ready" titleAccent="Enterprise Solutions" />
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
          {[
            { name: 'Marketplace', tagline: 'B2B Commodity Trading', gradient: 'linear-gradient(135deg, #667eea, #764ba2)' },
            { name: 'Accubooks', tagline: 'Enterprise Accounting', gradient: 'linear-gradient(135deg, #f093fb, #f5576c)' },
            { name: 'School ERP', tagline: 'School Management', gradient: 'linear-gradient(135deg, #4facfe, #00f2fe)' },
            { name: 'Fleet Management', tagline: 'Enterprise Telematics', gradient: 'linear-gradient(135deg, #43e97b, #38f9d7)' }
          ].map((product, i) => (
            <TiltCard key={i} style={{
              background: '#12182a',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '20px',
              overflow: 'hidden'
            }}>
              <div style={{
                height: '160px',
                background: product.gradient,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: 'rgba(255,255,255,0.2)',
                  border: '1px solid rgba(255,255,255,0.3)',
                  borderRadius: '8px',
                  animation: 'spin 8s linear infinite'
                }} />
              </div>
              <div style={{ padding: '28px' }}>
                <span style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#00ffcc', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px' }}>{product.tagline}</span>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '10px' }}>{product.name}</h3>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
    
    <CTASection title1="Ready to Transform" title2="Your Business?" />
  </>
);

// ==========================================
// ABOUT PAGE
// ==========================================

const AboutPage = () => (
  <>
    <PageHero
      label="About Us"
      title="Technology Partners"
      titleAccent="You Can Trust"
      description="We combine technical expertise with business acumen to deliver transformative solutions."
    />
    
    {/* Story Section */}
    <section style={{ padding: '100px 40px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div>
            <span style={{
              display: 'inline-block',
              padding: '10px 22px',
              background: 'rgba(0, 255, 204, 0.08)',
              border: '1px solid rgba(0, 255, 204, 0.2)',
              borderRadius: '100px',
              fontSize: '0.85rem',
              fontWeight: 600,
              color: '#00ffcc',
              marginBottom: '24px'
            }}>Our Story</span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '28px' }}>
              <SplitHeading>Building the Future</SplitHeading>
              <br />
              <span style={{ background: 'linear-gradient(135deg, #00ffcc, #667eea)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                <SplitHeading delay={0.2}>of Technology</SplitHeading>
              </span>
            </h2>
            <div style={{ color: '#a0aec0', lineHeight: 1.8 }}>
              <p style={{ marginBottom: '20px' }}>Founded with a vision to bridge the gap between innovative technology and real-world business needs, Infinititech Partners has grown from a small team of passionate developers to a full-service technology company.</p>
              <p style={{ marginBottom: '20px' }}>We believe that technology should empower businesses, not complicate them. That's why we focus on delivering solutions that are not only cutting-edge but also practical, scalable, and aligned with your business goals.</p>
            </div>
          </div>
          <div style={{
            height: '400px',
            background: '#12182a',
            borderRadius: '20px',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(135deg, #00ffcc20, #667eea20, #ff6b3520)',
              opacity: 0.5
            }} />
            <div style={{
              position: 'absolute',
              bottom: '24px',
              right: '24px',
              padding: '20px 28px',
              background: '#1a2235',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '16px'
            }}>
              <span style={{
                display: 'block',
                fontSize: '2rem',
                fontWeight: 800,
                background: 'linear-gradient(135deg, #00ffcc, #667eea)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>5+</span>
              <span style={{ fontSize: '0.85rem', color: '#a0aec0' }}>Years of Excellence</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    {/* Mission & Vision */}
    <section style={{ padding: '100px 40px', background: '#0a0f1a' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
          {[
            { icon: '⚡', title: 'Our Mission', text: 'Empower businesses of all sizes with cutting-edge technology solutions that drive growth, improve efficiency, and enable digital transformation.' },
            { icon: '🔭', title: 'Our Vision', text: 'Be the most trusted technology partner globally, known for excellence, innovation, and the measurable impact we create for our clients.' }
          ].map((item, i) => (
            <TiltCard key={i} style={{
              padding: '40px',
              background: '#12182a',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '20px',
              borderTop: `4px solid ${i === 0 ? '#00ffcc' : '#ff6b35'}`
            }}>
              <span style={{ fontSize: '3rem', display: 'block', marginBottom: '20px' }}>{item.icon}</span>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px' }}>{item.title}</h3>
              <p style={{ color: '#a0aec0', lineHeight: 1.8 }}>{item.text}</p>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
    
    {/* Values */}
    <section style={{ padding: '100px 40px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <SectionHeader label="Our Core Values" title="What Drives" titleAccent="Everything We Do" />
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {[
            { icon: '🎯', title: 'Integrity', desc: 'Honest communication and delivering on our promises.' },
            { icon: '💡', title: 'Innovation', desc: 'Constantly exploring new technologies and methodologies.' },
            { icon: '⭐', title: 'Excellence', desc: 'High standards and exceeding expectations.' },
            { icon: '🤝', title: 'Customer-Centricity', desc: 'Your success is our success.' },
            { icon: '🚀', title: 'Agility', desc: 'Adapting quickly to changing landscapes.' },
            { icon: '👥', title: 'Collaboration', desc: 'Working as an extension of your team.' }
          ].map((value, i) => (
            <TiltCard key={i} style={{
              padding: '36px',
              background: '#12182a',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '20px'
            }}>
              <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '20px' }}>{value.icon}</span>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '12px' }}>{value.title}</h3>
              <p style={{ color: '#a0aec0', lineHeight: 1.7 }}>{value.desc}</p>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
    
    <CTASection title1="Let's Build Something" title2="Amazing Together" />
  </>
);

// ==========================================
// SERVICES PAGE
// ==========================================

const ServicesPage = () => (
  <>
    <PageHero
      label="Our Services"
      title="Comprehensive Technology"
      titleAccent="Solutions"
      description="From data center management to digital marketing, we offer a full spectrum of technology services."
    />
    
    <section style={{ padding: '100px 40px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {[
            { icon: '🏢', title: 'Data Center Management', desc: 'Enterprise-grade data center solutions with 24/7 monitoring and optimal performance.', features: ['Infrastructure Design', '24/7 Monitoring', 'Power Management', 'Security'] },
            { icon: '⚙️', title: 'Custom MDC Software', desc: 'Tailored modular data center software solutions designed for your specific needs.', features: ['DCIM Solutions', 'Asset Tracking', 'Analytics', 'Automation'] },
            { icon: '🌆', title: 'Smart City Solutions', desc: 'IoT-powered urban infrastructure for smarter, more efficient cities.', features: ['Traffic Management', 'Smart Lighting', 'Environmental', 'Public Safety'] },
            { icon: '💼', title: 'CRM, ERP & POS', desc: 'Complete enterprise software suite for seamless business operations.', features: ['CRM', 'ERP', 'POS', 'Inventory'] },
            { icon: '📱', title: 'Web & Mobile Development', desc: 'Cross-platform digital experiences that engage and convert.', features: ['React/Next.js', 'React Native', 'APIs', 'UI/UX Design'] },
            { icon: '📈', title: 'Digital Marketing', desc: 'Data-driven growth strategies to maximize your online presence.', features: ['SEO', 'PPC', 'Social Media', 'Analytics'] }
          ].map((service, i) => (
            <TiltCard key={i} style={{
              padding: '40px',
              background: '#12182a',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '24px'
            }}>
              <div style={{ display: 'flex', gap: '20px', marginBottom: '24px' }}>
                <span style={{ fontSize: '3rem', flexShrink: 0 }}>{service.icon}</span>
                <div>
                  <h3 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '8px' }}>{service.title}</h3>
                  <p style={{ color: '#a0aec0' }}>{service.desc}</p>
                </div>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {service.features.map((f, j) => (
                  <span key={j} style={{
                    padding: '8px 16px',
                    background: 'rgba(0, 255, 204, 0.1)',
                    border: '1px solid rgba(0, 255, 204, 0.2)',
                    borderRadius: '100px',
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    color: '#00ffcc'
                  }}>{f}</span>
                ))}
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
    
    <CTASection title1="Need a Custom" title2="Solution?" />
  </>
);

// ==========================================
// PRODUCTS PAGE
// ==========================================

const ProductsPage = () => (
  <>
    <PageHero
      label="Our Products"
      title="Production-Ready"
      titleAccent="Enterprise Solutions"
      description="Powerful, scalable software products built with modern technologies."
    />
    
    <section style={{ padding: '100px 40px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {[
          { name: 'Marketplace', tagline: 'B2B Commodity Trading', desc: 'Enterprise B2B marketplace with tokenization, escrow payments, and blockchain integration.', gradient: 'linear-gradient(135deg, #667eea, #764ba2)', features: ['Tokenization', 'Escrow', 'Blockchain', 'Multi-currency'] },
          { name: 'Accubooks', tagline: 'Enterprise Accounting', desc: 'Multi-tenant accounting with double-entry bookkeeping, inventory, HR & payroll.', gradient: 'linear-gradient(135deg, #f093fb, #f5576c)', features: ['Double-entry', 'Multi-tenant', 'Payroll', 'Inventory'] },
          { name: 'School ERP', tagline: 'School Management', desc: 'Complete school management covering admissions, academics, fees, and transport.', gradient: 'linear-gradient(135deg, #4facfe, #00f2fe)', features: ['Admissions', 'Academics', 'Fees', 'Transport'] },
          { name: 'Fleet Management', tagline: 'Enterprise Telematics', desc: 'Real-time GPS tracking, ELD compliance, driver management, and analytics.', gradient: 'linear-gradient(135deg, #43e97b, #38f9d7)', features: ['GPS Tracking', 'ELD', 'Drivers', 'Analytics'] }
        ].map((product, i) => (
          <div key={i} style={{
            display: 'grid',
            gridTemplateColumns: i % 2 === 0 ? '400px 1fr' : '1fr 400px',
            gap: '50px',
            marginBottom: '60px',
            background: '#12182a',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '24px',
            overflow: 'hidden'
          }}>
            {i % 2 === 0 ? (
              <>
                <div style={{ background: product.gradient, minHeight: '350px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: '80px', height: '80px', background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '12px' }} />
                </div>
                <div style={{ padding: '40px 40px 40px 0' }}>
                  <span style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#00ffcc', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>{product.tagline}</span>
                  <h3 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '16px' }}>{product.name}</h3>
                  <p style={{ color: '#a0aec0', lineHeight: 1.8, marginBottom: '28px' }}>{product.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
                    {product.features.map((f, j) => (
                      <span key={j} style={{ padding: '6px 14px', background: 'rgba(0, 255, 204, 0.1)', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 500, color: '#00ffcc' }}>{f}</span>
                    ))}
                  </div>
                  <MagneticButton className="btn-primary">Request Demo</MagneticButton>
                </div>
              </>
            ) : (
              <>
                <div style={{ padding: '40px 0 40px 40px' }}>
                  <span style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#00ffcc', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>{product.tagline}</span>
                  <h3 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '16px' }}>{product.name}</h3>
                  <p style={{ color: '#a0aec0', lineHeight: 1.8, marginBottom: '28px' }}>{product.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
                    {product.features.map((f, j) => (
                      <span key={j} style={{ padding: '6px 14px', background: 'rgba(0, 255, 204, 0.1)', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 500, color: '#00ffcc' }}>{f}</span>
                    ))}
                  </div>
                  <MagneticButton className="btn-primary">Request Demo</MagneticButton>
                </div>
                <div style={{ background: product.gradient, minHeight: '350px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: '80px', height: '80px', background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '12px' }} />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
    
    <CTASection title1="Ready to See" title2="Our Products in Action?" />
  </>
);

// ==========================================
// PORTFOLIO PAGE
// ==========================================

const PortfolioPage = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Smart City', 'Enterprise', 'Data Center'];
  
  const projects = [
    { category: 'Smart City', title: 'Smart City Dashboard', desc: 'Real-time urban monitoring system', tech: ['React', 'Node.js', 'IoT'], gradient: 'linear-gradient(135deg, #00ffcc, #00ccff)' },
    { category: 'Enterprise', title: 'Enterprise CRM', desc: 'Custom CRM for manufacturing', tech: ['Next.js', 'PostgreSQL'], gradient: 'linear-gradient(135deg, #ff6b35, #ff9f1c)' },
    { category: 'Data Center', title: 'Data Center Monitor', desc: 'MDC management dashboard', tech: ['Vue.js', 'Python'], gradient: 'linear-gradient(135deg, #667eea, #764ba2)' }
  ];
  
  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);
  
  return (
    <>
      <PageHero
        label="Our Portfolio"
        title="Explore Our"
        titleAccent="Success Stories"
        description="Discover how we've helped businesses transform through technology."
      />
      
      <section style={{ padding: '100px 40px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '50px' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  padding: '10px 22px',
                  background: filter === cat ? 'linear-gradient(135deg, #00ffcc, #667eea)' : 'transparent',
                  border: filter === cat ? 'none' : '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '100px',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  color: filter === cat ? '#050810' : '#a0aec0',
                  cursor: 'pointer'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {filtered.map((project, i) => (
              <TiltCard key={i} style={{
                background: '#12182a',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '20px',
                overflow: 'hidden'
              }}>
                <div style={{
                  height: '180px',
                  background: project.gradient,
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '20px',
                  position: 'relative'
                }}>
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)' }} />
                  <span style={{
                    position: 'relative',
                    zIndex: 1,
                    padding: '6px 14px',
                    background: 'rgba(0,0,0,0.5)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '100px',
                    fontSize: '0.75rem',
                    fontWeight: 600
                  }}>{project.category}</span>
                </div>
                <div style={{ padding: '24px' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '10px' }}>{project.title}</h3>
                  <p style={{ color: '#a0aec0', fontSize: '0.9rem', marginBottom: '16px' }}>{project.desc}</p>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    {project.tech.map((t, j) => (
                      <span key={j} style={{ padding: '5px 12px', background: 'rgba(0, 255, 204, 0.08)', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 500, color: '#00ffcc' }}>{t}</span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>
      
      <CTASection title1="Have a Project" title2="In Mind?" />
    </>
  );
};

// ==========================================
// TEAM PAGE
// ==========================================

const TeamPage = () => (
  <>
    <PageHero
      label="Our Team"
      title="Meet The Experts"
      titleAccent="Behind Infinititech"
      description="A dedicated team of technology professionals passionate about excellence."
    />
    
    <section style={{ padding: '100px 40px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }}>
          {[
            { name: 'Sudipto Mitra', role: 'Founder & Lead Developer', initials: 'SM', color: '#00ffcc', expertise: ['Full-Stack', 'Architecture', 'Cloud'] },
            { name: 'Pallabi Datta', role: 'HR Manager', initials: 'PD', color: '#ff6b35', expertise: ['Talent', 'Team Building', 'HR Ops'] },
            { name: 'Snehendu Roy', role: 'Full-stack MERN Developer', initials: 'SR', color: '#667eea', expertise: ['React', 'Node.js', 'MongoDB'] },
            { name: 'Soumyadip Chanda', role: 'AI/ML Developer', initials: 'SC', color: '#ec4899', expertise: ['ML', 'Python', 'TensorFlow'] }
          ].map((member, i) => (
            <TiltCard key={i} style={{
              padding: '36px',
              background: '#12182a',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '24px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '24px' }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: member.color,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.6rem',
                  fontWeight: 700,
                  color: '#050810',
                  position: 'relative'
                }}>
                  {member.initials}
                  <div style={{
                    position: 'absolute',
                    inset: '-12px',
                    background: member.color,
                    borderRadius: '50%',
                    opacity: 0.2,
                    filter: 'blur(15px)',
                    zIndex: -1
                  }} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '4px' }}>{member.name}</h3>
                  <p style={{ color: member.color, fontSize: '0.95rem', fontWeight: 500 }}>{member.role}</p>
                </div>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {member.expertise.map((skill, j) => (
                  <span key={j} style={{ padding: '6px 14px', background: 'rgba(0, 255, 204, 0.08)', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 500, color: '#00ffcc' }}>{skill}</span>
                ))}
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
    
    <CTASection title1="Let's Build Something" title2="Great Together" />
  </>
);

// ==========================================
// CONTACT PAGE
// ==========================================

const ContactPage = () => (
  <>
    <PageHero
      label="Contact Us"
      title="Let's Start a"
      titleAccent="Conversation"
      description="Have a project in mind? We're here to help you bring your vision to life."
    />
    
    {/* Contact Info */}
    <section style={{ padding: '100px 40px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', marginBottom: '80px' }}>
          {[
            { icon: '✉️', title: 'Email Us', content: 'hello@infinititech.com' },
            { icon: '📞', title: 'Call Us', content: '+91 98765 43210' },
            { icon: '📍', title: 'Visit Us', content: 'India' },
            { icon: '🕐', title: 'Business Hours', content: 'Mon-Fri: 9AM-6PM IST' }
          ].map((info, i) => (
            <TiltCard key={i} style={{
              padding: '32px',
              background: '#12182a',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '20px',
              textAlign: 'center'
            }}>
              <span style={{ fontSize: '2rem', display: 'block', marginBottom: '16px' }}>{info.icon}</span>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '8px' }}>{info.title}</h4>
              <p style={{ color: '#a0aec0', fontSize: '0.95rem' }}>{info.content}</p>
            </TiltCard>
          ))}
        </div>
        
        {/* Contact Form */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '60px' }}>
          <div>
            <span style={{
              display: 'inline-block',
              padding: '10px 22px',
              background: 'rgba(0, 255, 204, 0.08)',
              border: '1px solid rgba(0, 255, 204, 0.2)',
              borderRadius: '100px',
              fontSize: '0.85rem',
              fontWeight: 600,
              color: '#00ffcc',
              marginBottom: '24px'
            }}>Get in Touch</span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '20px' }}>
              <SplitHeading>Let's Discuss</SplitHeading>
              <br />
              <span style={{ background: 'linear-gradient(135deg, #00ffcc, #667eea)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                <SplitHeading delay={0.2}>Your Project</SplitHeading>
              </span>
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#a0aec0', lineHeight: 1.7, marginBottom: '36px' }}>
              Fill out the form and we'll get back to you within 24 hours.
            </p>
          </div>
          
          <div style={{
            background: '#12182a',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '24px',
            padding: '40px'
          }}>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
                {['Full Name', 'Email Address', 'Company', 'Phone'].map((label, i) => (
                  <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '0.9rem', fontWeight: 600 }}>{label}</label>
                    <input
                      type="text"
                      style={{
                        padding: '14px 18px',
                        background: '#1a2235',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: '12px',
                        fontSize: '1rem',
                        color: '#fff'
                      }}
                    />
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '0.9rem', fontWeight: 600 }}>Project Details</label>
                <textarea
                  rows={5}
                  style={{
                    padding: '14px 18px',
                    background: '#1a2235',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    color: '#fff',
                    resize: 'vertical'
                  }}
                />
              </div>
              <MagneticButton className="btn-primary">
                <span>Send Message</span>
                <ArrowIcon />
              </MagneticButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  </>
);

// ==========================================
// MAIN APP
// ==========================================

export default function InfinititechWebsite() {
  const [currentPage, setCurrentPage] = useState('Home');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);
  
  const renderPage = () => {
    switch (currentPage) {
      case 'Home': return <HomePage setCurrentPage={setCurrentPage} />;
      case 'About': return <AboutPage />;
      case 'Services': return <ServicesPage />;
      case 'Products': return <ProductsPage />;
      case 'Portfolio': return <PortfolioPage />;
      case 'Team': return <TeamPage />;
      case 'Contact': return <ContactPage />;
      default: return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };
  
  return (
    <div style={{
      background: '#050810',
      color: '#fff',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      minHeight: '100vh'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        @keyframes pulse { 0%, 100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.3); opacity: 0.6; } }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        input, textarea, select, button { font-family: inherit; outline: none; }
        ::selection { background: #00ffcc; color: #050810; }
      `}</style>
      
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
}
