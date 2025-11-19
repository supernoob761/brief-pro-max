const form = document.getElementById('form')
const name = document.getElementById('name')

function OpenAdd(){
    form.classList.toggle('active')
    name.focus()
}
function RemoveAdd(){
    form.classList.remove('active')
}
