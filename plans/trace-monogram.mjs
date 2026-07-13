/* Provenance for the monogram vector trace (historical).
 *
 * The monogram was once traced from static/monogram-source.png (the original
 * mark) with the potrace npm package. That vector and its SVG favicon have
 * since been retired: the mark ships as the gritted raster impression (see the
 * addendum below), and the favicon is that impression tinted sepia on a
 * transparent ground. The original cream raster is kept as the source of
 * record at static/monogram-source.png. This script is kept as the
 * record of how the vector and the grit mask were derived. To rerun:
 *
 *   npm i -D potrace
 *   node plans/trace-monogram.mjs
 *
 * The potrace dependency is not kept installed.
 */
import { createRequire } from 'node:module'
import { writeFileSync } from 'node:fs'

const require = createRequire(import.meta.url)
const potrace = require('potrace')

potrace.trace(
  'static/monogram-source.png',
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
 * The mask was extracted in-browser from static/monogram-source.png: per pixel,
 * luminance L is mapped to alpha as a = clamp(((maxL - L)/(maxL - minL)
 * - 0.06) / 0.88), RGB forced to black. This keeps the soft edge pixels
 * (the grit) as partial alpha. See mark swatch 05 for the audit that
 * decided this.
 */
