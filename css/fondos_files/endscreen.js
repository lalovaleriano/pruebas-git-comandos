(function(g){var window=this;var hxa=function(a,b,c,d){var e=b.fc();g.T(a.element,"ytp-suggestion-set",!!e.videoId);var f=b.getPlaylistId();d=b.md(c,d?d:"mqdefault.jpg");var k=b instanceof g.eN?g.rV(b.lengthSeconds):null,l=!!f;f=l&&"RD"==g.hP(f).type;var m=b instanceof g.eN?b.ua:null;c={title:b.title,author:b.author,author_and_views:e.shortViewCount?b.author+" \u2022 "+e.shortViewCount:b.author,watch:g.U("YTP_WATCH_VIDEO_OR_PLAYLIST",{TITLE:b.title},b.title),duration:k,url:b.Ln(c),is_live:m,is_list:l,is_mix:f,background:d?"background-image: url("+
d+")":""};b instanceof g.jP&&(c.playlist_length=b.getLength());a.update(c)},$5=function(a,b){g.RU.call(this,{G:"div",
aa:["html5-endscreen","ytp-player-content",b||"base-endscreen"]});this.l=a;this.created=!1},a6=function(a){var b={G:"span",
M:"ytp-upnext-top",J:[{G:"span",M:"ytp-upnext-header",J:[g.U("YTP_PLAYLIST_UP_NEXT")]},{G:"span",M:"ytp-upnext-title",J:["{{title}}"]},{G:"span",M:"ytp-upnext-author",J:["{{author}}"]}]},c={role:"button",href:"{{url}}","aria-label":g.U("YTP_AUTOPLAY_NEXT")};b={G:"div",M:"ytp-upnext",T:{"aria-label":"{{watch}}"},J:[{G:"div",M:"ytp-cued-thumbnail-overlay-image",T:{style:"{{background}}"}},b,{G:"a",M:"ytp-upnext-autoplay-icon",T:c,J:[{G:"svg",T:{height:"100%",version:"1.1",viewBox:"0 0 98 98",width:"100%"},
J:[{G:"circle",M:"ytp-svg-autoplay-circle",T:{cx:"49",cy:"49",fill:"#000","fill-opacity":"0.8",r:"48"}},{G:"circle",M:"ytp-svg-autoplay-ring",T:{cx:"-49",cy:"49","fill-opacity":"0",r:"46.5",stroke:"#FFFFFF","stroke-dasharray":"293","stroke-dashoffset":"-293","stroke-width":"4",transform:"rotate(-90)"}},{G:"polygon",M:"ytp-svg-autoplay-triangle",T:{fill:"#fff",points:"32,27 72,49 32,71"}}]}]},{G:"span",M:"ytp-upnext-bottom",J:[{G:"span",M:"ytp-upnext-cancel"},{G:"span",M:"ytp-upnext-paused",J:[g.U("YTP_AUTOPLAY_PAUSED_3")]}]}]};
g.Y.call(this,b);this.A=null;b=this.sa["ytp-upnext-cancel"];this.A=new g.Y({G:"button",aa:["ytp-upnext-cancel-button","ytp-button"],T:{tabindex:"0","aria-label":g.U("YTP_AUTOPLAY_CANCEL")},J:[g.U("YTP_CANCEL")]});g.N(this,this.A);this.A.P("click",this.qO,this);this.A.Ca(b);this.l=a;this.I=this.sa["ytp-svg-autoplay-ring"];this.D=this.C=this.o=this.B=null;this.F=new g.Lt(this.an,5E3,this);g.N(this,this.F);this.H=0;this.O(this.sa["ytp-upnext-autoplay-icon"],"click",this.zQ);this.OA();this.O(a,"autonavvisibility",
this.OA);this.O(a,"mdxnowautoplaying",this.OP);this.O(a,"mdxautoplaycanceled",this.PP);this.O(a,"mdxautoplayupnext",this.rD);3==this.l.Qa()&&(a=(a=g.QT(g.LT(this.l)))?a.IH():null)&&this.rD(a)},ixa=function(a,b){a.B=b;
hxa(a,b,g.W(a.l),"hqdefault.jpg")},b6=function(a,b){if(!a.o){g.zF("a11y-announce",g.U("YTP_PLAYLIST_UP_NEXT")+" "+a.B.title);
a.H=g.LF();a.o=new g.Lt((0,g.z)(a.kq,a,b),25);a.kq(b);var c=b||g.W(a.l).experiments.l("autoplay_time")||1E4;a.l.ra("onAutonavCoundownStarted",c)}g.gq(a.element,"ytp-upnext-autoplay-paused")},d6=function(a){c6(a);
a.H=g.LF();a.kq();g.S(a.element,"ytp-upnext-autoplay-paused")},c6=function(a){a.o&&(a.o.dispose(),a.o=null)},e6=function(a,b){b=void 0===b?!1:b;
var c=g.W(a.l);if(c.experiments.g("autonav_notifications")&&b&&window.Notification&&window.document.hasFocus){var d=window.Notification.permission;g.aU(a.l,"xwebnotifications",{permission:d});"default"==d?window.Notification.requestPermission():"granted"!=d||window.document.hasFocus()||(d=a.B.fc(),a.an(),a.C=new window.Notification(g.U("YTP_PLAYLIST_UP_NEXT"),{body:d.title,icon:d.md(c)}),a.D=a.O(a.C,"click",a.pQ),a.F.start())}c6(a);a.l.Dj(!1,b)},jxa=function(a){$5.call(this,a,"subscribecard-endscreen");
var b=a.ea();this.o=new g.Y({G:"div",M:"ytp-subscribe-card",J:[{G:"img",M:"ytp-author-image",T:{src:b.profilePicture}},{G:"div",M:"ytp-subscribe-card-right",J:[{G:"div",M:"ytp-author-name",J:[b.author]},{G:"div",M:"html5-subscribe-button-container"}]}]});g.N(this,this.o);this.o.Ca(this.element);this.A=new g.i0(g.U("YTP_SUBSCRIBE"),null,g.U("YTP_UNSUBSCRIBE"),null,!0,!1,b.Ml,b.subscribed,"trailer-endscreen",null,null,a);g.N(this,this.A);this.A.Ca(this.o.sa["html5-subscribe-button-container"]);this.hide()},
f6=function(a){var b=g.W(a),c=g.$I||g.Ze?{style:"will-change: opacity"}:void 0,d=b.o&&!b.F,e=["ytp-videowall-still"];
b.experiments.g("web_player_video_wall_show_text")&&b.l&&e.push("ytp-videowall-show-text");g.Y.call(this,{G:"a",aa:e,T:{href:"{{url}}",target:d?"_blank":"","aria-label":"{{watch}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}"},J:[{G:"div",M:"ytp-videowall-still-image",T:{style:"{{background}}"}},{G:"span",M:"ytp-videowall-still-info",J:[{G:"span",M:"ytp-videowall-still-info-bg",J:[{G:"span",M:"ytp-videowall-still-info-content",T:c,J:[{G:"span",M:"ytp-videowall-still-info-title",
J:["{{title}}"]},{G:"span",M:"ytp-videowall-still-info-author",J:["{{author_and_views}}"]},{G:"span",M:"ytp-videowall-still-info-live",J:[g.U("YTP_LIVE")]},{G:"span",M:"ytp-videowall-still-info-duration",J:["{{duration}}"]}]}]}]},{G:"span",aa:["ytp-videowall-still-listlabel-regular","ytp-videowall-still-listlabel"],J:[{G:"span",M:"ytp-videowall-still-listlabel-icon"},g.U("YTP_PLAYLIST"),{G:"span",M:"ytp-videowall-still-listlabel-length",J:[" (",{G:"span",J:["{{playlist_length}}"]},")"]}]},{G:"span",
aa:["ytp-videowall-still-listlabel-mix","ytp-videowall-still-listlabel"],J:[{G:"span",M:"ytp-videowall-still-listlabel-mix-icon"},g.U("YTP_MIX"),{G:"span",M:"ytp-videowall-still-listlabel-length",J:[" (50+)"]}]}]});this.A=d;this.l=a;this.o=null;this.P("click",this.B);this.P("keypress",this.C);g.W(a).Y&&(a=a.app.ca,b=this.element,g.Oa(a.g,b),g.Ra(a.g,b),c=String(a.F++),b.setAttribute("data-visual-id",c),g.Ue(this,(0,g.z)(a.D,a,b)))},g6=function(a){$5.call(this,a,"videowall-endscreen");
this.K=a;this.F=0;this.A=[];this.H=this.C=this.B=null;this.I=this.X=!1;this.D=new g.hF(this);g.N(this,this.D);this.L=new g.Lt(g.Da(g.S,this.element,"ytp-show-tiles"),0);g.N(this,this.L);var b=new g.Y({G:"button",aa:["ytp-button","ytp-endscreen-previous"],T:{"aria-label":g.U("YTP_PREVIOUS")},J:[g.VU()]});g.N(this,b);b.Ca(this.element);b.P("click",this.hL,this);this.N=new g.wU({G:"div",M:"ytp-endscreen-content"});g.N(this,this.N);this.N.Ca(this.element);b=new g.Y({G:"button",aa:["ytp-button","ytp-endscreen-next"],
T:{"aria-label":g.U("YTP_NEXT")},J:[g.WU()]});g.N(this,b);b.Ca(this.element);b.P("click",this.gL,this);this.o=new a6(a);g.N(this,this.o);g.nU(this.l,this.o.element,4);this.hide()},h6=function(a){return g.oU(a.l)&&a.oq()&&!a.H},kxa=function(a){return(0,g.H)(a.suggestions,function(a){return g.UY(a)})},i6=function(a){var b=a.Vs();
b!=a.X&&(a.X=b,a.l.R("autonavvisibility"))},j6=function(a){g.tU.call(this,a);
g.rG({YTP_AUTOPLAY_CANCEL:"Cancelar reproducci\u00f3n autom\u00e1tica",YTP_AUTOPLAY_NEXT:"Reproducir siguiente v\u00eddeo",YTP_AUTOPLAY_PAUSED_3:"La reproducci\u00f3n autom\u00e1tica est\u00e1 en pausa",YTP_CANCEL:"Cancelar",YTP_MIX:"Mix",YTP_PLAYLIST_UP_NEXT:"Siguiente",YTP_UNSUBSCRIBE:"Cancelar suscripcion"});this.l=null;this.o=new g.hF(this);g.N(this,this.o);this.A=g.W(a);lxa(a)?this.l=new g6(this.g):this.A.fa?this.l=new jxa(this.g):this.l=new $5(this.g);g.N(this,this.l);g.nU(this.g,this.l.element,
4);this.eC();this.o.O(a,"videodatachange",this.eC,this);this.o.O(a,"crn_endscreen",this.FK,this);this.o.O(a,"crx_endscreen",this.GK,this)},lxa=function(a){a=g.W(a);
return a.qe&&!a.fa};
g.p($5,g.RU);$5.prototype.create=function(){this.created=!0};
$5.prototype.destroy=function(){this.created=!1};
$5.prototype.oq=function(){return!1};
$5.prototype.Vs=function(){return!1};g.p(a6,g.Y);g.h=a6.prototype;g.h.an=function(){this.C&&(this.F.stop(),this.Da(this.D),this.D=null,this.C.close(),this.C=null)};
g.h.OA=function(){g.DU(this,g.MT(this.l))};
g.h.pQ=function(){window.focus();this.an()};
g.h.hide=function(){g.Y.prototype.hide.call(this)};
g.h.kq=function(a){a=a||g.W(this.l).experiments.l("autoplay_time")||1E4;var b=Math.min(g.LF()-this.H,a);a=Math.min(b/a,1);this.I.setAttribute("stroke-dashoffset",-293*(a+1));1<=a&&3!=this.l.Qa()?e6(this,!0):this.o&&this.o.start()};
g.h.zQ=function(a){!g.Md(this.A.element,g.XE(a))&&g.fZ(a,this.l)&&e6(this)};
g.h.qO=function(){g.OT(this.l,!0)};
g.h.OP=function(a){this.l.Qa();this.show();b6(this,a)};
g.h.rD=function(a){this.l.Qa();this.B&&this.B.fc().videoId==a.fc().videoId||ixa(this,a)};
g.h.PP=function(){this.l.Qa();c6(this);this.hide()};
g.h.U=function(){c6(this);this.an();g.Y.prototype.U.call(this)};g.p(jxa,$5);g.p(f6,g.Y);f6.prototype.Sj=function(){g.rU(this.l,this.element);var a=this.o.fc().videoId,b=this.o.getPlaylistId();g.T0(this.l.app,a,this.o.Ud,b,void 0,void 0,void 0)};
f6.prototype.B=function(a){g.fZ(a,this.l,this.A,this.o.Ud||void 0)&&this.Sj()};
f6.prototype.C=function(a){switch(a.keyCode){case 13:case 32:g.bF(a)||(this.Sj(),g.aF(a))}};g.p(g6,$5);g.h=g6.prototype;g.h.create=function(){$5.prototype.create.call(this);var a=this.l.ea();a&&(this.B=kxa(a),this.C=a);this.sh();this.D.O(this.l,"appresize",this.sh);this.D.O(this.l,"videodatachange",this.iL);this.D.O(this.l,"autonavchange",this.yz);this.D.O(this.l,"autonavcancel",this.fL);this.D.O(this.element,"transitionend",this.LR)};
g.h.destroy=function(){g.jF(this.D);g.We(this.A);this.A=[];this.B=null;$5.prototype.destroy.call(this);g.gq(this.element,"ytp-show-tiles");this.L.stop()};
g.h.oq=function(){return 1!=this.C.autonavState};
g.h.show=function(){$5.prototype.show.call(this);g.gq(this.element,"ytp-show-tiles");g.W(this.l).l?g.Nt(this.L):this.L.start();(this.I||this.H&&this.H!=this.C.clientPlaybackNonce)&&g.OT(this.l,!1);var a=h6(this);g.oU(this.l)&&g.W(this.l).experiments.g("ui_logging")&&g.aU(this.l,"end",{cancelButtonShow:a?"1":"0",state:this.oq()?"enabled":"disabled"});a?(i6(this),2==this.C.autonavState?g.W(this.l).experiments.g("fast_autonav_in_background")&&3==this.l.yi()?e6(this.o,!0):b6(this.o):3==this.C.autonavState&&
d6(this.o)):(g.OT(this.l,!0),i6(this))};
g.h.hide=function(){$5.prototype.hide.call(this);d6(this.o);i6(this)};
g.h.LR=function(a){g.XE(a)==this.element&&this.sh()};
g.h.sh=function(){if(this.B&&this.B.length){g.S(this.element,"ytp-endscreen-paginate");if(g.W(this.K).experiments.g("web_player_endscreen_size_killswitch"))var a=g.Dh(this.element);else{a=g.dU(this.K);var b=g.LT(this.K).H;b&&(b=b.Pd()?48:32,a.width-=2*b)}var c=a.width/a.height,d=96/54,e=b=2,f=Math.max(a.width/96,2),k=Math.max(a.height/54,2),l=this.B.length,m=Math.pow(2,2);var n=l*m+(Math.pow(2,2)-m);n+=Math.pow(2,2)-m;for(n-=m;0<n&&(b<f||e<k);){var q=b/2,r=e/2,t=b<=f-2&&n>=r*m,B=e<=k-2&&n>=q*m;if((q+
1)/r*d/c>c/(q/(r+1)*d)&&B)n-=q*m,e+=2;else if(t)n-=r*m,b+=2;else if(B)n-=q*m,e+=2;else break}d=!1;n>=3*m&&6>=l*m-n&&(4<=e||4<=b)&&(d=!0);m=96*b;n=54*e;c=m/n<c?a.height/n:a.width/m;c=Math.min(c,2);m*=c;n*=c;m*=g.Yc(a.width/m||1,1,1.21);n*=g.Yc(a.height/n||1,1,1.21);m=Math.floor(Math.min(a.width,m));n=Math.floor(Math.min(a.height,n));a=this.N.element;g.Ch(a,m,n);g.kh(a,{marginLeft:m/-2+"px",marginTop:n/-2+"px"});ixa(this.o,this.B[0]);g.T(this.element,"ytp-endscreen-takeover",h6(this));i6(this);m+=4;
n+=4;for(f=c=0;f<b;f++)for(k=0;k<e;k++)if(q=c,r=0,d&&f>=b-2&&k>=e-2?r=1:0==k%2&&0==f%2&&(2>k&&2>f?0==k&&0==f&&(r=2):r=2),q=g.Zc(q+this.F,l),0!=r){t=this.A[c];t||(t=new f6(this.l),this.A[c]=t,a.appendChild(t.element));B=Math.floor(n*k/e);var G=Math.floor(m*f/b),I=Math.floor(n*(k+r)/e)-B-4,X=Math.floor(m*(f+r)/b)-G-4;g.rh(t.element,G,B);g.Ch(t.element,X,I);g.kh(t.element,"transitionDelay",(k+f)/20+"s");g.T(t.element,"ytp-videowall-still-mini",1==r);g.T(t.element,"ytp-videowall-still-large",2<r);r=t;
q=this.B[q];r.o=q;hxa(r,q,g.W(r.l),g.eq(r.element,"ytp-videowall-still-large")?"hqdefault.jpg":"mqdefault.jpg");t=q.Ud;q=r.l;g.W(q).Y&&(q=q.app.ca,r=r.element,t=t&&t.itct,B=r.getAttribute("data-visual-id"),g.Oa(q.g,r),g.pU(q,"onLogServerVeCreated",{id:B,tracking_params:t}));c++}g.T(this.element,"ytp-endscreen-paginate",c<l);for(b=this.A.length-1;b>=c;b--)e=this.A[b],g.Ed(e.element),g.Ve(e);this.A.length=c}};
g.h.iL=function(){var a=this.l.ea();this.C!=a&&(this.F=0,this.B=kxa(a),this.C=a,this.sh())};
g.h.gL=function(){this.F+=this.A.length;this.sh()};
g.h.hL=function(){this.F-=this.A.length;this.sh()};
g.h.MJ=function(){return!!this.o.o};
g.h.yz=function(a){1==a?(this.I=!1,this.H=this.C.clientPlaybackNonce,c6(this.o),this.g&&this.sh()):(this.I=!0,this.g&&h6(this)&&(2==a?b6(this.o):3==a&&d6(this.o)))};
g.h.fL=function(a){if(a){for(a=0;a<this.A.length;a++)g.sU(this.K,this.A[a].element,!0);this.yz(1)}else this.H=null,this.I=!1;this.sh()};
g.h.Vs=function(){return this.g&&h6(this)};g.p(j6,g.tU);g.h=j6.prototype;g.h.uz=function(){var a=this.g.ea(),b=!!(a&&a.suggestions&&a.suggestions.length);b=!lxa(this.g)||b;a=g.xN(a,"ypc_module");var c=g.U0(this.g.app);return b&&!a&&!c};
g.h.rz=function(){return this.l.Vs()};
g.h.IJ=function(){return this.rz()?this.l.MJ():!1};
g.h.U=function(){g.jU(this.g,"endscreen");g.tU.prototype.U.call(this)};
g.h.load=function(){g.tU.prototype.load.call(this);this.l.show();g.W(this.g).fa&&.01>Math.random()&&g.aU(this.g,"end",{trailerEndscreenShow:1})};
g.h.unload=function(){g.tU.prototype.unload.call(this);this.l.hide();this.l.destroy()};
g.h.FK=function(a){this.uz()&&(this.l.created||this.l.create(),"load"==a.getId()&&this.load())};
g.h.GK=function(a){"load"==a.getId()&&this.loaded&&this.unload()};
g.h.eC=function(){g.jU(this.g,"endscreen");var a=Math.max(1E3*(this.g.ea().lengthSeconds-10),0);a=new g.dP(a,0x8000000000000,{id:"preload",namespace:"endscreen"});var b=new g.dP(0x8000000000000,0x8000000000000,{id:"load",priority:6,namespace:"endscreen"});g.gU(this.g,[a,b])};g.BY.endscreen=j6;})(_yt_player);
