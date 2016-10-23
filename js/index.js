var imgArr = [['lwapp', 'Weather-M.png', 'Weather.png'],
              ['cdpen', 'Codepen-M.png', 'Codepen.png'],
              ['flout', 'Flyout-M.png', 'Flyout.png']];

$(document).ready(function(){
  for(i in imgArr){
    imgAdjust(imgArr[i][0], imgArr[i][1], imgArr[i][2] );
  }
});

$(window).resize(function(){
  for(i in imgArr){
    imgAdjust(imgArr[i][0], imgArr[i][1], imgArr[i][2] );
  }
});

function imgAdjust(idd, sourceM, source){
  if($(window).width() < 700){
    $('#'+idd).attr('src', 'img/'+sourceM);
    $('#'+idd).css('max-width', '420px');
  }else{
    $('#'+idd).attr('src', 'img/'+source);
    $('#'+idd).css('max-width', '1030px');
  }
}
