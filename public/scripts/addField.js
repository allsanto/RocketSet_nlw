// Procurar o botão
document.querySelector("#add-time").addEventListener('click', cloneField)
// Quando clicar no botão

// Executar a ação
function cloneField() { // Duplicar os campos // Que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) 
    // '.cloneNode' eu uso para duplicar o campo ou qualquer coisa que eu quiser do html

    // Pegar os campos, que campos ?
    const fields = newFieldContainer.querySelectorAll('input')
    // 'All' pega todos os inputs dentro do selector

    // Para cada campo, limpar // forEach - paraCada
    fields.forEach(function(field) {
        // Pegar o field do momento e limpa
        field.value = ''
    })

    // Colocar na pagína: onde ?
    document.querySelector('#schedule-item').appendChild(newFieldContainer)
}''