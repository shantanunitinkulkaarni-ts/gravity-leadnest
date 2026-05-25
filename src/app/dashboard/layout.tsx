"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/dashboard' && pathname === '/dashboard') return 'active';
    if (path !== '/dashboard' && pathname.startsWith(path)) return 'active';
    return '';
  };

  return (
    <div className="app">
      {/* SIDEBAR */}
      <div className="sidebar">
        <div className="sb-glow"></div><div className="sb-glow2"></div>
        <div className="sb-inner">
          <div className="sb-logo">
            <div className="logo-wrap">
              <div className="logo-icon"><svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></div>
              <span className="logo-text">LeadNest</span>
            </div>
          </div>
          <div className="sb-agent">
            <div className="agent-row">
              <div className="agent-av">RS</div>
              <div>
                <div className="agent-name">Rajesh Sharma</div>
                <div className="agent-agency">Rajesh Properties, Pune</div>
              </div>
            </div>
            <div className="bot-pill">
              <div className="bot-dot" id="bot-dot"></div>
              <span className="bot-pill-text" id="bot-text">Bot active</span>
            </div>
          </div>
          <div className="sb-nav">
            <div className="nav-section-label">Main</div>
            <Link href="/dashboard" className={`nav-item ${isActive('/dashboard')}`}>
              <svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
              Overview
            </Link>
            <Link href="/dashboard/inbox" className={`nav-item ${isActive('/dashboard/inbox')}`}>
              <svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
              Inbox
              <span className="nav-badge">4</span>
            </Link>
            <Link href="/dashboard/leads" className={`nav-item ${isActive('/dashboard/leads')}`}>
              <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
              Leads
              <span className="nav-badge-green">47</span>
            </Link>
            <Link href="/dashboard/properties" className={`nav-item ${isActive('/dashboard/properties')}`}>
              <svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              Properties
            </Link>
            <Link href="/dashboard/appointments" className={`nav-item ${isActive('/dashboard/appointments')}`}>
              <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              Appointments
            </Link>
            
            <div className="nav-section-label">Reports</div>
            <Link href="/dashboard/analytics" className={`nav-item ${isActive('/dashboard/analytics')}`}>
              <svg viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
              Analytics
            </Link>
            
            <div className="nav-section-label">Account</div>
            <Link href="/dashboard/balance" className={`nav-item ${isActive('/dashboard/balance')}`}>
              <svg viewBox="0 0 24 24"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
              WA Balance
            </Link>
            <Link href="/dashboard/settings" className={`nav-item ${isActive('/dashboard/settings')}`}>
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>
              Settings
            </Link>
          </div>
          <div className="sb-bottom">
            <div className="balance-row">
              <span className="bal-label">WA balance</span>
              <span className="bal-val">₹342</span>
            </div>
            <div className="bal-track"><div className="bal-fill" style={{width: '68%'}}></div></div>
          </div>
        </div>
      </div>

      {/* MAIN */}
      <div className="main">
        <div className="topbar">
          <div className="topbar-left">
            <div>
              <div className="page-title" id="page-title">Overview</div>
            </div>
          </div>
          <div className="topbar-right">
            <div className="search-bar">
              <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <input type="text" placeholder="Search leads..." />
            </div>
            <div className="tb-divider"></div>
            <div className="tb-btn">
              <svg viewBox="0 0 24 24"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"/></svg>
              <div className="notif-dot"></div>
            </div>
            <div className="tb-btn">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 10-16 0"/></svg>
            </div>
          </div>
        </div>

        <div className="content">
          {children}
        </div>
      </div>
    </div>
  );
}
