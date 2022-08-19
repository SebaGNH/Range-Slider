'use strict';

let range_input = document.getElementById('range_input');

range_input.addEventListener('mousemove', () => {
    rangeValue.innerHTML = range_input.value;
});