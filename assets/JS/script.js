//alert("Cajero");

var numero1000 = 50;
var numero500 = 50;
var numero200 =50;
var numero100 =50;
var numero50 =50;
var total1000 = 1000 * numero1000;
var total500 = 500 * numero500;
var total200 = 200 * numero200;
var total100 = 100 * numero100;
var total50 = 50 * numero50;
var totalEfectivo;
var billetesentregados = 0;

function comprobacion(retiro){
console.log(retiro);
var x = retiro%50;
    if ( x == 0){
        return 0;
    }
   if ( x != 0 ){
       return 1;
   }
}
function billetes(retiro){

    total1000 = 1000 * numero1000;
    total500 = 500 * numero500;
    total200 = 200 * numero200;
    total100 = 100 * numero100;
    total50 = 50 * numero50;
    var billetes1000 =0;
    var billetes500 = 0;
    var billetes200 = 0;
    var billetes100 = 0;
    var billetes50 =0;
    cantidad = retiro;
    while(cantidad != 0){
    if(cantidad >= 1000 & numero1000 != 0){
        if (cantidad <= total1000){
            billetes1000 = parseInt(cantidad/1000);
        }
        if (cantidad > total1000){
            billetes1000 = numero1000;
        }
        cantidad = cantidad - (billetes1000*1000);
        numero1000 = numero1000 - billetes1000;
     }
    if(cantidad >= 500 & numero500 != 0){
        if(cantidad <= total500){
            billetes500 = parseInt(cantidad/500);
        } 
        if (cantidad > total500){
            billetes500 = numero500;
        }
        cantidad = cantidad - (billetes500*500);
        numero500 = numero500 - billetes500;
    }
    if(cantidad >=200 & numero200 !=0){
        if(cantidad <= total200){
            billetes200 = parseInt(cantidad/200);
        }
        if (cantidad > total200){
            billetes200 = numero200;
        }
        cantidad = cantidad - (billetes200*200);
        numero200 = numero200 - billetes200;
    }
    if(cantidad >= 100 & numero100 != 0){
        if (cantidad <= total100){
            billetes100 = parseInt(cantidad/100);
        }
        if (cantidad > total100){
            billetes100 = numero100;
        }
        cantidad = cantidad - (billetes100*100);
        numero100 = numero100 - billetes100;
    }
    if(cantidad >= 50 & numero50 != 0){
        if(cantidad <= total50){
            billetes50 = parseInt(cantidad/50);
        }
        if (cantidad > total50){
            billetes50 = numero50;
        }
        cantidad = cantidad - (billetes50*50);
        numero50 = numero50 - billetes50;
    }}
    if(billetes1000 != 0){
        document.getElementById("mil").innerHTML = `<p>${billetes1000} billetes de 1000</p>`;
    }
    if(billetes1000 == 0){
        document.getElementById("mil").innerHTML = `<p></p>`;
    }
    if(billetes500 != 0){
        document.getElementById("quinientos").innerHTML = `<p>${billetes500} billetes de 500</p>`;
    }
    if(billetes500 == 0){
        document.getElementById("quinientos").innerHTML = `<p></p>`;
    }
    if(billetes200 != 0){
    document.getElementById("doscientos").innerHTML = `<p>${billetes200} billetes de 200</p>`;
    }
    if(billetes200 == 0){
        document.getElementById("doscientos").innerHTML = `<p></p>`;
    }
    if(billetes100 != 0){
    document.getElementById("cien").innerHTML = `<p>${billetes100} billetes de 100</p>`;
    }
    if(billetes100 == 0){
        document.getElementById("cien").innerHTML = `<p></p>`;
    }
    if(billetes50 != 0){
    document.getElementById("cincuenta").innerHTML = `<p>${billetes50} billetes de 50</p>`;
    }
    if(billetes50 == 0){
        document.getElementById("cincuenta").innerHTML = `<p></p>`;
    }
    billetesentregados = billetes50 + billetes100 + billetes200 + billetes500 + billetes1000;;
    console.log(billetes50,billetes100,billetes200,billetes500,billetes1000);
    imagenes(billetes1000,billetes500,billetes200,billetes100,billetes50);    
}

function imagenes(n1000,n500,n200,n100,n50){
    for(i=0;i<n1000;i++){
        const image = document.createElement('img');
        image.setAttribute("src","assets/Images/billete1000.jpg");
        image.width = 224;
        image.height = 126;
        var cont = document.getElementById("billetes");
        cont.appendChild(image);
    }
    for(i=0;i<n500;i++){
        const image = document.createElement('img');
        image.setAttribute("src","assets/Images/billete500.jpg");
        image.width = 224;
        var cont = document.getElementById("billetes");
        cont.appendChild(image);
    }
    for(i=0;i<n200;i++){
        const image = document.createElement('img');
        image.setAttribute("src","assets/Images/billete200.jpg");
        image.width = 224;
        image.height = 126;
        var cont = document.getElementById("billetes");
        cont.appendChild(image);
    }
    for(i=0;i<n100;i++){
        const image = document.createElement('img');
        image.setAttribute("src","assets/Images/billete100.jpg");
        image.width = 224;
        image.height = 126;
        var cont = document.getElementById("billetes");
        cont.appendChild(image);
    }
    for(i=0;i<n50;i++){
        const image = document.createElement('img');
        image.setAttribute("src","assets/Images/billete50.png");
        image.width = 224;
        image.height = 126;
        var cont = document.getElementById("billetes");
        cont.appendChild(image);
    }
}

function borrar(){
    for (i=1;i <= billetesentregados;i++){
    let cont = document.getElementById("billetes");
    let hijo = cont.firstChild;
    cont.removeChild(hijo);
    }
    document.getElementById("retiro").value= "0";
    document.getElementById("mil").innerHTML = `<p></p>`;
    document.getElementById("quinientos").innerHTML = `<p></p>`;
    document.getElementById("doscientos").innerHTML = `<p></p>`;
    document.getElementById("cien").innerHTML = `<p></p>`;
    document.getElementById("cincuenta").innerHTML = `<p></p>`;
}

function main(){

    total1000 = 1000 * numero1000;
    total500 = 500 * numero500;
    total200 = 200 * numero200;
    total100 = 100 * numero100;
    total50 = 50 * numero50;
    totalEfectivo = total50 + total100 + total200 + total500 + total1000;
    let inputValue = parseInt(document.getElementById("retiro").value); 
    console.log(inputValue);
    var aceptado = comprobacion(inputValue);
    
    if (aceptado == 1){
        alert("Recuerda que tu retiro tiene que ser multiplo de 50, vuelve a ingresar la cantidad");
    }
    if (aceptado == 0){
        console.log("Tu retiro esta siendo procesado");
        if (totalEfectivo == 0){
            alert("El cajero se encuentra actualmente sin efectivo")
        }
        if (inputValue > totalEfectivo){
                alert("La cantidad que desea retirar exede el efectivo disponible, por favor ingrese otra cantidad");
        }
        if (inputValue <= totalEfectivo){
                billetes(inputValue);
            }
        }
       imagenes();
}
