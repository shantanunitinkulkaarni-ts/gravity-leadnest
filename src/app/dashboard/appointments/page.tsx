export default function AppointmentsPage() {
  return (
    <div className="appts-screen">
      <div className="screen-header">
        <div className="screen-title">Appointments</div>
        <div style={{ display: 'flex', gap: '6px' }}>
          <button className="da-btn" style={{ fontSize: '11px' }}>Upcoming</button>
          <button className="da-btn" style={{ fontSize: '11px' }}>All</button>
        </div>
      </div>
      
      <div className="appt-card">
        <div className="appt-date-box" style={{ background: 'var(--green-light)', borderColor: 'rgba(46,139,95,0.2)' }}>
          <div className="adb-day" style={{ color: 'var(--green)' }}>28</div>
          <div className="adb-month" style={{ color: 'var(--green)' }}>May</div>
        </div>
        <div className="appt-info">
          <div className="appt-name">Rahul Kumar</div>
          <div className="appt-prop">3BHK Apartment — Baner, Pune</div>
          <div className="appt-time">
            <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            11:00 AM · +91 98765 43210
          </div>
        </div>
        <span className="appt-status as-upcoming">Upcoming</span>
      </div>

      <div className="appt-card">
        <div className="appt-date-box" style={{ background: 'var(--amber-light)', borderColor: 'rgba(183,119,13,0.2)' }}>
          <div className="adb-day" style={{ color: 'var(--amber)' }}>26</div>
          <div className="adb-month" style={{ color: 'var(--amber)' }}>May</div>
        </div>
        <div className="appt-info">
          <div className="appt-name">Anita Desai</div>
          <div className="appt-prop">4BHK — Koregaon Park, Pune</div>
          <div className="appt-time">
            <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            3:00 PM · Result pending
          </div>
        </div>
        <span className="appt-status as-pending">Awaiting update</span>
      </div>

      <div className="appt-card">
        <div className="appt-date-box">
          <div className="adb-day">22</div>
          <div className="adb-month">May</div>
        </div>
        <div className="appt-info">
          <div className="appt-name">Mohammed Iqbal</div>
          <div className="appt-prop">Commercial Shop — Hadapsar, Pune</div>
          <div className="appt-time">
            <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            10:00 AM
          </div>
        </div>
        <span className="appt-status as-done">Done</span>
      </div>
    </div>
  );
}
