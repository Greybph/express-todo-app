const searchBar = document.querySelector('#search-bar')

searchBar.addEventListener('keyup', (e) => {
	const todoTitles = document.querySelectorAll('.todo-title')
	const searchQuery = e.target.value.toLowerCase()

	todoTitles.forEach((todo) => {
		if (!todo.textContent.toLocaleLowerCase().includes(searchQuery)) {
			todo.parentElement.parentElement.style.display = 'none'
		}

		if (todo.textContent.toLocaleLowerCase().includes(searchQuery)) {
			todo.parentElement.parentElement.style.display = 'flex'
		}
	})
})
