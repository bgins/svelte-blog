# design refresh — the site rejoins the language

status: proposal, v3 · 2026-07-08

## decisions log

- **2026-07-08 — v1** drafted after surveying flp-demo (the manifesto), next (the refined tokens,
  emblem, vault), and the site itself.
- **2026-07-08 — Brian's review, folded into v2:**
  - Wordmark: **`:: bgins ::`**. Decided.
  - Full mono body is out — this is a blog, optimize for readers. Mono recedes to chrome, meta,
    code, and colophon; a book face carries the prose.
  - The maroon carries no heritage obligation ("my design aesthetic may have moved on") — the
    palette is decided on merit, not sentiment.
  - Motto: placeholder until chosen.
  - Register shift: **more refined, clean, and flourishing.** Don't lean hard into the bracket
    grammar — lead with the Renaissance register (emblem-book, engraving, book typography);
    cypherpunk lives in small symbols and touches.
- **2026-07-08 — open-questions round, folded into v3:**
  - Body face: EB Garamond is lovely but hard on sustained reading — search re-opened for a face
    that keeps the humanist style and reads fast. Candidates + swatch protocol in §2, method
    drawn from `flp-demo/plans/legibility.md`.
  - Rubrication: experiment approved — the versal swatch runs indigo against vermilion (§6).
  - Motto: direction chosen — the Latin *sublimare* family (alchemical sublimation). Shortlist
    engraved in §4; finalist deferred, the em-rule holds the line.
  - Manicule: prototype approved (§6).
  - Contact plate: carries `https://github.com/bgins` for now (§5).
- **2026-07-08 — swatch 01 built.** Alegreya goes on the bench as body; EB Garamond auditions in
  the display register (titles + versals). Harness at `plans/swatch/type-01.html` — no build,
  open directly. Real prose from `posts/functions-everywhere-once`, both grounds (cream paper /
  night ink), an Alegreya-display control title, and the §6 versal color audition folded in
  (indigo · vermilion · old maroon). Rendering verified by screenshot, day and night.
- **2026-07-12 — versals decided, the accent questioned.**
  - **Vermilion wins the versals.**
  - Bivalent indigo as the primary accent is in doubt — it is an instrument-panel hue, and on a
    reading page it attracts more attention than wanted. Swatch 02 built:
    `plans/swatch/accent-02.html` — the same link-dense paragraph in four treatments
    (a indigo control · b vermilion · c writing-ink with a fine ruled underline, vermilion in the
    hover · d iron-gall blue-black, indigo ground down to manuscript ink), plus wordmark-colon
    auditions (indigo · vermilion · faint) and a composite of the page as it would set
    (vermilion versal + quiet links + vermilion `▸`). Recommendation on the table: treatment c —
    links in the text ink under a fine sepia rule, with vermilion as the site's *only* accent
    hue (versals, marks, hover, the seal); bivalent indigo returns home to the apps.
- **2026-07-12 — the accent decided: treatment c.** Links wear the writing ink under a fine
  sepia rule; vermilion (`--rubric`) is the site's one accent — versals, the seal, active marks,
  guillemets, link hover, the lit colons. Bivalent indigo leaves the site's palette entirely.
  Token sheet updated (§2); the night vermilion lift still wants tuning.
- **2026-07-12 — body face and night vermilion decided.**
  - **Literata is the body face.** Read on the real site against Alegreya and Vollkorn via a
    temporary `?font=` switcher; Literata at 16.5px won for sustained reading. Alegreya leaves
    the stack; EB Garamond keeps the display register (titles, versals).
  - **Night `--rubric` is `#a84a2c`** — dark brick, near day strength (rubric swatch 03,
    `plans/swatch/rubric-03.html`); the provisional `#cf7a68` read salmon on night ink.

Sources of truth consulted:

- `~/code/networking/flp-demo/DESIGN-LANGUAGE.md` — the manifesto (the two Dürer hands, the engraving register)
- `~/code/networking/flp-demo/src/app.css` — the locked palette and grain
- `~/code/personal/notes/app/src/lib/styles/tokens.css` — the refined token architecture (day / night ink)
- `~/code/personal/notes/proposal/{PROPOSAL,VAULT}.md`, `proposal/icon/{EMBLEM,CONCEPTS}.md` — the emblem and vault reasoning
- `~/code/personal/notes/.claude/skills/next-icons/SKILL.md` — the instrument-register icon spec

---

## 0. the register, restated

The apps are instruments; **the site is a printed page from the same workshop.** flp and next
speak terminal-typographic because a reader *operates* them. A blog is read, not operated — so
the emblem-book and atlas register leads, and the instrument register recedes to the margins.

Two voices, strictly zoned:

- **Where the author speaks** — titles, prose, quotes, captions — a book face of Dürer's own era,
  set with book manners: versals, small caps, italic, generous measure.
- **Where the machine speaks** — the wordmark, meta lines, dates, code, the colophon — Geist Mono
  in the fine-line instrument register, small and tracked, like engraved labels on a plate.

The cypherpunk flair is small and precise, never ambient: the lit colons in `:: bgins ::`, the
engraved mono meta lines, a QR inked as a construction plate, a PGP fingerprint in the colophon.
Everything ornamental remains constructible — compass and rule, construction lines visible.

## 1. what the site is today

Audit highlights (the load-bearing facts):

- SvelteKit 2 + **Svelte 4**, mdsvex, fully prerendered to S3/CloudFront. Ten posts, projects, about.
- **No tokens.** Three near-identical, non-matching maroons (`#8e182e`, `#8f192f`, `#6d1223`)
  hardcoded across ~6 files. Rosario headings / Lato body / Cousine code. A tiled `light-wool.png`
  body texture. Default Prism light theme. No dark mode. No footer. Hover-only interactions.
- The strongest brand asset — the calligraphic **monogram** favicon (interlaced B/G, charcoal on a
  cream roundel) — appears nowhere in the chrome.
- Housekeeping debt: blog index fetched client-side at runtime (`/manifest.json`) so the list isn't
  in the prerendered HTML; RSS mixes `brianginsburg.com` / `www.` / `wwww.`; "progamming" typo in
  shipped meta; projects page reuses the home page's title/description; dates render as raw ISO
  until hydration.

Nothing here fights the refresh. The bones (static SvelteKit, mdsvex, self-hosted fonts) are right;
the skin is two design-generations old.

## 2. foundation — tokens, faces, grain

Port the token architecture from next (`tokens.css`), which is itself the refined flp palette.
One sheet, semantic names, day + night, applied before first paint.

```css
:root {
  /* day — flp cream paper */
  --bg: #f6f3e9;            /* paper */
  --bg-raised: #fefdf8;     /* plates, code chips */
  --ink: #181818;           /* text */
  --ink-muted: #5a5550;     /* secondary */
  --ink-faint: #a8a39c;     /* dates, seams */
  --rubric: #a83220;        /* printed vermilion — the one accent: versals, seal, marks, hover */
  --rule-under: rgba(107, 90, 62, 0.55); /* the link's ruled underline (w-muted, thinned) */
  --w-ink: #382611;         /* warm sepia — construction plates, engraving */
  --w-muted: #6b5a3e;
  --w-faint: #ada082;       /* the reticulated Network, plate furniture */
  --hairline: rgba(24, 24, 24, 0.08);
  --hairline-strong: rgba(24, 24, 24, 0.12);
  --grain-opacity: 0.06;
}
/* night — "night ink": warm cream ink on neutral near-black (via
   prefers-color-scheme + [data-theme] overrides, exactly as in next) */
  --bg: #121212;  --bg-raised: #181818;
  --ink: #dbd7ca; --ink-muted: #a49e91; --ink-faint: #78736a;
  --rubric: #cf7a68;        /* vermilion lifted — drifts salmon, tune before locking */
  --rule-under: rgba(154, 139, 110, 0.55);
  --w-ink: #c9b899; --w-muted: #9a8b6e; --w-faint: #6f6654;
  --hairline: rgba(219, 215, 202, 0.10);
  --hairline-strong: rgba(219, 215, 202, 0.16);
  --grain-opacity: 0.05;
```

Decisions inside this block:

- **The maroons retire; so does bivalent indigo (2026-07-12, swatch 02).** The site's palette is
  ink + sepia + vermilion. Links wear the writing ink under a fine ruled underline
  (`--rule-under`) — the quietest treatment; a link-dense paragraph reads as calm as plain
  prose — and `--rubric` printed vermilion is the one accent: versals, the seal, active marks,
  link hover, the lit colons. Its scarcity is what keeps it powerful. Indigo is an
  instrument-panel hue; it stays home in the apps — the site is a page, not an instrument.
- **No `--ok` / `--warn` / `--danger`.** The blog has no deliver/delay/decide semantics; marigold
  stays home in next. Syntax colors come from the code theme (§8), not the token sheet.
- **Two faces — the body face re-opened (2026-07-08).** EB Garamond was v2's pick for the 1530s
  rhyme, but it is hard on sustained reading, and the reason is mechanical: it is faithful to
  metal cut for the hand press, where paper drank ink and fattened every hairline — screens don't
  gain ink, so its small x-height and thin strokes sit near the discomfort line at body sizes.
  The legibility work (`flp-demo/plans/legibility.md`) supplies the method, not just the moral:
  comfort is a visual-angle property (15+ arcmin), what reads is the x-height rather than the
  nominal size, nothing goes below 12px, and verdicts come from swatches on the real device, not
  taste at the desk. So: keep the humanist skeleton, take a face engineered for running text.
  Candidates, in order:
  1. **Alegreya** (`@fontsource/alegreya`) — front-runner. Humanist and openly calligraphic,
     designed specifically for literature and long-form reading: sturdy strokes, tall x-height,
     true small caps (Alegreya SC) and full italics. Keeps the Renaissance energy without the
     hairlines.
  2. **Literata** (`@fontsource/literata`) — understudy. Purpose-built for sustained screen
     reading (it was drawn for Google Play Books), variable with an optical-size axis; quieter,
     more contemporary flavor. Choose it if Alegreya reads too spiced.
  3. **Vollkorn** (`@fontsource/vollkorn`) — dark horse. A dark, sturdy oldstyle workhorse made
     for body text; German, which is its own small Dürer rhyme.

  EB Garamond is not banished: it stays a candidate for the **display register only** — titles
  and versals at ≥28px, where hairlines are safe and the 1530s flavor shines — if a two-serif
  system doesn't feel like clutter. Otherwise the winner takes everything.
  **Swatch protocol** (legibility.md practice, re-aimed at reading distances): set one real post
  in each candidate; compare at equal x-height, not equal font-size (EB Garamond at 19px ≈ these
  faces at ~17px); judge on phone at ~35cm and on laptop, day and night, before Phase 1 locks.
  Chrome/machine: **Geist Mono** (`@fontsource/geist-mono`, 400–700 + italics, `ss01`/`ss02` on)
  — unchanged. Rosario, Lato, and Cousine retire with their five woff2 files.
- **Grain replaces wool.** Delete `light-wool.png`; mount the flp `feTurbulence` overlay once in
  `+layout.svelte` (`baseFrequency 0.9`, fixed, `opacity: var(--grain-opacity)`, pointer-events
  none). Same paper feel, drawn by the machine instead of a JPEG loom.
- **Theme plumbing:** `prefers-color-scheme` default, `[data-theme='day'|'night']` override,
  pre-paint inline script in `app.html` reading `localStorage` (the next pattern — no flash,
  prerender-safe).

Type scale (nominal sizes assume the sturdy candidates; if a smaller-x-height face wins a slot,
bump its px to match x-height — the swatch decides, per house practice):

| element | face | spec |
|---|---|---|
| body | book (Literata) | 16.5px / 1.65, `--ink` |
| measure | — | `max-width: 38rem` (~66ch — down from today's 800px) |
| post title (h1) | book (or display cut) | 32–34px / 500, normal case |
| h2 | book small caps | 19px, `letter-spacing: 0.06em` |
| h3 | book italic | 17–18px / 500 |
| blockquote | book italic | 18–19px / 1.6 (§6) |
| captions, atlas voice | book italic | 14–15px, `--w-muted` |
| dates, meta | Geist Mono | 12.5px, uppercase, `0.08em`, `--ink-faint`, tabular-nums |
| wordmark | Geist Mono | 14px / 700, `0.15em` |
| nav | Geist Mono | 13px / 500, `0.1em` |
| inline code | Geist Mono | 15px chip on `--bg-raised` |

Nothing below 12px (the legibility floor both repos observe). Night note: thin serifs on
`#121212` may need a half-step of optical weight (variable axis ~450) — swatch at night before
locking.

## 3. the two voices — where each grammar applies

The v1 terminal grammar survives, but zoned to the machine's voice:

- **`::` wordmark:** `:: bgins ::` — Geist Mono, lowercase, colons lit in `--rubric` (the
  "powered-on" mark from the vault wordmark, printed in the rubric ink). This is the site's most
  visible cypherpunk touch.
- **Mono meta lines:** every post carries its engraved label — date, reading length — in the
  12.5px tracked register. Small, precise, machine-voiced.
- **`»` for departure**, sparingly: external links, `» read more`. Never decorative.
- **Brackets confine themselves to true controls:** the code-block `copy`, the theme control if it
  needs text at all. No bracket-actions in prose, no `//` heads on reader pages — section heads in
  content are book-face small caps. The `//` register survives only in the colophon, where the
  machine properly speaks.
- **Hairlines, not borders**, everywhere: header rule, index seams, plate frames. The 4px maroon
  bars retire; cards and box-shadows retire. The page reads as one continuous sheet.

## 4. chrome & colophon

- **Header:** one quiet row, hairline rule beneath. `:: bgins ::` left; nav right (`blog ·
  projects · about`, Geist Mono lowercase) with the active section marked — `▸` for now, manicule
  candidate in §6. No 4px bar, no sticky, no hamburger.
- **Footer (new — the site currently just ends):** a **colophon** in the emblem-book's three-part
  grammar. Pictura: the monogram device, small. Motto: direction chosen, finalist pending (see
  below) — an em-rule `———` holds the line until it is engraved (mottos are "engraved on static
  plates, not performed"; no rush). Subscriptio: the colophon proper — `// colophon` head (the
  machine's one heading), links `feed · source · pgp` in mono, and a line in the atlas voice:
  *set in ‹book face› & Geist Mono · Svelte · S3*. The Dürer two-hands rule licenses the
  marginalia hand "only for a coda" — the colophon is the coda, so the calligraphic monogram
  lives here by law, not exception.

**The motto — the *sublimare* family (direction chosen 2026-07-08).** First conjugation:
*sublimo, sublimare, sublimavi, sublimatum* — "to raise on high, to elevate"; in the alchemists'
usage, **sublimation**: matter driven up as vapor and re-condensed, purified. It reads perfectly
at this address — raw notes driven through the still and condensing as essays — Renaissance
alchemy on the paper side, state-change on the cypherpunk side. Shortlist for the engraving:

| candidate | grammar | reading |
|---|---|---|
| *solve et sublima* | paired imperatives | "dissolve and sublime" — a riff on the alchemists' *solve et coagula* |
| *sublima* | imperative sg. | "elevate" — one word, the *sapere aude* energy |
| *sublimate* | imperative pl. | "elevate, all of you" — and the Latin plural imperative is spelled exactly like the English verb: the engraving reads in both languages at once |
| *sublimatum est* | perfect passive | "it has been sublimated" — colophon-voiced, spoken of the finished work |
| *per sublimationem* | method label | "by way of sublimation" — the process stamp on the alchemist's vessel |

Hold *solve et sublima* and *sublimate* as finalists; live with both before engraving.

## 5. the device — the monogram becomes the site's printer's mark

Each surface in the family carries its own device: next has the b2 core and the volvelle, flp has
the centaur watermark. The site's device already exists — the interlaced calligraphic monogram
languishing as a favicon. Elevate it, in the tradition it belongs to (Aldus' dolphin-and-anchor;
Dürer's own AD mark):

- **Redraw as SVG**, currentColor, inscribed in a faint construction circle with the mother-circle
  and centerlines left visible and four compass pricks at the cardinals — the marginalia-hand
  glyph mounted by the geometer hand. Inked in `--rubric` — the seal printed in red, as
  printers' devices traditionally were.
- **Home page hero plate:** the device sits in a clearing on **Browne's reticulated Network** —
  the exact flp scene-1 / next emblem substrate (rhombic quincunx lattice, `--w-faint` lines,
  stroke 0.6, low opacity, masked clearing under the plate). Emblem grammar: pictura (the device),
  motto (the wordmark), subscriptio (the one-line bio).
- **The flip — the site's one mechanical ceremony.** Tap/click the device and the plate flips
  (0.7s, `cubic-bezier(0.4, 0.1, 0.2, 1)`, backface hidden — the next Emblem card verbatim) to its
  **contact plate**: a QR inked as a construction plate (square inscribed in the circle, compass
  pricks, `uqr` at ecc H) carrying `https://github.com/bgins` (decided 2026-07-08 — the payload
  can graduate to a PGP fingerprint or `did:key` later; the plate doesn't care what it carries).
  House rule honored: **the QR plate is pinned light in both themes** —
  softened at night, never inverted, because an inverted QR may not scan.
- **Regenerate favicon / apple-touch-icon / OG card** from the redrawn SVG. The OG card follows
  the flp social-card pattern: cream ground, device plate, title — now in Garamond with a mono
  meta line. Fixes the missing `og:image` and webmanifest while we're here.

## 6. ornament & flourish — the printed page's kit

The brief loosened the budget: refined *and* flourishing. The rule that keeps flourish from
becoming clutter: **ornament lives at thresholds** — where a text begins, ends, or breaks — and
every figure is constructible with its construction showing (CONCEPTS.md: "arc centers are
pricked, figures are inscribed in one another, and measure is marked with ticks").

- **Versals — the rubricated initial (decided 2026-07-12: vermilion).** Each post opens with a
  drop cap in `--rubric`: the display cut (EB Garamond if it keeps the display slot, else the
  book face), three lines tall, via CSS `initial-letter` (progressive enhancement; degrades to a
  normal initial). The single most book-making flourish available to us, and it costs ~10 lines
  of CSS.
- **Headpiece.** A slim constructed band at the top of each post between meta line and title —
  a centered rosette or interlace segment in the Dürer-knot vocabulary, `--w-faint`, hairline
  weight. Optional; skip if it crowds (the versal may be flourish enough at the head).
- **Tailpiece — the cul-de-lampe.** Every post ends with a mark, as printed books do: the quincunx
  (dice-five, pricked sepia dots) or the device in miniature. The reader knows the text is done.
- **`<hr>` becomes the quincunx** mid-text: five pricked dots in Browne's planting pattern instead
  of a rule.
- **Blockquotes:** book-face italic, flanked by guillemets `» «` in `--rubric` at 0.55 opacity, hanging
  cite in small caps — the flp essay-quote register translated into the book face.
- **Plate frames for images.** Post heroes and project screenshots sit inside a hairline frame
  with compass-prick crosses at the corners — the registration-mark motif. Captions in the atlas
  voice: *fig. — alt text*, book-face italic, `--w-muted`. Existing `imageAlt` / `imageAttribution`
  frontmatter feeds this directly.
- **The manicule ☞ — candidate active marker.** The Renaissance reader's pointing hand, redrawn as
  a fine-line 20×20 compass-arc glyph per the next-icons spec, marking the active nav item and
  hovered index row. Risk: "silhouette survives 14px, detail doesn't" — if the hand muds at 13px,
  fall back to `▸` and let the manicule serve larger (e.g., pull-quotes, the 404). Approved
  2026-07-08 — prototype in the icon harness (the next-icons draw→render→screenshot loop) before
  committing.
- **List bullets:** the custom `•` becomes a `·` in `--ink-faint`.
- **The Network appears at most twice** sitewide (home hero, optionally the 404). Substrate, not
  wallpaper.

## 7. pages

- **Home / blog index.** The hero plate (§5) above; posts grouped by year beneath, year heads in
  book-face small caps. Rows full-bleed and hairline-separated: title in the book face at
  19–20px, date right-set in the mono meta register. Hover: the active marker (▸ or manicule) appears in
  `--rubric` — replacing the 4px maroon border.
- **Post page.** Mono meta line (date · length), optional headpiece, book-face title, hero image as
  a plate with its *fig.* caption, versal opening the body, quincunx breaks, tailpiece at the end.
  Prose links in the writing ink under a fine ruled underline (`--rule-under`), vermilion in the
  hover (swatch 02, treatment c). Dates render at prerender time in a fixed
  format (`2026 · 07 · 08`) — no `Intl`-after-hydration flash.
- **Projects — specimen plates.** Each project a plate in the atlas: screenshot in a
  compass-pricked hairline frame, caption *Tab. I · everywhere computer* numbered in sequence,
  description in the book face, actions quiet and mono: `play »` · `read more`. No cards, no shadows.
- **About — the long colophon.** Keep the prose; set it in the book register; end on the device.

## 8. code blocks — Vitesse on paper

Replace the stock Prism theme with **Shiki dual themes, `vitesse-light` / `vitesse-dark`**, wired
through mdsvex's highlighter and switched by the same `[data-theme]` attribute. Lineage-correct,
not just pretty: next's semantic hues are literally the Vitesse light/dark pairs, so code shares
color identity with the family. Blocks sit on `--bg-raised` with a hairline seam; inline code is a
quiet raised chip. Code is the machine's voice — here the mono register and a small `copy` control
are fully at home.

## 9. instruments — the motion budget

flp's mechanical feel is almost entirely static geometry plus stepped, detented state changes —
two motion declarations in its whole engine. next added ceremony for one threshold moment. The
site sits nearer flp, and gentler than v1 planned:

| interaction | mechanism |
|---|---|
| the device flip (§5) | 0.7s `cubic-bezier(0.4, 0.1, 0.2, 1)` 3D flip — the one ceremony |
| theme control | not a bracket row: a small engraved **sun/moon glyph** (compass-arc, 20-grid, next-icons spec) in the colophon or header corner; three detents auto → day → night, current state named in a mono microlabel; hard cut, no crossfade — a switch, not a dimmer |
| index rows & nav | active marker + hairline reveal, ≤100ms ease — quiet, not a hard invert |
| `copy` on code | the strike ring — the next moon-tap pulse (0.55s ease-out, scale to ~3, fade), then a check for a beat |
| keyboard detents (easter egg) | `j`/`k` step through index rows, keys latched so a held key fires once — the instrument detent from flp's engine |

`prefers-reduced-motion` cuts the flip to an instant face swap and the pulse to a plain state
change. No scroll-jacking, no entrance animations, no parallax. Motion belongs to instruments the
reader operates, never to ornament.

## 10. housekeeping (fold into phase 0)

- Blog index at build time: replace the client `fetch('/manifest.json')` with a server `load` /
  `import.meta.glob` over the posts — the list prerenders, no hydration flash. Keep the manifest
  script solely for RSS, or fold it in.
- RSS: normalize every URL to `https://brianginsburg.com` (kill `www.` and the `wwww.` typo); fix
  the log line that claims `rss.xml` while writing `feed.xml`; fix the single-quoted `${path}`
  template literal in `gen-manifest.js`.
- Copy: "progamming" → "programming" (home meta, projects meta, RSS); give the projects page its
  own title/description; sweep the draft-post typos.
- Add `og:image`, apple-touch-icon, webmanifest (§5 assets).
- **Svelte 5 migration early** (`npx sv migrate svelte-5`), before writing new components: flp is
  already Svelte 5 runes, so ported components (grain overlay, device plate, network substrate)
  land unchanged, written once.

## 11. what we do not do

- No borders where a hairline serves; no cards; no drop shadows.
- No second ornament system — every figure is compass-and-rule with construction visible, drawn
  from the family's existing vocabulary (quincunx, construction circle, compass pricks, knots).
- Ornament at thresholds only — heads, feet, breaks, seams. Never mid-prose, never animated.
- No CRT green, no glitch effects (flp tried a feTurbulence glitch-dissolve and **dropped it**:
  "it read as a foreign vocabulary next to the botanical line work").
- No marigold, no deliver/delay/decide hues — those semantics live in the apps.
- No bracket grammar or `//` heads on reader-facing prose surfaces — the machine's voice stays in
  the margins (chrome, meta, code, colophon).
- Icons are stroke, the device is fill/engraving — don't cross the registers. Any control glyph
  the site needs (sun/moon, manicule, copy) follows the next-icons spec: 20×20 grid, 1.5 stroke,
  compass arcs, currentColor.

## 12. phases

1. **Phase 0 — housekeeping.** §10 fixes + Svelte 5 migration. Shippable alone, no visual change.
2. **Phase 1 — foundation.** Body-face swatch (§2) then token sheet, the chosen book face +
   Geist Mono, grain overlay, theme plumbing, base type scale. Wool, Rosario/Lato/Cousine, and
   the maroons retire. The site already reads as family after this phase.
3. **Phase 2 — the book.** Header + colophon, index rows + year heads, markdown components
   (blockquote, headings, links, hr-quincunx, bullets, plate frames + captions), post/page
   layouts, versals + tailpieces, projects-as-plates, Shiki Vitesse.
4. **Phase 3 — the device.** Monogram redrawn as SVG; hero plate on the Network; favicon /
   apple-touch / OG regenerated.
5. **Phase 4 — instruments.** The flip-to-contact-plate, the sun/moon theme switch, copy
   strike-ring, keyboard detents, manicule prototype. Reduced-motion cuts throughout.

Each phase leaves the site deployable; the existing Playwright checks extend per phase (theme
attribute present, index prerendered, feed URLs normalized).

## 13. open questions

(Earlier rounds are answered in the decisions log; the type and color foundations are now fully
decided — Literata body, EB Garamond display, Geist Mono machine voice, vermilion `#a83220` day /
`#a84a2c` night.)

1. **Motto finalist:** *solve et sublima* vs. *sublimate* (§4) — live with both before engraving;
   the em-rule holds the line.
2. **Manicule at 13px:** outcome of the icon-harness prototype — commit, or fall back to `▸`.
