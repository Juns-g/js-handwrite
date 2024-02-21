export const trim = (str) => str.replace(/^\s*|\s*$/g, '');
export const trimStart = (str) => str.replace(/^\s*/g, '');
export const trimEnd = (str) => str.replace(/\s*$/g, '');

let s = '  fo   ';
console.log(trim(s)); // 'fo'
console.log(trimStart(s)); // 'fo  '
console.log(trimEnd(s)); // '  fo'
