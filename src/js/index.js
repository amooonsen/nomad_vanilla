function handleIndex() {
	function background() {
		const colors = [
			"#ef5777",
			"#575fcf",
			"#4bcffa",
			"#34e7e4",
			"#0be881",
			"#f53b57",
			"#3c40c6",
			"#0fbcf9",
			"#00d8d6",
			"#05c46b",
			"#ffc048",
			"#ffdd59",
			"#ff5e57",
			"#d2dae2",
			"#485460",
			"#ffa801",
			"#ffd32a",
			"#ff3f34"
		];
		const color1 = colors[Math.floor(Math.random() * colors.length)]
		const color2 = colors[Math.floor(Math.random() * colors.length)]
		document.body.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`
	}

	background()
	setInterval(background, 5000)

	function init(){
		const resetBtn = document.querySelector('#reset-btn')
		const form = document.querySelector('.login-form')
		const userName = document.querySelector('.heading .user-data')
        const main = document.getElementById('main')
        const heading = document.querySelector('.heading')
		resetBtn.addEventListener('click', function(){
			form.reset()
            localStorage.removeItem('username')
			userName.textContent = '';
			form.parentElement.style.opacity = 1;
            form.parentElement.classList.remove('hidden')
            main.classList.add('hidden')
            heading.style.display == 'block'
            console.log(123)
			
		})
	}
	init()
}

handleIndex()
