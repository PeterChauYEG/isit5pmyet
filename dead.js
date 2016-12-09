let n = 0

while (n < 420) {
	droll(n)
	n++
}

function sleep(ms) {
  setTimeout(() => {
	  console.log('is it 5:00 PM yet?')	
	}, ms)
}

function droll(n) {
  sleep(1000 * n)
}
