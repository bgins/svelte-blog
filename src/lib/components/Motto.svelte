<script>
  /* The motto measures the page's foot. Every top-level page renders it as the
   * last child of a flex-column layout that fills the viewport (see the
   * .has-motto blocks that pair with it), so all three end with the same space
   * before the footer divider. Only the about page shows the words. On the
   * blog and projects pages the line is kept but unseen, which holds the box
   * and keeps the feet even by construction. */
  /** @type {{ shown?: boolean }} */
  let { shown = true } = $props()
</script>

<p class="motto" class:unseen={!shown}>sublimare</p>

<style>
  .motto {
    /* margin-top auto floats the line to the foot, and the negative bottom
       margin pulls it into the footer's top gap, eight pixels above the
       divider. padding-top is the minimum clearance below the content, twice
       the page inset, and is absorbed on short pages where the float already
       leaves room. */
    margin: auto 0 -40px;
    padding-top: 80px;
    text-align: center;

    font-family: var(--font-body);
    font-style: italic;
    font-size: 16px;
    letter-spacing: 0.03em;
    color: var(--w-faint);
  }

  .unseen {
    visibility: hidden;
  }
</style>
