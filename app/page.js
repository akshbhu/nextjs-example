export default function Home() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', maxWidth: 600, margin: '80px auto', padding: '0 20px' }}>
      <div style={{ background: '#dcfce7', color: '#166534', padding: '8px 16px', borderRadius: 20, display: 'inline-block', fontSize: 14, marginBottom: 16 }}>
        🚀 v2 — Auto-deployed from GitHub
      </div>
      <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 8 }}>
        Omega Notepad
      </h1>
      <p style={{ color: '#6b7280', fontSize: 18, marginBottom: 32 }}>
        Simple notes, powered by Omega & S3.
      </p>
      <div style={{ background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 12, padding: 24 }}>
        <p style={{ margin: 0, color: '#374151' }}>
          ✅ GitHub push triggers auto-deploy<br/>
          ✅ Production alias routes to latest<br/>
          ✅ Rollback via UpdateAliasRouting<br/>
          🆕 New feature in v2!
        </p>
      </div>
      <p style={{ marginTop: 24, fontSize: 12, color: '#9ca3af' }}>
        Deployment: v2 • Branch: main
      </p>
    </div>
  );
}
// ssr test
