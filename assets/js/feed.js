var feed = document.querySelector("div");
var store = [];
function listener(event) {
            var date = new Date();
        var hours = ('0' + date.getHours()).slice(-2);
        var minutes = ('0' + date.getMinutes()).slice(-2);
        var seconds = ('0' + date.getSeconds()).slice(-2);
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

