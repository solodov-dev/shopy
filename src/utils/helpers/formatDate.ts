export default function formatDate(date: Date) {
  return date.toLocaleDateString("en-GB", {
    weekday: "long",
    month: "long",
    year: "numeric",
    day: "2-digit",
    hour: "numeric",
    minute: "numeric",
  });
}
