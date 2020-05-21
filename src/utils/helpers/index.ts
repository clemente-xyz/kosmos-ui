/**
 * Validates if the provided date follows the
 * --- <short weekday>, <numeric day> <short month>. <numeric year> --- format.
 * @param date String representation of the date that wants to be verified.
 * @returns True if the provided date is on format, false otherwise.
 */
function validateDateFormat(date?: string): boolean {
  const validationRegex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;

  return !!(date && validationRegex.test(date));
}

export { validateDateFormat };
