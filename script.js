const wage = document.querySelector('.wage');
const price = document.querySelector('.price');
const output = document.querySelector('.output');

function calc() {
    const w = parseFloat(wage.value);
    const p = parseFloat(price.value);

    if (!w || !p) {
        output.textContent = "";
        return;
    }
    
    const hours = (p / w).toFixed(2);
    output.textContent = `You Need ${hours} Hours of Work To Afford This Item`
};

wage.addEventListener('input', calc);
price.addEventListener('input', calc);