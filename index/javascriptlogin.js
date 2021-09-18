var promises = [];
function makePromise(i, video) {
  promises[i] = new $.Deferred();
  video.oncanplaythrough = function() {
    promises[i].resolve();
  }
}
$('video').each(function(index){
  this.pause();
  makePromise(index, this);
})
$.when.apply(null, promises).done(function () {
  $('video').each(function(){
    this.play();
  });
});
