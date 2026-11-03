(function(){
  function resetHorizontalScroll(){
    if(!window.matchMedia('(max-width: 820px)').matches)return;
    var y=window.pageYOffset||document.documentElement.scrollTop||0;
    if(window.pageXOffset)window.scrollTo({left:0,top:y,behavior:'instant'});
    document.documentElement.scrollLeft=0;
    document.body.scrollLeft=0;
    var shell=document.querySelector('.app-shell');
    if(shell)shell.scrollLeft=0;
  }
  window.addEventListener('pageshow',resetHorizontalScroll);
  window.addEventListener('resize',resetHorizontalScroll);
  window.addEventListener('orientationchange',function(){setTimeout(resetHorizontalScroll,250);});
  window.addEventListener('scroll',resetHorizontalScroll,{passive:true});
  document.addEventListener('DOMContentLoaded',resetHorizontalScroll);
})();