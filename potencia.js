let watt =document.getElementById("watt");
let cv    =document.getElementById("cv");
let bhp   =document.getElementById("bhp");
let kcalh    =document.getElementById("kcalh");


function wattToOther(val){
    cv.value = parseFloat(val*0.00134102).toFixed(4);
    bhp.value =  parseFloat(val*0.00010194).toFixed(4); 
    kcalh.value = parseFloat(val*0.8598452279).toFixed(4);        
}

function cvToOther(val){
    watt.value =  parseFloat(val*745.7).toFixed(4);
    bhp.value =  parseFloat(val*0.076018).toFixed(4); 
    kcalh.value = parseFloat(val*641.19).toFixed(4);        
}
function bhpToOther(val){
    watt.value =  parseFloat(val*9809.5).toFixed(4);
    cv.value = parseFloat(val*13.1548 ).toFixed(4);
    kcalh.value = parseFloat(val*8434.65).toFixed(4);
}
function kcalhToOther(val){
    watt.value =  parseFloat(val*1.163).toFixed(4);
    cv.value = parseFloat(val*0.00155961).toFixed(4); 
    bhp.value =  parseFloat(val*0.00011856).toFixed(4); 
}


function potconvertToOthers(convertFrom,value){    
    switch(convertFrom){
        case "watt" : wattToOther(parseFloat(value));
         break;
        case "cv" : cvToOther(parseFloat(value));
         break;
        case "bhp": bhpToOther(parseFloat(value));
         break;
        case "kcalh" : kcalhToOther(parseFloat(value));
         break;
    }
}