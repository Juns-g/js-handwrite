export const slice = (str: string, startIndex: number = 0, endIndex: number = str.length) => {
	let start = startIndex < 0 ? startIndex + str.length : startIndex;
	let end = endIndex < 0 ? endIndex + str.length : endIndex;
	if (start > end) return '';

	let res = '';
	for (let i = start; i < end; i++) {
		res += str[i];
	}
	return res;
};
