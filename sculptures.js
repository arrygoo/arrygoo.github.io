
$(document).ready(function () {
  "use strict";
  let sculptures = [
    {
      imgUrl: "sculptures/1.jpeg",
    },
    {
      imgUrl: "sculptures/2.jpeg",
    },
    {
      imgUrl: "sculptures/3.jpeg",
    },
    {
      imgUrl: "sculptures/4.jpeg",
    },
    {
      imgUrl: "sculptures/5.jpeg",
    },
    {
      imgUrl: "sculptures/6.jpeg",
    },
    {
      imgUrl: "sculptures/7.jpeg",
    },
    {
      imgUrl: "sculptures/8.jpeg",
    },
    {
      imgUrl: "sculptures/9.jpeg",
    },
    {
      imgUrl: "sculptures/10.jpeg",
    },
    {
      imgUrl: "sculptures/11.jpeg",
    },
    {
      imgUrl: "sculptures/12.jpeg",
    },
    {
      imgUrl: "sculptures/13.jpeg",
    },
    {
      imgUrl: "sculptures/14.jpeg",
    },
    {
      imgUrl: "sculptures/15.jpeg",
    },
    {
      imgUrl: "sculptures/16.jpeg",
    },
    {
      imgUrl: "sculptures/17.jpeg",
    },
    {
      imgUrl: "sculptures/18.jpeg",
    },
  ];
  let imgsTag = [];

  sculptures.forEach(drawing => {
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

  $("#sculptureModalBody").append(imgsTag);
});
