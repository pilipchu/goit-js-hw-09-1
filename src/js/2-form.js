const nameKey = "feedback-form-state"
const form = document.querySelector('.feedback-form')


function formSubmit(event) {
    event.preventDefault()
    const message = form.elements.message.value.trim()
    const email = form.elements.email.value.trim()
    if (message !== '' && email !== '') {
        const deta = JSON.stringify({ email, message })
        localStorage.setItem(nameKey, deta)
        form.reset()
        console.log(JSON.parse(deta))
    }
}

form.addEventListener('submit', formSubmit)

const jsn = localStorage.getItem(nameKey)
const deta = JSON.parse(jsn)
if (jsn !== null) {
    form.elements.message.value = deta.message
form.elements.email.value = deta.email
localStorage.removeItem(nameKey)

}


