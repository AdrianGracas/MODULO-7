const form = document.getElementById('form-validating');
const valorA = document.getElementById('valor-a');
let formEValido = false

function validaNumber() {
    var valorA = document.getElementById("valor-a").value;
    var valorB = document.getElementById("valor-b").value;

    return valorA < valorB;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const valorA = document.getElementById('valor-a');
    const valorB = document.getElementById('valor-b');
    const mensagemSucesso = `O valor B que é: <b>${valorB.value}<b>, é sim superior ao valor A que é: ${valorA.value}!!`;

    formEValido = validaNumber(valorB>valorA)
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.success-validating');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        valorA.value = '';
        valorB.value = '';
    } else {
        valorA.boder = '10px solid red'
        document.querySelector('.error-validating').style.display = 'block';}
})

console.log(form);
