"use strict";

$(document).ready(function () {
  // Practices
  var practices = [{
    imgUrl: "practices/1.jpg",
  }, {
    imgUrl: "practices/2.jpg",
  }, {
    imgUrl: "practices/3.jpg",
  }, {
    imgUrl: "practices/4.jpg",
  }, {
    imgUrl: "practices/5.jpg",
  }, {
    imgUrl: "practices/6.jpg",
  }];
  var practicesImgsTag = [];

  practices.forEach(function (drawing) {
    var img = $("       <div>\n        <a href=\"" + drawing.imgUrl + "\">\n          <img title=\"" + (drawing.title || "") + "\"\n                alt=\"" + (drawing.title || "") + "\"\n                class=\"imageList\"\n                src=" + drawing.imgUrl + ">\n        </a>\n        <div>\n          <!--br/-->\n          <b>" + (drawing.title || "") + "</b>\n          <!--br/-->\n          " + (drawing.lines && drawing.lines[0] || "") + "\n          <!--br/-->\n          " + (drawing.lines && drawing.lines[1] || "") + "\n          <!--br/-->\n          " + (drawing.lines && drawing.lines[2] || "") + "\n        </div>\n        <hr style=\"width: 50%; margin: 50px 0 50px 0  auto; text-align:center;\"/>\n      </div>\n    ");
    practicesImgsTag.push(img);
  });

  var drawings = [{
    imgUrl: "drawings/1.jpeg",
  }, {
    imgUrl: "drawings/2.jpeg",
  }, {
    imgUrl: "drawings/3.jpeg",
  }, {
    imgUrl: "drawings/4.jpeg",
  }, {
    imgUrl: "drawings/5.jpeg",
  }, {
    imgUrl: "drawings/6.jpeg",
  }, {
    imgUrl: "drawings/7.jpeg",
  }, {
    imgUrl: "drawings/8.jpeg",
  }, {
    imgUrl: "drawings/9.jpeg",
  }, {
    imgUrl: "drawings/10.jpeg",
  }, {
    imgUrl: "drawings/11.jpeg",
  }, {
    imgUrl: "drawings/12.jpeg",
  }, {
    imgUrl: "drawings/13.jpeg",
  }, {
    imgUrl: "drawings/14.jpeg",
  }, {
    imgUrl: "drawings/15.jpeg",
  }, {
    imgUrl: "drawings/16.jpeg",
  }, {
    imgUrl: "drawings/17.jpeg",
  }, {
    imgUrl: "drawings/18.jpeg",
  }];
  var drawingsImgsTag = [];

  drawings.forEach(function (drawing) {
    var img = $("       <div>\n        <a href=\"" + drawing.imgUrl + "\">\n          <img title=\"" + (drawing.title || "") + "\"\n                alt=\"" + (drawing.title || "") + "\"\n                class=\"imageList\"\n                src=" + drawing.imgUrl + ">\n        </a>\n        <div>\n          <!--br/-->\n          <b>" + (drawing.title || "") + "</b>\n          <!--br/-->\n          " + (drawing.lines && drawing.lines[0] || "") + "\n          <!--br/-->\n          " + (drawing.lines && drawing.lines[1] || "") + "\n          <!--br/-->\n          " + (drawing.lines && drawing.lines[2] || "") + "\n        </div>\n        <hr style=\"width: 50%; margin: 50px 0 50px 0  auto; text-align:center;\"/>\n      </div>\n    ");
    drawingsImgsTag.push(img);
  });

  var sculptures = [{
    imgUrl: "sculptures/1.jpeg",
  }, {
    imgUrl: "sculptures/2.jpeg",
  }, {
    imgUrl: "sculptures/3.jpeg",
  }, {
    imgUrl: "sculptures/4.jpeg",
  }, {
    imgUrl: "sculptures/5.jpeg",
  }, {
    imgUrl: "sculptures/6.jpeg",
  }, {
    imgUrl: "sculptures/7.jpeg",
  }, {
    imgUrl: "sculptures/8.jpeg",
  }, {
    imgUrl: "sculptures/9.jpeg",
  }, {
    imgUrl: "sculptures/10.jpeg",
  }, {
    imgUrl: "sculptures/11.jpeg",
  }, {
    imgUrl: "sculptures/12.jpeg",
  }, {
    imgUrl: "sculptures/13.jpeg",
  }, {
    imgUrl: "sculptures/14.jpeg",
  }, {
    imgUrl: "sculptures/15.jpeg",
  }, {
    imgUrl: "sculptures/16.jpeg",
  }, {
    imgUrl: "sculptures/17.jpeg",
  }, {
    imgUrl: "sculptures/18.jpeg",
  }];
  var scultptureImgsTag = [];

  sculptures.forEach(function (drawing) {
    var img = $("       <div>\n        <a href=\"" + drawing.imgUrl + "\">\n          <img title=\"" + (drawing.title || "") + "\"\n                alt=\"" + (drawing.title || "") + "\"\n                class=\"imageList\"\n                src=" + drawing.imgUrl + ">\n        </a>\n        <div>\n          <!--br/-->\n          <b>" + (drawing.title || "") + "</b>\n          <!--br/-->\n          " + (drawing.lines && drawing.lines[0] || "") + "\n          <!--br/-->\n          " + (drawing.lines && drawing.lines[1] || "") + "\n          <!--br/-->\n          " + (drawing.lines && drawing.lines[2] || "") + "\n        </div>\n        <hr style=\"width: 50%; margin: 50px 0 50px 0  auto; text-align:center;\"/>\n      </div>\n    ");
    scultptureImgsTag.push(img);
  });

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
      swipeLeft: function swipeLeft() {
        $(document).trigger("fullsizable:next");
      },
      swipeRight: function swipeRight() {
        $(document).trigger("fullsizable:prev");
      },
      swipeUp: function swipeUp() {
        $(document).trigger("fullsizable:close");
      },
    });
  });
});
