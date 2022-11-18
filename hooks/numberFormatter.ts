export function useNumberFormatter(options: Intl.NumberFormatOptions = {}) {
  return new Intl.NumberFormat('en', options);
}
