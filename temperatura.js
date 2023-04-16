let K    =document.getElementById("K");
let C   =document.getElementById("C");
let F    =document.getElementById("F");

function KToOther(val){
    C.value =  parseFloat(val-273.15).toFixed(4); 
    F.value = parseFloat(((val-273.15) * 1.8) + 32).toFixed(4);         
}
function CToOther(val){
    K.value = parseFloat(val+ 273.15).toFixed(4);
    F.value = parseFloat( (val* 1.8) + 32 ).toFixed(4);  
}
function FToOther(val){
    C.value = parseFloat((val- 32) / 1.8).toFixed(4); 
    K.value = parseFloat(( ( val- 32) / 1.8) + 273.15).toFixed(4); 
}



function TempconvertToOthers(convertFrom,value){    
    switch(convertFrom){
        case "K" : KToOther(parseFloat(value));
         break;
        case "C": CToOther(parseFloat(value));
         break;
        case "F" : FToOther(parseFloat(value));
         break;
    }
}
