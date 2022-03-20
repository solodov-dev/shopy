export default function priceToString(price: number) {
  const s = price.toString().padStart(3, "0");
  return s.slice(0, -2) + '.' + s.slice(-2) + '€';
}
