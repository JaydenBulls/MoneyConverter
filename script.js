// Объект с курсами валют (примерные значения)
const exchangeRates = {
    USD: { EUR: 0.93, RUB: 90.50 },
    EUR: { USD: 1.07, RUB: 97.20 },
    RUB: { USD: 0.011, EUR: 0.010 }
};

// Функция конвертации
function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('from').value;
    const toCurrency = document.getElementById('to').value;
    
    if (isNaN(amount)) {
        document.getElementById('result').innerHTML = 'Введите корректную сумму';
        return;
    }

    if (fromCurrency === toCurrency) {
        document.getElementById('result').innerHTML = 'Выберите разные валюты';
        return;
    }

    let result;
    if (fromCurrency in exchangeRates && toCurrency in exchangeRates[fromCurrency]) {
        const rate = exchangeRates[fromCurrency][toCurrency];
        result = amount * rate;
        document.getElementById('result').innerHTML = 
            `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
    } else {
        document.getElementById('result').innerHTML = 'Курс не найден';
    }
}

// Назначаем обработчик события на кнопку
document.getElementById('convert-btn').addEventListener('click', convertCurrency);

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', function() {
    convertCurrency();
});