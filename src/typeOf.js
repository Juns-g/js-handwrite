// 精准的typeof，使用Object.prototype.toString.call()
export const myTypeOf = (data) => Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
