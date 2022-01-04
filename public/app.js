const searchBar = document.querySelector('#search-bar')

searchBar.addEventListener('keyup', (e) => {
	const todoTitles = document.querySelectorAll('.todo-title')

	todoTitles.forEach((todo) => {
		if (!todo.textContent.includes(e.target.value)) {
			todo.parentElement.style.display = 'none'
		}

		if (!e.target.value) {
			todoTitles.forEach((todo) => {
				todo.parentElement.style.display = 'flex'
			})
		}
	})
})
