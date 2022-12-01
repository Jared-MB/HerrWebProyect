"use strict";
const menu = document.getElementById('menu');
const navigation = document.getElementById('nav');
menu.addEventListener('click', () => {
    const isNavHidden = navigation.classList.contains('hidden');
    isNavHidden
        ? navigation.classList.remove('hidden')
        : navigation.classList.add('hidden');
});
if (window.location.pathname.includes('champions')) {
    const champions = [
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
        }
    ];
    const championsContainer = document.getElementById('champions-container');
    const template = document.getElementById('champion-card-template').content;
    const fragment = document.createDocumentFragment();
    const generateCards = (championsParam, fragmentParam) => {
        championsParam.forEach(champion => {
            template.querySelector('.photo').setAttribute('src', champion.img);
            const info = template.querySelector('.info');
            info.querySelector('img').setAttribute('src', champion.flag);
            info.querySelector('span').textContent = champion.text;
            const clone = template.cloneNode(true);
            fragmentParam.appendChild(clone);
        });
    };
    generateCards(champions, fragment);
    championsContainer.appendChild(fragment);
    const search = (value) => {
        if (value) {
            championsContainer.innerHTML = '';
            const filteredChampions = champions.filter(champion => champion.text.toLowerCase().includes(value.toLowerCase()));
            const championsFragment = document.createDocumentFragment();
            generateCards(filteredChampions, championsFragment);
            championsContainer.appendChild(championsFragment);
        }
        else {
            championsContainer.innerHTML = '';
            const championsFragment = document.createDocumentFragment();
            generateCards(champions, championsFragment);
            championsContainer.appendChild(championsFragment);
        }
    };
    const form = document.querySelector('form');
    form.addEventListener("submit", (e) => {
        var _a;
        e.preventDefault();
        const value = (_a = e.target.querySelector('input')) === null || _a === void 0 ? void 0 : _a.value;
        search(value);
    });
    const input = document.querySelector('input');
    input.addEventListener('keyup', (e) => {
        const value = e.target.value;
        search(value);
    });
}
