let seg    =document.getElementById("seg");
let min   =document.getElementById("min");
let hora    =document.getElementById("hora");

function segToOther(val){
    min.value =  parseFloat(val/60).toFixed(4); 
    hora.value = parseFloat(val/3600).toFixed(4);         
}
function minToOther(val){
    seg.value = parseFloat(val*60).toFixed(4);
    hora.value = parseFloat(val/60).toFixed(4);  
}
function horaToOther(val){
    seg.value = parseFloat(val*3600).toFixed(4); 
    min.value = parseFloat(val*60).toFixed(4); 
}



function timeconvertToOthers(convertFrom,value){    
    switch(convertFrom){
        case "seg" : segToOther(parseFloat(value));
         break;
        case "min": minToOther(parseFloat(value));
         break;
        case "hora" : horaToOther(parseFloat(value));
         break;
    }
}