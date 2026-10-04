// Intravest visual effects, attached to <canvas data-fx="…"> after each render.
//  gradient — flowing noise gradient (after ruucm/shadergradient)
//  metal    — liquid-metal fill on a text mask (after paper-design/liquid-logo)
//  coil     — 3D stainless coil with three.js (mrdoob/three.js, loaded from jsDelivr)
//  embers   — 2D particles drifting up from a furnace edge
// Each effect pauses off-screen and draws a single frame under prefers-reduced-motion.
(function(){
var still=matchMedia('(prefers-reduced-motion: reduce)').matches;
var live=[];
var VS='attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}';
var NOISE='vec3 m289(vec3 x){return x-floor(x*(1./289.))*289.;}vec2 m289(vec2 x){return x-floor(x*(1./289.))*289.;}vec3 perm(vec3 x){return m289(((x*34.)+1.)*x);}'+
'float snoise(vec2 v){const vec4 C=vec4(.211324865405187,.366025403784439,-.577350269189626,.024390243902439);vec2 i=floor(v+dot(v,C.yy));vec2 x0=v-i+dot(i,C.xx);vec2 i1=(x0.x>x0.y)?vec2(1.,0.):vec2(0.,1.);vec4 x12=x0.xyxy+C.xxzz;x12.xy-=i1;i=m289(i);'+
'vec3 p=perm(perm(i.y+vec3(0.,i1.y,1.))+i.x+vec3(0.,i1.x,1.));vec3 m=max(.5-vec3(dot(x0,x0),dot(x12.xy,x12.xy),dot(x12.zw,x12.zw)),0.);m=m*m;m=m*m;vec3 x=2.*fract(p*C.www)-1.;vec3 h=abs(x)-.5;vec3 ox=floor(x+.5);vec3 a0=x-ox;'+
'm*=1.79284291400159-.85373472095314*(a0*a0+h*h);vec3 g;g.x=a0.x*x0.x+h.x*x0.y;g.yz=a0.yz*x12.xz+h.yz*x12.yw;return 130.*dot(m,g);}';
var FS_GRAD='precision highp float;uniform vec2 R;uniform float T;uniform vec3 c1;uniform vec3 c2;uniform vec3 c3;uniform float S;'+NOISE+
'void main(){vec2 uv=gl_FragCoord.xy/R;vec2 p=uv*vec2(R.x/R.y,1.)*S*.42;float t=T*.035;'+
'vec2 q=vec2(snoise(p+vec2(0.,t)),snoise(p+vec2(5.2,1.3)-t));float n=snoise(p+1.8*q+vec2(t*.6,-t*.3));'+
'vec3 c=mix(c1,c2,smoothstep(-.55,.75,n));c=mix(c,c3,smoothstep(.3,1.05,q.x*.5+.5+n*.12)*.8);c=mix(c,c1,(1.-uv.y)*.35);'+
'float g=fract(sin(dot(gl_FragCoord.xy,vec2(12.9898,78.233)))*43758.5453);c+=(g-.5)*.045;gl_FragColor=vec4(c,1.);}';
var FS_METAL='precision highp float;uniform vec2 R;uniform float T;uniform vec3 tint;uniform sampler2D M;'+NOISE+
'void main(){vec2 uv=gl_FragCoord.xy/R;uv.y=1.-uv.y;vec4 m=texture2D(M,uv);float a=m.r;if(a<.004){gl_FragColor=vec4(0.);return;}'+
'vec2 e=vec2(3./R.x,0.);vec2 f=vec2(0.,3./R.y);float gx=texture2D(M,uv+e).g-texture2D(M,uv-e).g;float gy=texture2D(M,uv+f).g-texture2D(M,uv-f).g;'+
'float n=snoise(uv*vec2(2.4,1.2)+vec2(T*.05,-T*.03));float d=uv.y*1.1-uv.x*.3+n*.12+(gx+gy)*1.4+(1.-m.g)*.45-T*.04;float s=fract(d*1.15);'+
'vec3 dk=vec3(.10,.11,.13),lt=vec3(1.),md=vec3(.52,.55,.6);vec3 c=s<.45?mix(dk,lt,smoothstep(0.,.45,s)):mix(lt,md,smoothstep(.45,1.,s));'+
'c=mix(c,c*tint,.85);gl_FragColor=vec4(c*a,a);}';

function hex(h){h=h.replace('#','');return [0,2,4].map(function(i){return parseInt(h.substr(i,2),16)/255})}
function size(cv){var d=Math.min(devicePixelRatio||1,1.5),w=Math.max(1,Math.round(cv.clientWidth*d)),h=Math.max(1,Math.round(cv.clientHeight*d));if(cv.width!==w||cv.height!==h){cv.width=w;cv.height=h;return true}return false}
function prog(gl,fs){function sh(t,s){var o=gl.createShader(t);gl.shaderSource(o,s);gl.compileShader(o);return o}
  var p=gl.createProgram();gl.attachShader(p,sh(gl.VERTEX_SHADER,VS));gl.attachShader(p,sh(gl.FRAGMENT_SHADER,fs));gl.linkProgram(p);
  if(!gl.getProgramParameter(p,gl.LINK_STATUS))return null;gl.useProgram(p);
  var b=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,b);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),gl.STATIC_DRAW);
  var l=gl.getAttribLocation(p,'p');gl.enableVertexAttribArray(l);gl.vertexAttribPointer(l,2,gl.FLOAT,false,0,0);
  return function(n){return gl.getUniformLocation(p,n)}}
// run a draw(t) loop only while the canvas is on screen
function loop(cv,draw,stop){var on=false,raf=0,t0=performance.now();
  function f(now){raf=0;draw((now-t0)/1000);if(on&&!still)raf=requestAnimationFrame(f)}
  var io=new IntersectionObserver(function(es){on=es[0].isIntersecting;if(on&&!raf)raf=requestAnimationFrame(f)});io.observe(cv);
  live.push(function(){io.disconnect();if(raf)cancelAnimationFrame(raf);on=false;stop&&stop()})}

function gradient(cv){var gl=cv.getContext('webgl',{antialias:false});if(!gl)return;var u=prog(gl,FS_GRAD);if(!u)return;
  var c=(cv.dataset.c||'#0E1A2B,#2B5DB8,#C9A86A').split(',').map(hex);
  gl.uniform3fv(u('c1'),c[0]);gl.uniform3fv(u('c2'),c[1]);gl.uniform3fv(u('c3'),c[2]);gl.uniform1f(u('S'),parseFloat(cv.dataset.s||'1.1'));
  loop(cv,function(t){size(cv);gl.viewport(0,0,cv.width,cv.height);gl.uniform2f(u('R'),cv.width,cv.height);gl.uniform1f(u('T'),t+20);gl.drawArrays(gl.TRIANGLES,0,3)},
    function(){var x=gl.getExtension('WEBGL_lose_context');x&&x.loseContext()})}

// text mask: red = crisp glyphs, green = blurred glyphs (gives the bevel)
function mask(cv,text,font){var w=cv.width,h=cv.height,m=document.createElement('canvas');m.width=w;m.height=h;var x=m.getContext('2d');
  x.fillStyle='#000';x.fillRect(0,0,w,h);x.textBaseline='middle';x.textAlign='center';
  var fs=h*.86;x.font=font.replace('{s}',fs+'px');var tw=x.measureText(text).width;if(tw>w*.98){fs*=w*.98/tw;x.font=font.replace('{s}',fs+'px')}
  var o=document.createElement('canvas');o.width=w;o.height=h;var y=o.getContext('2d');
  y.textBaseline='middle';y.textAlign='center';y.font=x.font;y.fillStyle='#f00';y.fillText(text,w/2,h*.54);
  x.globalCompositeOperation='lighter';x.drawImage(o,0,0);
  y.clearRect(0,0,w,h);y.filter='blur('+Math.max(2,fs*.05)+'px)';y.fillStyle='#0f0';y.fillText(text,w/2,h*.54);x.drawImage(o,0,0);return m}
function metal(cv){var gl=cv.getContext('webgl',{premultipliedAlpha:true,alpha:true});if(!gl)return;var u=prog(gl,FS_METAL);if(!u)return;
  gl.enable(gl.BLEND);gl.blendFunc(gl.ONE,gl.ONE_MINUS_SRC_ALPHA);gl.uniform3fv(u('tint'),hex(cv.dataset.tint||'#FFFFFF'));
  var tex=gl.createTexture(),text=cv.dataset.text||'INTRAVEST',font=cv.dataset.font||'800 {s} Archivo, Arial Narrow, sans-serif';
  function up(){gl.bindTexture(gl.TEXTURE_2D,tex);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);
    gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,mask(cv,text,font))}
  var ready=false;(document.fonts?document.fonts.ready:Promise.resolve()).then(function(){ready=true;size(cv);up()});
  loop(cv,function(t){if(!ready)return;if(size(cv))up();gl.viewport(0,0,cv.width,cv.height);gl.clearColor(0,0,0,0);gl.clear(gl.COLOR_BUFFER_BIT);
    gl.uniform2f(u('R'),cv.width,cv.height);gl.uniform1f(u('T'),t);gl.drawArrays(gl.TRIANGLES,0,3)},function(){var x=gl.getExtension('WEBGL_lose_context');x&&x.loseContext()})}

var THREE_URL='https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.module.min.js',threeP=null;
function coil(cv){threeP=threeP||import(THREE_URL);threeP.then(function(T){if(!cv.isConnected)return;
  var light=cv.dataset.bg==='light',r=new T.WebGLRenderer({canvas:cv,antialias:true,alpha:true});r.setPixelRatio(Math.min(devicePixelRatio||1,1.5));r.toneMapping=T.ACESFilmicToneMapping;
  var sc=new T.Scene(),cam=new T.PerspectiveCamera(30,1,.1,50);cam.position.set(0,.6,6.2);cam.lookAt(0,0,0);
  // studio environment: dark room with soft boxes, baked to a PMREM for reflections
  var env=new T.Scene(),room=new T.Mesh(new T.BoxGeometry(20,20,20),new T.MeshBasicMaterial({color:light?0x8a8f97:0x2a2f36,side:T.BackSide}));env.add(room);
  [[0,6,0,10,2],[-7,1,2,2,8],[7,2,-2,2,6],[0,-1,8,8,1.5]].forEach(function(b){var m=new T.Mesh(new T.PlaneGeometry(b[3],b[4]),new T.MeshBasicMaterial({color:0xffffff,side:T.DoubleSide}));m.position.set(b[0],b[1],b[2]);m.lookAt(0,0,0);env.add(m)});
  var pm=new T.PMREMGenerator(r);sc.environment=pm.fromScene(env,.03).texture;
  // coil: rectangle profile turned on a lathe (the profile closes both faces)
  var ri=.48,ro=1.15,hw=.62,pts=[[ri,-hw],[ro,-hw],[ro,hw],[ri,hw],[ri,-hw]].map(function(a){return new T.Vector2(a[0],a[1])});
  var mat=new T.MeshStandardMaterial({color:0xd9dde2,metalness:1,roughness:.32});
  var g=new T.Group(),body=new T.Mesh(new T.LatheGeometry(pts,128),mat);g.add(body);
  g.rotation.set(.95,0,.3);r.toneMappingExposure=light?1:1.35;sc.add(g);
  var mx=0,my=0;cv.addEventListener('pointermove',function(e){var b=cv.getBoundingClientRect();mx=(e.clientX-b.left)/b.width-.5;my=(e.clientY-b.top)/b.height-.5});
  loop(cv,function(t){var w=cv.clientWidth,h=cv.clientHeight;if(cv.width!==Math.round(w*r.getPixelRatio())){r.setSize(w,h,false);cam.aspect=w/h;cam.updateProjectionMatrix()}
    g.rotation.y=t*.22;g.rotation.x=.95+my*.25;g.rotation.z=.3+mx*.3;r.render(sc,cam)},function(){r.dispose()})}).catch(function(){})}


// embers: a few hundred sparks rising from the bottom edge, warm and slow
function embers(cv){var x=cv.getContext('2d');if(!x)return;var N=parseInt(cv.dataset.n||'140',10),P=[],w=0,h=0;
  function spawn(p,init){p.x=Math.random();p.y=init?Math.random():1.05;p.r=.6+Math.random()*2.2;p.v=(.08+Math.random()*.22)/100;p.d=(Math.random()-.5)*.0006;p.a=.3+Math.random()*.7;p.ph=Math.random()*6.28;return p}
  for(var i=0;i<N;i++)P.push(spawn({},true));
  loop(cv,function(t){if(size(cv)){w=cv.width;h=cv.height}x.clearRect(0,0,w,h);x.globalCompositeOperation='lighter';
    for(var i=0;i<N;i++){var p=P[i];p.y-=p.v;p.x+=p.d+Math.sin(t*1.3+p.ph)*.0004;if(p.y<-.05||p.x<-.02||p.x>1.02)spawn(p);
      var f=Math.sin(t*2+p.ph)*.3+.7,px=p.x*w,py=p.y*h,rr=p.r*(w/900+.6);
      var g=x.createRadialGradient(px,py,0,px,py,rr*4);g.addColorStop(0,'rgba(255,200,120,'+(p.a*f).toFixed(2)+')');g.addColorStop(.4,'rgba(240,120,50,'+(p.a*f*.35).toFixed(2)+')');g.addColorStop(1,'rgba(240,120,50,0)');
      x.fillStyle=g;x.beginPath();x.arc(px,py,rr*4,0,6.283);x.fill()}
    x.globalCompositeOperation='source-over'})}

window.IVFX={attach:function(root){live.splice(0).forEach(function(s){s()});
  root.querySelectorAll('canvas[data-fx]').forEach(function(cv){({gradient:gradient,metal:metal,coil:coil,embers:embers}[cv.dataset.fx]||function(){})(cv)});
  // scroll reveal
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{rootMargin:'0px 0px -8% 0px'});
  root.querySelectorAll('.rv').forEach(function(el){io.observe(el)});live.push(function(){io.disconnect()});
  // kinetic words: a tall section whose sticky stage swaps one word per step of scroll
  root.querySelectorAll('[data-kinetic]').forEach(function(sec){var ws=sec.querySelectorAll('.kw');
    function on(){var b=sec.getBoundingClientRect(),p=Math.min(.999,Math.max(0,-b.top/(b.height-innerHeight))),k=Math.floor(p*ws.length);ws.forEach(function(w,i){w.classList.toggle('on',i===k)})}
    addEventListener('scroll',on,{passive:true});on();live.push(function(){removeEventListener('scroll',on)})});
  // count-up numbers: <b data-count="2016">
  var co=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;co.unobserve(e.target);var el=e.target,to=parseFloat(el.dataset.count),t0=performance.now(),dur=1400;
    if(still){el.textContent=el.dataset.count;return}
    (function f(now){var p=Math.min(1,(now-t0)/dur),k=1-Math.pow(1-p,3);el.textContent=Math.round(to*k).toLocaleString('en-US').replace(/,/g,el.dataset.sep||'');if(p<1)requestAnimationFrame(f)})(t0)})},{threshold:.4});
  root.querySelectorAll('[data-count]').forEach(function(el){co.observe(el)});live.push(function(){co.disconnect()});
  // pointer parallax: children with data-depth drift against the pointer inside [data-tilt]
  root.querySelectorAll('[data-tilt]').forEach(function(box){var ks=box.querySelectorAll('[data-depth]');
    function on(e){var b=box.getBoundingClientRect(),dx=(e.clientX-b.left)/b.width-.5,dy=(e.clientY-b.top)/b.height-.5;ks.forEach(function(k){var d=parseFloat(k.dataset.depth);k.style.transform='translate3d('+(dx*d*-40).toFixed(1)+'px,'+(dy*d*-40).toFixed(1)+'px,0)'})}
    function off(){ks.forEach(function(k){k.style.transform=''})}
    if(still)return;box.addEventListener('pointermove',on);box.addEventListener('pointerleave',off);live.push(function(){box.removeEventListener('pointermove',on);box.removeEventListener('pointerleave',off)})});
  // split headline words so each can rise in turn: <h1 data-words>
  root.querySelectorAll('[data-words]').forEach(function(h){if(h.dataset.split)return;h.dataset.split='1';
    h.innerHTML=h.innerHTML.replace(/(<[^>]+>)|([^<\s]+)/g,function(m,tag,w){return tag?tag:'<span class="wd"><i>'+w+'</i></span>'});
    var ws=h.querySelectorAll('.wd');ws.forEach(function(w,i){w.style.transitionDelay=(i*70)+'ms'});h.classList.add('rv');io.observe(h)});
  // scrolled flag for the floating header
  function sc(){document.documentElement.classList.toggle('scrolled',scrollY>40)}addEventListener('scroll',sc,{passive:true});sc();live.push(function(){removeEventListener('scroll',sc)})}};
})();
