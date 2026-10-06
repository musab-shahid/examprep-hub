import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises';
import { join, extname } from 'node:path';
import { createHash } from 'node:crypto';

const PRECACHE_EXTENSIONS = new Set(['.js', '.css', '.woff2', '.woff', '.ttf']);

async function collectAssets(dir, base = '') {
  const results = [];
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    const relPath = base ? `${base}/${entry.name}` : entry.name;
    if (entry.isDirectory()) {
      results.push(...await collectAssets(fullPath, relPath));
    } else if (PRECACHE_EXTENSIONS.has(extname(entry.name))) {
      results.push(relPath);
    }
  }
  return results;
}

export function swPrecachePlugin() {
  let outDir = 'dist';
  return {
    name: 'sw-precache',
    apply: 'build',
    configResolved(config) {
      outDir = config.build.outDir;
    },
    async writeBundle() {
      const distDir = join(process.cwd(), outDir);

      // Collect all hashed assets under /assets/
      const assetsDir = join(distDir, 'assets');
      let assetFiles = [];
      try {
        assetFiles = await collectAssets(assetsDir, 'assets');
      } catch { /* assets dir may not exist */ }

      // Always include the static shell files
      const precacheUrls = ['/', '/index.html', '/manifest.json', '/favicon.svg'];
      // Add hashed assets as absolute paths
      for (const f of assetFiles) {
        precacheUrls.push(`/${f}`);
      }

      // Generate hash from the sorted asset list for auto-bumping cache version
      const hashInput = [...assetFiles].sort().join('|');
      const cacheHash = createHash('md5').update(hashInput).digest('hex').slice(0, 8);
      const cacheName = `examprep-${cacheHash}`;

      // Read the template sw.js from public/
      const swTemplatePath = join(process.cwd(), 'public', 'sw.js');
      let swContent = await readFile(swTemplatePath, 'utf-8');

      // Replace the CACHE and PRECACHE lines
      swContent = swContent.replace(
        /^const CACHE = .*$/m,
        `const CACHE = '${cacheName}';`
      );
      swContent = swContent.replace(
        /^const PRECACHE = .*$/m,
        `const PRECACHE = ${JSON.stringify(precacheUrls)};`
      );

      // Write the generated sw.js into dist/
      await mkdir(distDir, { recursive: true });
      await writeFile(join(distDir, 'sw.js'), swContent, 'utf-8');

      console.log(`[sw-precache] Cache: ${cacheName}, precaching ${precacheUrls.length} URLs`);
    },
  };
}
