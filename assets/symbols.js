// Product symbols: six per product, drawn as SVG and animated with CSS classes in the page.
// IVSYM.pick names the one the site uses; the gallery (symbols.html) shows all of them.
(function(){
function spiral(turns,step,r0){var s='M60 60',r=r0||1.5,a=0;for(var i=0;i<turns*36;i++){a+=Math.PI/18;r+=step/36;s+=' L'+(60+Math.cos(a)*r).toFixed(1)+' '+(60+Math.sin(a)*r).toFixed(1)}return s}
function dots(n,seed,rmin,rmax,cx,cy,sz){var s='',k=seed;for(var i=0;i<n;i++){k=(k*16807)%2147483647;var a=(k%360)*Math.PI/180,r=rmin+(k%1000)/1000*(rmax-rmin),x=cx+Math.cos(a)*r,y=cy+Math.sin(a)*r,q=sz*(.6+(k%7)*.12);s+='<circle class="gr" cx="'+x.toFixed(1)+'" cy="'+y.toFixed(1)+'" r="'+q.toFixed(1)+'" style="animation-delay:'+(-(k%5000)/1000).toFixed(2)+'s"/>'}return s}
var W='<svg viewBox="0 0 120 120" class="sym ',E='</svg>',G='<g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">';
var S={
// coil
coil1:W+'coil c1" aria-hidden="true">'+G+'<path class="draw" d="'+spiral(12,8)+'"/></g>'+E,
coil2:W+'coil c2" aria-hidden="true">'+G+'<ellipse cx="60" cy="60" rx="46" ry="30"/><ellipse cx="60" cy="60" rx="34" ry="22"/><ellipse cx="60" cy="60" rx="22" ry="14"/><ellipse cx="60" cy="60" rx="10" ry="6"/><path class="sweep" d="M14 60a46 30 0 0 1 46-30"/></g>'+E,
coil3:W+'coil c3" aria-hidden="true">'+G+'<circle cx="60" cy="60" r="44"/><circle cx="60" cy="60" r="14"/><g class="ticks">'+(function(){var s='';for(var i=0;i<24;i++){var a=i*15*Math.PI/180;s+='<path d="M'+(60+Math.cos(a)*18).toFixed(1)+' '+(60+Math.sin(a)*18).toFixed(1)+'L'+(60+Math.cos(a)*40).toFixed(1)+' '+(60+Math.sin(a)*40).toFixed(1)+'" opacity=".55"/>'}return s})()+'</g></g>'+E,
coil4:W+'coil c4" aria-hidden="true">'+G+'<path class="draw" d="'+spiral(7,10,4)+'"/><path class="strip" d="M60 108 H118" stroke-width="2.5"/></g>'+E,
coil5:W+'coil c5" aria-hidden="true">'+G+'<rect x="18" y="34" width="84" height="52" rx="4"/><path d="M18 46h84M18 58h84M18 70h84" opacity=".6"/><path class="runx" d="M4 60h112" stroke-dasharray="6 10" stroke-width="2"/></g>'+E,
coil6:W+'coil c6" aria-hidden="true">'+G+'<circle class="ring r1" cx="60" cy="60" r="46" stroke-dasharray="20 8"/><circle class="ring r2" cx="60" cy="60" r="34" stroke-dasharray="12 6"/><circle class="ring r3" cx="60" cy="60" r="22" stroke-dasharray="6 4"/><circle cx="60" cy="60" r="8"/></g>'+E,
// pipe
pipe1:W+'pipe p1" aria-hidden="true">'+G+'<circle cx="60" cy="60" r="44"/><circle cx="60" cy="60" r="32"/><path class="run" d="M60 16a44 44 0 0 1 44 44" stroke-width="3"/><path class="run r2" d="M28 60a32 32 0 0 1 32-32" stroke-width="3"/></g>'+E,
pipe2:W+'pipe p2" aria-hidden="true">'+G+'<ellipse cx="86" cy="60" rx="14" ry="30"/><ellipse cx="86" cy="60" rx="8" ry="18" opacity=".6"/><path d="M86 30H34M86 90H34"/><path d="M34 30a14 30 0 0 0 0 60" /><path class="flow" d="M40 60h40" stroke-dasharray="4 8" stroke-width="2"/></g>'+E,
pipe3:W+'pipe p3" aria-hidden="true">'+G+(function(){var s='',pts=[[60,60],[60,34],[60,86],[37.5,47],[82.5,47],[37.5,73],[82.5,73]];pts.forEach(function(p,i){s+='<circle class="tube" style="animation-delay:'+(i*.3)+'s" cx="'+p[0]+'" cy="'+p[1]+'" r="12"/><circle cx="'+p[0]+'" cy="'+p[1]+'" r="8" opacity=".5"/>'});return s})()+'</g>'+E,
pipe4:W+'pipe p4" aria-hidden="true">'+G+'<path d="M14 44h92M14 76h92"/><ellipse cx="106" cy="60" rx="6" ry="16"/><path d="M14 44a6 16 0 0 0 0 32"/><path class="seam" d="M14 60h92" stroke-dasharray="3 6" stroke-width="2"/><circle class="spark" cx="60" cy="60" r="3" fill="currentColor"/></g>'+E,
pipe5:W+'pipe p5" aria-hidden="true">'+G+'<path d="M16 100V56a40 40 0 0 1 40-40h48"/><path d="M40 100V60a16 16 0 0 1 16-16h48"/><path d="M16 100h24M104 16v28"/><path class="flow" d="M28 100V58a28 28 0 0 1 28-28h48" stroke-dasharray="5 9" stroke-width="2"/></g>'+E,
pipe6:W+'pipe p6" aria-hidden="true">'+G+'<circle class="depth d1" cx="60" cy="60" r="46"/><circle class="depth d2" cx="60" cy="60" r="34"/><circle class="depth d3" cx="60" cy="60" r="22"/><circle class="depth d4" cx="60" cy="60" r="10"/></g>'+E,
// slag
slag1:W+'slag s1" aria-hidden="true"><g fill="currentColor">'+dots(42,7,10,52,60,60,2.2)+'</g>'+E,
slag2:W+'slag s2" aria-hidden="true">'+G+'<path d="M12 100L60 56l48 44z"/></g><g fill="currentColor">'+(function(){var s='';for(var i=0;i<9;i++){s+='<circle class="fall" cx="'+(44+i*4)+'" cy="14" r="1.8" style="animation-delay:'+(-i*.37).toFixed(2)+'s"/>'}return s})()+dots(16,3,0,22,60,86,1.8)+'</g>'+E,
slag3:W+'slag s3" aria-hidden="true">'+G+(function(){var s='';[[60,60],[60,34],[60,86],[37.5,47],[82.5,47],[37.5,73],[82.5,73]].forEach(function(p,i){var h='';for(var k=0;k<6;k++){var a=(k*60+30)*Math.PI/180;h+=(k?'L':'M')+(p[0]+Math.cos(a)*12).toFixed(1)+' '+(p[1]+Math.sin(a)*12).toFixed(1)}s+='<path class="hex" style="animation-delay:'+(i*.25)+'s" d="'+h+'Z"/>'});return s})()+'</g>'+E,
slag4:W+'slag s4" aria-hidden="true">'+G+'<path class="wave" d="M-10 84q15-8 30 0t30 0t30 0t30 0t30 0" stroke-width="2"/><path class="wave w2" d="M-10 96q15-8 30 0t30 0t30 0t30 0t30 0" opacity=".5"/></g><g fill="currentColor">'+(function(){var s='';for(var i=0;i<12;i++){s+='<circle class="fall" cx="'+(30+i*5.5)+'" cy="20" r="'+(1.4+(i%3)*.4)+'" style="animation-delay:'+(-i*.29).toFixed(2)+'s"/>'}return s})()+'</g>'+E,
slag5:W+'slag s5" aria-hidden="true">'+G+'<path d="M10 70h100l-10 26H20z"/><path d="M60 70V40M60 40h30" /><path class="hoist" d="M90 40v18"/></g><g fill="currentColor"><circle class="load" cx="90" cy="60" r="3.5"/>'+dots(18,11,0,30,60,84,1.6)+'</g>'+E,
slag6:W+'slag s6" aria-hidden="true">'+G+'<circle cx="60" cy="60" r="46"/></g><g fill="currentColor">'+dots(60,19,0,42,60,60,1.7)+'</g>'+E
};
window.IVSYM={all:S,pick:{coil:'coil1',pipe:'pipe1',slag:'slag1'},get:function(id){return S[this.pick[id]]||S[id]||''}};
})();
