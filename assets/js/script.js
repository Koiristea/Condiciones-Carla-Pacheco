/*Primer problema*/
const img = document.getElementById("miImagen");

img.addEventListener('click', () => {
    img.classList.toggle('border-red');
});


/*Segundo problema*/

const inputs = document.querySelectorAll('.input');
const calcularBtn = document.getElementById('calcular');
const resultado = document.getElementById('resultado');

const calcularTotalStickers = () => {
    let totalStickers = 0;

    inputs.forEach(input => {
        totalStickers += parseInt(input.value) || 0;
    });

    if (totalStickers <= 10) {
        resultado.textContent = `Llevas ${totalStickers} stickers`;
    } else {
        resultado.textContent = 'Llevas demasiados stickers';
    }
};

calcularBtn.addEventListener('click', calcularTotalStickers);

/*Tercer problema*/

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
const ingresarBtn = document.getElementById('ingresar');
const verification = document.getElementById('verification');

const verificarPassword = () => {
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

ingresarBtn.addEventListener('click', verificarPassword);