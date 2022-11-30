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
    champions.forEach(champion => {
        template.querySelector('.photo').setAttribute('src', champion.img);
        const info = template.querySelector('.info');
        info.querySelector('img').setAttribute('src', champion.flag);
        info.querySelector('span').textContent = champion.text;
        const clone = template.cloneNode(true);
        fragment.appendChild(clone);
    });
    championsContainer.appendChild(fragment);
}
