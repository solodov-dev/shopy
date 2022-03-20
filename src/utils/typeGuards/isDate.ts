export default function isDate(data: any): data is Date {
  return data instanceof Date && typeof data.getTime === 'function';
}

