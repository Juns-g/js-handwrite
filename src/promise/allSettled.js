// Promise.allSettled
// 无论里面的成功/失败，都返回成功

Promise.myAllSettled = function (promises) {
	let count = 0;
	let arr = [];

	return new Promise((resolve, reject) => {
		function process(res, index, status) {
			arr[index] = { status, val: res };
			count++;
			if (count === promises.length) resolve(arr);
		}

		promises.forEach((item, index) => {
			Promise.resolve(item).then(
				(res) => {
					process(res, index, 'fulfilled');
				},
				(err) => {
					process(res, index, 'rejected');
				},
			);
		});
	});
};

// #region
import { p1, p2, p3, p4, p5 } from './testData.js';

// 所有 Promise 实例都成功
Promise.myAllSettled([p1, p2, p3])
	.then((res) => console.log(res))
	.catch((err) => console.log(err));
// [
//   { status: 'fulfilled', value: 'p1' },
//   { status: 'fulfilled', value: 'p2 延时一秒' },
//   { status: 'fulfilled', value: 'p3 延时两秒' }
// ]

// 有一个 myAllSettled 失败
Promise.allSettled([p1, p2, p4])
	.then((res) => console.log(res))
	.catch((err) => console.log(err));
// [
//   { status: 'fulfilled', value: 'p1' },
//   { status: 'fulfilled', value: 'p2 延时一秒' },
//   { status: 'rejected' , value: 'p4 rejected' }
// ]

// 所有 myAllSettled 都失败
Promise.allSettled([p4, p5])
	.then((res) => console.log(res))
	.catch((err) => console.log(err));
// [
//   { status: 'rejected', reason: 'p4 rejected' },
//   { status: 'rejected', reason: 'p5 rejected 延时1.5秒' }
// ]

// #endregion
