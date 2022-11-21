window.addEventListener("load", () => {
    //Icons
    feather.replace();

    //-----------------

    const btnConverter = document.querySelector("#converter");

    function converterValor() {
        const valor = document.querySelector("#valor").value;

        if (valor == "" || !Number(valor)) return;

        const euro = document.querySelector("#euro");
        const dolar = document.querySelector("#dolar");
        const libra = document.querySelector("#libra");

        const resultado = document.querySelector("#res");

        if (euro.checked) {
            resultado.value = (Number(valor) / 5.44).toFixed(2);
        } else if (dolar.checked) {
            resultado.value = (Number(valor) / 5.31).toFixed(2);
        } else if (libra.checked) {
            resultado.value = (Number(valor) / 6.27).toFixed(2);
        }
    }

    btnConverter.addEventListener("click", converterValor);
});
