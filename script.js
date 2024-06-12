let speech = new SpeechSynthesisUtterance();
let voices = [];
let voicesSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voicesSelect.innerHTML = ""; // clear the select options

    voices.forEach((voice, i) => {
        let option = document.createElement("option");
        option.text = voice.name + " (" + voice.lang + ")";
        option.value = i;
        voicesSelect.add(option);
    });
};

document.querySelector("button").addEventListener("click", () =>{
    speech.text = document.querySelector("textarea").value;
    speech.voice = voices[voicesSelect.value]; // set the voice based on the select value
    window.speechSynthesis.speak(speech);
});