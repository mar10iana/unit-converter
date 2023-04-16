let kgmc    =document.getElementById("Kgmc");
let lbpc   =document.getElementById("lbpc");
let slugpc    =document.getElementById("slugpc");

function kgmcToOther(val){
    lbpc.value =  parseFloat(val*0.0624279606).toFixed(4); 
    slugpc.value = parseFloat(val*0.00194032033).toFixed(4);         
}
function lbpcToOther(val){
    kgmc.value = parseFloat(val*16.0184634).toFixed(4);
    slugpc.value = parseFloat(val*0.0310809502).toFixed(4);  
}
function slugpcToOther(val){
    Kgmc.value = parseFloat(val*515.378818).toFixed(4); 
    lbpc.value = parseFloat(val*32.1740486).toFixed(4); 
}



function densconvertToOthers(convertFrom,value){    
    switch(convertFrom){
        case "Kgmc" : kgmcToOther(parseFloat(value));
         break;
        case "lbpc": lbpcToOther(parseFloat(value));
         break;
        case "slugpc" : slugpcToOther(parseFloat(value));
         break;
    }
}