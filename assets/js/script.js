/*First problem*/
const img = document.getElementById("my-image");

img.addEventListener('click', () => {
    img.classList.toggle('border-click');
});


/*second problem*/

const inputs = document.querySelectorAll('.input-sticker');
const calculateBtn = document.getElementById('calculate');
const result = document.getElementById('result');

const calculateTotalStickers = () => {
    let totalStickers = 0;

    inputs.forEach(input => {
        totalStickers += parseInt(input.value) || 0;
    });

    if (totalStickers <= 10) {
        result.textContent = `Llevas ${totalStickers} stickers`;
    } else {
        result.textContent = 'Llevas demasiados stickers';
    }
};

calculateBtn.addEventListener('click', calculateTotalStickers);

/*third problem*/

const options = document.querySelectorAll('.select-option');
options.forEach(select => {
    for (let i = 1; i <= 9; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        select.appendChild(option);
    }
});

const selects = document.querySelectorAll('.select-option');
const getIntoBtn = document.getElementById('get-into');
const verification = document.getElementById('verification');

const verifyPassword = () => {
    let password = '';
    selects.forEach(select => {
        password += select.value;
    });

    if (password === '911') {
        verification.textContent = 'Password 1 correcto';
    } else if (password === '714') {
        verification.textContent = 'Password 2 es correcto';
    } else {
        verification.textContent = 'Password incorrecto';
    }
};

getIntoBtn.addEventListener('click', verifyPassword);