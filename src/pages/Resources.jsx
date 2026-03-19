import React, { useState } from 'react';

const resourcesData = [
  {
    id: 1,
    icon: 'video',
    title: '5-Minute Guided Breathing',
    desc: 'A short breathing routine to calm your nervous system.',
    tags: ['Stress', 'Mindfulness', 'English'],
    format: 'Video',
    lang: 'English',
    durationSec: 312,
    durationLabel: '5:12',
    videoUrl: 'https://www.youtube.com/embed/enJyOTvEn4M'
  },
  {
    id: 2,
    icon: 'video',
    title: 'Grounding Exercise (5-4-3-2-1)',
    desc: 'Practice noticing your senses to reduce anxiety.',
    tags: ['Anxiety', 'Mindfulness', 'English'],
    format: 'Video',
    lang: 'English',
    durationSec: 743,
    durationLabel: '5:00',
    videoUrl: 'https://www.youtube.com/embed/30VMIEmA114'
  },
  {
    id: 3,
    icon: 'video',
    title: 'Body Scan Meditation',
    desc: 'A 10-minute guided audio to release physical tension.',
    tags: ['Stress', 'Sleep', 'English'],
    format: 'Video',
    lang: 'English',
    durationSec: 985,
    durationLabel: '10:00',
    videoUrl: 'https://www.youtube.com/embed/H_uc-uQ3Nkc'
  },
  {
    id: 4,
    icon: 'video',
    title: 'Daily Mood Journal',
    desc: 'Track your emotions with guided morning prompts.',
    tags: ['Depression', 'Mindfulness', 'English'],
    format: 'Video',
    lang: 'English',
    durationSec: 180,
    durationLabel: '10:00',
    videoUrl: 'https://www.youtube.com/embed/7CcZ7gyFXv0'
  },
  {
    id: 5,
    icon: 'video',
    title: 'Sleep Hygiene Guide',
    desc: 'Evidence-based tips to improve sleep quality and reduce insomnia.',
    tags: ['Sleep', 'English'],
    format: 'Video',
    lang: 'English',
    durationSec: 516,
    durationLabel: '5:28',
    videoUrl: 'https://www.youtube.com/embed/t0kACis_dJE'
  },
  {
    id: 6,
    icon: 'video',
    title: 'Progressive Muscle Relaxation',
    desc: 'Systematically tense and release muscle groups to reduce stress.',
    tags: ['Stress', 'Anxiety', 'Hindi'],
    format: 'Video',
    lang: 'Hindi',
    durationSec: 577,
    durationLabel: '18:00',
    videoUrl: 'https://www.youtube.com/embed/dYUVL15w4Ks'
  },
  {
    id: 7,
    icon: 'video',
    title: '4-7-8 Breathing Technique',
    desc: 'A calming breath pattern to reduce anxiety and aid sleep.',
    tags: ['Anxiety', 'Sleep', 'English'],
    format: 'Video',
    lang: 'English',
    durationSec: 347,
    durationLabel: '10:27',
    videoUrl: 'https://www.youtube.com/embed/LiUnFJ8P4gM'
  },
  {
    id: 8,
    icon: 'video',
    title: 'Gratitude Meditation',
    desc: 'Shift your mindset and mood with this daily audio practice.',
    tags: ['Depression', 'Mindfulness', 'English'],
    format: 'Video',
    lang: 'English',
    durationSec: 552,
    durationLabel: '10:44',
    videoUrl: 'https://www.youtube.com/embed/E7sjprp6VA0'
  },
];

const svgs = {
  video: <svg viewBox="0 0 24 24"><rect x="2" y="3" width="15" height="13" rx="2"/><polygon points="17 7 22 12 17 17"/></svg>,
  pulse: <svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
  headphones: <svg viewBox="0 0 24 24"><path d="M3 18v-6a9 9 0 0118 0v6M3 18a3 3 0 003 3h1a2 2 0 002-2v-4a2 2 0 00-2-2H3zm18 0a3 3 0 01-3 3h-1a2 2 0 01-2-2v-4a2 2 0 012-2h4z"/></svg>,
  journal: <svg viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 016.5 17H20M4 19.5A2.5 2.5 0 006.5 22H20v-5H6.5zM4 19.5V4a2 2 0 012-2h14v15M8 6h8M8 10h5"/></svg>,
  moon: <svg viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>,
};

export default function Resources() {
  const [q, setQ] = useState('');
  const [fmt, setFmt] = useState('all');
  const [playingId, setPlayingId] = useState(null);

  const filtered = resourcesData.filter(r => {
    const term = q.toLowerCase();
    const matchQ = r.title.toLowerCase().includes(term) || r.desc.toLowerCase().includes(term) || r.tags.some(t => t.toLowerCase().includes(term));
    const matchF = fmt === 'all' || r.format.toLowerCase() === fmt.toLowerCase();
    return matchQ && matchF;
  });

  const selectedR = playingId ? resourcesData.find(x => x.id === playingId) : (filtered.length > 0 ? filtered[0] : null);

  return (
    <div className="page active" id="page-resources">
      <div className="resources-layout">
        <div className="resources-header">
          <h2>Self-Care Library</h2>
          <p>Explore guided exercises, reading materials, and quick coping tools.</p>
        </div>

        <div className="res-filter-panel">
          <div className="res-filter-top">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input 
              type="text" 
              className="res-search" 
              placeholder="Search tools, topics..." 
              value={q} 
              onChange={e => setQ(e.target.value)} 
            />
            <div className="res-sep"></div>
            <select className="res-select" value={fmt} onChange={e => setFmt(e.target.value)}>
              <option value="all">All Formats</option>
              <option value="video">Videos</option>
              <option value="audio">Audios</option>
              <option value="exercise">Exercises</option>
              <option value="guide">Reading</option>
            </select>
          </div>
        </div>

        <div className="resources-container">
          <div className="resources-grid">
            {filtered.map(r => (
              <div 
                key={r.id} 
                className={`resource-card ${playingId === r.id ? 'selected' : ''}`}
                onClick={() => setPlayingId(r.id)}
              >
                <div className="rc-inner">
                  <div className="rc-icon">{svgs[r.icon]}</div>
                  <div className="rc-content">
                    <div className="rc-header">
                      <div className="rc-title">{r.title}</div>
                      <button className="rc-like">♡</button>
                    </div>
                    <div className="rc-desc">{r.desc}</div>
                    <div className="rc-tags">
                      {r.tags.map(t => <span key={t} className="rc-tag">{t}</span>)}
                    </div>
                    <div className="rc-duration">{r.format} · {r.durationLabel}</div>
                  </div>
                </div>
                <div className="rc-actions">
                  <button className={`rc-btn-play ${playingId === r.id ? 'selected-btn' : ''}`}>
                    {playingId === r.id ? '▶ Playing' : '▶ Play'}
                  </button>
                  <button className="rc-btn-save">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/></svg>
                  </button>
                </div>
              </div>
            ))}
            {filtered.length === 0 && (
              <div style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                No resources found matching your search.
              </div>
            )}
          </div>

          <div className="resource-preview-panel">
            {selectedR ? (
              <>
                <div className="rp-preview-title">
                  Now Previewing:
                  <span id="rp-static-title"> {selectedR.title}</span>
                </div>
                <div className="rp-media">
                  {playingId && selectedR.videoUrl ? (
                    <iframe width="100%" height="100%" src={`${selectedR.videoUrl}?autoplay=1`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{position:'absolute', inset:0}}></iframe>
                  ) : (
                    <>
                      <img src="https://images.unsplash.com/photo-1518241353330-0f7941c2d1b8?w=800&q=80" alt="Nature" />
                      <div className="rp-media-overlay">
                        <svg className="rp-play-icon" viewBox="0 0 24 24" fill="none" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8" fill="currentColor"/></svg>
                        <div className="rp-media-line" id="rp-static-name">{selectedR.title}</div>
                        <div className="rp-media-ext" id="rp-static-ext">
                          <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                          <span style={{marginLeft: '0.4rem'}}>{selectedR.durationLabel} • Select to start</span>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                
                <div className="rp-meta-card">
                  <div className="rp-meta-title" id="rp-desc-title">{selectedR.title}</div>
                  <div className="rp-meta-desc" id="rp-desc-text">{selectedR.desc}</div>
                  <div className="rp-meta-sub" id="rp-desc-sub">{selectedR.format} • {selectedR.durationLabel} • {selectedR.lang}</div>
                  
                  <div className="rp-section-title">Focus Areas:</div>
                  <div className="rp-tags" id="rp-desc-tags">
                    {selectedR.tags.map(t => <span key={t} className="rp-pill">{t}</span>)}
                  </div>
                </div>
              </>
            ) : (
              <div style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                No resource selected.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
