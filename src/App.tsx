import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import './index.css';

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { question: "What services do you offer?", answer: "We offer comprehensive creative services including market research, branding strategies, advertising production, and digital web design to elevate your brand." },
    { question: "How long does a typical project take?", answer: "Project timelines vary depending on scope, but a standard branding or web design project typically takes between 4 to 8 weeks from concept to launch." },
    { question: "Do you work with startups?", answer: "Absolutely! We love working with ambitious entrepreneurs and startups to help them establish a strong, lasting brand identity from day one." },
    { question: "What is your pricing structure?", answer: "We tailor our pricing based on the specific needs and deliverables of your project. Contact us for a customized quote after an initial consultation." }
  ];

  const brandLogos = [
    { name: "Kellogg's", style: { fontFamily: "'Cinzel', serif", fontWeight: 800, letterSpacing: '1px' } },
    { name: "L'ORÉAL", style: { fontFamily: "'Didot', serif", fontWeight: 600, letterSpacing: '4px' } },
    { name: "★ Heineken", style: { fontFamily: "'Futura', sans-serif", fontWeight: 700 } },
    { name: "Jeep", style: { fontFamily: "'Impact', sans-serif", fontWeight: 900, letterSpacing: '2px' } },
    { name: "Champion", style: { fontFamily: "'Brush Script MT', cursive", fontWeight: 700 } },
    { name: "Spotify", style: { fontFamily: "'Inter', sans-serif", fontWeight: 700 } },
    { name: "Allianz", style: { fontFamily: "'Helvetica Neue', sans-serif", fontWeight: 800, letterSpacing: '-1px' } },
    { name: "Coca-Cola", style: { fontFamily: "'Playbill', sans-serif", fontSize: '2rem', letterSpacing: '1px' } },
    { name: "Gillette", style: { fontFamily: "'Arial Black', sans-serif", fontWeight: 900, fontStyle: 'italic' } },
    { name: "NETFLIX", style: { fontFamily: "'Bebas Neue', sans-serif", fontWeight: 800, letterSpacing: '1px' } },
  ];

  return (
    <div className="app-container">
      {/* HEADER / NAVIGATION */}
      <header className="site-header">
        <nav className="header-nav">
          <a href="#how-it-works">How it works</a>
          <a href="#services">Services</a>
          <a href="#client">Client</a>
        </nav>

        <div className="header-logo">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2L12 12L2 22V2Z" fill="#7A1BF2"/>
            <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22V2Z" fill="#D4FF00"/>
          </svg>
          <span className="logo-text">Designoo</span>
        </div>

        <div className="header-actions">
          <a href="#faq" className="faq-link">FAQ</a>
          <a href="#get-started" className="btn-get-started">
            Get Started
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="hero-section">
        {/* NEW HERO DESIGN */}
        <div className="hero-content">
          <div className="hero-tagline">FOR PERFORMANCE MEDIA BUYERS</div>
          <h1 className="hero-title">
            <div className="title-row">Elevate Your</div>
            <div className="title-row">
              Brand 
              <span className="brand-logo-inline">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="12" fill="#7A1BF2" />
                  <path d="M12 5.5L13.85 9.26L18 9.86L15 12.78L15.71 16.92L12 14.97L8.29 16.92L9 12.78L6 9.86L10.15 9.26L12 5.5Z" fill="white" />
                </svg>
              </span> 
              with Our
            </div>
            <div className="title-row">
              <span className="highlight-green-text">Creative</span> Magic
            </div>
          </h1>

          <div className="hero-subheadline">
            Every ad <span className="text-red">a winner.</span>
          </div>

          <div className="hero-action-area">
            <button className="btn-dark-action">
              <span className="btn-icon-red">
                <ArrowRight size={16} color="white" />
              </span>
              Generate my creatives
            </button>
            <button className="btn-light-action">
              Watch it work <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* FLOATING CARDS — desktop: absolute, mobile: marquee scroll */}
        <div className="floating-creatives-container">
          {/* Desktop cards stay absolute-positioned */}
          <div className="creative-card card-cat-warm desktop-card">
            <img src="/hero_cat_warm.png" alt="Warm Cat" />
            <div className="card-tag">GEN-Z</div>
          </div>
          <div className="creative-card card-perfume desktop-card">
            <img src="/hero_perfume_premium.png" alt="Premium Perfume" />
            <div className="card-tag">PREMIUM</div>
          </div>
          <div className="creative-card card-soda desktop-card">
            <img src="/hero_soda_bold.png" alt="Bold Soda" />
            <div className="card-tag">BOLD</div>
          </div>
          <div className="creative-card card-coffee desktop-card">
            <img src="/hero_coffee_punchy.png" alt="Punchy Coffee" />
            <div className="card-tag">PUNCHY</div>
          </div>
          <div className="creative-card card-minimal desktop-card">
            <img src="/hero_minimal.png" alt="Minimal Skincare" />
            <div className="card-tag">MINIMAL</div>
          </div>
          <div className="creative-card card-beauty desktop-card">
            <img src="/hero_beauty.png" alt="Beauty Compact" />
            <div className="card-tag">BEAUTY</div>
          </div>
          <div className="creative-card card-drop desktop-card">
            <img src="/work_ordinary.png" alt="Drop" style={{objectFit: 'cover'}} />
            <div className="card-tag">DROP</div>
          </div>

          {/* Mobile marquee track — duplicated for seamless loop */}
          <div className="mobile-marquee">
            <div className="marquee-track">
              {["hero_cat_warm.png","hero_perfume_premium.png","hero_soda_bold.png","hero_coffee_punchy.png","hero_minimal.png","hero_beauty.png","work_ordinary.png",
                "hero_cat_warm.png","hero_perfume_premium.png","hero_soda_bold.png","hero_coffee_punchy.png","hero_minimal.png","hero_beauty.png","work_ordinary.png"
              ].map((src, i) => (
                <div key={i} className={`marquee-card mc-${i % 7}`}>
                  <img src={`/${src}`} alt="creative" />
                  <div className="card-tag">{["GEN-Z","PREMIUM","BOLD","PUNCHY","MINIMAL","BEAUTY","DROP"][i % 7]}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OUR EXPERTISE SECTION */}
      <section className="expertise-section" id="services">
        <div className="expertise-container">
          <div className="expertise-header">
            <h2>Our Expertise</h2>
            <p>Transforming your identity by combining<br />creative strategy and expertise.</p>
          </div>

          <div className="expertise-grid">
            {/* CARD 1 */}
            <div className="expertise-card card-dark">
              <div className="card-top">
                <h3 className="text-lime">Video<br />Ads</h3>
                <button className="card-arrow-btn">
                  <ArrowUpRight size={18} />
                </button>
              </div>
              <p className="card-desc">We study consumer behavior and business trends to forecast and improve business returns.</p>
              <div className="card-image-container">
                <img src="/market_research.png" alt="Market Research" className="card-img" />
              </div>
            </div>

            {/* CARD 2 */}
            <div className="expertise-card card-purple">
              <div className="card-top">
                <h3 className="text-white">Static<br />Creatives</h3>
              </div>
              <p className="card-desc text-white-alpha">Creative ads production that captures interest, generates conversions, and scales brand reach.</p>
              <div className="card-image-container">
                <img src="/ads_production.png" alt="Ads Production" className="card-img" />
                <button className="card-overlap-btn-bottom-left">
                  <ArrowUpRight size={24} />
                </button>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="expertise-card card-dark">
              <div className="card-top">
                <h3 className="text-lime">Promo<br />Videos</h3>
                <button className="card-arrow-btn">
                  <ArrowUpRight size={18} />
                </button>
              </div>
              <p className="card-desc">Build identities that resonate deeply with customers and promote loyalty.</p>
              <div className="card-image-container">
                <img src="/branding_strategies.png" alt="Branding Strategies" className="card-img" />
              </div>
            </div>
          </div>

          {/* LOWER BANNER */}
          <div className="expertise-banner">
            <div className="banner-left">
              <h3 className="huge-lime-text">
                WE CREATE<br/>
                IMPACTFUL<br/>
                EXPERIENCES FOR OUR<br/>
                CLIENTS' CUSTOMERS<br/>
                EVERY TIME THEY<br/>
                ENGAGE WITH A<br/>
                BRAND
              </h3>
            </div>
            <div className="banner-right">
              <div className="badge-wrapper">
                <svg className="rotating-svg" viewBox="0 0 100 100" width="120" height="120">
                  <path id="textPath-expertise" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
                  <text>
                    <textPath href="#textPath-expertise" fill="white" fontSize="8" letterSpacing="2.5">
                      LET'S GET STARTED • LET'S GET STARTED •
                    </textPath>
                  </text>
                </svg>
                <div className="badge-center-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="2" width="9" height="9" fill="#D4FF00"/>
                    <rect x="13" y="2" width="9" height="9" fill="#D4FF00"/>
                    <rect x="2" y="13" width="9" height="9" fill="#D4FF00"/>
                    <rect x="13" y="13" width="9" height="9" fill="#D4FF00"/>
                  </svg>
                </div>
              </div>

              <div className="stat-counter">
                <span className="stat-number">700<span className="stat-plus">+</span></span>
                <span className="stat-label">Project Completed</span>
              </div>

              <p className="banner-subtext">
                We take pride in our work and always strive to deliver solutions<br/>
                that are not only visual but also functional, helping our clients<br/>
                achieve their business goals and outstanding experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RECENT WORK SECTION */}
      <section className="recent-work-section" id="client">
        {/* Large Background Chain Link Shape */}
        <div className="bg-large-shape">
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 0H150C177.6 0 200 22.4 200 50V150C200 177.6 177.6 200 150 200H50C22.4 200 0 177.6 0 150V50C0 22.4 22.4 0 50 0ZM50 40C44.5 40 40 44.5 40 50V150C40 155.5 44.5 160 50 160H150C155.5 160 160 155.5 160 150V50C160 44.5 155.5 40 150 40H50Z" fill="#D4FF00" />
            <circle cx="100" cy="100" r="40" stroke="#D4FF00" strokeWidth="40" />
          </svg>
        </div>

        <div className="recent-work-header">
          <span className="section-tag">RECENT WORK</span>
          <h2>Through meticulous planning, seamless execution,<br/>and creative problem-solving, we achieved<br/>remarkable project success.</h2>
        </div>

        <div className="work-masonry">
          {/* LEFT COLUMN */}
          <div className="masonry-col col-left">
            {/* WORK 1: THE ORDINARY */}
            <div className="work-card">
              <div className="work-img-wrapper">
                <img src="/work_ordinary.png" alt="The Ordinary" className="portfolio-asset" />
                <svg className="corner-star" viewBox="0 0 24 24" fill="none"><path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill="#D4FF00" /></svg>
                <div className="portfolio-hover-overlay">
                   <div className="view-case-btn">View Case</div>
                </div>
              </div>
              <div className="work-info">
                <h3>The Ordinary</h3>
                <div className="portfolio-tags">
                  <span className="tag-pill">Design Digital</span>
                  <span className="tag-pill">Web Design</span>
                  <span className="tag-pill">Campaigns</span>
                </div>
              </div>
            </div>

            {/* WORK 3: APPLE INC */}
            <div className="work-card mt-card">
              <div className="work-img-wrapper work-apple-mockup">
                <div className="apple-mockup-inner portfolio-asset">
                  <div className="iphone-body">
                    <div className="iphone-camera-module">
                      <div className="camera-lens lens-1"><div className="inner-glass"></div></div>
                      <div className="camera-lens lens-2"><div className="inner-glass"></div></div>
                      <div className="camera-flash"></div>
                    </div>
                    <div className="apple-logo-simulate"></div>
                  </div>
                </div>
                <svg className="corner-star star-left" viewBox="0 0 24 24" fill="none"><path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill="#D4FF00" /></svg>
                <div className="portfolio-hover-overlay">
                   <div className="view-case-btn">View Case</div>
                </div>
              </div>
              <div className="work-info">
                <h3>Apple Inc</h3>
                <div className="portfolio-tags">
                  <span className="tag-pill">Ads Content</span>
                  <span className="tag-pill">Brand Analysis</span>
                  <span className="tag-pill">Animations</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="masonry-col col-right">
            {/* WORK 2: GOOGLE LLC */}
            <div className="work-card">
              <div className="work-img-wrapper work-google-mockup">
                <div className="google-mockup-inner portfolio-asset">
                  <div className="google-header-dots">
                    <span className="dot red-dot"></span>
                    <span className="dot yellow-dot"></span>
                    <span className="dot green-dot"></span>
                  </div>
                  <div className="google-content">
                    <h4 className="google-logo-text">Google</h4>
                    <div className="google-search-bar">
                      <div className="search-icon-placeholder"></div>
                      <div className="search-text-simulate"></div>
                    </div>
                    <div className="google-abstract-dots">
                      {[...Array(24)].map((_, i) => (
                        <span key={i} className="abstract-dot"></span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="portfolio-hover-overlay">
                   <div className="view-case-btn">View Case</div>
                </div>
              </div>
              <div className="work-info">
                <h3>Google LLC</h3>
                <div className="portfolio-tags">
                  <span className="tag-pill">Brand Strategy</span>
                  <span className="tag-pill">UX Research</span>
                  <span className="tag-pill">Web Design</span>
                </div>
              </div>
            </div>

            {/* WORK 4: THE COCA-COLA COMPANY */}
            <div className="work-card mt-card">
              <div className="work-img-wrapper work-cola-mockup">
                <div className="cola-mockup-inner portfolio-asset">
                  <div className="cola-hand-illustration">
                    <div className="cola-can">
                      <div className="cola-can-white-wave"></div>
                      <span className="cola-brand-label">Cola</span>
                    </div>
                  </div>
                  {/* Overlay Badge Top Right */}
                  <div className="cola-overlap-badge-top-right">
                    <span>VIEW WORK</span>
                    <ArrowUpRight size={16} />
                  </div>
                </div>
                <div className="portfolio-hover-overlay">
                   <div className="view-case-btn">View Case</div>
                </div>
              </div>
              <div className="work-info">
                <h3>The Coca-cola Company</h3>
                <div className="portfolio-tags">
                  <span className="tag-pill">Advertising</span>
                  <span className="tag-pill">UI/UX Design</span>
                  <span className="tag-pill">Campaigns</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND LOGO TICKER */}
      <section className="logo-ticker-section">
        <div className="ticker-container">
          <div className="ticker-track">
            {brandLogos.concat(brandLogos).map((logo, index) => (
              <div key={index} className="ticker-item" style={logo.style}>
                {logo.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE BUILD SECTION */}
      <section className="how-we-build-section" id="how-it-works">
        <div className="hwb-container">
          <div className="hwb-header">
            <div className="hwb-label">
              <span className="hwb-label-line"></span>
              <span className="hwb-label-text">HOW WE BUILD.</span>
            </div>
            <h2 className="hwb-title">
              <span className="hwb-title-red">Winning ads</span> don't happen by accident
            </h2>
            <p className="hwb-subtitle">
              Brief. Generate. Learn. Scale. Every phase built to turn your ad spend into compounding winners, without opening a design tool.
            </p>
          </div>

          <div className="hwb-cards">
            <div className="hwb-card hwb-card-dark hwb-card-1">
              <span className="hwb-card-num">01</span>
              <h3 className="hwb-card-title">The brief</h3>
              <p className="hwb-card-desc">Write one brief: product, audience, tone. Or paste a product URL and Designoo reads it for you. No assumptions.</p>
            </div>
            <div className="hwb-card hwb-card-light hwb-card-2">
              <span className="hwb-card-num">02</span>
              <h3 className="hwb-card-title">The output</h3>
              <p className="hwb-card-desc">Hundreds of on-brand variants for every audience, size, segment and angle your campaigns need.</p>
            </div>
            <div className="hwb-card hwb-card-light hwb-card-3">
              <span className="hwb-card-num">03</span>
              <h3 className="hwb-card-title">The learning</h3>
              <p className="hwb-card-desc">As spend comes in, every creative earns a real CTR and gets ranked. No opinions. Just measurement.</p>
            </div>
            <div className="hwb-card hwb-card-light hwb-card-4">
              <span className="hwb-card-num">04</span>
              <h3 className="hwb-card-title">The scaling</h3>
              <p className="hwb-card-desc">Winners get more variants. Losers retire quietly. Monday starts with winners already scaling.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="faq-section" id="faq">
        <div className="faq-container">
          <div className="faq-header">
            <span className="section-tag">Q&amp;A</span>
            <h2>Frequently Asked<br/>Questions</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${openFaq === index ? 'active' : ''}`}
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <div className="faq-question">
                  <h3>{faq.question}</h3>
                  <div className="faq-icon-circle">
                    {openFaq === index ? (
                      <svg width="14" height="2" viewBox="0 0 14 2" fill="none"><rect width="14" height="2" fill="currentColor"/></svg>
                    ) : (
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect y="6" width="14" height="2" fill="currentColor"/><rect x="6" width="2" height="14" fill="currentColor"/></svg>
                    )}
                  </div>
                </div>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="faq-answer-wrapper"
                    >
                      <div className="faq-answer">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER / CALL TO ACTION */}
      <footer className="site-footer" id="get-started">
        <div className="footer-cta-container">
          <span className="cta-sub">Start crafting your brand story</span>
          <h2 className="cta-title">
            PARTNER WITH US TO CREATE <br />
            A <span className="compelling-pill">COMPELLING</span> NARRATIVE <br />
            FOR YOUR BRAND!
          </h2>

          <div className="cta-badge-wrapper">
            <svg className="cta-rotating-svg" viewBox="0 0 100 100" width="130" height="130">
              <path id="textPath-cta" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
              <text>
                <textPath href="#textPath-cta" fill="white" fontSize="8.5" letterSpacing="2.8">
                  LET'S GET STARTED • LET'S GET STARTED •
                </textPath>
              </text>
            </svg>
            <div className="cta-badge-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 2L12 12L2 22V2Z" fill="#7A1BF2"/>
                <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22V2Z" fill="#D4FF00"/>
              </svg>
            </div>
          </div>

          <p className="cta-desc">
            Let's bring your vision to life, start building a modern <br/>
            agency website for your business today.
          </p>

          <div className="footer-bottom-grid">
            <div className="footer-branding">
              <div className="footer-logo">
                <span className="logo-text-lime">Designoo</span>
              </div>
              <p className="footer-address">
                9519 Boston St, Chicago, IL 60611 USA<br />
                +1 312 555 0188 | hello@designoo.com<br/>
                info@designoo.com
              </p>
            </div>

            <div className="footer-pills">
              <a href="#video-ads" className="footer-pill-btn">Video Ads</a>
              <a href="#static-creatives" className="footer-pill-btn">Static Creatives</a>
              <a href="#promo-videos" className="footer-pill-btn">Promo Videos</a>
            </div>

            <div className="footer-copyright">
              <a href="#privacy">Privacy & Cookie Policy</a>
              <span>Designoo © 2026</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
