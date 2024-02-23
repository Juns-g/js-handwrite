const isUndefined = ($) => typeof $ === 'undefined';
const isNumber = ($) => typeof $ === 'number';
const isString = ($) => typeof $ === 'string';
const isBoolean = ($) => typeof $ === 'boolean';
const isObject = ($) => typeof $ === 'object' && $ !== null;
const isSymbol = ($) => typeof $ === 'symbol';
const isBigInt = ($) => typeof $ === 'bigint';
const isNull = ($) => $ === null;

export const isLooselyEqual = (x, y) => {
	// 类型相同转 ===
	if (typeof x === typeof y) return x === y;

	// undefined == null = true
	if (isNull(x) && isUndefined(y)) return true;
	if (isUndefined(x) && isNull(y)) return true;

	// 特殊对象，document.all == null = true
	if (isUndefined(x) && x instanceof Object && (isUndefined(y) || isNull(y))) return true;
	if (isUndefined(y) && y instanceof Object && (isUndefined(x) || isNull(x))) return true;

	// '1' == 1 = true
	if (isNumber(x) && isString(y)) return isLooselyEqual(x, Number(y));
	if (isString(x) && isNumber(y)) return isLooselyEqual(Number(x), y);

	// 9n == '9' -> 9n === BigInt('9')
	if (isBigInt(x) && isString(y)) {
		let n;
		try {
			n = BigInt(y);
		} catch {
			return false;
		}
		return isLooselyEqual(x, n);
	}
	if (isString(x) && isBigInt(y)) return isLooselyEqual(y, x);

	// [] == false -> [] == +false
	if (isBoolean(x)) return isLooselyEqual(+x, y);
	if (isBoolean(y)) return isLooselyEqual(x, +y);

	// 原始值与对象比较
	if (isObject(x) && (isNumber(y) || isString(y) || isBoolean(y) || isSymbol(y) || isBigInt(y))) return isLooselyEqual(x.toString(), y);
	if (isObject(y) && (isNumber(x) || isString(x) || isBoolean(x) || isSymbol(x) || isBigInt(x))) return isLooselyEqual(x, y.toString());

	// 9n == 9 -> Number(9) === 9
	if ((isBigInt(x) && isNumber(y)) || isNumber(x) & isBigInt(y)) {
		return (
			x !== Number.POSITIVE_INFINITY &&
			x !== Number.NEGATIVE_INFINITY &&
			y !== Number.POSITIVE_INFINITY &&
			y !== Number.NEGATIVE_INFINITY &&
			Number(x) === Number(y)
		);
	}
	return false;
};
