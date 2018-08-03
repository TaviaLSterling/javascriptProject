var health = 100;
const slapButton = document.getElementById('slap-button')

function slap() {
        health--;   
        alert(health)
        update();   
    }

function update() {
 document.getElementById('health').innerText = health.toString()

}

update()