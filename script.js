document.addEventListener("DOMContentLoaded", ()=> {
    cargarPoemasApi()

    // Obtén la fecha actual
    const fechaActual = new Date()
    const diaDeHoy = fechaActual.getDate() // Obtiene el día del mes (1-31)
    
    // Obtén todos los divs con el id 'dias-recorridos'
    const divs = document.querySelectorAll(".contenedor-dia")
    
    // Recorre todos los divs con días
    divs.forEach(function(dia) {
        // Obtén el número de día de cada div
        const numeroDia = parseInt(dia.querySelector(".dias").textContent)
        
        // Si el día del div es menor que el día actual, añade la X
        if (numeroDia <= diaDeHoy) {
            dia.setAttribute("id", "dias-recorridos")
        }
    })
})

async function cargarPoemasApi() {
    try
    {
        const response = await fetch("https://67474f1a38c8741641d64755.mockapi.io/poemas")
        if (!response.ok) throw new Error('Error en la carga: ' + response.status)
            const data = await response.json()
            const poemas = data.map(item => item.contenido)
            console.log(poemas)
            colocarPoemaPagina(poemas)

    } 
    catch (error) {
        console.error("Error al cargar los poemas:", error)
    }
}

function colocarPoemaPagina(poemas){
    const botonPoema = document.getElementById('boton-poema')
    const textoModal = document.getElementById('texto-modal')

    if(botonPoema){
        if (poemas.length > 0) {
            // toma el poema por orden numerico
            const poemaAleatorio =  poemas[Math.floor(Math.random() * poemas.length)]
            
            console.log(poemaAleatorio)
            // agrego la frase al contenedor
            textoModal.textContent = poemaAleatorio
        }  
    }
}