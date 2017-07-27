var addChat = document.querySelector(".fa-plus");
var body = document.querySelector(".l-chat-container");
var chat = document.querySelector(".c-chatbox");
var userCount = 0;

function addChatBox() {
    userCount++;

    var wrap = document.createElement('div');
    var newChat = document.createElement('iframe');
    var wrapTitle = document.createElement('div');

    wrapTitle.classList.add("c-chatbox__top-title");
    wrapTitle.innerHTML = 'FrameChat <i class="fa fa-arrows" aria-hidden="true"></i>';
    wrap.classList.add("draggable");
    newChat.setAttribute("src", "assets/html/chat-template.html");
    newChat.setAttribute("frameborder", "0");
    newChat.setAttribute("name", "chat");
    newChat.setAttribute("sandbox", "allow-same-origin allow-top-navigation allow-forms allow-scripts");
    newChat.classList.add("i-chatbox");
    wrap.appendChild(wrapTitle);
    wrap.appendChild(newChat);
    body.appendChild(wrap);
    //after element appears we make it draggable and inform it about its id number
    setTimeout(function(){
        newChat.contentWindow.postMessage(userCount, "*");
        $(function () {
            $(".draggable")
                .draggable();
        });
    },100);

}

addChat.addEventListener("click", addChatBox);

function listener(event) {
var frames = document.querySelectorAll("iframe");
frames.forEach(function(e){
    e.contentWindow.frames.feedFrame.postMessage(event.data, "*");
})

}

if (window.addEventListener) {
    window.addEventListener("message", listener);
} else {
    // IE8
    window.attachEvent("onmessage", listener);
}












