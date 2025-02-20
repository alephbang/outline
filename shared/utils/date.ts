import { subDays, subMonths, subWeeks, subYears, format } from "date-fns";
import env from "../env";
import type { DateFilter } from "../types";

export function subtractDate(date: Date, period: DateFilter) {
  switch (period) {
    case "day":
      return subDays(date, 1);

    case "week":
      return subWeeks(date, 1);

    case "month":
      return subMonths(date, 1);

    case "year":
      return subYears(date, 1);

    default:
      return date;
  }
}

/**
 * Converts a locale string from Unicode CLDR format to BCP47 format.
 *
 * @param locale The locale string to convert
 * @returns The converted locale string
 */
export function unicodeCLDRtoBCP47(locale: string) {
  return locale.replace("_", "-").replace("root", "und");
}

/**
 * Converts a locale string from BCP47 format to Unicode CLDR format.
 *
 * @param locale The locale string to convert
 * @returns The converted locale string
 */
export function unicodeBCP47toCLDR(locale: string) {
  return locale.replace("-", "_").replace("und", "root");
}

/**
 * Returns the current date as a string formatted depending on current locale.
 *
 * @returns The current date
 */
export function getCurrentDateAsString(locales?: Intl.LocalesArgument) {
  if (typeof env.DATE_FORMAT !== "undefined") {
    return format(new Date(), env.DATE_FORMAT);
  }
  return new Date().toLocaleDateString(locales, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Returns the current time as a string formatted depending on current locale.
 *
 * @returns The current time
 */
export function getCurrentTimeAsString(locales?: Intl.LocalesArgument) {
  if (typeof env.TIME_FORMAT !== "undefined") {
    return format(new Date(), env.TIME_FORMAT);
  }
  return new Date().toLocaleTimeString(locales, {
    hour: "numeric",
    minute: "numeric",
  });
}

/**
 * Returns the current date and time as a string formatted depending on current
 * locale.
 *
 * @returns The current date and time
 */
export function getCurrentDateTimeAsString(locales?: Intl.LocalesArgument) {
  if (typeof env.DATETIME_FORMAT !== "undefined") {
    return format(new Date(), env.DATETIME_FORMAT);
  }
  return new Date().toLocaleString(locales, {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
}
