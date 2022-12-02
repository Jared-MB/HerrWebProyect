const menu = document.getElementById('menu') as HTMLElement
const navigation = document.getElementById('nav') as HTMLElement

menu.addEventListener('click', () => {
	const isNavHidden = navigation.classList.contains('hidden')
	isNavHidden
		? navigation.classList.remove('hidden')
		: navigation.classList.add('hidden')
})

// Path: champions.html

interface Champion {
	img: string
	text: string
	flag: string
}

if (window.location.pathname.includes('champions')){

	const champions : Champion[] = [
		{
			img: 'img/uruguay.jpg',
			text: 'Uruguay - 1930',
			flag: 'img/uruguay-B.png'
	}, {
			img: 'img/italia.jpg',
			text: 'Italia - 1934',
			flag: 'img/italia-b.png'
	}, {
			img: 'img/italia38.jpg',
			text: 'Italia - 1938',
			flag: 'img/italia-b.png'
	}, {
			img: 'img/uruguay50.jpg',
			text: 'Uruguay - 1950',
			flag: 'img/uruguay-B.png'
	}, {
			img: 'img/alemania54.jpg',
			text: 'Alemania - 1954',
			flag: 'img/alemania-b.png'
	}, {
			img: 'img/brasil58.jpg',
			text: 'Brasil - 1958',
			flag: 'img/brasil.png'
	}, {
			img: 'img/brasil62.jpg',
			text: 'Brasil - 1962',
			flag: 'img/brasil.png'
	}, {
			img: 'img/inglaterra66.jpg',
			text: 'Inglaterra - 1966',
			flag: 'img/inglaterra.png'
	}, {
			img: 'img/BRASIL70.jpg',
			text: 'Brasil - 1970',
			flag: 'img/brasil.png'
	},{
			img: 'img/alemania74.jpg',
			text: 'Alemania-1974',
			flag: 'img/alemania-b.png'
	},{
			img: 'img/argentina78.jpg',
			text: 'Argentina-1978',
			flag: 'img/argentina.png'
	},{
			img: 'img/italia82.jpg',
			text: 'Italia-1982',
			flag: 'img/italia-b.png'
	},{
			img: 'img/argentina86.jpg',
			text: 'Argentina-1986',
			flag: 'img/argentina.png'
	},{
			img: 'img/alemania90.jpg',
			text: 'Alemania-1990',
			flag: 'img/alemania-b.png'
	},{
			img: 'img/brasil94.jpg',
			text: 'Brasil-1994',
			flag: 'img/brasil.png'
	},{
			img: 'img/francia98.jpg',
			text: 'Francia-1998',
			flag: 'img/francia.png'
	},{
			img: 'img/brasil2.jpg',
			text: 'Brasil-2002',
			flag: 'img/brasil.png'
	},{
			img: 'img/italia6.jpg',
			text: 'Italia-2006',
			flag: 'img/italia-b.png'
	},{
			img: 'img/españa10.jpg',
			text: 'España-2010',
			flag: 'img/españa.png'
	},{
			img: 'img/alemania14.jpg',
			text: 'Alemania-2014',
			flag: 'img/alemania-b.png'
	},{
			img: 'img/francia18.jpg',
			text: 'Francia-2018',
			flag: 'img/francia.png'
	}
	] 

	const championsContainer = document.getElementById('champions-container') as HTMLElement
	const template = (document.getElementById('champion-card-template') as HTMLTemplateElement).content
	const fragment = document.createDocumentFragment()

	const generateCards = (championsParam: Champion[], fragmentParam: DocumentFragment) => {
		championsParam.forEach(champion => {
			(template.querySelector('.photo') as HTMLImageElement).setAttribute('src', champion.img)
			const info = template.querySelector('.info') as HTMLElement
			(info.querySelector('img') as HTMLImageElement).setAttribute('src', champion.flag);
			(info.querySelector('span') as HTMLSpanElement).textContent = champion.text
			const clone = template.cloneNode(true) as Node
			fragmentParam.appendChild(clone)
		})
	}

	generateCards(champions, fragment)

	championsContainer.appendChild(fragment)

	const search = (value: string | undefined) => {
		if (value){
			championsContainer.innerHTML = ''
			const filteredChampions = champions.filter(champion => champion.text.toLowerCase().includes(value.toLowerCase()))
			const championsFragment = document.createDocumentFragment()
			generateCards(filteredChampions, championsFragment)
			championsContainer.appendChild(championsFragment)
		} else {
			championsContainer.innerHTML = ''
			const championsFragment = document.createDocumentFragment()
			generateCards(champions, championsFragment)
			championsContainer.appendChild(championsFragment)
		}
	}

	const form = document.querySelector('form') as HTMLFormElement

	form.addEventListener("submit", (e) => {
		e.preventDefault()
		const value = (e.target as HTMLFormElement).querySelector('input')?.value
		search(value)
	})

	const input = document.querySelector('input') as HTMLInputElement

	input.addEventListener('keyup', (e) => {
		const value = (e.target as HTMLInputElement).value
		search(value)
	})

}