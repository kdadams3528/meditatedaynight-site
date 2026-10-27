(function(){var b=document.querySelector('.nav-toggle'),h=document.querySelector('header');if(!b||!h)return;
function set(o){h.classList.toggle('nav-open',o);b.setAttribute('aria-expanded',o?'true':'false');b.lastChild.nodeValue=o?'Close':'Menu';}
b.addEventListener('click',function(){set(!h.classList.contains('nav-open'))});
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&h.classList.contains('nav-open')){set(false);b.focus();}});
document.addEventListener('click',function(e){if(!h.contains(e.target))set(false)});})();
