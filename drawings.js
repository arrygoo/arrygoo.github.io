
$(document).ready(function() {
  "use strict"
  let drawings = [
    {
      imgUrl: 'drawings/1.jpeg',
    },
    {
      imgUrl: 'drawings/2.jpeg',
    },
    {
      imgUrl: 'drawings/3.jpeg',
    },
    {
      imgUrl: 'drawings/4.jpeg',
    },
    {
      imgUrl: 'drawings/5.jpeg',
    },
    {
      imgUrl: 'drawings/6.jpeg',
    },
    {
      imgUrl: 'drawings/7.jpeg',
    },
    {
      imgUrl: 'drawings/8.jpeg',
    },
    {
      imgUrl: 'drawings/9.jpeg',
    },
    {
      imgUrl: 'drawings/10.jpeg',
    },
    {
      imgUrl: 'drawings/11.jpeg',
    },
    {
      imgUrl: 'drawings/12.jpeg',
    },
    {
      imgUrl: 'drawings/13.jpeg',
    },
    {
      imgUrl: 'drawings/14.jpeg',
    },
    {
      imgUrl: 'drawings/15.jpeg',
    },
    {
      imgUrl: 'drawings/16.jpeg',
    },
    {
      imgUrl: 'drawings/17.jpeg',
    },
    {
      imgUrl: 'drawings/18.jpeg',
    },
  ];
  let imgsTag = [];

  drawings.forEach(drawing => {
    let img = $(` \
      <div>
        <a href="${drawing.imgUrl}">
          <img title="${drawing.title || ''}"
                alt="${drawing.title || ''}"
                class="imageList"
                src=${drawing.imgUrl}>
        </a>
        <div>
          <!--br/-->
          <b>${drawing.title || ''}</b>
          <!--br/-->
          ${drawing.lines && drawing.lines[0] || ''}
          <!--br/-->
          ${drawing.lines && drawing.lines[1] || ''}
          <!--br/-->
          ${drawing.lines && drawing.lines[2] || ''}
        </div>
        <hr style="width: 50%; margin: 50px 0 50px 0  auto; text-align:center;"/>
      </div>
    `);
    imgsTag.push(img);

  })

  $('#paintingModalBody').append(imgsTag)
  $('map').imageMapResize();
  $('a').fullsizable({
    detach_id: 'container'
  });
  $(document).on('fullsizable:opened', function(){
    $("#jquery-fullsizable").swipe({
      swipeLeft: function(){
        $(document).trigger('fullsizable:next')
      },
      swipeRight: function(){
        $(document).trigger('fullsizable:prev')
      },
      swipeUp: function(){
        $(document).trigger('fullsizable:close')
      }
    });
  });
});
