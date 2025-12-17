let count = 0;


function yangila() {
document.getElementById("counter").innerText = count;
}


function oshir() {
count++;
yangila();
}


function kamaytir() {
count--;
yangila();
}


function nolgaTushur() {
count = 0;
yangila();
}
