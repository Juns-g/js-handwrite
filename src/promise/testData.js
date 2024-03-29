export const p1 = Promise.resolve('p1');
export const p2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('p2 延时一秒');
	}, 1000);
});
export const p3 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('p3 延时两秒');
	}, 2000);
});

export const p4 = Promise.reject('p4 rejected');

export const p5 = new Promise((resolve, reject) => {
	setTimeout(() => {
		reject('p5 rejected 延时1.5秒');
	}, 1500);
});
