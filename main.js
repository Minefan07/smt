Math.randomSeed(os.time)
function randomInt(max) {
	return Math.floor(Math.random() * max)
}
let x = randomInt(16)
let y = randomInt(16)
let z = document.getElementById("numOne")
let a = document.getElementById("numTwo")
let totalTimeSec = 00
let totalTimeMin = 0
let b = document.getElementById("seconds")
let c = document.getElementById("minutes")
let normTime = document.getElementById("timeNorm").value
let qTime = normTime
let ans = document.getElementById("ans")
let points = document.getElementById("points")
let pointsNum = 0
function wait(num) {
	setTimeout(() => num);
}
function start() {
	x = randomInt(16)
	y = randomInt(16)
	z.innerHTML = x
	a.innerHTML = y
	qTime = normTime
}
function check() {
	if (ans.value == x*y) {
		pointsNum += 1
		points.innerHTML
		start()
	} else {
		alert("Try again!")
	}
}
async function time() {
	totalTimeSec += 1
	qTime -= 1
	if (totalTimeSec == 60) {
		totalTimeMin += 1
		totalTimeSec = 0
	}
	b.innerHTML = totalTimeSec
	c.innerHTML = totalTimeMin
	if (totalTimeSec >= 9) {
		b.innerHTML = 0 + totalTimeSec
	}
	if (qTime == 0) {
		alert("Time is up! Returning to home page!")
		window.location("./index.html"
	}
	await wait(1000)
	time()
}