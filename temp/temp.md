# 阿里国际 ae 一面

## 1、问题：请至少写 4 种 CSS 方案实现元素垂直和水平居中

```html
<div class="box center1 center2">
	<div class="inner inner3">33</div>
</div>

<style>
	.box {
		width: 200px;
		height: 200px;
	}
	.inner {
		width: 50px;
		height: 50px;
	}

	.center1 {
		text-align: center;
		/* 比较新的css支持 */
		align-content: center;
	}

	.center2 {
		display: flex;
		/* grid 也可以 */
		align-items: center;
		justify-content: center;
	}

	.center3 {
		display: relative;
	}
	.inner3 {
		display: absolute;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		margin: auto;
	}

	.center4 {
		display: relative;
	}
	.inner4 {
		display: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
</style>
```

## 2、问题：下面代码输出为 true 的是?

A. console.log([] === []);
B. console.log(undefined == 0);
C. console.log(undefined == false);
D. console.log(false == '');

---

D, 没问题

## 3、问题：以下哪项可以去除变量 str 中的所有空格

A. str.replace(/\s*/g,"")
B. str.replace(/^\s|\s$/g,"")
C. str.replace(/^\s*/, "")
D. str.replace(/(\S\*$)/g, "")

---

A，没问题

## 4、问题：请回答以下代码执行结果

```js
console.log('同步代码 1')

setTimeout(() => {
	console.log('setTimeout')
}, 0)

new Promise((resolve) => {
	console.log('同步代码 2')
	resolve()
}).then(() => {
	console.log('promise.then')
})

console.log('同步代码 3')
```

<!-- 同步代码1 -->
<!-- 同步代码2 -->
<!-- 同步代码3 -->
<!-- promise.then -->
<!-- setTimeout -->

## 5、问题：请回答点击 content 后以下代码的执行结果

```html
<div id="box1">
	<div id="box2">content</div>
</div>
<script>
	const $ = document.querySelector.bind(document)
	const box1 = $('#box1')
	const box2 = $('#box2')
	box1.addEventListener(
		'click',
		() => {
			console.log('box1 true')
		},
		true,
	)
	box1.addEventListener(
		'click',
		() => {
			console.log('box1 false')
		},
		false,
	)

	box2.addEventListener(
		'click',
		() => {
			console.log('box2 true')
		},
		true,
	)
	box2.addEventListener(
		'click',
		() => {
			console.log('box2 false')
		},
		false,
	)
</script>
```

---

<!-- box2 false -->

错了，重复注册不会被覆盖，会都执行，正确的后面看看

## 6、问题：请回答以下 TS 代码的执行结果。如果有错误 请描述出来。

```ts
var user = {
	level: null,
	level1: 0,
}
var level1 = user.level ?? '暂无等级' // 暂无等级
var level2 = user.other_level ?? '暂无等级' // 暂无等级
var level3 = user.level1 ?? '暂无等级' // 0
console.log(level1, level2, level3)

var num = 2 ** 3
console.log(num)
```

---

// 暂无等级 暂无等级 0
// 8

分析没问题，但是 level2 应该是报错

## 7、问题：请修改以下代码，在控制台中每隔 1s 打印数组中的一个元素，直到最后一个元素打印完成

```js
var arr = [1, 2, 3, 4, 5]

for (var i = 0; i < arr.length; i++) {
	setTimeout(function () {
		console.log(arr[i])
	}, 1000)
}
```

---

```js
var arr = [1, 2, 3, 4, 5]

for (let i = 0; i < arr.length; i++) {
	setTimeout(function () {
		console.log(arr[i])
	}, 1000)
}
```

有点问题，1000 也应该处理一下，不然都是一次性打印出来了

## 8、问题：如何在 setInterval 中读取最新的 count 值？ 如何让 num 可以递增？

```tsx
import { useEffect, useState } from 'react'

export default function App() {
	const [num, setNum] = useState(0)
	const [count, setCount] = useState(0)

	useEffect(() => {
		setCount(1)
		setInterval(() => {
			console.log(count)
			setNum(num + 1)
		}, 500)
	}, [])

	console.log('num:', num)
	return null
}
```

---

```tsx
import { useEffect, useState } from 'react'

export default function App() {
	const [num, setNum] = useState(0)
	const [count, setCount] = useState(0)

	useEffect(() => {
		setCount(1)
		setInterval(() => {
			// setCount接受的变量直接传给下面这个
			console.log(count)
			setNum((num) => num + 1)
		}, 500)
	}, [])

	console.log('num:', num)
	return null
}
```

没啥问题

## 9、问题：如何实现以下方法调用

```js
add(1, 2)(3) //6;
add(1)(2, 3) //6;
```

---

```js
const add = (a, b, c) => a + b + c

const curry = (fn) => {
	const newFn = (...rest) => {
		if (rest.length >= fn.length) {
			return fn(...rest)
		} else {
			return (...newRest) => newFn(...rest, ...newRest)
		}
	}
	return newFn
}

const curriedAdd = curry(add)
curriedAdd(1, 2)(3) //6;
curriedAdd(1)(2, 3) //6;
```

柯里化，没啥问题，问了我想写 js 实现还是算法，选的 js 实现后出的这一题
