export function formatDate(dateString: string): string {
  const date: Date = new Date(Date.parse(dateString))
  const pad = (n: number) => String(n).padStart(2, '0')

  // UTC keeps prerendered output identical regardless of build machine
  return `${date.getUTCFullYear()} · ${pad(date.getUTCMonth() + 1)} · ${pad(date.getUTCDate())}`
}
