const menu = document.getElementById('menu') as HTMLElement;
const navigation = document.getElementById('nav') as HTMLElement;

menu.addEventListener('click', () => {
	const isNavHidden = navigation.classList.contains('hidden')
	isNavHidden
		? navigation.classList.remove('hidden')
		: navigation.classList.add('hidden')
})