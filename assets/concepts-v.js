// Intravest V series: ten directions grown from Y3 (Furnace Split) and Y7 (Molten) with more motion,
// a floating wordmark, sogo-shosha style taglines, product symbols and the mill line moved mid-page.
// Routes: #d<direction>/<page>[/<id>]  (site build: #/<page>[/<id>])
(function(){
var C=window.IVC,lang='en',cur='1',page='',arg='';
var FIRE='#050505,#7A1E0E,#F08A3C',MIX='#06101C,#0B2A4A,#E07A45',BLUE='#06101C,#0B2A4A,#7FA6E8',STEEL='#0F1114,#3A4553,#AEB8C4',EMBER='#1A0A06,#C2492B,#F6B26B',GRAY='#FFFFFF,#E9EDF2,#C6CFDA',ICE='#06101C,#0B2A4A,#9CC3F0';
var D={
 1:{n:'Furnace Split II',th:'dark'},2:{n:'Molten Marquee',th:'dark'},3:{n:'Cold / Hot Tiles',th:'light'},4:{n:'Logo Monument',th:'dark'},5:{n:'Night Mill II',th:'dark'},
 6:{n:'Dual Field',th:'dark'},7:{n:'Corporate Inset II',th:'light'},8:{n:'Editorial Heat II',th:'paper'},9:{n:'Cinematic II',th:'dark'},10:{n:'Ember Line II',th:'light'}
};
function t(x){return x==null?'':(typeof x==='string'?x:(x[lang]!=null?x[lang]:x.en))}
function list(a,f){return a.map(f).join('')}
function L(k){return t(C.L[k])}
var SITE=window.IV_SITE?String(window.IV_SITE):'';
function href(p){return SITE?'#/'+(p||''):'#d'+cur+(p?'/'+p:'')}
function pad(i){return (i<9?'0':'')+(i+1)}
function grad(c,s,cls){return '<canvas class="fxc '+(cls||'')+'" data-fx="gradient" data-c="'+c+'" data-s="'+(s||1)+'" aria-hidden="true"></canvas>'}
function embers(n,cls){return '<canvas class="fxc em '+(cls||'')+'" data-fx="embers" data-n="'+(n||140)+'" aria-hidden="true"></canvas>'}
// wordmark per the 2026-09-30 CI (Public Sans 800, IN and VEST outlined 1.9px, TRA solid, navy #0B2A4A). `fire` fills TRA with the moving gradient.
function logo(cls,fire){return '<span class="wm '+(cls||'')+'" role="img" aria-label="INTRAVEST"><b class="o">IN</b><b class="f'+(fire?' fire':'')+'">TRA</b><b class="o">VEST</b></span>'}
// hero wordmark as SVG: outline letters draw themselves, TRA wipes in, a sheen passes now and then
function logoSVG(){return '<svg class="wmsvg" viewBox="0 0 720 100" role="img" aria-label="INTRAVEST"><defs><clipPath id="wipe"><rect class="wiper" x="0" y="0" width="0" height="100"/></clipPath><clipPath id="tclip"><text x="360" y="82" text-anchor="middle" textLength="700" lengthAdjust="spacingAndGlyphs" style="font:800 92px/1 var(--ci);letter-spacing:.02em">INTRAVEST</text></clipPath><linearGradient id="sheen" x1="0" x2="1"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".5" stop-color="#fff" stop-opacity=".55"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient></defs><text class="ol" x="360" y="82" text-anchor="middle" textLength="700" lengthAdjust="spacingAndGlyphs"><tspan class="o">IN</tspan><tspan class="t" fill="none" stroke="none">TRA</tspan><tspan class="o">VEST</tspan></text><g clip-path="url(#wipe)"><text class="fl" x="360" y="82" text-anchor="middle" textLength="700" lengthAdjust="spacingAndGlyphs"><tspan class="h">IN</tspan><tspan class="f">TRA</tspan><tspan class="h">VEST</tspan></text></g><rect class="sh" x="-200" y="0" width="160" height="100" fill="url(#sheen)" clip-path="url(#tclip)"/></svg>'}
function lockup(){return '<div class="lock">'+logo('sm')+'<i class="rule"></i><div class="tg2"><b>'+t(C.sub)+'</b><span>Seoul, Korea</span></div></div>'}
function navs(){return list(C.nav,function(n){return '<a href="'+href(n[0])+'"'+(page===n[0]||(page==='product'&&n[0]==='products')?' aria-current="page"':'')+'>'+t(n[1])+'</a>'})}
function head(){return '<header class="flo"><a class="mk" href="'+href('')+'">'+logoSVG()+'</a><nav>'+navs()+'</nav><button type="button" class="bgr" aria-label="Menu" aria-expanded="false"><i></i><i></i></button></header>'}
function menu(){return '<div class="ov" hidden><div class="ovin">'+list(C.nav,function(n,i){return '<a href="'+href(n[0])+'"><span>'+pad(i)+'</span>'+t(n[1])+'</a>'})+'</div><p>'+C.addr+'</p></div>'}
function mail(){return '<div class="mail"><code>'+C.addr+'</code><button type="button" class="cp">'+L('copy')+'</button></div>'}
function more(p,txt){return '<a class="more" href="'+href(p)+'">'+(txt||t(C.more))+' <span aria-hidden="true">→</span></a>'}
function foot(){return '<footer class="fo"><div class="fot"><a class="mk" href="'+href('')+'">'+lockup()+'</a><nav>'+navs()+'</nav></div><div class="fob"><span>'+t(C.office)+' · Business reg. 723-86-00752</span><span>© '+t(C.legal)+'</span></div></footer>'}
function tagline(cls){return '<h1 class="tg '+(cls||'')+'" data-words>'+t(C.tag[cur])+'</h1>'}
function sub(){return '<p class="ld">'+t(C.sub)+'</p>'}
// product symbols come from symbols.js (IVSYM.pick chooses the variant)
function sym(id,cls){return '<span class="symw '+(cls||'')+'">'+window.IVSYM.get(id)+'</span>'}

function figs(){return '<div class="figs">'+list(C.facts,function(f,i){var b=t(f.b),num=/^\d+$/.test(b);return '<div class="fig rv"><i>'+t(f.k)+'</i><b'+(num?' data-count="'+b+'">0':'>'+b)+'</b><span>'+t(f.s)+'</span></div>'})+'</div>'}
function millband(){return '<section class="band mills"><div class="mrow rv"><span class="k">'+t(C.mills.k)+'</span><p>'+t(C.mills)+'</p></div>'+figs()+'</section>'}
function pcard(id,i){var p=C.pillars[id];return '<a class="card '+id+' rv" href="'+href(id)+'" data-tilt><span class="no">'+pad(i)+'</span><h3 data-depth=".6">'+t(p.t)+'</h3><p data-depth=".3">'+t(p.d)+'</p><ul>'+list(p.k[lang],function(k){return '<li>'+k+'</li>'})+'</ul><span class="go">'+t(C.more)+' →</span></a>'}
function cards(){return '<div class="cards">'+pcard('investment',0)+pcard('supply',1)+'</div>'}
function edges(){return '<div class="edges">'+list(C.edge,function(e,i){return '<div class="edge rv"><span class="no">'+pad(i)+'</span><h4>'+t(e.t)+'</h4><p>'+t(e.d)+'</p></div>'})+'</div>'}
function prods(cls){return '<div class="prods '+(cls||'')+'">'+list(C.products,function(p,i){return '<a class="prod rv" href="'+href('product/'+p.id)+'">'+sym(p.id)+'<span class="no">'+pad(i)+'</span><h4>'+t(p.n)+'</h4><p>'+t(p.tag)+'</p><div class="chips">'+list(p.g,function(g){return '<span>'+g+'</span>'})+'</div><span class="go">→</span></a>'})+'</div>'}
function items3(grp){return '<div class="items n'+grp.items.length+'">'+list(grp.items,function(x,i){return '<div class="item rv"><span class="no">'+pad(i)+'</span><h3>'+t(x.t)+'</h3><p>'+t(x.d)+'</p></div>'})+'</div>'}
function steps(){return '<ol class="steps">'+list(C.sup.steps,function(s,i){return '<li class="rv"><span class="no">'+pad(i)+'</span><h4>'+t(s.t)+'</h4><p>'+t(s.d)+'</p></li>'})+'</ol>'}
function marquee(){var items=[];C.products.forEach(function(p){items.push(t(p.n));p.g.forEach(function(g){items.push(g)})});items.push(t(C.mills.k),'Seoul','Korea · Japan');var s=list(items,function(x){return '<span>'+x+'</span>'});return '<div class="mq" aria-hidden="true"><div class="mqi">'+s+s+'</div></div>'}
function cta(){return '<section class="cta"><div class="ctab rv">'+grad(ICE,.8)+'<div class="in"><h2>'+t(C.ct.title)+'</h2><div class="row">'+mail()+more('contact',t(C.nav[4][1]))+'</div></div></div></section>'}
function sec(lb,body,id,cls){return '<section'+(id?' id="'+id+'"':'')+(cls?' class="'+cls+'"':'')+'><p class="lb rv">'+lb+'</p>'+body+'</section>'}
function std(){return sec('BUSINESS',cards())+millband()+sec(L('why'),edges())+sec('PRODUCTS',prods()+more('products',L('all')))+cta()}
function halves(){return '<a class="half inv" href="'+href('investment')+'">'+grad(ICE,.9)+'<div class="in"><span class="no">01</span><h2>'+t(C.pillars.investment.t)+'</h2><p>'+C.pillars.investment.k[lang].join(' · ')+'</p><span class="go">→</span></div></a><a class="half sup" href="'+href('supply')+'">'+grad(FIRE,.9)+embers(160)+'<div class="in"><span class="no">02</span><h2>'+t(C.pillars.supply.t)+'</h2><p>'+C.pillars.supply.k[lang].join(' · ')+'</p><span class="go">→</span></div></a>'}

var HOME={
// 1 split hero, tagline floating over the seam, embers on the hot side
1:function(){return '<section class="split2">'+halves()+'<div class="seam"><p class="ms">'+C.mission+'</p>'+tagline()+'</div></section>'+marquee()+std()},
// 2 molten full-bleed, tagline giant, grade marquee under it
2:function(){return '<section class="hero full" data-tilt>'+grad(FIRE,1.2)+embers(200)+'<div class="in"><p class="ms" data-depth=".2">'+C.mission+'</p>'+tagline('giant')+sub()+'</div></section>'+marquee()+std()},
// 3 light tiles: tagline tile, cold tile, hot tile, three symbol tiles
3:function(){return '<section class="tiles"><div class="tile tg1 rv"><p class="ms">'+C.mission+'</p>'+tagline()+sub()+'</div><a class="tile cold rv" href="'+href('investment')+'">'+grad(ICE,.8)+'<div class="in"><span class="no">01</span><h3>'+t(C.pillars.investment.t)+'</h3><p>'+C.pillars.investment.k[lang].join(' · ')+'</p></div></a><a class="tile hot rv" href="'+href('supply')+'">'+grad(FIRE,.8)+embers(100)+'<div class="in"><span class="no">02</span><h3>'+t(C.pillars.supply.t)+'</h3><p>'+C.pillars.supply.k[lang].join(' · ')+'</p></div></a>'+list(C.products,function(p){return '<a class="tile ps rv" href="'+href('product/'+p.id)+'">'+sym(p.id)+'<h4>'+t(p.n)+'</h4></a>'})+'</section>'+millband()+sec(L('why'),edges())+cta()},
// 4 the wordmark itself as the monument, TRA filled with moving fire
4:function(){return '<section class="hero mon">'+embers(120)+'<div class="in">'+logo('big',true)+'<div class="row"><div><p class="ms">'+C.mission+'</p>'+tagline()+'</div>'+sub()+'</div></div></section>'+std()},
// 5 snap panels, each a screen: tagline, cold, hot, products
5:function(){return '<div class="snap"><section class="pn" data-tilt>'+grad(MIX,1)+'<div class="in"><p class="ms">'+C.mission+'</p>'+tagline('giant')+'</div></section><a class="pn inv" href="'+href('investment')+'">'+grad(ICE,.9)+'<div class="in"><span class="no">01</span><h2>'+t(C.pillars.investment.t)+'</h2><p>'+t(C.pillars.investment.d)+'</p><span class="go">'+t(C.more)+' →</span></div></a><a class="pn sup" href="'+href('supply')+'">'+grad(FIRE,.9)+embers(180)+'<div class="in"><span class="no">02</span><h2>'+t(C.pillars.supply.t)+'</h2><p>'+t(C.pillars.supply.d)+'</p><span class="go">'+t(C.more)+' →</span></div></a><section class="pn prd">'+grad(STEEL,.9)+'<div class="in"><span class="no">03</span><h2>'+L('all')+'</h2><div class="symrow">'+list(C.products,function(p){return '<a href="'+href('product/'+p.id)+'">'+sym(p.id)+'<span>'+t(p.n)+'</span></a>'})+'</div></div></section></div>'+millband()+cta()},
// 6 one field, cold left and hot right, the divide follows the pointer
6:function(){return '<section class="hero full dual" id="dual">'+grad(ICE,.9,'cold')+'<div class="hotw">'+grad(FIRE,.9)+embers(160)+'</div><div class="in"><p class="ms">'+C.mission+'</p>'+tagline('giant')+sub()+'<div class="pair"><a href="'+href('investment')+'">'+t(C.pillars.investment.t)+' →</a><a href="'+href('supply')+'">'+t(C.pillars.supply.t)+' →</a></div></div></section>'+std()},
// 7 corporate inset box split cold/hot, symbols row under it
7:function(){return '<section class="inset"><div class="box"><div class="bh c">'+grad(ICE,.9)+'</div><div class="bh h">'+grad(FIRE,.9)+embers(110)+'</div><div class="in"><p class="ms">'+C.mission+'</p>'+tagline()+sub()+'<div class="btns"><a class="btn" href="'+href('products')+'">'+L('all')+'</a><a class="btn ghost" href="'+href('contact')+'">'+t(C.nav[4][1])+'</a></div></div></div><div class="symrow light">'+list(C.products,function(p){return '<a href="'+href('product/'+p.id)+'" class="rv">'+sym(p.id)+'<span>'+t(p.n)+'</span></a>'})+'</div></section>'+millband()+sec('BUSINESS',cards())+sec(L('how'),steps())+cta()},
// 8 paper editorial: tagline as masthead, symbols as illustrations
8:function(){return '<section class="hero ed"><p class="ms">'+C.mission+'</p>'+tagline('mast')+'<div class="cols"><div class="win">'+grad(FIRE,1.3)+embers(120)+'</div><div>'+sub()+more('company')+'</div></div></section>'+sec('BUSINESS',cards())+millband()+sec('PRODUCTS','<div class="edrow">'+list(C.products,function(p,i){return '<a class="edp rv" href="'+href('product/'+p.id)+'">'+sym(p.id)+'<div><span class="no">'+pad(i)+'</span><h4>'+t(p.n)+'</h4><p>'+t(p.tag)+'</p></div></a>'})+'</div>')+cta()},
// 9 cinematic: centred tagline rising word by word, menu behind ☰
9:function(){return '<section class="hero full cine" data-tilt>'+grad(FIRE,1)+embers(220)+'<div class="in"><p class="ms">'+C.mission+'</p>'+tagline('giant')+'<p class="sub" data-depth=".3">'+t(C.sub)+'</p></div><span class="scroll">SCROLL</span></section><section class="manifesto"><p class="rv">'+t(C.pillars.investment.d)+'</p></section>'+sec('BUSINESS',cards())+millband()+sec('PRODUCTS',prods())+cta()},
// 10 light and quiet: symbols breathing
10:function(){return '<section class="hero quiet"><div class="qrow"><div><p class="ms">'+C.mission+'</p>'+tagline()+sub()+'</div></div><div class="symrow light">'+list(C.products,function(p){return '<a href="'+href('product/'+p.id)+'" class="rv">'+sym(p.id)+'<span>'+t(p.n)+'</span></a>'})+'</div></section>'+std()}
};

// ---- inner pages ----
// photos (2026-10-05): several per slot → swipeable gallery with 5s autoplay
var PH={supply:[['p2-1','Stockpile of granulated slag under a blue sky'],['p2-2','Slag stockyard with conveyor equipment'],['p2-3','Coated steel coils on a trailer in a container yard']],
  coil:[['p4-1','Close-up of a metallic coated steel coil'],['p4-2','Stainless steel coil on a trailer, front view'],['p4-3','Two stainless steel coils on a warehouse floor']],
  pipe:[['p5-5','Container fully stuffed with bundled steel tubes'],['p5-1','Bundles of steel tubes stacked in a container'],['p5-4','Bundled steel tubes loaded on a truck'],['p5-7','Forklift moving bundled steel tubes'],['p5-8','Tube bundles in the yard beside a container being stuffed']],
  slag:[['p6-1','Granulated slag being loaded into a ship\'s hold'],['p6-3','Grab discharging slag inside a ship\'s hold'],['p6-4','Stockpile of granulated slag']]};
function gal(k,cls,sizes){var a=PH[k];if(!a)return '';var n=a.length;
  return '<div class="gal '+cls+' rv" role="region" aria-roledescription="carousel" aria-label="Photos"><div class="gtr" tabindex="0">'+list(a,function(x,i){return '<figure class="gsl" aria-roledescription="slide" aria-label="'+(i+1)+' of '+n+'"><img src="assets/img/'+x[0]+'-1200.webp" srcset="assets/img/'+x[0]+'-1200.webp 1200w, assets/img/'+x[0]+'-2400.webp 2400w" sizes="'+sizes+'" alt="'+x[1]+'" loading="'+(i?'lazy':'eager')+'" decoding="async"></figure>'})+'</div>'+
    (n>1?'<button type="button" class="gp gpv" aria-label="Previous photo"><span aria-hidden="true">←</span></button><button type="button" class="gp gnx" aria-label="Next photo"><span aria-hidden="true">→</span></button><div class="gdots">'+list(a,function(x,i){return '<button type="button" aria-label="Photo '+(i+1)+'"'+(i?'':' aria-current="true"')+'></button>'})+'</div>':'')+'</div>'}
function subhead(eb,title,pal,crumb,hot){return '<section class="sh'+(pal===GRAY?' light':'')+'">'+grad(pal,1)+(hot?embers(120):'')+'<div class="in"><p class="crumb"><a href="'+href('')+'">'+t(C.back)+'</a>'+(crumb||'')+'</p><p class="ms">'+eb+'</p><h1 data-words>'+title+'</h1></div></section>'}
function next(p,lb){return '<section class="nx"><a href="'+href(p)+'" class="rv"><span>'+L('next')+'</span><b>'+lb+' →</b></a></section>'}
var PAGE={
investment:function(){var v=C.inv;return subhead(t(C.pillars.investment.t).toUpperCase(),t(v.title),ICE)+'<section class="lead2"><p class="rv">'+t(v.intro)+'</p></section><section><div class="items">'+list(v.items,function(x,i){return '<div class="item rv"><span class="no">'+pad(i)+'</span><h3>'+t(x.t)+'</h3><p>'+t(x.d)+'</p></div>'})+'</div><p class="note rv">'+t(v.rule)+'</p></section>'+next('supply',t(C.pillars.supply.t))+cta()},
supply:function(){var v=C.sup;return subhead(t(C.pillars.supply.t).toUpperCase(),t(v.title),GRAY)+'<section class="phw">'+gal('supply','r219','(min-width: 1880px) 1800px, calc(100vw - 2 * clamp(16px, 5vw, 80px))')+'</section><section class="lead2 after-ph"><p class="rv">'+t(v.intro)+'</p></section>'+sec(t(v.ops.k),items3(v.ops))+sec(t(v.insight.k),items3(v.insight))+sec(t(v.logi.k),items3(v.logi))+sec(t(v.fta.k),'<p class="lead3 rv">'+t(v.fta.d)+'</p><table class="spec wide rv">'+list(v.fta.groups,function(g){return '<tr><th>'+t(g.k)+'</th><td>'+g.v+'</td></tr>'})+'</table>')+sec(L('why'),edges())+next('products',L('all'))+cta()},
products:function(){return subhead('PRODUCTS',L('all'),STEEL)+'<section>'+prods('big')+'</section>'+cta()},
product:function(){var i=Math.max(0,C.products.findIndex(function(p){return p.id===arg})),p=C.products[i],sh=p.id==='slag'?null:C.shared;
  var tabs='<nav class="ptabs rv">'+list(C.products,function(q){return '<a href="'+href('product/'+q.id)+'"'+(q.id===p.id?' aria-current="page"':'')+'>'+t(q.n)+'</a>'})+'</nav>';
  var top='<section class="pd"><div class="pdl rv">'+sym(p.id,'hero')+'<p class="tag">'+t(p.tag)+'</p><p class="desc">'+t(p.desc)+'</p></div><div class="pdr rv">'+gal(p.id,'r43','(min-width: 900px) 56vw, 100vw')+'<h4>'+L('spec')+'</h4><table class="spec">'+list(p.spec,function(r){return '<tr><th>'+t(r[0])+'</th><td>'+t(r[1])+'</td></tr>'})+'</table><a class="btn" href="'+href('contact/'+p.id)+'">'+t(C.ct.f.send)+' →</a></div></section>';
  var g=sh?sh.g:p.g,gd=sh?sh.grades:p.grades,use=sh?sh.use[lang]:p.use[lang];
  var fixed='<section class="pd fixed"><div class="pdl rv"><h4>'+L('grades')+'</h4><div class="chips big">'+list(g,function(x){return '<span>'+x+'</span>'})+'</div><h4>'+L('use')+'</h4><ul class="uses">'+list(use,function(u){return '<li>'+u+'</li>'})+'</ul></div><div class="pdr rv"><h4>'+(p.id==='slag'?L('why'):L('grades2'))+'</h4><table class="spec">'+list(gd,function(r){return '<tr><th>'+t(r[0])+'</th><td>'+t(r[1])+'</td></tr>'})+'</table></div></section>';
  return subhead('PRODUCTS',t(p.n),STEEL,' / <a href="'+href('products')+'">'+L('all')+'</a>')+'<section class="ptabw">'+tabs+'</section>'+top+fixed},
company:function(){var v=C.co;return subhead('COMPANY',t(v.title),MIX)+'<section class="lead2"><p class="rv">'+t(v.intro)+'</p></section>'+millband()+'<section><div class="items">'+list(v.values,function(x,i){return '<div class="item rv"><span class="no">'+pad(i)+'</span><h3>'+t(x.t)+'</h3><p>'+t(x.d)+'</p></div>'})+'</div></section><section><table class="spec wide rv">'+list(v.rows,function(r){return '<tr><th>'+t(r[0])+'</th><td>'+t(r[1])+'</td></tr>'})+'</table></section>'+cta()},
contact:function(){var f=C.ct.f,sel=arg&&arg!=='sent'?arg:'coil',sent=arg==='sent',key=window.IV_W3F_KEY||'';
  // Web3Forms with hCaptcha when a key is configured; FormSubmit as the fallback
  var act=key?'https://api.web3forms.com/submit':'https://formsubmit.co/'+C.addr,nxt=location.origin+location.pathname+(SITE?'#/contact/sent':'#d'+cur+'/contact/sent');
  var hidden=key?'<input type="hidden" name="access_key" value="'+key+'"><input type="hidden" name="subject" value="Website inquiry"><input type="hidden" name="from_name" value="Intravest website"><input type="hidden" name="redirect" value="'+nxt+'"><input type="checkbox" name="botcheck" class="hp" style="display:none" tabindex="-1">':'<input type="hidden" name="_subject" value="Website inquiry"><input type="hidden" name="_template" value="table"><input type="hidden" name="_captcha" value="true"><input type="hidden" name="_next" value="'+nxt+'"><input type="text" name="_honey" style="display:none" tabindex="-1" autocomplete="off">';
  return subhead('CONTACT',t(C.ct.title),MIX)+'<section class="ctp"><div><p class="lead3 rv">'+t(C.ct.intro)+'</p><div class="addr rv"><p>'+t(C.office)+'</p>'+mail()+'</div></div><form class="form rv" id="inq" method="POST" action="'+act+'" novalidate>'+hidden+(sent?'<p class="fnote ok w">'+t(f.done)+'</p>':'')+'<label>'+t(f.email)+' *<input name="email" type="email" required autocomplete="email"></label><label>'+t(f.company)+' *<input name="company" required autocomplete="organization"></label><label>'+t(f.port)+' *<input name="port" required autocomplete="off"></label><label>'+t(f.product)+'<select name="product">'+list(C.products,function(p){return '<option value="'+t(p.n)+'"'+(p.id===sel?' selected':'')+'>'+t(p.n)+'</option>'})+'</select></label><label class="w">'+t(f.msg)+' *<textarea name="inquiry" rows="5" required></textarea></label>'+(key?'<div class="h-captcha w" data-captcha="true" data-sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"></div>':'')+'<button type="submit" class="btn">'+t(f.send)+' →</button><p class="fnote" aria-live="polite"></p></form></section>'}
};

var NAMES=Object.keys(D).map(function(k){return D[k].n});
var app=document.getElementById('app'),root=document.documentElement,sw=document.getElementById('sw');
function wire(){
  app.querySelectorAll('.cp').forEach(function(b){b.addEventListener('click',function(){var c=b.previousElementSibling;function s(){var r=document.createRange();r.selectNodeContents(c);var g=getSelection();g.removeAllRanges();g.addRange(r)}
    if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(c.textContent).then(function(){b.textContent=lang==='ja'?'コピー済み':'Copied'},s);else s()})});
  var ov=app.querySelector('.ov'),bg=app.querySelector('.bgr');
  if(bg)bg.addEventListener('click',function(){var o=ov.hidden;ov.hidden=!o;bg.setAttribute('aria-expanded',String(o));document.body.style.overflow=o?'hidden':''});
  // contact: browser validation, the captcha must be solved, one send per minute per browser, a few seconds of fill time
  var fm=app.querySelector('#inq');
  if(fm){var t0=Date.now();if(fm.querySelector('.h-captcha')&&window.hcaptcha)try{hcaptcha.render(fm.querySelector('.h-captcha'),{sitekey:'50b2fe65-b00b-4b9e-ad62-3ba471098be2'})}catch(e){}
    fm.addEventListener('submit',function(e){var f=C.ct.f,note=fm.querySelector('.fnote:last-child'),fd=new FormData(fm),cap=fm.querySelector('[name=h-captcha-response]');
    if(!fm.checkValidity()){e.preventDefault();fm.reportValidity();return}
    if(fm.querySelector('.h-captcha')&&!(cap&&cap.value)){e.preventDefault();note.textContent=t(f.captcha);note.className='fnote err';return}
    var last=parseInt(get('iv-sent')||'0',10);if(Date.now()-last<60000||Date.now()-t0<3000){e.preventDefault();note.textContent=t(f.wait);note.className='fnote err';return}
    var sub=fm.querySelector('[name=subject],[name=_subject]');if(sub)sub.value='Website inquiry — '+fd.get('product')+' — '+fd.get('company');
    if(!fm.querySelector('[name=access_key]')){var rt=document.createElement('input');rt.type='hidden';rt.name='_replyto';rt.value=fd.get('email');fm.appendChild(rt)}
    put('iv-sent',String(Date.now()));fm.querySelector('button').disabled=true})}
  // photo galleries: native swipe (scroll-snap), arrows and dots; no autoplay
  app.querySelectorAll('.gal').forEach(function(g){var tr=g.querySelector('.gtr'),ds=g.querySelectorAll('.gdots button'),n=tr.children.length,
    still=matchMedia('(prefers-reduced-motion: reduce)').matches;if(n<2)return;
    function idx(){return Math.round(tr.scrollLeft/tr.clientWidth)}
    function go(i){i=(i+n)%n;tr.scrollTo({left:i*tr.clientWidth,behavior:still?'auto':'smooth'})}
    function mark(){var i=idx();ds.forEach(function(d,j){if(j===i)d.setAttribute('aria-current','true');else d.removeAttribute('aria-current')})}
    g.querySelector('.gpv').addEventListener('click',function(){go(idx()-1)});g.querySelector('.gnx').addEventListener('click',function(){go(idx()+1)});
    ds.forEach(function(d,j){d.addEventListener('click',function(){go(j)})});
    tr.addEventListener('keydown',function(e){if(e.key==='ArrowLeft'){e.preventDefault();go(idx()-1)}else if(e.key==='ArrowRight'){e.preventDefault();go(idx()+1)}});
    var tm;tr.addEventListener('scroll',function(){clearTimeout(tm);tm=setTimeout(mark,60)},{passive:true});
    // autoplay (2026-10-05): ~5s, pauses on hover/touch/focus, off-screen or hidden tab; off under reduced motion
    if(still)return;var hold=0,vis=false,tk=null;
    function run(){clearInterval(tk);tk=null;if(!hold&&vis&&!document.hidden)tk=setInterval(function(){go(idx()+1)},5000)}
    function pause(){hold++;run()}function resume(){hold=Math.max(0,hold-1);run()}
    g.addEventListener('mouseenter',pause);g.addEventListener('mouseleave',resume);
    g.addEventListener('focusin',function(e){if(!g._f&&e.target.matches(':focus-visible')){g._f=1;pause()}});g.addEventListener('focusout',function(e){if(g._f&&!g.contains(e.relatedTarget)){g._f=0;resume()}});
    var tt;g.addEventListener('touchstart',function(){clearTimeout(tt);if(!g._t){g._t=1;pause()}},{passive:true});
    g.addEventListener('touchend',function(){clearTimeout(tt);tt=setTimeout(function(){if(g._t){g._t=0;resume()}},4000)},{passive:true});
    if('IntersectionObserver' in window)new IntersectionObserver(function(es){vis=es[0].isIntersecting;run()},{threshold:.4}).observe(g);else{vis=true;run()}
    var onVis=function(){run()};document.addEventListener('visibilitychange',onVis);
    var off0=wire.off;wire.off=function(){clearInterval(tk);document.removeEventListener('visibilitychange',onVis);if(off0)off0()}});
  // direction 6: the cold/hot divide follows the pointer
  var dual=app.querySelector('#dual');
  if(dual){var on=function(e){var b=dual.getBoundingClientRect();dual.style.setProperty('--x',((e.clientX-b.left)/b.width*100).toFixed(1)+'%')};dual.addEventListener('pointermove',on);wire.off=function(){dual.removeEventListener('pointermove',on)}}
}
function render(){if(wire.off){wire.off();wire.off=null}document.body.style.overflow='';
  var d=D[cur];app.className='v'+cur+' th-'+d.th+(page?' inner':' home')+(page==='supply'?' sup-light':'')+(SITE?' site':'');
  app.innerHTML=head()+menu()+'<main>'+(page&&PAGE[page]?PAGE[page]():HOME[cur]())+'</main>'+foot();
  root.setAttribute('data-v',cur);wire();window.IVFX&&IVFX.attach(app);
  app.classList.remove('fade');void app.offsetWidth;app.classList.add('fade')}
function route(){if(SITE){var q=location.hash.match(/^#\/([a-z]+)?(?:\/([a-z]+))?/);cur=SITE;page=q&&q[1]||'';arg=q&&q[2]||'';if(page&&!PAGE[page])page='';render();scrollTo(0,0);return}
  var m=location.hash.match(/^#d(10|[1-9])(?:\/([a-z]+)(?:\/([a-z]+))?)?/);
  if(m){cur=m[1];page=m[2]||'';arg=m[3]||''}else{cur=get('iv-v')||'1';page='';arg=''}
  put('iv-v',cur);sw.querySelectorAll('button').forEach(function(b){b.setAttribute('aria-pressed',String(b.dataset.v===cur))});render();scrollTo(0,0)}
function get(k){try{return localStorage.getItem(k)}catch(e){return null}}
function put(k,v){try{localStorage.setItem(k,v)}catch(e){}}
if(sw){sw.innerHTML=NAMES.map(function(n,i){return '<button type="button" data-v="'+(i+1)+'">'+(i+1)+' '+n+'</button>'}).join('');
sw.addEventListener('click',function(e){var b=e.target.closest('button');if(b)location.hash='d'+b.dataset.v+(page?'/'+page+(arg?'/'+arg:''):'')})}
document.querySelectorAll('.lg button').forEach(function(b){b.addEventListener('click',function(){lang=b.dataset.l;root.lang=lang;document.querySelectorAll('.lg button').forEach(function(x){x.setAttribute('aria-pressed',String(x===b))});put('iv-lang',lang);render()})});
lang=window.IV_LANG||(/^(ja|ko)$/.test(get('iv-lang')||'')?get('iv-lang'):'en');root.lang=lang;document.querySelectorAll('.lg button').forEach(function(b){b.setAttribute('aria-pressed',String(b.dataset.l===lang))});
addEventListener('hashchange',route);route();
})();
