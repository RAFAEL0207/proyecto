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
            console.log("Nombre Completo: "+nombres + " "+apellidos);
            console.log("Contraseña:"+ contraseña);
            console.log("Teléfono: "+telf);
            console.log("Correo: "+correo);
            console.log("Fecha de nacimiento: "+fecha);
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

/**TEXTO ANIMADO */

const texto = document.getElementById('logo')
const letras = texto.innerText.split("");

texto.innerText= '';

letras.forEach((letra) => {
    let caracter = letra === ' ' ? '&nbsp;' : letra;


    texto.innerHTML = texto.innerHTML + `
    <div>
        <span>${caracter}</span>
        <span class="segunda-linea">${caracter}</span>
    </div>
    `
});
texto.addEventListener('mouseenter',() =>{
    let cuenta = 0;

    const intervalo = setInterval(() => {
        if(cuenta < texto.children.length){
            texto.children[cuenta].classList.add('animacion');
            cuenta = cuenta +1;
        } else{
            clearInterval(intervalo);
        }
    }, 30);
});
texto.addEventListener('mouseleave',() =>{
    let cuenta = 0;

    const intervalo = setInterval(() => {
        if(cuenta < texto.children.length){
            texto.children[cuenta].classList.remove('animacion');
            cuenta = cuenta +1;
        } else{
            clearInterval(intervalo);
        }
    }, 30);
});












