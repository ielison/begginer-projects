const counter = document.querySelector('#contador')
const btns = document.querySelectorAll('.btn')


btns.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		const styles = e.currentTarget.classList

		if (styles.contains('increase')) {
			count++
		} else if (styles.contains('decrease')) {
			count--
		} else {
			count = 0
		}

		if (count > 0) {
			counter.style.color = 'green'
		}

		if (count < 0) {
			counter.style.color = 'red'
		}

		if (count === 0) {
			counter.style.color = 'grey'
		}

		counter.textContent = count
	})
})
