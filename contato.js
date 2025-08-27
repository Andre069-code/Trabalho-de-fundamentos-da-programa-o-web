function enviarDados() {
    let nome = document.getElementById("name").value
    let email = document.getElementById("email").value
    let assunto = document.getElementById("assunto").value
    
    if (nome.length === 0) {
        alert('Digite um nome')
        return
    }

    if (email.length === 0) {
        alert('Digite um email')
        return
    }

    if (assunto.length === 0) {
        alert('Digite uma mensagem')
    } else
        alert('Mensagem enviada')

}