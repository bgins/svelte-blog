<script>
  import { encode } from 'uqr'

  /* Browne's reticulated Network: a rhombic lattice built from two basis
   * vectors, the same substrate the family draws everywhere. The device
   * sits in a clearing at its center, and turns over to a contact plate. */
  const W = 608
  const H = 272
  const CX = W / 2
  const CY = H / 2

  const v1 = { x: 88, y: 61 }
  const v2 = { x: 88, y: -61 }
  const STEP = 0.5
  const RANGE = 8
  const EXTENT = 6

  /** @type {{ x1: number, y1: number, x2: number, y2: number }[]} */
  const lines = []
  for (let i = -RANGE; i <= RANGE; i += STEP) {
    for (const [a, b] of [
      [v1, v2],
      [v2, v1]
    ]) {
      lines.push({
        x1: CX + a.x * i - b.x * EXTENT,
        y1: CY + a.y * i - b.y * EXTENT,
        x2: CX + a.x * i + b.x * EXTENT,
        y2: CY + a.y * i + b.y * EXTENT
      })
    }
  }

  const CLEARING = 108
  const CONSTRUCTION = 100
  const MARK = 148

  /* compass pricks at the cardinals of the construction circle */
  const pricks = [
    { x: CX, y: CY - CONSTRUCTION },
    { x: CX + CONSTRUCTION, y: CY },
    { x: CX, y: CY + CONSTRUCTION },
    { x: CX - CONSTRUCTION, y: CY }
  ]

  /* the contact plate: the QR inked as a construction figure, a square
   * inscribed in the clearing. Encoded once at build time. The plate stays
   * light in both themes — an inverted QR may not scan. */
  const CONTACT = 'https://github.com/bgins'
  const QR_SIDE = 120
  const qr = encode(CONTACT, { ecc: 'M' })
  const mod = QR_SIDE / qr.size
  const qx = CX - QR_SIDE / 2
  const qy = CY - QR_SIDE / 2

  /** @type {{ x: number, y: number }[]} */
  const cells = []
  for (let y = 0; y < qr.size; y++) {
    for (let x = 0; x < qr.size; x++) {
      if (qr.data[y][x]) cells.push({ x: qx + x * mod, y: qy + y * mod })
    }
  }

  let flipped = $state(false)
</script>

<div id="hero">
  <div class="scene">
    <button
      class="card"
      class:flipped
      type="button"
      onclick={() => (flipped = !flipped)}
      aria-pressed={flipped}
      aria-label={flipped ? 'Turn the seal back to the mark' : 'Turn the seal to a contact code'}
    >
      <div class="face front">
        <svg viewBox="0 0 {W} {H}" aria-hidden="true">
          <defs>
            <!-- the impression: the original raster's alpha tints the mark;
                 mask-type alpha reads the image's transparency, not luminance -->
            <mask
              id="monogram-grit-mask"
              style="mask-type: alpha"
              maskUnits="userSpaceOnUse"
              x={CX - MARK / 2}
              y={CY - MARK / 2}
              width={MARK}
              height={MARK}
            >
              <image
                href="/monogram-grit.png"
                x={CX - MARK / 2}
                y={CY - MARK / 2}
                width={MARK}
                height={MARK}
              />
            </mask>
          </defs>
          <g class="net">
            {#each lines as line}
              <line x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2} />
            {/each}
          </g>

          <circle class="clearing" cx={CX} cy={CY} r={CLEARING} />
          <circle class="construction" cx={CX} cy={CY} r={CONSTRUCTION} />

          {#each pricks as prick}
            <g class="prick" transform="translate({prick.x} {prick.y})">
              <line x1="-3" y1="0" x2="3" y2="0" />
              <line x1="0" y1="-3" x2="0" y2="3" />
            </g>
          {/each}

          <rect
            class="mark"
            x={CX - MARK / 2}
            y={CY - MARK / 2}
            width={MARK}
            height={MARK}
            mask="url(#monogram-grit-mask)"
          />
        </svg>
      </div>

      <div class="face back">
        <svg viewBox="0 0 {W} {H}" aria-hidden="true">
          <circle class="plate" cx={CX} cy={CY} r={CLEARING} />
          <circle class="plate-ring" cx={CX} cy={CY} r={CONSTRUCTION} />

          {#each pricks as prick}
            <g class="plate-prick" transform="translate({prick.x} {prick.y})">
              <line x1="-3" y1="0" x2="3" y2="0" />
              <line x1="0" y1="-3" x2="0" y2="3" />
            </g>
          {/each}

          <g class="qr" shape-rendering="crispEdges">
            {#each cells as cell}
              <rect x={cell.x} y={cell.y} width={mod + 0.2} height={mod + 0.2} />
            {/each}
          </g>
        </svg>
      </div>
    </button>
  </div>

  <div id="motto">
    <span class="c">::</span>
    bgins
    <span class="c">::</span>
  </div>
  <div id="caption" class:flipped>
    <span class="tagline">Software engineer developing identity, authority, and mesh.</span>
    {#if flipped}
      <a class="url" href={CONTACT} target="_blank" rel="noopener noreferrer">github.com/bgins</a>
    {/if}
  </div>
</div>

<style>
  #hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 14px 0 6px;
  }

  .scene {
    width: 100%;
    perspective: 1200px;
  }

  .card {
    position: relative;
    display: block;
    width: 100%;
    padding: 0;
    border: 0;
    background: none;
    cursor: pointer;

    transform-style: preserve-3d;
    transition: transform 0.7s cubic-bezier(0.4, 0.1, 0.2, 1);
  }

  .card.flipped {
    transform: rotateY(180deg);
  }

  .card:focus-visible {
    outline: 2px solid var(--rubric);
    outline-offset: 6px;
    border-radius: 4px;
  }

  .face {
    backface-visibility: hidden;
  }

  .face.front {
    position: relative;
  }

  .face.back {
    position: absolute;
    inset: 0;
    transform: rotateY(180deg);
  }

  .face svg {
    display: block;
    width: 100%;
    height: auto;
  }

  @media (prefers-reduced-motion: reduce) {
    .card {
      transition: none;
    }
  }

  /* front — the mark on the network */
  .net line {
    stroke: var(--w-faint);
    stroke-width: 0.6;
    opacity: 0.26;
  }

  .clearing {
    fill: var(--bg);
  }

  .construction {
    fill: none;
    stroke: var(--w-faint);
    stroke-width: 1;
  }

  .prick line {
    stroke: var(--w-muted);
    stroke-width: 1;
  }

  .mark {
    fill: var(--w-ink);
  }

  /* back — the contact plate, fixed light in both themes so it always scans */
  .plate {
    fill: #ece6d5;
  }

  .plate-ring {
    fill: none;
    stroke: #b3a582;
    stroke-width: 1;
  }

  .plate-prick line {
    stroke: #6b5a3e;
    stroke-width: 1;
  }

  .qr rect {
    fill: #33260f;
  }

  /* captions */
  #motto {
    font-family: var(--font-mono);
    font-feature-settings:
      'ss01' on,
      'ss02' on;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.15em;
    color: var(--ink);
  }

  #motto .c {
    color: var(--rubric);
  }

  /* the tagline holds the caption's height at any width. When the seal is
     turned, the url overlays its first line and the tagline stays (hidden) to
     keep that height, so the content below never jumps. */
  #caption {
    position: relative;
    min-height: 1.5em;

    font-style: italic;
    font-size: 15px;
    color: var(--ink-muted);
    text-align: center;
  }

  #caption.flipped .tagline {
    visibility: hidden;
  }

  #caption .url {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;

    font-family: var(--font-mono);
    font-style: normal;
    font-size: 13px;
    letter-spacing: 0.04em;
    color: var(--ink-muted);
    text-decoration: none;
  }

  #caption .url:hover {
    color: var(--rubric);
  }
</style>
