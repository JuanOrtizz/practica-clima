document.addEventListener("DOMContentLoaded", ()=> {
    // Obtén la fecha actual
    const fechaActual = new Date();
    const diaDeHoy = fechaActual.getDate(); // Obtiene el día del mes (1-31)
    
    // Obtén todos los divs con el id 'dias-recorridos'
    const divs = document.querySelectorAll(".contenedor-dia");
    
    // Recorre todos los divs con días
    divs.forEach(function(dia) {
        // Obtén el número de día de cada div
        const numeroDia = parseInt(dia.querySelector(".dias").textContent);
        
        // Si el día del div es menor que el día actual, añade la X
        if (numeroDia <= diaDeHoy) {
            dia.setAttribute("id", "dias-recorridos");
        }
    });
    console.log("punto")
});
