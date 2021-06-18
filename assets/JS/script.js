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
    let billetes1000 =0;
    let billetes500 = 0;
    let billetes200 = 0;
    let billetes100 = 0;
    let billetes50 =0;
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
        cantidad = cantidad - (billetes200*100);
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
    document.getElementById("mil").innerHTML = `<p>${billetes1000} billetes de 1000</p>`;
    document.getElementById("quinientos").innerHTML = `<p>${billetes500} billetes de 500</p>`;
    document.getElementById("doscientos").innerHTML = `<p>${billetes200} billetes de 200</p>`;
    document.getElementById("cien").innerHTML = `<p>${billetes100} billetes de 100</p>`;
    document.getElementById("cincuenta").innerHTML = `<p>${billetes50} billetes de 50</p>`;

    console.log(billetes50,billetes100,billetes200,billetes500,billetes1000);
    
    return (billetes1000,billetes500,billetes200,billetes100,billetes50);
}

function imagenes(){
    const image = document.createElement('img');
image.src  = 'assets/Images/billete50'
document.querySelector('.billetes').appendChild(image)
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
       //imagenes();
}
