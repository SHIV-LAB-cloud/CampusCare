import React, { useState } from 'react';

const counselors = [
  {
    name: 'Dr. Priya Sharma',
    role: 'Clinical Psychologist',
    lang: 'English · Hindi',
    tags: ['Anxiety', 'Depression', 'Trauma'],
    slots: 'Today at 3 PM, 5 PM',
    emoji: '👩‍⚕️',
    color: '#0d2535',
  },
  {
    name: 'Arjun Mehta',
    role: 'Counseling Therapist',
    lang: 'English · Tamil',
    tags: ['Stress', 'Relationships', 'Academic Stress'],
    slots: 'Tomorrow at 10 AM, 2 PM',
    emoji: '👨‍💼',
    color: '#1a1025',
  },
  {
    name: 'Dr. Riya Nair',
    role: 'Psychiatrist',
    lang: 'English · Malayalam',
    tags: ['Depression', 'Bipolar', 'OCD'],
    slots: 'Today at 6 PM',
    emoji: '👩‍⚕️',
    color: '#0a1a1a',
  },
  {
    name: 'Kabir Singh',
    role: 'School Counselor',
    lang: 'English · Hindi · Punjabi',
    tags: ['Academic Stress', 'Bullying', 'Self-esteem'],
    slots: 'Today at 4 PM, 7 PM',
    emoji: '🧑‍🏫',
    color: '#1c150c',
  },
  {
    name: 'Dr. Ananya Roy',
    role: 'Child Psychologist',
    lang: 'English · Bengali',
    tags: ['Anxiety', 'ADHD', 'Family'],
    slots: 'Tomorrow at 9 AM, 11 AM',
    emoji: '👩‍🎓',
    color: '#0c1a26',
  },
  {
    name: 'Rahul Verma',
    role: 'Crisis Counselor',
    lang: 'English · Hindi · Urdu',
    tags: ['Crisis', 'Suicide Prevention', 'Grief'],
    slots: 'Available now',
    emoji: '👨‍⚕️',
    color: '#152528',
  },
];

export default function Booking({ openModal }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = counselors.filter(c => {
    if (activeFilter === 'All') return true;
    const lowerFilter = activeFilter.toLowerCase();
    
    // Check if the filter matches language, tags, or a special condition like "Available today" (simple mock logic)
    if (c.lang.toLowerCase().includes(lowerFilter)) return true;
    if (c.tags.map(t => t.toLowerCase()).includes(lowerFilter)) return true;
    if (activeFilter === 'Available today' && c.slots.toLowerCase().includes('today')) return true;
    
    return false;
  });

  return (
    <div className="page active" id="page-booking">
      <div className="booking-layout">
        <div className="booking-header">
          <h2>Book a Counselor</h2>
          <p>Filter by language, specialty, and availability. All sessions are confidential.</p>
        </div>

        <div className="filter-row">
          {['All', 'Anxiety', 'Depression', 'Relationships', 'Academic Stress', 'English', 'Hindi', 'Available today'].map(f => (
            <button 
              key={f}
              className={`filter-pill ${activeFilter === f ? 'active' : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="counselor-grid">
          {filtered.map((c, i) => (
            <div key={i} className="counselor-card" style={{ '--card-bg': c.color }}>
              <div className="cc-top">
                <div className="cc-avatar">{c.emoji}</div>
                <div>
                  <h4>{c.name}</h4>
                  <div className="cc-role">{c.role}</div>
                  <div className="cc-lang">🌐 {c.lang}</div>
                </div>
              </div>
              <div className="cc-tags">
                {c.tags.map(t => <span key={t} className="cc-tag">{t}</span>)}
              </div>
              <div className="cc-slots">📅 Next available: <span>{c.slots}</span></div>
              <button className="btn-book" onClick={() => openModal('login')}>Book Session</button>
            </div>
          ))}
          {filtered.length === 0 && (
            <div style={{ gridColumn: '1 / -1', padding: '3rem', textAlign: 'center', color: 'var(--text-muted)' }}>
              No counselors found for the selected filters.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
