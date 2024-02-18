// Promise.all
// 接受一个数组 promises
// 返回一个 Promise
// 只有当数组中所有的 promise 都 fulfilled 时，新 Promise 才会 fulfilled
// 只要数组中有一个 promise rejected，那么新 Promise 就会被 rejected

Promise.myAll = function (promises) {
	let arr = [];
	let count = 0;
	return new Promise((resolve, reject) => {
		promises.forEach((item, index) => {
			Promise.resolve(item)
				.then((res) => {
					arr[index] = res;
					count++;
					if (count === promises.length) resolve(arr);
				})
				.catch((err) => reject(err));
		});
	});
};

// #region
import { p1, p2, p3, p4, p5 } from './testData.js';

// 所有 Promise 都成功
Promise.myAll([p1, p2, p3])
	.then((res) => console.log(res))
	.catch((err) => console.log(err)); // 2秒后打印 [ 'p1', 'p2 延时一秒', 'p3 延时两秒' ]

// 一个 Promise 失败
Promise.myAll([p1, p2, p4])
	.then((res) => console.log(res))
	.catch((err) => console.log(err)); // p4 rejected

// 一个延时失败的 Promise
Promise.myAll([p1, p2, p5])
	.then((res) => console.log(res))
	.catch((err) => console.log(err)); // 1.5秒后打印 p5 rejected 延时1.5秒

// 两个失败的 Promise
Promise.myAll([p1, p4, p5])
	.then((res) => console.log(res))
	.catch((err) => console.log(err)); // p4 rejected
// #endregion
