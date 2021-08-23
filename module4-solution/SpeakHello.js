(function (window) {

var helloSpeaker = {};

helloSpeaker.speakWord = "Hello";

helloSpeaker.speak = function () {
  console.log(helloSpeaker.speakWord + " " + helloSpeaker.names[i]);
}

window.helloSpeaker = helloSpeaker;

})(window);
