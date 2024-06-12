let speech = new SpeechSynthesisUtterance();
let voices = [];
let voicesSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voicesSelect.innerHTML = ""; // clear the select options
}