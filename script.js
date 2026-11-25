(function(){
var d=document,$=function(s,c){return(c||d).querySelector(s)},$$=function(s,c){return Array.prototype.slice.call((c||d).querySelectorAll(s))};
var btn=$('.menu-btn'),nav=$('#nav');
function setMenu(o){nav.classList.toggle('open',o);btn.setAttribute('aria-expanded',o);btn.setAttribute('aria-label',o?'Close menu':'Open menu')}
if(btn&&nav){btn.addEventListener('click',function(){setMenu(btn.getAttribute('aria-expanded')!=='true')});$$('a',nav).forEach(function(a){a.addEventListener('click',function(){setMenu(false)})})}
var KEY='bailman-wa-number';
function get(){try{return localStorage.getItem(KEY)}catch(e){return null}}
function set(v){try{localStorage.setItem(KEY,v)}catch(e){}}
var fab=$('.wa-fab'),panel=$('#wa-panel');
function setPanel(o){panel.hidden=!o;fab.setAttribute('aria-expanded',o)}
if(fab&&panel){fab.addEventListener('click',function(){setPanel(panel.hidden)});
d.addEventListener('click',function(e){if(!panel.hidden&&!e.target.closest('.wa'))setPanel(false)});
$$('a',panel).forEach(function(a){a.addEventListener('click',function(){set(a.getAttribute('data-num'));setPanel(false)})})}
d.addEventListener('keydown',function(e){if(e.key==='Escape'){if(nav)setMenu(false);if(panel)setPanel(false)}});
$$('.wabtns a[data-num]').forEach(function(a){a.addEventListener('click',function(){set(a.getAttribute('data-num'))})});
var pref=get();
if(pref){$$('a[data-wa-text]').forEach(function(a){a.href='https://wa.me/'+pref+'?text='+encodeURIComponent(a.getAttribute('data-wa-text'))})}
var q=new URLSearchParams(location.search).get('product'),pf=$('#product-text'),msg=$('#cmsg');
if(q&&pf){pf.value=q;if(msg&&!msg.value)msg.value='I would like to make an enquiry about: '+q+'.\n\nQuantity and target market: '}
$$('form[data-netlify]').forEach(function(f){f.addEventListener('submit',function(){var b=$('button[type=submit]',f);if(b){b.disabled=true;b.textContent='Sending...'}})});
$$('a.soc[href="#"]').forEach(function(a){a.addEventListener('click',function(e){e.preventDefault()})});
$$('.yr').forEach(function(e){e.textContent=new Date().getFullYear()});
})();