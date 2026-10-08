import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight, Check, ChevronDown, Code2, Cloud, UsersRound, ShieldCheck,
  Menu, X, BriefcaseBusiness, Cpu, Layers3, Mail, Phone, MapPin
} from 'lucide-react';
import './styles.css';

const services = [
  {
    icon: UsersRound,
    title: 'IT Staffing Solutions',
    text: 'Scale your technology teams with qualified software professionals matched to your technical and business requirements.',
    points: ['Contract & contract-to-hire', 'Permanent technology hiring', 'Dedicated engineering resources']
  },
  {
    icon: Code2,
    title: 'Software Engineering',
    text: 'Extend your engineering capacity with experienced developers and delivery teams across modern technology stacks.',
    points: ['Backend & full-stack engineering', 'Cloud-native development', 'Application modernization']
  },
  {
    icon: Cpu,
    title: 'Technology Consulting',
    text: 'Bring specialist engineering expertise to critical initiatives, modernization programs and technology transformation.',
    points: ['Technical consulting', 'Architecture & modernization', 'Delivery acceleration']
  }
];

const capabilities = ['Java & Spring Boot', 'React & Angular', 'Cloud & DevOps', 'Microservices', 'Data Engineering', 'AI & GenAI'];

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <div className="site">
      <header className="nav-wrap">
        <nav className="nav container">
          <button className="brand" onClick={() => go('home')} aria-label="Nexora Technologies home">
            <span className="brand-mark"><span></span><span></span><span></span></span>
            <span>NEXORA<span className="brand-accent">.</span></span>
          </button>

          <div className={`nav-links ${mobileOpen ? 'open' : ''}`}>
            <button onClick={() => go('services')}>Services</button>
            <button onClick={() => go('capabilities')}>Capabilities</button>
            <button onClick={() => go('about')}>About</button>
            <button onClick={() => go('contact')}>Contact</button>
            <button className="mobile-cta" onClick={() => go('contact')}>Talk to us <ArrowRight size={16}/></button>
          </div>

          <button className="nav-cta" onClick={() => go('contact')}>Talk to us <ArrowRight size={16}/></button>
          <button className="menu-btn" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle navigation">
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-grid"></div>
          <div className="container hero-inner">
            <div className="hero-copy">
              <div className="eyebrow"><span></span> TECHNOLOGY TALENT & CONSULTING</div>
              <h1>Build your technology team <em>with confidence.</em></h1>
              <p className="hero-text">
                We help technology companies scale engineering teams with skilled professionals,
                flexible staffing solutions and hands-on technology consulting.
              </p>
              <div className="hero-actions">
                <button className="primary-btn" onClick={() => go('contact')}>Find the right talent <ArrowRight size={18}/></button>
                <button className="text-btn" onClick={() => go('services')}>Explore our services <ArrowRight size={17}/></button>
              </div>
              <div className="trust-row">
                <span><Check size={15}/> Technical screening</span>
                <span><Check size={15}/> Flexible engagement</span>
                <span><Check size={15}/> Long-term partnership</span>
              </div>
            </div>

            <div className="hero-visual" aria-hidden="true">
              <div className="orb orb-one"></div>
              <div className="orb orb-two"></div>
              <div className="network-card">
                <div className="network-top"><span>TECHNOLOGY CAPACITY</span><span className="live"><i></i> ACTIVE</span></div>
                <div className="network-lines">
                  <div className="node n1"><UsersRound size={20}/><b>Talent</b><small>Specialists</small></div>
                  <div className="node n2"><Code2 size={20}/><b>Engineering</b><small>Delivery</small></div>
                  <div className="node n3"><Cloud size={20}/><b>Cloud</b><small>Modernization</small></div>
                  <div className="node n4"><Layers3 size={20}/><b>Consulting</b><small>Expertise</small></div>
                  <div className="line l1"></div><div className="line l2"></div><div className="line l3"></div><div className="line l4"></div>
                  <div className="center-node"><span>N</span><small>NEXORA</small></div>
                </div>
                <div className="network-bottom">ENGINEERING TEAMS • ON DEMAND</div>
              </div>
            </div>
          </div>
        </section>

        <section className="logo-strip">
          <div className="container logo-inner">
            <span>Built for technology-driven businesses</span>
            <div className="mini-logos"><b>PRODUCT</b><b>ENTERPRISE</b><b>STARTUP</b><b>PLATFORM</b></div>
          </div>
        </section>

        <section id="services" className="section services">
          <div className="container">
            <div className="section-head">
              <div>
                <div className="eyebrow dark"><span></span> WHAT WE DO</div>
                <h2>Technology expertise that <em>moves business forward.</em></h2>
              </div>
              <p>From individual specialists to complete engineering capabilities, we provide the expertise you need to deliver with speed and confidence.</p>
            </div>

            <div className="service-grid">
              {services.map(({icon: Icon, title, text, points}, i) => (
                <article className={`service-card ${i === 0 ? 'featured' : ''}`} key={title}>
                  <div className="service-icon"><Icon size={23}/></div>
                  <span className="card-number">0{i + 1}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <ul>{points.map(p => <li key={p}><Check size={15}/>{p}</li>)}</ul>
                  <button onClick={() => go('contact')}>Learn more <ArrowRight size={16}/></button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="capabilities" className="section capability">
          <div className="container capability-grid">
            <div>
              <div className="eyebrow"><span></span> TECHNICAL CAPABILITIES</div>
              <h2>The right skills for <em>modern engineering.</em></h2>
              <p>Our technology network is built around the skills companies need to build, modernize and operate digital products.</p>
              <div className="cap-list">
                {capabilities.map((c, i) => <div className="cap-item" key={c}><span>0{i+1}</span>{c}<ArrowRight size={16}/></div>)}
              </div>
            </div>
            <div className="cap-panel">
              <div className="panel-label">ENGINEERING STACK</div>
              <div className="stack-visual">
                <div className="stack-ring r1"></div><div className="stack-ring r2"></div>
                <div className="stack-core"><Code2 size={34}/><span>ENGINEERING</span></div>
                <div className="stack-tag t1">JAVA</div><div className="stack-tag t2">CLOUD</div>
                <div className="stack-tag t3">AI</div><div className="stack-tag t4">WEB</div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="container about-grid">
            <div className="about-statement">
              <div className="eyebrow dark"><span></span> WHY NEXORA</div>
              <h2>More than staffing. <em>A technology partner.</em></h2>
            </div>
            <div className="about-copy">
              <p className="large">We believe great technology teams are built around the right people, the right expertise and the right partnership.</p>
              <p>Our approach combines talent solutions with genuine technology understanding. That means we don't simply fill roles—we understand the skills, engineering environment and outcomes behind each requirement.</p>
              <div className="metrics">
                <div><strong>01</strong><span>Understand<br/>your needs</span></div>
                <div><strong>02</strong><span>Identify<br/>the right talent</span></div>
                <div><strong>03</strong><span>Enable<br/>delivery</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="process section">
          <div className="container">
            <div className="center-head">
              <div className="eyebrow dark"><span></span> HOW WE WORK</div>
              <h2>A simpler way to <em>scale your team.</em></h2>
            </div>
            <div className="steps">
              {[
                ['01', 'Understand', 'We learn your technology environment, role requirements and business priorities.'],
                ['02', 'Identify', 'We source and match professionals with the right technical and cultural fit.'],
                ['03', 'Evaluate', 'Our screening process validates technical capability and professional readiness.'],
                ['04', 'Scale', 'Your selected professionals integrate into your team and start contributing.']
              ].map(([n,t,d]) => <div className="step" key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div></div>)}
            </div>
          </div>
        </section>

        <section id="contact" className="contact section">
          <div className="container contact-box">
            <div>
              <div className="eyebrow"><span></span> START A CONVERSATION</div>
              <h2>Need to scale your <em>technology team?</em></h2>
              <p>Tell us what you are looking for. Let's discuss how we can help.</p>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); alert('Thanks! Connect this form to your preferred email or CRM before launch.'); }}>
              <div className="form-row"><input required placeholder="Your name" /><input required type="email" placeholder="Work email" /></div>
              <div className="form-row"><input placeholder="Company" /><input placeholder="Phone (optional)" /></div>
              <select defaultValue=""><option value="" disabled>What can we help with?</option><option>IT Staffing</option><option>Technology Consulting</option><option>Software Engineering</option><option>Other</option></select>
              <textarea rows="4" placeholder="Tell us briefly about your requirement"></textarea>
              <button className="primary-btn" type="submit">Send enquiry <ArrowRight size={18}/></button>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-grid">
          <div><button className="brand footer-brand" onClick={() => go('home')}><span className="brand-mark"><span></span><span></span><span></span></span><span>NEXORA<span className="brand-accent">.</span></span></button><p>Technology talent and consulting for businesses ready to scale.</p></div>
          <div className="footer-col"><b>Company</b><button onClick={() => go('about')}>About us</button><button onClick={() => go('services')}>Services</button><button onClick={() => go('contact')}>Contact</button></div>
          <div className="footer-col"><b>Services</b><button onClick={() => go('services')}>IT Staffing</button><button onClick={() => go('services')}>Engineering</button><button onClick={() => go('services')}>Consulting</button></div>
          <div className="footer-col"><b>Contact</b><span><Mail size={14}/> hello@nexora.example</span><span><Phone size={14}/> +91 00000 00000</span><span><MapPin size={14}/> Chennai, India</span></div>
        </div>
        <div className="container copyright"><span>© 2026 Nexora Technologies. All rights reserved.</span><span>Privacy · Terms</span></div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
