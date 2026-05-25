export default function BalancePage() {
  return (
    <div className="balance-screen">
      <div className="screen-header">
        <div className="screen-title">WhatsApp balance</div>
      </div>
      <div className="bal-hero">
        <div className="bal-sub">Available balance</div>
        <div className="bal-amount">₹342</div>
        <div style={{ fontSize: '12px', color: 'var(--ink-4)', marginTop: '6px' }}>
          Used for outbound template messages · Meta charges deducted automatically
        </div>
        <div className="topup-row">
          <div className="topup-btn">+ ₹100</div>
          <div className="topup-btn">+ ₹500</div>
          <div className="topup-btn">+ ₹1,000</div>
        </div>
      </div>
      <div className="txn-card">
        <div className="dc-title" style={{ marginBottom: '12px' }}>Transaction history</div>
        <div className="txn-row"><span className="txn-desc">Top-up via UPI</span><span className="txn-date">24 May</span><span className="txn-credit">+ ₹500</span></div>
        <div className="txn-row"><span className="txn-desc">Appointment reminder — Rahul Kumar</span><span className="txn-date">23 May</span><span className="txn-debit">− ₹0.32</span></div>
        <div className="txn-row"><span className="txn-desc">Nurture follow-up — 8 leads</span><span className="txn-date">22 May</span><span className="txn-debit">− ₹6.16</span></div>
        <div className="txn-row"><span className="txn-desc">Re-engagement — 12 cold leads</span><span className="txn-date">20 May</span><span className="txn-debit">− ₹9.24</span></div>
        <div className="txn-row"><span className="txn-desc">Top-up via UPI</span><span className="txn-date">15 May</span><span className="txn-credit">+ ₹200</span></div>
      </div>
    </div>
  );
}
