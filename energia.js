let joule    =document.getElementById("joule");
let cal   =document.getElementById("cal");
let btu    =document.getElementById("btu");

function jouleToOther(val){
    cal.value =  parseFloat(val*0.239005736).toFixed(4); 
    btu.value = parseFloat(val*0.00094781712).toFixed(4);         
}
function calToOther(val){
    joule.value = parseFloat(val*4.18400).toFixed(4);
    btu.value = parseFloat(val*0.00396566683).toFixed(4);  
}
function btuToOther(val){
    joule.value = parseFloat(val*1055.05585262).toFixed(4); 
    cal.value = parseFloat(val*252.164401).toFixed(4); 
}


function enconvertToOthers(convertFrom,value){    
    switch(convertFrom){
        case "joule" : jouleToOther(parseFloat(value));
         break;
        case "cal": calToOther(parseFloat(value));
         break;
        case "btu" : btuToOther(parseFloat(value));
         break;
    }
}