import React from 'react';

export default function Gamification() {
  return (
    <div className="page active" id="page-gamification">
      <div className="gamif-layout">
        <h2 style={{ fontFamily: '"Sora", sans-serif', fontSize: '1.8rem', color: 'var(--text)', marginBottom: '0.5rem' }}>Your Progress</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Track your self-care journey. Every step counts.</p>

        <div className="stats-row">
          <div className="stat-card">
            <div className="val">14</div>
            <div className="lbl">Days Streak</div>
          </div>
          <div className="stat-card">
            <div className="val">205</div>
            <div className="lbl">Minutes Meditated</div>
          </div>
          <div className="stat-card">
            <div className="val">8</div>
            <div className="lbl">Journals Completed</div>
          </div>
          <div className="stat-card">
            <div className="val">Level 4</div>
            <div className="lbl">Mindful Explorer</div>
          </div>
        </div>

        <div className="badges-section">
          <div className="section-title">Milestone Badges</div>
          <div className="badges-grid">
            <div className="badge-item">
              <div className="badge-emoji">🌱</div>
              <div className="badge-name">First Step (Completed 1 exercise)</div>
            </div>
            <div className="badge-item">
              <div className="badge-emoji">🔥</div>
              <div className="badge-name">7-Day Streak Achieved</div>
            </div>
            <div className="badge-item">
              <div className="badge-emoji">🧘</div>
              <div className="badge-name">Zen Master (100+ mins)</div>
            </div>
            <div className="badge-item locked">
              <div className="badge-emoji">✍️</div>
              <div className="badge-name">Journaler (30 logs)</div>
            </div>
            <div className="badge-item locked">
              <div className="badge-emoji">🛡️</div>
              <div className="badge-name">Month Streak</div>
            </div>
          </div>
        </div>

        <div className="badges-section">
          <div className="section-title">This Week</div>
          <div className="streak-days">
            <div className="streak-day done">M</div>
            <div className="streak-day done">T</div>
            <div className="streak-day done">W</div>
            <div className="streak-day today">T</div>
            <div className="streak-day">F</div>
            <div className="streak-day">S</div>
            <div className="streak-day">S</div>
          </div>
          <div className="progress-bar-wrap">
            <div className="progress-bar" style={{ width: '57%' }}></div>
          </div>
          <p style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>4/7 days completed. Keep it up!</p>
        </div>
      </div>
    </div>
  );
}
