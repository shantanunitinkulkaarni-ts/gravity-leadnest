"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function OnboardingFlow() {
  const [currentStep, setCurrentStep] = useState(0);
  const router = useRouter();

  const goStep = (n: number) => {
    if (n < 0 || n > 4) return;
    setCurrentStep(n);
  };

  const headers = [
    ['Create your account','Let\'s get you set up in under 5 minutes'],
    ['Your business details','Tell us about your agency'],
    ['Bot preferences','How should your assistant behave?'],
    ['Connect WhatsApp','Link your business number to go live'],
    ['You\'re live!','LeadNest is now active on your WhatsApp']
  ];
  const progVals = [20,40,60,80,100];

  const connectWA = () => {
    setTimeout(() => {
      goStep(4);
    }, 1400);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <div className="sidebar-bg"></div>
        <div className="sidebar-inner">
          <div className="logo-area">
            <div className="logo-mark">
              <div className="logo-dot">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              </div>
              <span className="logo-name">LeadNest</span>
            </div>
          </div>

          <div className="onboard-headline">Set up your<br/><em>lead machine</em></div>
          <div className="onboard-sub">5 quick steps and your WhatsApp starts working for you — automatically.</div>

          <div className="steps" id="steps-list">
            {[
              { title: 'Create your account', desc: 'Name, email and password' },
              { title: 'Business details', desc: 'Agency name, city, areas' },
              { title: 'Your preferences', desc: 'Property types, tone, hours' },
              { title: 'Connect WhatsApp', desc: 'Link your business number' },
              { title: 'Go live', desc: 'Your bot is ready' }
            ].map((s, i) => (
              <div key={i} className={`step-item ${i < currentStep ? 'done' : i === currentStep ? 'active' : ''}`} onClick={() => goStep(i)}>
                <div className={`step-number ${i < currentStep ? 'done' : i === currentStep ? 'active' : ''}`}>
                  {i < currentStep ? '✓' : i + 1}
                </div>
                <div className="step-text">
                  <div className="step-label">{s.title}</div>
                  <div className="step-desc">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <div className="progress-bar"><div className="progress-fill" style={{width: `${progVals[currentStep]}%`}}></div></div>
            <div className="progress-label"><span>Step {currentStep + 1} of 5</span><span>{progVals[currentStep]}%</span></div>
          </div>
        </div>
      </div>

      <div className="main">
        <div className="main-header">
          <div>
            <div className="main-header-title">{headers[currentStep][0]}</div>
            <div className="main-header-sub">{headers[currentStep][1]}</div>
          </div>
          <div className="header-right">
            {currentStep < 4 && <button className="skip-btn" onClick={() => goStep(currentStep + 1)}>Skip this step →</button>}
          </div>
        </div>

        <div className="main-content">

          {currentStep === 0 && (
            <div className="step-panel active">
              <div className="form-card">
                <div className="form-card-header">
                  <div className="form-card-icon" style={{background:'#EEF2FF'}}>👤</div>
                  <div>
                    <div className="form-card-title">Account details</div>
                    <div className="form-card-desc">You'll use these to log in to your LeadNest dashboard</div>
                  </div>
                </div>
                <div className="form-body">
                  <div className="field-row">
                    <div className="field">
                      <label className="field-label">First name</label>
                      <input className="field-input" type="text" placeholder="Rajesh" />
                    </div>
                    <div className="field">
                      <label className="field-label">Last name</label>
                      <input className="field-input" type="text" placeholder="Sharma" />
                    </div>
                  </div>
                  <div className="field">
                    <label className="field-label">Email address</label>
                    <input className="field-input" type="email" placeholder="rajesh@rajeshproperties.in" />
                  </div>
                  <div className="field">
                    <label className="field-label">Phone number</label>
                    <input className="field-input" type="tel" placeholder="+91 98765 43210" />
                  </div>
                  <div className="field">
                    <label className="field-label">Password</label>
                    <input className="field-input" type="password" placeholder="Create a strong password" />
                  </div>
                </div>
                <div className="form-footer">
                  <span style={{fontSize:'12px',color:'var(--ink-4)'}}>Already have an account? <span style={{color:'var(--green)',cursor:'pointer'}}>Sign in</span></span>
                  <button className="btn-next" onClick={() => goStep(1)}>
                    Continue
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </button>
                </div>
              </div>
            </div>
          )}

          {currentStep === 1 && (
            <div className="step-panel active">
              <div className="form-card">
                <div className="form-card-header">
                  <div className="form-card-icon" style={{background:'#E8F5EE'}}>🏢</div>
                  <div>
                    <div className="form-card-title">Your business</div>
                    <div className="form-card-desc">This helps the bot introduce itself correctly to your leads</div>
                  </div>
                </div>
                <div className="form-body">
                  <div className="field">
                    <label className="field-label">Agency / business name</label>
                    <input className="field-input" type="text" placeholder="Rajesh Properties" defaultValue="Rajesh Properties" />
                  </div>
                  <div className="field-row">
                    <div className="field">
                      <label className="field-label">City</label>
                      <input className="field-input" type="text" placeholder="Pune" defaultValue="Pune" />
                    </div>
                    <div className="field">
                      <label className="field-label">State</label>
                      <select className="field-select">
                        <option>Maharashtra</option>
                        <option>Karnataka</option>
                        <option>Gujarat</option>
                        <option>Delhi</option>
                        <option>Tamil Nadu</option>
                      </select>
                    </div>
                  </div>
                  <div className="field">
                    <label className="field-label">Areas you cover <span style={{color:'var(--ink-4)',fontWeight:400}}>(select all that apply)</span></label>
                    <div className="tag-select">
                      <span className="tag-opt sel">Baner</span>
                      <span className="tag-opt sel">Wakad</span>
                      <span className="tag-opt sel">Kothrud</span>
                      <span className="tag-opt">Aundh</span>
                      <span className="tag-opt">Hinjewadi</span>
                      <span className="tag-opt">Kalyani Nagar</span>
                      <span className="tag-opt">Koregaon Park</span>
                      <span className="tag-opt">+ Add area</span>
                    </div>
                  </div>
                  <div className="field">
                    <label className="field-label">Years in business</label>
                    <select className="field-select">
                      <option>Less than 1 year</option>
                      <option>1 – 3 years</option>
                      <option>3 – 5 years</option>
                      <option>5 – 10 years</option>
                      <option>10+ years</option>
                    </select>
                  </div>
                </div>
                <div className="form-footer">
                  <button className="btn-back" onClick={() => goStep(0)}>← Back</button>
                  <button className="btn-next" onClick={() => goStep(2)}>
                    Continue
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </button>
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="step-panel active">
              <div className="form-card">
                <div className="form-card-header">
                  <div className="form-card-icon" style={{background:'#FDF6EC'}}>⚙️</div>
                  <div>
                    <div className="form-card-title">Bot preferences</div>
                    <div className="form-card-desc">How should your AI assistant behave with your leads?</div>
                  </div>
                </div>
                <div className="form-body">
                  <div className="field">
                    <label className="field-label">Property types you deal in</label>
                    <div className="tag-select">
                      <span className="tag-opt sel">Residential sale</span>
                      <span className="tag-opt sel">Residential rental</span>
                      <span className="tag-opt">Commercial sale</span>
                      <span className="tag-opt">Commercial rental</span>
                      <span className="tag-opt">Plots</span>
                      <span className="tag-opt">New projects</span>
                    </div>
                  </div>
                  <div className="field">
                    <label className="field-label">Bot communication tone</label>
                    <div className="tone-grid">
                      <div className="tone-card">
                        <div className="tone-icon">🤝</div>
                        <div className="tone-name">Professional</div>
                        <div className="tone-desc">Formal and precise</div>
                      </div>
                      <div className="tone-card sel">
                        <div className="tone-icon">😊</div>
                        <div className="tone-name">Friendly</div>
                        <div className="tone-desc">Warm and approachable</div>
                      </div>
                      <div className="tone-card">
                        <div className="tone-icon">⚡</div>
                        <div className="tone-name">Concise</div>
                        <div className="tone-desc">Short and to the point</div>
                      </div>
                    </div>
                  </div>
                  <div className="field">
                    <label className="field-label">Bot language</label>
                    <div className="tag-select">
                      <span className="tag-opt sel">English</span>
                      <span className="tag-opt sel">Hindi</span>
                      <span className="tag-opt">Marathi</span>
                      <span className="tag-opt">Gujarati</span>
                      <span className="tag-opt">Auto-detect</span>
                    </div>
                  </div>
                  <div className="field-row">
                    <div className="field">
                      <label className="field-label">Office opens</label>
                      <select className="field-select">
                        <option>8:00 AM</option>
                        <option>9:00 AM</option>
                        <option>10:00 AM</option>
                      </select>
                    </div>
                    <div className="field">
                      <label className="field-label">Office closes</label>
                      <select className="field-select">
                        <option>6:00 PM</option>
                        <option>7:00 PM</option>
                        <option>8:00 PM</option>
                        <option>9:00 PM</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="form-footer">
                  <button className="btn-back" onClick={() => goStep(1)}>← Back</button>
                  <button className="btn-next" onClick={() => goStep(3)}>
                    Continue
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </button>
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="step-panel active">
              <div className="whatsapp-connect">
                <div style={{display:'flex',alignItems:'flex-start',gap:'14px',marginBottom:'20px',paddingBottom:'20px',borderBottom:'1px solid var(--border)'}}>
                  <div style={{width:'40px',height:'40px',borderRadius:'10px',background:'#E7F8EE',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  </div>
                  <div>
                    <div style={{fontSize:'15px',fontWeight:500,color:'var(--ink)',marginBottom:'3px'}}>Connect your WhatsApp number</div>
                    <div style={{fontSize:'12px',color:'var(--ink-3)',lineHeight:1.5}}>Your existing WhatsApp Business number connects in minutes. No new number needed.</div>
                  </div>
                </div>
                <div className="wa-steps">
                  <div className="wa-step">
                    <div className="wa-step-num">1</div>
                    <div className="wa-step-content">
                      <div className="wa-step-title">Open Facebook Business Manager</div>
                      <div className="wa-step-desc">Sign in to your Facebook account that manages your business page.</div>
                      <span className="wa-step-action">Open Business Manager →</span>
                    </div>
                  </div>
                  <div className="wa-step">
                    <div className="wa-step-num">2</div>
                    <div className="wa-step-content">
                      <div className="wa-step-title">Add your WhatsApp number</div>
                      <div className="wa-step-desc">Go to WhatsApp Accounts → Add number. Enter your existing business WhatsApp number.</div>
                    </div>
                  </div>
                  <div className="wa-step">
                    <div className="wa-step-num">3</div>
                    <div className="wa-step-content">
                      <div className="wa-step-title">Enter the 6-digit OTP</div>
                      <div className="wa-step-desc">Meta will send a verification code to your number via SMS or call.</div>
                    </div>
                  </div>
                  <div className="wa-step">
                    <div className="wa-step-num">4</div>
                    <div className="wa-step-content">
                      <div className="wa-step-title">Paste your verification token below</div>
                      <div className="wa-step-desc">Copy the access token from Business Manager and paste here to complete connection.</div>
                      <input className="field-input" style={{marginTop:'10px',background:'#fff'}} type="text" placeholder="Paste your access token here..." />
                    </div>
                  </div>
                </div>
                <div className="wa-number-display">
                  <div className="wa-number-icon">
                    <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  </div>
                  <div className="wa-number-text">
                    <div className="wa-number-label">Your WhatsApp number</div>
                    <div className="wa-number-val">+91 98765 43210</div>
                  </div>
                  <span className="wa-status">Pending</span>
                </div>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:'20px'}}>
                  <button className="btn-back" onClick={() => goStep(2)}>← Back</button>
                  <button className="btn-next" onClick={connectWA}>
                    Verify & connect
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </button>
                </div>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="step-panel active">
              <div className="complete-card">
                <div className="complete-icon">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <div className="complete-title">You're all set, Rajesh!</div>
                <div className="complete-sub">Your LeadNest bot is live on WhatsApp. Every new lead will be handled automatically from this moment.</div>
                <div className="complete-stats">
                  <div className="stat-box">
                    <div className="stat-val">5,000</div>
                    <div className="stat-label">Messages / month</div>
                  </div>
                  <div className="stat-box">
                    <div className="stat-val">24/7</div>
                    <div className="stat-label">Bot is active</div>
                  </div>
                  <div className="stat-box">
                    <div className="stat-val">₹0</div>
                    <div className="stat-label">Setup cost</div>
                  </div>
                </div>
                <div style={{background:'var(--cream)',borderRadius:'var(--radius-sm)',padding:'14px 16px',marginBottom:'20px',textAlign:'left'}}>
                  <div style={{fontSize:'12px',fontWeight:500,color:'var(--ink-2)',marginBottom:'8px'}}>What happens next</div>
                  <div style={{display:'flex',flexDirection:'column',gap:'6px'}}>
                    <div style={{fontSize:'12px',color:'var(--ink-3)',display:'flex',gap:'8px',alignItems:'flex-start'}}><span style={{color:'var(--green)',fontWeight:500,flexShrink:0}}>→</span> Add your first property listing to the dashboard</div>
                    <div style={{fontSize:'12px',color:'var(--ink-3)',display:'flex',gap:'8px',alignItems:'flex-start'}}><span style={{color:'var(--green)',fontWeight:500,flexShrink:0}}>→</span> Share your WhatsApp number with leads as usual</div>
                    <div style={{fontSize:'12px',color:'var(--ink-3)',display:'flex',gap:'8px',alignItems:'flex-start'}}><span style={{color:'var(--green)',fontWeight:500,flexShrink:0}}>→</span> LeadNest handles everything automatically</div>
                  </div>
                </div>
                <button className="btn-launch" onClick={() => router.push('/dashboard')}>
                  Open my dashboard
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
