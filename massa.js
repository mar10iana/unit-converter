let kg = document.getElementById("kg");
let lb = document.getElementById("lb");
let oz = document.getElementById("oz");
let st = document.getElementById("st");
let c = document.getElementById("c");


function kgToOther(val){
    lb.value = parseFloat(val*2.2046).toFixed(4);
    oz.value = parseFloat(val*35.274).toFixed(4);
    st.value = parseFloat(val*0.1574).toFixed(4);
    c.value = parseFloat(val*5000).toFixed(4);
}

function lbToOther(val){
    kg.value =  parseFloat(val*0.45359237).toFixed(4);
    oz.value = parseFloat(val* 16).toFixed(4);
    st.value  =  parseFloat(val* 0.0714).toFixed(4);
    c.value  =  parseFloat(val*2267.96).toFixed(4); 
}

function ozToOther(val){
    kg.value = parseFloat(val* 0.0283495231).toFixed(4);
    lb.value = parseFloat(val* 0.0625).toFixed(4);
    st.value = parseFloat(val* 0.0044643).toFixed(4);
    c.value = parseFloat(val* 141.747616).toFixed(4);
}

function stToOther(val){
    kg.value = parseFloat(val*6.35029318).toFixed(4);
    lb.value = parseFloat(val* 14 ).toFixed(4); 
    oz.value = parseFloat(val*224).toFixed(4);  
    c.value = parseFloat(val* 31751.47).toFixed(4);
}

function cToOther(val){
    kg.value = parseFloat(val*0.0002).toFixed(4);
    lb.value = parseFloat( val*0.00044092).toFixed(4) ; 
    oz.value = parseFloat(val*0.00705479239).toFixed(4);  
    st.value = parseFloat(val*0.0000314946).toFixed(4);
}


function massaconvertToOthers(convertFrom,value){    
    switch(convertFrom){
        case "kg" : kgToOther (parseFloat(value)); break;
        case "lb": lbToOther(parseFloat(value)); break;
        case "oz" : ozToOther(parseFloat(value)); break;
        case "st" : stToOther (parseFloat(value)); break;
        case "c"   : cToOther (parseFloat(value)); break;
    }
}