let newton =document.getElementById("newton");
let kgf    =document.getElementById("kgf");
let lbf   =document.getElementById("lbf");
let dyn    =document.getElementById("dyn");


function newtonToOther(val){
    kgf.value = parseFloat(val*0.101971621).toFixed(4);
    lbf.value =  parseFloat(val*0.224808943).toFixed(4); 
    dyn.value = parseFloat(val*100000).toFixed(4);        
}

function kgfToOther(val){
    newton.value =  parseFloat(val*9.80665).toFixed(4);
    lbf.value =  parseFloat(val*2.20462262).toFixed(4); 
    dyn.value = parseFloat(val*980665).toFixed(4);        
}
function lbfToOther(val){
    newton.value =  parseFloat(val*4.44822162).toFixed(4);
    kgf.value = parseFloat(val* 0.45359237).toFixed(4);
    dyn.value = parseFloat(val*444822.16153).toFixed(4);
}
function dynToOther(val){
    newton.value =  parseFloat(val/100000).toFixed(4);
    kgf.value = parseFloat(val/980665).toFixed(4); 
    lbf.value =  parseFloat(val/444822.16153).toFixed(4); 
}


function forceconvertToOthers(convertFrom,value){    
    switch(convertFrom){
        case "newton" : newtonToOther(parseFloat(value));
         break;
        case "kgf" : kgfToOther(parseFloat(value));
         break;
        case "lbf": lbfToOther(parseFloat(value));
         break;
        case "dyn" : dynToOther(parseFloat(value));
         break;
    }
}