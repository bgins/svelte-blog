export function formatDate(dateString: string): string {
  const timestamp: number = Date.parse(`${dateString}`);
  const date: Date = new Date(+timestamp);
  const lang: string = navigator.language;
  const formatOptions: Intl.DateTimeFormatOptions = {
    dateStyle: 'long'
  };

  const formattedDate: string = new Intl.DateTimeFormat(lang, formatOptions).format(date);
  return formattedDate;
}
