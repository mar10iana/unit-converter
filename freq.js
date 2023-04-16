let htz    =document.getElementById("htz");
let rad   =document.getElementById("rad");
let rpm    =document.getElementById("rpm");

function htzToOther(val){
    rad.value =  parseFloat(val*6.2831853).toFixed(4); 
    rpm.value = parseFloat(val*60).toFixed(4);         
}
function radToOther(val){
    htz.value = parseFloat(val*0.1591549).toFixed(4);
    rpm.value = parseFloat(val*9.5492965964254).toFixed(4);  
}
function rpmToOther(val){
    htz.value = parseFloat(val/60).toFixed(4); 
    rad.value = parseFloat(val*0.104719755).toFixed(4); 
}


function freqconvertToOthers(convertFrom,value){    
    switch(convertFrom){
        case "htz" : htzToOther(parseFloat(value));
         break;
        case "rad": radToOther(parseFloat(value));
         break;
        case "rpm" : rpmToOther(parseFloat(value));
         break;
    }
}