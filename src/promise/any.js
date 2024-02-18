// Promise.any
// 入参是一个数组
// 只要有一个成功就，都成功，只有都失败才失败

Promise.myAny = function (promises) {
	let arr = [];
	let count = 0;
	return new Promise((resolve, reject) => {
		promises.forEach((item, index) => {
			Promise.resolve(item).then(resolve, (err) => {
				arr[index] = { status: 'rejected', val: err };
				count++;
				if (count === promises.length) reject(arr);
			});
		});
	});
};

// #region
import { p1, p2, p3, p4, p5 } from './testData.js';
// 所有 Promise 都成功
Promise.myAny([p1, p2, p3])
	.then((res) => console.log(res))
	.catch((err) => console.log(err)); // p1

// 两个 Promise 成功
Promise.myAny([p1, p2, p4])
	.then((res) => console.log(res))
	.catch((err) => console.log(err)); // p1

// 只有一个延时成功的 Promise
Promise.myAny([p2, p4, p5])
	.then((res) => console.log(res))
	.catch((err) => console.log(err)); // p2 延时1秒

// 所有 Promise 都失败
Promise.myAny([p4, p5])
	.then((res) => console.log(res))
	.catch((err) => console.log(err)); // 没有promise成功
// #endregion
