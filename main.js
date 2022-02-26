/* RESPUESTA A LA PREGUNTA es "4945" (sin las comillas porque es un number)


/* a partir de acá comienza la interaccion con HTML*/



console.dir(document)


let altura = document.getElementById("boton100");
altura.addEventListener("click", ValidacionAltura);

function ValidacionAltura() {
    var permiso = document.getElementById("saludo").value;
    
    if (permiso != 4945) {
        var respuesta = "<p class= 'text-white bg-danger p-3'>¿Quieres que te cuente el cuento del gallo pelón? " + "Ingresaste " + permiso + " "+ "y esa no es la altura.</p>";
    } else {
        document.getElementById("big").classList.remove("big")
        document.getElementById("altura").classList.add("adios")
        document.getElementById("respuesta100").classList.add("adios")
    }

    document.getElementById("respuesta100").innerHTML = respuesta
}

let div = document.getElementById("seccion");
let parrafo = document.getElementById("aviso");




console.dir(parrafo)
console.log(div)
console.log(parrafo)
console.log(parrafo.innerHTML)
parrafo.innerHTML = "Pasa por las oficinas para recoger tu caja navideña. <b>Antes del 15 de enero!</b>"; /*modificando HTML desde JS*/
let alerta = parrafo.innerHTML;
console.log("Recordatorio: " + alerta)

let titulo = document.getElementById("titulo");
console.log(titulo)
titulo.innerHTML = "Centro de recursos humanos de Empresa S.A"  /*modificando HTML desde JS*/

let aviso2 = document.getElementById("aviso2")
aviso2.innerHTML = "Recuerda que A. Orlandi, de recursos humanos, estará de vacaciones hasta el <b>21 de enero</b>. Consultas deberán dirigirse a Karina Rodríguez." /*añadiendo elementos desde JS*/


let beneficios = document.getElementsByClassName("beneficios")
console.dir(beneficios [0])
console.log(beneficios [0].innerHTML);
console.log(beneficios [1].innerHTML.length);
console.log(beneficios [2].innerHTML);
console.log(beneficios [3].innerHTML);

var lista = document.getElementsByTagName("ul")
console.log(lista);
console.log(lista[0].innerText);

/*for (const beneficio of beneficios) { 
    console.log(beneficio.innerHTML);
}      Recorriendo los array anteriores*/ 


let nuevo_parrafo = document.createElement("p")

nuevo_parrafo.innerHTML = "<b> En tu casilla de correo puedes encontrar las nuevas restricciones para el COVID que seguiremos a partir de enero </b>";

document.querySelector("footer").appendChild(nuevo_parrafo)

nuevo_parrafo.classList.add("parrafo2")

let evento = document.getElementById("nombre");
evento.onclick = () => {
    let cuadro = "<p class= 'text-white bg-danger p-3'> Usá el nombre que quieras, es solo una guía.</p>";
    document.getElementById("respuesta26").innerHTML = cuadro;
}

let OtroEvento = document.getElementById("bruto");
OtroEvento.onclick = () => {
    let cuadro2 = "<p class= 'text-white bg-danger p-3'> Tu sueldo bruto es el tu remuneración antes del descuento de jubilación y obra social.</p>";
    document.getElementById("respuesta26").innerHTML = cuadro2;
}

let TercerEvento = document.getElementById("contrato");
TercerEvento.onclick = () => {
    let cuadro3 = "<p class= 'text-white bg-danger p-3'> Si no conoces tu condición contractual consulta a RRHH.</p>";
    document.getElementById("respuesta26").innerHTML = cuadro3;
}


let CuartoEvento = document.getElementById("comentarios");
CuartoEvento.onclick = () => {
    let cuadro4 = "<p class= 'text-white bg-danger p-3'> Puedes dejarnos feedback respecto a la calculadora (u otro tema relacionado con la web de la empresa.</p>";
    document.getElementById("respuesta26").innerHTML = cuadro4;
}


let cuadro5 = "<p class= 'text-white bg-danger p-3'> Se redondea hacia arriba, si has trabajado 45 días debes seleccionar 2.</p>";

let cuadro6 = "<p class= 'text-white bg-danger p-3'> Se redondea hacia arriba a partir de los 11 meses. Ej: Si has trabajado 5 años y 11 meses debes seleccionar '6', pero si has trabajado 5 años y 10 meses debes seleccionar '5'.</p>"
 
/*Eventos con Jquery*/

$("#MesesTrabajados").on('click', function() {
    $("#respuesta26").html(cuadro5);
});

$("#AnosTrabajados").on('click', function() {
    $("#respuesta26").html(cuadro6);
});

/*formulario oculto con slideup*/

$("#boton24").on('click', function() {
    $("#FormularioOpcional").slideDown("slow")
    $("#boton24").on('click').fadeOut("slow")
    $("#boton25").on('click').fadeIn("slow")

});


$("#boton25").on('click', function() {
    $("#FormularioOpcional").slideUp("slow")
    $("#boton24").on('click').fadeIn("slow")
    $("#boton25").on('click').fadeOut("slow")
});

$("#botonchao").on('click', function() {
    $("#bi").slideUp("slow")
});

$("#botonhola").on('click', function() {
    $("#bi").slideDown("slow")
});




/*validación del formulario oculto*/

let OtroBoton = document.getElementById("boton21");
OtroBoton.addEventListener("click", OtraValidacion);

function OtraValidacion() {
    let apellido = document.getElementById("apellido").value
    let jefes = document.getElementById("jefes").value
    let sugerencia2 = document.getElementById("comentarios2").value
    let sugerencia3 = document.getElementById("comentarios3").value
    let sugerencia4 = document.getElementById("comentarios4").value

   
    console.log("el nombre es:" + apellido + " " + "el jefe de departamento es" + " " + jefes + "y el empleado sugiere al departamento" + " " + sugerencia2 + "," + " " + "le sugiere a su jefe" + sugerencia3 + "y le sugiere a la empresa" + " "+ sugerencia4)

}


$("#boton21").click(() => { 
    $.ajax({
        method: "GET",
        url:  "Formulario2.json",
        success: function(respuesta) {
            let content = "<table>";
            
           
for (let datos of respuesta) {
    content += "<p> <strong>" + datos.nombre+ " </strong>" + datos.descripcion + "</p>";
    content += "<td><img src='" + datos.imagen + "' width='auto'></td>";
}
            $("footer").append(content);
        },
        error: function(respuesta) {
            $("body").append(`<div><strong>Error!</strong> No se pudieron enviar los datos!</div> <br> <img src="dog.jpg" width="auto"> `);
        }
    })});
 



/*Validación de formulario*/
let boton = document.getElementById("boton1");
boton.addEventListener("click", ValidacionFormulario);

function ValidacionFormulario() {
    var nombre = document.getElementById("nombre").value;
    var contrato = document.getElementById("contrato").value;
    var sueldo = document.getElementById("bruto").value;
    var meses = document.getElementById("MesesTrabajados").value;
    var departamento = document.getElementById("departamento").value;
    var anos = document.getElementById("AnosTrabajados").value;
    var comentarios = document.getElementById("comentarios").value

    if (nombre == "") {
        var contenido = "<p class= 'text-white bg-danger p-3'>El campo nombre está vacío</p>"
        document.getElementById("respuesta27").innerHTML = contenido;
        return false;
    } else {
        document.getElementById("respuesta27").innerHTML = "";
    }
    if (contrato == "") {
        let contenido = "<p class = 'text-white bg-danger p-3'> Marca '1' o '2' en tu tipo de contrato, por favor.</p>"
        document.getElementById("respuesta27").innerHTML = contenido
        return false;
    } 
    if (sueldo == "") {
        let contenido = "<p class = 'text-white bg-danger p-3'> La variable de sueldo es esencial para la calculadora.</p>"
        document.getElementById("respuesta27").innerHTML = contenido
        return false;
    } 
    if (meses == "") {
        let contenido = "<p class = 'text-white bg-danger p-3'> El campo de meses trabajados es obligatorio.</p>"
        document.getElementById("respuesta27").innerHTML = contenido
        return false;
    }
    if (departamento == "") {
        let contenido = "<p class = 'text-white bg-danger p-3'> Si no conoces el código de departamento, revisa tu recibo de sueldo</p>"
        document.getElementById("respuesta27").innerHTML = contenido
        return false;
    }
    if (anos == "") {
        let contenido = "<p class = 'text-white bg-danger p-3'> El campo de años en la empresa está vacío.</p>"
        document.getElementById("respuesta27").innerHTML = contenido
        return false;
    } 

    var contenido = "Nombre: <strong>" + nombre + "</strong><br>";
    contenido += "Tipo de contrato <strong>" + contrato + "</strong><br>";
    contenido += "Sueldo más alto del año <strong>" + sueldo + "</strong><br>";
    contenido += "Meses trabajados este semestre <strong>" + meses + "</strong><br>";
    contenido += "Departamento: <strong>" + departamento + "</strong><br>";
    contenido += "Años en la empresa: <strong>" + anos + "</strong><br>";
    document.getElementById("respuesta24").innerHTML = contenido;


    let variable1 = nombre;
    let variable2 = contrato;
    let variable3 = sueldo;
    let variable4 = meses;
    let variable5 = departamento;
    let variable6 = parseInt(anos);
    let variable7 = comentarios
    console.log("El nombre es:"+ " " + variable1 +"." + " " + "El tipo de contrato es:", variable2 +"." +" " +"El sueldo más alto del año fue: ", variable3 +"." + " " + "La cantidad de meses trabajados fue:", + variable4 +"." + " " + "Tu departamento es:", + variable5 +"." + " " + "Y la cantidad de años trabajados es: ", + variable6) 
   


    let resultado1 = variable3 / 12;
    let resultado2 = resultado1 * variable4;
    let resultado3 = resultado2 * 0.17;
    let resultado4 = resultado2 - resultado3;
    let resultado5 = variable3 * 1.30;
    let resultado6 = variable3 * 1.45; 
    console.log("El empleado(a)" + " " + nombre + " " + "recibirá" + " " +resultado2 + " " + "pesos" + " " + "de" + " "+ "aguinaldo en bruto" + " " + "y " + resultado4 + " " + "en" + " " + "neto.")


    let respuesta1 = "<p class = 'text-white bg-info p-3'> El empleado recibirá " + resultado2 + " de aguinaldo en bruto y" + " " +  resultado4 + " " +  "en neto.</p>"
    document.getElementById("respuesta25").innerHTML = respuesta1


    let respuesta2 = "<p class = 'text-white bg-info p-3'> El empleado(a)" + " " + nombre + " " + "debe pagar impuesto a las ganancias.</p"

    let respuesta3 = "<p class = 'text-white bg-info p-3'> El empleado(a)" + " " + nombre + " " + "está exhimido del impuesto a las ganancias.</p"

    if (variable3 <= 105000) {
        document.getElementById("respuesta27").innerHTML = respuesta2
    }   else {
        document.getElementById("respuesta28").innerHTML = respuesta3
        
    }
   

    /*if (variable3 <= 105000) {
        $("#respuesta27").innerHTML = respuesta2
    }   else {
        $("#respuesta28").innerHTML = respuesta3
        
    }  Con este método NO funcionó.*/

    let respuesta4 = "<p class = 'text-white bg-info p-3'> Tu sueldo se revisará con tu jefe directo antes de Navidad.</p"

    let respuesta5 = "<p class = 'text-white bg-info p-3'> Tu sueldo se reisará a finales del próximo semestre (julio-2022)</p"
    

    if ((departamento == "Contenido") || (departamento == "Administración" )){
        document.getElementById("respuesta29").innerHTML = respuesta4
    } else {
        document.getElementById("respuesta30").innerHTML = respuesta5

    }

    let respuesta6 = "<p class = 'text-white bg-info p-3'> El empleado(a)" + " " + nombre + " " +"recibirá su primer bono (igual a su sueldo) al cumplir un año en la empresa.</p"

    let respuesta7 = "<p class = 'text-white bg-info p-3'> El empleado(a)" + " " + nombre + " " +"recibirá un bono por fidelidad (igual a su sueldo más alto del año) a final de mes.</p"
    
    console.log(typeof variable6)

    if (variable6 < 1) {
        document.getElementById("respuesta31").innerHTML = respuesta6
    }   else {
        document.getElementById("respuesta32").innerHTML = respuesta7
    }


    let respuesta8 = "<p class = 'text-white bg-info p-3'> El empleado(a)" + " "+ nombre + " " + "está inscrito como monotributista por lo que deberá hacerse cargo de su obra social por su cuenta. Para cualquier informaciòn visite la web del Gobierno de la Ciudad.</p"
    let respuesta9 = "<p class = 'text-white bg-info p-3'> El empleado(a)" + " "+ nombre + " " + "está en relación de dependencia con la empresa, por lo que puede revisar su recibo para comprobar los descuentos por jubilación y obra social. Para cualquier información, por favor comuníquese con Adrian López de Recursos Humanos.</p"


    if (variable2 == "Contrato temporario") {
        document.getElementById("respuesta33").innerHTML = respuesta8
    }else {
        document.getElementById("respuesta34").innerHTML = respuesta9
    }

    let respuesta10 = "<p class = 'text-white bg-info p-3'> Recuerda que si te mantienes en la empresa hasta diciembre del próximo año, tu sueldo pasaría de" + " " + variable3 + " " + "a" +  " " + resultado6 + "." + " " + "Felices fiestas :).</p"

    let respuesta11 = "<p class = 'text-white bg-info p-3'> Recuerda que si te mantienes en la empresa hasta diciembre del próximo año, tu sueldo pasaría de" + " " + variable3 + " " +"a" +  " " + resultado5 + "." + " " + "Felices fiestas :).</p"

    if ((departamento == "Contenido") || (departamento == "Administración" )){
        document.getElementById("respuesta35").innerHTML = respuesta10
    } else {
        document.getElementById("respuesta36").innerHTML = respuesta11

    }
        
    let respuesta12 = "<p class = 'text-white bg-info p-3'> Gracias por tus comentarios y/o sugerencias</p"
    if (comentarios.length >= 6) {
        document.getElementById("respuesta37").innerHTML = respuesta12
    }

}
