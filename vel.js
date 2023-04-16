let ms = document.getElementById("ms");
let kmh = document.getElementById("kmh");
let ftmin = document.getElementById("ftmin");
let kt = document.getElementById("kt");
let mph = document.getElementById("mph");


function msToOther(val){
    kmh.value = parseFloat(val*3.6).toFixed(4);
    ftmin.value = parseFloat(val*196.850394).toFixed(4);
    kt.value = parseFloat(val*1.94384449).toFixed(4);
    mph.value = parseFloat(val*2.23693629).toFixed(4);
}

function kmhToOther(val){
    ms.value =  parseFloat(val*0.277777778).toFixed(4);
    ftmin.value = parseFloat(val* 54.6806649).toFixed(4);
    kt.value  =  parseFloat(val* 0.539956803).toFixed(4);
    mph.value  =  parseFloat(val*0.621371192).toFixed(4); 
}

function ftminToOther(val){
    ms.value = parseFloat(val* 0.00508).toFixed(4);
    kmh.value = parseFloat(val* 0.018288).toFixed(4);
    kt.value = parseFloat(val* 0.00987473002).toFixed(4);
    mph.value = parseFloat(val* 0.0113636364).toFixed(4);
}

function ktToOther(val){
    ms.value = parseFloat(val*0.514444444).toFixed(4);
    kmh.value = parseFloat(val* 1.85200).toFixed(4); 
    ftmin.value = parseFloat(val*101.268591).toFixed(4);  
    mph.value = parseFloat(val* 1.15077945).toFixed(4);
}

function mphToOther(val){
    ms.value = parseFloat(val*0.44704).toFixed(4);
    kmh.value = parseFloat( val*1.609344).toFixed(4) ; 
    ftmin.value = parseFloat(val*88).toFixed(4);  
    kt.value = parseFloat(val*0.868976242).toFixed(4);
}


function velconvertToOthers(convertFrom,value){    
    switch(convertFrom){
        case "ms" : msToOther (parseFloat(value)); break;
        case "kmh": kmhToOther(parseFloat(value)); break;
        case "ftmin" : ftminToOther(parseFloat(value)); break;
        case "kt" : ktToOther (parseFloat(value)); break;
        case "mph"   : mphToOther (parseFloat(value)); break;
    }
}