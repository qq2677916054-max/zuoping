(function(){
  function resetHorizontalScroll(){
    if(!window.matchMedia('(max-width: 820px)').matches)return;
    var y=window.pageYOffset||document.documentElement.scrollTop||0;
    if(window.pageXOffset)window.scrollTo({left:0,top:y,behavior:'instant'});
    if(document.documentElement.scrollLeft)document.documentElement.scrollLeft=0;
    if(document.body.scrollLeft)document.body.scrollLeft=0;
    var shell=document.querySelector('.app-shell');
    if(shell&&shell.scrollLeft)shell.scrollLeft=0;
  }
  window.addEventListener('pageshow',resetHorizontalScroll);
  window.addEventListener('resize',resetHorizontalScroll);
  window.addEventListener('orientationchange',function(){setTimeout(resetHorizontalScroll,250);});

  document.addEventListener('DOMContentLoaded',resetHorizontalScroll);
})();