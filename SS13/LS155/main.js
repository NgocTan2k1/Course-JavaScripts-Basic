var h2Element = document.querySelectorAll('h2');


for (var i = 0; i < h2Element.length; i++) {
    h2Element[i].onclick = function(event) {
        console.log(event.target);
    }
}

<button onclick="console.log('clicked!')">Button</button>

