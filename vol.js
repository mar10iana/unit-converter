let metcub =document.getElementById("metcub");
let litro    =document.getElementById("litro");
let cup   =document.getElementById("cup");
let uk    =document.getElementById("uk");
let us    =document.getElementById("us");


function metcubToOther(val){
    litro.value = parseFloat(val*1000).toFixed(4);
    cup.value =  parseFloat(val*4226.7528198649).toFixed(4); 
    uk.value = parseFloat(val*219.9691570).toFixed(4);
    us.value = parseFloat(val*264.172052).toFixed(4);            
}

function litroToOther(val){
    metcub.value =  parseFloat(val/1000).toFixed(4);
    cup.value =  parseFloat(val*4.2267528198649).toFixed(4); 
    uk.value = parseFloat(val*0.219969157).toFixed(4);
    us.value = parseFloat(val*0.264172052).toFixed(4);            
}
function cupToOther(val){
    metcub.value =  parseFloat(val/4226.7528198649).toFixed(4);
    litro.value = parseFloat(val* 0.2365882375).toFixed(4);
    uk.value = parseFloat(val*0.052042115).toFixed(4);
    us.value = parseFloat(val*0.0625).toFixed(4);  
}
function ukToOther(val){
    metcub.value =  parseFloat(val*0.00454609188).toFixed(4);
    litro.value = parseFloat(val*4.54609).toFixed(4); 
    cup.value =  parseFloat(val*19.2152068).toFixed(4); 
    us.value = parseFloat(val*1.20095042).toFixed(4);
}

function usToOther(val){
    metcub.value =  parseFloat(val*0.00378541178 ).toFixed(4);
    litro.value = parseFloat(val*3.78541178).toFixed(4); 
    cup.value =  parseFloat(val*16).toFixed(4); 
    uk.value = parseFloat(val*0.83267384 ).toFixed(4);
}



function volconvertToOthers(convertFrom,value){    
    switch(convertFrom){
        case "metcub" : metcubToOther(parseFloat(value));
         break;
        case "litro" : litroToOther(parseFloat(value));
         break;
        case "cup": cupToOther(parseFloat(value));
         break;
        case "uk" : ukToOther(parseFloat(value));
         break;
        case "us" : usToOther(parseFloat(value));
         break;
    }
}

