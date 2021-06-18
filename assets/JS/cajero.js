var totalefectivo;
var total1000 = 1000*num1000;
var total500 =500*num500;
var total200 = 200*num200;
var total100 = 100*num100;
var total50 = 50*num50;
var num1000 = 50;
var num500 = 50;
var num200 = 50;
var num100 = 50;
var num50 = 50;

function comprobacion(retiro){

    console.log(retiro);
    if(retiro%50 == 0){
        return 0;
    }
    if(retiro%50 != 0){
        return 1;
    }
}

function calcular(cantidad){
    total1000 = 1000*num1000;
    total500 = 500*num500;
    total200 = 200*num200;
    total100 = 100*num100;
    total50 = 50*num50;
    let billetes500 = 0;
    let billetes100 = 0;
    let billetes1000 = 0;
    let billetes200 = 0;
    let billetes50 = 0;
    
    while(cantidad != 0){
        if(cantidad >= 1000 & num1000 !=0){
            if(cantidad <= total1000){
                billetes1000 = parseInt(cantidad/1000);
            }
            if(cantidad > total1000){
                billetes1000 = num1000;
            }
            num1000 = num1000 - billetes1000;
            cantidad = cantidad - billetes1000*1000;
        }
        if(cantidad >= 500 & num500 !=0){
            if(cantidad <= total500){
                billetes500 = parseInt(cantidad/500);
            }
            if(cantidad > total500){
                billetes500 = num500;
            }
            num500 = num500 - billetes500;
            cantidad = cantidad - billetes500*500;
        }
        if(cantidad >= 200 & num200 != 0){
            if(cantidad <= total200){
                billetes200 = parseInt(cantidad/200);
            }
            if(cantidad > total200){
                billetes200 = num200;
            }
            num200 = num200 - billetes200;
            cantidad = cantidad - billetes200*200;
        }
        if(cantidad >= 100){
            if(cantidad <= total100){
                billetes100 = parseInt(cantidad/100);
            }
            if(cantidad > total100){
                billetes100 = num100;
            }
            num100 = num100 - billetes100;
            cantidad = cantidad - billetes100*100;
        }
        if(cantidad >= 50){
            if(cantidad <= total50){
                billetes50 = parseInt(cantidad/50);
            }
            if(cantidad > total50){
                billetes50 = num50;
            }
            num50 = num50 - billetes50;
            cantidad = cantidad - billetes50*50;
        }
        console.log(billetes1000,billetes500,billetes200,billetes100,billetes50);
        document.getElementById("mil").innerHTML = `Se entregaron ${billetes1000} de mil`;
        document.getElementById("quinientos").innerHTML = `Se entregaron ${billetes500} de quinientos`;
        document.getElementById("doscientos").innerHTML = `Se entregaron ${billetes200} de doscientos`;
        document.getElementById("cien").innerHTML = `Se entregaron ${billetes100} de cien`;
        document.getElementById("cincuenta").innerHTML = `Se entregaron ${billetes50} de cincuenta`;
}
}

function main(){
    total1000 = 1000*num1000;
    total500 =500*num500;
    total200 = 200*num200;
    total100 = 100*num100;
    total50 = 50*num50;
    totalefectivo = total1000 + total500 + total200 + total100 + total50;
    console.log(totalefectivo);
    let inputValue = parseInt(document.getElementById("retiro").value);
    console.log(inputValue);
    let comprobando = comprobacion(inputValue);
    if(comprobando == 1){
        alert("Tu retiro no es multiplo de 50 vuleve a ingresar el valor");
    }
    if(comprobando == 0){
        if (totalefectivo == 0){
            alert("El cajero se encuentra actualmente sin efectivo");
        }
        if(inputValue > totalefectivo){
            alert("La cantidad que desea retirar exede el efectivo disponible, favor de ingresar otra cantidad");
        }
        if(inputValue <= totalefectivo){
            calcular(inputValue);
        }
    }

}