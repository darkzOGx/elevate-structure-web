/**
 * Date utility functions for blog post dates
 *
 * Fixes timezone issues when parsing YYYY-MM-DD date strings.
 * When creating Date objects from date-only strings like '2025-11-12',
 * JavaScript interprets them as UTC midnight, which can cause off-by-one
 * day errors when converting to local timezone for display.
 */

/**
 * Parse a date string (YYYY-MM-DD) as a local date, not UTC
 * This prevents timezone conversion issues when displaying dates
 *
 * @param dateString - Date string in YYYY-MM-DD format
 * @returns Date object representing local date at midnight
 */
export function parseLocalDate(dateString: string): Date {
  const [year, month, day] = dateString.split('-').map(Number)
  // Create date in local timezone (months are 0-indexed)
  return new Date(year, month - 1, day)
}

/**
 * Format a blog post date for display
 * Ensures date is parsed as local time to prevent off-by-one errors
 *
 * @param dateString - Date string in YYYY-MM-DD format
 * @param options - Intl.DateTimeFormat options
 * @returns Formatted date string
 */
export function formatBlogDate(
  dateString: string,
  options: Intl.DateTimeFormatOptions = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }
): string {
  const date = parseLocalDate(dateString)
  return date.toLocaleDateString('en-US', options)
}
