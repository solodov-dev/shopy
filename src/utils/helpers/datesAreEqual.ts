export default function datesAreEqual(date1: Date, date2: Date) {
  return date1.toDateString() === date2.toDateString();
}
