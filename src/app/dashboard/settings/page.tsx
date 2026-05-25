export default function SettingsPage() {
  return (
    <div className="settings-screen">
      <div className="screen-header">
        <div className="screen-title">Settings</div>
      </div>
      <div className="settings-card">
        <div className="settings-title">Business details</div>
        <div className="srow"><span className="skey">Agency name</span><span className="sval">Rajesh Properties</span><span className="s-edit">Edit</span></div>
        <div className="srow"><span className="skey">City</span><span className="sval">Pune, Maharashtra</span><span className="s-edit">Edit</span></div>
        <div className="srow"><span className="skey">Areas covered</span><span className="sval">Baner, Wakad, Kothrud</span><span className="s-edit">Edit</span></div>
        <div className="srow"><span className="skey">Bot tone</span><span className="sval">Friendly</span><span className="s-edit">Edit</span></div>
        <div className="srow"><span className="skey">Office hours</span><span className="sval">9:00 AM – 7:00 PM</span><span className="s-edit">Edit</span></div>
        <div className="srow"><span className="skey">Language</span><span className="sval">English + Hindi + Marathi</span><span className="s-edit">Edit</span></div>
      </div>
      <div className="settings-card">
        <div className="settings-title">Bot controls</div>
        <div className="srow"><span className="skey">Bot active</span><span className="sval" style={{ color: 'var(--green)' }}>Running on WhatsApp</span><label className="toggle"><input type="checkbox" defaultChecked /><span className="tslider"></span></label></div>
        <div className="srow"><span className="skey">23h window keep-alive</span><span className="sval">Auto re-engage before window closes</span><label className="toggle"><input type="checkbox" defaultChecked /><span className="tslider"></span></label></div>
        <div className="srow"><span className="skey">Low balance alerts</span><span className="sval">Notify at ₹50 remaining</span><label className="toggle"><input type="checkbox" defaultChecked /><span className="tslider"></span></label></div>
        <div className="srow"><span className="skey">Post-visit prompts</span><span className="sval">Ask agent after each site visit</span><label className="toggle"><input type="checkbox" defaultChecked /><span className="tslider"></span></label></div>
      </div>
      <div className="settings-card">
        <div className="settings-title">Subscription</div>
        <div className="srow"><span className="skey">Plan</span><span className="sval">Monthly — ₹999 / month</span><span className="s-edit">Upgrade to annual</span></div>
        <div className="srow"><span className="skey">Next billing</span><span className="sval">25 Jun 2026</span></div>
        <div className="srow"><span className="skey">Message usage</span><span className="sval">3,241 / 5,000 this month</span><span className="s-edit">Buy add-on</span></div>
        <div className="srow"><span className="skey">WhatsApp number</span><span className="sval" style={{ color: 'var(--green)' }}>+91 98765 43210 — Connected</span><span className="s-edit">Reconnect</span></div>
      </div>
    </div>
  );
}
