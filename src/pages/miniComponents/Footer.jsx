export default function Footer() {
  return (
    <footer style={{
      padding: '2rem 5%',
      borderTop: '1px solid rgba(56,189,248,0.15)',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      flexWrap: 'wrap', gap: '1rem',
    }}>
      <a href="https://akbaru.vercel.app/" target="blank"><span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, color: '#0ea5e9', fontSize: '1rem' }}>
        Developed By &lt;AKBARUU /&gt;
      </span></a>
      <p style={{ fontFamily: "'DM Sans', sans-serif", color: '#4a5568', fontSize: '0.85rem', margin: 0 }}>
        © 2026 M M noori. Copyright. All rights reserved.
      </p>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <a href="https://www.linkedin.com/in/akbaraliduhavi28/" style={{
          color: '#4a5568', fontFamily: "'DM Sans', sans-serif",
          fontSize: '0.8rem', textDecoration: 'none',
          transition: 'color 0.2s',
        }}
          onMouseEnter={e => e.target.style.color = '#0ea5e9'}
          onMouseLeave={e => e.target.style.color = '#4a5568'}
        >
          LinkedIn
        </a>
         <a href="https://github.com/AkbAroG" style={{
          color: '#4a5568', fontFamily: "'DM Sans', sans-serif",
          fontSize: '0.8rem', textDecoration: 'none',
          transition: 'color 0.2s',
        }}
          onMouseEnter={e => e.target.style.color = '#0ea5e9'}
          onMouseLeave={e => e.target.style.color = '#4a5568'}
        >
          GitHub
        </a>
         <a href="https://www.instagram.com/akbaro_20?igsh=MTZxNXluOThnaWptcw==" style={{
          color: '#4a5568', fontFamily: "'DM Sans', sans-serif",
          fontSize: '0.8rem', textDecoration: 'none',
          transition: 'color 0.2s',
        }}
          onMouseEnter={e => e.target.style.color = '#0ea5e9'}
          onMouseLeave={e => e.target.style.color = '#4a5568'}
        >
          Instagram
        </a>
        
      </div>
    </footer>
  );
}
