"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function DashboardOverview() {
  const router = useRouter();

  return (
    <div className="screen active" id="screen-dashboard">
      <div className="dash-metrics">
        <div className="metric-card mc-green">
          <div className="metric-icon" style={{background: 'var(--green-light)'}}>
            <svg viewBox="0 0 24 24" stroke="var(--green)"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
          </div>
          <div className="metric-label">Total leads</div>
          <div className="metric-val">47</div>
          <div className="metric-change mc-up">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 15l-6-6-6 6"/></svg> +12 this week
          </div>
        </div>
        <div className="metric-card mc-red">
          <div className="metric-icon" style={{background: 'var(--red-light)'}}>
            <svg viewBox="0 0 24 24" stroke="var(--red)"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          </div>
          <div className="metric-label">Hot leads</div>
          <div className="metric-val">12</div>
          <div className="metric-change mc-up">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 15l-6-6-6 6"/></svg> +3 today
          </div>
        </div>
        <div className="metric-card mc-blue">
          <div className="metric-icon" style={{background: 'var(--blue-light)'}}>
            <svg viewBox="0 0 24 24" stroke="var(--blue)"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          </div>
          <div className="metric-label">Site visits booked</div>
          <div className="metric-val">8</div>
          <div className="metric-change mc-up">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 15l-6-6-6 6"/></svg> +2 this week
          </div>
        </div>
        <div className="metric-card mc-amber">
          <div className="metric-icon" style={{background: 'var(--gold-light)'}}>
            <svg viewBox="0 0 24 24" stroke="var(--gold)"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>
          </div>
          <div className="metric-label">Bot handled</div>
          <div className="metric-val">94%</div>
          <div className="metric-change" style={{color: 'var(--ink-4)'}}>of all conversations</div>
        </div>
      </div>

      <div className="dash-two">
        <div className="dash-card">
          <div className="dc-title">Recent hot leads</div>
          <div className="lead-row" onClick={() => router.push('/dashboard/inbox')} style={{cursor: 'pointer'}}>
            <div className="lr-av" style={{background: '#FDF0F0', color: '#8B1A1A'}}>RK</div>
            <div className="lr-info"><div className="lr-name">Rahul Kumar</div><div className="lr-prop">3BHK · Baner · ₹90L</div></div>
            <div className="lr-right"><div className="lr-score" style={{color: 'var(--red)'}}>9/10</div><div className="lr-time">2m ago</div></div>
          </div>
          <div className="lead-row">
            <div className="lr-av" style={{background: '#EEF4FC', color: '#0F3D6E'}}>AD</div>
            <div className="lr-info"><div className="lr-name">Anita Desai</div><div className="lr-prop">4BHK · Koregaon Park · ₹2.2Cr</div></div>
            <div className="lr-right"><div className="lr-score" style={{color: 'var(--red)'}}>9/10</div><div className="lr-time">1h ago</div></div>
          </div>
          <div className="lead-row">
            <div className="lr-av" style={{background: '#E8F5EE', color: '#0F4A2E'}}>PS</div>
            <div className="lr-info"><div className="lr-name">Priya Sharma</div><div className="lr-prop">2BHK · Wakad · ₹65L</div></div>
            <div className="lr-right"><div className="lr-score" style={{color: 'var(--amber)'}}>8/10</div><div className="lr-time">18m ago</div></div>
          </div>
          <div className="lead-row">
            <div className="lr-av" style={{background: '#FEF9E7', color: '#7A5200'}}>DR</div>
            <div className="lr-info"><div className="lr-name">Deepak Rao</div><div className="lr-prop">3BHK · Aundh · ₹1.1Cr</div></div>
            <div className="lr-right"><div className="lr-score" style={{color: 'var(--amber)'}}>7/10</div><div className="lr-time">5h ago</div></div>
          </div>
        </div>
        <div className="dash-card">
          <div className="dc-title">Lead breakdown</div>
          <div className="bar-row-d"><span className="bar-label-d">Hot</span><div className="bar-track-d"><div className="bar-fill-d" style={{width: '26%', background: '#E74C3C'}}></div></div><span className="bar-val-d">12</span></div>
          <div className="bar-row-d"><span className="bar-label-d">Warm</span><div className="bar-track-d"><div className="bar-fill-d" style={{width: '45%', background: '#E9A530'}}></div></div><span className="bar-val-d">21</span></div>
          <div className="bar-row-d"><span className="bar-label-d">Cold</span><div className="bar-track-d"><div className="bar-fill-d" style={{width: '30%', background: '#3B82F6'}}></div></div><span className="bar-val-d">14</span></div>
          <div style={{marginTop: '16px'}}>
            <div className="dc-title">Message usage</div>
            <div className="usage-block">
              <div className="ub-row"><span className="ub-label">Messages used</span><span className="ub-val">3,241 / 5,000</span></div>
              <div className="ub-track"><div className="ub-fill" style={{width: '65%'}}></div></div>
              <div className="ub-row"><span className="ub-label">WA balance used</span><span className="ub-val">₹158 / ₹500</span></div>
              <div className="ub-track"><div className="ub-fill ub-fill-g" style={{width: '32%'}}></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
