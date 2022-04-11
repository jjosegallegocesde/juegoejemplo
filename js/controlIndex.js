import { getAuth, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"


const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    
    let avatar=document.getElementById("avatar")
    avatar.textContent=user.email
    console.log(user.email)


    let botonsalir=document.getElementById("logout")

    botonsalir.addEventListener("click",function(){

        let modal= new bootstrap.Modal(document.getElementById('modalconfirmacion'))

        let mensaje=document.getElementById("mensajemodal")
        

        signOut(auth).then(() => {
            // Sign-out successful.
            mensaje.textContent="Vuelve Pronto.."
            modal.show()
            setTimeout(function(){
                avatar.textContent=""
                window.location.href="index.html"
                modal.hide()
            },1500)
          }).catch((error) => {
            // An error happened.
          });

    })

    







  } else {
    // User is signed out
    // ...
    console.log("no registrado")
  }
});

