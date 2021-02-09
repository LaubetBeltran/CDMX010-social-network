import { navLinkVisibilityLogin } from "./NavdisplayVisibilityFunctions.js";

export const loginGoogle = () =>{
  const btnGoogle=document.getElementById('google-login');
  btnGoogle.addEventListener('click', e =>{
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
      .then(result =>{
          console.log('inicio de sesión con google');
          alert('¡Hola de nuevo! BIENVENIDA');
          navLinkVisibilityLogin();
          onNavigate('/home');
      })
      .catch(err =>{
          console.log(err);
      });
  });
};