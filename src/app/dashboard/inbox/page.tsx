"use client";

import React, { useState } from "react";

const leadsData = [
  { id: 'rahul', name: 'Rahul Kumar', phone: '+91 98765 43210', av: 'RK', bg: '#FDF0F0', color: '#8B1A1A', score: '9/10', window: '⏱ 6h left', tag: 'Hot', tagClass: 'p-hot', preview: 'Can I see it this Saturday?', time: '2m' },
  { id: 'priya', name: 'Priya Sharma', phone: '+91 98765 43211', av: 'PS', bg: '#FEF9E7', color: '#7A5200', score: '8/10', window: '⏱ 14h left', tag: 'Warm', tagClass: 'p-warm', preview: 'What is the maintenance charge?', time: '18m' },
  { id: 'amit', name: 'Amit Mehta', phone: '+91 98765 43212', av: 'AM', bg: '#EEF4FC', color: '#0F3D6E', score: '5/10', window: '⏱ 20h left', tag: 'Cold', tagClass: 'p-cold', preview: 'Just exploring for now', time: '1h' },
  { id: 'sunita', name: 'Sunita Joshi', phone: '+91 98765 43213', av: 'SJ', bg: '#E8F5EE', color: '#0F4A2E', score: 'New', window: '⏱ 23h left', tag: 'New', tagClass: 'p-new', preview: 'Hi, interested in 2BHK rental', time: '3h' },
  { id: 'deepak', name: 'Deepak Rao', phone: '+91 98765 43214', av: 'DR', bg: '#EEEDFE', color: '#3C3489', score: '7/10', window: '⏱ 12h left', tag: 'Warm', tagClass: 'p-warm', preview: 'Send me the floor plan', time: '5h' }
];

export default function InboxPage() {
  const [activeTab, setActiveTab] = useState('chat');
  const [isManual, setIsManual] = useState(false);
  const [activeLeadId, setActiveLeadId] = useState('rahul');
  
  const activeLead = leadsData.find(l => l.id === activeLeadId) || leadsData[0];

  return (
    <div className="screen-inbox" id="screen-inbox">
      <div className="inbox-list">
        <div className="inbox-header">
          <div className="inbox-title">Conversations</div>
          <div className="filter-tabs">
            <span className="ftab on">All</span>
            <span className="ftab">Hot</span>
            <span className="ftab">Unread</span>
          </div>
        </div>
        <div className="inbox-scroll">
          {leadsData.map(lead => (
            <div 
              key={lead.id}
              className={`conv ${activeLeadId === lead.id ? 'sel' : ''}`} 
              onClick={() => setActiveLeadId(lead.id)}
            >
              <div className="conv-av" style={{background: lead.bg, color: lead.color}}>{lead.av}</div>
              <div className="conv-body">
                <div className="conv-name">{lead.name}</div>
                <div className="conv-preview">{lead.preview}</div>
              </div>
              <div className="conv-meta">
                <span className="conv-time">{lead.time}</span>
                <span className={`pill ${lead.tagClass}`}>{lead.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="detail">
        <div className="detail-header" id="detail-header">
          <div className="d-av" style={{background: activeLead.bg, color: activeLead.color}}>{activeLead.av}</div>
          <div>
            <div className="d-name">{activeLead.name}</div>
            <div className="d-phone">{activeLead.phone}</div>
          </div>
          <div className="d-header-right">
            <span className="score-badge" style={{background: activeLead.bg, color: activeLead.color}}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> 
              {activeLead.score}
            </span>
            <span className="window-tag wt-ok">{activeLead.window}</span>
            <div className="d-actions">
              {isManual ? (
                <button className="da-btn" onClick={() => setIsManual(false)}>Resume bot</button>
              ) : (
                <button className="da-btn da-btn-danger" onClick={() => setIsManual(true)}>Take over</button>
              )}
              <button className="da-btn da-btn-primary">Book visit</button>
            </div>
          </div>
        </div>

        {isManual && (
          <div className="manual-bar">
            <svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            You are in manual mode — bot is paused on this conversation
            <button className="da-btn" style={{marginLeft: 'auto', fontSize: '11px'}} onClick={() => setIsManual(false)}>Resume bot</button>
          </div>
        )}

        <div className="detail-tabs">
          <div className={`dtab ${activeTab === 'chat' ? 'on' : ''}`} onClick={() => setActiveTab('chat')}>Chat</div>
          <div className={`dtab ${activeTab === 'profile' ? 'on' : ''}`} onClick={() => setActiveTab('profile')}>Profile</div>
          <div className={`dtab ${activeTab === 'matched' ? 'on' : ''}`} onClick={() => setActiveTab('matched')}>Matched properties</div>
          <div className={`dtab ${activeTab === 'activity' ? 'on' : ''}`} onClick={() => setActiveTab('activity')}>Activity</div>
        </div>

        {activeTab === 'chat' && (
          <div className="dpane on">
            <div className="chat-messages">
              <div className="msg out">
                <div className="msg-from">
                  <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>LeadNest bot
                </div>
                <div className="msg-bubble">Hello! Welcome to Rajesh Properties. Are you looking to Buy or Rent?</div>
                <div className="msg-time">10:02 AM</div>
              </div>
              <div className="msg in"><div className="msg-bubble">Buy. Looking for 3BHK in Baner</div><div className="msg-time">10:03 AM</div></div>
              <div className="msg out">
                <div className="msg-from"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>LeadNest bot</div>
                <div className="msg-bubble">Great! What is your approximate budget?</div>
                <div className="msg-time">10:03 AM</div>
              </div>
              <div className="msg in"><div className="msg-bubble">Around 90 lakhs, flexible by 5-10L</div><div className="msg-time">10:05 AM</div></div>
              <div className="msg out">
                <div className="msg-from"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>LeadNest bot</div>
                <div className="msg-bubble">I have a beautiful east-facing 3BHK in Baner at ₹88L — 1,450 sqft with covered parking. Shall I share the details and photos?</div>
                <div className="msg-time">10:05 AM</div>
              </div>
              <div className="msg in"><div className="msg-bubble">Yes please! Can I see it this Saturday?</div><div className="msg-time">10:08 AM</div></div>
              <div className="msg out">
                <div className="msg-from"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>LeadNest bot</div>
                <div className="msg-bubble">Absolutely! What works best — morning or afternoon?</div>
                <div className="msg-time">10:08 AM</div>
              </div>
            </div>
            <div className="chat-input">
              <input type="text" placeholder={isManual ? "Type a message..." : "Type a message (take over to reply)..."} disabled={!isManual} />
              <button className="send-btn">
                <svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              </button>
            </div>
          </div>
        )}

        {activeTab === 'profile' && (
          <div className="dpane on">
            <div className="profile-grid">
              <div className="prow"><span className="pk">Looking for</span><span className="pv">Buy — 3BHK</span></div>
              <div className="prow"><span className="pk">Areas preferred</span><span className="pv">Baner, Wakad</span></div>
              <div className="prow"><span className="pk">Budget</span><span className="pv">₹85L – ₹1Cr</span></div>
              <div className="prow"><span className="pk">Timeline</span><span className="pv">Within 3 months</span></div>
              <div className="prow"><span className="pk">Family size</span><span className="pv">4 members</span></div>
              <div className="prow"><span className="pk">Parking needed</span><span className="pv">Yes — 1 covered</span></div>
              <div className="prow"><span className="pk">Lead source</span><span className="pv">WhatsApp inbound</span></div>
              <div className="prow"><span className="pk">First contact</span><span className="pv">25 May 2026</span></div>
              <div className="prow full"><span className="pk">AI lead score</span><span className="pv" style={{color: 'var(--red)'}}>{activeLead.score} — Hot lead</span></div>
            </div>
          </div>
        )}

        {activeTab === 'matched' && (
          <div className="dpane on">
            <div className="match-list">
              <div className="mp-card">
                <div className="mp-icon" style={{background: 'var(--blue-light)'}}>🏢</div>
                <div className="mp-info"><div className="mp-name">3BHK Apartment — Baner</div><div className="mp-detail">1,450 sqft · East facing · Covered parking</div></div>
                <div style={{textAlign: 'right'}}><div className="mp-price">₹88L</div><span className="mp-badge" style={{background: 'var(--green-light)', color: 'var(--green)'}}>Best match</span></div>
              </div>
              <div className="mp-card">
                <div className="mp-icon" style={{background: 'var(--green-light)'}}>🏠</div>
                <div className="mp-info"><div className="mp-name">3BHK Villa — Wakad</div><div className="mp-detail">1,800 sqft · Private garden · 2 parking</div></div>
                <div style={{textAlign: 'right'}}><div className="mp-price">₹95L</div></div>
              </div>
              <div className="mp-card">
                <div className="mp-icon" style={{background: 'var(--gold-light)'}}>🏗</div>
                <div className="mp-info"><div className="mp-name">3BHK Flat — Aundh</div><div className="mp-detail">1,320 sqft · Gym + pool · New building</div></div>
                <div style={{textAlign: 'right'}}><div className="mp-price">₹92L</div></div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'activity' && (
          <div className="dpane on">
            <div className="tl">
              <div className="tl-item"><div className="tl-icon" style={{background: 'var(--red-light)', borderColor: 'rgba(192,57,43,0.2)'}}><svg viewBox="0 0 24 24" stroke="var(--red)"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div><div><div className="tl-title">Marked as hot lead — AI score {activeLead.score}</div><div className="tl-sub">Today, 10:08 AM</div></div></div>
              <div className="tl-item"><div className="tl-icon" style={{background: 'var(--green-light)', borderColor: 'rgba(46,139,95,0.2)'}}><svg viewBox="0 0 24 24" stroke="var(--green)"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg></div><div><div className="tl-title">Site visit requested for Saturday</div><div className="tl-sub">Today, 10:08 AM</div></div></div>
              <div className="tl-item"><div className="tl-icon" style={{background: 'var(--blue-light)', borderColor: 'rgba(26,95,165,0.2)'}}><svg viewBox="0 0 24 24" stroke="var(--blue)"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg></div><div><div className="tl-title">Property match shared — 3BHK Baner</div><div className="tl-sub">Today, 10:05 AM</div></div></div>
              <div className="tl-item"><div className="tl-icon"><svg viewBox="0 0 24 24" stroke="var(--ink-3)"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg></div><div><div className="tl-title">Discovery completed — budget, area, timeline captured</div><div className="tl-sub">Today, 10:05 AM</div></div></div>
              <div className="tl-item"><div className="tl-icon"><svg viewBox="0 0 24 24" stroke="var(--ink-3)"><path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg></div><div><div className="tl-title">Lead created — first message received</div><div className="tl-sub">Today, 10:02 AM</div></div></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
