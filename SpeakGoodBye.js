(function(name){
  var byeSpeaker = {};
  byeSpeaker.speakWord = "Good Bye";
  byeSpeaker.speak = function (){
    console.log(byeSpeaker.speakWord + " " + name);
  }
window.byeSpeaker = byeSpeaker;
})(window);