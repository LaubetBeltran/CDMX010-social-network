import { getInfoUser } from "./userColection.js";

export const onAuthDataUser= ()=>{
    auth.onAuthStateChanged(async (userAuth) =>{
        if(userAuth){
            let user= auth.currentUser;
            let userEmail= user.email;
            console.log(userEmail);
            document.getElementById('p-userName').innerHTML= userEmail;
            let currentUserData= await getInfoUser(userEmail);
            console.log('Dataaa', currentUserData);
            //firestore.collection('procfile')
        }else{
            console.log('sesión no iniciada');
        }
    })  
}
