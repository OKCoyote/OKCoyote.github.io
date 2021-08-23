(function (window) {

var byeSpeaker = {};

byeSpeaker.speakWord = "Good Bye";

byeSpeaker.speak = function () {
  console.log(byeSpeaker.speakWord + " " + byeSpeaker.names[i]);
}

window.byeSpeaker = byeSpeaker;

})(window);
