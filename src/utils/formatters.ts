export function toPersianNum(num: number | string): string {
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return num.toString().replace(/\d/g, (x) => persianDigits[parseInt(x)]);
}

export function formatPrice(price: number): string {
  const formatted = price.toLocaleString('en-US');
  return `${toPersianNum(formatted)} تومان`;
}