let display = document.getElementById("calarea");

function appendtoDisplay(x){
    display.value += x;
    display.style.color = "White"
    display.style.fontSize = "50px"
    display.style.width = "400px"
     display.style.height = "100px"
    
    display.style.textAlign = "right"
}
function clearDisplay(){
    display.value = "";

}

function calculator(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "error"


    }
}

function Delete(){
    display.value = display.value.toString().slice(0,-1);
}