let pa = document.getElementById("pa");
let bar = document.getElementById("bar");
let atm = document.getElementById("atm");
let h2o = document.getElementById("h2o");
let hg = document.getElementById("hg");


function paToOther(val){
    bar.value = parseFloat(val/100000).toFixed(4);
    atm.value = parseFloat(val/101325).toFixed(4);
    h2o.value = parseFloat(val*0.00401474).toFixed(4);
    hg.value = parseFloat(val*0.0002953).toFixed(4);
}

function barToOther(val){
    pa.value =  parseFloat(val*100000).toFixed(4);
    atm.value = parseFloat(val*0.986923267).toFixed(4);
    h2o.value  =  parseFloat(val*401.47).toFixed(4);
    hg.value  =  parseFloat(val*29.5301).toFixed(4); 
}

function atmToOther(val){
    pa.value = parseFloat(val*101325).toFixed(4);
    bar.value = parseFloat(val*1.0132).toFixed(4);
    h2o.value = parseFloat(val*406.79).toFixed(4);
    hg.value = parseFloat(val*29.9213).toFixed(4);
}

function h2oToOther(val){
    pa.value = parseFloat(val*249.08).toFixed(4);
    bar.value = parseFloat(val*0.00249082).toFixed(4); 
    atm.value = parseFloat(val*0.00245825).toFixed(4);  
    hg.value = parseFloat(val*0.073554).toFixed(4);
}

function hgToOther(val){
    pa.value = parseFloat(val*3386.38).toFixed(4);
    bar.value = parseFloat( val*0.033864).toFixed(4) ; 
    atm.value = parseFloat(val*0.033421).toFixed(4);  
    h2o.value = parseFloat(val*13.5954).toFixed(4);
}


function preconvertToOthers(convertFrom,value){    
    switch(convertFrom){
        case "pa" : paToOther (parseFloat(value)); break;
        case "bar": barToOther(parseFloat(value)); break;
        case "atm" : atmToOther(parseFloat(value)); break;
        case "h2o" : h2oToOther (parseFloat(value)); break;
        case "hg"   : hgToOther (parseFloat(value)); break;
    }
}