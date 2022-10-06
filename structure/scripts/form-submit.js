inputName = document.getElementById("name");
inputEmail = document.getElementById("email");
inputPhone = document.getElementById("phone");
inputMessage = document.getElementById("message-area");

function submit() {
    console.log(`Full name: ${inputName.value}, Email: ${inputEmail.value}, Phone number: ${inputPhone.value}, Message: ${inputMessage.value}`)
}