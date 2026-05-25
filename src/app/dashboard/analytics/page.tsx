export default function AnalyticsPage() {
  return (
    <div className="analytics-screen">
      <div className="screen-header">
        <div className="screen-title">Analytics</div>
      </div>
      <div className="an-metrics">
        <div className="metric-card mc-green">
          <div className="metric-label">Conversion rate</div>
          <div className="metric-val">6.4%</div>
          <div className="metric-change mc-up">Leads → visits</div>
        </div>
        <div className="metric-card mc-blue">
          <div className="metric-label">Avg response time</div>
          <div className="metric-val">4s</div>
          <div className="metric-change" style={{ color: 'var(--ink-4)' }}>Bot handled</div>
        </div>
        <div className="metric-card mc-amber">
          <div className="metric-label">Bot takeovers</div>
          <div className="metric-val">6%</div>
          <div className="metric-change" style={{ color: 'var(--ink-4)' }}>Manual override</div>
        </div>
      </div>
      <div className="dash-two">
        <div className="dash-card">
          <div className="dc-title">Lead sources</div>
          <div className="bar-row-d">
            <span className="bar-label-d">WA inbound</span>
            <div className="bar-track-d">
              <div className="bar-fill-d" style={{ width: '72%', background: '#1A5FA5' }}></div>
            </div>
            <span className="bar-val-d">34</span>
          </div>
          <div className="bar-row-d">
            <span className="bar-label-d">Referral</span>
            <div className="bar-track-d">
              <div className="bar-fill-d" style={{ width: '19%', background: '#2E8B5F' }}></div>
            </div>
            <span className="bar-val-d">9</span>
          </div>
          <div className="bar-row-d">
            <span className="bar-label-d">Manual</span>
            <div className="bar-track-d">
              <div className="bar-fill-d" style={{ width: '9%', background: '#B7770D' }}></div>
            </div>
            <span className="bar-val-d">4</span>
          </div>
        </div>
        <div className="dash-card">
          <div className="dc-title">Intent breakdown</div>
          <div className="bar-row-d">
            <span className="bar-label-d">Buy</span>
            <div className="bar-track-d">
              <div className="bar-fill-d" style={{ width: '68%', background: '#1A5FA5' }}></div>
            </div>
            <span className="bar-val-d">32</span>
          </div>
          <div className="bar-row-d">
            <span className="bar-label-d">Rent</span>
            <div className="bar-track-d">
              <div className="bar-fill-d" style={{ width: '32%', background: '#2E8B5F' }}></div>
            </div>
            <span className="bar-val-d">15</span>
          </div>
        </div>
      </div>
    </div>
  );
}
