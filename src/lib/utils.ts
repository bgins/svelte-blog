import { browser } from '$app/environment'

export function formatDate(dateString: string): string {
  if (browser) {
    const timestamp: number = Date.parse(`${dateString}`)
    const date: Date = new Date(+timestamp)
    const lang: string = navigator.language
    const formatOptions: Intl.DateTimeFormatOptions = {
      dateStyle: 'long'
    }

    const formattedDate: string = new Intl.DateTimeFormat(lang, formatOptions).format(date)
    return formattedDate
  } else {
    return dateString
  }
}
