/* Control glyphs in the instrument register: 20×20 grid, 1.5 stroke,
 * round caps and joins, currentColor, fill none. Every curve is a circular
 * arc of a named radius; every straight is ruled (the compass-arc rule).
 * Rendered through Icon.svelte, which supplies the shared svg attributes.
 */
export const icons = {
  // sun — a compass disc with eight ruled rays (the day detent)
  sun:
    '<circle cx="10" cy="10" r="3.5"/>' +
    '<path d="M10 4.4V2.4"/><path d="M15.6 10H17.6"/><path d="M10 15.6V17.6"/><path d="M4.4 10H2.4"/>' +
    '<path d="M13.96 6.04 15.37 4.63"/><path d="M13.96 13.96 15.37 15.37"/>' +
    '<path d="M6.04 13.96 4.63 15.37"/><path d="M6.04 6.04 4.63 4.63"/>',

  // moon — a crescent bounded by two circular arcs (the night detent)
  moon: '<path d="M10 2.5a5 5 0 0 0 7.5 7.5 7.5 7.5 0 1 1-7.5-7.5Z"/>',

  // copy — a front sheet over the corner of a second, ruled with arc corners
  copy:
    '<rect x="7" y="7" width="9" height="9" rx="1.5"/>' +
    '<path d="M13 4H5.5A1.5 1.5 0 0 0 4 5.5V13"/>',

  // done — a ruled check, the copy acknowledgement
  done: '<path d="M4.5 10.5 8.5 14.5 15.5 6"/>'
}
