/* Provenance for src/lib/components/monogram.js and static/favicon.svg.
 *
 * The monogram vector was traced from static/favicon.png (the only surviving
 * copy of the original mark) with the potrace npm package. To rerun:
 *
 *   npm i -D potrace
 *   node plans/trace-monogram.mjs
 *
 * then re-extract the path into src/lib/components/monogram.js. The potrace
 * dependency is not kept installed; this script is the record of how the
 * asset was made and with which parameters.
 */
import { createRequire } from 'node:module'
import { writeFileSync } from 'node:fs'

const require = createRequire(import.meta.url)
const potrace = require('potrace')

potrace.trace(
  'static/favicon.png',
  { threshold: 120, turdSize: 5, optTolerance: 0.3, alphaMax: 1.0, color: 'currentColor' },
  (err, svg) => {
    if (err) throw err
    writeFileSync('/tmp/monogram-trace.svg', svg)
    console.log('traced to /tmp/monogram-trace.svg')
  }
)

/* Addendum — the grit mask (static/monogram-grit.png).
 *
 * The traced vector above proved too clean for display sizes: it kept the
 * hand-drawn wobble but lost the printed texture. The site therefore tints
 * the ORIGINAL raster through an alpha mask at display sizes, and keeps the
 * vector only for tiny geometric duties (favicon.svg).
 *
 * The mask was extracted in-browser from static/favicon.png: per pixel,
 * luminance L is mapped to alpha as a = clamp(((maxL - L)/(maxL - minL)
 * - 0.06) / 0.88), RGB forced to black. This keeps the soft edge pixels
 * (the grit) as partial alpha. See mark swatch 05 for the audit that
 * decided this.
 */
