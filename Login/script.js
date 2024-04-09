function submitLogin(){
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    token = "code37";
    container = document.getElementById("login-container");
    if(validateForm(username,password))
    {
        //ocultar el container y poner un circulo de carga 
        container.style.display = 'none';
        var gif = document.createElement("img");
        gif.src = "spinner.gif";
        document.body.appendChild(gif); 
        
        //preparamos el formato fornm data
        var Formdata = new FormData();
        Formdata.append("user",username);
        Formdata.append("pass",password); //tenemos que hacerle hash al pass
        Formdata.append("token",token);

        //hcaemos una peticion http para hacer una 
        fetch(
        {
            method: 'POST',
            body: Formdata
        }
        )
        .then(response => response.jason())
        .then(data => {
            gif.style.display ='none';//quitamos el spinner de carga
            alert("retorna la peticion");
        }).catch(error => {console.error("Error: "+error);
    })
    }

}

function validateForm(user, pass){
    fail = false;
    if (user === "" )
    {
        var errormsg = document.createElement("p");
        errormsg.innerHTML ="Ingresa un nombre de usuario";
        errormsg.style.color ='red';
        container.appendChild(errormsg);
        fail = true;

    }
    if(pass === "" )
    {
        var errormsg = document.createElement("p");
        errormsg.innerHTML ="Ingresa la constraseña";
        errormsg.style.color ='red';
        container.appendChild(errormsg);
        fail = true;
    }
    return !fail;


}