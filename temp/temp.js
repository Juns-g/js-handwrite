const arr = []

for (var i = 0; i < 3; i++) {
	arr[i] = function () {
		console.log(i)
	}
}

arr.forEach(function (item) {
	item()
})
