function convertir() {
    const cantidadMedida = document.getElementById("medidas").value;
    const tipoMedida = document.getElementById("medidasOpcion").value;
    
    if (tipoMedida == "m") {
        const resultadoM = cantidadMedida;
        const resultadoCm = cantidadMedida * 100;
        const resultadoMm = cantidadMedida * 1000;
        convertirResultado (resultadoM, resultadoCm, resultadoMm)
    } else if ( tipoMedida == "cm") {
        const resultadoM = cantidadMedida / 100;
        const resultadoCm = cantidadMedida;
        const resultadoMm = cantidadMedida / 1000;
        convertirResultado (resultadoM, resultadoCm, resultadoMm)
    } else if (tipoMedida == 'mm') {
        const resultadoM = cantidadMedida / 1000;
        const resultadoCm = cantidadMedida / 10;
        const resultadoMm = cantidadMedida;
        convertirResultado (resultadoM, resultadoCm, resultadoMm)
    }

    function convertirResultado (resultadoM, resultadoCm, resultadoMm){
        const updateM = document.getElementById('metrosOutput');
        const updateCm = document.getElementById('centimetrosOutput');
        const updateMm = document.getElementById('milimetrosOutput');

        updateM.textContent = resultadoM;
        updateCm.textContent = resultadoCm;
        updateMm.textContent = resultadoMm;
    }

}