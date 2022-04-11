import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"


let botonRegistro=document.getElementById("btnregistro")

botonRegistro.addEventListener("click",function(evento){

    evento.preventDefault()

    let modal= new bootstrap.Modal(document.getElementById('modalconfirmacion'))
    let mensaje=document.getElementById("mensajemodal")

    let email=document.getElementById("email").value
    let password=document.getElementById("password").value

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        mensaje.textContent="Exito en el registro de nuestra pagina"
        modal.show()
        setTimeout(function(){
            window.location.href="index.html"
            modal.hide()
        },1500)
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        
        mensaje.textContent="Error: "+errorMessage
        modal.show()
        setTimeout(function(){
            window.location.href="index.html"
            modal.hide()
        },1500)

    });


})