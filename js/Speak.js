var Speaker = (function() {

    var speak = function(text) {
        var msg = new SpeechSynthesisUtterance();
        var voices = window.speechSynthesis.getVoices();
        msg.voice = voices[10]; // Note: some voices don't support altering params
        msg.voiceURI = 'native';
        msg.volume = 1; // 0 to 1
        msg.rate = 1; // 0.1 to 10
        msg.pitch = 1; //0 to 2
        msg.text = text;
        msg.lang = 'en-US';

        msg.onend = function(e) {
            console.log('Finished in ' + event.elapsedTime + ' seconds.');
        };

        speechSynthesis.speak(msg);
    }

    var elementId = function(Id) {
        var element = document.getElementById(Id);
        if (element.value) {
            speak(element.value);
        }
    }

    var Speaker = {

        speak: speak,
        elementId: elementId

    };

    return Speaker;
}());
