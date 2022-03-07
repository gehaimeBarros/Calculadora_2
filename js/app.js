function calc(valor) {
    if (valor == '=') {
        document.calcula.f.value = eval(document.calcula.f.value);
    } else {
        document.calcula.f.value = document.calcula.f.value + valor;
    }
}

//modal
$(document).ready(function () {
    $('#ex1').modal('show');
})