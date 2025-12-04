<!-- notes.html -->
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Notes — Hello My Special Star ✨</title>
  <link rel="stylesheet" href="/static/css/style.css" />
</head>
<body>
  <header class="topbar">
    <div class="brand">
      <div class="logo">🌟</div>
      <div class="title">
        <h1 id="site-slogan-small">Hello My Special Star ✨</h1>
      </div>
    </div>

    <nav class="nav">
      <a href="/">Home</a>
      <a href="/notes">Notes</a>
      <a href="/tests">Tests</a>
      <button id="lang-toggle-2" class="btn">हिन्दी</button>
    </nav>
  </header>

  <main class="container">
    <section class="notes-controls">
      <label>Class:
        <select id="notes-class"></select>
      </label>
      <label>Subject:
        <select id="notes-subject"></select>
      </label>
      <label>Chapter:
        <select id="notes-chapter"></select>
      </label>
      <button id="load-notes" class="btn small">Load Notes</button>
    </section>

    <section id="notes-area" class="notes-area">
      <div class="notes-card">
        <h3 id="notes-title">Select class → subject → chapter</h3>
        <p id="notes-content">Notes will appear here. You can download as PDF later.</p>
        <div class="notes-actions">
          <button id="download-notes" class="btn outline small">Download (TXT)</button>
        </div>
      </div>
    </section>
  </main>

  <footer class="footer">
    <p>© 2025 Hello My Special Star ✨</p>
  </footer>

  <script src="/static/js/script.js"></script>
</body>
</html>
