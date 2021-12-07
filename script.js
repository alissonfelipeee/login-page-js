function validar(){
    const emailInput = document.getElementById('email')
    const passwordInput = document.getElementById('password')
    if (emailInput.value == '' || emailInput.value.indexOf('@') ==- 1 || emailInput.value.indexOf('.') ==- 1) {
        notify('error','O email que você inseriu não pertence a uma conta.')
        emailInput.focus();
    } else {
        console.log(passwordInput.value.length)
        if(passwordInput.value != '' && passwordInput.value.length >= 8) {
            notify('sucess','Autenticado com sucesso!')
        } else {
            notify('error','Informe a sua senha por gentileza.')
            passwordInput.focus();
        }
    }
}

function notify(type,text) {
    const divMessage = document.querySelector('.alert')
    const notify = document.createElement('div')
    const notifyExist = document.querySelector('.notify')

    if(!notifyExist) {
        if (type == 'sucess') {
            notify.classList.add('notify')
            notify.classList.add('sucess')
        } else {
            notify.classList.add('notify')
            notify.classList.add('error')
        }
    
        notify.innerText = text
        divMessage.appendChild(notify)
    
        setTimeout(() => {
            notify.style.display = 'none'
            notify.remove()
        }, 5000)
    }
}