import { Mail, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './index.css';

function App() {
  return (
    <>
      <div className="page-bg" />
      
      {/* Background Floating Orbs */}
      <motion.div 
        className="bg-sphere pink-sphere"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="container-center">
        <motion.div 
          className="card"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Top Logo Cutout Simulation */}
          <div className="top-cutout">
            <div className="logo">
              <span className="logo-text">Design</span>
              <span className="logo-infinity">∞</span>
            </div>
          </div>

          {/* Floating 3D-like elements */}
          <motion.div 
            className="floating-shape green-u"
            animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M 30 10 C 10 10, 10 30, 30 30" stroke="#71B28C" strokeWidth="12" strokeLinecap="round" fill="none" style={{ filter: 'drop-shadow(2px 4px 6px rgba(0,0,0,0.2))' }} />
            </svg>
          </motion.div>

          <motion.div 
            className="floating-shape golden-zigzag"
            animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg width="40" height="60" viewBox="0 0 40 60" fill="none">
              <path d="M 10 10 L 30 20 L 10 40 L 30 50" stroke="#D19842" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'drop-shadow(2px 4px 6px rgba(0,0,0,0.2))' }} />
            </svg>
          </motion.div>

          <motion.div 
            className="golden-sphere-corner"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
          />

          {/* Content */}
          <div className="content">
            <motion.div 
              className="emoji-container"
              initial={{ scale: 0, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            >
              <span className="emoji">👍🏽</span>
            </motion.div>
            
            <motion.h4 
              className="subtitle"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              আমরা এখনও
            </motion.h4>
            
            <motion.h1 
              className="title"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              ওয়েবসাইট তৈরি করছি।
            </motion.h1>
            
            <motion.p 
              className="description"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              খুব শীঘ্রই আমরা আমাদের ওয়েবসাইট লঞ্চ করতে যাচ্ছি।<br />
              আমাদের সাথেই থাকুন।
            </motion.p>
            
            <motion.button 
              className="notify-btn"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <div className="icon-circle">
                <Mail size={16} color="#111827" />
              </div>
              <span className="btn-text">আপডেট পেতে যুক্ত হোন</span>
              <ChevronRight size={18} className="chevron" />
            </motion.button>
          </div>

          {/* Social Icons */}
          <motion.div 
            className="social-footer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <a href="#" className="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>
            </a>
            <a href="#" className="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="#" className="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default App;
