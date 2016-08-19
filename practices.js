
$(document).ready(function () {
  "use strict";
  let practices = [
    {
      imgUrl: "practices/1.jpg",
    },
    {
      imgUrl: "practices/2.jpg",
    },
    {
      imgUrl: "practices/3.jpg",
    },
    {
      imgUrl: "practices/4.jpg",
    },
    {
      imgUrl: "practices/5.jpg",
    },
    {
      imgUrl: "practices/6.jpg",
    },
  ];
  let imgsTag = [];

  practices.forEach(drawing => {
    let img = $(` \
      <div>
        <a href="${drawing.imgUrl}">
          <img title="${drawing.title || ""}"
                alt="${drawing.title || ""}"
                class="imageList"
                src=${drawing.imgUrl}>
        </a>
        <div>
          <!--br/-->
          <b>${drawing.title || ""}</b>
          <!--br/-->
          ${drawing.lines && drawing.lines[0] || ""}
          <!--br/-->
          ${drawing.lines && drawing.lines[1] || ""}
          <!--br/-->
          ${drawing.lines && drawing.lines[2] || ""}
        </div>
        <hr style="width: 50%; margin: 50px 0 50px 0  auto; text-align:center;"/>
      </div>
    `);
    imgsTag.push(img);
  });
  $("#practicesModalBody").append(imgsTag);
});
