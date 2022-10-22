function totalAPagar(cantTickets, categoria){
    const valorTicket = 200;
    let valorAPagar = cantTickets * valorTicket;
    switch (categoria) {
        case "Estudiante":
            valorAPagar = valorAPagar - (valorAPagar * 80 / 100)
            break;
        case "Trainee":
            valorAPagar = valorAPagar - (valorAPagar * 50 / 100)
            break;
        case "Junior":
            valorAPagar = valorAPagar - (valorAPagar * 15 / 100)
            break;
    }
    return valorAPagar
}






let formularioTickets = document.getElementById("form_tickets") //obtengo el elemento html por el id
let categoria = document.getElementById("categorias")
let cantidadTick = document.getElementById("cantidad")


formularioTickets.addEventListener("submit", (e)=>{
    e.preventDefault(); //le quitamos el comportamiento por defecto(que era recargar la pagina)
} ) //agregamos un evento listener submit




//alert con el total a pagar

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

const alert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [ 
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('') //agregarle una clase al div

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    alert('Total a Pagar: $'+ totalAPagar(cantidadTick.value, categoria.value) , 'primary')
  })
}





