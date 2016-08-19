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

  function enteredWebsite() {
    $("#cf7").imagesLoaded(function () {
    // images have loaded
      $("#loading").fadeOut(100);
      $("#overlay, #overlay-back").fadeOut(2000);
      $("#practicesModalBody").append(practicesImgsTag);
      $("#sculptureModalBody").append(scultptureImgsTag);
      $("#paintingModalBody").append(drawingsImgsTag);
    });
  }

  $("#cf7").imagesLoaded(function () {
  // images have loaded
    $("#loading").fadeOut(100);
  });

  // Welcome message:
  $("#overlay, #overlay-back").on("click", function () {
    enteredWebsite();
  });

  setTimeout(function () {
    enteredWebsite();
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
