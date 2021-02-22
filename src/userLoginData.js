//import { getInfoUser } from "./userColection.js";
const getNameUser = ()=> {firestore.collection('procfile').get();}
console.log(getNameUser);

export const onAuthDataUser= ()=>{
    auth.onAuthStateChanged(async (userAuth) =>{
        if(userAuth){
            let user= auth.currentUser;
            let userEmail= user.email;
            console.log(userEmail);
            document.getElementById('p-userName').innerHTML= userEmail;
            const procfileUser= await getNameUser(userEmail);
                    console.log(procfileUser.data());
                    //console.log(userEmail);
        }else{
            console.log('sesión no iniciada');
        }
    })  
}

