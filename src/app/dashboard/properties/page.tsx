"use client";

import React, { useState } from "react";

export default function PropertiesPage() {
  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <div className="screen active" id="screen-properties">
      <div className="props-screen">
        <div className="screen-header">
          <div className="screen-title">Properties</div>
          <button className="add-btn" onClick={() => setShowAddModal(true)}>
            <svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            Add property
          </button>
        </div>
        <div className="prop-grid">
          <div className="prop-card">
            <div className="prop-thumb" style={{background: '#EEF4FC'}}>
              <span>🏢</span><span className="prop-status-tag pst-active">Active</span>
            </div>
            <div className="prop-body">
              <div className="prop-title">3BHK Apartment — Baner</div>
              <div className="prop-loc">Baner, Pune</div>
              <div className="prop-price">₹88,00,000</div>
              <div className="prop-tags"><span className="prop-tag">Sale</span><span className="prop-tag">1,450 sqft</span><span className="prop-tag">East</span></div>
            </div>
          </div>
          <div className="prop-card">
            <div className="prop-thumb" style={{background: '#E8F5EE'}}>
              <span>🏠</span><span className="prop-status-tag pst-active">Active</span>
            </div>
            <div className="prop-body">
              <div className="prop-title">2BHK Flat — Wakad</div>
              <div className="prop-loc">Wakad, Pune</div>
              <div className="prop-price">₹62,00,000</div>
              <div className="prop-tags"><span className="prop-tag">Sale</span><span className="prop-tag">1,100 sqft</span><span className="prop-tag">2 Parking</span></div>
            </div>
          </div>
          <div className="prop-card">
            <div className="prop-thumb" style={{background: '#FEF9E7'}}>
              <span>🚪</span><span className="prop-status-tag pst-active">Active</span>
            </div>
            <div className="prop-body">
              <div className="prop-title">2BHK Rental — Kothrud</div>
              <div className="prop-loc">Kothrud, Pune</div>
              <div className="prop-price">₹22,000 / month</div>
              <div className="prop-tags"><span className="prop-tag">Rental</span><span className="prop-tag">Semi-furnished</span></div>
            </div>
          </div>
          <div className="prop-card" style={{opacity: 0.6}}>
            <div className="prop-thumb" style={{background: 'var(--cream-2)'}}>
              <span>🗺</span><span className="prop-status-tag pst-sold">Sold</span>
            </div>
            <div className="prop-body">
              <div className="prop-title">Residential Plot — Hinjewadi</div>
              <div className="prop-loc">Hinjewadi, Pune</div>
              <div className="prop-price" style={{color: 'var(--ink-4)'}}>₹45,00,000</div>
              <div className="prop-tags"><span className="prop-tag">Sale</span><span className="prop-tag">1,800 sqft</span></div>
            </div>
          </div>
        </div>
      </div>

      {showAddModal && (
        <div style={{position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(26,25,22,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100}}>
          <div style={{background: '#fff', padding: '32px', borderRadius: 'var(--radius)', width: '400px', boxShadow: 'var(--shadow-lg)'}}>
            <h3 style={{marginTop: 0, marginBottom: '24px', fontSize: '20px', fontWeight: 500}}>Add New Property</h3>
            
            <div style={{marginBottom: '16px'}}>
              <label style={{display: 'block', fontSize: '13px', fontWeight: 500, marginBottom: '6px', color: 'var(--ink-2)'}}>Property Title</label>
              <input type="text" className="search-bar" style={{width: '100%', height: '40px', background: 'var(--cream)', borderRadius: 'var(--radius-sm)'}} placeholder="e.g. 3BHK Apartment — Baner" />
            </div>
            <div style={{marginBottom: '16px'}}>
              <label style={{display: 'block', fontSize: '13px', fontWeight: 500, marginBottom: '6px', color: 'var(--ink-2)'}}>Price / Rent</label>
              <input type="text" className="search-bar" style={{width: '100%', height: '40px', background: 'var(--cream)', borderRadius: 'var(--radius-sm)'}} placeholder="e.g. ₹88,00,000" />
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
              <button onClick={() => setShowAddModal(false)} style={{padding: '10px 20px', borderRadius: 'var(--radius-sm)', background: 'var(--ink)', border: 'none', color: '#fff', fontSize: '13px', fontWeight: 500, cursor: 'pointer'}}>Save Property</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
