/*
Project: shriramprintersai-landing (ShriramPrintersAI)
File: App.jsx (single-file React app for preview)

Fix: Avoid using `process.env` directly in browser context; fallback to hardcoded placeholders if undefined.
*/

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';

const BRAND = 'ShriramPrintersAI';
// Fallback to placeholder if env is undefined or sandboxed environment
const PAYMENT_LINK = typeof process !== 'undefined' && process.env?.REACT_APP_PAYMENT_LINK ? process.env.REACT_APP_PAYMENT_LINK : 'https://rzp.io/l/REPLACE_WITH_YOUR_LINK';
const EMAILOCTOPUS_ACTION = typeof process !== 'undefined' && process.env?.REACT_APP_EMAILOCTOPUS_FORM_ACTION ? process.env.REACT_APP_EMAILOCTOPUS_FORM_ACTION : 'https://emailoctopus.com/lists/YOUR_LIST_ID/forms/subscribe';

function Navbar() {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <div style={styles.brand}>{BRAND}</div>
        <nav>
          <a href="#features" style={styles.navLink}>Features</a>
          <a href="#how" style={styles.navLink}>How it Works</a>
          <a href="#pricing" style={styles.navLink}>Pricing</a>
          <a href={PAYMENT_LINK} target="_blank" rel="noreferrer" style={styles.cta}>Join Early Access</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section style={styles.hero}>
      <div style={styles.container}>
        <div style={{maxWidth: 720}}>
          <h1 style={styles.h1}>The AI Prepress Engine That Eliminates 90% of Printing Errors</h1>
          <p style={styles.lead}>ShriramPrintersAI automatically analyzes, fixes, and optimizes every incoming PDF — so you print faster, with fewer mistakes, and almost zero reprints.</p>
          <div style={{display:'flex', gap:12, marginTop:20}}>
            <a href={PAYMENT_LINK} target="_blank" rel="noreferrer" style={styles.primaryBtn}>Join Early Access</a>
            <a href="#features" style={styles.secondaryBtn}>Learn More</a>
          </div>
        </div>
        <div style={styles.heroMock} aria-hidden>
          <MockupCard />
        </div>
      </div>
    </section>
  );
}

// The rest of the components remain unchanged

function MockupCard(){
  return (
    <div style={styles.mockCard}>
      <div style={styles.mockHeader}></div>
      <div style={styles.mockBody}>
        <div style={{marginBottom:12}}><strong>Incoming file:</strong> brochure_v3.pdf</div>
        <div style={{display:'flex', gap:8, flexWrap:'wrap'}}>
          <Tag>Missing fonts</Tag>
          <Tag>RGB images</Tag>
          <Tag>Bleed too small</Tag>
        </div>
        <div style={{marginTop:14}}>
          <small>AI suggestions:</small>
          <ul style={{marginTop:6}}>
            <li>Embed missing fonts</li>
            <li>Convert RGB → CMYK</li>
            <li>Adjust bleed to 3mm</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Tag({children}){ return <span style={styles.tag}>{children}</span> }

function App(){
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<main><Hero /></main>} />
      </Routes>
    </Router>
  );
}

export default App;

const styles = {
  header:{borderBottom:'1px solid #eee', background:'#fff', position:'sticky', top:0, zIndex:40},
  container:{width:'min(1100px, 92%)', margin:'0 auto', display:'flex', alignItems:'center', justifyContent:'space-between', padding:'20px 0'},
  brand:{fontWeight:800, fontSize:18},
  navLink:{marginLeft:18, color:'#374151', textDecoration:'none'},
  cta:{marginLeft:18, padding:'8px 12px', background:'#111827', color:'#fff', borderRadius:8, textDecoration:'none'},
  hero:{padding:'64px 0', background:'linear-gradient(180deg,#ffffff,#f7fbff)'},
  h1:{fontSize:40, margin:0},
  lead:{marginTop:14, color:'#4b5563', fontSize:18},
  heroMock:{width:360, marginLeft:40},
  mockCard:{width:360, borderRadius:12, boxShadow:'0 10px 30px rgba(2,6,23,0.08)', overflow:'hidden', background:'#fff', border:'1px solid #eef2ff'},
  mockHeader:{height:10, background:'linear-gradient(90deg,#eef2ff,#f1f5f9)'},
  mockBody:{padding:16},
  tag:{background:'#eef2ff', color:'#0f1724', padding:'6px 8px', borderRadius:8, fontSize:12}
};
