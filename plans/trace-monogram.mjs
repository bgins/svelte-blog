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
