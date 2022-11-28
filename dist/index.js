"use strict";
const menu = document.getElementById('menu');
const navigation = document.getElementById('nav');
menu.addEventListener('click', () => {
    const isNavHidden = navigation.classList.contains('hidden');
    isNavHidden
        ? navigation.classList.remove('hidden')
        : navigation.classList.add('hidden');
});
