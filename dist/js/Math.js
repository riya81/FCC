!function(n){var e={};function t(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return n[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)t.d(r,i,function(e){return n[e]}.bind(null,i));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=8)}([function(n,e,t){"use strict";var r={};t.r(r),t.d(r,"conversion",(function(){return B})),t.d(r,"code",(function(){return k}));var i={};t.r(i),t.d(i,"hello",(function(){return K})),t.d(i,"Modal_simple",(function(){return j})),t.d(i,"Accordion",(function(){return F})),t.d(i,"Thedetails",(function(){return N})),t.d(i,"Maths",(function(){return U})),t.d(i,"Mathsnew",(function(){return _})),t.d(i,"maths",(function(){return M})),t.d(i,"Random",(function(){return z})),t.d(i,"nCr",(function(){return L})),t.d(i,"nPr",(function(){return I})),t.d(i,"Pow",(function(){return H})),t.d(i,"Repetition",(function(){return P})),t.d(i,"Gcd",(function(){return D})),t.d(i,"Ratio",(function(){return q})),t.d(i,"Diagonal",(function(){return R})),t.d(i,"Zeller",(function(){return W})),t.d(i,"Push",(function(){return J})),t.d(i,"Com",(function(){return G})),t.d(i,"Spt",(function(){return Y})),t.d(i,"Window",(function(){return A})),t.d(i,"UTF",(function(){return r})),t.d(i,"Day",(function(){return Z})),t.d(i,"Css",(function(){return $})),t.d(i,"Aimg",(function(){return S})),t.d(i,"Search",(function(){return E})),t.d(i,"Time",(function(){return x})),t.d(i,"Html",(function(){return C})),t.d(i,"Code",(function(){return O}));var o=function(n,e,t,r,i,o,a,c){return"\n    <p>".concat(n,"</p>\n    <p>").concat(t,"</p>\n    <p>").concat(e,"番</p>\n    <p>").concat(i,"族").concat(o,"周期</p>\n    <p>").concat(c,"</p>\n    <p>").concat(r,"</p>\n    <p>原子量").concat(a,"</p>")},a={name:"水素",num:1,text:"H",Classification:"非金属",Tribe:1,period:1,Atomicweight:"1.00794"},c={name:"ヘリウム",num:2,text:"He",Classification:"非金属",Tribe:18,period:1,Atomicweight:"4.00260"},l={name:"リチウム",num:3,text:"Li",Classification:"金属",Tribe:1,period:1,Atomicweight:"6.941"},p={name:null,num:null,text:null,Classification:null,Tribe:null,period:null,Atomicweight:null,type:null},s=function(n){var e;1==(e=n)||"H"==e?p=a:2==e||"He"==e?p=c:3==e||"Li"==e?p=l:4==e||"Be"==e?(p.name="ベリリウム",p.Classification="金属"):5==e||"B"==e?(p.name="ホウ素",p.Classification="非金属"):6==e||"C"==e?(p.name="炭素",p.Classification="非金属"):7==e||"N"==e?(p.name="窒素",p.Classification="非金属"):8==e||"O"==e?(p.name="酸素",p.Classification="非金属"):9==e||"F"==e?(p.name="フッ素",p.Classification="非金属"):10==e||"Ne"==e?(p.name="ネオン",p.Classification="非金属"):p.name="一致する原子がありませんでした",1==p.Tribe||2==p.Tribe||12==p.Tribe||18==p.Tribe?p.type="典型元素":p.type="遷移元素",o(p.name,p.num,p.text,p.Classification,p.Tribe,p.period,p.Atomicweight,p.type)},u=function(n){return s(n)},d=function(n){'<div class="modal-simple">\n                    <div class="modal-inner">\n                        <div class="modal-header">\n                        </div>\n                        <div class="modal-introduction">\n                            <h2 class="modal-h2">'.concat(n.h2,"</h2>\n                            <p>").concat(n.text,"</p>\n                            <p>").concat(n.text2,'</p>\n                        </div>\n                        <button class="modal-close-btn blake">とじる</button>\n                    </div>\n                </div>')};function f(n,e,t,r,i,o,a){try{var c=n[o](a),l=c.value}catch(n){return void t(n)}c.done?e(l):Promise.resolve(l).then(r,i)}var g=null,h=1e3,m=function(){return null},b=function(){return null},v=function(n){return new Promise((function(e){setTimeout(e,n)}))},y=function(n){throw null!==g&&(b(),n.innerHTML="<div>".concat(g(),"</div>")),new Promise(function(){var n,e=(n=regeneratorRuntime.mark((function n(e){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,v(h);case 2:g=m,e();case 4:case"end":return n.stop()}}),n)})),function(){var e=this,t=arguments;return new Promise((function(r,i){var o=n.apply(e,t);function a(n){f(o,r,i,a,c,"next",n)}function c(n){f(o,r,i,a,c,"throw",n)}a(void 0)}))});return function(n){return e.apply(this,arguments)}}())},x=function(n,e){e=document.getElementById(e),null!=n.time&&(h=n.time),null!=n.text&&(m=n.text),null!=n.Function&&(b=n.Function),y(e)};function w(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var C=new(function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n)}var e,t,r;return e=n,(t=[{key:"getid",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return-1!=n.indexOf(".")?(n=n.replace(".",""),document.getElementsByClassName(n)):-1!=n.indexOf("#")?(n=n.replace("#",""),document.getElementById(n)):document.getElementsByTagName(n)}},{key:"html",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return document.getElementById(n).innerHTML=e}},{key:"fadeIn",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=this.getid(n);e.classList.add("fadeIn")}},{key:"fadeOut",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=this.getid(n);e.classList.add("fadeOut")}},{key:"addClass",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=this.getid(n);t.classList.add(e)}},{key:"removeClass",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=this.getid(n);t.classList.remove(e)}},{key:"jscode",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=e;t=(t=(t=t.replace(/from/g,"fro%m")).replace(/class\=/g,"cla%ss=")).replace(/class \=/g,"cla%ss=");for(var r="",i="",o=0;o<e.length;o++)-1!=t.indexOf("fro%m")&&(r=t.slice(t.indexOf("fro%m")),t=(t=(t=t.slice(0,t.indexOf("fro%m")))+"</span>"+r).replace("fro%m","from"));t=(t=t.replace(/jscode/g,"j%scode")).replace(/const/g,"cons%t");for(var a=0;a<e.length;a++)-1!=t.indexOf("j%scode")&&(r=t.slice(t.indexOf("j%scode")),t=t.slice(0,t.indexOf("j%scode")),i=r.slice(r.indexOf("div")),t=(t=t+(r=(r=(r=(r=(r=(r=(r=(r=r.slice(0,r.indexOf("div"))).replace(/=/g,'<span cla%ss="i">=</span>')).replace(/;/g,'<span cla%ss="i">;</span>')).replace(/if\(/g,'<span cla%ss="i">if</span>(')).replace(/\(/g,'<span cla%ss="d">(</span>')).replace(/\)/g,'<span cla%ss="d">)</span>')).replace(/\{/g,'<span cla%ss="d">{</span><p></p>')).replace(/\}/g,'<p></p><span cla%ss="d">}</span>'))+i).replace("j%scode","jscode"));for(var c=0;c<e.length;c++)-1!=t.indexOf("cons%t")&&(r=t.slice(t.indexOf("cons%t")),t=(t=(t=t.slice(0,t.indexOf("cons%t")))+"</span>"+r).replace("cons%t","const"));return e=(e=(e=(e=(e=(e=(e=(e=(e=(e=t).replace(/fro%m/g,"from")).replace(/class/g,'<span cla%ss="i">class</span>')).replace(/j%scode/g,"jscode")).replace(/cla%ss\=/g,"class=")).replace(/return/g,'<p></p><span class="i">return</span>')).replace(/import/g,'<span class="i">import</span><span class="l">')).replace(/from/g,'<span class="i">from</span><span class="f">')).replace(/var/g,'<span class="vc">var</span><span class="l">')).replace(/let/g,'<span class="vc">let</span><span class="l">'),console.log(e),e=e.replace(/const/g,'<span class="vc">const</span><span class="l">'),document.getElementById(n).innerHTML=e}},{key:"hasclass",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=this.getid(n);return t.className===e}}])&&w(e.prototype,t),r&&w(e,r),n}());var A=new function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.Url=function(){return window.location.href},this.Urlhash=function(){return window.location.hash},this.Urlsearch=function(){return window.location.search},this.Width=function(){return window.innerWidth},this.Height=function(){return window.innerHeight},this.ScreenWidth=function(){return window.screen.width},this.ScreenHeight=function(){return window.screen.height},this.Urlorigin=function(){return window.location.origin},this.Open=function(n,e,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){};return r(),window.open(n,e,t)},this.moveTo=function(n,e,t){return n.moveTo(e,t)},this.resizeTo=function(n,e,t){return n.resizeTo(e,t)},this.resizeBy=function(n,e,t){return n.resizeBy(e,t)},this.Print=function(){return window.print()},this.Copy=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){};window.addEventListener("copy",(function(e){n()}))},this.Load=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){};window.addEventListener("load",(function(e){n()}))},this.Alert=function(n){return window.alert(n)},this.setInterval=function(n,e){return window.setInterval(n,e)},this.onresize=function(){return window.onresize}},B=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return n=n.replace(/\s+/g,""),0==e?n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=n.replace(/824F/g,"0")).replace(/8250/g,"1")).replace(/8251/g,"2")).replace(/8252/g,"3")).replace(/8253/g,"4")).replace(/8254/g,"5")).replace(/8255/g,"6")).replace(/8256/g,"7")).replace(/8257/g,"8")).replace(/8258/g,"9")).replace(/0/g,"824F")).replace(/1/g,"8250")).replace(/2/g,"8251")).replace(/3/g,"8252")).replace(/4/g,"8253")).replace(/5/g,"8254")).replace(/6/g,"8255")).replace(/7/g,"8256")).replace(/8/g,"8257")).replace(/9/g,"8258")).replace(/82A0/g,"あ")).replace(/82A2/g,"い")).replace(/82A4/g,"う")).replace(/82A6/g,"え")).replace(/82A8/g,"お")).replace(/8341/g,"ア")).replace(/8343/g,"イ")).replace(/8345/g,"ウ")).replace(/8347/g,"エ")).replace(/8349/g,"オ")).replace(/あ/g,"82A0")).replace(/い/g,"82A2")).replace(/う/g,"82A4")).replace(/え/g,"82A6")).replace(/お/g,"82A8")).replace(/ア/g,"8341")).replace(/イ/g,"8343")).replace(/ウ/g,"8345")).replace(/エ/g,"8347")).replace(/オ/g,"8349")).replace(/82A9/g,"か")).replace(/82AB/g,"き")).replace(/82AD/g,"く")).replace(/82AF/g,"け")).replace(/82B1/g,"こ")).replace(/834A/g,"カ")).replace(/834C/g,"キ")).replace(/834E/g,"ク")).replace(/8350/g,"ケ")).replace(/8352/g,"コ")).replace(/か/g,"82A9")).replace(/き/g,"82AB")).replace(/く/g,"82AD")).replace(/け/g,"82AF")).replace(/こ/g,"82B1")).replace(/カ/g,"834A")).replace(/キ/g,"834C")).replace(/ク/g,"834E")).replace(/ケ/g,"8350")).replace(/コ/g,"8352")).replace(/82B3/g,"さ")).replace(/82B5/g,"し")).replace(/82B7/g,"す")).replace(/82B9/g,"せ")).replace(/82BB/g,"そ")).replace(/8354/g,"サ")).replace(/8356/g,"シ")).replace(/8358/g,"ス")).replace(/835A/g,"セ")).replace(/835C/g,"ソ")).replace(/さ/g,"82B3")).replace(/し/g,"82B5")).replace(/す/g,"82B7")).replace(/せ/g,"82B9")).replace(/そ/g,"82BB")).replace(/サ/g,"8354")).replace(/シ/g,"8356")).replace(/ス/g,"8358")).replace(/セ/g,"835A")).replace(/ソ/g,"835C"):1==e&&(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=n.replace(/824F/g,"0")).replace(/8250/g,"1")).replace(/8251/g,"2")).replace(/8252/g,"3")).replace(/8253/g,"4")).replace(/8254/g,"5")).replace(/8255/g,"6")).replace(/8256/g,"7")).replace(/8257/g,"8")).replace(/8258/g,"9")).replace(/0/g,"9F")).replace(/1/g,"B0")).replace(/2/g,"51")).replace(/3/g,"2E")).replace(/4/g,"3F")).replace(/5/g,"5E4")).replace(/6/g,"F5A")).replace(/7/g,"EF")).replace(/8/g,"AD")).replace(/9/g,"DAEF")).replace(/82A0/g,"あ")).replace(/82A2/g,"い")).replace(/82A4/g,"う")).replace(/82A6/g,"え")).replace(/82A8/g,"お")).replace(/8341/g,"ア")).replace(/8343/g,"イ")).replace(/8345/g,"ウ")).replace(/8347/g,"エ")).replace(/8349/g,"オ")).replace(/あ/g,"%A%0")).replace(/い/g,"%AB%1")).replace(/う/g,"%BA%2E")).replace(/え/g,"%EC%3A")).replace(/お/g,"%EC%4")).replace(/ア/g,"%D%A")).replace(/イ/g,"%A%D")).replace(/ウ/g,"%E%A")).replace(/エ/g,"%E%A")).replace(/オ/g,"%F%A")).replace(/82A9/g,"か")).replace(/82AB/g,"き")).replace(/82AD/g,"く")).replace(/82AF/g,"け")).replace(/82B1/g,"こ")).replace(/834A/g,"カ")).replace(/834C/g,"キ")).replace(/834E/g,"ク")).replace(/8350/g,"ケ")).replace(/8352/g,"コ")).replace(/か/g,"%B%0")).replace(/き/g,"%BA%1")).replace(/く/g,"%AB%2")).replace(/け/g,"%CB%3")).replace(/こ/g,"%BC%4")).replace(/カ/g,"%DB%5")).replace(/キ/g,"%BD%6")).replace(/ク/g,"%EB%7")).replace(/ケ/g,"%BE%8")).replace(/コ/g,"%FB%9")).replace(/82B3/g,"さ")).replace(/82B5/g,"し")).replace(/82B7/g,"す")).replace(/82B9/g,"せ")).replace(/82BB/g,"そ")).replace(/8354/g,"サ")).replace(/8356/g,"シ")).replace(/8358/g,"ス")).replace(/835A/g,"セ")).replace(/835C/g,"ソ")).replace(/さ/g,"%C%0")).replace(/し/g,"%C%1")).replace(/す/g,"%C%2")).replace(/せ/g,"%C%3")).replace(/そ/g,"%C%4")).replace(/サ/g,"%C%5")).replace(/シ/g,"%C%6")).replace(/ス/g,"%C%7")).replace(/セ/g,"%C%8")).replace(/ソ/g,"%C%9")),n=(n=n.replace(/%/g,"")).replace(/\s+/g,"")},k=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=B(n,e)).replace(/A/g,"a")).replace(/B/g,"b")).replace(/C/g,"c")).replace(/D/g,"d")).replace(/E/g,"e")).replace(/F/g,"f")).replace(/a/g,"1945")).replace(/b/g,"3784")).replace(/c/g,"8912")).replace(/d/g,"4132")).replace(/e/g,"7234")).replace(/f/g,"5321")).replace(/45/g,"79"),console.log(n),n=-1!=(n="1"+(n=(n=(n=(n=(n=n.replace(/,/g,"9")).replace(/_/g,"3")).replace(/\{/g,"13")).replace(/\$/g,"1012")).replace(/=/g,"1"))).indexOf("18")?(n=Number(n)).toString(18):-1!=n.indexOf("19")?(n=Number(n)).toString(19):-1!=n.indexOf("20")?(n=Number(n)).toString(20):-1!=n.indexOf("21")?(n=Number(n)).toString(21):-1!=n.indexOf("22")?(n=Number(n)).toString(22):-1!=n.indexOf("23")?(n=Number(n)).toString(23):-1!=n.indexOf("24")?(n=Number(n)).toString(24):-1!=n.indexOf("25")?(n=Number(n)).toString(25):-1!=n.indexOf("26")?(n=Number(n)).toString(26):-1!=n.indexOf("27")?(n=Number(n)).toString(27):-1!=n.indexOf("28")?(n=Number(n)).toString(28):-1!=n.indexOf("29")?(n=Number(n)).toString(29):(n=Number(n)).toString(36)};var M=function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.random=function(n){return Math.floor(Math.random()*n)},this.sqrt=function(n){return Math.sqrt(n)},this.repetition=function(n){for(var e=1,t=2;t<=n;t++)e*=t;return e},this.ncr=function(n,e){var t,r,i,o=1;for(i=n,r=e,t=0;0==t;)if(1==e&&(i*=e),0==--e)t++;else{if(0==--n){t++;break}i*=n}for(var a=2;a<=r;a++)o*=a;return i/=o},this.ncrs=function(n,e){return n=n+e-1,n=Maths.ncr(n,e)},this.gcd=function(n,e){var t,r;for(n<e&&(r=n,n=e,e=r),t=n%e;0!=t;)t=(n=e)%(e=t);return e},this.npr=function(n,e){var t,r=0;for(t=n;0==r;)if(1==e&&(t*=e),0==--e)r++;else{if(0==--n){r++;break}t*=n}return t},this.ratio=function(n,e,t,r){return(n*=r)<(e*=t)?e%n==0?e/n:"".concat(n,"/").concat(e):n%e==0?n/e:"".concat(e,"/").concat(n)},this.diagonal=function(n){return n=n*(n-3)/2},this.pow=function(n,e){for(var t=n,r=2;r<=e;r++)t*=n;return t},this.cone=function(n,e){return(e*=n*=n)%3==0?e/3:"".concat(e,"/3")},this.pMultiplicative=function(n,e){return n="".concat(n*n,"+").concat(2*n*e,"+").concat(e*e)},this.rpMultiplicative=function(n,e){return n="(".concat(Math.sqrt(n),"+").concat(Math.sqrt(e),")^2")},this.mMultiplicative=function(n,e){return n="".concat(n*n,"-").concat(2*n*e,"+").concat(e*e)},this.rmMultiplicative=function(n,e){return n="(".concat(Math.sqrt(n),"-").concat(Math.sqrt(e),")^2")},this.pmMultiplicative=function(n,e){return n="".concat(n*n,"-").concat(e*e)},this.rpmMultiplicative=function(n,e){return n="(".concat(Math.sqrt(n),"+").concat(Math.sqrt(e),")(").concat(Math.sqrt(n),"-").concat(Math.sqrt(e),")")},this.Pythagorean=function(n,e){return n=n*n+e*e},this.rPythagorean=function(n,e){return n=n*n-e*e},this.Binarynumber=function(n){n=n.length;for(var e=1;e<n;e++)n=n,console.log(n);return n},this.k=function(n){return n+=273}};function T(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var O=new(function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n)}var e,t,r;return e=n,(t=[{key:"print",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";n=n.replace(/print/g,"console.log")}}])&&T(e.prototype,t),r&&T(e,r),n}());t(2);var E=function(n,e){document.getElementById(e).innerHTML=u(n)},j=function(n,e){document.getElementById(e).innerHTML=d(n)},S=function(n,e){document.getElementById(e).innerHTML="<div class=".concat(n.divcass," id=").concat(n.divid,">\n\t\t<a\n\t\thref=").concat(n.url,"\n\t\tid=").concat(n.aid,"\n\t\tclass=").concat(n.aclass," \n\t\t>\n\t\t\t<img\n\t\t\t\tsrc=").concat(n.img,'\n\t\t\t\talt=""\n\t\t\t\tclass=').concat(n.imgclass,"\n\t\t\t\tid=").concat(n.imgid,"\n\t\t\t/>\n\t\t</a>\n\t</div>")},F=function(n,e){document.getElementById(e).innerHTML='<div>\n\t\t\t\t<ul class="accordion-tabs-minimal">\n\t\t\t\t\t<li class="tab-header-and-content">\n\t\t\t\t\t\t<a href="#" class="tab-link is-active">'.concat(n.title1,'</a>\n\t\t\t\t\t\t<div class="tab-content" id="1">\n\t\t\t\t\t\t\t<p class="text-p-accordion" id="accordiontab-1">').concat(n.text1,'</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class="tab-header-and-content">\n\t\t\t\t\t\t<a href="#" class="tab-link">').concat(n.title2,'</a>\n\t\t\t\t\t\t<div class="tab-content" id="2">\n\t\t\t\t\t\t\t<p class="text-p-accordion" id="accordiontab-2">').concat(n.text2,'</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class="tab-header-and-content">\n\t\t\t\t\t\t<a href="#" class="tab-link">').concat(n.title3,'</a>\n\t\t\t\t\t\t<div class="tab-content" id="3">\n\t\t\t\t\t\t\t<p class="text-p-accordion" id="accordiontab-3">').concat(n.text3,'</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class="tab-header-and-content">\n\t\t\t\t\t\t<a href="#" class="tab-link">').concat(n.title4,'</a>\n\t\t\t\t\t\t<div class="tab-content" id="4">\n\t\t\t\t\t\t\t<p class="text-p-accordion" id="accordiontab-4">').concat(n.text4,"</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>")},N=function(n,e){document.getElementById(e).innerHTML="<div>\n\t\t\t\t<p>Producer: ".concat(n.producer,"</p>\n\t\t\t\t<p>Programming languages: ").concat(n.programming,"</p>\n\t\t\t</div>")},z=function(n){return Math.floor(Math.random()*n)},L=function(){var n,e,t,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,o=1;for(t=r,e=i,n=0;0==n;)if(1==i&&(t*=i),0==--i)n++;else{if(0==--r){n++;break}t*=r}for(var a=2;a<=e;a++)o*=a;return t/=o},H=function(n,e){for(var t=n,r=2;r<=e;r++)t*=n;return t},P=function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=1,t=2;t<=n;t++)e*=t;return e},I=function(n,e){var t,r=0;for(t=n;0==r;)if(1==e&&(t*=e),0==--e)r++;else{if(0==--n){r++;break}t*=n}return t},D=function(){var n,e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;for(t<r&&(e=t,t=r,r=e),n=t%r;0!=n;)n=(t=r)%(r=n);return r},q=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;return(n*=r)<(e*=t)?e%n==0?e/n:"".concat(n,"/").concat(e):n%e==0?n/e:"".concat(e,"/").concat(n)},R=function(n){return n=n*(n-3)/2},U=new M,_=function(){return new M},$=new function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.Colorid=function(n,e){document.getElementById(n).style.color=e},this.Colorclass=function(n,e){document.getElementsByClassName(n).style.color=e}},W=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2e3,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;arguments.length>3&&void 0!==arguments[3]||jp;e<3&&(n--,e+=12);var r=(n+Math.floor(n/4)-Math.floor(n/100)+Math.floor(n/400)+Math.floor((13*e+8)/5)+t)%7;return 0==r?en?r="Sunday":jp&&(r="日曜日"):1==r?en?r="Manday":jp&&(r="月曜日"):2==r?en?r="Tuesday":jp&&(r="火曜日"):3==r?en?r="Wedneday":jp&&(r="水曜日"):4==r?en?r="Thursday":jp&&(r="木曜日"):5==r?en?r="Friday":jp&&(r="金曜日"):en?r="Saturday":jp&&(r="土曜日"),r},J=function(n,e){return n.push(e)},G=function(n,e){return n=n*e/D(3,4)},Y=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return e=n+e,(n*=100)/e},Z=new Date,K=function(){console.log("Welcome to FCC You can take the tutorial by accessing this URL"),console.log("https://riya81.github.io/FCC/")},Q=i;e.a=Q},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var i=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(l," */")),o=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(n," */")}));return[t].concat(o).concat([i]).join("\n")}var a,c,l;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);r&&i[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),e.push(l))}},e}},function(n,e,t){},function(n,e,t){var r=t(4),i=t(5);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);n.exports=i.locals||{}},function(n,e,t){"use strict";var r,i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),a=[];function c(n){for(var e=-1,t=0;t<a.length;t++)if(a[t].identifier===n){e=t;break}return e}function l(n,e){for(var t={},r=[],i=0;i<n.length;i++){var o=n[i],l=e.base?o[0]+e.base:o[0],p=t[l]||0,s="".concat(l," ").concat(p);t[l]=p+1;var u=c(s),d={css:o[1],media:o[2],sourceMap:o[3]};-1!==u?(a[u].references++,a[u].updater(d)):a.push({identifier:s,updater:m(d,e),references:1}),r.push(s)}return r}function p(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var i=t.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var a=o(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var s,u=(s=[],function(n,e){return s[n]=e,s.filter(Boolean).join("\n")});function d(n,e,t,r){var i=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=u(e,i);else{var o=document.createTextNode(i),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(o,a[e]):n.appendChild(o)}}function f(n,e,t){var r=t.css,i=t.media,o=t.sourceMap;if(i?n.setAttribute("media",i):n.removeAttribute("media"),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var g=null,h=0;function m(n,e){var t,r,i;if(e.singleton){var o=h++;t=g||(g=p(e)),r=d.bind(null,t,o,!1),i=d.bind(null,t,o,!0)}else t=p(e),r=f.bind(null,t,e),i=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else i()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=i());var t=l(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var i=c(t[r]);a[i].references--}for(var o=l(n,e),p=0;p<t.length;p++){var s=c(t[p]);0===a[s].references&&(a[s].updater(),a.splice(s,1))}t=o}}}},function(n,e,t){"use strict";t.r(e);var r=t(1),i=t.n(r)()(!1);i.push([n.i,'@charset "UTF-8";\n/* Scss Document */\nhtml {\n  box-sizing: border-box;\n}\n\n*, *::after, *::before {\n  box-sizing: inherit;\n}\n\nbutton, input[type=button], input[type=reset], input[type=submit] {\n  appearance: none;\n  background-color: #1565c0;\n  border: 0;\n  border-radius: 3px;\n  color: #fff;\n  cursor: pointer;\n  display: inline-block;\n  /*font-family: $base-font-family;*/\n  font-size: 1em;\n  -webkit-font-smoothing: antialiased;\n  font-weight: 600;\n  line-height: 1;\n  padding: 0.75em 1.5em;\n  text-decoration: none;\n  transition: background-color 150ms ease;\n  user-select: none;\n  vertical-align: middle;\n  white-space: nowrap;\n}\nbutton:hover, button:focus, input[type=button]:hover, input[type=button]:focus, input[type=reset]:hover, input[type=reset]:focus, input[type=submit]:hover, input[type=submit]:focus {\n  background-color: #11519a;\n  color: #fff;\n}\nbutton:disabled, input[type=button]:disabled, input[type=reset]:disabled, input[type=submit]:disabled {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\nbutton:disabled:hover, input[type=button]:disabled:hover, input[type=reset]:disabled:hover, input[type=submit]:disabled:hover {\n  background-color: #1565c0;\n}\n\nfieldset {\n  background-color: transparent;\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  font-weight: 600;\n  margin-bottom: 0.375em;\n  padding: 0;\n}\n\nlabel {\n  display: block;\n  font-weight: 600;\n  margin-bottom: 0.375em;\n}\n\ninput,\nselect {\n  display: block;\n  /*font-family: $base-font-family;*/\n  font-size: 1em;\n}\n\ninput[type=color], input[type=date], input[type=datetime], input[type=datetime-local], input[type=email], input[type=month], input[type=number], input[type=password], input[type=search], input[type=tel], input[type=text], input[type=time], input[type=url], input[type=week], input:not([type]), textarea,\nselect[multiple] {\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.06);\n  box-sizing: border-box;\n  /*font-family: $base-font-family;*/\n  font-size: 1em;\n  margin-bottom: 0.75em;\n  padding: 0.5em;\n  transition: border-color 150ms ease;\n  width: 100%;\n}\ninput[type=color]:hover, input[type=date]:hover, input[type=datetime]:hover, input[type=datetime-local]:hover, input[type=email]:hover, input[type=month]:hover, input[type=number]:hover, input[type=password]:hover, input[type=search]:hover, input[type=tel]:hover, input[type=text]:hover, input[type=time]:hover, input[type=url]:hover, input[type=week]:hover, input:not([type]):hover, textarea:hover,\nselect[multiple]:hover {\n  border-color: #b1b1b1;\n}\ninput[type=color]:focus, input[type=date]:focus, input[type=datetime]:focus, input[type=datetime-local]:focus, input[type=email]:focus, input[type=month]:focus, input[type=number]:focus, input[type=password]:focus, input[type=search]:focus, input[type=tel]:focus, input[type=text]:focus, input[type=time]:focus, input[type=url]:focus, input[type=week]:focus, input:not([type]):focus, textarea:focus,\nselect[multiple]:focus {\n  border-color: #1565c0;\n  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.06), 0 0 5px rgba(18, 89, 169, 0.7);\n  outline: none;\n}\ninput[type=color]:disabled, input[type=date]:disabled, input[type=datetime]:disabled, input[type=datetime-local]:disabled, input[type=email]:disabled, input[type=month]:disabled, input[type=number]:disabled, input[type=password]:disabled, input[type=search]:disabled, input[type=tel]:disabled, input[type=text]:disabled, input[type=time]:disabled, input[type=url]:disabled, input[type=week]:disabled, input:not([type]):disabled, textarea:disabled,\nselect[multiple]:disabled {\n  background-color: #f2f2f2;\n  cursor: not-allowed;\n}\ninput[type=color]:disabled:hover, input[type=date]:disabled:hover, input[type=datetime]:disabled:hover, input[type=datetime-local]:disabled:hover, input[type=email]:disabled:hover, input[type=month]:disabled:hover, input[type=number]:disabled:hover, input[type=password]:disabled:hover, input[type=search]:disabled:hover, input[type=tel]:disabled:hover, input[type=text]:disabled:hover, input[type=time]:disabled:hover, input[type=url]:disabled:hover, input[type=week]:disabled:hover, input:not([type]):disabled:hover, textarea:disabled:hover,\nselect[multiple]:disabled:hover {\n  border: 1px solid #ddd;\n}\n\ntextarea {\n  resize: vertical;\n}\n\n[type=search] {\n  appearance: none;\n}\n\n[type=checkbox],\n[type=radio] {\n  display: inline;\n  margin-right: 0.375em;\n}\n\n[type=file] {\n  margin-bottom: 0.75em;\n  width: 100%;\n}\n\nselect {\n  margin-bottom: 1.5em;\n  max-width: 100%;\n  width: auto;\n}\n\nul,\nol {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\ndl {\n  margin-bottom: 0.75em;\n}\ndl dt {\n  font-weight: 600;\n  margin-top: 0.75em;\n}\ndl dd {\n  margin: 0;\n}\n\ntable {\n  border-collapse: collapse;\n  margin: 0.75em 0;\n  table-layout: fixed;\n  width: 100%;\n}\n\nth {\n  border-bottom: 1px solid #a6a6a6;\n  font-weight: 600;\n  padding: 0.75em 0;\n  text-align: left;\n}\n\ntd {\n  border-bottom: 1px solid #ddd;\n  padding: 0.75em 0;\n}\n\ntr,\ntd,\nth {\n  vertical-align: middle;\n}\n\nbody {\n  color: #333;\n  /*font-family: $base-font-family;*/\n  font-size: 1em;\n  line-height: 1.5;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  /*font-family: $heading-font-family;*/\n  /*font-size: $base-font-size;*/\n  line-height: 1.2;\n  margin: 0 0 0.75em;\n}\n\np {\n  margin: 0 0 0.75em;\n}\n\na {\n  color: #1565c0;\n  text-decoration: none;\n  transition: color 150ms ease;\n}\na:active, a:focus, a:hover {\n  color: #104c90;\n}\n\nhr {\n  border-bottom: 1px solid #ddd;\n  border-left: 0;\n  border-right: 0;\n  border-top: 0;\n  margin: 1.5em 0;\n}\n\nimg,\npicture {\n  margin: 0;\n  max-width: 100%;\n}\n\nbody {\n  margin: 0px;\n  z-index: 0;\n}\nbody a {\n  cursor: pointer;\n}\nbody .link-study {\n  cursor: pointer;\n}\nbody .pointer {\n  cursor: pointer;\n}\n\n.Side-by-side {\n  display: inline-block;\n}\n\n.text-p {\n  font-weight: lighter;\n  font-size: 30px;\n}\n\n.not {\n  display: none;\n}\n\n.active {\n  display: block;\n}\n\n.btn-top {\n  margin-top: 10px;\n}\n\nbody {\n  text-align: center;\n}\nbody header {\n  width: 100%;\n  margin: 0px auto;\n  background-color: #2e2e2e;\n  height: 50px;\n  position: fixed;\n  top: 0px;\n  z-index: 10;\n}\nbody header .head {\n  text-align: center;\n}\nbody header .head p {\n  margin-top: 5px;\n  margin-bottom: 40px;\n  color: white;\n  font-size: 25px;\n}\nbody header .button-dark {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n}\nbody .top {\n  padding: 100px 0px 100px 0px;\n}\nbody .po {\n  width: 25%;\n}\nbody .lo {\n  width: 30%;\n}\nbody .tag {\n  margin: 0px auto;\n  border-bottom: solid 3px #364e96;\n}\nbody .he {\n  padding-top: 10px;\n  width: 25%;\n  margin: 0px auto;\n}\nbody .he p {\n  color: white;\n  /*文字色*/\n  padding: 0.5em;\n  /*文字周りの余白*/\n  display: inline-block;\n  line-height: 1.3;\n  /*行高*/\n  background: #364e96;\n  /*背景色*/\n  vertical-align: middle;\n  border-radius: 25px 0px 0px 25px;\n  /*左側の角を丸く*/\n}\nbody .he p:before {\n  content: "●";\n  color: white;\n  margin-right: 8px;\n}\nbody .mi {\n  width: 5%;\n}\nbody .btn {\n  display: inline-block;\n  padding: 7px 20px;\n  border-radius: 25px;\n  text-decoration: none;\n  color: #fff;\n  background-image: linear-gradient(45deg, #364e96 0%, #6981c9 100%);\n  transition: 0.4s;\n}\nbody .btn:hover {\n  background-image: linear-gradient(45deg, #364e96 0%, #6981c9 100%);\n}\nbody .set {\n  padding-top: 10px;\n  color: white;\n  width: 25%;\n  margin: 0px auto;\n}\nbody .set p {\n  position: relative;\n  padding: 8px 15px;\n  margin-left: 40px;\n  background: #364e96;\n  border-radius: 20px;\n}\nbody .set p:before {\n  font-family: "Font Awesome 5 Free";\n  content: "";\n  font-weight: 900;\n  position: absolute;\n  font-size: 15px;\n  left: -40px;\n  bottom: 0;\n  color: #364e96;\n}\nbody .set p:after {\n  font-family: "Font Awesome 5 Free";\n  content: "";\n  font-weight: 900;\n  position: absolute;\n  font-size: 23px;\n  left: -23px;\n  bottom: 0;\n  color: #364e96;\n}\nbody p {\n  font-size: 20px;\n}\nbody .jscode {\n  font-size: 20px;\n  color: #8bdf4c;\n  width: 25%;\n  margin: 0px auto;\n  background-color: #364549;\n}\nbody .jscode p {\n  font-size: 1em;\n  margin: 5px 0px 0px 0px;\n}\nbody .f {\n  color: aqua;\n}\nbody .d {\n  color: white;\n}\nbody .i {\n  color: #ff8095;\n}\nbody .l {\n  color: #8bdf4c;\n}\nbody .vc {\n  color: #ebd247;\n}',""]),e.default=i},,,function(n,e,t){"use strict";t.r(e);var r=t(0);t(3);r.a.Maths,r.a.Html.jscode("root","\n<div>\n<h1>Math</h1>\n</div>\n")}]);