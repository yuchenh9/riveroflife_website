const path = require('path');
const fs = require('fs');

const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif']);
const ALLOWED_FOLDERS = new Set([
  'homepage_images',
  'homepage_friday_images',
  'events_images',
  'join_images',
  'discipleship_images',
  'students_ministry_images',
]);

function registerImageRoutes(router, publicDir) {
  const resolvedPublicDir = path.resolve(publicDir);

  router.get('/api/images/:folder', (req, res) => {
    const { folder } = req.params;
    if (!ALLOWED_FOLDERS.has(folder)) {
      return res.status(400).json({ error: 'Invalid folder' });
    }

    const dirPath = path.resolve(resolvedPublicDir, folder);
    if (!dirPath.startsWith(resolvedPublicDir + path.sep)) {
      return res.status(400).json({ error: 'Invalid path' });
    }

    try {
      if (!fs.existsSync(dirPath)) {
        return res.json([]);
      }

      const files = fs.readdirSync(dirPath)
        .filter((file) => IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()))
        .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

      res.json(files);
    } catch (err) {
      console.error('Error reading images:', err);
      res.status(500).json({ error: 'Failed to read images' });
    }
  });
}

module.exports = { registerImageRoutes, ALLOWED_FOLDERS };
