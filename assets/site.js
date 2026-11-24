(function(){
  var views=['home','blog','projects','gallery','about'];
  function show(){
    var h=location.hash.slice(1);
    if(views.indexOf(h)<0)h='home';
    views.forEach(function(v){
      var sec=document.getElementById(v),a=document.querySelector('nav a[href$="#'+v+'"]');
      if(sec)sec.classList.toggle('active',v===h);
      if(a)a.classList.toggle('on',v===h);
    });
    window.scrollTo(0,0);
  }
  if(document.getElementById('home')){
    addEventListener('hashchange',show);
    show();
  }else{
    var a=document.querySelector('nav a[href$="#blog"]');
    if(a)a.classList.add('on');
  }
})();

(function(){
  var lb=document.getElementById('lb');
  if(!lb)return;
  var im=lb.querySelector('img'),cp=lb.querySelector('p');
  function close(){lb.hidden=true}
  document.addEventListener('click',function(e){
    var b=e.target.closest&&e.target.closest('.thumb');
    if(!b)return;
    var i=b.querySelector('img'),c=b.parentNode.querySelector('.gc');
    im.src=i.src;im.alt=i.alt;
    cp.textContent=c?(c.querySelector('h3').textContent+' \u2014 '+c.querySelector('p').textContent):'';
    lb.hidden=false;
  });
  lb.addEventListener('click',close);
  document.addEventListener('keydown',function(e){if(e.key==='Escape')close()});
})();
