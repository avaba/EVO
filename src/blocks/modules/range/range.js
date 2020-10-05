import noUiSlider from "nouislider";
import wNumb from "wnumb";

// Игнорирование
let ignore = document.getElementById('ignore');

noUiSlider.create(ignore, {
    start: [35],
    step: 0.1,
    range: {
        'min': [35],
        'max': [40]
    },
    format: wNumb({
        decimals: 1
    })
});

let ignoreInput = document.getElementById('ignore-input');

ignore.noUiSlider.on('update', function (values, handle) {
    ignoreInput.value = values[handle];
});

ignoreInput.addEventListener('change', function () {
    ignore.noUiSlider.set(this.value);
});

// Срабатывание

let operation = document.getElementById('operation');

noUiSlider.create(operation, {
    start: [35],
    step: 0.1,
    range: {
        'min': [35],
        'max': [40]
    },
    format: wNumb({
        decimals: 1
    })
});

let operationInput = document.getElementById('operation-input');

operation.noUiSlider.on('update', function (values, handle) {
    operationInput.value = values[handle];
});

operationInput.addEventListener('change', function () {
    operation.noUiSlider.set(this.value);
});