<script>
  import { MONOGRAM_PATH } from '$lib/components/monogram.js'

  /* Browne's reticulated Network: a rhombic lattice built from two basis
   * vectors, the same substrate the family draws everywhere. The device
   * sits in a clearing at its center. */
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
</script>

<div id="hero">
  <svg viewBox="0 0 {W} {H}" role="img" aria-label="The bgins monogram, set on a lattice">
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

    <g class="mark" transform="translate({CX - MARK / 2} {CY - MARK / 2}) scale({MARK / 600})">
      <path d={MONOGRAM_PATH} fill-rule="evenodd" />
    </g>
  </svg>

  <div id="motto">
    <span class="c">::</span>
    bgins
    <span class="c">::</span>
  </div>
  <div id="subscriptio">Software engineer developing web and decentralized systems</div>
</div>

<style>
  #hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 14px 0 6px;
  }

  svg {
    display: block;
    width: 100%;
    height: auto;
  }

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

  .mark path {
    fill: var(--rubric);
  }

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

  #subscriptio {
    font-style: italic;
    font-size: 15px;
    color: var(--ink-muted);
  }
</style>
