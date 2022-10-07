inputName = document.getElementById("name");
inputEmail = document.getElementById("email");
inputPhone = document.getElementById("phone");
inputMessage = document.getElementById("message-area");

function submit() {
    console.log(`Full name: ${inputName.value}, Email: ${inputEmail.value}, Phone number: ${inputPhone.value}, Message: ${inputMessage.value}`)
    alert ("Your form has been sent succesfully")
}



// Peticiones http
// GET -> pedir informacion al servidor
// POST -> enviar informacion al servidor,
// PUT -> envia informacion al servidor
// DELETE -> envia informacion al servidor e indica que se ha de borrar el recurso


// const data = {
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
// }
// console.log(data)
// JSON.stringify convierte un objeto en texto
// console.log(JSON.stringify(data))

// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//         title: 'foo',
//         message: querySelector().value,
//         udser: 1,
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })
//     .then((response) => response.json())
//     .then((json) => console.log(json));