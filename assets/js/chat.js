var userInput = document.querySelector(".c-chatbox__user-input");
var sendInput = document.querySelector(".c-chatbox__send-input");
var chatNumber = 0;
var userNumber;
var chatHeader = document.querySelector(".c-chatbox__header");

sendInput.addEventListener("click", function(e) {
    var message = userInput.value;
    e.preventDefault();
    if(message) {
        parent.postMessage(message, "*");
        userInput.value = "";
    }
});

function listener(event) {
    if(typeof(event.data) == "number") {
        userNumber = event.data;
        chatNumber++;
        chatHeader.innerHTML = "User " + userNumber;
    }
}

if (window.addEventListener) {
    window.addEventListener("message", listener);
} else {
    // IE8
    window.attachEvent("onmessage", listener);
}
