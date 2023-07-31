function formSubmit(event) {
    event.preventDefault();
    const emailContato = document.getElementById("email").value
    const mensagemContato = document.getElementById("message").value
    console.log(`O usuário de email: ${emailContato} enviou a mensagem: ${mensagemContato}`)
    alert(`Sua mensagem usando o e-mail: ${emailContato} foi enviada! Agradecemos o seu contato!`)
}
