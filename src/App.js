import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Menu, X, CheckCircle, Zap, FileCheck, Settings } from 'lucide-react';

const BRAND = 'ShriramPrintersAI';
const TEMP_FORM_LINK = 'https://docs.google.com/spreadsheets/d/1N5bpBtH71CxJ6YKCyuL5fcwQPmoqNCHP_dgy_CwU17g/edit?resourcekey=&gid=1276555487#gid=1276555487';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold text-gray-900">{BRAND}</div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
            <a href="#how" className="text-gray-600 hover:text-gray-900 transition-colors">How it Works</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
            <a 
              href={TEMP_FORM_LINK} 
              target="_blank" 
              rel="noreferrer" 
              className="px-5 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
            >
              Join Early Access
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden py-4 space-y-3 border-t border-gray-200">
            <a href="#features" className="block py-2 text-gray-600 hover:text-gray-900" onClick={() => setIsOpen(false)}>Features</a>
            <a href="#how" className="block py-2 text-gray-600 hover:text-gray-900" onClick={() => setIsOpen(false)}>How it Works</a>
            <a href="#pricing" className="block py-2 text-gray-600 hover:text-gray-900" onClick={() => setIsOpen(false)}>Pricing</a>
            <a 
              href={TEMP_FORM_LINK} 
              target="_blank" 
              rel="noreferrer" 
              className="block w-full text-center px-5 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
            >
              Join Early Access
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}

function Hero() {
  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Text */}
          <div className="space-y-6 lg:space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
              <Zap size={16} />
              <span>AI-Powered Prepress</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Eliminate <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">90% of Printing Errors</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              ShriramPrintersAI automatically analyzes, fixes, and optimizes every incoming PDF — so you print faster, with fewer mistakes, and almost zero reprints.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={TEMP_FORM_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-xl shadow-lg hover:bg-gray-800 hover:shadow-xl transition-all transform hover:-translate-y-0.5"
              >
                Join Early Access
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-900 text-gray-900 font-semibold rounded-xl hover:bg-gray-50 transition-colors"
              >
                Learn More
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle size={20} className="text-green-600" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle size={20} className="text-green-600" />
                <span>Setup in 5 minutes</span>
              </div>
            </div>
          </div>

          {/* Right Column - Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="h-3 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
              
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-900">brochure_v3.pdf</span>
                  <span className="text-xs text-gray-500">Analyzing...</span>
                </div>
                
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full w-4/5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-pulse"></div>
                </div>

                <div className="space-y-2">
                  <div className="text-sm font-medium text-gray-700">Issues Detected:</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 bg-red-50 text-red-700 rounded-lg text-sm font-medium">Missing fonts</span>
                    <span className="px-3 py-1.5 bg-yellow-50 text-yellow-700 rounded-lg text-sm font-medium">RGB images</span>
                    <span className="px-3 py-1.5 bg-orange-50 text-orange-700 rounded-lg text-sm font-medium">Bleed too small</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 space-y-3">
                  <div className="text-sm font-medium text-gray-700">AI Suggestions:</div>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">Embed missing fonts</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">Convert RGB → CMYK</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">Adjust bleed to 3mm</span>
                    </div>
                  </div>
                  
                  <button className="w-full py-2.5 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors mt-4">
                    Auto-Fix All Issues
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function Features() {
  const features = [
    {
      icon: <FileCheck size={32} />,
      title: "Auto Preflight",
      desc: "Detects bleed issues, missing fonts, RGB/CMYK mismatches, and low-res images instantly.",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: <Zap size={32} />,
      title: "Auto Correction",
      desc: "Auto-fix common issues so designers or operators don't need to intervene for every job.",
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: <Settings size={32} />,
      title: "Auto Optimization",
      desc: "Generate print-ready layouts and imposition to speed up press setup and reduce waste.",
      color: "bg-green-50 text-green-600"
    }
  ];

  return (
    <section id="features" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Why {BRAND}
          </h2>
          <p className="text-lg text-gray-600">
            Powerful AI features that transform your printing workflow
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className="group p-8 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl hover:shadow-2xl hover:border-gray-300 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className={`w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { num: "1", text: "Upload or auto-sync", desc: "Your PDF files from email or your intake system" },
    { num: "2", text: "AI analyzes", desc: "The file and finds prepress issues in seconds" },
    { num: "3", text: "Auto-fixes", desc: "Or suggests corrections with a one-click approve flow" },
    { num: "4", text: "Download", desc: "Print-ready output and send to press" }
  ];

  return (
    <section id="how" className="py-20 sm:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            How it Works
          </h2>
          <p className="text-lg text-gray-600">
            Four simple steps to error-free printing
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 text-white text-2xl font-bold rounded-full flex items-center justify-center shadow-lg">
                  {step.num}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{step.text}</h3>
              <p className="text-gray-600">{step.desc}</p>
              
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-transparent -translate-x-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Early Access Pricing
          </h2>
          <p className="text-lg text-gray-600">
            Limited-time offer for founding users
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Founding User Card */}
          <div className="relative p-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <div className="absolute top-4 right-4 px-3 py-1 bg-yellow-500 text-yellow-900 text-xs font-bold rounded-full">
              BEST VALUE
            </div>
            <h3 className="text-2xl font-bold mb-2">Founding User</h3>
            <div className="text-sm text-gray-300 mb-6">One-time payment</div>
            <div className="text-5xl font-extrabold mb-6">₹499</div>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Early access to the product with lifetime updates during beta. Lock in the lowest price forever.
            </p>
            <a 
              href={TEMP_FORM_LINK} 
              target="_blank" 
              rel="noreferrer" 
              className="block w-full text-center px-6 py-4 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
            >
              Buy Early Access
            </a>
          </div>

          {/* Monthly Plan Card */}
          <div className="p-8 bg-white border-2 border-gray-200 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Launch Promo</h3>
            <div className="text-sm text-gray-500 mb-6">Monthly subscription (coming soon)</div>
            <div className="text-5xl font-extrabold text-gray-900 mb-6">₹999<span className="text-xl font-normal text-gray-500">/mo</span></div>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Subscription plan launching soon with priority support and advanced features.
            </p>
            <a 
              href={TEMP_FORM_LINK} 
              target="_blank" 
              rel="noreferrer" 
              className="block w-full text-center px-6 py-4 border-2 border-gray-900 text-gray-900 font-bold rounded-xl hover:bg-gray-50 transition-colors"
            >
              Reserve a Spot
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

function EmailSignup() {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-blue-600 to-indigo-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
          Join our Early Access List
        </h2>
        <p className="text-xl text-blue-100 mb-10 leading-relaxed">
          We'll email you onboarding details and your access link after purchase.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href={TEMP_FORM_LINK} 
            target="_blank" 
            rel="noreferrer" 
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-bold rounded-xl shadow-xl hover:bg-gray-100 transition-colors"
          >
            Join the List
          </a>
          <a 
            href={TEMP_FORM_LINK} 
            target="_blank" 
            rel="noreferrer" 
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-blue-600 transition-colors"
          >
            Buy Early Access
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <div className="text-xl font-bold text-white mb-2">{BRAND}</div>
            <div className="text-sm">© {new Date().getFullYear()} All rights reserved</div>
          </div>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function ThankYou() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 px-4">
      <div className="max-w-lg w-full text-center space-y-6 bg-white p-12 rounded-2xl shadow-2xl">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle size={48} className="text-green-600" />
        </div>
        <h1 className="text-4xl font-extrabold text-gray-900">Thank You! 🎉</h1>
        <p className="text-lg text-gray-600">
          You're on the list! We've recorded your interest. Expect an email with next steps shortly.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-6">
          <a 
            href={TEMP_FORM_LINK} 
            target="_blank" 
            rel="noreferrer" 
            className="flex-1 px-6 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors"
          >
            Buy Early Access
          </a>
          <button 
            onClick={() => navigate('/')} 
            className="flex-1 px-6 py-3 border-2 border-gray-900 text-gray-900 font-semibold rounded-xl hover:bg-gray-50 transition-colors"
          >
            Back to Site
          </button>
        </div>
      </div>
    </div>
  );
}

function StaticPage({title}) {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-4xl mx-auto bg-white p-12 rounded-2xl shadow-lg">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">{title}</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          This is a placeholder {title}. Replace with your legal text before going live.
        </p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={(
          <main>
            <Hero />
            <Features />
            <HowItWorks />
            <Pricing />
            <EmailSignup />
            <Footer />
          </main>
        )} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/privacy" element={<StaticPage title="Privacy Policy"/>} />
        <Route path="/terms" element={<StaticPage title="Terms of Service"/>} />
      </Routes>
    </Router>
  );
}