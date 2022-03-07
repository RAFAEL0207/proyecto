function registrar(){
    var nombres=document.getElementById("name").value;
    var apellidos=document.getElementById("apell").value;
    var contraseña=document.getElementById("pass").value
    var telf=document.getElementById("celu").value;
    var correo=document.getElementById("cor").value;
    var fecha=document.getElementById("fech").value;
    
    if(nombres=="" || apellidos==""){
        alert("El campo de nombres y apellidos no debe estar vacío");
        document.getElementById("name").focus();

    }else{
        if(telf==""){
            alert("Número de teléfono obligatorio");
            document.getElementById("celu").focus();

        }else{
            if(correo==""){
                alert("Correo electrónico inválido")
                document.getElementById("cor").focus();
            }else{
            console.log("Usuario registrado: ")
            console.log("Nombre Completo: "+nombres + " "+apellidos+" "+" Contraseña:"+ contraseña +" Teléfono: "+telf+" "+correo+" "+ " "+fecha+" ");
            document.getElementById("name").value="";
            document.getElementById("apell").value="";
            document.getElementById("pass").value="";
            document.getElementById("celu").value="";
            document.getElementById("cor").value="";
            document.getElementById("fech").value="";

            document.getElementById("name").focus();
            }
            
        }
    }
}


function Menud() {
    document.getElementsByClassName("naveg")[0].classList.toggle("responsive");
}