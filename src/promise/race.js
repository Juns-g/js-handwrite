// Promise.race
// 接受一个数组
// 返回一个 Promise
// 返回最快的 promise

Promise.myRace = function (promises) {
	return new Promise((resolve, reject) => {
		for (const p of promises) {
			Promise.resolve(p).then(resolve, reject);
		}
	});
};

// #region
import { p1, p2, p3, p4, p5 } from './testData.js';
// p1无延时，p2延时1s，p3延时2s
Promise.myRace([p1, p2, p3])
	.then((res) => console.log(res))
	.catch((err) => console.log(err)); // p1

// p4无延时reject
Promise.myRace([p4, p2, p3])
	.then((res) => console.log(res))
	.catch((err) => console.log(err)); // p4 rejected

// p5 延时1.5秒reject，p2延时1s
Promise.myRace([p5, p2, p3])
	.then((res) => console.log(res))
	.catch((err) => console.log(err)); // 1s后打印: p2 延时一秒

// #endregion
