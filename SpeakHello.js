(function(name){
    var helloSpeaker = {};
    helloSpeaker.speakWord = "Hello";
    helloSpeaker.speak = function() {
        console.log(helloSpeaker.speakWord + " " + name);
    }
window.helloSpeaker = helloSpeaker;
})(window);