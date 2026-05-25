import Image from "next/image";

export default function Home() {
  return (
    <main className="container animate-fade-in" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', padding: '60px 24px' }}>
      
      {/* Navbar Placeholder */}
      <header className="flex-between" style={{ marginBottom: '80px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '40px', height: '40px', background: 'var(--accent-gradient)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          </div>
          <h1 style={{ fontSize: '1.5rem', margin: 0 }}>LeadNest</h1>
        </div>
        <div style={{ display: 'flex', gap: '16px' }}>
          <button className="btn-secondary">Log In</button>
          <button className="btn-primary">Get Started</button>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h1 style={{ fontSize: '4rem', marginBottom: '24px', letterSpacing: '-0.02em' }}>
          AI-Powered <span className="text-gradient">WhatsApp</span> Lead Nurturing
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px auto' }}>
          The smart CRM built exclusively for Indian real estate agents. Automate responses, qualify leads, and book site visits without lifting a finger.
        </p>
        
        <div className="flex-center" style={{ gap: '24px' }}>
          <button className="btn-primary" style={{ padding: '16px 32px', fontSize: '1.125rem' }}>
            Start Your Free Trial
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </button>
        </div>
      </section>

      {/* Features Cards */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginTop: '80px' }}>
        <div className="glass-card" style={{ padding: '32px' }}>
          <div style={{ width: '48px', height: '48px', background: 'rgba(79, 70, 229, 0.1)', color: 'var(--accent-primary)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
          </div>
          <h3 style={{ marginBottom: '12px', fontSize: '1.25rem' }}>Instant Replies</h3>
          <p style={{ color: 'var(--text-muted)' }}>Bot responds to incoming leads in seconds, ensuring no buyer goes cold.</p>
        </div>
        
        <div className="glass-card" style={{ padding: '32px' }}>
          <div style={{ width: '48px', height: '48px', background: 'rgba(236, 72, 153, 0.1)', color: 'var(--accent-secondary)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20v-6M6 20V10M18 20V4"></path></svg>
          </div>
          <h3 style={{ marginBottom: '12px', fontSize: '1.25rem' }}>AI Lead Scoring</h3>
          <p style={{ color: 'var(--text-muted)' }}>Automatically qualifies buyers based on budget, timeline, and urgency using Gemini AI.</p>
        </div>
        
        <div className="glass-card" style={{ padding: '32px' }}>
          <div style={{ width: '48px', height: '48px', background: 'rgba(16, 185, 129, 0.1)', color: 'var(--success)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
          </div>
          <h3 style={{ marginBottom: '12px', fontSize: '1.25rem' }}>Automated Bookings</h3>
          <p style={{ color: 'var(--text-muted)' }}>Schedules site visits automatically inside your dashboard calendar.</p>
        </div>
      </section>

    </main>
  );
}
