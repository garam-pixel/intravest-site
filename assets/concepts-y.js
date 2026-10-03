// Intravest Y series: ten directions grown from Z3 (Steelmaker) and Z7 (Molten).
// Every direction is a small site: home + investment, supply, products, product detail, company, contact.
// Routes live in the hash: #d<direction>/<page>[/<id>].
(function(){
var C=window.IVC,lang='en',cur='1',page='',arg='';
var FIRE='#050505,#7A1E0E,#F08A3C',MIX='#0D1424,#1E4FA0,#E07A45',BLUE='#0A1222,#1E4FA0,#7FA6E8',STEEL='#0F1114,#3A4553,#AEB8C4',EMBER='#1A0A06,#C2492B,#F6B26B';
var D={
 1:{n:'Molten Corporate',th:'dark',main:FIRE,inv:BLUE,sup:FIRE},
 2:{n:'Blue to Fire',th:'light',main:MIX,inv:BLUE,sup:FIRE},
 3:{n:'Furnace Split',th:'light',main:MIX,inv:BLUE,sup:FIRE},
 4:{n:'Giant Heat',th:'light',main:FIRE,inv:BLUE,sup:FIRE},
 5:{n:'Night Mill',th:'dark',main:MIX,inv:BLUE,sup:FIRE},
 6:{n:'Rolling Slab',th:'dark',main:EMBER,inv:BLUE,sup:EMBER},
 7:{n:'Corporate Inset',th:'light',main:MIX,inv:BLUE,sup:FIRE},
 8:{n:'Editorial Heat',th:'paper',main:FIRE,inv:BLUE,sup:FIRE},
 9:{n:'Cinematic',th:'dark',main:FIRE,inv:BLUE,sup:FIRE},
 10:{n:'Ember Line',th:'light',main:EMBER,inv:BLUE,sup:EMBER}
};
function t(x){return x==null?'':(typeof x==='string'?x:(x[lang]!=null?x[lang]:x.en))}
function list(a,f){return a.map(f).join('')}
function L(k){return t(C.L[k])}
var SITE=window.IV_SITE?String(window.IV_SITE):''; // published site: one fixed direction, clean #/page routes, no switcher
function href(p){return SITE?'#/'+(p||''):'#d'+cur+(p?'/'+p:'')}
function pad(i){return (i<9?'0':'')+(i+1)}
function grad(c,s,cls){return '<canvas class="fxc '+(cls||'')+'" data-fx="gradient" data-c="'+c+'" data-s="'+(s||1)+'" aria-hidden="true"></canvas>'}
function navs(){return list(C.nav,function(n){return '<a href="'+href(n[0])+'"'+(page===n[0]||(page==='product'&&n[0]==='products')?' aria-current="page"':'')+'>'+t(n[1])+'</a>'})}
function head(cls){return '<header class="hd '+(cls||'')+'"><a class="mk" href="'+href('')+'">INTRAVEST</a><nav>'+navs()+'</nav><button type="button" class="bgr" aria-label="Menu" aria-expanded="false"><i></i><i></i></button></header>'}
function menu(){return '<div class="ov" hidden><div class="ovin">'+list(C.nav,function(n,i){return '<a href="'+href(n[0])+'"><span>'+pad(i)+'</span>'+t(n[1])+'</a>'})+'</div><p>'+C.addr+'</p></div>'}
function mail(){return '<div class="mail"><code>'+C.addr+'</code><button type="button" class="cp">'+L('copy')+'</button></div>'}
function more(p,txt){return '<a class="more" href="'+href(p)+'">'+(txt||t(C.more))+' <span aria-hidden="true">→</span></a>'}
function foot(){return '<footer class="fo"><div class="fot"><a class="mk" href="'+href('')+'">INTRAVEST</a><nav>'+navs()+'</nav></div><div class="fob"><span>'+t(C.office)+' · Business reg. 723-86-00752</span><span>© '+t(C.legal)+'</span></div></footer>'}
function figs(){return '<div class="figs">'+list(C.facts,function(f){return '<div class="fig rv"><i>'+t(f.k)+'</i><b>'+t(f.b)+'</b><span>'+t(f.s)+'</span></div>'})+'</div>'}
function pcard(id,i){var p=C.pillars[id];return '<a class="card '+id+' rv" href="'+href(id)+'"><span class="no">'+pad(i)+'</span><h3>'+t(p.t)+'</h3><p>'+t(p.d)+'</p><ul>'+list(p.k[lang],function(k){return '<li>'+k+'</li>'})+'</ul><span class="go">'+t(C.more)+' →</span></a>'}
function cards(){return '<div class="cards">'+pcard('investment',0)+pcard('supply',1)+'</div>'}
function edges(){return '<div class="edges">'+list(C.edge,function(e,i){return '<div class="edge rv"><span class="no">'+pad(i)+'</span><h4>'+t(e.t)+'</h4><p>'+t(e.d)+'</p></div>'})+'</div>'}
function prods(){return '<div class="prods">'+list(C.products,function(p,i){return '<a class="prod rv" href="'+href('product/'+p.id)+'"><span class="no">'+pad(i)+'</span><h4>'+t(p.n)+'</h4><p>'+t(p.tag)+'</p><div class="chips">'+list(p.g,function(g){return '<span>'+g+'</span>'})+'</div><span class="go">→</span></a>'})+'</div>'}
function steps(){return '<ol class="steps">'+list(C.sup.steps,function(s,i){return '<li class="rv"><span class="no">'+pad(i)+'</span><h4>'+t(s.t)+'</h4><p>'+t(s.d)+'</p></li>'})+'</ol>'}
function cta(){return '<section class="cta"><div class="ctab rv">'+grad(D[cur].main,.8)+'<div class="in"><h2>'+t(C.ct.title)+'</h2><div class="row">'+mail()+more('contact',t(C.nav[4][1]))+'</div></div></div></section>'}
function sec(lb,body,id){return '<section'+(id?' id="'+id+'"':'')+'><p class="lb rv">'+lb+'</p>'+body+'</section>'}
function hero(cls,inner,pal,s){return '<section class="hero '+(cls||'')+'">'+(pal?grad(pal,s):'')+'<div class="in">'+inner+'</div></section>'}
function h1two(){return '<h1>'+t(C.h1a)+'<br><em>'+t(C.h1b)+'</em></h1>'}
function std(){return sec('BUSINESS',cards())+'<section class="band">'+figs()+'</section>'+sec(L('why'),edges())+sec('PRODUCTS',prods()+more('products',L('all')))+cta()}

// ---- home, one per direction ----
var HOME={
1:function(){return hero('full','<p class="ms">'+C.mission+'</p>'+h1two()+'<p class="ld">'+t(C.lead)+'</p>',FIRE,1.2)+std()},
2:function(){return '<section class="hero full duo"><canvas class="fxc" data-fx="gradient" data-c="'+BLUE+'" aria-hidden="true"></canvas><canvas class="fxc fire" data-fx="gradient" data-c="'+FIRE+'" aria-hidden="true"></canvas><div class="in"><p class="ms">'+C.mission+'</p><h1><span class="w1">'+t(C.pillars.investment.t)+'</span><span class="w2">'+t(C.pillars.supply.t)+'</span></h1><p class="ld">'+t(C.lead)+'</p></div></section>'+std()},
3:function(){return '<section class="split2"><a class="half inv" href="'+href('investment')+'">'+grad(BLUE,.9)+'<div class="in"><span class="no">01</span><h2>'+t(C.pillars.investment.t)+'</h2><p>'+t(C.pillars.investment.k[lang].join(' · '))+'</p><span class="go">→</span></div></a><a class="half sup" href="'+href('supply')+'">'+grad(FIRE,.9)+'<div class="in"><span class="no">02</span><h2>'+t(C.pillars.supply.t)+'</h2><p>'+C.pillars.supply.k[lang].join(' · ')+'</p><span class="go">→</span></div></a></section><section class="intro2"><p class="ms">'+C.mission+'</p>'+h1two()+'<p class="ld">'+t(C.lead)+'</p></section><section class="band">'+figs()+'</section>'+sec(L('why'),edges())+sec('PRODUCTS',prods())+cta()},
4:function(){return '<section class="hero giant"><p class="ms">'+C.mission+'</p><h1 class="heat">'+t(C.h1a)+'</h1><div class="row"><p class="sub">'+t(C.h1b)+'</p><p class="ld">'+t(C.lead)+'</p></div></section>'+std()},
5:function(){return '<div class="snap">'+hero('pn',h1two(),MIX,1)+'<a class="pn inv" href="'+href('investment')+'">'+grad(BLUE,.9)+'<div class="in"><span class="no">01</span><h2>'+t(C.pillars.investment.t)+'</h2><p>'+t(C.pillars.investment.d)+'</p><span class="go">'+t(C.more)+' →</span></div></a><a class="pn sup" href="'+href('supply')+'">'+grad(FIRE,.9)+'<div class="in"><span class="no">02</span><h2>'+t(C.pillars.supply.t)+'</h2><p>'+t(C.pillars.supply.d)+'</p><span class="go">'+t(C.more)+' →</span></div></a><a class="pn prd" href="'+href('products')+'">'+grad(STEEL,.9)+'<div class="in"><span class="no">03</span><h2>'+L('all')+'</h2><p>'+C.products.map(function(p){return t(p.n)}).join(' · ')+'</p><span class="go">'+t(C.more)+' →</span></div></a></div><section class="band">'+figs()+'</section>'+cta()},
6:function(){return hero('full slab','<p class="ms">'+C.mission+'</p>'+h1two()+'<p class="ld">'+t(C.lead)+'</p>',EMBER,1.1)+'<section class="bigfigs">'+list(C.facts,function(f){return '<div class="bf rv"><b>'+t(f.b)+'</b><span>'+t(f.k)+' — '+t(f.s)+'</span></div>'})+'</section>'+sec('BUSINESS',cards())+sec(L('how'),steps())+sec('PRODUCTS',prods())+cta()},
7:function(){return '<section class="inset"><div class="box">'+grad(MIX,1)+'<div class="in"><p class="ms">'+C.mission+'</p>'+h1two()+'<p class="ld">'+t(C.lead)+'</p><div class="btns"><a class="btn" href="'+href('products')+'">'+L('all')+'</a><a class="btn ghost" href="'+href('contact')+'">'+t(C.nav[4][1])+'</a></div></div></div></section><section class="band">'+figs()+'</section>'+sec('BUSINESS',cards())+sec(L('how'),steps())+sec('PRODUCTS',prods())+cta()},
8:function(){return '<section class="hero ed"><p class="ms">'+C.mission+'</p><h1>'+t(C.h1a)+'</h1><div class="cols"><div class="win">'+grad(FIRE,1.3)+'</div><div><p class="sub">'+t(C.h1b)+'</p><p class="ld">'+t(C.lead)+'</p>'+more('company')+'</div></div></section>'+sec('BUSINESS',cards())+'<section class="band">'+figs()+'</section>'+sec('PRODUCTS',prods())+cta()},
9:function(){return hero('full cine','<p class="ms">'+C.mission+'</p><h1>'+t(C.h1a)+'</h1><p class="sub">'+t(C.h1b)+'</p>',FIRE,1)+'<section class="manifesto"><p class="rv">'+t(C.lead)+'</p></section>'+sec('BUSINESS',cards())+sec(L('how'),steps())+sec('PRODUCTS',prods())+cta()},
10:function(){return '<div class="ember">'+grad(EMBER,.6)+'</div><section class="hero quiet"><p class="ms">'+C.mission+'</p>'+h1two()+'<p class="ld">'+t(C.lead)+'</p></section>'+std()}
};

// ---- inner pages, shared by all directions ----
function sub(eb,title,pal,crumb){return '<section class="sh">'+grad(pal,1)+'<div class="in"><p class="crumb"><a href="'+href('')+'">'+t(C.back)+'</a>'+(crumb||'')+'</p><p class="ms">'+eb+'</p><h1>'+title+'</h1></div></section>'}
function next(p,lb){return '<section class="nx"><a href="'+href(p)+'" class="rv"><span>'+L('next')+'</span><b>'+lb+' →</b></a></section>'}
var PAGE={
investment:function(){var d=D[cur],v=C.inv;return sub(t(C.pillars.investment.t).toUpperCase(),t(v.title),d.inv)+'<section class="lead2"><p class="rv">'+t(v.intro)+'</p></section><section><div class="items">'+list(v.items,function(x,i){return '<div class="item rv"><span class="no">'+pad(i)+'</span><h3>'+t(x.t)+'</h3><p>'+t(x.d)+'</p></div>'})+'</div><p class="note rv">'+t(v.rule)+'</p></section>'+next('supply',t(C.pillars.supply.t))+cta()},
supply:function(){var d=D[cur],v=C.sup;return sub(t(C.pillars.supply.t).toUpperCase(),t(v.title),d.sup)+'<section class="lead2"><p class="rv">'+t(v.intro)+'</p></section>'+sec(L('how'),steps())+sec(L('why'),edges())+sec(L('docs'),'<ul class="docs">'+list(C.docs[lang],function(x){return '<li class="rv">'+x+'</li>'})+'</ul>')+next('products',L('all'))+cta()},
products:function(){return sub('PRODUCTS',L('all'),D[cur].main)+'<section>'+prods()+'</section>'+cta()},
product:function(){var i=Math.max(0,C.products.findIndex(function(p){return p.id===arg})),p=C.products[i],nx=C.products[(i+1)%3];
  return sub('PRODUCTS',t(p.n),i===2?D[cur].sup:STEEL,' / <a href="'+href('products')+'">'+L('all')+'</a>')+'<section class="pd"><div class="pdl rv"><p class="tag">'+t(p.tag)+'</p><h4>'+L('grades')+'</h4><div class="chips big">'+list(p.g,function(g){return '<span>'+g+'</span>'})+'</div></div><div class="pdr rv"><h4>'+L('spec')+'</h4><table class="spec">'+list(p.spec,function(r){return '<tr><th>'+t(r[0])+'</th><td>'+t(r[1])+'</td></tr>'})+'</table><h4>'+L('use')+'</h4><ul class="uses">'+list(p.use[lang],function(u){return '<li>'+u+'</li>'})+'</ul><a class="btn" href="'+href('contact/'+p.id)+'">'+t(C.ct.f.send)+' →</a></div></section>'+sec(L('docs'),'<ul class="docs">'+list(C.docs[lang],function(x){return '<li class="rv">'+x+'</li>'})+'</ul>')+next('product/'+nx.id,t(nx.n))},
company:function(){var v=C.co;return sub('COMPANY',t(v.title),D[cur].main)+'<section class="lead2"><p class="rv">'+t(v.intro)+'</p></section><section class="band">'+figs()+'</section><section><div class="items">'+list(v.values,function(x,i){return '<div class="item rv"><span class="no">'+pad(i)+'</span><h3>'+t(x.t)+'</h3><p>'+t(x.d)+'</p></div>'})+'</div></section><section><table class="spec wide rv">'+list(v.rows,function(r){return '<tr><th>'+t(r[0])+'</th><td>'+t(r[1])+'</td></tr>'})+'</table></section>'+cta()},
contact:function(){var f=C.ct.f,sel=arg||'coil';return sub('CONTACT',t(C.ct.title),D[cur].main)+'<section class="ctp"><div><p class="lead3 rv">'+t(C.ct.intro)+'</p><div class="addr rv"><p>'+t(C.office)+'</p>'+mail()+'</div></div><form class="form rv" id="inq"><label>'+t(f.product)+'<select name="product">'+list(C.products,function(p){return '<option value="'+t(p.n)+'"'+(p.id===sel?' selected':'')+'>'+t(p.n)+'</option>'})+'</select></label><label>'+t(f.grade)+'<input name="grade" autocomplete="off"></label><label>'+t(f.qty)+'<input name="qty" autocomplete="off"></label><label>'+t(f.port)+'<input name="port" autocomplete="off"></label><label>'+t(f.company)+'<input name="company" autocomplete="organization"></label><label class="w">'+t(f.msg)+'<textarea name="msg" rows="4"></textarea></label><button type="submit" class="btn">'+t(f.send)+' →</button></form></section>'}
};

var NAMES=Object.keys(D).map(function(k){return D[k].n});
var app=document.getElementById('app'),root=document.documentElement,sw=document.getElementById('sw');
function wire(){
  app.querySelectorAll('.cp').forEach(function(b){b.addEventListener('click',function(){var c=b.previousElementSibling;function s(){var r=document.createRange();r.selectNodeContents(c);var g=getSelection();g.removeAllRanges();g.addRange(r)}
    if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(c.textContent).then(function(){b.textContent=lang==='ja'?'コピー済み':'Copied'},s);else s()})});
  var ov=app.querySelector('.ov'),bg=app.querySelector('.bgr');
  if(bg)bg.addEventListener('click',function(){var o=ov.hidden;ov.hidden=!o;bg.setAttribute('aria-expanded',String(o));document.body.style.overflow=o?'hidden':''});
  var fm=app.querySelector('#inq');
  if(fm)fm.addEventListener('submit',function(e){e.preventDefault();var v=new FormData(fm),f=C.ct.f,lines=['product','grade','qty','port','company'].map(function(k){return t(f[k])+': '+(v.get(k)||'')});
    location.href='mailto:'+C.addr+'?subject='+encodeURIComponent('Inquiry — '+v.get('product'))+'&body='+encodeURIComponent(lines.join('\n')+'\n\n'+(v.get('msg')||''))});
  // direction 2: blend the blue field into fire as the hero scrolls away
  var duo=app.querySelector('.duo');
  if(duo){var fire=duo.querySelector('.fire'),w1=duo.querySelector('.w1'),w2=duo.querySelector('.w2');
    var on=function(){var p=Math.min(1,Math.max(0,scrollY/(duo.offsetHeight*.6)));fire.style.opacity=p;w1.style.opacity=1-p;w2.style.opacity=p};addEventListener('scroll',on,{passive:true});on();
    wire.off=function(){removeEventListener('scroll',on)}}
}
function render(){if(wire.off){wire.off();wire.off=null}document.body.style.overflow='';
  var d=D[cur];app.className='y'+cur+' th-'+d.th+(page?' inner':' home');
  app.innerHTML=head(cur==='9'?'cine':'')+menu()+'<main>'+(page&&PAGE[page]?PAGE[page]():HOME[cur]())+'</main>'+foot();
  root.setAttribute('data-y',cur);wire();window.IVFX&&IVFX.attach(app);
  app.classList.remove('fade');void app.offsetWidth;app.classList.add('fade')}
function route(){if(SITE){var q=location.hash.match(/^#\/([a-z]+)?(?:\/([a-z]+))?/);cur=SITE;page=q&&q[1]||'';arg=q&&q[2]||'';if(page&&!PAGE[page])page='';render();scrollTo(0,0);return}
  var m=location.hash.match(/^#d(10|[1-9])(?:\/([a-z]+)(?:\/([a-z]+))?)?/);
  if(m){cur=m[1];page=m[2]||'';arg=m[3]||''}else{cur=get('iv-y')||'1';page='';arg=''}
  put('iv-y',cur);sw.querySelectorAll('button').forEach(function(b){b.setAttribute('aria-pressed',String(b.dataset.y===cur))});render();scrollTo(0,0)}
function get(k){try{return localStorage.getItem(k)}catch(e){return null}}
function put(k,v){try{localStorage.setItem(k,v)}catch(e){}}
if(sw){sw.innerHTML=NAMES.map(function(n,i){return '<button type="button" data-y="'+(i+1)+'">'+(i+1)+' '+n+'</button>'}).join('');
sw.addEventListener('click',function(e){var b=e.target.closest('button');if(b)location.hash='d'+b.dataset.y+(page?'/'+page+(arg?'/'+arg:''):'')})}
document.querySelectorAll('.lg button').forEach(function(b){b.addEventListener('click',function(){lang=b.dataset.l;root.lang=lang;document.querySelectorAll('.lg button').forEach(function(x){x.setAttribute('aria-pressed',String(x===b))});put('iv-lang',lang);render()})});
lang=get('iv-lang')==='ja'?'ja':'en';root.lang=lang;document.querySelectorAll('.lg button').forEach(function(b){b.setAttribute('aria-pressed',String(b.dataset.l===lang))});
addEventListener('hashchange',route);route();
})();
