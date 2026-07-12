export function formatDate(dateString: string): string {
  const date: Date = new Date(Date.parse(dateString))
  const formatOptions: Intl.DateTimeFormatOptions = {
    dateStyle: 'long'
  }

  // A fixed locale keeps prerendered and hydrated output identical
  return new Intl.DateTimeFormat('en-US', formatOptions).format(date)
}
