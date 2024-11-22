function validarDNI(dni) {
    var regex = /^[0-9]{8}[A-Z]$/i;
    return regex.test(dni);
}
function validarFecha(fecha) {
    // Expresión regular para validar un correo electrónico
    const regex = /^[0-9]{2}[/]{1}[0-9]{2}[/]{1}[0-9]{4}$/;
    if(regex.test(fecha)){
        let day=fecha[0]+fecha[1];
        let month=fecha[3]+fecha[4];
        let year=fecha[6]+fecha[7]+fecha[8]+fecha[9];
        if(day==0 || year == 0){
            return false;
        }
        if(!(month>12 || month<1)){
            switch (parseInt(month)) {
                case 1:
                case 3:
                case 5:
                case 7:
                case 8:
                case 10:
                case 12:
                    //31 dias
                    if(day>31){
                        return false;
                    }
                    break;
                case 2:
                    //febrero
                    if(bisiesto(year) && day>29){
                        return false;
                    }else if(!bisiesto(year) && day>28){
                        return false;
                    }
                    break;
                case 4:
                case 6:
                case 9:
                case 11:
                    //30 dias
                    if(day>30){
                        return false;
                    }
                    break;            
            }
            return true;
        }else{
            return false;
        }
    }
}

function bisiesto(year) {
    if(year%400==0){
        return true;
    }else if (year%100==0) {
        return false;
    }else if (year%4==0) {
        return true;
    }else{
        return false;
    }
    
}
console.log(validarFecha("22/11/2000"));


