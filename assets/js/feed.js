var feed = document.querySelector("div");
var store = [];

function listener(event) {
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        var message = event.data;
        if (message) {
            var chatMessage =
                '<div class="c-chatbox__message"><div class="c-chatbox__time">' +
                hours +
                ":" +
                minutes +
                ":" +
                seconds +
                '</div> <span class="c-chatbox__username">' +
                "Guest " +
                ": " +
                "</span>" +
                event.data +
                "</div>";
            store.push(chatMessage);
        }

        feed.insertAdjacentHTML("beforeend", store[store.length - 1]);
        window.scrollTo(0, document.body.scrollHeight);
}


if (window.addEventListener) {
    window.addEventListener("message", listener);
} else {
    // IE8
    window.attachEvent("onmessage", listener);
}

