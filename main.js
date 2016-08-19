$(document).ready(function () {
  // imageMapResizer
  $("map").imageMapResize();

  function mouseOverEvent(area) {
    $("#" + area).addClass("opaque");
  }
  function mouseOutEvent(area) {
    $("#" + area).removeClass("opaque");
  }
  function openModal(modalName) {
    $("#" + modalName).modal("show");
  }

  // Welcome message:
  $("#overlay, #overlay-back").on("click", function () {
    $("#overlay, #overlay-back").fadeOut(1000);
  });

  setTimeout(function () {
    $("#overlay, #overlay-back").fadeOut(2000);
  }, 8000);

  $("map").imageMapResize();
  $("a").fullsizable({
    detach_id: "container",
  });
  $(document).on("fullsizable:opened", function () {
    $("#jquery-fullsizable").swipe({
      swipeLeft: function () {
        $(document).trigger("fullsizable:next");
      },
      swipeRight: function () {
        $(document).trigger("fullsizable:prev");
      },
      swipeUp: function () {
        $(document).trigger("fullsizable:close");
      },
    });
  });


});
