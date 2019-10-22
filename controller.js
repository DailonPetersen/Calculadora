var valor = $('#valor')
var pressed = $('#botao')

function retornaBotaoPressionado(e){
    e = e || window.event;
    let tecla =  evt.keyCode || evt.which
    return String.fromCharCode(tecla)
}
document.onkeypress = function(e){
    let str = retornaBotaoPressionado(e)
    pressed.innerHTML += str
}

function calcula(){

}