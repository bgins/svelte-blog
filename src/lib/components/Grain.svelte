<svg class="grain" aria-hidden="true">
  <filter id="grain-filter">
    <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" />
  </filter>
  <rect width="100%" height="100%" filter="url(#grain-filter)" />
</svg>

<style>
  .grain {
    position: fixed;
    inset: 0;
    z-index: 100;

    width: 100%;
    height: 100%;

    opacity: var(--grain-opacity);
    pointer-events: none;
  }
</style>
