let feet    =document.getElementById("feet");
let meter   =document.getElementById("meter");
let inch    =document.getElementById("inches");
let yard    =document.getElementById("yards");
let mile    =document.getElementById("miles");
let NM   =document.getElementById("NM");

function meterToOther(val){
    feet.value = parseFloat(val*3.2808).toFixed(4);
    inch.value = parseFloat(val*39.370).toFixed(4);
    yard.value = parseFloat(val*1.0936).toFixed(4);
    mile.value = parseFloat(val*0.00062137).toFixed(4);
    NM.value = parseFloat(val*0.000539956803).toFixed(4);
}

function feetToOther(val){
    meter.value =  parseFloat(val*0.3048).toFixed(4);
    inch.value = parseFloat(val*12).toFixed(4);
    yard.value  =  parseFloat(val*0.33333).toFixed(4);
    mile.value  =  parseFloat(val*0.00018939).toFixed(4); 
    NM.value = parseFloat(val*0.000164578834).toFixed(4);
}

function inchesToOther(val){
    feet.value = parseFloat(val*0.083333).toFixed(4);
    meter.value = parseFloat(val*0.0254).toFixed(4);
    yard.value = parseFloat(val*0.027778).toFixed(4);
    mile.value = parseFloat(val*0.000015783).toFixed(4);
    NM.value = parseFloat(val*0.0000137149).toFixed(4);
}

function yardsToOther(val){
    feet.value = parseFloat(val*3).toFixed(4);
    inch.value = parseFloat(val*36).toFixed(4);  
    meter.value = parseFloat(val*0.9144).toFixed(4); 
    mile.value = parseFloat(val*0.00056818).toFixed(4);
    NM.value = parseFloat(val * 0.000493736501).toFixed(4);
}

function milesToOther(val){
    feet.value = parseFloat(val*5280).toFixed(4);
    inch.value = parseFloat(val*63360).toFixed(4);  
    yard.value = parseFloat( val*1760).toFixed(4) ; 
    meter.value = parseFloat(val*1609.344).toFixed(4);
    NM.value = parseFloat(val * 0.868976242).toFixed(4);
}

function NMToOther(val){
    feet.value = parseFloat(val*6076.1).toFixed(4);
    inch.value = parseFloat(val*72913.385826772).toFixed(4);  
    yard.value = parseFloat(val* 2025.3718285214).toFixed(4); 
    mile.value = parseFloat(val*1.15077945).toFixed(4);
    meter.value = parseFloat(val * 1852).toFixed(4);
}



function convertToOthers(convertFrom,value){    
    switch(convertFrom){
        case "feet" : feetToOther (parseFloat(value)); break;
        case "meter": meterToOther(parseFloat(value)); break;
        case "inch" : inchesToOther(parseFloat(value)); break;
        case "yard" : yardsToOther (parseFloat(value)); break;
        case "NM"   : NMToOther (parseFloat(value)); break;
        case "mile" : milesToOther(parseFloat(value)); break;
    }
}

