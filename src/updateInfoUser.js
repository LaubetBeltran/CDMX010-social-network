//Función para que el usuario pueda subir una imagén a su perfil

export const uploadImage = function () {
    var user= auth.currentUser;

    let file = document.getElementById('my-file').files[0];
    console.log("aqui", file);

    if(!file){

    }else{

        //Referencia donde se va a guardar la información en Firebase
        var storageRef = storage.ref('/userProfileImgs/'+file.name);
        //Tarea para subir la referencia, ya que lo menciona la documentación de Firebase. Dice que cuando se referencie el archivo, este se suba.
        var uploadTask = storageRef.put(file);
        //Activamos la referencia "uploadTask"
        //Dice que cuando exista un cambio de estado, ejecutaremos una función donde captutaremos los cambios
        uploadTask.on('state_change', function (snapshot){
            //se ve si existe o no un error
        }, function(error) {
            console.log(error)
            //Función cuando no exista un error y si se ejecute la acción
        }, function() {
            console.log('Archivo subido a Firebase')
            var downloadURL = uploadTask.snapshot.downloadURL;
            user.updateProfile({
                photoURL: downloadURL
            })
        })        
    }    
}
