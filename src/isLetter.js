// 判断一个字符是否为字母，只考虑长度为1

export const isLetter_1 = (char) => /^[a-zA-Z]$/.test(char);

export const isLetter_2 = (char) => char.toLowerCase() !== char.toUpperCase();

export const isLetter_3 = (char) => {
	if (char.length !== 1) return false;
	let charCode = char.charCodeAt(0);
	return (charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122);
};
