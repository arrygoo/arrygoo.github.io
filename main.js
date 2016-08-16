$(document).ready(function() {
  // imageMapResizer
  $('map').imageMapResize();

  function mouseOverEvent(area) {
    $("#" + area).addClass("opaque");
  }
  function mouseOutEvent(area) {
    $("#" + area).removeClass("opaque");
  }
  function openModal(modalName) {
    $("#" + modalName).modal('show');
  }

s
});
