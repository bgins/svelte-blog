import * as fs from 'node:fs';
import { read } from 'to-vfile';
import { matter } from 'vfile-matter';

/* Get paths for all markdown posts in a directory
 *
 * @param {string} dir
 */
function getPaths(dir) {
  return fs.readdirSync(dir).flatMap((item) => {
    const path = `${dir}/${item}`;

    // Recurse into directories
    if (fs.statSync(path).isDirectory()) {
      return getPaths(path);
    }

    // Skip non-markdown files
    if (path.substring(path.length - 3) !== '.md') {
      return;
    }

    return path;
  });
}

/* Derive slug from a path
 *
 * Hardcoded to expect paths like "./src/routes/posts/minima/+page.md".
 * Will need to update if post hierarchy is not flat.
 *
 * @param {string} path
 */
function getSlug(path) {
  const segments = path.split('/');

  if (segments[3] !== 'posts' || !segments[4]) {
    console.warn('Could not derive slug from post path: ${path}');
    return null;
  }

  return `/${segments[3]}/${segments[4]}`;
}

// Read frontmatter from posts
const paths = getPaths('./src/routes/posts');
let manifest = [];
for (const path of paths) {
  // Extract frontmatter
  const file = await read(path);
  matter(file, { strip: true });

  // Derive slug from path
  const slug = getSlug(path);

  // Add post if valid slug
  if (slug) {
    file.data.matter.slug = getSlug(path);
    manifest.push(file.data.matter);
  }
}

// Write manifest to disk
fs.writeFile('./static/manifest.json', JSON.stringify(manifest), (err) => {
  if (err) {
    throw err;
  }

  console.log('✅ Wrote manifest to static/manifest.json');
});
