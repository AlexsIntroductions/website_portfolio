const el = document.getElementsByClassName('splash')[0];
el.addEventListener("webkitAnimationEnd", function(e){});
el.addEventListener("animationend", function(e){});
setTimeout(() => { el.classList.add('fade-out'); }, 2000);
setTimeout(() => { el.remove(); }, 3000);