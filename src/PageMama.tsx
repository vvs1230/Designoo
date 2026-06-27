import React, { useEffect } from 'react';
import './pagemama.css';

const PageMama: React.FC = () => {
  useEffect(() => {
    // Add logic for scroll reveal (equivalent to .rev and .in classes)
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
        }
      });
    }, { threshold: 0.1 });

    const revElements = document.querySelectorAll('.rev');
    revElements.forEach((el) => observer.observe(el));

    return () => {
      revElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div style={{ fontFamily: 'var(--ff-main)', background: 'var(--white)', color: 'var(--ink)' }}>
      {/* ═══════ NAV ═══════ */}
      <nav>
        <div className="nav-wrap">
          <div className="logo">
            <div className="logo-mark">📊</div>
            পেজ<em>মামা</em>
          </div>
          <div className="nav-links">
            <a href="#features">ফিচার</a>
            <a href="#how">কীভাবে কাজ করে</a>
            <a href="#pricing">প্রাইসিং</a>
            <a href="#faq">FAQ</a>
          </div>
          <div className="nav-actions">
            <a href="#" className="btn-ghost-white">লগইন</a>
            <a href="#pricing" className="btn-yellow">শুরু করুন →</a>
          </div>
        </div>
      </nav>

      {/* ═══════ HERO ═══════ */}
      <section className="hero">
        <div className="hero-inner">
          {/* LEFT */}
          <div className="hero-left rev">
            <div className="hero-eyebrow"><span></span>বাংলাদেশি এফ-কমার্স অ্যানালিটিক্স</div>

            <h1 className="hero-h1">
              আপনার পেজ<br />
              <span className="hl-pill">কাজ করছে?</span><br />
              <span className="bangla-line">ডেটা দেখুন।</span>
            </h1>

            <p className="hero-sub">
              শেষ ৩০টি পোস্টের এনগেজমেন্ট প্যাটার্ন বিশ্লেষণ করে বলি — <b>কোনটা কাজ করছে, কোনটা ডুবছে</b>, আর কেন। পাবলিক ডেটা থেকে, কোনো পাসওয়ার্ড ছাড়া।
            </p>

            <div className="hero-ctas">
              <a href="#pricing" className="btn-cta-yellow">পেজ অ্যানালাইসিস শুরু করুন →</a>
              <a href="#" className="btn-cta-outline">নমুনা রিপোর্ট দেখুন</a>
            </div>

            <div className="hero-trust">
              <div className="av-stack">
                <div className="av av1">রা</div>
                <div className="av av2">কা</div>
                <div className="av av3">সা</div>
                <div className="av av4">মি</div>
              </div>
              <span>১০০+ বাংলাদেশি পেজ অ্যানালাইজ করা হয়েছে</span>
            </div>
          </div>

          {/* RIGHT — floating card cluster */}
          <div className="hero-right rev d2">
            {/* CARD 1 — analytics */}
            <div className="fc card-analytics">
              <div className="ca-head">
                <span className="ca-tag">এনগেজমেন্ট</span>
                <span className="ca-live">লাইভ</span>
              </div>
              <div className="ca-stat">
                <div className="n">৩০টি</div>
                <div className="l">পোস্ট বিশ্লেষণ করা হয়েছে</div>
              </div>
              {/* sparkline SVG */}
              <svg className="sparkline" viewBox="0 0 260 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 40 C20 38, 40 10, 60 18 C80 26, 90 42, 110 30 C130 18, 145 8, 165 14 C185 20, 200 38, 220 28 C235 20, 248 10, 260 6"
                  stroke="#6B5CE7" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                <path d="M0 40 C20 38, 40 10, 60 18 C80 26, 90 42, 110 30 C130 18, 145 8, 165 14 C185 20, 200 38, 220 28 C235 20, 248 10, 260 6 L260 52 L0 52 Z"
                  fill="url(#sparkGrad)" opacity=".18" />
                <defs>
                  <linearGradient id="sparkGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6B5CE7" />
                    <stop offset="100%" stopColor="#6B5CE7" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* CARD 2 — bar chart */}
            <div className="fc card-bars">
              <div className="cb-label">পোস্ট ধরন</div>
              <div className="bar-group">
                <div className="bar-col">
                  <div className="b yellow" style={{ height: '28px' }}></div>
                  <span className="bm">ভিডিও</span>
                </div>
                <div className="bar-col">
                  <div className="b violet" style={{ height: '52px' }}></div>
                  <span className="bm">ছবি</span>
                </div>
                <div className="bar-col">
                  <div className="b yellow" style={{ height: '42px' }}></div>
                  <span className="bm">টেক্সট</span>
                </div>
                <div className="bar-col">
                  <div className="b violet" style={{ height: '34px' }}></div>
                  <span className="bm">রিলস</span>
                </div>
                <div className="bar-col">
                  <div className="b yellow" style={{ height: '60px' }}></div>
                  <span className="bm">ক্যারো.</span>
                </div>
              </div>
            </div>

            {/* CARD 3 — zone breakdown */}
            <div className="fc card-zones">
              <div className="cz-head">
                <span className="cz-title">এনগেজমেন্ট জোন ব্রেকডাউন</span>
                <span className="cz-sub">গত ৩০ পোস্ট</span>
              </div>
              <div className="zone-row">
                <div className="zdot" style={{ background: '#EF4444' }}></div>
                <span className="zname">দুর্বল পারফর্মার</span>
                <div className="zbar-wrap"><div className="zbar-fill" style={{ width: '30%', background: '#EF4444' }}></div></div>
                <span className="zpct" style={{ color: '#EF4444' }}>৩০%</span>
              </div>
              <div className="zone-row">
                <div className="zdot" style={{ background: '#F59E0B' }}></div>
                <span className="zname">উন্নতির সুযোগ</span>
                <div className="zbar-wrap"><div className="zbar-fill" style={{ width: '47%', background: '#F59E0B' }}></div></div>
                <span className="zpct" style={{ color: '#F59E0B' }}>৪৭%</span>
              </div>
              <div className="zone-row">
                <div className="zdot" style={{ background: '#22C55E' }}></div>
                <span className="zname">শক্তিশালী পারফর্মার</span>
                <div className="zbar-wrap"><div className="zbar-fill" style={{ width: '23%', background: '#22C55E' }}></div></div>
                <span className="zpct" style={{ color: '#22C55E' }}>২৩%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ SOCIAL PROOF ═══════ */}
      <section className="social-proof rev">
        <div className="sp-inner">
          <div className="sp-left">
            <h2>বিশ্বস্ত<br />এবং ভালোবাসা<br />পাওয়া।</h2>
            <div className="av-stack" style={{ marginTop: '16px' }}>
              <div className="av av1">রা</div>
              <div className="av av2">কা</div>
              <div className="av av3">সা</div>
              <div className="av av4">মি</div>
            </div>
          </div>
          <div className="sp-middle">
            <div className="sp-stats">
              <div className="sp-stat">
                <div className="sn yellow">৩X</div>
                <div className="sl">বেশি এনগেজমেন্ট<br />প্রথম সপ্তাহেই</div>
              </div>
              <div className="sp-stat">
                <div className="sn">৬০মি.</div>
                <div className="sl">এর মধ্যে<br />WhatsApp-এ রিপোর্ট</div>
              </div>
            </div>
          </div>
          <div className="sp-right">
            <p>পেজমামা বাংলাদেশের এফ-কমার্স সেলারদের জন্য তৈরি — আপনার পেজের পাবলিক পোস্ট ডেটা বিশ্লেষণ করে বলি কোন কন্টেন্ট কাজ করছে, কোনটা করছে না। পাসওয়ার্ড লাগে না।</p>
            <div className="trust-tags">
              <span className="trust-tag">পাসওয়ার্ড লাগে না</span>
              <span className="trust-tag">বিকাশ / নগদ</span>
              <span className="trust-tag">বাংলায় রিপোর্ট</span>
              <span className="trust-tag">BETA — ৫০% ছাড়</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ FEATURES ═══════ */}
      <section className="features-section" id="features">
        <div className="sec-wrap">
          <div className="rev">
            <div className="sec-eyebrow">কেন পেজমামা</div>
            <h2 className="sec-h2">আপনার পেজের জন্য<br /><span className="col bangla">স্মার্ট অ্যানালিটিক্স</span></h2>
            <p className="sec-sub">জেনেরিক টিপস না — আপনার পেজের নিজের ডেটা থেকে নির্দিষ্ট সাজেশন।</p>
          </div>
          <div className="feat-grid">
            <div className="feat-card rev">
              <div className="feat-icon">📊</div>
              <h3>থ্রি-জোন এনগেজমেন্ট ম্যাপ</h3>
              <p>লাল (বন্ধ করুন), হলুদ (ঠিক করুন), সবুজ (রিপিট করুন) — শেষ ৩০ পোস্টের স্পষ্ট ব্রেকডাউন।</p>
              <span className="feat-link">আরও জানুন</span>
            </div>
            <div className="feat-card rev d1">
              <div className="feat-icon">🎯</div>
              <h3>নিশ-স্পেসিফিক সাজেশন</h3>
              <p>খাবার পেজের জন্য আলাদা, ফ্যাশন পেজের জন্য আলাদা — বিজনেস ক্যাটাগরি বুঝে সাজেশন।</p>
              <span className="feat-link">আরও জানুন</span>
            </div>
            <div className="feat-card rev d2">
              <div className="feat-icon">⏰</div>
              <h3>বেস্ট পোস্টিং টাইম</h3>
              <p>আপনার পেজের নিজের ডেটা থেকে বের করা — আপনার অডিয়েন্স কখন সবচেয়ে সক্রিয়।</p>
              <span className="feat-link">আরও জানুন</span>
            </div>
            <div className="feat-card rev">
              <div className="feat-icon">📱</div>
              <h3>WhatsApp ডেলিভারি</h3>
              <p>৩০–৬০ মিনিটে সরাসরি WhatsApp-এ রিপোর্ট — কোনো অ্যাপ ইনস্টল লাগে না।</p>
              <span className="feat-link">আরও জানুন</span>
            </div>
            <div className="feat-card rev d1">
              <div className="feat-icon">🔒</div>
              <h3>পাসওয়ার্ড লাগে না</h3>
              <p>শুধু পেজ লিংক দিন। পাবলিক ডেটা থেকে বিশ্লেষণ — লগইন কখনো চাওয়া হয় না।</p>
              <span className="feat-link">আরও জানুন</span>
            </div>
            <div className="feat-card rev d2">
              <div className="feat-icon">📅</div>
              <h3>৭ দিনের অ্যাকশন প্ল্যান</h3>
              <p>কী পোস্ট করবেন, কখন করবেন, কোন ফরম্যাটে — সুনির্দিষ্ট ৭ দিনের গাইড।</p>
              <span className="feat-link">আরও জানুন</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ HOW IT WORKS ═══════ */}
      <section className="how-section" id="how">
        <div className="sec-wrap">
          <div className="rev">
            <div className="sec-eyebrow" style={{ color: 'var(--ink)' }}>
              <span style={{ color: 'var(--ink)', opacity: .4, fontSize: '.72rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '18px', height: '2px', background: 'var(--ink)', opacity: .4, borderRadius: '2px', display: 'inline-block' }}></span>
                প্রসেস
              </span>
            </div>
            <h2 className="sec-h2" style={{ color: 'var(--ink)' }}>কীভাবে কাজ করে</h2>
            <p className="sec-sub" style={{ color: 'var(--gray600)' }}>তিন ধাপে, ৩০-৬০ মিনিটে WhatsApp-এ রিপোর্ট।</p>
          </div>
          <div className="how-grid">
            <div className="step-list rev">
              <div className="step-item">
                <div className="step-num">১</div>
                <div>
                  <h4>পেজ লিংক দিন</h4>
                  <p>শুধু আপনার ফেসবুক পেজের পাবলিক লিংক — কোনো পাসওয়ার্ড বা লগইন ছাড়াই।</p>
                  <span className="step-badge">৩০ সেকেন্ড</span>
                </div>
              </div>
              <div className="step-item">
                <div className="step-num">২</div>
                <div>
                  <h4>আমরা অ্যানালাইসিস করি</h4>
                  <p>গত ৩০ পোস্টের এনগেজমেন্ট স্ক্যান করে আপনার পেজের বেসলাইনের সাথে তুলনা — ম্যানুয়াল রিভিউ + AI মিলিয়ে।</p>
                  <span className="step-badge">আমাদের কাজ</span>
                </div>
              </div>
              <div className="step-item">
                <div className="step-num">৩</div>
                <div>
                  <h4>WhatsApp-এ রিপোর্ট পান</h4>
                  <p>কোন কন্টেন্ট রিপিট করবেন, কোনটা বন্ধ করবেন, কখন পোস্ট করবেন — নির্দিষ্ট অ্যাকশন প্ল্যান সহ।</p>
                  <span className="step-badge">৩০–৬০ মিনিট</span>
                </div>
              </div>
            </div>

            <div className="report-mock rev d2">
              <div className="rm-head">
                <div className="rm-head-left">
                  <div className="rm-dots"><span></span><span></span><span></span></div>
                  <span className="rm-title">পেজমামা রিপোর্ট · খাবার পেজ</span>
                </div>
                <span className="rm-status">লাইভ</span>
              </div>
              <div className="rm-body">
                <div className="rm-row-label">পোস্ট পারফরম্যান্স বিশ্লেষণ</div>
                <div className="rm-bar-row rm-red">
                  <span className="rm-bname">স্ট্যাটিক ছবি</span>
                  <div className="rm-bwrap"><div className="rm-bfill" style={{ width: '30%' }}></div></div>
                  <span className="rm-bpct">৩০%</span>
                </div>
                <div className="rm-bar-row rm-amb">
                  <span className="rm-bname">টেক্সট পোস্ট</span>
                  <div className="rm-bwrap"><div className="rm-bfill" style={{ width: '58%' }}></div></div>
                  <span className="rm-bpct">৫৮%</span>
                </div>
                <div className="rm-bar-row rm-grn">
                  <span className="rm-bname">প্রসেস ভিডিও</span>
                  <div className="rm-bwrap"><div className="rm-bfill" style={{ width: '92%' }}></div></div>
                  <span className="rm-bpct">৯২%</span>
                </div>

                <div className="rm-divider"></div>

                <div className="rm-row-label">বেস্ট পোস্টিং টাইম</div>
                <div className="rm-chips">
                  <span className="rm-chip primary">দুপুর ১২–১টা</span>
                  <span className="rm-chip primary">রাত ৮–৯টা</span>
                  <span className="rm-chip yellow">শুক্র–শনিবার</span>
                </div>

                <div className="rm-plan-title">৭ দিনের অ্যাকশন প্ল্যান</div>
                <div className="rm-plan-item">
                  <svg className="ck" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 13l4 4L19 7" /></svg>
                  শনিবার রাত ৮টায় রান্নার প্রসেস ভিডিও পোস্ট করুন
                </div>
                <div className="rm-plan-item">
                  <svg className="ck" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 13l4 4L19 7" /></svg>
                  মঙ্গলবার দুপুরে "আজকের স্পেশাল" ফরম্যাটে ছবি
                </div>
                <div className="rm-plan-item" style={{ color: '#EF4444' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M6 18L18 6M6 6l12 12" /></svg>
                  স্ট্যাটিক মেনু ছবি কমিয়ে আনুন
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ NICHE ═══════ */}
      <section className="niche-section">
        <div className="sec-wrap">
          <div className="niche-inner">
            <div className="rev">
              <div className="sec-eyebrow">নতুন ফিচার</div>
              <h2 className="sec-h2">জেনেরিক টিপস না —<br /><span className="col bangla">আপনার বিজনেসের জন্য</span></h2>
              <p className="sec-sub">আপনার বিজনেস ক্যাটাগরি বুঝে সাজেশন তৈরি হয়। একই উপদেশ সবার জন্য না।</p>
              <div className="cat-pills">
                <span className="cpill active">খাবার ও রেস্টুরেন্ট</span>
                <span className="cpill">ফ্যাশন ও বুটিক</span>
                <span className="cpill">কোচিং</span>
                <span className="cpill">সার্ভিস বিজনেস</span>
                <span className="cpill">ই-কমার্স</span>
              </div>
            </div>
            <div className="niche-card rev d2">
              <div className="nc-head">
                <span className="ico">🍽️</span>
                <span className="ttl">খাবার ও রেস্টুরেন্ট পেজের সাজেশন</span>
              </div>
              <div className="nc-row">
                <div className="nc-check"><svg viewBox="0 0 24 24" fill="none" strokeWidth="3"><path d="M5 13l4 4L19 7" /></svg></div>
                <p><b>প্রসেস ভিডিও</b> আপনার পেজে স্ট্যাটিক ছবির চেয়ে ৩x বেশি কমেন্ট পেয়েছে।</p>
              </div>
              <div className="nc-row">
                <div className="nc-check"><svg viewBox="0 0 24 24" fill="none" strokeWidth="3"><path d="M5 13l4 4L19 7" /></svg></div>
                <p><b>দুপুর ১২–১টা</b> ও <b>রাত ৮–৯টা</b> পোস্টে এনগেজমেন্ট রেট সবচেয়ে বেশি।</p>
              </div>
              <div className="nc-row">
                <div className="nc-check"><svg viewBox="0 0 24 24" fill="none" strokeWidth="3"><path d="M5 13l4 4L19 7" /></svg></div>
                <p><b>"আজকের স্পেশাল"</b> ফ্রেমিং-এ দাম পোস্টের চেয়ে কমেন্ট বেশি আসে।</p>
              </div>
              <div className="nc-row">
                <div className="nc-check"><svg viewBox="0 0 24 24" fill="none" strokeWidth="3"><path d="M5 13l4 4L19 7" /></svg></div>
                <p>শুক্র-শনিবারের পোস্ট অন্য দিনের চেয়ে গড়ে <b>৪০% বেশি</b> এনগেজমেন্ট পায়।</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ PRICING ═══════ */}
      <section id="pricing" className="pricing-section">
        <div className="wrap sec-wrap">
          <div className="section-head rev" style={{ textAlign: 'center' }}>
            <div className="eyebrow sec-eyebrow" style={{ justifyContent: 'center' }}>ফাউন্ডার প্রাইসিং · BETA</div>
            <h2 className="sec-h2">আপনার পেজের জন্য <em>সঠিক প্ল্যান</em></h2>
            <p className="sec-sub" style={{ margin: '0 auto' }}>BETA পিরিয়ডে এই দামে পাওয়া যাচ্ছে। প্রোডাক্ট ফুল লঞ্চ হলে দাম বাড়বে।</p>
          </div>
          <div className="pricing-grid">
            <div className="price-card rev">
              <h3>কুইক চেক</h3>
              <div className="tagline price-tagline">জানুন আপনার পোস্ট কেন এনগেজমেন্ট পাচ্ছে না</div>
              <div className="price price-row"><span className="amt price-amt">৯৯</span><span className="cur price-unit">টাকা · একবার</span></div>
              <div className="strike price-was">লঞ্চ প্রাইস ২০০ টাকা</div>
              <ul className="plist">
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>থ্রি-জোন এনগেজমেন্ট বিশ্লেষণ</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>টপ ৩টি সমস্যা চিহ্নিত</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>৩টি কন্টেন্ট আইডিয়া</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>১ পেজ · ১ রিপোর্ট · ৩০ দিন অ্যাক্সেস</li>
              </ul>
              <a href="#" className="cta pbtn">শুরু করুন</a>
            </div>
            <div className="price-card hot rev d1">
              <span className="featured-tag hot-tag">সবচেয়ে জনপ্রিয়</span>
              <h3>স্মার্ট গ্রোথ</h3>
              <div className="tagline price-tagline">৭ দিনের নিশ-স্পেসিফিক অ্যাকশন প্ল্যান</div>
              <div className="price price-row"><span className="amt price-amt">২৯৯</span><span className="cur price-unit">টাকা · একবার</span></div>
              <div className="strike price-was">লঞ্চ প্রাইস ৫০০ টাকা</div>
              <ul className="plist">
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>পূর্ণ থ্রি-জোন বিশ্লেষণ</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>আপনার বিজনেস ক্যাটাগরি অনুযায়ী সাজেশন</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>৭ দিনের নির্দিষ্ট অ্যাকশন প্ল্যান</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>বেস্ট পোস্টিং টাইম (আপনার ডেটা থেকে)</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>২টি রিলস/ক্যারোজেল আইডিয়া</li>
              </ul>
              <a href="#" className="cta pbtn">স্মার্ট গ্রোথ শুরু করুন</a>
            </div>
            <div className="price-card rev d2">
              <h3>প্রো</h3>
              <div className="tagline price-tagline">সাপ্তাহিক মনিটরিং, প্রতিদ্বন্দ্বী ট্র্যাকিং</div>
              <div className="price price-row"><span className="amt price-amt">৫৯৯</span><span className="cur price-unit">টাকা · মাসিক</span></div>
              <div className="strike price-was">লঞ্চ প্রাইস ১০০০ টাকা</div>
              <ul className="plist">
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>স্মার্ট গ্রোথ-এর সবকিছু</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>আপনার নিশের প্রতিদ্বন্দ্বী পেজ বিশ্লেষণ</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>মাসিক রি-অ্যানালাইসিস</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>১৫ দিনের কন্টেন্ট ক্যালেন্ডার</li>
              </ul>
              <a href="#" className="cta pbtn">প্রিমিয়াম নিন</a>
            </div>
          </div>
          <div className="payment-note pay-note">১০০% সিকিউর পেমেন্ট · বিকাশ / নগদ · ফলাফল আপনার পেজের ক্যাটাগরি ও কন্টেন্ট কোয়ালিটির ওপর নির্ভর করবে</div>
        </div>
      </section>

      <div className="wrap sec-wrap"><div className="divider"></div></div>

      {/* ═══════ FAQ ═══════ */}
      <section id="faq" className="faq-section">
        <div className="wrap sec-wrap">
          <div className="section-head rev faq-header">
            <div className="eyebrow sec-eyebrow">সাপোর্ট</div>
            <h2 className="sec-h2">আরও কোনো <em>প্রশ্ন</em>?</h2>
          </div>
          <div className="faq-list faq-grid">
            <div className="faq-items-col">
              <div className="faq-item rev in open">
                <div className="faq-q" onClick={(e) => e.currentTarget.parentElement?.classList.toggle('open')}>
                  <h4>আমার ফেসবুক পাসওয়ার্ড কি দিতে হবে?</h4>
                  <span className="faq-icon">+</span>
                </div>
                <div className="faq-a">না, একদম না। শুধু পেজ লিংক দিন — আমরা পাবলিকভাবে দৃশ্যমান পোস্ট ডেটা (লাইক, কমেন্ট, শেয়ার, সময়) দেখে বিশ্লেষণ করি। লগইন বা পাসওয়ার্ড কখনো লাগে না।</div>
              </div>
              <div className="faq-item rev">
                <div className="faq-q" onClick={(e) => e.currentTarget.parentElement?.classList.toggle('open')}>
                  <h4>আপনারা কি আমার পেজের "রিচ" মাপেন?</h4>
                  <span className="faq-icon">+</span>
                </div>
                <div className="faq-a">সরাসরি না। Reach/Impressions ডেটা Facebook-এর নিজস্ব Insights-এ লক থাকে, যেটার জন্য পেজ লগইন লাগবে — আর সেটা আমরা চাই না। আমরা যা মাপি তা হলো এনগেজমেন্ট (লাইক, কমেন্ট, শেয়ার) এবং সেটাকে আপনার পেজের নিজের গড়ের সাথে তুলনা করি, যাতে বোঝা যায় কোন পোস্ট সত্যিকারের ভালো করছে।</div>
              </div>
              <div className="faq-item rev">
                <div className="faq-q" onClick={(e) => e.currentTarget.parentElement?.classList.toggle('open')}>
                  <h4>নিশ-স্পেসিফিক সাজেশন বলতে কী বোঝায়?</h4>
                  <span className="faq-icon">+</span>
                </div>
                <div className="faq-a">আমরা প্রথমে আপনার পেজের পোস্ট হিস্ট্রি দেখে বুঝি আপনার বিজনেস কোন ধরনের (খাবার, ফ্যাশন, কোচিং, ইত্যাদি), তারপর সাজেশনগুলো সেই নিশের জন্য রিলেভ্যান্ট করে দিই — জেনেরিক উপদেশের বদলে।</div>
              </div>
              <div className="faq-item rev">
                <div className="faq-q" onClick={(e) => e.currentTarget.parentElement?.classList.toggle('open')}>
                  <h4>টিকটক সাপোর্ট কবে আসবে?</h4>
                  <span className="faq-icon">+</span>
                </div>
                <div className="faq-a">আমরা বর্তমানে শুধু Facebook পেজ সাপোর্ট করছি। TikTok সাপোর্ট নিয়ে কাজ চলছে এবং শীঘ্রই যোগ করা হবে।</div>
              </div>
              <div className="faq-item rev">
                <div className="faq-q" onClick={(e) => e.currentTarget.parentElement?.classList.toggle('open')}>
                  <h4>আপনাদের AI কি ১০০% অ্যাকিউরেট?</h4>
                  <span className="faq-icon">+</span>
                </div>
                <div className="faq-a">না। আমাদের সিস্টেম (ম্যানুয়াল রিভিউ + AI মিলিয়ে) আপনার পেজের ডেটা প্যাটার্ন দেখে সম্ভাব্য কারণ ও সুযোগ চিহ্নিত করে। এটি একটি দিকনির্দেশনা, গ্যারান্টি নয় — শেষ সিদ্ধান্ত আপনার।</div>
              </div>
              <div className="faq-item rev">
                <div className="faq-q" onClick={(e) => e.currentTarget.parentElement?.classList.toggle('open')}>
                  <h4>আপনারা কি আমার ডেটা রাখেন বা শেয়ার করেন?</h4>
                  <span className="faq-icon">+</span>
                </div>
                <div className="faq-a">আমরা শুধুমাত্র পাবলিকলি অ্যাভেইলেবল পোস্ট ডেটা প্রসেস করি। কোনো প্রাইভেট ডেটা বা পাসওয়ার্ড নিই না, এবং কখনো ডেটা অন্য কোথাও শেয়ার বা বিক্রি করিঠি না।</div>
              </div>
              <div className="faq-item rev">
                <div className="faq-q" onClick={(e) => e.currentTarget.parentElement?.classList.toggle('open')}>
                  <h4>এই অ্যাকশন প্ল্যান ব্যবহার করে ফেসবুক কি পেজ ব্লক করতে পারে?</h4>
                  <span className="faq-icon">+</span>
                </div>
                <div className="faq-a">আমরা শুধু কন্টেন্ট কোয়ালিটি ও টাইমিং নিয়ে পরামর্শ দিই। আমরা কখনো fake engagement, like-bait, বা পলিসি ভায়োলেশন করতে বলি না — তাই ব্লক হওয়ার কারণ নেই।</div>
              </div>
            </div>
            
            <div className="faq-cta-box rev d2">
              <div className="fcb-tag">সাহায্য দরকার?</div>
              <h3>কোনো নির্দিষ্ট<br />প্রশ্ন আছে?</h3>
              <p>আমরা ২৪/৭ সাপোর্ট দিচ্ছি। আমাদের সাথে WhatsApp-এ কথা বলুন।</p>
              <ul className="fcb-list">
                <li>সরাসরি সমাধান</li>
                <li>১-অন-১ কনসালটেশন</li>
              </ul>
              <a href="#" className="btn-faq-yellow">WhatsApp করুন →</a>
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta site-footer">
        <div className="wrap sec-wrap">
          <div className="footer-cta-container rev">
            <span className="cta-sub">আজই জানুন কোন পোস্ট কাজ করছে</span>
            <h2 className="cta-title">কয়েক মিনিটে আপনার পেজের এনগেজমেন্ট প্যাটার্ন বিশ্লেষণ</h2>
            <a href="#pricing" className="btn-cta-yellow">অ্যানালাইসিস শুরু করুন →</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap footer-wrap">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="logo"><span className="logo-mark">📊</span>পেজ<em>মামা</em></div>
              <p>আপনার ফেসবুক পেজের এনগেজমেন্ট প্যাটার্ন বিশ্লেষণের জন্য বাংলাদেশের একটি AI-সহায়িত টুল। কয়েক মিনিটে জানুন কোন কন্টেন্ট কাজ করছে।</p>
            </div>
            <div className="footer-col">
              <h5>কোম্পানি</h5>
              <a href="#how">কীভাবে কাজ করে</a>
              <a href="#niche">নিশ-স্পেসিফিক</a>
              <a href="#pricing">প্রাইসিং</a>
            </div>
            <div className="footer-col">
              <h5>সাপোর্ট</h5>
              <a href="#faq">প্রশ্নোত্তর</a>
              <a href="/privacy-policy">প্রাইভেসি পলিসি</a>
              <a href="/terms-of-service">টার্মস অফ সার্ভিস</a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© ২০২৬ Page Mama. সব অধিকার সংরক্ষিত।</span>
            <span>মেড উইথ ❤️ ইন বাংলাদেশ</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PageMama;
