function increment(){
    let current_value= document.getElementById("value").textContent;
    current_value=parseInt(current_value)
    document.getElementById("value").textContent=current_value+1;
    updatecolor();

}


function decrement(){
    let current_value=document.getElementById("value").textContent;
    current_value=parseInt(current_value);
    document.getElementById("value").textContent=current_value-1;
    updatecolor();
}
function reset(){
    let current_value=document.getElementById("value").textContent;
    current_value=parseInt(current_value);
    current_value=0;
    document.getElementById("value").textContent=current_value;
    updatecolor();
}

function updatecolor(){
    let valueElement = document.getElementById("value");
            let current_value = parseInt(valueElement.textContent);
if(current_value>0){
    document.getElementById("value").style.color="blue";
}
else if(current_value<0){
    document.getElementById("value").style.color="red";
}
else{
   document.getElementById("value").style.color="black";
}
}
