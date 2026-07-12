import { mount, unmount } from 'svelte'
import CopyButton from '$lib/components/CopyButton.svelte'

/**
 * Give every highlighted code block a copy control. The Shiki output is a
 * raw <pre class="shiki"> with no component seam, so we enhance it after the
 * content mounts: wrap each block in a positioned container and mount a
 * CopyButton into it. The button carries the block's text.
 *
 * @param {HTMLElement} node
 */
export function enhanceCode(node) {
  /** @type {ReturnType<typeof mount>[]} */
  const instances = []

  for (const pre of node.querySelectorAll('pre.shiki')) {
    if (pre.parentElement?.classList.contains('code-block')) continue

    const wrap = document.createElement('div')
    wrap.className = 'code-block'
    pre.replaceWith(wrap)
    wrap.appendChild(pre)

    instances.push(mount(CopyButton, { target: wrap, props: { text: pre.textContent ?? '' } }))
  }

  return {
    destroy() {
      for (const instance of instances) unmount(instance)
    }
  }
}
