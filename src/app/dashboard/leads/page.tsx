"use client";

import React, { useState } from "react";

export default function LeadsPage() {
  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <div className="screen active" id="screen-leads">
      <div className="leads-screen">
        <div className="screen-header">
          <div className="screen-title">Lead pipeline</div>
          <button className="add-btn" onClick={() => setShowAddModal(true)}>
            <svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            Add lead
          </button>
        </div>
        
        <div className="pipeline">
          <div className="pipe-col">
            <div className="pipe-header"><span className="pipe-label">New</span><span className="pipe-count">3</span></div>
            <div className="lcard"><div className="lcard-name">Rahul Kumar</div><div className="lcard-prop">3BHK · Baner</div><div className="lcard-foot"><span className="lcard-budget">₹90L</span><span className="lcard-score score-hi">9/10</span></div></div>
            <div className="lcard"><div className="lcard-name">Sunita Joshi</div><div className="lcard-prop">2BHK Rental · Kothrud</div><div className="lcard-foot"><span className="lcard-budget">₹18K/mo</span><span className="lcard-score score-mid">6/10</span></div></div>
            <div className="lcard"><div className="lcard-name">Vikram Nair</div><div className="lcard-prop">Plot · Hinjewadi</div><div className="lcard-foot"><span className="lcard-budget">₹40L</span><span className="lcard-score score-lo">5/10</span></div></div>
          </div>
          <div className="pipe-col">
            <div className="pipe-header"><span className="pipe-label">Qualified</span><span className="pipe-count">2</span></div>
            <div className="lcard"><div className="lcard-name">Priya Sharma</div><div className="lcard-prop">2BHK · Wakad</div><div className="lcard-foot"><span className="lcard-budget">₹65L</span><span className="lcard-score score-hi">8/10</span></div></div>
            <div className="lcard"><div className="lcard-name">Deepak Rao</div><div className="lcard-prop">3BHK · Aundh</div><div className="lcard-foot"><span className="lcard-budget">₹1.1Cr</span><span className="lcard-score score-mid">7/10</span></div></div>
          </div>
          <div className="pipe-col">
            <div className="pipe-header"><span className="pipe-label">Visit booked</span><span className="pipe-count">2</span></div>
            <div className="lcard"><div className="lcard-name">Anita Desai</div><div className="lcard-prop">4BHK · Koregaon Park</div><div className="lcard-foot"><span className="lcard-budget">₹2.2Cr</span><span className="lcard-score score-hi">9/10</span></div></div>
            <div className="lcard"><div className="lcard-name">Mohammed Iqbal</div><div className="lcard-prop">Shop · Hadapsar</div><div className="lcard-foot"><span className="lcard-budget">₹55L</span><span className="lcard-score score-hi">8/10</span></div></div>
          </div>
          <div className="pipe-col">
            <div className="pipe-header"><span className="pipe-label">Closed</span><span className="pipe-count">5</span></div>
            <div className="lcard"><div className="lcard-name" style={{color: 'var(--green)'}}>Kiran Patil ✓</div><div className="lcard-prop">2BHK · Baner — Won</div></div>
            <div className="lcard"><div className="lcard-name" style={{color: 'var(--ink-4)'}}>Ravi Gupta</div><div className="lcard-prop">Plot — Not interested</div></div>
          </div>
        </div>
      </div>

      {showAddModal && (
        <div style={{position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(26,25,22,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100}}>
          <div style={{background: '#fff', padding: '32px', borderRadius: 'var(--radius)', width: '400px', boxShadow: 'var(--shadow-lg)'}}>
            <h3 style={{marginTop: 0, marginBottom: '24px', fontSize: '20px', fontWeight: 500}}>Add New Lead</h3>
            
            <div style={{marginBottom: '16px'}}>
              <label style={{display: 'block', fontSize: '13px', fontWeight: 500, marginBottom: '6px', color: 'var(--ink-2)'}}>Full Name</label>
              <input type="text" className="search-bar" style={{width: '100%', height: '40px', background: 'var(--cream)', borderRadius: 'var(--radius-sm)'}} placeholder="e.g. Rahul Kumar" />
            </div>
            <div style={{marginBottom: '16px'}}>
              <label style={{display: 'block', fontSize: '13px', fontWeight: 500, marginBottom: '6px', color: 'var(--ink-2)'}}>Phone Number</label>
              <input type="tel" className="search-bar" style={{width: '100%', height: '40px', background: 'var(--cream)', borderRadius: 'var(--radius-sm)'}} placeholder="+91 98765 43210" />
            </div>
            
            <div style={{margin: '24px 0', borderTop: '1px solid var(--border)', position: 'relative', textAlign: 'center'}}>
              <span style={{background: '#fff', padding: '0 12px', fontSize: '12px', color: 'var(--ink-4)', position: 'relative', top: '-8px'}}>OR BULK UPLOAD</span>
            </div>
            
            <div style={{marginBottom: '24px'}}>
              <label style={{display: 'block', padding: '24px', border: '1px dashed var(--border-strong)', borderRadius: 'var(--radius-sm)', textAlign: 'center', background: 'var(--cream)', cursor: 'pointer'}}>
                <div style={{fontSize: '24px', marginBottom: '8px'}}>📄</div>
                <div style={{fontSize: '13px', fontWeight: 500, color: 'var(--ink-2)'}}>Upload CSV File</div>
                <div style={{fontSize: '11px', color: 'var(--ink-4)', marginTop: '4px'}}>Max size 5MB</div>
                <input type="file" accept=".csv" style={{display: 'none'}} />
              </label>
            </div>
            
            <div style={{display: 'flex', gap: '12px', justifyContent: 'flex-end'}}>
              <button onClick={() => setShowAddModal(false)} style={{padding: '10px 20px', borderRadius: 'var(--radius-sm)', background: 'transparent', border: '1px solid var(--border-strong)', color: 'var(--ink-2)', fontSize: '13px', fontWeight: 500, cursor: 'pointer'}}>Cancel</button>
              <button onClick={() => setShowAddModal(false)} style={{padding: '10px 20px', borderRadius: 'var(--radius-sm)', background: 'var(--ink)', border: 'none', color: '#fff', fontSize: '13px', fontWeight: 500, cursor: 'pointer'}}>Save Lead</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
