loginBox.addEventListener('load', () => {
    loginBox.classList.toggle('loginBoxAnimation')
})

function logar(){
    let email = document.querySelector('#email').value
    let password = document.querySelector('#password').value 

    if(email == 'admin' && password == 'admin'){
        alert('Logado!')
    } else{
        alert('Usuário ou senha inválidos!')
    }
}
