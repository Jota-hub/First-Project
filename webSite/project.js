var btn = window.document.getElementById('area')
function clicar() {
    btn.innerHTML = "Clicked!"
    btn.style.background = 'darkblue'
}
function entrar() {
    btn.innerHTML = "Inside!"
    btn.style.background = "purple"
}
function sair() {
    btn.innerHTML = "Outside!"
    btn.style.background = "darkgreen"
}