import React, { useState } from 'react';

export default function Modals({ activeModal, closeModal, openModal }) {
  const [showPwd, setShowPwd] = useState(false);
  const [email, setEmail] = useState('');
  const [anonId, setAnonId] = useState('');

  const handleRegister = () => {
    if (!email.toLowerCase().trim().endsWith('@ltce.in')) {
      alert('Registration is currently only supported for Lokmanya Tilak College of Engineering (@ltce.in) institution emails.');
      return;
    }
    const anon = 'anon_' + Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
    setAnonId(anon);
    openModal('success');
  };

  const handleLogin = () => {
    alert('Demo UI: login is not connected to a backend yet.');
  };

  const copyAnonId = () => {
    if (anonId) navigator.clipboard?.writeText(anonId);
  };

  if (!activeModal) return null;

  return (
    <>
      {activeModal === 'login' && (
        <div className="modal-overlay open" onClick={(e) => { if (e.target.className.includes('modal-overlay')) closeModal(); }}>
          <div className="modal modal-wide">
            <div className="modal-two-col">
              <div className="modal-form-side">
                <div className="modal-logo-icon">🌿</div>
                <h3>Welcome back</h3>
                <p>Enter your anonymous ID and password to access CampusCare</p>

                <label className="modal-label">Anonymous ID</label>
                <input className="modal-input" type="text" placeholder="e.g. anon_a8b2c4..." />

                <label className="modal-label">Password</label>
                <div className="modal-input-wrap">
                  <input className="modal-input no-mb" type={showPwd ? "text" : "password"} placeholder="Enter your password" />
                  <button className="modal-eye" onClick={() => setShowPwd(!showPwd)}>{showPwd ? '🙈' : '👁'}</button>
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '0.4rem' }}>
                  <span style={{ fontSize: '.75rem', color: 'var(--teal)', cursor: 'pointer' }}>Forgot password?</span>
                </div>

                <button className="btn-modal-submit full-btn" style={{ marginTop: '1.25rem' }} onClick={handleLogin}>
                  Login to CampusCare
                </button>

                <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '.82rem', color: 'var(--text-muted)' }}>
                  Don't have an account?{' '}
                  <span style={{ color: 'var(--teal)', cursor: 'pointer', fontWeight: 500 }} onClick={() => openModal('signup')}>Register here</span>
                </p>

                <div className="modal-demo-box">
                  <strong>Demo Account:</strong><br />
                  Anonymous ID: <span style={{ color: 'var(--teal)', fontSize: '.8rem' }}>anon_demo123456789</span><br />
                  Password: <span style={{ color: 'var(--teal)', fontSize: '.8rem' }}>password123</span>
                </div>
              </div>

              <div className="modal-info-side">
                <h4>Supported Institution</h4>
                <p style={{ fontSize: '.8rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>Mumbai Educational Institution</p>
                <div className="inst-list">
                  <div className="inst-item">
                    <span className="inst-bar"></span>
                    ltce.in — Lokmanya Tilak College of Engineering
                  </div>
                </div>
                <div className="modal-privacy-box">
                  <p><strong>🔒 Privacy Protection</strong></p>
                  <p>• Your email &amp; password are deleted after verification</p>
                  <p>• Only anonymous ID is used for platform access</p>
                  <p>• No personal information is stored permanently</p>
                  <p>• Complete privacy and confidentiality guaranteed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeModal === 'signup' && (
        <div className="modal-overlay open" onClick={(e) => { if (e.target.className.includes('modal-overlay')) closeModal(); }}>
          <div className="modal modal-wide">
            <div className="modal-two-col">
              <div className="modal-form-side">
                <div className="modal-logo-icon">🌿</div>
                <h3>Join CampusCare</h3>
                <p>Register with your institutional email to get your anonymous ID</p>

                <label className="modal-label">Institutional Email</label>
                <input className="modal-input" type="email" placeholder="student@ltce.in" value={email} onChange={e => setEmail(e.target.value)} />

                <label className="modal-label">Password</label>
                <div className="modal-input-wrap">
                  <input className="modal-input no-mb" type={showPwd ? "text" : "password"} placeholder="Enter your password (min 6 characters)" />
                  <button className="modal-eye" onClick={() => setShowPwd(!showPwd)}>{showPwd ? '🔐' : '👁'}</button>
                </div>

                <label className="modal-label">Full Name (Optional)</label>
                <input className="modal-input" type="text" placeholder="Your name or pseudonym" />

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.65rem' }}>
                  <div>
                    <label className="modal-label">Course (Optional)</label>
                    <input className="modal-input" type="text" placeholder="Computer Science" />
                  </div>
                  <div>
                    <label className="modal-label">Year (Optional)</label>
                    <input className="modal-input" type="text" placeholder="1" />
                  </div>
                </div>

                <button className="btn-modal-submit full-btn" style={{ marginTop: '1rem' }} onClick={handleRegister}>
                  👤 Register &amp; Get Anonymous ID
                </button>

                <p style={{ textAlign: 'center', marginTop: '.75rem', fontSize: '.82rem' }}>
                  <span style={{ color: 'var(--teal)', cursor: 'pointer', fontWeight: 500 }} onClick={() => openModal('login')}>Already have an Anonymous ID? Login here</span>
                </p>

                <div className="modal-identity-note">
                  <span style={{ color: 'var(--text-dim)', fontSize: '.85rem' }}>◉</span>
                  Your identity is protected. Original credentials are deleted after generating your anonymous ID.
                </div>
              </div>

              <div className="modal-info-side">
                <h4>Supported Institution</h4>
                <p style={{ fontSize: '.8rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>Mumbai Educational Institution</p>
                <div className="inst-list">
                  <div className="inst-item">
                    <span className="inst-bar"></span>
                    ltce.in — Lokmanya Tilak College of Engineering
                  </div>
                </div>
                <div className="modal-privacy-box">
                  <p><strong>🔒 Privacy Protection</strong></p>
                  <p>• Your email &amp; password are deleted after verification</p>
                  <p>• Only anonymous ID is used for platform access</p>
                  <p>• No personal information is stored permanently</p>
                  <p>• Complete privacy and confidentiality guaranteed</p>
                </div>
                <div className="modal-demo-box">
                  <strong>Demo Account:</strong><br />
                  Email: <span style={{ color: 'var(--teal)', fontSize: '.8rem' }}>test.student@ltce.in</span><br />
                  Password: <span style={{ color: 'var(--teal)', fontSize: '.8rem' }}>password123</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeModal === 'success' && (
        <div className="modal-overlay open" onClick={(e) => { if (e.target.className.includes('modal-overlay')) closeModal(); }}>
          <div className="modal" style={{ maxWidth: '480px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem', marginBottom: '.6rem' }}>
              <span style={{ fontSize: '1.4rem' }}>✅</span>
              <h3 style={{ margin: 0 }}>Registration Successful!</h3>
            </div>
            <p>Your anonymous ID has been generated. Please save this ID — you'll need it to login in the future.</p>
            <div style={{ background: 'var(--bg-card2)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1rem', margin: '1rem 0' }}>
              <div style={{ fontSize: '.82rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '.5rem' }}>Your Anonymous ID:</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem' }}>
                <code style={{ flex: 1, fontSize: '.78rem', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '8px', padding: '.5rem .75rem', color: 'var(--teal)', fontFamily: 'monospace', wordBreak: 'break-all' }}>
                  {anonId}
                </code>
                <button onClick={copyAnonId} style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'var(--teal-soft)', border: '1px solid var(--border-bright)', color: 'var(--teal)', cursor: 'pointer', fontSize: '1rem', flexShrink: 0 }} title="Copy ID">✅</button>
              </div>
            </div>
            <div style={{ background: 'var(--bg-card2)', border: '1px solid var(--border)', borderRadius: '12px', padding: '.9rem 1rem', display: 'flex', gap: '.6rem', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '1rem', flexShrink: 0 }}>🛡</span>
              <p style={{ fontSize: '.82rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}><strong style={{ color: 'var(--text)' }}>Important:</strong> Your original email and password have been permanently deleted. Use this anonymous ID for all future logins.</p>
            </div>
            <div className="modal-actions">
              <button className="btn-modal-submit" onClick={closeModal}>Continue to CampusCare</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
