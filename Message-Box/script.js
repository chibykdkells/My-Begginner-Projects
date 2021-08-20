const messageInput = document.getElementById("message-input");

messageInput.addEventListener("keydown", function(even){
    if (event.key == "Enter")
    getMessage();
} )

function getMessage(){
    document.getElementById("message-output").innerHTML = messageInput.value;
    messageInput.value = "";
}