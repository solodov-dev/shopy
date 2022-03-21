export default function deleteKey<T>(obj: T, key: keyof T) {
  const newObj = { ...obj };
  delete newObj[key];
  return newObj;
}
