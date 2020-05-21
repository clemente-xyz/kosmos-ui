const MONTHS_SPANISH_DICTIONARY = {
  January: "Enero",
  February: "Febrero",
  March: "Marzo",
  April: "Abril",
  May: "Mayo",
  June: "Junio",
  July: "Julio",
  August: "Agosto",
  September: "Septiembre",
  October: "Octubre",
  November: "Noviembre",
  December: "Diciembre"
} as { [key: string]: string };

const DAYS_SPANISH_DICTIONARY = {
  Mo: "Lu",
  Tu: "Ma",
  We: "Mi",
  Th: "Ju",
  Fr: "Vi",
  Sa: "Sa",
  Su: "Do"
} as { [key: string]: string };

function translateMonth(monthYearDate: string) {
  const [month, year] = monthYearDate.split(" ");

  return `${MONTHS_SPANISH_DICTIONARY[month]} ${year}`;
}

function translateDay(day: string) {
  return DAYS_SPANISH_DICTIONARY[day];
}

export { translateMonth, translateDay };
