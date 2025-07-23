const path = require('path');
const express = require('express');
const fs = require('fs');
const https = require('https');
const helmet = require('helmet');

// Configuration
const HTTP_PORT = 80;
const HTTPS_PORT = 443;
const DEV_PORT = 3000;
const PUBLIC_DIR = path.join(__dirname, 'public');
const isInternetMode = process.argv.includes('--internet');

const app = express();

// Domains configuration
const RIVER_OF_LIFE_DOMAINS = [
  'riveroflifecu.org',
  'www.riveroflifecu.org',
  'localhost:3000',  // for development
  'localhost'        // for development
];

// Virtual Host Middleware
const createVirtualHost = (domains, handler) => {
  return (req, res, next) => {
    const host = req.get('host');
    if (domains.some(domain => host === domain || host.startsWith(domain))) {
      handler(req, res, next);
    } else {
      next();
    }
  };
};

// Security Middleware with custom CSP (applied globally)
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        connectSrc: ["'self'", "https://api.rss2json.com"],
        frameSrc: ["'self'", "https://www.youtube.com", "https://www.youtube-nocookie.com"],
        imgSrc: [
          "'self'",
          "data:",
          "https://i.ytimg.com", // YouTube thumbnails
          // Add other domains as needed
        ],
        // Optionally, add scriptSrc, styleSrc, etc. as needed
      },
    },
  })
);

// =============================================================================
// RIVER OF LIFE CHURCH APP - Virtual Host Configuration
// =============================================================================
const REACT_BUILD_DIR = path.join(__dirname, 'build');

// Create a sub-app for River of Life Church
const riverOfLifeApp = express();

// Serve React static files at /static
riverOfLifeApp.use('/static', express.static(path.join(REACT_BUILD_DIR, 'static')));

// Serve other React build files (like manifest.json, favicon.ico) at root
riverOfLifeApp.use('/', express.static(REACT_BUILD_DIR));

// For SPA routing: serve index.html for all routes (but not static assets)
riverOfLifeApp.get('/*', (req, res) => {
  // Don't serve index.html for static assets
  if (req.path.includes('/static/')) {
    return res.status(404).send('Static file not found');
  }
  res.sendFile(path.join(REACT_BUILD_DIR, 'index.html'));
});

// Mount River of Life app for specific domains
app.use(createVirtualHost(RIVER_OF_LIFE_DOMAINS, riverOfLifeApp));

// =============================================================================
// OTHER DOMAINS - Add more virtual hosts here
// =============================================================================

// Example: Another domain/app
// const OTHER_DOMAINS = ['anotherdomain.com', 'www.anotherdomain.com'];
// const otherApp = express();
// otherApp.get('/', (req, res) => {
//   res.send('<h1>Another Domain App</h1>');
// });
// app.use(createVirtualHost(OTHER_DOMAINS, otherApp));

// =============================================================================
// DEFAULT/FALLBACK HANDLER
// =============================================================================

// Default handler for unmatched domains
app.use((req, res) => {
  const host = req.get('host');
  res.status(404).send(`
    <h1>Domain Not Found</h1>
    <p>The domain <strong>${host}</strong> is not configured on this server.</p>
    <p>Available domains:</p>
    <ul>
      ${RIVER_OF_LIFE_DOMAINS.map(domain => `<li>${domain}</li>`).join('')}
    </ul>
  `);
});

// Global error handling
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).send('Server error');
});

// Server startup
if (isInternetMode) {
  // HTTPS setup
  const sslOptions = {
    key: fs.readFileSync('/etc/letsencrypt/live/yuchenh9.dev/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/yuchenh9.dev/fullchain.pem')
  };

  const httpsServer = https.createServer(sslOptions, app);

  // Redirect HTTP to HTTPS
  express()
    .use((req, res) => res.redirect(`https://${req.headers.host}${req.url}`))
    .listen(HTTP_PORT, '0.0.0.0');

  httpsServer.listen(HTTPS_PORT, '0.0.0.0', () => {
    console.log(`\n\x1b[1mSERVER RUNNING IN INTERNET MODE\x1b[0m`);
    console.log(`HTTP -> HTTPS redirect active on port 80`);
    console.log(`Secure server running on port 443`);
    console.log(`\nConfigured domains:`);
    console.log(`River of Life Church: ${RIVER_OF_LIFE_DOMAINS.join(', ')}`);
    console.log(`Access your site at:\n\x1b[36mhttps://yuchenh9.dev\x1b[0m\n`);
  });
} else {
  // Development mode
  app.listen(DEV_PORT, 'localhost', () => {
    console.log(`\n\x1b[1mSERVER RUNNING IN DEVELOPMENT MODE\x1b[0m`);
    console.log(`\nConfigured domains:`);
    console.log(`River of Life Church: ${RIVER_OF_LIFE_DOMAINS.join(', ')}`);
    console.log(`Access your site at:\n\x1b[36mhttp://localhost:${DEV_PORT}\x1b[0m\n`);
  });
}
