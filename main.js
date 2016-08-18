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

  // Welcome message:
  $('#overlay, #overlay-back').on('click', function () {
    $('#overlay, #overlay-back').fadeOut(500);
  });

  setTimeout(function() {
    $('#overlay, #overlay-back').fadeOut(2000);
  }, 2000)

});
