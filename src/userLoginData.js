//import { getInfoUser } from "./userColection.js";
const getNameUserColecction =(id)=> firestore.collection('procfile').doc(id).get();

export const onAuthDataUser= ()=>{
    auth.onAuthStateChanged(async (userAuth) =>{
        if(userAuth){
            let user= auth.currentUser;
            let userEmail= user.email;
            console.log(userEmail);
            document.getElementById('p-userName').innerHTML= userEmail;
            //const procfileUser= await getNameUserColecction(userEmail);
                    //console.log(procfileUser.data());
        }else{
            console.log('sesión no iniciada');
        }
    })  
}

