import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';

const BRAND = 'ShriramPrintersAI';
// Temporary Google Form link for early access
const TEMP_FORM_LINK = 'https://docs.google.com/spreadsheets/d/1N5bpBtH71CxJ6YKCyuL5fcwQPmoqNCHP_dgy_CwU17g/edit?resourcekey=&gid=1276555487#gid=1276555487';

function Navbar() {
return ( <header style={styles.header}> <div style={styles.container}> <div style={styles.brand}>{BRAND}</div> <nav> <a href="#features" style={styles.navLink}>Features</a> <a href="#how" style={styles.navLink}>How it Works</a> <a href="#pricing" style={styles.navLink}>Pricing</a> <a href={TEMP_FORM_LINK} target="_blank" rel="noreferrer" style={styles.cta}>Join Early Access</a> </nav> </div> </header>
);
}

function Hero() {
return ( <section style={styles.hero}> <div style={styles.container}>
<div style={{maxWidth: 720}}> <h1 style={styles.h1}>The AI Prepress Engine That Eliminates 90% of Printing Errors</h1> <p style={styles.lead}>{BRAND} automatically analyzes, fixes, and optimizes every incoming PDF — so you print faster, with fewer mistakes, and almost zero reprints.</p>
<div style={{display:'flex', gap:12, marginTop:20}}> <a href={TEMP_FORM_LINK} target="_blank" rel="noreferrer" style={styles.primaryBtn}>Join Early Access</a> <a href="#features" style={styles.secondaryBtn}>Learn More</a> </div> </div> <div style={styles.heroMock} aria-hidden> <MockupCard /> </div> </div> </section>
);
}

function MockupCard() {
return ( <div style={styles.mockCard}> <div style={styles.mockHeader}></div> <div style={styles.mockBody}> <div style={{marginBottom:12}}><strong>Incoming file:</strong> brochure_v3.pdf</div>
<div style={{display:'flex', gap:8, flexWrap:'wrap'}}> <Tag>Missing fonts</Tag> <Tag>RGB images</Tag> <Tag>Bleed too small</Tag> </div> <div style={{marginTop:14}}> <small>AI suggestions:</small> <ul style={{marginTop:6}}> <li>Embed missing fonts</li> <li>Convert RGB → CMYK</li> <li>Adjust bleed to 3mm</li> </ul> </div> </div> </div>
);
}

function Tag({children}){ return <span style={styles.tag}>{children}</span> }

function Features() {
return ( <section id="features" style={styles.section}> <div style={styles.container}> <h2 style={styles.h2}>Why {BRAND}</h2> <div style={styles.grid}> <Feature title="Auto Preflight" desc="Detects bleed issues, missing fonts, RGB/CMYK mismatches, and low-res images instantly."/> <Feature title="Auto Correction" desc="Auto-fix common issues so designers or operators don't need to intervene for every job."/> <Feature title="Auto Optimization" desc="Generate print-ready layouts and imposition to speed up press setup and reduce waste."/> </div> </div> </section>
);
}

function Feature({title, desc}) {
return ( <div style={styles.card}> <h3 style={{marginTop:0}}>{title}</h3> <p>{desc}</p> </div>
);
}

function HowItWorks() {
return (
<section id="how" style={{...styles.section, background:'#fbfbfc'}}> <div style={styles.container}> <h2 style={styles.h2}>How it Works</h2> <ol style={{maxWidth:920}}> <li><strong>Upload or auto-sync</strong> your PDF files from email or your intake system.</li> <li><strong>AI analyzes</strong> the file and finds prepress issues in seconds.</li> <li><strong>Auto-fixes</strong> or suggests corrections with a one-click approve flow.</li> <li><strong>Download</strong> print-ready output and send to press.</li> </ol> </div> </section>
);
}

function Pricing() {
return ( <section id="pricing" style={styles.section}> <div style={styles.container}> <h2 style={styles.h2}>Early Access Pricing</h2>
<div style={{display:'flex', gap:16, flexWrap:'wrap'}}> <div style={styles.pricingCard}> <h3>Founding User — One-time</h3>
<div style={{fontSize:28, fontWeight:700}}>₹499</div> <p>Early access to the product — lifetime updates during beta.</p> <a href={TEMP_FORM_LINK} target="_blank" rel="noreferrer" style={styles.primaryBtn}>Buy Early Access</a> </div> <div style={styles.pricingCard}> <h3>Launch Promo — Monthly (future)</h3>
<div style={{fontSize:28, fontWeight:700}}>₹999 / month</div> <p>Subscription plan (coming soon) — priority support.</p> <a href={TEMP_FORM_LINK} target="_blank" rel="noreferrer" style={styles.secondaryBtn}>Reserve a spot</a> </div> </div> </div> </section>
);
}

function EmailSignup() {
return (
<section style={{...styles.section, paddingBottom:40}}> <div style={styles.container}> <h2 style={styles.h2}>Join our Early Access List</h2> <p>We’ll email you onboarding details and your access link after purchase.</p>
<div style={{display:'flex', gap:10}}> <a href={TEMP_FORM_LINK} target="_blank" rel="noreferrer" style={styles.primaryBtn}>Join the List</a> <a href={TEMP_FORM_LINK} target="_blank" rel="noreferrer" style={styles.secondaryBtn}>Buy Early Access</a> </div> </div> </section>
);
}

function Footer() {
return ( <footer style={styles.footer}> <div style={styles.container}> <div>{BRAND} © {new Date().getFullYear()}</div>
<div style={{display:'flex', gap:12}}> <Link to="/privacy" style={styles.footerLink}>Privacy</Link> <Link to="/terms" style={styles.footerLink}>Terms</Link> </div> </div> </footer>
);
}

function ThankYou() {
const navigate = useNavigate();
return (
<div style={{padding:60, textAlign:'center'}}> <h1>Thank you — you're on the list 🎉</h1> <p>We've recorded your interest. Expect an email with next steps shortly.</p> <div style={{marginTop:20}}> <a href={TEMP_FORM_LINK} target="_blank" rel="noreferrer" style={styles.primaryBtn}>Buy Early Access</a>
<button onClick={() => navigate('/')} style={{...styles.secondaryBtn, marginLeft:12}}>Back to site</button> </div> </div>
);
}

function StaticPage({title}) {
return ( <div style={{padding:40}}> <h1>{title}</h1> <p>This is a placeholder {title}. Replace with your legal text before going live.</p> </div>
);
}

export default function App() {
return ( <Router> <Navbar /> <Routes>
<Route path="/" element={( <main> <Hero /> <Features /> <HowItWorks /> <Pricing /> <EmailSignup /> <Footer /> </main>
)} />
<Route path="/thank-you" element={<ThankYou />} />
<Route path="/privacy" element={<StaticPage title="Privacy Policy"/>} />
<Route path="/terms" element={<StaticPage title="Terms of Service"/>} /> </Routes> </Router>
);
}

const styles = {
header:{borderBottom:'1px solid #eee', background:'#fff', position:'sticky', top:0, zIndex:40},
container:{width:'min(1100px, 92%)', margin:'0 auto', display:'flex', alignItems:'center', justifyContent:'space-between', padding:'20px 0'},
brand:{fontWeight:800, fontSize:18},
navLink:{marginLeft:18, color:'#374151', textDecoration:'none'},
cta:{marginLeft:18, padding:'8px 12px', background:'#111827', color:'#fff', borderRadius:8, textDecoration:'none'},
hero:{padding:'64px 0', background:'linear-gradient(180deg,#ffffff,#f7fbff)', display:'flex', flexDirection:'row', alignItems:'flex-start'},
heroMock:{width:360, marginLeft:40},
mockCard:{width:360, borderRadius:12, boxShadow:'0 10px 30px rgba(2,6,23,0.08)', overflow:'hidden', background:'#fff', border:'1px solid #eef2ff'},
mockHeader:{height:10, background:'linear-gradient(90deg,#eef2ff,#f1f5f9)'},
mockBody:{padding:16},
tag:{background:'#eef2ff', color:'#0f1724', padding:'6px 8px', borderRadius:8, fontSize:12},
h1:{fontSize:40, margin:0},
lead:{marginTop:14, color:'#4b5563', fontSize:18},
grid:{display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))', gap:16},
card:{padding:18, borderRadius:10, background:'#fff', boxShadow:'0 8px 20px rgba(2,6,23,0.04)', border:'1px solid #f3f4f6'},
section:{padding:'56px 0'},
h2:{marginTop:0, marginBottom:18},
pricingCard:{padding:20, borderRadius:12, background:'#fff', border:'1px solid #e6e9f2', minWidth:260},
primaryBtn:{display:'inline-block', padding:'10px 16px', borderRadius:10, background:'#0f1724', color:'#fff', textDecoration:'none'},
secondaryBtn:{display:'inline-block', padding:'10px 16px', borderRadius:10, border:'1px solid #0f1724', color:'#0f1724', textDecoration:'none', background:'transparent'},
footer:{borderTop:'1px solid #f1f5f9', padding:'24px 0', marginTop:40},
footerLink:{color:'#4b5563', textDecoration:'none'}
};
