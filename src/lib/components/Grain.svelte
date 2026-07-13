<div class="grain" aria-hidden="true">
  <svg class="grain-svg">
    <defs>
      <!-- The noise is generated once into a small tile and repeated across the
           page, so the SVG filter only ever covers one tile. A single filter
           spanning the whole document hits WebKit's filter-region cap on a tall
           page and stops rendering near the bottom, which leaked the raw
           background through as a dark band on iOS. stitchTiles keeps the tile
           seamless where it repeats. -->
      <filter id="grain-filter" x="0" y="0" width="256" height="256" filterUnits="userSpaceOnUse">
        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
      </filter>
      <pattern id="grain-tile" width="256" height="256" patternUnits="userSpaceOnUse">
        <rect width="256" height="256" filter="url(#grain-filter)" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grain-tile)" />
  </svg>
</div>

<style>
  /* absolute (not fixed) so it spans the full document height, not just the
     viewport: a fixed overlay leaves everything below the first screen
     un-grained, which shows as a darker band in a full-page capture. The div
     stretches to the #app box via inset (a bare <svg> would keep its intrinsic
     height instead), and the svg fills it. */
  .grain {
    position: absolute;
    inset: 0;
    z-index: 100;

    opacity: var(--grain-opacity);
    pointer-events: none;
  }

  .grain-svg {
    display: block;
    width: 100%;
    height: 100%;
  }
</style>
