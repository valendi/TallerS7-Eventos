let button= document.getElementById("button");

function saludoButton(event){
    alert("Hola!");
    event.stopPropagation();
}

button.addEventListener('click', saludoButton);

//--------------------------------------------------

let div= document.getElementById("div");

function saludoDiv(){
    alert("Hola! Soy el div");
}

div.addEventListener('click', saludoDiv);