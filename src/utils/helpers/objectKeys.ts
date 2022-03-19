export default function objectKeys<T>(obj: T): Array<keyof T> {
  const keys = Object.keys(obj);
  return keys as Array<keyof T>;
}
