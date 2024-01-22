(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const il="156",Mr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Sr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Xh=0,Ul=1,qh=2,Au=1,jh=2,Mi=3,Vi=0,wn=1,ai=2,Bi=0,Xr=1,Nl=2,Fl=3,Ol=4,Yh=5,Hr=100,$h=101,Zh=102,Bl=103,zl=104,Kh=200,Qh=201,Jh=202,ed=203,Cu=204,Ru=205,td=206,nd=207,id=208,rd=209,sd=210,od=0,ad=1,ld=2,Wa=3,cd=4,ud=5,hd=6,dd=7,Pu=0,fd=1,pd=2,zi=0,md=1,gd=2,_d=3,vd=4,xd=5,Lu=300,jr=301,Yr=302,Xa=303,qa=304,Io=306,ja=1e3,Kn=1001,Ya=1002,yn=1003,Hl=1004,na=1005,kn=1006,yd=1007,Ts=1008,Hi=1009,Md=1010,Sd=1011,rl=1012,Du=1013,Fi=1014,Oi=1015,ws=1016,Iu=1017,Uu=1018,lr=1020,Ed=1021,Qn=1023,bd=1024,Td=1025,cr=1026,$r=1027,wd=1028,Nu=1029,Ad=1030,Fu=1031,Ou=1033,ia=33776,ra=33777,sa=33778,oa=33779,kl=35840,Gl=35841,Vl=35842,Wl=35843,Cd=36196,Xl=37492,ql=37496,jl=37808,Yl=37809,$l=37810,Zl=37811,Kl=37812,Ql=37813,Jl=37814,ec=37815,tc=37816,nc=37817,ic=37818,rc=37819,sc=37820,oc=37821,aa=36492,ac=36494,lc=36495,Rd=36283,cc=36284,uc=36285,hc=36286,Bu=3e3,ur=3001,Pd=3200,Ld=3201,Dd=0,Id=1,hr="",Bt="srgb",ui="srgb-linear",Uo="display-p3",la=7680,Ud=519,Nd=512,Fd=513,Od=514,Bd=515,zd=516,Hd=517,kd=518,Gd=519,dc=35044,fc="300 es",$a=1035,Ei=2e3,Co=2001;class _r{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let o=0,a=r.length;o<a;o++)r[o].call(this,e);e.target=null}}}const hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let pc=1234567;const Ms=Math.PI/180,As=180/Math.PI;function Kr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[t&63|128]+hn[t>>8&255]+"-"+hn[t>>16&255]+hn[t>>24&255]+hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]).toLowerCase()}function sn(i,e,t){return Math.max(e,Math.min(t,i))}function sl(i,e){return(i%e+e)%e}function Vd(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Wd(i,e,t){return i!==e?(t-i)/(e-i):0}function Ss(i,e,t){return(1-t)*i+t*e}function Xd(i,e,t,n){return Ss(i,e,1-Math.exp(-t*n))}function qd(i,e=1){return e-Math.abs(sl(i,e*2)-e)}function jd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Yd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function $d(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Zd(i,e){return i+Math.random()*(e-i)}function Kd(i){return i*(.5-Math.random())}function Qd(i){i!==void 0&&(pc=i);let e=pc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Jd(i){return i*Ms}function ef(i){return i*As}function Za(i){return(i&i-1)===0&&i!==0}function tf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ro(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function nf(i,e,t,n,r){const o=Math.cos,a=Math.sin,c=o(t/2),d=a(t/2),f=o((e+n)/2),m=a((e+n)/2),v=o((e-n)/2),_=a((e-n)/2),y=o((n-e)/2),E=a((n-e)/2);switch(r){case"XYX":i.set(c*m,d*v,d*_,c*f);break;case"YZY":i.set(d*_,c*m,d*v,c*f);break;case"ZXZ":i.set(d*v,d*_,c*m,c*f);break;case"XZX":i.set(c*m,d*E,d*y,c*f);break;case"YXY":i.set(d*y,c*m,d*E,c*f);break;case"ZYZ":i.set(d*E,d*y,c*m,c*f);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function kr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function vn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const rf={DEG2RAD:Ms,RAD2DEG:As,generateUUID:Kr,clamp:sn,euclideanModulo:sl,mapLinear:Vd,inverseLerp:Wd,lerp:Ss,damp:Xd,pingpong:qd,smoothstep:jd,smootherstep:Yd,randInt:$d,randFloat:Zd,randFloatSpread:Kd,seededRandom:Qd,degToRad:Jd,radToDeg:ef,isPowerOfTwo:Za,ceilPowerOfTwo:tf,floorPowerOfTwo:Ro,setQuaternionFromProperEuler:nf,normalize:vn,denormalize:kr};class et{constructor(e=0,t=0){et.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(sn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),o=this.x-e.x,a=this.y-e.y;return this.x=o*n-a*r+e.x,this.y=o*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class vt{constructor(e,t,n,r,o,a,c,d,f){vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,a,c,d,f)}set(e,t,n,r,o,a,c,d,f){const m=this.elements;return m[0]=e,m[1]=r,m[2]=c,m[3]=t,m[4]=o,m[5]=d,m[6]=n,m[7]=a,m[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,o=this.elements,a=n[0],c=n[3],d=n[6],f=n[1],m=n[4],v=n[7],_=n[2],y=n[5],E=n[8],b=r[0],x=r[3],g=r[6],P=r[1],w=r[4],L=r[7],N=r[2],u=r[5],F=r[8];return o[0]=a*b+c*P+d*N,o[3]=a*x+c*w+d*u,o[6]=a*g+c*L+d*F,o[1]=f*b+m*P+v*N,o[4]=f*x+m*w+v*u,o[7]=f*g+m*L+v*F,o[2]=_*b+y*P+E*N,o[5]=_*x+y*w+E*u,o[8]=_*g+y*L+E*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],a=e[4],c=e[5],d=e[6],f=e[7],m=e[8];return t*a*m-t*c*f-n*o*m+n*c*d+r*o*f-r*a*d}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],a=e[4],c=e[5],d=e[6],f=e[7],m=e[8],v=m*a-c*f,_=c*d-m*o,y=f*o-a*d,E=t*v+n*_+r*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/E;return e[0]=v*b,e[1]=(r*f-m*n)*b,e[2]=(c*n-r*a)*b,e[3]=_*b,e[4]=(m*t-r*d)*b,e[5]=(r*o-c*t)*b,e[6]=y*b,e[7]=(n*d-f*t)*b,e[8]=(a*t-n*o)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,o,a,c){const d=Math.cos(o),f=Math.sin(o);return this.set(n*d,n*f,-n*(d*a+f*c)+a+e,-r*f,r*d,-r*(-f*a+d*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(ca.makeScale(e,t)),this}rotate(e){return this.premultiply(ca.makeRotation(-e)),this}translate(e,t){return this.premultiply(ca.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ca=new vt;function zu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Po(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function sf(){const i=Po("canvas");return i.style.display="block",i}const mc={};function Es(i){i in mc||(mc[i]=!0,console.warn(i))}function qr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ua(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const of=new vt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),af=new vt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function lf(i){return i.convertSRGBToLinear().applyMatrix3(af)}function cf(i){return i.applyMatrix3(of).convertLinearToSRGB()}const uf={[ui]:i=>i,[Bt]:i=>i.convertSRGBToLinear(),[Uo]:lf},hf={[ui]:i=>i,[Bt]:i=>i.convertLinearToSRGB(),[Uo]:cf},qn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return ui},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=uf[e],r=hf[t];if(n===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}};let Er;class Hu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Er===void 0&&(Er=Po("canvas")),Er.width=e.width,Er.height=e.height;const n=Er.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Er}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Po("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),o=r.data;for(let a=0;a<o.length;a++)o[a]=qr(o[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(qr(t[n]/255)*255):t[n]=qr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let df=0;class ku{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:df++}),this.uuid=Kr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let a=0,c=r.length;a<c;a++)r[a].isDataTexture?o.push(ha(r[a].image)):o.push(ha(r[a]))}else o=ha(r);n.url=o}return t||(e.images[this.uuid]=n),n}}function ha(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Hu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ff=0;class Fn extends _r{constructor(e=Fn.DEFAULT_IMAGE,t=Fn.DEFAULT_MAPPING,n=Kn,r=Kn,o=kn,a=Ts,c=Qn,d=Hi,f=Fn.DEFAULT_ANISOTROPY,m=hr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=Kr(),this.name="",this.source=new ku(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=o,this.minFilter=a,this.anisotropy=f,this.format=c,this.internalFormat=null,this.type=d,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof m=="string"?this.colorSpace=m:(Es("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=m===ur?Bt:hr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ja:e.x=e.x-Math.floor(e.x);break;case Kn:e.x=e.x<0?0:1;break;case Ya:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ja:e.y=e.y-Math.floor(e.y);break;case Kn:e.y=e.y<0?0:1;break;case Ya:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Es("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Bt?ur:Bu}set encoding(e){Es("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ur?Bt:hr}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=Lu;Fn.DEFAULT_ANISOTROPY=1;class on{constructor(e=0,t=0,n=0,r=1){on.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,o=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*o,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*o,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*o,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,o;const d=e.elements,f=d[0],m=d[4],v=d[8],_=d[1],y=d[5],E=d[9],b=d[2],x=d[6],g=d[10];if(Math.abs(m-_)<.01&&Math.abs(v-b)<.01&&Math.abs(E-x)<.01){if(Math.abs(m+_)<.1&&Math.abs(v+b)<.1&&Math.abs(E+x)<.1&&Math.abs(f+y+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(f+1)/2,L=(y+1)/2,N=(g+1)/2,u=(m+_)/4,F=(v+b)/4,q=(E+x)/4;return w>L&&w>N?w<.01?(n=0,r=.707106781,o=.707106781):(n=Math.sqrt(w),r=u/n,o=F/n):L>N?L<.01?(n=.707106781,r=0,o=.707106781):(r=Math.sqrt(L),n=u/r,o=q/r):N<.01?(n=.707106781,r=.707106781,o=0):(o=Math.sqrt(N),n=F/o,r=q/o),this.set(n,r,o,t),this}let P=Math.sqrt((x-E)*(x-E)+(v-b)*(v-b)+(_-m)*(_-m));return Math.abs(P)<.001&&(P=1),this.x=(x-E)/P,this.y=(v-b)/P,this.z=(_-m)/P,this.w=Math.acos((f+y+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pf extends _r{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new on(0,0,e,t),this.scissorTest=!1,this.viewport=new on(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(Es("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ur?Bt:hr),this.texture=new Fn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:kn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ku(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pr extends pf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Gu extends Fn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=yn,this.minFilter=yn,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mf extends Fn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=yn,this.minFilter=yn,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ln{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,o,a,c){let d=n[r+0],f=n[r+1],m=n[r+2],v=n[r+3];const _=o[a+0],y=o[a+1],E=o[a+2],b=o[a+3];if(c===0){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=v;return}if(c===1){e[t+0]=_,e[t+1]=y,e[t+2]=E,e[t+3]=b;return}if(v!==b||d!==_||f!==y||m!==E){let x=1-c;const g=d*_+f*y+m*E+v*b,P=g>=0?1:-1,w=1-g*g;if(w>Number.EPSILON){const N=Math.sqrt(w),u=Math.atan2(N,g*P);x=Math.sin(x*u)/N,c=Math.sin(c*u)/N}const L=c*P;if(d=d*x+_*L,f=f*x+y*L,m=m*x+E*L,v=v*x+b*L,x===1-c){const N=1/Math.sqrt(d*d+f*f+m*m+v*v);d*=N,f*=N,m*=N,v*=N}}e[t]=d,e[t+1]=f,e[t+2]=m,e[t+3]=v}static multiplyQuaternionsFlat(e,t,n,r,o,a){const c=n[r],d=n[r+1],f=n[r+2],m=n[r+3],v=o[a],_=o[a+1],y=o[a+2],E=o[a+3];return e[t]=c*E+m*v+d*y-f*_,e[t+1]=d*E+m*_+f*v-c*y,e[t+2]=f*E+m*y+c*_-d*v,e[t+3]=m*E-c*v-d*_-f*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,o=e._z,a=e._order,c=Math.cos,d=Math.sin,f=c(n/2),m=c(r/2),v=c(o/2),_=d(n/2),y=d(r/2),E=d(o/2);switch(a){case"XYZ":this._x=_*m*v+f*y*E,this._y=f*y*v-_*m*E,this._z=f*m*E+_*y*v,this._w=f*m*v-_*y*E;break;case"YXZ":this._x=_*m*v+f*y*E,this._y=f*y*v-_*m*E,this._z=f*m*E-_*y*v,this._w=f*m*v+_*y*E;break;case"ZXY":this._x=_*m*v-f*y*E,this._y=f*y*v+_*m*E,this._z=f*m*E+_*y*v,this._w=f*m*v-_*y*E;break;case"ZYX":this._x=_*m*v-f*y*E,this._y=f*y*v+_*m*E,this._z=f*m*E-_*y*v,this._w=f*m*v+_*y*E;break;case"YZX":this._x=_*m*v+f*y*E,this._y=f*y*v+_*m*E,this._z=f*m*E-_*y*v,this._w=f*m*v-_*y*E;break;case"XZY":this._x=_*m*v-f*y*E,this._y=f*y*v-_*m*E,this._z=f*m*E+_*y*v,this._w=f*m*v+_*y*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],o=t[8],a=t[1],c=t[5],d=t[9],f=t[2],m=t[6],v=t[10],_=n+c+v;if(_>0){const y=.5/Math.sqrt(_+1);this._w=.25/y,this._x=(m-d)*y,this._y=(o-f)*y,this._z=(a-r)*y}else if(n>c&&n>v){const y=2*Math.sqrt(1+n-c-v);this._w=(m-d)/y,this._x=.25*y,this._y=(r+a)/y,this._z=(o+f)/y}else if(c>v){const y=2*Math.sqrt(1+c-n-v);this._w=(o-f)/y,this._x=(r+a)/y,this._y=.25*y,this._z=(d+m)/y}else{const y=2*Math.sqrt(1+v-n-c);this._w=(a-r)/y,this._x=(o+f)/y,this._y=(d+m)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(sn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,o=e._z,a=e._w,c=t._x,d=t._y,f=t._z,m=t._w;return this._x=n*m+a*c+r*f-o*d,this._y=r*m+a*d+o*c-n*f,this._z=o*m+a*f+n*d-r*c,this._w=a*m-n*c-r*d-o*f,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,o=this._z,a=this._w;let c=a*e._w+n*e._x+r*e._y+o*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=a,this._x=n,this._y=r,this._z=o,this;const d=1-c*c;if(d<=Number.EPSILON){const y=1-t;return this._w=y*a+t*this._w,this._x=y*n+t*this._x,this._y=y*r+t*this._y,this._z=y*o+t*this._z,this.normalize(),this._onChangeCallback(),this}const f=Math.sqrt(d),m=Math.atan2(f,c),v=Math.sin((1-t)*m)/f,_=Math.sin(t*m)/f;return this._w=a*v+this._w*_,this._x=n*v+this._x*_,this._y=r*v+this._y*_,this._z=o*v+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(o),n*Math.cos(o),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,n=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*r,this.y=o[1]*t+o[4]*n+o[7]*r,this.z=o[2]*t+o[5]*n+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,o=e.elements,a=1/(o[3]*t+o[7]*n+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*r+o[12])*a,this.y=(o[1]*t+o[5]*n+o[9]*r+o[13])*a,this.z=(o[2]*t+o[6]*n+o[10]*r+o[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,o=e.x,a=e.y,c=e.z,d=e.w,f=d*t+a*r-c*n,m=d*n+c*t-o*r,v=d*r+o*n-a*t,_=-o*t-a*n-c*r;return this.x=f*d+_*-o+m*-c-v*-a,this.y=m*d+_*-a+v*-o-f*-c,this.z=v*d+_*-c+f*-a-m*-o,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r,this.y=o[1]*t+o[5]*n+o[9]*r,this.z=o[2]*t+o[6]*n+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,o=e.z,a=t.x,c=t.y,d=t.z;return this.x=r*d-o*c,this.y=o*a-n*d,this.z=n*c-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return da.copy(this).projectOnVector(e),this.sub(da)}reflect(e){return this.sub(da.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(sn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const da=new z,gc=new ln;class Ds{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(gi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(gi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=gi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),br.copy(e.boundingBox),br.applyMatrix4(e.matrixWorld),this.union(br);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const o=r.attributes.position;for(let a=0,c=o.count;a<c;a++)gi.fromBufferAttribute(o,a).applyMatrix4(e.matrixWorld),this.expandByPoint(gi)}else r.boundingBox===null&&r.computeBoundingBox(),br.copy(r.boundingBox),br.applyMatrix4(e.matrixWorld),this.union(br)}const n=e.children;for(let r=0,o=n.length;r<o;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,gi),gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(hs),js.subVectors(this.max,hs),Tr.subVectors(e.a,hs),wr.subVectors(e.b,hs),Ar.subVectors(e.c,hs),Ri.subVectors(wr,Tr),Pi.subVectors(Ar,wr),Qi.subVectors(Tr,Ar);let t=[0,-Ri.z,Ri.y,0,-Pi.z,Pi.y,0,-Qi.z,Qi.y,Ri.z,0,-Ri.x,Pi.z,0,-Pi.x,Qi.z,0,-Qi.x,-Ri.y,Ri.x,0,-Pi.y,Pi.x,0,-Qi.y,Qi.x,0];return!fa(t,Tr,wr,Ar,js)||(t=[1,0,0,0,1,0,0,0,1],!fa(t,Tr,wr,Ar,js))?!1:(Ys.crossVectors(Ri,Pi),t=[Ys.x,Ys.y,Ys.z],fa(t,Tr,wr,Ar,js))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const mi=[new z,new z,new z,new z,new z,new z,new z,new z],gi=new z,br=new Ds,Tr=new z,wr=new z,Ar=new z,Ri=new z,Pi=new z,Qi=new z,hs=new z,js=new z,Ys=new z,Ji=new z;function fa(i,e,t,n,r){for(let o=0,a=i.length-3;o<=a;o+=3){Ji.fromArray(i,o);const c=r.x*Math.abs(Ji.x)+r.y*Math.abs(Ji.y)+r.z*Math.abs(Ji.z),d=e.dot(Ji),f=t.dot(Ji),m=n.dot(Ji);if(Math.max(-Math.max(d,f,m),Math.min(d,f,m))>c)return!1}return!0}const gf=new Ds,ds=new z,pa=new z;class No{constructor(e=new z,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):gf.setFromPoints(e).getCenter(n);let r=0;for(let o=0,a=e.length;o<a;o++)r=Math.max(r,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ds.subVectors(e,this.center);const t=ds.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(ds,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ds.copy(e.center).add(pa)),this.expandByPoint(ds.copy(e.center).sub(pa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _i=new z,ma=new z,$s=new z,Li=new z,ga=new z,Zs=new z,_a=new z;class Fo{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_i)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=_i.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_i.copy(this.origin).addScaledVector(this.direction,t),_i.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ma.copy(e).add(t).multiplyScalar(.5),$s.copy(t).sub(e).normalize(),Li.copy(this.origin).sub(ma);const o=e.distanceTo(t)*.5,a=-this.direction.dot($s),c=Li.dot(this.direction),d=-Li.dot($s),f=Li.lengthSq(),m=Math.abs(1-a*a);let v,_,y,E;if(m>0)if(v=a*d-c,_=a*c-d,E=o*m,v>=0)if(_>=-E)if(_<=E){const b=1/m;v*=b,_*=b,y=v*(v+a*_+2*c)+_*(a*v+_+2*d)+f}else _=o,v=Math.max(0,-(a*_+c)),y=-v*v+_*(_+2*d)+f;else _=-o,v=Math.max(0,-(a*_+c)),y=-v*v+_*(_+2*d)+f;else _<=-E?(v=Math.max(0,-(-a*o+c)),_=v>0?-o:Math.min(Math.max(-o,-d),o),y=-v*v+_*(_+2*d)+f):_<=E?(v=0,_=Math.min(Math.max(-o,-d),o),y=_*(_+2*d)+f):(v=Math.max(0,-(a*o+c)),_=v>0?o:Math.min(Math.max(-o,-d),o),y=-v*v+_*(_+2*d)+f);else _=a>0?-o:o,v=Math.max(0,-(a*_+c)),y=-v*v+_*(_+2*d)+f;return n&&n.copy(this.origin).addScaledVector(this.direction,v),r&&r.copy(ma).addScaledVector($s,_),y}intersectSphere(e,t){_i.subVectors(e.center,this.origin);const n=_i.dot(this.direction),r=_i.dot(_i)-n*n,o=e.radius*e.radius;if(r>o)return null;const a=Math.sqrt(o-r),c=n-a,d=n+a;return d<0?null:c<0?this.at(d,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,o,a,c,d;const f=1/this.direction.x,m=1/this.direction.y,v=1/this.direction.z,_=this.origin;return f>=0?(n=(e.min.x-_.x)*f,r=(e.max.x-_.x)*f):(n=(e.max.x-_.x)*f,r=(e.min.x-_.x)*f),m>=0?(o=(e.min.y-_.y)*m,a=(e.max.y-_.y)*m):(o=(e.max.y-_.y)*m,a=(e.min.y-_.y)*m),n>a||o>r||((o>n||isNaN(n))&&(n=o),(a<r||isNaN(r))&&(r=a),v>=0?(c=(e.min.z-_.z)*v,d=(e.max.z-_.z)*v):(c=(e.max.z-_.z)*v,d=(e.min.z-_.z)*v),n>d||c>r)||((c>n||n!==n)&&(n=c),(d<r||r!==r)&&(r=d),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,_i)!==null}intersectTriangle(e,t,n,r,o){ga.subVectors(t,e),Zs.subVectors(n,e),_a.crossVectors(ga,Zs);let a=this.direction.dot(_a),c;if(a>0){if(r)return null;c=1}else if(a<0)c=-1,a=-a;else return null;Li.subVectors(this.origin,e);const d=c*this.direction.dot(Zs.crossVectors(Li,Zs));if(d<0)return null;const f=c*this.direction.dot(ga.cross(Li));if(f<0||d+f>a)return null;const m=-c*Li.dot(_a);return m<0?null:this.at(m/a,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class It{constructor(e,t,n,r,o,a,c,d,f,m,v,_,y,E,b,x){It.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,a,c,d,f,m,v,_,y,E,b,x)}set(e,t,n,r,o,a,c,d,f,m,v,_,y,E,b,x){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=o,g[5]=a,g[9]=c,g[13]=d,g[2]=f,g[6]=m,g[10]=v,g[14]=_,g[3]=y,g[7]=E,g[11]=b,g[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new It().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Cr.setFromMatrixColumn(e,0).length(),o=1/Cr.setFromMatrixColumn(e,1).length(),a=1/Cr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,o=e.z,a=Math.cos(n),c=Math.sin(n),d=Math.cos(r),f=Math.sin(r),m=Math.cos(o),v=Math.sin(o);if(e.order==="XYZ"){const _=a*m,y=a*v,E=c*m,b=c*v;t[0]=d*m,t[4]=-d*v,t[8]=f,t[1]=y+E*f,t[5]=_-b*f,t[9]=-c*d,t[2]=b-_*f,t[6]=E+y*f,t[10]=a*d}else if(e.order==="YXZ"){const _=d*m,y=d*v,E=f*m,b=f*v;t[0]=_+b*c,t[4]=E*c-y,t[8]=a*f,t[1]=a*v,t[5]=a*m,t[9]=-c,t[2]=y*c-E,t[6]=b+_*c,t[10]=a*d}else if(e.order==="ZXY"){const _=d*m,y=d*v,E=f*m,b=f*v;t[0]=_-b*c,t[4]=-a*v,t[8]=E+y*c,t[1]=y+E*c,t[5]=a*m,t[9]=b-_*c,t[2]=-a*f,t[6]=c,t[10]=a*d}else if(e.order==="ZYX"){const _=a*m,y=a*v,E=c*m,b=c*v;t[0]=d*m,t[4]=E*f-y,t[8]=_*f+b,t[1]=d*v,t[5]=b*f+_,t[9]=y*f-E,t[2]=-f,t[6]=c*d,t[10]=a*d}else if(e.order==="YZX"){const _=a*d,y=a*f,E=c*d,b=c*f;t[0]=d*m,t[4]=b-_*v,t[8]=E*v+y,t[1]=v,t[5]=a*m,t[9]=-c*m,t[2]=-f*m,t[6]=y*v+E,t[10]=_-b*v}else if(e.order==="XZY"){const _=a*d,y=a*f,E=c*d,b=c*f;t[0]=d*m,t[4]=-v,t[8]=f*m,t[1]=_*v+b,t[5]=a*m,t[9]=y*v-E,t[2]=E*v-y,t[6]=c*m,t[10]=b*v+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_f,e,vf)}lookAt(e,t,n){const r=this.elements;return Dn.subVectors(e,t),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),Di.crossVectors(n,Dn),Di.lengthSq()===0&&(Math.abs(n.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),Di.crossVectors(n,Dn)),Di.normalize(),Ks.crossVectors(Dn,Di),r[0]=Di.x,r[4]=Ks.x,r[8]=Dn.x,r[1]=Di.y,r[5]=Ks.y,r[9]=Dn.y,r[2]=Di.z,r[6]=Ks.z,r[10]=Dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,o=this.elements,a=n[0],c=n[4],d=n[8],f=n[12],m=n[1],v=n[5],_=n[9],y=n[13],E=n[2],b=n[6],x=n[10],g=n[14],P=n[3],w=n[7],L=n[11],N=n[15],u=r[0],F=r[4],q=r[8],R=r[12],I=r[1],fe=r[5],oe=r[9],Y=r[13],J=r[2],te=r[6],_e=r[10],le=r[14],de=r[3],ve=r[7],ge=r[11],$=r[15];return o[0]=a*u+c*I+d*J+f*de,o[4]=a*F+c*fe+d*te+f*ve,o[8]=a*q+c*oe+d*_e+f*ge,o[12]=a*R+c*Y+d*le+f*$,o[1]=m*u+v*I+_*J+y*de,o[5]=m*F+v*fe+_*te+y*ve,o[9]=m*q+v*oe+_*_e+y*ge,o[13]=m*R+v*Y+_*le+y*$,o[2]=E*u+b*I+x*J+g*de,o[6]=E*F+b*fe+x*te+g*ve,o[10]=E*q+b*oe+x*_e+g*ge,o[14]=E*R+b*Y+x*le+g*$,o[3]=P*u+w*I+L*J+N*de,o[7]=P*F+w*fe+L*te+N*ve,o[11]=P*q+w*oe+L*_e+N*ge,o[15]=P*R+w*Y+L*le+N*$,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],o=e[12],a=e[1],c=e[5],d=e[9],f=e[13],m=e[2],v=e[6],_=e[10],y=e[14],E=e[3],b=e[7],x=e[11],g=e[15];return E*(+o*d*v-r*f*v-o*c*_+n*f*_+r*c*y-n*d*y)+b*(+t*d*y-t*f*_+o*a*_-r*a*y+r*f*m-o*d*m)+x*(+t*f*v-t*c*y-o*a*v+n*a*y+o*c*m-n*f*m)+g*(-r*c*m-t*d*v+t*c*_+r*a*v-n*a*_+n*d*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],a=e[4],c=e[5],d=e[6],f=e[7],m=e[8],v=e[9],_=e[10],y=e[11],E=e[12],b=e[13],x=e[14],g=e[15],P=v*x*f-b*_*f+b*d*y-c*x*y-v*d*g+c*_*g,w=E*_*f-m*x*f-E*d*y+a*x*y+m*d*g-a*_*g,L=m*b*f-E*v*f+E*c*y-a*b*y-m*c*g+a*v*g,N=E*v*d-m*b*d-E*c*_+a*b*_+m*c*x-a*v*x,u=t*P+n*w+r*L+o*N;if(u===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/u;return e[0]=P*F,e[1]=(b*_*o-v*x*o-b*r*y+n*x*y+v*r*g-n*_*g)*F,e[2]=(c*x*o-b*d*o+b*r*f-n*x*f-c*r*g+n*d*g)*F,e[3]=(v*d*o-c*_*o-v*r*f+n*_*f+c*r*y-n*d*y)*F,e[4]=w*F,e[5]=(m*x*o-E*_*o+E*r*y-t*x*y-m*r*g+t*_*g)*F,e[6]=(E*d*o-a*x*o-E*r*f+t*x*f+a*r*g-t*d*g)*F,e[7]=(a*_*o-m*d*o+m*r*f-t*_*f-a*r*y+t*d*y)*F,e[8]=L*F,e[9]=(E*v*o-m*b*o-E*n*y+t*b*y+m*n*g-t*v*g)*F,e[10]=(a*b*o-E*c*o+E*n*f-t*b*f-a*n*g+t*c*g)*F,e[11]=(m*c*o-a*v*o-m*n*f+t*v*f+a*n*y-t*c*y)*F,e[12]=N*F,e[13]=(m*b*r-E*v*r+E*n*_-t*b*_-m*n*x+t*v*x)*F,e[14]=(E*c*r-a*b*r-E*n*d+t*b*d+a*n*x-t*c*x)*F,e[15]=(a*v*r-m*c*r+m*n*d-t*v*d-a*n*_+t*c*_)*F,this}scale(e){const t=this.elements,n=e.x,r=e.y,o=e.z;return t[0]*=n,t[4]*=r,t[8]*=o,t[1]*=n,t[5]*=r,t[9]*=o,t[2]*=n,t[6]*=r,t[10]*=o,t[3]*=n,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),o=1-n,a=e.x,c=e.y,d=e.z,f=o*a,m=o*c;return this.set(f*a+n,f*c-r*d,f*d+r*c,0,f*c+r*d,m*c+n,m*d-r*a,0,f*d-r*c,m*d+r*a,o*d*d+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,o,a){return this.set(1,n,o,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,o=t._x,a=t._y,c=t._z,d=t._w,f=o+o,m=a+a,v=c+c,_=o*f,y=o*m,E=o*v,b=a*m,x=a*v,g=c*v,P=d*f,w=d*m,L=d*v,N=n.x,u=n.y,F=n.z;return r[0]=(1-(b+g))*N,r[1]=(y+L)*N,r[2]=(E-w)*N,r[3]=0,r[4]=(y-L)*u,r[5]=(1-(_+g))*u,r[6]=(x+P)*u,r[7]=0,r[8]=(E+w)*F,r[9]=(x-P)*F,r[10]=(1-(_+b))*F,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let o=Cr.set(r[0],r[1],r[2]).length();const a=Cr.set(r[4],r[5],r[6]).length(),c=Cr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],jn.copy(this);const f=1/o,m=1/a,v=1/c;return jn.elements[0]*=f,jn.elements[1]*=f,jn.elements[2]*=f,jn.elements[4]*=m,jn.elements[5]*=m,jn.elements[6]*=m,jn.elements[8]*=v,jn.elements[9]*=v,jn.elements[10]*=v,t.setFromRotationMatrix(jn),n.x=o,n.y=a,n.z=c,this}makePerspective(e,t,n,r,o,a,c=Ei){const d=this.elements,f=2*o/(t-e),m=2*o/(n-r),v=(t+e)/(t-e),_=(n+r)/(n-r);let y,E;if(c===Ei)y=-(a+o)/(a-o),E=-2*a*o/(a-o);else if(c===Co)y=-a/(a-o),E=-a*o/(a-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return d[0]=f,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=m,d[9]=_,d[13]=0,d[2]=0,d[6]=0,d[10]=y,d[14]=E,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,n,r,o,a,c=Ei){const d=this.elements,f=1/(t-e),m=1/(n-r),v=1/(a-o),_=(t+e)*f,y=(n+r)*m;let E,b;if(c===Ei)E=(a+o)*v,b=-2*v;else if(c===Co)E=o*v,b=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return d[0]=2*f,d[4]=0,d[8]=0,d[12]=-_,d[1]=0,d[5]=2*m,d[9]=0,d[13]=-y,d[2]=0,d[6]=0,d[10]=b,d[14]=-E,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Cr=new z,jn=new It,_f=new z(0,0,0),vf=new z(1,1,1),Di=new z,Ks=new z,Dn=new z,_c=new It,vc=new ln;class Is{constructor(e=0,t=0,n=0,r=Is.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,o=r[0],a=r[4],c=r[8],d=r[1],f=r[5],m=r[9],v=r[2],_=r[6],y=r[10];switch(t){case"XYZ":this._y=Math.asin(sn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-m,y),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(_,f),this._z=0);break;case"YXZ":this._x=Math.asin(-sn(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(c,y),this._z=Math.atan2(d,f)):(this._y=Math.atan2(-v,o),this._z=0);break;case"ZXY":this._x=Math.asin(sn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-a,f)):(this._y=0,this._z=Math.atan2(d,o));break;case"ZYX":this._y=Math.asin(-sn(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,y),this._z=Math.atan2(d,o)):(this._x=0,this._z=Math.atan2(-a,f));break;case"YZX":this._z=Math.asin(sn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,f),this._y=Math.atan2(-v,o)):(this._x=0,this._y=Math.atan2(c,y));break;case"XZY":this._z=Math.asin(-sn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(_,f),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-m,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return _c.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_c,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vc.setFromEuler(this),this.setFromQuaternion(vc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Is.DEFAULT_ORDER="XYZ";class ol{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xf=0;const xc=new z,Rr=new ln,vi=new It,Qs=new z,fs=new z,yf=new z,Mf=new ln,yc=new z(1,0,0),Mc=new z(0,1,0),Sc=new z(0,0,1),Sf={type:"added"},Ef={type:"removed"};class qt extends _r{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=Kr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qt.DEFAULT_UP.clone();const e=new z,t=new Is,n=new ln,r=new z(1,1,1);function o(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new It},normalMatrix:{value:new vt}}),this.matrix=new It,this.matrixWorld=new It,this.matrixAutoUpdate=qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new ol,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Rr.setFromAxisAngle(e,t),this.quaternion.multiply(Rr),this}rotateOnWorldAxis(e,t){return Rr.setFromAxisAngle(e,t),this.quaternion.premultiply(Rr),this}rotateX(e){return this.rotateOnAxis(yc,e)}rotateY(e){return this.rotateOnAxis(Mc,e)}rotateZ(e){return this.rotateOnAxis(Sc,e)}translateOnAxis(e,t){return xc.copy(e).applyQuaternion(this.quaternion),this.position.add(xc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(yc,e)}translateY(e){return this.translateOnAxis(Mc,e)}translateZ(e){return this.translateOnAxis(Sc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Qs.copy(e):Qs.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(fs,Qs,this.up):vi.lookAt(Qs,fs,this.up),this.quaternion.setFromRotationMatrix(vi),r&&(vi.extractRotation(r.matrixWorld),Rr.setFromRotationMatrix(vi),this.quaternion.premultiply(Rr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Sf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ef)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,o=this.children.length;r<o;r++){const a=this.children[r].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fs,e,yf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fs,Mf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const o=t[n];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++){const c=r[o];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function o(c,d){return c[d.uuid]===void 0&&(c[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const d=c.shapes;if(Array.isArray(d))for(let f=0,m=d.length;f<m;f++){const v=d[f];o(e.shapes,v)}else o(e.shapes,d)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let d=0,f=this.material.length;d<f;d++)c.push(o(e.materials,this.material[d]));r.material=c}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let c=0;c<this.children.length;c++)r.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let c=0;c<this.animations.length;c++){const d=this.animations[c];r.animations.push(o(e.animations,d))}}if(t){const c=a(e.geometries),d=a(e.materials),f=a(e.textures),m=a(e.images),v=a(e.shapes),_=a(e.skeletons),y=a(e.animations),E=a(e.nodes);c.length>0&&(n.geometries=c),d.length>0&&(n.materials=d),f.length>0&&(n.textures=f),m.length>0&&(n.images=m),v.length>0&&(n.shapes=v),_.length>0&&(n.skeletons=_),y.length>0&&(n.animations=y),E.length>0&&(n.nodes=E)}return n.object=r,n;function a(c){const d=[];for(const f in c){const m=c[f];delete m.metadata,d.push(m)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}qt.DEFAULT_UP=new z(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yn=new z,xi=new z,va=new z,yi=new z,Pr=new z,Lr=new z,Ec=new z,xa=new z,ya=new z,Ma=new z;let Js=!1;class Zn{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Yn.subVectors(e,t),r.cross(Yn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,n,r,o){Yn.subVectors(r,t),xi.subVectors(n,t),va.subVectors(e,t);const a=Yn.dot(Yn),c=Yn.dot(xi),d=Yn.dot(va),f=xi.dot(xi),m=xi.dot(va),v=a*f-c*c;if(v===0)return o.set(-2,-1,-1);const _=1/v,y=(f*d-c*m)*_,E=(a*m-c*d)*_;return o.set(1-y-E,E,y)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,yi),yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getUV(e,t,n,r,o,a,c,d){return Js===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Js=!0),this.getInterpolation(e,t,n,r,o,a,c,d)}static getInterpolation(e,t,n,r,o,a,c,d){return this.getBarycoord(e,t,n,r,yi),d.setScalar(0),d.addScaledVector(o,yi.x),d.addScaledVector(a,yi.y),d.addScaledVector(c,yi.z),d}static isFrontFacing(e,t,n,r){return Yn.subVectors(n,t),xi.subVectors(e,t),Yn.cross(xi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yn.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),Yn.cross(xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Zn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,o){return Js===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Js=!0),Zn.getInterpolation(e,this.a,this.b,this.c,t,n,r,o)}getInterpolation(e,t,n,r,o){return Zn.getInterpolation(e,this.a,this.b,this.c,t,n,r,o)}containsPoint(e){return Zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,o=this.c;let a,c;Pr.subVectors(r,n),Lr.subVectors(o,n),xa.subVectors(e,n);const d=Pr.dot(xa),f=Lr.dot(xa);if(d<=0&&f<=0)return t.copy(n);ya.subVectors(e,r);const m=Pr.dot(ya),v=Lr.dot(ya);if(m>=0&&v<=m)return t.copy(r);const _=d*v-m*f;if(_<=0&&d>=0&&m<=0)return a=d/(d-m),t.copy(n).addScaledVector(Pr,a);Ma.subVectors(e,o);const y=Pr.dot(Ma),E=Lr.dot(Ma);if(E>=0&&y<=E)return t.copy(o);const b=y*f-d*E;if(b<=0&&f>=0&&E<=0)return c=f/(f-E),t.copy(n).addScaledVector(Lr,c);const x=m*E-y*v;if(x<=0&&v-m>=0&&y-E>=0)return Ec.subVectors(o,r),c=(v-m)/(v-m+(y-E)),t.copy(r).addScaledVector(Ec,c);const g=1/(x+b+_);return a=b*g,c=_*g,t.copy(n).addScaledVector(Pr,a).addScaledVector(Lr,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let bf=0;class Qr extends _r{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bf++}),this.uuid=Kr(),this.name="",this.type="Material",this.blending=Xr,this.side=Vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cu,this.blendDst=Ru,this.blendEquation=Hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Wa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ud,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=la,this.stencilZFail=la,this.stencilZPass=la,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Xr&&(n.blending=this.blending),this.side!==Vi&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(o){const a=[];for(const c in o){const d=o[c];delete d.metadata,a.push(d)}return a}if(t){const o=r(e.textures),a=r(e.images);o.length>0&&(n.textures=o),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let o=0;o!==r;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Vu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},eo={h:0,s:0,l:0};function Sa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Mt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=qn.workingColorSpace){return this.r=e,this.g=t,this.b=n,qn.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=qn.workingColorSpace){if(e=sl(e,1),t=sn(t,0,1),n=sn(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,a=2*n-o;this.r=Sa(a,o,e+1/3),this.g=Sa(a,o,e),this.b=Sa(a,o,e-1/3)}return qn.toWorkingColorSpace(this,r),this}setStyle(e,t=Bt){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const a=r[1],c=r[2];switch(a){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],a=o.length;if(a===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Bt){const n=Vu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qr(e.r),this.g=qr(e.g),this.b=qr(e.b),this}copyLinearToSRGB(e){return this.r=ua(e.r),this.g=ua(e.g),this.b=ua(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bt){return qn.fromWorkingColorSpace(dn.copy(this),e),Math.round(sn(dn.r*255,0,255))*65536+Math.round(sn(dn.g*255,0,255))*256+Math.round(sn(dn.b*255,0,255))}getHexString(e=Bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qn.workingColorSpace){qn.fromWorkingColorSpace(dn.copy(this),t);const n=dn.r,r=dn.g,o=dn.b,a=Math.max(n,r,o),c=Math.min(n,r,o);let d,f;const m=(c+a)/2;if(c===a)d=0,f=0;else{const v=a-c;switch(f=m<=.5?v/(a+c):v/(2-a-c),a){case n:d=(r-o)/v+(r<o?6:0);break;case r:d=(o-n)/v+2;break;case o:d=(n-r)/v+4;break}d/=6}return e.h=d,e.s=f,e.l=m,e}getRGB(e,t=qn.workingColorSpace){return qn.fromWorkingColorSpace(dn.copy(this),t),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=Bt){qn.fromWorkingColorSpace(dn.copy(this),e);const t=dn.r,n=dn.g,r=dn.b;return e!==Bt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL($n),$n.h+=e,$n.s+=t,$n.l+=n,this.setHSL($n.h,$n.s,$n.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL($n),e.getHSL(eo);const n=Ss($n.h,eo.h,t),r=Ss($n.s,eo.s,t),o=Ss($n.l,eo.l,t);return this.setHSL(n,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*r,this.g=o[1]*t+o[4]*n+o[7]*r,this.b=o[2]*t+o[5]*n+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const dn=new Mt;Mt.NAMES=Vu;class vr extends Qr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Pu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $t=new z,to=new et;class ei{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=dc,this.updateRange={offset:0,count:-1},this.gpuType=Oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)to.fromBufferAttribute(this,t),to.applyMatrix3(e),this.setXY(t,to.x,to.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=kr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=kr(t,this.array)),t}setX(e,t){return this.normalized&&(t=vn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=kr(t,this.array)),t}setY(e,t){return this.normalized&&(t=vn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=kr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=kr(t,this.array)),t}setW(e,t){return this.normalized&&(t=vn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=vn(t,this.array),n=vn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=vn(t,this.array),n=vn(n,this.array),r=vn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,o){return e*=this.itemSize,this.normalized&&(t=vn(t,this.array),n=vn(n,this.array),r=vn(r,this.array),o=vn(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==dc&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Wu extends ei{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Xu extends ei{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Lt extends ei{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Tf=0;const Hn=new It,Ea=new qt,Dr=new z,In=new Ds,ps=new Ds,rn=new z;class cn extends _r{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=Kr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zu(e)?Xu:Wu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new vt().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Hn.makeRotationFromQuaternion(e),this.applyMatrix4(Hn),this}rotateX(e){return Hn.makeRotationX(e),this.applyMatrix4(Hn),this}rotateY(e){return Hn.makeRotationY(e),this.applyMatrix4(Hn),this}rotateZ(e){return Hn.makeRotationZ(e),this.applyMatrix4(Hn),this}translate(e,t,n){return Hn.makeTranslation(e,t,n),this.applyMatrix4(Hn),this}scale(e,t,n){return Hn.makeScale(e,t,n),this.applyMatrix4(Hn),this}lookAt(e){return Ea.lookAt(e),Ea.updateMatrix(),this.applyMatrix4(Ea.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Dr).negate(),this.translate(Dr.x,Dr.y,Dr.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const o=e[n];t.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new Lt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ds);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const o=t[n];In.setFromBufferAttribute(o),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new No);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new z,1/0);return}if(e){const n=this.boundingSphere.center;if(In.setFromBufferAttribute(e),t)for(let o=0,a=t.length;o<a;o++){const c=t[o];ps.setFromBufferAttribute(c),this.morphTargetsRelative?(rn.addVectors(In.min,ps.min),In.expandByPoint(rn),rn.addVectors(In.max,ps.max),In.expandByPoint(rn)):(In.expandByPoint(ps.min),In.expandByPoint(ps.max))}In.getCenter(n);let r=0;for(let o=0,a=e.count;o<a;o++)rn.fromBufferAttribute(e,o),r=Math.max(r,n.distanceToSquared(rn));if(t)for(let o=0,a=t.length;o<a;o++){const c=t[o],d=this.morphTargetsRelative;for(let f=0,m=c.count;f<m;f++)rn.fromBufferAttribute(c,f),d&&(Dr.fromBufferAttribute(e,f),rn.add(Dr)),r=Math.max(r,n.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,o=t.normal.array,a=t.uv.array,c=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ei(new Float32Array(4*c),4));const d=this.getAttribute("tangent").array,f=[],m=[];for(let I=0;I<c;I++)f[I]=new z,m[I]=new z;const v=new z,_=new z,y=new z,E=new et,b=new et,x=new et,g=new z,P=new z;function w(I,fe,oe){v.fromArray(r,I*3),_.fromArray(r,fe*3),y.fromArray(r,oe*3),E.fromArray(a,I*2),b.fromArray(a,fe*2),x.fromArray(a,oe*2),_.sub(v),y.sub(v),b.sub(E),x.sub(E);const Y=1/(b.x*x.y-x.x*b.y);isFinite(Y)&&(g.copy(_).multiplyScalar(x.y).addScaledVector(y,-b.y).multiplyScalar(Y),P.copy(y).multiplyScalar(b.x).addScaledVector(_,-x.x).multiplyScalar(Y),f[I].add(g),f[fe].add(g),f[oe].add(g),m[I].add(P),m[fe].add(P),m[oe].add(P))}let L=this.groups;L.length===0&&(L=[{start:0,count:n.length}]);for(let I=0,fe=L.length;I<fe;++I){const oe=L[I],Y=oe.start,J=oe.count;for(let te=Y,_e=Y+J;te<_e;te+=3)w(n[te+0],n[te+1],n[te+2])}const N=new z,u=new z,F=new z,q=new z;function R(I){F.fromArray(o,I*3),q.copy(F);const fe=f[I];N.copy(fe),N.sub(F.multiplyScalar(F.dot(fe))).normalize(),u.crossVectors(q,fe);const Y=u.dot(m[I])<0?-1:1;d[I*4]=N.x,d[I*4+1]=N.y,d[I*4+2]=N.z,d[I*4+3]=Y}for(let I=0,fe=L.length;I<fe;++I){const oe=L[I],Y=oe.start,J=oe.count;for(let te=Y,_e=Y+J;te<_e;te+=3)R(n[te+0]),R(n[te+1]),R(n[te+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ei(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let _=0,y=n.count;_<y;_++)n.setXYZ(_,0,0,0);const r=new z,o=new z,a=new z,c=new z,d=new z,f=new z,m=new z,v=new z;if(e)for(let _=0,y=e.count;_<y;_+=3){const E=e.getX(_+0),b=e.getX(_+1),x=e.getX(_+2);r.fromBufferAttribute(t,E),o.fromBufferAttribute(t,b),a.fromBufferAttribute(t,x),m.subVectors(a,o),v.subVectors(r,o),m.cross(v),c.fromBufferAttribute(n,E),d.fromBufferAttribute(n,b),f.fromBufferAttribute(n,x),c.add(m),d.add(m),f.add(m),n.setXYZ(E,c.x,c.y,c.z),n.setXYZ(b,d.x,d.y,d.z),n.setXYZ(x,f.x,f.y,f.z)}else for(let _=0,y=t.count;_<y;_+=3)r.fromBufferAttribute(t,_+0),o.fromBufferAttribute(t,_+1),a.fromBufferAttribute(t,_+2),m.subVectors(a,o),v.subVectors(r,o),m.cross(v),n.setXYZ(_+0,m.x,m.y,m.z),n.setXYZ(_+1,m.x,m.y,m.z),n.setXYZ(_+2,m.x,m.y,m.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)rn.fromBufferAttribute(e,t),rn.normalize(),e.setXYZ(t,rn.x,rn.y,rn.z)}toNonIndexed(){function e(c,d){const f=c.array,m=c.itemSize,v=c.normalized,_=new f.constructor(d.length*m);let y=0,E=0;for(let b=0,x=d.length;b<x;b++){c.isInterleavedBufferAttribute?y=d[b]*c.data.stride+c.offset:y=d[b]*m;for(let g=0;g<m;g++)_[E++]=f[y++]}return new ei(_,m,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new cn,n=this.index.array,r=this.attributes;for(const c in r){const d=r[c],f=e(d,n);t.setAttribute(c,f)}const o=this.morphAttributes;for(const c in o){const d=[],f=o[c];for(let m=0,v=f.length;m<v;m++){const _=f[m],y=e(_,n);d.push(y)}t.morphAttributes[c]=d}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let c=0,d=a.length;c<d;c++){const f=a[c];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const f in d)d[f]!==void 0&&(e[f]=d[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const d in n){const f=n[d];e.data.attributes[d]=f.toJSON(e.data)}const r={};let o=!1;for(const d in this.morphAttributes){const f=this.morphAttributes[d],m=[];for(let v=0,_=f.length;v<_;v++){const y=f[v];m.push(y.toJSON(e.data))}m.length>0&&(r[d]=m,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const f in r){const m=r[f];this.setAttribute(f,m.clone(t))}const o=e.morphAttributes;for(const f in o){const m=[],v=o[f];for(let _=0,y=v.length;_<y;_++)m.push(v[_].clone(t));this.morphAttributes[f]=m}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let f=0,m=a.length;f<m;f++){const v=a[f];this.addGroup(v.start,v.count,v.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bc=new It,er=new Fo,no=new No,Tc=new z,Ir=new z,Ur=new z,Nr=new z,ba=new z,ro=new z,so=new et,oo=new et,ao=new et,wc=new z,Ac=new z,Cc=new z,lo=new z,co=new z;class Oe extends qt{constructor(e=new cn,t=new vr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=r.length;o<a;o++){const c=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,o=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const c=this.morphTargetInfluences;if(o&&c){ro.set(0,0,0);for(let d=0,f=o.length;d<f;d++){const m=c[d],v=o[d];m!==0&&(ba.fromBufferAttribute(v,e),a?ro.addScaledVector(ba,m):ro.addScaledVector(ba.sub(t),m))}t.add(ro)}return t}raycast(e,t){const n=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),no.copy(n.boundingSphere),no.applyMatrix4(o),er.copy(e.ray).recast(e.near),!(no.containsPoint(er.origin)===!1&&(er.intersectSphere(no,Tc)===null||er.origin.distanceToSquared(Tc)>(e.far-e.near)**2))&&(bc.copy(o).invert(),er.copy(e.ray).applyMatrix4(bc),!(n.boundingBox!==null&&er.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,er)))}_computeIntersections(e,t,n){let r;const o=this.geometry,a=this.material,c=o.index,d=o.attributes.position,f=o.attributes.uv,m=o.attributes.uv1,v=o.attributes.normal,_=o.groups,y=o.drawRange;if(c!==null)if(Array.isArray(a))for(let E=0,b=_.length;E<b;E++){const x=_[E],g=a[x.materialIndex],P=Math.max(x.start,y.start),w=Math.min(c.count,Math.min(x.start+x.count,y.start+y.count));for(let L=P,N=w;L<N;L+=3){const u=c.getX(L),F=c.getX(L+1),q=c.getX(L+2);r=uo(this,g,e,n,f,m,v,u,F,q),r&&(r.faceIndex=Math.floor(L/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{const E=Math.max(0,y.start),b=Math.min(c.count,y.start+y.count);for(let x=E,g=b;x<g;x+=3){const P=c.getX(x),w=c.getX(x+1),L=c.getX(x+2);r=uo(this,a,e,n,f,m,v,P,w,L),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}else if(d!==void 0)if(Array.isArray(a))for(let E=0,b=_.length;E<b;E++){const x=_[E],g=a[x.materialIndex],P=Math.max(x.start,y.start),w=Math.min(d.count,Math.min(x.start+x.count,y.start+y.count));for(let L=P,N=w;L<N;L+=3){const u=L,F=L+1,q=L+2;r=uo(this,g,e,n,f,m,v,u,F,q),r&&(r.faceIndex=Math.floor(L/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{const E=Math.max(0,y.start),b=Math.min(d.count,y.start+y.count);for(let x=E,g=b;x<g;x+=3){const P=x,w=x+1,L=x+2;r=uo(this,a,e,n,f,m,v,P,w,L),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}}}function wf(i,e,t,n,r,o,a,c){let d;if(e.side===wn?d=n.intersectTriangle(a,o,r,!0,c):d=n.intersectTriangle(r,o,a,e.side===Vi,c),d===null)return null;co.copy(c),co.applyMatrix4(i.matrixWorld);const f=t.ray.origin.distanceTo(co);return f<t.near||f>t.far?null:{distance:f,point:co.clone(),object:i}}function uo(i,e,t,n,r,o,a,c,d,f){i.getVertexPosition(c,Ir),i.getVertexPosition(d,Ur),i.getVertexPosition(f,Nr);const m=wf(i,e,t,n,Ir,Ur,Nr,lo);if(m){r&&(so.fromBufferAttribute(r,c),oo.fromBufferAttribute(r,d),ao.fromBufferAttribute(r,f),m.uv=Zn.getInterpolation(lo,Ir,Ur,Nr,so,oo,ao,new et)),o&&(so.fromBufferAttribute(o,c),oo.fromBufferAttribute(o,d),ao.fromBufferAttribute(o,f),m.uv1=Zn.getInterpolation(lo,Ir,Ur,Nr,so,oo,ao,new et),m.uv2=m.uv1),a&&(wc.fromBufferAttribute(a,c),Ac.fromBufferAttribute(a,d),Cc.fromBufferAttribute(a,f),m.normal=Zn.getInterpolation(lo,Ir,Ur,Nr,wc,Ac,Cc,new z),m.normal.dot(n.direction)>0&&m.normal.multiplyScalar(-1));const v={a:c,b:d,c:f,normal:new z,materialIndex:0};Zn.getNormal(Ir,Ur,Nr,v.normal),m.face=v}return m}class Gt extends cn{constructor(e=1,t=1,n=1,r=1,o=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:o,depthSegments:a};const c=this;r=Math.floor(r),o=Math.floor(o),a=Math.floor(a);const d=[],f=[],m=[],v=[];let _=0,y=0;E("z","y","x",-1,-1,n,t,e,a,o,0),E("z","y","x",1,-1,n,t,-e,a,o,1),E("x","z","y",1,1,e,n,t,r,a,2),E("x","z","y",1,-1,e,n,-t,r,a,3),E("x","y","z",1,-1,e,t,n,r,o,4),E("x","y","z",-1,-1,e,t,-n,r,o,5),this.setIndex(d),this.setAttribute("position",new Lt(f,3)),this.setAttribute("normal",new Lt(m,3)),this.setAttribute("uv",new Lt(v,2));function E(b,x,g,P,w,L,N,u,F,q,R){const I=L/F,fe=N/q,oe=L/2,Y=N/2,J=u/2,te=F+1,_e=q+1;let le=0,de=0;const ve=new z;for(let ge=0;ge<_e;ge++){const $=ge*fe-Y;for(let se=0;se<te;se++){const Pe=se*I-oe;ve[b]=Pe*P,ve[x]=$*w,ve[g]=J,f.push(ve.x,ve.y,ve.z),ve[b]=0,ve[x]=0,ve[g]=u>0?1:-1,m.push(ve.x,ve.y,ve.z),v.push(se/F),v.push(1-ge/q),le+=1}}for(let ge=0;ge<q;ge++)for(let $=0;$<F;$++){const se=_+$+te*ge,Pe=_+$+te*(ge+1),Ie=_+($+1)+te*(ge+1),Be=_+($+1)+te*ge;d.push(se,Pe,Be),d.push(Pe,Ie,Be),de+=6}c.addGroup(y,de,R),y+=de,_+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Zr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function xn(i){const e={};for(let t=0;t<i.length;t++){const n=Zr(i[t]);for(const r in n)e[r]=n[r]}return e}function Af(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function qu(i){return i.getRenderTarget()===null?i.outputColorSpace:ui}const Cf={clone:Zr,merge:xn};var Rf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mr extends Qr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rf,this.fragmentShader=Pf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zr(e.uniforms),this.uniformsGroups=Af(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ju extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new It,this.projectionMatrix=new It,this.projectionMatrixInverse=new It,this.coordinateSystem=Ei}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Gn extends ju{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=As*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ms*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return As*2*Math.atan(Math.tan(Ms*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,o,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ms*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,o=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const d=a.fullWidth,f=a.fullHeight;o+=a.offsetX*r/d,t-=a.offsetY*n/f,r*=a.width/d,n*=a.height/f}const c=this.filmOffset;c!==0&&(o+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Fr=-90,Or=1;class Lf extends qt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const r=new Gn(Fr,Or,e,t);r.layers=this.layers,this.add(r);const o=new Gn(Fr,Or,e,t);o.layers=this.layers,this.add(o);const a=new Gn(Fr,Or,e,t);a.layers=this.layers,this.add(a);const c=new Gn(Fr,Or,e,t);c.layers=this.layers,this.add(c);const d=new Gn(Fr,Or,e,t);d.layers=this.layers,this.add(d);const f=new Gn(Fr,Or,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,o,a,c,d]=t;for(const f of t)this.remove(f);if(e===Ei)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Co)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,d,f]=this.children,m=e.getRenderTarget(),v=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,o),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,c),e.setRenderTarget(n,4),e.render(t,d),n.texture.generateMipmaps=_,e.setRenderTarget(n,5),e.render(t,f),e.setRenderTarget(m),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Yu extends Fn{constructor(e,t,n,r,o,a,c,d,f,m){e=e!==void 0?e:[],t=t!==void 0?t:jr,super(e,t,n,r,o,a,c,d,f,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Df extends pr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(Es("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ur?Bt:hr),this.texture=new Yu(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:kn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Gt(5,5,5),o=new mr({name:"CubemapFromEquirect",uniforms:Zr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:wn,blending:Bi});o.uniforms.tEquirect.value=t;const a=new Oe(r,o),c=t.minFilter;return t.minFilter===Ts&&(t.minFilter=kn),new Lf(1,10,this).update(e,a),t.minFilter=c,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const o=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(o)}}const Ta=new z,If=new z,Uf=new vt;class Ui{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Ta.subVectors(n,t).cross(If.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ta),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Uf.getNormalMatrix(e),r=this.coplanarPoint(Ta).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const tr=new No,ho=new z;class al{constructor(e=new Ui,t=new Ui,n=new Ui,r=new Ui,o=new Ui,a=new Ui){this.planes=[e,t,n,r,o,a]}set(e,t,n,r,o,a){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(r),c[4].copy(o),c[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ei){const n=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],d=r[3],f=r[4],m=r[5],v=r[6],_=r[7],y=r[8],E=r[9],b=r[10],x=r[11],g=r[12],P=r[13],w=r[14],L=r[15];if(n[0].setComponents(d-o,_-f,x-y,L-g).normalize(),n[1].setComponents(d+o,_+f,x+y,L+g).normalize(),n[2].setComponents(d+a,_+m,x+E,L+P).normalize(),n[3].setComponents(d-a,_-m,x-E,L-P).normalize(),n[4].setComponents(d-c,_-v,x-b,L-w).normalize(),t===Ei)n[5].setComponents(d+c,_+v,x+b,L+w).normalize();else if(t===Co)n[5].setComponents(c,v,b,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),tr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),tr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(tr)}intersectsSprite(e){return tr.center.set(0,0,0),tr.radius=.7071067811865476,tr.applyMatrix4(e.matrixWorld),this.intersectsSphere(tr)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(ho.x=r.normal.x>0?e.max.x:e.min.x,ho.y=r.normal.y>0?e.max.y:e.min.y,ho.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ho)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function $u(){let i=null,e=!1,t=null,n=null;function r(o,a){t(o,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){i=o}}}function Nf(i,e){const t=e.isWebGL2,n=new WeakMap;function r(f,m){const v=f.array,_=f.usage,y=i.createBuffer();i.bindBuffer(m,y),i.bufferData(m,v,_),f.onUploadCallback();let E;if(v instanceof Float32Array)E=i.FLOAT;else if(v instanceof Uint16Array)if(f.isFloat16BufferAttribute)if(t)E=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else E=i.UNSIGNED_SHORT;else if(v instanceof Int16Array)E=i.SHORT;else if(v instanceof Uint32Array)E=i.UNSIGNED_INT;else if(v instanceof Int32Array)E=i.INT;else if(v instanceof Int8Array)E=i.BYTE;else if(v instanceof Uint8Array)E=i.UNSIGNED_BYTE;else if(v instanceof Uint8ClampedArray)E=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+v);return{buffer:y,type:E,bytesPerElement:v.BYTES_PER_ELEMENT,version:f.version}}function o(f,m,v){const _=m.array,y=m.updateRange;i.bindBuffer(v,f),y.count===-1?i.bufferSubData(v,0,_):(t?i.bufferSubData(v,y.offset*_.BYTES_PER_ELEMENT,_,y.offset,y.count):i.bufferSubData(v,y.offset*_.BYTES_PER_ELEMENT,_.subarray(y.offset,y.offset+y.count)),y.count=-1),m.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),n.get(f)}function c(f){f.isInterleavedBufferAttribute&&(f=f.data);const m=n.get(f);m&&(i.deleteBuffer(m.buffer),n.delete(f))}function d(f,m){if(f.isGLBufferAttribute){const _=n.get(f);(!_||_.version<f.version)&&n.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}f.isInterleavedBufferAttribute&&(f=f.data);const v=n.get(f);v===void 0?n.set(f,r(f,m)):v.version<f.version&&(o(v.buffer,f,m),v.version=f.version)}return{get:a,remove:c,update:d}}class Us extends cn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const o=e/2,a=t/2,c=Math.floor(n),d=Math.floor(r),f=c+1,m=d+1,v=e/c,_=t/d,y=[],E=[],b=[],x=[];for(let g=0;g<m;g++){const P=g*_-a;for(let w=0;w<f;w++){const L=w*v-o;E.push(L,-P,0),b.push(0,0,1),x.push(w/c),x.push(1-g/d)}}for(let g=0;g<d;g++)for(let P=0;P<c;P++){const w=P+f*g,L=P+f*(g+1),N=P+1+f*(g+1),u=P+1+f*g;y.push(w,L,u),y.push(L,N,u)}this.setIndex(y),this.setAttribute("position",new Lt(E,3)),this.setAttribute("normal",new Lt(b,3)),this.setAttribute("uv",new Lt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Us(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ff=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Of=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Bf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,kf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Vf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,jf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Yf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$f=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Zf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ep=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,np=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ip=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,rp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,sp=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,op=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ap=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,up="gl_FragColor = linearToOutputTexel( gl_FragColor );",hp=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,fp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,mp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_p=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Sp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Ep=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ap=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Cp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Ip=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Up=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Np=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Fp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Op=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Hp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,kp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Wp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,$p=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Zp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Kp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,Qp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Jp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,em=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,im=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,rm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,om=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,am=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,cm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,um=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,gm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_m=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,vm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,xm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ym=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Mm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Em=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Tm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Am=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Cm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Dm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Im=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Um=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zm=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Hm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,km=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Gm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jm=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ym=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$m=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Km=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Qm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,eg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,tg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ng=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ig=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,rg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,og=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ag=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,lg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cg=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ug=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,hg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ft={alphahash_fragment:Ff,alphahash_pars_fragment:Of,alphamap_fragment:Bf,alphamap_pars_fragment:zf,alphatest_fragment:Hf,alphatest_pars_fragment:kf,aomap_fragment:Gf,aomap_pars_fragment:Vf,begin_vertex:Wf,beginnormal_vertex:Xf,bsdfs:qf,iridescence_fragment:jf,bumpmap_pars_fragment:Yf,clipping_planes_fragment:$f,clipping_planes_pars_fragment:Zf,clipping_planes_pars_vertex:Kf,clipping_planes_vertex:Qf,color_fragment:Jf,color_pars_fragment:ep,color_pars_vertex:tp,color_vertex:np,common:ip,cube_uv_reflection_fragment:rp,defaultnormal_vertex:sp,displacementmap_pars_vertex:op,displacementmap_vertex:ap,emissivemap_fragment:lp,emissivemap_pars_fragment:cp,colorspace_fragment:up,colorspace_pars_fragment:hp,envmap_fragment:dp,envmap_common_pars_fragment:fp,envmap_pars_fragment:pp,envmap_pars_vertex:mp,envmap_physical_pars_fragment:Ap,envmap_vertex:gp,fog_vertex:_p,fog_pars_vertex:vp,fog_fragment:xp,fog_pars_fragment:yp,gradientmap_pars_fragment:Mp,lightmap_fragment:Sp,lightmap_pars_fragment:Ep,lights_lambert_fragment:bp,lights_lambert_pars_fragment:Tp,lights_pars_begin:wp,lights_toon_fragment:Cp,lights_toon_pars_fragment:Rp,lights_phong_fragment:Pp,lights_phong_pars_fragment:Lp,lights_physical_fragment:Dp,lights_physical_pars_fragment:Ip,lights_fragment_begin:Up,lights_fragment_maps:Np,lights_fragment_end:Fp,logdepthbuf_fragment:Op,logdepthbuf_pars_fragment:Bp,logdepthbuf_pars_vertex:zp,logdepthbuf_vertex:Hp,map_fragment:kp,map_pars_fragment:Gp,map_particle_fragment:Vp,map_particle_pars_fragment:Wp,metalnessmap_fragment:Xp,metalnessmap_pars_fragment:qp,morphcolor_vertex:jp,morphnormal_vertex:Yp,morphtarget_pars_vertex:$p,morphtarget_vertex:Zp,normal_fragment_begin:Kp,normal_fragment_maps:Qp,normal_pars_fragment:Jp,normal_pars_vertex:em,normal_vertex:tm,normalmap_pars_fragment:nm,clearcoat_normal_fragment_begin:im,clearcoat_normal_fragment_maps:rm,clearcoat_pars_fragment:sm,iridescence_pars_fragment:om,opaque_fragment:am,packing:lm,premultiplied_alpha_fragment:cm,project_vertex:um,dithering_fragment:hm,dithering_pars_fragment:dm,roughnessmap_fragment:fm,roughnessmap_pars_fragment:pm,shadowmap_pars_fragment:mm,shadowmap_pars_vertex:gm,shadowmap_vertex:_m,shadowmask_pars_fragment:vm,skinbase_vertex:xm,skinning_pars_vertex:ym,skinning_vertex:Mm,skinnormal_vertex:Sm,specularmap_fragment:Em,specularmap_pars_fragment:bm,tonemapping_fragment:Tm,tonemapping_pars_fragment:wm,transmission_fragment:Am,transmission_pars_fragment:Cm,uv_pars_fragment:Rm,uv_pars_vertex:Pm,uv_vertex:Lm,worldpos_vertex:Dm,background_vert:Im,background_frag:Um,backgroundCube_vert:Nm,backgroundCube_frag:Fm,cube_vert:Om,cube_frag:Bm,depth_vert:zm,depth_frag:Hm,distanceRGBA_vert:km,distanceRGBA_frag:Gm,equirect_vert:Vm,equirect_frag:Wm,linedashed_vert:Xm,linedashed_frag:qm,meshbasic_vert:jm,meshbasic_frag:Ym,meshlambert_vert:$m,meshlambert_frag:Zm,meshmatcap_vert:Km,meshmatcap_frag:Qm,meshnormal_vert:Jm,meshnormal_frag:eg,meshphong_vert:tg,meshphong_frag:ng,meshphysical_vert:ig,meshphysical_frag:rg,meshtoon_vert:sg,meshtoon_frag:og,points_vert:ag,points_frag:lg,shadow_vert:cg,shadow_frag:ug,sprite_vert:hg,sprite_frag:dg},Ue={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new vt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new vt},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0},uvTransform:{value:new vt}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}}},si={basic:{uniforms:xn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:xn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Mt(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:xn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:xn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:xn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new Mt(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:xn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:xn([Ue.points,Ue.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:xn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:xn([Ue.common,Ue.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:xn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:xn([Ue.sprite,Ue.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:xn([Ue.common,Ue.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:xn([Ue.lights,Ue.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};si.physical={uniforms:xn([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new vt},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new vt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new vt},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new vt},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new vt},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new vt},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new vt}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const fo={r:0,b:0,g:0};function fg(i,e,t,n,r,o,a){const c=new Mt(0);let d=o===!0?0:1,f,m,v=null,_=0,y=null;function E(x,g){let P=!1,w=g.isScene===!0?g.background:null;w&&w.isTexture&&(w=(g.backgroundBlurriness>0?t:e).get(w)),w===null?b(c,d):w&&w.isColor&&(b(w,1),P=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||P)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),w&&(w.isCubeTexture||w.mapping===Io)?(m===void 0&&(m=new Oe(new Gt(1,1,1),new mr({name:"BackgroundCubeMaterial",uniforms:Zr(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(N,u,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),m.material.uniforms.envMap.value=w,m.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,m.material.toneMapped=w.colorSpace!==Bt,(v!==w||_!==w.version||y!==i.toneMapping)&&(m.material.needsUpdate=!0,v=w,_=w.version,y=i.toneMapping),m.layers.enableAll(),x.unshift(m,m.geometry,m.material,0,0,null)):w&&w.isTexture&&(f===void 0&&(f=new Oe(new Us(2,2),new mr({name:"BackgroundMaterial",uniforms:Zr(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(f)),f.material.uniforms.t2D.value=w,f.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,f.material.toneMapped=w.colorSpace!==Bt,w.matrixAutoUpdate===!0&&w.updateMatrix(),f.material.uniforms.uvTransform.value.copy(w.matrix),(v!==w||_!==w.version||y!==i.toneMapping)&&(f.material.needsUpdate=!0,v=w,_=w.version,y=i.toneMapping),f.layers.enableAll(),x.unshift(f,f.geometry,f.material,0,0,null))}function b(x,g){x.getRGB(fo,qu(i)),n.buffers.color.setClear(fo.r,fo.g,fo.b,g,a)}return{getClearColor:function(){return c},setClearColor:function(x,g=1){c.set(x),d=g,b(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(x){d=x,b(c,d)},render:E}}function pg(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),o=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||o!==null,c={},d=x(null);let f=d,m=!1;function v(J,te,_e,le,de){let ve=!1;if(a){const ge=b(le,_e,te);f!==ge&&(f=ge,y(f.object)),ve=g(J,le,_e,de),ve&&P(J,le,_e,de)}else{const ge=te.wireframe===!0;(f.geometry!==le.id||f.program!==_e.id||f.wireframe!==ge)&&(f.geometry=le.id,f.program=_e.id,f.wireframe=ge,ve=!0)}de!==null&&t.update(de,i.ELEMENT_ARRAY_BUFFER),(ve||m)&&(m=!1,q(J,te,_e,le),de!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(de).buffer))}function _(){return n.isWebGL2?i.createVertexArray():o.createVertexArrayOES()}function y(J){return n.isWebGL2?i.bindVertexArray(J):o.bindVertexArrayOES(J)}function E(J){return n.isWebGL2?i.deleteVertexArray(J):o.deleteVertexArrayOES(J)}function b(J,te,_e){const le=_e.wireframe===!0;let de=c[J.id];de===void 0&&(de={},c[J.id]=de);let ve=de[te.id];ve===void 0&&(ve={},de[te.id]=ve);let ge=ve[le];return ge===void 0&&(ge=x(_()),ve[le]=ge),ge}function x(J){const te=[],_e=[],le=[];for(let de=0;de<r;de++)te[de]=0,_e[de]=0,le[de]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:te,enabledAttributes:_e,attributeDivisors:le,object:J,attributes:{},index:null}}function g(J,te,_e,le){const de=f.attributes,ve=te.attributes;let ge=0;const $=_e.getAttributes();for(const se in $)if($[se].location>=0){const Ie=de[se];let Be=ve[se];if(Be===void 0&&(se==="instanceMatrix"&&J.instanceMatrix&&(Be=J.instanceMatrix),se==="instanceColor"&&J.instanceColor&&(Be=J.instanceColor)),Ie===void 0||Ie.attribute!==Be||Be&&Ie.data!==Be.data)return!0;ge++}return f.attributesNum!==ge||f.index!==le}function P(J,te,_e,le){const de={},ve=te.attributes;let ge=0;const $=_e.getAttributes();for(const se in $)if($[se].location>=0){let Ie=ve[se];Ie===void 0&&(se==="instanceMatrix"&&J.instanceMatrix&&(Ie=J.instanceMatrix),se==="instanceColor"&&J.instanceColor&&(Ie=J.instanceColor));const Be={};Be.attribute=Ie,Ie&&Ie.data&&(Be.data=Ie.data),de[se]=Be,ge++}f.attributes=de,f.attributesNum=ge,f.index=le}function w(){const J=f.newAttributes;for(let te=0,_e=J.length;te<_e;te++)J[te]=0}function L(J){N(J,0)}function N(J,te){const _e=f.newAttributes,le=f.enabledAttributes,de=f.attributeDivisors;_e[J]=1,le[J]===0&&(i.enableVertexAttribArray(J),le[J]=1),de[J]!==te&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](J,te),de[J]=te)}function u(){const J=f.newAttributes,te=f.enabledAttributes;for(let _e=0,le=te.length;_e<le;_e++)te[_e]!==J[_e]&&(i.disableVertexAttribArray(_e),te[_e]=0)}function F(J,te,_e,le,de,ve,ge){ge===!0?i.vertexAttribIPointer(J,te,_e,de,ve):i.vertexAttribPointer(J,te,_e,le,de,ve)}function q(J,te,_e,le){if(n.isWebGL2===!1&&(J.isInstancedMesh||le.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;w();const de=le.attributes,ve=_e.getAttributes(),ge=te.defaultAttributeValues;for(const $ in ve){const se=ve[$];if(se.location>=0){let Pe=de[$];if(Pe===void 0&&($==="instanceMatrix"&&J.instanceMatrix&&(Pe=J.instanceMatrix),$==="instanceColor"&&J.instanceColor&&(Pe=J.instanceColor)),Pe!==void 0){const Ie=Pe.normalized,Be=Pe.itemSize,Ye=t.get(Pe);if(Ye===void 0)continue;const nt=Ye.buffer,Xe=Ye.type,lt=Ye.bytesPerElement,Zt=n.isWebGL2===!0&&(Xe===i.INT||Xe===i.UNSIGNED_INT||Pe.gpuType===Du);if(Pe.isInterleavedBufferAttribute){const ct=Pe.data,Z=ct.stride,Et=Pe.offset;if(ct.isInstancedInterleavedBuffer){for(let We=0;We<se.locationSize;We++)N(se.location+We,ct.meshPerAttribute);J.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let We=0;We<se.locationSize;We++)L(se.location+We);i.bindBuffer(i.ARRAY_BUFFER,nt);for(let We=0;We<se.locationSize;We++)F(se.location+We,Be/se.locationSize,Xe,Ie,Z*lt,(Et+Be/se.locationSize*We)*lt,Zt)}else{if(Pe.isInstancedBufferAttribute){for(let ct=0;ct<se.locationSize;ct++)N(se.location+ct,Pe.meshPerAttribute);J.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=Pe.meshPerAttribute*Pe.count)}else for(let ct=0;ct<se.locationSize;ct++)L(se.location+ct);i.bindBuffer(i.ARRAY_BUFFER,nt);for(let ct=0;ct<se.locationSize;ct++)F(se.location+ct,Be/se.locationSize,Xe,Ie,Be*lt,Be/se.locationSize*ct*lt,Zt)}}else if(ge!==void 0){const Ie=ge[$];if(Ie!==void 0)switch(Ie.length){case 2:i.vertexAttrib2fv(se.location,Ie);break;case 3:i.vertexAttrib3fv(se.location,Ie);break;case 4:i.vertexAttrib4fv(se.location,Ie);break;default:i.vertexAttrib1fv(se.location,Ie)}}}}u()}function R(){oe();for(const J in c){const te=c[J];for(const _e in te){const le=te[_e];for(const de in le)E(le[de].object),delete le[de];delete te[_e]}delete c[J]}}function I(J){if(c[J.id]===void 0)return;const te=c[J.id];for(const _e in te){const le=te[_e];for(const de in le)E(le[de].object),delete le[de];delete te[_e]}delete c[J.id]}function fe(J){for(const te in c){const _e=c[te];if(_e[J.id]===void 0)continue;const le=_e[J.id];for(const de in le)E(le[de].object),delete le[de];delete _e[J.id]}}function oe(){Y(),m=!0,f!==d&&(f=d,y(f.object))}function Y(){d.geometry=null,d.program=null,d.wireframe=!1}return{setup:v,reset:oe,resetDefaultState:Y,dispose:R,releaseStatesOfGeometry:I,releaseStatesOfProgram:fe,initAttributes:w,enableAttribute:L,disableUnusedAttributes:u}}function mg(i,e,t,n){const r=n.isWebGL2;let o;function a(f){o=f}function c(f,m){i.drawArrays(o,f,m),t.update(m,o,1)}function d(f,m,v){if(v===0)return;let _,y;if(r)_=i,y="drawArraysInstanced";else if(_=e.get("ANGLE_instanced_arrays"),y="drawArraysInstancedANGLE",_===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[y](o,f,m,v),t.update(m,o,v)}this.setMode=a,this.render=c,this.renderInstances=d}function gg(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(F){if(F==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let c=t.precision!==void 0?t.precision:"highp";const d=o(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const f=a||e.has("WEBGL_draw_buffers"),m=t.logarithmicDepthBuffer===!0,v=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),E=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),b=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),g=i.getParameter(i.MAX_VARYING_VECTORS),P=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=_>0,L=a||e.has("OES_texture_float"),N=w&&L,u=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:f,getMaxAnisotropy:r,getMaxPrecision:o,precision:c,logarithmicDepthBuffer:m,maxTextures:v,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:E,maxAttributes:b,maxVertexUniforms:x,maxVaryings:g,maxFragmentUniforms:P,vertexTextures:w,floatFragmentTextures:L,floatVertexTextures:N,maxSamples:u}}function _g(i){const e=this;let t=null,n=0,r=!1,o=!1;const a=new Ui,c=new vt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const y=v.length!==0||_||n!==0||r;return r=_,n=v.length,y},this.beginShadows=function(){o=!0,m(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(v,_){t=m(v,_,0)},this.setState=function(v,_,y){const E=v.clippingPlanes,b=v.clipIntersection,x=v.clipShadows,g=i.get(v);if(!r||E===null||E.length===0||o&&!x)o?m(null):f();else{const P=o?0:n,w=P*4;let L=g.clippingState||null;d.value=L,L=m(E,_,w,y);for(let N=0;N!==w;++N)L[N]=t[N];g.clippingState=L,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=P}};function f(){d.value!==t&&(d.value=t,d.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function m(v,_,y,E){const b=v!==null?v.length:0;let x=null;if(b!==0){if(x=d.value,E!==!0||x===null){const g=y+b*4,P=_.matrixWorldInverse;c.getNormalMatrix(P),(x===null||x.length<g)&&(x=new Float32Array(g));for(let w=0,L=y;w!==b;++w,L+=4)a.copy(v[w]).applyMatrix4(P,c),a.normal.toArray(x,L),x[L+3]=a.constant}d.value=x,d.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,x}}function vg(i){let e=new WeakMap;function t(a,c){return c===Xa?a.mapping=jr:c===qa&&(a.mapping=Yr),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const c=a.mapping;if(c===Xa||c===qa)if(e.has(a)){const d=e.get(a).texture;return t(d,a.mapping)}else{const d=a.image;if(d&&d.height>0){const f=new Df(d.height/2);return f.fromEquirectangularTexture(i,a),e.set(a,f),a.addEventListener("dispose",r),t(f.texture,a.mapping)}else return null}}return a}function r(a){const c=a.target;c.removeEventListener("dispose",r);const d=e.get(c);d!==void 0&&(e.delete(c),d.dispose())}function o(){e=new WeakMap}return{get:n,dispose:o}}class Zu extends ju{constructor(e=-1,t=1,n=1,r=-1,o=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=o,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,o,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=n-e,a=n+e,c=r+t,d=r-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=f*this.view.offsetX,a=o+f*this.view.width,c-=m*this.view.offsetY,d=c-m*this.view.height}this.projectionMatrix.makeOrthographic(o,a,c,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Gr=4,Rc=[.125,.215,.35,.446,.526,.582],or=20,wa=new Zu,Pc=new Mt;let Aa=null;const ir=(1+Math.sqrt(5))/2,Br=1/ir,Lc=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,ir,Br),new z(0,ir,-Br),new z(Br,0,ir),new z(-Br,0,ir),new z(ir,Br,0),new z(-ir,Br,0)];class Dc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Aa=this._renderer.getRenderTarget(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,n,r,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Aa),e.scissorTest=!1,po(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===jr||e.mapping===Yr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Aa=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:ws,format:Qn,colorSpace:ui,depthBuffer:!1},r=Ic(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ic(e,t,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xg(o)),this._blurMaterial=yg(o,e,t)}return r}_compileMaterial(e){const t=new Oe(this._lodPlanes[0],e);this._renderer.compile(t,wa)}_sceneToCubeUV(e,t,n,r){const c=new Gn(90,1,t,n),d=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],m=this._renderer,v=m.autoClear,_=m.toneMapping;m.getClearColor(Pc),m.toneMapping=zi,m.autoClear=!1;const y=new vr({name:"PMREM.Background",side:wn,depthWrite:!1,depthTest:!1}),E=new Oe(new Gt,y);let b=!1;const x=e.background;x?x.isColor&&(y.color.copy(x),e.background=null,b=!0):(y.color.copy(Pc),b=!0);for(let g=0;g<6;g++){const P=g%3;P===0?(c.up.set(0,d[g],0),c.lookAt(f[g],0,0)):P===1?(c.up.set(0,0,d[g]),c.lookAt(0,f[g],0)):(c.up.set(0,d[g],0),c.lookAt(0,0,f[g]));const w=this._cubeSize;po(r,P*w,g>2?w:0,w,w),m.setRenderTarget(r),b&&m.render(E,c),m.render(e,c)}E.geometry.dispose(),E.material.dispose(),m.toneMapping=_,m.autoClear=v,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===jr||e.mapping===Yr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uc());const o=r?this._cubemapMaterial:this._equirectMaterial,a=new Oe(this._lodPlanes[0],o),c=o.uniforms;c.envMap.value=e;const d=this._cubeSize;po(t,0,0,3*d,2*d),n.setRenderTarget(t),n.render(a,wa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Lc[(r-1)%Lc.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,r,o){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",o),this._halfBlur(a,e,n,n,r,"longitudinal",o)}_halfBlur(e,t,n,r,o,a,c){const d=this._renderer,f=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,v=new Oe(this._lodPlanes[r],f),_=f.uniforms,y=this._sizeLods[n]-1,E=isFinite(o)?Math.PI/(2*y):2*Math.PI/(2*or-1),b=o/E,x=isFinite(o)?1+Math.floor(m*b):or;x>or&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${or}`);const g=[];let P=0;for(let F=0;F<or;++F){const q=F/b,R=Math.exp(-q*q/2);g.push(R),F===0?P+=R:F<x&&(P+=2*R)}for(let F=0;F<g.length;F++)g[F]=g[F]/P;_.envMap.value=e.texture,_.samples.value=x,_.weights.value=g,_.latitudinal.value=a==="latitudinal",c&&(_.poleAxis.value=c);const{_lodMax:w}=this;_.dTheta.value=E,_.mipInt.value=w-n;const L=this._sizeLods[r],N=3*L*(r>w-Gr?r-w+Gr:0),u=4*(this._cubeSize-L);po(t,N,u,3*L,2*L),d.setRenderTarget(t),d.render(v,wa)}}function xg(i){const e=[],t=[],n=[];let r=i;const o=i-Gr+1+Rc.length;for(let a=0;a<o;a++){const c=Math.pow(2,r);t.push(c);let d=1/c;a>i-Gr?d=Rc[a-i+Gr-1]:a===0&&(d=0),n.push(d);const f=1/(c-2),m=-f,v=1+f,_=[m,m,v,m,v,v,m,m,v,v,m,v],y=6,E=6,b=3,x=2,g=1,P=new Float32Array(b*E*y),w=new Float32Array(x*E*y),L=new Float32Array(g*E*y);for(let u=0;u<y;u++){const F=u%3*2/3-1,q=u>2?0:-1,R=[F,q,0,F+2/3,q,0,F+2/3,q+1,0,F,q,0,F+2/3,q+1,0,F,q+1,0];P.set(R,b*E*u),w.set(_,x*E*u);const I=[u,u,u,u,u,u];L.set(I,g*E*u)}const N=new cn;N.setAttribute("position",new ei(P,b)),N.setAttribute("uv",new ei(w,x)),N.setAttribute("faceIndex",new ei(L,g)),e.push(N),r>Gr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ic(i,e,t){const n=new pr(i,e,t);return n.texture.mapping=Io,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function po(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function yg(i,e,t){const n=new Float32Array(or),r=new z(0,1,0);return new mr({name:"SphericalGaussianBlur",defines:{n:or,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ll(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Uc(){return new mr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ll(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Nc(){return new mr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ll(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function ll(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Mg(i){let e=new WeakMap,t=null;function n(c){if(c&&c.isTexture){const d=c.mapping,f=d===Xa||d===qa,m=d===jr||d===Yr;if(f||m)if(c.isRenderTargetTexture&&c.needsPMREMUpdate===!0){c.needsPMREMUpdate=!1;let v=e.get(c);return t===null&&(t=new Dc(i)),v=f?t.fromEquirectangular(c,v):t.fromCubemap(c,v),e.set(c,v),v.texture}else{if(e.has(c))return e.get(c).texture;{const v=c.image;if(f&&v&&v.height>0||m&&v&&r(v)){t===null&&(t=new Dc(i));const _=f?t.fromEquirectangular(c):t.fromCubemap(c);return e.set(c,_),c.addEventListener("dispose",o),_.texture}else return null}}}return c}function r(c){let d=0;const f=6;for(let m=0;m<f;m++)c[m]!==void 0&&d++;return d===f}function o(c){const d=c.target;d.removeEventListener("dispose",o);const f=e.get(d);f!==void 0&&(e.delete(d),f.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Sg(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Eg(i,e,t,n){const r={},o=new WeakMap;function a(v){const _=v.target;_.index!==null&&e.remove(_.index);for(const E in _.attributes)e.remove(_.attributes[E]);for(const E in _.morphAttributes){const b=_.morphAttributes[E];for(let x=0,g=b.length;x<g;x++)e.remove(b[x])}_.removeEventListener("dispose",a),delete r[_.id];const y=o.get(_);y&&(e.remove(y),o.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function c(v,_){return r[_.id]===!0||(_.addEventListener("dispose",a),r[_.id]=!0,t.memory.geometries++),_}function d(v){const _=v.attributes;for(const E in _)e.update(_[E],i.ARRAY_BUFFER);const y=v.morphAttributes;for(const E in y){const b=y[E];for(let x=0,g=b.length;x<g;x++)e.update(b[x],i.ARRAY_BUFFER)}}function f(v){const _=[],y=v.index,E=v.attributes.position;let b=0;if(y!==null){const P=y.array;b=y.version;for(let w=0,L=P.length;w<L;w+=3){const N=P[w+0],u=P[w+1],F=P[w+2];_.push(N,u,u,F,F,N)}}else if(E!==void 0){const P=E.array;b=E.version;for(let w=0,L=P.length/3-1;w<L;w+=3){const N=w+0,u=w+1,F=w+2;_.push(N,u,u,F,F,N)}}else return;const x=new(zu(_)?Xu:Wu)(_,1);x.version=b;const g=o.get(v);g&&e.remove(g),o.set(v,x)}function m(v){const _=o.get(v);if(_){const y=v.index;y!==null&&_.version<y.version&&f(v)}else f(v);return o.get(v)}return{get:c,update:d,getWireframeAttribute:m}}function bg(i,e,t,n){const r=n.isWebGL2;let o;function a(_){o=_}let c,d;function f(_){c=_.type,d=_.bytesPerElement}function m(_,y){i.drawElements(o,y,c,_*d),t.update(y,o,1)}function v(_,y,E){if(E===0)return;let b,x;if(r)b=i,x="drawElementsInstanced";else if(b=e.get("ANGLE_instanced_arrays"),x="drawElementsInstancedANGLE",b===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}b[x](o,y,c,_*d,E),t.update(y,o,E)}this.setMode=a,this.setIndex=f,this.render=m,this.renderInstances=v}function Tg(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,a,c){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=c*(o/3);break;case i.LINES:t.lines+=c*(o/2);break;case i.LINE_STRIP:t.lines+=c*(o-1);break;case i.LINE_LOOP:t.lines+=c*o;break;case i.POINTS:t.points+=c*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function wg(i,e){return i[0]-e[0]}function Ag(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Cg(i,e,t){const n={},r=new Float32Array(8),o=new WeakMap,a=new on,c=[];for(let f=0;f<8;f++)c[f]=[f,0];function d(f,m,v){const _=f.morphTargetInfluences;if(e.isWebGL2===!0){const E=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,b=E!==void 0?E.length:0;let x=o.get(m);if(x===void 0||x.count!==b){let te=function(){Y.dispose(),o.delete(m),m.removeEventListener("dispose",te)};var y=te;x!==void 0&&x.texture.dispose();const w=m.morphAttributes.position!==void 0,L=m.morphAttributes.normal!==void 0,N=m.morphAttributes.color!==void 0,u=m.morphAttributes.position||[],F=m.morphAttributes.normal||[],q=m.morphAttributes.color||[];let R=0;w===!0&&(R=1),L===!0&&(R=2),N===!0&&(R=3);let I=m.attributes.position.count*R,fe=1;I>e.maxTextureSize&&(fe=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const oe=new Float32Array(I*fe*4*b),Y=new Gu(oe,I,fe,b);Y.type=Oi,Y.needsUpdate=!0;const J=R*4;for(let _e=0;_e<b;_e++){const le=u[_e],de=F[_e],ve=q[_e],ge=I*fe*4*_e;for(let $=0;$<le.count;$++){const se=$*J;w===!0&&(a.fromBufferAttribute(le,$),oe[ge+se+0]=a.x,oe[ge+se+1]=a.y,oe[ge+se+2]=a.z,oe[ge+se+3]=0),L===!0&&(a.fromBufferAttribute(de,$),oe[ge+se+4]=a.x,oe[ge+se+5]=a.y,oe[ge+se+6]=a.z,oe[ge+se+7]=0),N===!0&&(a.fromBufferAttribute(ve,$),oe[ge+se+8]=a.x,oe[ge+se+9]=a.y,oe[ge+se+10]=a.z,oe[ge+se+11]=ve.itemSize===4?a.w:1)}}x={count:b,texture:Y,size:new et(I,fe)},o.set(m,x),m.addEventListener("dispose",te)}let g=0;for(let w=0;w<_.length;w++)g+=_[w];const P=m.morphTargetsRelative?1:1-g;v.getUniforms().setValue(i,"morphTargetBaseInfluence",P),v.getUniforms().setValue(i,"morphTargetInfluences",_),v.getUniforms().setValue(i,"morphTargetsTexture",x.texture,t),v.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}else{const E=_===void 0?0:_.length;let b=n[m.id];if(b===void 0||b.length!==E){b=[];for(let L=0;L<E;L++)b[L]=[L,0];n[m.id]=b}for(let L=0;L<E;L++){const N=b[L];N[0]=L,N[1]=_[L]}b.sort(Ag);for(let L=0;L<8;L++)L<E&&b[L][1]?(c[L][0]=b[L][0],c[L][1]=b[L][1]):(c[L][0]=Number.MAX_SAFE_INTEGER,c[L][1]=0);c.sort(wg);const x=m.morphAttributes.position,g=m.morphAttributes.normal;let P=0;for(let L=0;L<8;L++){const N=c[L],u=N[0],F=N[1];u!==Number.MAX_SAFE_INTEGER&&F?(x&&m.getAttribute("morphTarget"+L)!==x[u]&&m.setAttribute("morphTarget"+L,x[u]),g&&m.getAttribute("morphNormal"+L)!==g[u]&&m.setAttribute("morphNormal"+L,g[u]),r[L]=F,P+=F):(x&&m.hasAttribute("morphTarget"+L)===!0&&m.deleteAttribute("morphTarget"+L),g&&m.hasAttribute("morphNormal"+L)===!0&&m.deleteAttribute("morphNormal"+L),r[L]=0)}const w=m.morphTargetsRelative?1:1-P;v.getUniforms().setValue(i,"morphTargetBaseInfluence",w),v.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:d}}function Rg(i,e,t,n){let r=new WeakMap;function o(d){const f=n.render.frame,m=d.geometry,v=e.get(d,m);if(r.get(v)!==f&&(e.update(v),r.set(v,f)),d.isInstancedMesh&&(d.hasEventListener("dispose",c)===!1&&d.addEventListener("dispose",c),r.get(d)!==f&&(t.update(d.instanceMatrix,i.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,i.ARRAY_BUFFER),r.set(d,f))),d.isSkinnedMesh){const _=d.skeleton;r.get(_)!==f&&(_.update(),r.set(_,f))}return v}function a(){r=new WeakMap}function c(d){const f=d.target;f.removeEventListener("dispose",c),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:o,dispose:a}}const Ku=new Fn,Qu=new Gu,Ju=new mf,eh=new Yu,Fc=[],Oc=[],Bc=new Float32Array(16),zc=new Float32Array(9),Hc=new Float32Array(4);function Jr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let o=Fc[r];if(o===void 0&&(o=new Float32Array(r),Fc[r]=o),e!==0){n.toArray(o,0);for(let a=1,c=0;a!==e;++a)c+=t,i[a].toArray(o,c)}return o}function en(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function tn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Oo(i,e){let t=Oc[e];t===void 0&&(t=new Int32Array(e),Oc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Pg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Lg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;i.uniform2fv(this.addr,e),tn(t,e)}}function Dg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;i.uniform3fv(this.addr,e),tn(t,e)}}function Ig(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;i.uniform4fv(this.addr,e),tn(t,e)}}function Ug(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;Hc.set(n),i.uniformMatrix2fv(this.addr,!1,Hc),tn(t,n)}}function Ng(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;zc.set(n),i.uniformMatrix3fv(this.addr,!1,zc),tn(t,n)}}function Fg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;Bc.set(n),i.uniformMatrix4fv(this.addr,!1,Bc),tn(t,n)}}function Og(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Bg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;i.uniform2iv(this.addr,e),tn(t,e)}}function zg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;i.uniform3iv(this.addr,e),tn(t,e)}}function Hg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;i.uniform4iv(this.addr,e),tn(t,e)}}function kg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Gg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;i.uniform2uiv(this.addr,e),tn(t,e)}}function Vg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;i.uniform3uiv(this.addr,e),tn(t,e)}}function Wg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;i.uniform4uiv(this.addr,e),tn(t,e)}}function Xg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||Ku,r)}function qg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Ju,r)}function jg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||eh,r)}function Yg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Qu,r)}function $g(i){switch(i){case 5126:return Pg;case 35664:return Lg;case 35665:return Dg;case 35666:return Ig;case 35674:return Ug;case 35675:return Ng;case 35676:return Fg;case 5124:case 35670:return Og;case 35667:case 35671:return Bg;case 35668:case 35672:return zg;case 35669:case 35673:return Hg;case 5125:return kg;case 36294:return Gg;case 36295:return Vg;case 36296:return Wg;case 35678:case 36198:case 36298:case 36306:case 35682:return Xg;case 35679:case 36299:case 36307:return qg;case 35680:case 36300:case 36308:case 36293:return jg;case 36289:case 36303:case 36311:case 36292:return Yg}}function Zg(i,e){i.uniform1fv(this.addr,e)}function Kg(i,e){const t=Jr(e,this.size,2);i.uniform2fv(this.addr,t)}function Qg(i,e){const t=Jr(e,this.size,3);i.uniform3fv(this.addr,t)}function Jg(i,e){const t=Jr(e,this.size,4);i.uniform4fv(this.addr,t)}function e_(i,e){const t=Jr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function t_(i,e){const t=Jr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function n_(i,e){const t=Jr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function i_(i,e){i.uniform1iv(this.addr,e)}function r_(i,e){i.uniform2iv(this.addr,e)}function s_(i,e){i.uniform3iv(this.addr,e)}function o_(i,e){i.uniform4iv(this.addr,e)}function a_(i,e){i.uniform1uiv(this.addr,e)}function l_(i,e){i.uniform2uiv(this.addr,e)}function c_(i,e){i.uniform3uiv(this.addr,e)}function u_(i,e){i.uniform4uiv(this.addr,e)}function h_(i,e,t){const n=this.cache,r=e.length,o=Oo(t,r);en(n,o)||(i.uniform1iv(this.addr,o),tn(n,o));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Ku,o[a])}function d_(i,e,t){const n=this.cache,r=e.length,o=Oo(t,r);en(n,o)||(i.uniform1iv(this.addr,o),tn(n,o));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Ju,o[a])}function f_(i,e,t){const n=this.cache,r=e.length,o=Oo(t,r);en(n,o)||(i.uniform1iv(this.addr,o),tn(n,o));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||eh,o[a])}function p_(i,e,t){const n=this.cache,r=e.length,o=Oo(t,r);en(n,o)||(i.uniform1iv(this.addr,o),tn(n,o));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Qu,o[a])}function m_(i){switch(i){case 5126:return Zg;case 35664:return Kg;case 35665:return Qg;case 35666:return Jg;case 35674:return e_;case 35675:return t_;case 35676:return n_;case 5124:case 35670:return i_;case 35667:case 35671:return r_;case 35668:case 35672:return s_;case 35669:case 35673:return o_;case 5125:return a_;case 36294:return l_;case 36295:return c_;case 36296:return u_;case 35678:case 36198:case 36298:case 36306:case 35682:return h_;case 35679:case 36299:case 36307:return d_;case 35680:case 36300:case 36308:case 36293:return f_;case 36289:case 36303:case 36311:case 36292:return p_}}class g_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=$g(t.type)}}class __{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=m_(t.type)}}class v_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let o=0,a=r.length;o!==a;++o){const c=r[o];c.setValue(e,t[c.id],n)}}}const Ca=/(\w+)(\])?(\[|\.)?/g;function kc(i,e){i.seq.push(e),i.map[e.id]=e}function x_(i,e,t){const n=i.name,r=n.length;for(Ca.lastIndex=0;;){const o=Ca.exec(n),a=Ca.lastIndex;let c=o[1];const d=o[2]==="]",f=o[3];if(d&&(c=c|0),f===void 0||f==="["&&a+2===r){kc(t,f===void 0?new g_(c,i,e):new __(c,i,e));break}else{let v=t.map[c];v===void 0&&(v=new v_(c),kc(t,v)),t=v}}}class bo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const o=e.getActiveUniform(t,r),a=e.getUniformLocation(t,o.name);x_(o,a,this)}}setValue(e,t,n,r){const o=this.map[t];o!==void 0&&o.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let o=0,a=t.length;o!==a;++o){const c=t[o],d=n[c.id];d.needsUpdate!==!1&&c.setValue(e,d.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,o=e.length;r!==o;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function Gc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let y_=0;function M_(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let a=r;a<o;a++){const c=a+1;n.push(`${c===e?">":" "} ${c}: ${t[a]}`)}return n.join(`
`)}function S_(i){switch(i){case ui:return["Linear","( value )"];case Bt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),["Linear","( value )"]}}function Vc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+M_(i.getShaderSource(e),a)}else return r}function E_(i,e){const t=S_(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function b_(i,e){let t;switch(e){case md:t="Linear";break;case gd:t="Reinhard";break;case _d:t="OptimizedCineon";break;case vd:t="ACESFilmic";break;case xd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function T_(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(vs).join(`
`)}function w_(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function A_(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const o=i.getActiveAttrib(e,r),a=o.name;let c=1;o.type===i.FLOAT_MAT2&&(c=2),o.type===i.FLOAT_MAT3&&(c=3),o.type===i.FLOAT_MAT4&&(c=4),t[a]={type:o.type,location:i.getAttribLocation(e,a),locationSize:c}}return t}function vs(i){return i!==""}function Wc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const C_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ka(i){return i.replace(C_,P_)}const R_=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function P_(i,e){let t=ft[e];if(t===void 0){const n=R_.get(e);if(n!==void 0)t=ft[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ka(t)}const L_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qc(i){return i.replace(L_,D_)}function D_(i,e,t,n){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function jc(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function I_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Au?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===jh?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Mi&&(e="SHADOWMAP_TYPE_VSM"),e}function U_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case jr:case Yr:e="ENVMAP_TYPE_CUBE";break;case Io:e="ENVMAP_TYPE_CUBE_UV";break}return e}function N_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Yr:e="ENVMAP_MODE_REFRACTION";break}return e}function F_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Pu:e="ENVMAP_BLENDING_MULTIPLY";break;case fd:e="ENVMAP_BLENDING_MIX";break;case pd:e="ENVMAP_BLENDING_ADD";break}return e}function O_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function B_(i,e,t,n){const r=i.getContext(),o=t.defines;let a=t.vertexShader,c=t.fragmentShader;const d=I_(t),f=U_(t),m=N_(t),v=F_(t),_=O_(t),y=t.isWebGL2?"":T_(t),E=w_(o),b=r.createProgram();let x,g,P=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(vs).join(`
`),x.length>0&&(x+=`
`),g=[y,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(vs).join(`
`),g.length>0&&(g+=`
`)):(x=[jc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vs).join(`
`),g=[y,jc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+m:"",t.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zi?"#define TONE_MAPPING":"",t.toneMapping!==zi?ft.tonemapping_pars_fragment:"",t.toneMapping!==zi?b_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,E_("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(vs).join(`
`)),a=Ka(a),a=Wc(a,t),a=Xc(a,t),c=Ka(c),c=Wc(c,t),c=Xc(c,t),a=qc(a),c=qc(c),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,x=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["#define varying in",t.glslVersion===fc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===fc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const w=P+x+a,L=P+g+c,N=Gc(r,r.VERTEX_SHADER,w),u=Gc(r,r.FRAGMENT_SHADER,L);if(r.attachShader(b,N),r.attachShader(b,u),t.index0AttributeName!==void 0?r.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b),i.debug.checkShaderErrors){const R=r.getProgramInfoLog(b).trim(),I=r.getShaderInfoLog(N).trim(),fe=r.getShaderInfoLog(u).trim();let oe=!0,Y=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(oe=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,b,N,u);else{const J=Vc(r,N,"vertex"),te=Vc(r,u,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Program Info Log: `+R+`
`+J+`
`+te)}else R!==""?console.warn("THREE.WebGLProgram: Program Info Log:",R):(I===""||fe==="")&&(Y=!1);Y&&(this.diagnostics={runnable:oe,programLog:R,vertexShader:{log:I,prefix:x},fragmentShader:{log:fe,prefix:g}})}r.deleteShader(N),r.deleteShader(u);let F;this.getUniforms=function(){return F===void 0&&(F=new bo(r,b)),F};let q;return this.getAttributes=function(){return q===void 0&&(q=A_(r,b)),q},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=y_++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=N,this.fragmentShader=u,this}let z_=0;class H_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),o=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(o)===!1&&(a.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new k_(e),t.set(e,n)),n}}class k_{constructor(e){this.id=z_++,this.code=e,this.usedTimes=0}}function G_(i,e,t,n,r,o,a){const c=new ol,d=new H_,f=[],m=r.isWebGL2,v=r.logarithmicDepthBuffer,_=r.vertexTextures;let y=r.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(R){return R===0?"uv":`uv${R}`}function x(R,I,fe,oe,Y){const J=oe.fog,te=Y.geometry,_e=R.isMeshStandardMaterial?oe.environment:null,le=(R.isMeshStandardMaterial?t:e).get(R.envMap||_e),de=le&&le.mapping===Io?le.image.height:null,ve=E[R.type];R.precision!==null&&(y=r.getMaxPrecision(R.precision),y!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",y,"instead."));const ge=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,$=ge!==void 0?ge.length:0;let se=0;te.morphAttributes.position!==void 0&&(se=1),te.morphAttributes.normal!==void 0&&(se=2),te.morphAttributes.color!==void 0&&(se=3);let Pe,Ie,Be,Ye;if(ve){const At=si[ve];Pe=At.vertexShader,Ie=At.fragmentShader}else Pe=R.vertexShader,Ie=R.fragmentShader,d.update(R),Be=d.getVertexShaderID(R),Ye=d.getFragmentShaderID(R);const nt=i.getRenderTarget(),Xe=Y.isInstancedMesh===!0,lt=!!R.map,Zt=!!R.matcap,ct=!!le,Z=!!R.aoMap,Et=!!R.lightMap,We=!!R.bumpMap,tt=!!R.normalMap,Se=!!R.displacementMap,ht=!!R.emissiveMap,dt=!!R.metalnessMap,ot=!!R.roughnessMap,xt=R.anisotropy>0,Vt=R.clearcoat>0,Xt=R.iridescence>0,U=R.sheen>0,C=R.transmission>0,Q=xt&&!!R.anisotropyMap,be=Vt&&!!R.clearcoatMap,Ee=Vt&&!!R.clearcoatNormalMap,Te=Vt&&!!R.clearcoatRoughnessMap,He=Xt&&!!R.iridescenceMap,Ae=Xt&&!!R.iridescenceThicknessMap,re=U&&!!R.sheenColorMap,H=U&&!!R.sheenRoughnessMap,me=!!R.specularMap,Ne=!!R.specularColorMap,Re=!!R.specularIntensityMap,Ce=C&&!!R.transmissionMap,ke=C&&!!R.thicknessMap,pt=!!R.gradientMap,G=!!R.alphaMap,De=R.alphaTest>0,ie=!!R.alphaHash,Me=!!R.extensions,we=!!te.attributes.uv1,mt=!!te.attributes.uv2,St=!!te.attributes.uv3;let bt=zi;return R.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(bt=i.toneMapping),{isWebGL2:m,shaderID:ve,shaderType:R.type,shaderName:R.name,vertexShader:Pe,fragmentShader:Ie,defines:R.defines,customVertexShaderID:Be,customFragmentShaderID:Ye,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:y,instancing:Xe,instancingColor:Xe&&Y.instanceColor!==null,supportsVertexTextures:_,outputColorSpace:nt===null?i.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:ui,map:lt,matcap:Zt,envMap:ct,envMapMode:ct&&le.mapping,envMapCubeUVHeight:de,aoMap:Z,lightMap:Et,bumpMap:We,normalMap:tt,displacementMap:_&&Se,emissiveMap:ht,normalMapObjectSpace:tt&&R.normalMapType===Id,normalMapTangentSpace:tt&&R.normalMapType===Dd,metalnessMap:dt,roughnessMap:ot,anisotropy:xt,anisotropyMap:Q,clearcoat:Vt,clearcoatMap:be,clearcoatNormalMap:Ee,clearcoatRoughnessMap:Te,iridescence:Xt,iridescenceMap:He,iridescenceThicknessMap:Ae,sheen:U,sheenColorMap:re,sheenRoughnessMap:H,specularMap:me,specularColorMap:Ne,specularIntensityMap:Re,transmission:C,transmissionMap:Ce,thicknessMap:ke,gradientMap:pt,opaque:R.transparent===!1&&R.blending===Xr,alphaMap:G,alphaTest:De,alphaHash:ie,combine:R.combine,mapUv:lt&&b(R.map.channel),aoMapUv:Z&&b(R.aoMap.channel),lightMapUv:Et&&b(R.lightMap.channel),bumpMapUv:We&&b(R.bumpMap.channel),normalMapUv:tt&&b(R.normalMap.channel),displacementMapUv:Se&&b(R.displacementMap.channel),emissiveMapUv:ht&&b(R.emissiveMap.channel),metalnessMapUv:dt&&b(R.metalnessMap.channel),roughnessMapUv:ot&&b(R.roughnessMap.channel),anisotropyMapUv:Q&&b(R.anisotropyMap.channel),clearcoatMapUv:be&&b(R.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&b(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&b(R.clearcoatRoughnessMap.channel),iridescenceMapUv:He&&b(R.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&b(R.iridescenceThicknessMap.channel),sheenColorMapUv:re&&b(R.sheenColorMap.channel),sheenRoughnessMapUv:H&&b(R.sheenRoughnessMap.channel),specularMapUv:me&&b(R.specularMap.channel),specularColorMapUv:Ne&&b(R.specularColorMap.channel),specularIntensityMapUv:Re&&b(R.specularIntensityMap.channel),transmissionMapUv:Ce&&b(R.transmissionMap.channel),thicknessMapUv:ke&&b(R.thicknessMap.channel),alphaMapUv:G&&b(R.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(tt||xt),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,vertexUv1s:we,vertexUv2s:mt,vertexUv3s:St,pointsUvs:Y.isPoints===!0&&!!te.attributes.uv&&(lt||G),fog:!!J,useFog:R.fog===!0,fogExp2:J&&J.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:v,skinning:Y.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:se,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:R.dithering,shadowMapEnabled:i.shadowMap.enabled&&fe.length>0,shadowMapType:i.shadowMap.type,toneMapping:bt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:lt&&R.map.isVideoTexture===!0&&R.map.colorSpace===Bt,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===ai,flipSided:R.side===wn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionDerivatives:Me&&R.extensions.derivatives===!0,extensionFragDepth:Me&&R.extensions.fragDepth===!0,extensionDrawBuffers:Me&&R.extensions.drawBuffers===!0,extensionShaderTextureLOD:Me&&R.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:m||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:m||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:m||n.has("EXT_shader_texture_lod"),customProgramCacheKey:R.customProgramCacheKey()}}function g(R){const I=[];if(R.shaderID?I.push(R.shaderID):(I.push(R.customVertexShaderID),I.push(R.customFragmentShaderID)),R.defines!==void 0)for(const fe in R.defines)I.push(fe),I.push(R.defines[fe]);return R.isRawShaderMaterial===!1&&(P(I,R),w(I,R),I.push(i.outputColorSpace)),I.push(R.customProgramCacheKey),I.join()}function P(R,I){R.push(I.precision),R.push(I.outputColorSpace),R.push(I.envMapMode),R.push(I.envMapCubeUVHeight),R.push(I.mapUv),R.push(I.alphaMapUv),R.push(I.lightMapUv),R.push(I.aoMapUv),R.push(I.bumpMapUv),R.push(I.normalMapUv),R.push(I.displacementMapUv),R.push(I.emissiveMapUv),R.push(I.metalnessMapUv),R.push(I.roughnessMapUv),R.push(I.anisotropyMapUv),R.push(I.clearcoatMapUv),R.push(I.clearcoatNormalMapUv),R.push(I.clearcoatRoughnessMapUv),R.push(I.iridescenceMapUv),R.push(I.iridescenceThicknessMapUv),R.push(I.sheenColorMapUv),R.push(I.sheenRoughnessMapUv),R.push(I.specularMapUv),R.push(I.specularColorMapUv),R.push(I.specularIntensityMapUv),R.push(I.transmissionMapUv),R.push(I.thicknessMapUv),R.push(I.combine),R.push(I.fogExp2),R.push(I.sizeAttenuation),R.push(I.morphTargetsCount),R.push(I.morphAttributeCount),R.push(I.numDirLights),R.push(I.numPointLights),R.push(I.numSpotLights),R.push(I.numSpotLightMaps),R.push(I.numHemiLights),R.push(I.numRectAreaLights),R.push(I.numDirLightShadows),R.push(I.numPointLightShadows),R.push(I.numSpotLightShadows),R.push(I.numSpotLightShadowsWithMaps),R.push(I.shadowMapType),R.push(I.toneMapping),R.push(I.numClippingPlanes),R.push(I.numClipIntersection),R.push(I.depthPacking)}function w(R,I){c.disableAll(),I.isWebGL2&&c.enable(0),I.supportsVertexTextures&&c.enable(1),I.instancing&&c.enable(2),I.instancingColor&&c.enable(3),I.matcap&&c.enable(4),I.envMap&&c.enable(5),I.normalMapObjectSpace&&c.enable(6),I.normalMapTangentSpace&&c.enable(7),I.clearcoat&&c.enable(8),I.iridescence&&c.enable(9),I.alphaTest&&c.enable(10),I.vertexColors&&c.enable(11),I.vertexAlphas&&c.enable(12),I.vertexUv1s&&c.enable(13),I.vertexUv2s&&c.enable(14),I.vertexUv3s&&c.enable(15),I.vertexTangents&&c.enable(16),I.anisotropy&&c.enable(17),R.push(c.mask),c.disableAll(),I.fog&&c.enable(0),I.useFog&&c.enable(1),I.flatShading&&c.enable(2),I.logarithmicDepthBuffer&&c.enable(3),I.skinning&&c.enable(4),I.morphTargets&&c.enable(5),I.morphNormals&&c.enable(6),I.morphColors&&c.enable(7),I.premultipliedAlpha&&c.enable(8),I.shadowMapEnabled&&c.enable(9),I.useLegacyLights&&c.enable(10),I.doubleSided&&c.enable(11),I.flipSided&&c.enable(12),I.useDepthPacking&&c.enable(13),I.dithering&&c.enable(14),I.transmission&&c.enable(15),I.sheen&&c.enable(16),I.opaque&&c.enable(17),I.pointsUvs&&c.enable(18),I.decodeVideoTexture&&c.enable(19),R.push(c.mask)}function L(R){const I=E[R.type];let fe;if(I){const oe=si[I];fe=Cf.clone(oe.uniforms)}else fe=R.uniforms;return fe}function N(R,I){let fe;for(let oe=0,Y=f.length;oe<Y;oe++){const J=f[oe];if(J.cacheKey===I){fe=J,++fe.usedTimes;break}}return fe===void 0&&(fe=new B_(i,I,R,o),f.push(fe)),fe}function u(R){if(--R.usedTimes===0){const I=f.indexOf(R);f[I]=f[f.length-1],f.pop(),R.destroy()}}function F(R){d.remove(R)}function q(){d.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:L,acquireProgram:N,releaseProgram:u,releaseShaderCache:F,programs:f,dispose:q}}function V_(){let i=new WeakMap;function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function t(o){i.delete(o)}function n(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function W_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Yc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function $c(){const i=[];let e=0;const t=[],n=[],r=[];function o(){e=0,t.length=0,n.length=0,r.length=0}function a(v,_,y,E,b,x){let g=i[e];return g===void 0?(g={id:v.id,object:v,geometry:_,material:y,groupOrder:E,renderOrder:v.renderOrder,z:b,group:x},i[e]=g):(g.id=v.id,g.object=v,g.geometry=_,g.material=y,g.groupOrder=E,g.renderOrder=v.renderOrder,g.z=b,g.group=x),e++,g}function c(v,_,y,E,b,x){const g=a(v,_,y,E,b,x);y.transmission>0?n.push(g):y.transparent===!0?r.push(g):t.push(g)}function d(v,_,y,E,b,x){const g=a(v,_,y,E,b,x);y.transmission>0?n.unshift(g):y.transparent===!0?r.unshift(g):t.unshift(g)}function f(v,_){t.length>1&&t.sort(v||W_),n.length>1&&n.sort(_||Yc),r.length>1&&r.sort(_||Yc)}function m(){for(let v=e,_=i.length;v<_;v++){const y=i[v];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:n,transparent:r,init:o,push:c,unshift:d,finish:m,sort:f}}function X_(){let i=new WeakMap;function e(n,r){const o=i.get(n);let a;return o===void 0?(a=new $c,i.set(n,[a])):r>=o.length?(a=new $c,o.push(a)):a=o[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function q_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new Mt};break;case"SpotLight":t={position:new z,direction:new z,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Mt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Mt,groundColor:new Mt};break;case"RectAreaLight":t={color:new Mt,position:new z,halfWidth:new z,halfHeight:new z};break}return i[e.id]=t,t}}}function j_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Y_=0;function $_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Z_(i,e){const t=new q_,n=j_(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let m=0;m<9;m++)r.probe.push(new z);const o=new z,a=new It,c=new It;function d(m,v){let _=0,y=0,E=0;for(let fe=0;fe<9;fe++)r.probe[fe].set(0,0,0);let b=0,x=0,g=0,P=0,w=0,L=0,N=0,u=0,F=0,q=0;m.sort($_);const R=v===!0?Math.PI:1;for(let fe=0,oe=m.length;fe<oe;fe++){const Y=m[fe],J=Y.color,te=Y.intensity,_e=Y.distance,le=Y.shadow&&Y.shadow.map?Y.shadow.map.texture:null;if(Y.isAmbientLight)_+=J.r*te*R,y+=J.g*te*R,E+=J.b*te*R;else if(Y.isLightProbe)for(let de=0;de<9;de++)r.probe[de].addScaledVector(Y.sh.coefficients[de],te);else if(Y.isDirectionalLight){const de=t.get(Y);if(de.color.copy(Y.color).multiplyScalar(Y.intensity*R),Y.castShadow){const ve=Y.shadow,ge=n.get(Y);ge.shadowBias=ve.bias,ge.shadowNormalBias=ve.normalBias,ge.shadowRadius=ve.radius,ge.shadowMapSize=ve.mapSize,r.directionalShadow[b]=ge,r.directionalShadowMap[b]=le,r.directionalShadowMatrix[b]=Y.shadow.matrix,L++}r.directional[b]=de,b++}else if(Y.isSpotLight){const de=t.get(Y);de.position.setFromMatrixPosition(Y.matrixWorld),de.color.copy(J).multiplyScalar(te*R),de.distance=_e,de.coneCos=Math.cos(Y.angle),de.penumbraCos=Math.cos(Y.angle*(1-Y.penumbra)),de.decay=Y.decay,r.spot[g]=de;const ve=Y.shadow;if(Y.map&&(r.spotLightMap[F]=Y.map,F++,ve.updateMatrices(Y),Y.castShadow&&q++),r.spotLightMatrix[g]=ve.matrix,Y.castShadow){const ge=n.get(Y);ge.shadowBias=ve.bias,ge.shadowNormalBias=ve.normalBias,ge.shadowRadius=ve.radius,ge.shadowMapSize=ve.mapSize,r.spotShadow[g]=ge,r.spotShadowMap[g]=le,u++}g++}else if(Y.isRectAreaLight){const de=t.get(Y);de.color.copy(J).multiplyScalar(te),de.halfWidth.set(Y.width*.5,0,0),de.halfHeight.set(0,Y.height*.5,0),r.rectArea[P]=de,P++}else if(Y.isPointLight){const de=t.get(Y);if(de.color.copy(Y.color).multiplyScalar(Y.intensity*R),de.distance=Y.distance,de.decay=Y.decay,Y.castShadow){const ve=Y.shadow,ge=n.get(Y);ge.shadowBias=ve.bias,ge.shadowNormalBias=ve.normalBias,ge.shadowRadius=ve.radius,ge.shadowMapSize=ve.mapSize,ge.shadowCameraNear=ve.camera.near,ge.shadowCameraFar=ve.camera.far,r.pointShadow[x]=ge,r.pointShadowMap[x]=le,r.pointShadowMatrix[x]=Y.shadow.matrix,N++}r.point[x]=de,x++}else if(Y.isHemisphereLight){const de=t.get(Y);de.skyColor.copy(Y.color).multiplyScalar(te*R),de.groundColor.copy(Y.groundColor).multiplyScalar(te*R),r.hemi[w]=de,w++}}P>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ue.LTC_FLOAT_1,r.rectAreaLTC2=Ue.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Ue.LTC_HALF_1,r.rectAreaLTC2=Ue.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=_,r.ambient[1]=y,r.ambient[2]=E;const I=r.hash;(I.directionalLength!==b||I.pointLength!==x||I.spotLength!==g||I.rectAreaLength!==P||I.hemiLength!==w||I.numDirectionalShadows!==L||I.numPointShadows!==N||I.numSpotShadows!==u||I.numSpotMaps!==F)&&(r.directional.length=b,r.spot.length=g,r.rectArea.length=P,r.point.length=x,r.hemi.length=w,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=u,r.spotShadowMap.length=u,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=u+F-q,r.spotLightMap.length=F,r.numSpotLightShadowsWithMaps=q,I.directionalLength=b,I.pointLength=x,I.spotLength=g,I.rectAreaLength=P,I.hemiLength=w,I.numDirectionalShadows=L,I.numPointShadows=N,I.numSpotShadows=u,I.numSpotMaps=F,r.version=Y_++)}function f(m,v){let _=0,y=0,E=0,b=0,x=0;const g=v.matrixWorldInverse;for(let P=0,w=m.length;P<w;P++){const L=m[P];if(L.isDirectionalLight){const N=r.directional[_];N.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),N.direction.sub(o),N.direction.transformDirection(g),_++}else if(L.isSpotLight){const N=r.spot[E];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(g),N.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),N.direction.sub(o),N.direction.transformDirection(g),E++}else if(L.isRectAreaLight){const N=r.rectArea[b];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(g),c.identity(),a.copy(L.matrixWorld),a.premultiply(g),c.extractRotation(a),N.halfWidth.set(L.width*.5,0,0),N.halfHeight.set(0,L.height*.5,0),N.halfWidth.applyMatrix4(c),N.halfHeight.applyMatrix4(c),b++}else if(L.isPointLight){const N=r.point[y];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(g),y++}else if(L.isHemisphereLight){const N=r.hemi[x];N.direction.setFromMatrixPosition(L.matrixWorld),N.direction.transformDirection(g),x++}}}return{setup:d,setupView:f,state:r}}function Zc(i,e){const t=new Z_(i,e),n=[],r=[];function o(){n.length=0,r.length=0}function a(v){n.push(v)}function c(v){r.push(v)}function d(v){t.setup(n,v)}function f(v){t.setupView(n,v)}return{init:o,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:d,setupLightsView:f,pushLight:a,pushShadow:c}}function K_(i,e){let t=new WeakMap;function n(o,a=0){const c=t.get(o);let d;return c===void 0?(d=new Zc(i,e),t.set(o,[d])):a>=c.length?(d=new Zc(i,e),c.push(d)):d=c[a],d}function r(){t=new WeakMap}return{get:n,dispose:r}}class Q_ extends Qr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class J_ extends Qr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const e0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,t0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function n0(i,e,t){let n=new al;const r=new et,o=new et,a=new on,c=new Q_({depthPacking:Ld}),d=new J_,f={},m=t.maxTextureSize,v={[Vi]:wn,[wn]:Vi,[ai]:ai},_=new mr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:e0,fragmentShader:t0}),y=_.clone();y.defines.HORIZONTAL_PASS=1;const E=new cn;E.setAttribute("position",new ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Oe(E,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Au;let g=this.type;this.render=function(N,u,F){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||N.length===0)return;const q=i.getRenderTarget(),R=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),fe=i.state;fe.setBlending(Bi),fe.buffers.color.setClear(1,1,1,1),fe.buffers.depth.setTest(!0),fe.setScissorTest(!1);const oe=g!==Mi&&this.type===Mi,Y=g===Mi&&this.type!==Mi;for(let J=0,te=N.length;J<te;J++){const _e=N[J],le=_e.shadow;if(le===void 0){console.warn("THREE.WebGLShadowMap:",_e,"has no shadow.");continue}if(le.autoUpdate===!1&&le.needsUpdate===!1)continue;r.copy(le.mapSize);const de=le.getFrameExtents();if(r.multiply(de),o.copy(le.mapSize),(r.x>m||r.y>m)&&(r.x>m&&(o.x=Math.floor(m/de.x),r.x=o.x*de.x,le.mapSize.x=o.x),r.y>m&&(o.y=Math.floor(m/de.y),r.y=o.y*de.y,le.mapSize.y=o.y)),le.map===null||oe===!0||Y===!0){const ge=this.type!==Mi?{minFilter:yn,magFilter:yn}:{};le.map!==null&&le.map.dispose(),le.map=new pr(r.x,r.y,ge),le.map.texture.name=_e.name+".shadowMap",le.camera.updateProjectionMatrix()}i.setRenderTarget(le.map),i.clear();const ve=le.getViewportCount();for(let ge=0;ge<ve;ge++){const $=le.getViewport(ge);a.set(o.x*$.x,o.y*$.y,o.x*$.z,o.y*$.w),fe.viewport(a),le.updateMatrices(_e,ge),n=le.getFrustum(),L(u,F,le.camera,_e,this.type)}le.isPointLightShadow!==!0&&this.type===Mi&&P(le,F),le.needsUpdate=!1}g=this.type,x.needsUpdate=!1,i.setRenderTarget(q,R,I)};function P(N,u){const F=e.update(b);_.defines.VSM_SAMPLES!==N.blurSamples&&(_.defines.VSM_SAMPLES=N.blurSamples,y.defines.VSM_SAMPLES=N.blurSamples,_.needsUpdate=!0,y.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new pr(r.x,r.y)),_.uniforms.shadow_pass.value=N.map.texture,_.uniforms.resolution.value=N.mapSize,_.uniforms.radius.value=N.radius,i.setRenderTarget(N.mapPass),i.clear(),i.renderBufferDirect(u,null,F,_,b,null),y.uniforms.shadow_pass.value=N.mapPass.texture,y.uniforms.resolution.value=N.mapSize,y.uniforms.radius.value=N.radius,i.setRenderTarget(N.map),i.clear(),i.renderBufferDirect(u,null,F,y,b,null)}function w(N,u,F,q){let R=null;const I=F.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(I!==void 0)R=I;else if(R=F.isPointLight===!0?d:c,i.localClippingEnabled&&u.clipShadows===!0&&Array.isArray(u.clippingPlanes)&&u.clippingPlanes.length!==0||u.displacementMap&&u.displacementScale!==0||u.alphaMap&&u.alphaTest>0||u.map&&u.alphaTest>0){const fe=R.uuid,oe=u.uuid;let Y=f[fe];Y===void 0&&(Y={},f[fe]=Y);let J=Y[oe];J===void 0&&(J=R.clone(),Y[oe]=J),R=J}if(R.visible=u.visible,R.wireframe=u.wireframe,q===Mi?R.side=u.shadowSide!==null?u.shadowSide:u.side:R.side=u.shadowSide!==null?u.shadowSide:v[u.side],R.alphaMap=u.alphaMap,R.alphaTest=u.alphaTest,R.map=u.map,R.clipShadows=u.clipShadows,R.clippingPlanes=u.clippingPlanes,R.clipIntersection=u.clipIntersection,R.displacementMap=u.displacementMap,R.displacementScale=u.displacementScale,R.displacementBias=u.displacementBias,R.wireframeLinewidth=u.wireframeLinewidth,R.linewidth=u.linewidth,F.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const fe=i.properties.get(R);fe.light=F}return R}function L(N,u,F,q,R){if(N.visible===!1)return;if(N.layers.test(u.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&R===Mi)&&(!N.frustumCulled||n.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,N.matrixWorld);const oe=e.update(N),Y=N.material;if(Array.isArray(Y)){const J=oe.groups;for(let te=0,_e=J.length;te<_e;te++){const le=J[te],de=Y[le.materialIndex];if(de&&de.visible){const ve=w(N,de,q,R);i.renderBufferDirect(F,null,oe,ve,N,le)}}}else if(Y.visible){const J=w(N,Y,q,R);i.renderBufferDirect(F,null,oe,J,N,null)}}const fe=N.children;for(let oe=0,Y=fe.length;oe<Y;oe++)L(fe[oe],u,F,q,R)}}function i0(i,e,t){const n=t.isWebGL2;function r(){let G=!1;const De=new on;let ie=null;const Me=new on(0,0,0,0);return{setMask:function(we){ie!==we&&!G&&(i.colorMask(we,we,we,we),ie=we)},setLocked:function(we){G=we},setClear:function(we,mt,St,bt,nn){nn===!0&&(we*=bt,mt*=bt,St*=bt),De.set(we,mt,St,bt),Me.equals(De)===!1&&(i.clearColor(we,mt,St,bt),Me.copy(De))},reset:function(){G=!1,ie=null,Me.set(-1,0,0,0)}}}function o(){let G=!1,De=null,ie=null,Me=null;return{setTest:function(we){we?nt(i.DEPTH_TEST):Xe(i.DEPTH_TEST)},setMask:function(we){De!==we&&!G&&(i.depthMask(we),De=we)},setFunc:function(we){if(ie!==we){switch(we){case od:i.depthFunc(i.NEVER);break;case ad:i.depthFunc(i.ALWAYS);break;case ld:i.depthFunc(i.LESS);break;case Wa:i.depthFunc(i.LEQUAL);break;case cd:i.depthFunc(i.EQUAL);break;case ud:i.depthFunc(i.GEQUAL);break;case hd:i.depthFunc(i.GREATER);break;case dd:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ie=we}},setLocked:function(we){G=we},setClear:function(we){Me!==we&&(i.clearDepth(we),Me=we)},reset:function(){G=!1,De=null,ie=null,Me=null}}}function a(){let G=!1,De=null,ie=null,Me=null,we=null,mt=null,St=null,bt=null,nn=null;return{setTest:function(At){G||(At?nt(i.STENCIL_TEST):Xe(i.STENCIL_TEST))},setMask:function(At){De!==At&&!G&&(i.stencilMask(At),De=At)},setFunc:function(At,On,an){(ie!==At||Me!==On||we!==an)&&(i.stencilFunc(At,On,an),ie=At,Me=On,we=an)},setOp:function(At,On,an){(mt!==At||St!==On||bt!==an)&&(i.stencilOp(At,On,an),mt=At,St=On,bt=an)},setLocked:function(At){G=At},setClear:function(At){nn!==At&&(i.clearStencil(At),nn=At)},reset:function(){G=!1,De=null,ie=null,Me=null,we=null,mt=null,St=null,bt=null,nn=null}}}const c=new r,d=new o,f=new a,m=new WeakMap,v=new WeakMap;let _={},y={},E=new WeakMap,b=[],x=null,g=!1,P=null,w=null,L=null,N=null,u=null,F=null,q=null,R=!1,I=null,fe=null,oe=null,Y=null,J=null;const te=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let _e=!1,le=0;const de=i.getParameter(i.VERSION);de.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(de)[1]),_e=le>=1):de.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(de)[1]),_e=le>=2);let ve=null,ge={};const $=i.getParameter(i.SCISSOR_BOX),se=i.getParameter(i.VIEWPORT),Pe=new on().fromArray($),Ie=new on().fromArray(se);function Be(G,De,ie,Me){const we=new Uint8Array(4),mt=i.createTexture();i.bindTexture(G,mt),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let St=0;St<ie;St++)n&&(G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY)?i.texImage3D(De,0,i.RGBA,1,1,Me,0,i.RGBA,i.UNSIGNED_BYTE,we):i.texImage2D(De+St,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,we);return mt}const Ye={};Ye[i.TEXTURE_2D]=Be(i.TEXTURE_2D,i.TEXTURE_2D,1),Ye[i.TEXTURE_CUBE_MAP]=Be(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ye[i.TEXTURE_2D_ARRAY]=Be(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ye[i.TEXTURE_3D]=Be(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),c.setClear(0,0,0,1),d.setClear(1),f.setClear(0),nt(i.DEPTH_TEST),d.setFunc(Wa),Se(!1),ht(Ul),nt(i.CULL_FACE),We(Bi);function nt(G){_[G]!==!0&&(i.enable(G),_[G]=!0)}function Xe(G){_[G]!==!1&&(i.disable(G),_[G]=!1)}function lt(G,De){return y[G]!==De?(i.bindFramebuffer(G,De),y[G]=De,n&&(G===i.DRAW_FRAMEBUFFER&&(y[i.FRAMEBUFFER]=De),G===i.FRAMEBUFFER&&(y[i.DRAW_FRAMEBUFFER]=De)),!0):!1}function Zt(G,De){let ie=b,Me=!1;if(G)if(ie=E.get(De),ie===void 0&&(ie=[],E.set(De,ie)),G.isWebGLMultipleRenderTargets){const we=G.texture;if(ie.length!==we.length||ie[0]!==i.COLOR_ATTACHMENT0){for(let mt=0,St=we.length;mt<St;mt++)ie[mt]=i.COLOR_ATTACHMENT0+mt;ie.length=we.length,Me=!0}}else ie[0]!==i.COLOR_ATTACHMENT0&&(ie[0]=i.COLOR_ATTACHMENT0,Me=!0);else ie[0]!==i.BACK&&(ie[0]=i.BACK,Me=!0);Me&&(t.isWebGL2?i.drawBuffers(ie):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ie))}function ct(G){return x!==G?(i.useProgram(G),x=G,!0):!1}const Z={[Hr]:i.FUNC_ADD,[$h]:i.FUNC_SUBTRACT,[Zh]:i.FUNC_REVERSE_SUBTRACT};if(n)Z[Bl]=i.MIN,Z[zl]=i.MAX;else{const G=e.get("EXT_blend_minmax");G!==null&&(Z[Bl]=G.MIN_EXT,Z[zl]=G.MAX_EXT)}const Et={[Kh]:i.ZERO,[Qh]:i.ONE,[Jh]:i.SRC_COLOR,[Cu]:i.SRC_ALPHA,[sd]:i.SRC_ALPHA_SATURATE,[id]:i.DST_COLOR,[td]:i.DST_ALPHA,[ed]:i.ONE_MINUS_SRC_COLOR,[Ru]:i.ONE_MINUS_SRC_ALPHA,[rd]:i.ONE_MINUS_DST_COLOR,[nd]:i.ONE_MINUS_DST_ALPHA};function We(G,De,ie,Me,we,mt,St,bt){if(G===Bi){g===!0&&(Xe(i.BLEND),g=!1);return}if(g===!1&&(nt(i.BLEND),g=!0),G!==Yh){if(G!==P||bt!==R){if((w!==Hr||u!==Hr)&&(i.blendEquation(i.FUNC_ADD),w=Hr,u=Hr),bt)switch(G){case Xr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Nl:i.blendFunc(i.ONE,i.ONE);break;case Fl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ol:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Xr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Nl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Fl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ol:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}L=null,N=null,F=null,q=null,P=G,R=bt}return}we=we||De,mt=mt||ie,St=St||Me,(De!==w||we!==u)&&(i.blendEquationSeparate(Z[De],Z[we]),w=De,u=we),(ie!==L||Me!==N||mt!==F||St!==q)&&(i.blendFuncSeparate(Et[ie],Et[Me],Et[mt],Et[St]),L=ie,N=Me,F=mt,q=St),P=G,R=!1}function tt(G,De){G.side===ai?Xe(i.CULL_FACE):nt(i.CULL_FACE);let ie=G.side===wn;De&&(ie=!ie),Se(ie),G.blending===Xr&&G.transparent===!1?We(Bi):We(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.premultipliedAlpha),d.setFunc(G.depthFunc),d.setTest(G.depthTest),d.setMask(G.depthWrite),c.setMask(G.colorWrite);const Me=G.stencilWrite;f.setTest(Me),Me&&(f.setMask(G.stencilWriteMask),f.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),f.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),ot(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?nt(i.SAMPLE_ALPHA_TO_COVERAGE):Xe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Se(G){I!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),I=G)}function ht(G){G!==Xh?(nt(i.CULL_FACE),G!==fe&&(G===Ul?i.cullFace(i.BACK):G===qh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Xe(i.CULL_FACE),fe=G}function dt(G){G!==oe&&(_e&&i.lineWidth(G),oe=G)}function ot(G,De,ie){G?(nt(i.POLYGON_OFFSET_FILL),(Y!==De||J!==ie)&&(i.polygonOffset(De,ie),Y=De,J=ie)):Xe(i.POLYGON_OFFSET_FILL)}function xt(G){G?nt(i.SCISSOR_TEST):Xe(i.SCISSOR_TEST)}function Vt(G){G===void 0&&(G=i.TEXTURE0+te-1),ve!==G&&(i.activeTexture(G),ve=G)}function Xt(G,De,ie){ie===void 0&&(ve===null?ie=i.TEXTURE0+te-1:ie=ve);let Me=ge[ie];Me===void 0&&(Me={type:void 0,texture:void 0},ge[ie]=Me),(Me.type!==G||Me.texture!==De)&&(ve!==ie&&(i.activeTexture(ie),ve=ie),i.bindTexture(G,De||Ye[G]),Me.type=G,Me.texture=De)}function U(){const G=ge[ve];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function C(){try{i.compressedTexImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function be(){try{i.texSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ee(){try{i.texSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Te(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function He(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ae(){try{i.texStorage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function re(){try{i.texStorage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function H(){try{i.texImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function me(){try{i.texImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ne(G){Pe.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),Pe.copy(G))}function Re(G){Ie.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),Ie.copy(G))}function Ce(G,De){let ie=v.get(De);ie===void 0&&(ie=new WeakMap,v.set(De,ie));let Me=ie.get(G);Me===void 0&&(Me=i.getUniformBlockIndex(De,G.name),ie.set(G,Me))}function ke(G,De){const Me=v.get(De).get(G);m.get(De)!==Me&&(i.uniformBlockBinding(De,Me,G.__bindingPointIndex),m.set(De,Me))}function pt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),_={},ve=null,ge={},y={},E=new WeakMap,b=[],x=null,g=!1,P=null,w=null,L=null,N=null,u=null,F=null,q=null,R=!1,I=null,fe=null,oe=null,Y=null,J=null,Pe.set(0,0,i.canvas.width,i.canvas.height),Ie.set(0,0,i.canvas.width,i.canvas.height),c.reset(),d.reset(),f.reset()}return{buffers:{color:c,depth:d,stencil:f},enable:nt,disable:Xe,bindFramebuffer:lt,drawBuffers:Zt,useProgram:ct,setBlending:We,setMaterial:tt,setFlipSided:Se,setCullFace:ht,setLineWidth:dt,setPolygonOffset:ot,setScissorTest:xt,activeTexture:Vt,bindTexture:Xt,unbindTexture:U,compressedTexImage2D:C,compressedTexImage3D:Q,texImage2D:H,texImage3D:me,updateUBOMapping:Ce,uniformBlockBinding:ke,texStorage2D:Ae,texStorage3D:re,texSubImage2D:be,texSubImage3D:Ee,compressedTexSubImage2D:Te,compressedTexSubImage3D:He,scissor:Ne,viewport:Re,reset:pt}}function r0(i,e,t,n,r,o,a){const c=r.isWebGL2,d=r.maxTextures,f=r.maxCubemapSize,m=r.maxTextureSize,v=r.maxSamples,_=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,y=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),E=new WeakMap;let b;const x=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function P(U,C){return g?new OffscreenCanvas(U,C):Po("canvas")}function w(U,C,Q,be){let Ee=1;if((U.width>be||U.height>be)&&(Ee=be/Math.max(U.width,U.height)),Ee<1||C===!0)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap){const Te=C?Ro:Math.floor,He=Te(Ee*U.width),Ae=Te(Ee*U.height);b===void 0&&(b=P(He,Ae));const re=Q?P(He,Ae):b;return re.width=He,re.height=Ae,re.getContext("2d").drawImage(U,0,0,He,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+U.width+"x"+U.height+") to ("+He+"x"+Ae+")."),re}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+U.width+"x"+U.height+")."),U;return U}function L(U){return Za(U.width)&&Za(U.height)}function N(U){return c?!1:U.wrapS!==Kn||U.wrapT!==Kn||U.minFilter!==yn&&U.minFilter!==kn}function u(U,C){return U.generateMipmaps&&C&&U.minFilter!==yn&&U.minFilter!==kn}function F(U){i.generateMipmap(U)}function q(U,C,Q,be,Ee=!1){if(c===!1)return C;if(U!==null){if(i[U]!==void 0)return i[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Te=C;return C===i.RED&&(Q===i.FLOAT&&(Te=i.R32F),Q===i.HALF_FLOAT&&(Te=i.R16F),Q===i.UNSIGNED_BYTE&&(Te=i.R8)),C===i.RED_INTEGER&&(Q===i.UNSIGNED_BYTE&&(Te=i.R8UI),Q===i.UNSIGNED_SHORT&&(Te=i.R16UI),Q===i.UNSIGNED_INT&&(Te=i.R32UI),Q===i.BYTE&&(Te=i.R8I),Q===i.SHORT&&(Te=i.R16I),Q===i.INT&&(Te=i.R32I)),C===i.RG&&(Q===i.FLOAT&&(Te=i.RG32F),Q===i.HALF_FLOAT&&(Te=i.RG16F),Q===i.UNSIGNED_BYTE&&(Te=i.RG8)),C===i.RGBA&&(Q===i.FLOAT&&(Te=i.RGBA32F),Q===i.HALF_FLOAT&&(Te=i.RGBA16F),Q===i.UNSIGNED_BYTE&&(Te=be===Bt&&Ee===!1?i.SRGB8_ALPHA8:i.RGBA8),Q===i.UNSIGNED_SHORT_4_4_4_4&&(Te=i.RGBA4),Q===i.UNSIGNED_SHORT_5_5_5_1&&(Te=i.RGB5_A1)),(Te===i.R16F||Te===i.R32F||Te===i.RG16F||Te===i.RG32F||Te===i.RGBA16F||Te===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Te}function R(U,C,Q){return u(U,Q)===!0||U.isFramebufferTexture&&U.minFilter!==yn&&U.minFilter!==kn?Math.log2(Math.max(C.width,C.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?C.mipmaps.length:1}function I(U){return U===yn||U===Hl||U===na?i.NEAREST:i.LINEAR}function fe(U){const C=U.target;C.removeEventListener("dispose",fe),Y(C),C.isVideoTexture&&E.delete(C)}function oe(U){const C=U.target;C.removeEventListener("dispose",oe),te(C)}function Y(U){const C=n.get(U);if(C.__webglInit===void 0)return;const Q=U.source,be=x.get(Q);if(be){const Ee=be[C.__cacheKey];Ee.usedTimes--,Ee.usedTimes===0&&J(U),Object.keys(be).length===0&&x.delete(Q)}n.remove(U)}function J(U){const C=n.get(U);i.deleteTexture(C.__webglTexture);const Q=U.source,be=x.get(Q);delete be[C.__cacheKey],a.memory.textures--}function te(U){const C=U.texture,Q=n.get(U),be=n.get(C);if(be.__webglTexture!==void 0&&(i.deleteTexture(be.__webglTexture),a.memory.textures--),U.depthTexture&&U.depthTexture.dispose(),U.isWebGLCubeRenderTarget)for(let Ee=0;Ee<6;Ee++){if(Array.isArray(Q.__webglFramebuffer[Ee]))for(let Te=0;Te<Q.__webglFramebuffer[Ee].length;Te++)i.deleteFramebuffer(Q.__webglFramebuffer[Ee][Te]);else i.deleteFramebuffer(Q.__webglFramebuffer[Ee]);Q.__webglDepthbuffer&&i.deleteRenderbuffer(Q.__webglDepthbuffer[Ee])}else{if(Array.isArray(Q.__webglFramebuffer))for(let Ee=0;Ee<Q.__webglFramebuffer.length;Ee++)i.deleteFramebuffer(Q.__webglFramebuffer[Ee]);else i.deleteFramebuffer(Q.__webglFramebuffer);if(Q.__webglDepthbuffer&&i.deleteRenderbuffer(Q.__webglDepthbuffer),Q.__webglMultisampledFramebuffer&&i.deleteFramebuffer(Q.__webglMultisampledFramebuffer),Q.__webglColorRenderbuffer)for(let Ee=0;Ee<Q.__webglColorRenderbuffer.length;Ee++)Q.__webglColorRenderbuffer[Ee]&&i.deleteRenderbuffer(Q.__webglColorRenderbuffer[Ee]);Q.__webglDepthRenderbuffer&&i.deleteRenderbuffer(Q.__webglDepthRenderbuffer)}if(U.isWebGLMultipleRenderTargets)for(let Ee=0,Te=C.length;Ee<Te;Ee++){const He=n.get(C[Ee]);He.__webglTexture&&(i.deleteTexture(He.__webglTexture),a.memory.textures--),n.remove(C[Ee])}n.remove(C),n.remove(U)}let _e=0;function le(){_e=0}function de(){const U=_e;return U>=d&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+d),_e+=1,U}function ve(U){const C=[];return C.push(U.wrapS),C.push(U.wrapT),C.push(U.wrapR||0),C.push(U.magFilter),C.push(U.minFilter),C.push(U.anisotropy),C.push(U.internalFormat),C.push(U.format),C.push(U.type),C.push(U.generateMipmaps),C.push(U.premultiplyAlpha),C.push(U.flipY),C.push(U.unpackAlignment),C.push(U.colorSpace),C.join()}function ge(U,C){const Q=n.get(U);if(U.isVideoTexture&&Vt(U),U.isRenderTargetTexture===!1&&U.version>0&&Q.__version!==U.version){const be=U.image;if(be===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(be.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{lt(Q,U,C);return}}t.bindTexture(i.TEXTURE_2D,Q.__webglTexture,i.TEXTURE0+C)}function $(U,C){const Q=n.get(U);if(U.version>0&&Q.__version!==U.version){lt(Q,U,C);return}t.bindTexture(i.TEXTURE_2D_ARRAY,Q.__webglTexture,i.TEXTURE0+C)}function se(U,C){const Q=n.get(U);if(U.version>0&&Q.__version!==U.version){lt(Q,U,C);return}t.bindTexture(i.TEXTURE_3D,Q.__webglTexture,i.TEXTURE0+C)}function Pe(U,C){const Q=n.get(U);if(U.version>0&&Q.__version!==U.version){Zt(Q,U,C);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture,i.TEXTURE0+C)}const Ie={[ja]:i.REPEAT,[Kn]:i.CLAMP_TO_EDGE,[Ya]:i.MIRRORED_REPEAT},Be={[yn]:i.NEAREST,[Hl]:i.NEAREST_MIPMAP_NEAREST,[na]:i.NEAREST_MIPMAP_LINEAR,[kn]:i.LINEAR,[yd]:i.LINEAR_MIPMAP_NEAREST,[Ts]:i.LINEAR_MIPMAP_LINEAR},Ye={[Nd]:i.NEVER,[Gd]:i.ALWAYS,[Fd]:i.LESS,[Bd]:i.LEQUAL,[Od]:i.EQUAL,[kd]:i.GEQUAL,[zd]:i.GREATER,[Hd]:i.NOTEQUAL};function nt(U,C,Q){if(Q?(i.texParameteri(U,i.TEXTURE_WRAP_S,Ie[C.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,Ie[C.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,Ie[C.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,Be[C.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,Be[C.minFilter])):(i.texParameteri(U,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(U,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(C.wrapS!==Kn||C.wrapT!==Kn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(U,i.TEXTURE_MAG_FILTER,I(C.magFilter)),i.texParameteri(U,i.TEXTURE_MIN_FILTER,I(C.minFilter)),C.minFilter!==yn&&C.minFilter!==kn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),C.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,Ye[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const be=e.get("EXT_texture_filter_anisotropic");if(C.magFilter===yn||C.minFilter!==na&&C.minFilter!==Ts||C.type===Oi&&e.has("OES_texture_float_linear")===!1||c===!1&&C.type===ws&&e.has("OES_texture_half_float_linear")===!1)return;(C.anisotropy>1||n.get(C).__currentAnisotropy)&&(i.texParameterf(U,be.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,r.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy)}}function Xe(U,C){let Q=!1;U.__webglInit===void 0&&(U.__webglInit=!0,C.addEventListener("dispose",fe));const be=C.source;let Ee=x.get(be);Ee===void 0&&(Ee={},x.set(be,Ee));const Te=ve(C);if(Te!==U.__cacheKey){Ee[Te]===void 0&&(Ee[Te]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,Q=!0),Ee[Te].usedTimes++;const He=Ee[U.__cacheKey];He!==void 0&&(Ee[U.__cacheKey].usedTimes--,He.usedTimes===0&&J(C)),U.__cacheKey=Te,U.__webglTexture=Ee[Te].texture}return Q}function lt(U,C,Q){let be=i.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(be=i.TEXTURE_2D_ARRAY),C.isData3DTexture&&(be=i.TEXTURE_3D);const Ee=Xe(U,C),Te=C.source;t.bindTexture(be,U.__webglTexture,i.TEXTURE0+Q);const He=n.get(Te);if(Te.version!==He.__version||Ee===!0){t.activeTexture(i.TEXTURE0+Q),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const Ae=N(C)&&L(C.image)===!1;let re=w(C.image,Ae,!1,m);re=Xt(C,re);const H=L(re)||c,me=o.convert(C.format,C.colorSpace);let Ne=o.convert(C.type),Re=q(C.internalFormat,me,Ne,C.colorSpace,C.isVideoTexture);nt(be,C,H);let Ce;const ke=C.mipmaps,pt=c&&C.isVideoTexture!==!0,G=He.__version===void 0||Ee===!0,De=R(C,re,H);if(C.isDepthTexture)Re=i.DEPTH_COMPONENT,c?C.type===Oi?Re=i.DEPTH_COMPONENT32F:C.type===Fi?Re=i.DEPTH_COMPONENT24:C.type===lr?Re=i.DEPTH24_STENCIL8:Re=i.DEPTH_COMPONENT16:C.type===Oi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),C.format===cr&&Re===i.DEPTH_COMPONENT&&C.type!==rl&&C.type!==Fi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),C.type=Fi,Ne=o.convert(C.type)),C.format===$r&&Re===i.DEPTH_COMPONENT&&(Re=i.DEPTH_STENCIL,C.type!==lr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),C.type=lr,Ne=o.convert(C.type))),G&&(pt?t.texStorage2D(i.TEXTURE_2D,1,Re,re.width,re.height):t.texImage2D(i.TEXTURE_2D,0,Re,re.width,re.height,0,me,Ne,null));else if(C.isDataTexture)if(ke.length>0&&H){pt&&G&&t.texStorage2D(i.TEXTURE_2D,De,Re,ke[0].width,ke[0].height);for(let ie=0,Me=ke.length;ie<Me;ie++)Ce=ke[ie],pt?t.texSubImage2D(i.TEXTURE_2D,ie,0,0,Ce.width,Ce.height,me,Ne,Ce.data):t.texImage2D(i.TEXTURE_2D,ie,Re,Ce.width,Ce.height,0,me,Ne,Ce.data);C.generateMipmaps=!1}else pt?(G&&t.texStorage2D(i.TEXTURE_2D,De,Re,re.width,re.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,re.width,re.height,me,Ne,re.data)):t.texImage2D(i.TEXTURE_2D,0,Re,re.width,re.height,0,me,Ne,re.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){pt&&G&&t.texStorage3D(i.TEXTURE_2D_ARRAY,De,Re,ke[0].width,ke[0].height,re.depth);for(let ie=0,Me=ke.length;ie<Me;ie++)Ce=ke[ie],C.format!==Qn?me!==null?pt?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,Ce.width,Ce.height,re.depth,me,Ce.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ie,Re,Ce.width,Ce.height,re.depth,0,Ce.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pt?t.texSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,Ce.width,Ce.height,re.depth,me,Ne,Ce.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ie,Re,Ce.width,Ce.height,re.depth,0,me,Ne,Ce.data)}else{pt&&G&&t.texStorage2D(i.TEXTURE_2D,De,Re,ke[0].width,ke[0].height);for(let ie=0,Me=ke.length;ie<Me;ie++)Ce=ke[ie],C.format!==Qn?me!==null?pt?t.compressedTexSubImage2D(i.TEXTURE_2D,ie,0,0,Ce.width,Ce.height,me,Ce.data):t.compressedTexImage2D(i.TEXTURE_2D,ie,Re,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pt?t.texSubImage2D(i.TEXTURE_2D,ie,0,0,Ce.width,Ce.height,me,Ne,Ce.data):t.texImage2D(i.TEXTURE_2D,ie,Re,Ce.width,Ce.height,0,me,Ne,Ce.data)}else if(C.isDataArrayTexture)pt?(G&&t.texStorage3D(i.TEXTURE_2D_ARRAY,De,Re,re.width,re.height,re.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,me,Ne,re.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Re,re.width,re.height,re.depth,0,me,Ne,re.data);else if(C.isData3DTexture)pt?(G&&t.texStorage3D(i.TEXTURE_3D,De,Re,re.width,re.height,re.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,me,Ne,re.data)):t.texImage3D(i.TEXTURE_3D,0,Re,re.width,re.height,re.depth,0,me,Ne,re.data);else if(C.isFramebufferTexture){if(G)if(pt)t.texStorage2D(i.TEXTURE_2D,De,Re,re.width,re.height);else{let ie=re.width,Me=re.height;for(let we=0;we<De;we++)t.texImage2D(i.TEXTURE_2D,we,Re,ie,Me,0,me,Ne,null),ie>>=1,Me>>=1}}else if(ke.length>0&&H){pt&&G&&t.texStorage2D(i.TEXTURE_2D,De,Re,ke[0].width,ke[0].height);for(let ie=0,Me=ke.length;ie<Me;ie++)Ce=ke[ie],pt?t.texSubImage2D(i.TEXTURE_2D,ie,0,0,me,Ne,Ce):t.texImage2D(i.TEXTURE_2D,ie,Re,me,Ne,Ce);C.generateMipmaps=!1}else pt?(G&&t.texStorage2D(i.TEXTURE_2D,De,Re,re.width,re.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,me,Ne,re)):t.texImage2D(i.TEXTURE_2D,0,Re,me,Ne,re);u(C,H)&&F(be),He.__version=Te.version,C.onUpdate&&C.onUpdate(C)}U.__version=C.version}function Zt(U,C,Q){if(C.image.length!==6)return;const be=Xe(U,C),Ee=C.source;t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+Q);const Te=n.get(Ee);if(Ee.version!==Te.__version||be===!0){t.activeTexture(i.TEXTURE0+Q),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const He=C.isCompressedTexture||C.image[0].isCompressedTexture,Ae=C.image[0]&&C.image[0].isDataTexture,re=[];for(let ie=0;ie<6;ie++)!He&&!Ae?re[ie]=w(C.image[ie],!1,!0,f):re[ie]=Ae?C.image[ie].image:C.image[ie],re[ie]=Xt(C,re[ie]);const H=re[0],me=L(H)||c,Ne=o.convert(C.format,C.colorSpace),Re=o.convert(C.type),Ce=q(C.internalFormat,Ne,Re,C.colorSpace),ke=c&&C.isVideoTexture!==!0,pt=Te.__version===void 0||be===!0;let G=R(C,H,me);nt(i.TEXTURE_CUBE_MAP,C,me);let De;if(He){ke&&pt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,G,Ce,H.width,H.height);for(let ie=0;ie<6;ie++){De=re[ie].mipmaps;for(let Me=0;Me<De.length;Me++){const we=De[Me];C.format!==Qn?Ne!==null?ke?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Me,0,0,we.width,we.height,Ne,we.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Me,Ce,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Me,0,0,we.width,we.height,Ne,Re,we.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Me,Ce,we.width,we.height,0,Ne,Re,we.data)}}}else{De=C.mipmaps,ke&&pt&&(De.length>0&&G++,t.texStorage2D(i.TEXTURE_CUBE_MAP,G,Ce,re[0].width,re[0].height));for(let ie=0;ie<6;ie++)if(Ae){ke?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,re[ie].width,re[ie].height,Ne,Re,re[ie].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ce,re[ie].width,re[ie].height,0,Ne,Re,re[ie].data);for(let Me=0;Me<De.length;Me++){const mt=De[Me].image[ie].image;ke?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Me+1,0,0,mt.width,mt.height,Ne,Re,mt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Me+1,Ce,mt.width,mt.height,0,Ne,Re,mt.data)}}else{ke?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Ne,Re,re[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ce,Ne,Re,re[ie]);for(let Me=0;Me<De.length;Me++){const we=De[Me];ke?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Me+1,0,0,Ne,Re,we.image[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Me+1,Ce,Ne,Re,we.image[ie])}}}u(C,me)&&F(i.TEXTURE_CUBE_MAP),Te.__version=Ee.version,C.onUpdate&&C.onUpdate(C)}U.__version=C.version}function ct(U,C,Q,be,Ee,Te){const He=o.convert(Q.format,Q.colorSpace),Ae=o.convert(Q.type),re=q(Q.internalFormat,He,Ae,Q.colorSpace);if(!n.get(C).__hasExternalTextures){const me=Math.max(1,C.width>>Te),Ne=Math.max(1,C.height>>Te);Ee===i.TEXTURE_3D||Ee===i.TEXTURE_2D_ARRAY?t.texImage3D(Ee,Te,re,me,Ne,C.depth,0,He,Ae,null):t.texImage2D(Ee,Te,re,me,Ne,0,He,Ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,U),xt(C)?_.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,be,Ee,n.get(Q).__webglTexture,0,ot(C)):(Ee===i.TEXTURE_2D||Ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,be,Ee,n.get(Q).__webglTexture,Te),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Z(U,C,Q){if(i.bindRenderbuffer(i.RENDERBUFFER,U),C.depthBuffer&&!C.stencilBuffer){let be=i.DEPTH_COMPONENT16;if(Q||xt(C)){const Ee=C.depthTexture;Ee&&Ee.isDepthTexture&&(Ee.type===Oi?be=i.DEPTH_COMPONENT32F:Ee.type===Fi&&(be=i.DEPTH_COMPONENT24));const Te=ot(C);xt(C)?_.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Te,be,C.width,C.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,Te,be,C.width,C.height)}else i.renderbufferStorage(i.RENDERBUFFER,be,C.width,C.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,U)}else if(C.depthBuffer&&C.stencilBuffer){const be=ot(C);Q&&xt(C)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,be,i.DEPTH24_STENCIL8,C.width,C.height):xt(C)?_.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,be,i.DEPTH24_STENCIL8,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,U)}else{const be=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let Ee=0;Ee<be.length;Ee++){const Te=be[Ee],He=o.convert(Te.format,Te.colorSpace),Ae=o.convert(Te.type),re=q(Te.internalFormat,He,Ae,Te.colorSpace),H=ot(C);Q&&xt(C)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,H,re,C.width,C.height):xt(C)?_.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,H,re,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,re,C.width,C.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Et(U,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,U),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),ge(C.depthTexture,0);const be=n.get(C.depthTexture).__webglTexture,Ee=ot(C);if(C.depthTexture.format===cr)xt(C)?_.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,be,0,Ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,be,0);else if(C.depthTexture.format===$r)xt(C)?_.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,be,0,Ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,be,0);else throw new Error("Unknown depthTexture format")}function We(U){const C=n.get(U),Q=U.isWebGLCubeRenderTarget===!0;if(U.depthTexture&&!C.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");Et(C.__webglFramebuffer,U)}else if(Q){C.__webglDepthbuffer=[];for(let be=0;be<6;be++)t.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer[be]),C.__webglDepthbuffer[be]=i.createRenderbuffer(),Z(C.__webglDepthbuffer[be],U,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer=i.createRenderbuffer(),Z(C.__webglDepthbuffer,U,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function tt(U,C,Q){const be=n.get(U);C!==void 0&&ct(be.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Q!==void 0&&We(U)}function Se(U){const C=U.texture,Q=n.get(U),be=n.get(C);U.addEventListener("dispose",oe),U.isWebGLMultipleRenderTargets!==!0&&(be.__webglTexture===void 0&&(be.__webglTexture=i.createTexture()),be.__version=C.version,a.memory.textures++);const Ee=U.isWebGLCubeRenderTarget===!0,Te=U.isWebGLMultipleRenderTargets===!0,He=L(U)||c;if(Ee){Q.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(c&&C.mipmaps&&C.mipmaps.length>0){Q.__webglFramebuffer[Ae]=[];for(let re=0;re<C.mipmaps.length;re++)Q.__webglFramebuffer[Ae][re]=i.createFramebuffer()}else Q.__webglFramebuffer[Ae]=i.createFramebuffer()}else{if(c&&C.mipmaps&&C.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Ae=0;Ae<C.mipmaps.length;Ae++)Q.__webglFramebuffer[Ae]=i.createFramebuffer()}else Q.__webglFramebuffer=i.createFramebuffer();if(Te)if(r.drawBuffers){const Ae=U.texture;for(let re=0,H=Ae.length;re<H;re++){const me=n.get(Ae[re]);me.__webglTexture===void 0&&(me.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(c&&U.samples>0&&xt(U)===!1){const Ae=Te?C:[C];Q.__webglMultisampledFramebuffer=i.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let re=0;re<Ae.length;re++){const H=Ae[re];Q.__webglColorRenderbuffer[re]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Q.__webglColorRenderbuffer[re]);const me=o.convert(H.format,H.colorSpace),Ne=o.convert(H.type),Re=q(H.internalFormat,me,Ne,H.colorSpace,U.isXRRenderTarget===!0),Ce=ot(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce,Re,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,Q.__webglColorRenderbuffer[re])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(Q.__webglDepthRenderbuffer=i.createRenderbuffer(),Z(Q.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Ee){t.bindTexture(i.TEXTURE_CUBE_MAP,be.__webglTexture),nt(i.TEXTURE_CUBE_MAP,C,He);for(let Ae=0;Ae<6;Ae++)if(c&&C.mipmaps&&C.mipmaps.length>0)for(let re=0;re<C.mipmaps.length;re++)ct(Q.__webglFramebuffer[Ae][re],U,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,re);else ct(Q.__webglFramebuffer[Ae],U,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);u(C,He)&&F(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){const Ae=U.texture;for(let re=0,H=Ae.length;re<H;re++){const me=Ae[re],Ne=n.get(me);t.bindTexture(i.TEXTURE_2D,Ne.__webglTexture),nt(i.TEXTURE_2D,me,He),ct(Q.__webglFramebuffer,U,me,i.COLOR_ATTACHMENT0+re,i.TEXTURE_2D,0),u(me,He)&&F(i.TEXTURE_2D)}t.unbindTexture()}else{let Ae=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(c?Ae=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Ae,be.__webglTexture),nt(Ae,C,He),c&&C.mipmaps&&C.mipmaps.length>0)for(let re=0;re<C.mipmaps.length;re++)ct(Q.__webglFramebuffer[re],U,C,i.COLOR_ATTACHMENT0,Ae,re);else ct(Q.__webglFramebuffer,U,C,i.COLOR_ATTACHMENT0,Ae,0);u(C,He)&&F(Ae),t.unbindTexture()}U.depthBuffer&&We(U)}function ht(U){const C=L(U)||c,Q=U.isWebGLMultipleRenderTargets===!0?U.texture:[U.texture];for(let be=0,Ee=Q.length;be<Ee;be++){const Te=Q[be];if(u(Te,C)){const He=U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ae=n.get(Te).__webglTexture;t.bindTexture(He,Ae),F(He),t.unbindTexture()}}}function dt(U){if(c&&U.samples>0&&xt(U)===!1){const C=U.isWebGLMultipleRenderTargets?U.texture:[U.texture],Q=U.width,be=U.height;let Ee=i.COLOR_BUFFER_BIT;const Te=[],He=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ae=n.get(U),re=U.isWebGLMultipleRenderTargets===!0;if(re)for(let H=0;H<C.length;H++)t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+H,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+H,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let H=0;H<C.length;H++){Te.push(i.COLOR_ATTACHMENT0+H),U.depthBuffer&&Te.push(He);const me=Ae.__ignoreDepthValues!==void 0?Ae.__ignoreDepthValues:!1;if(me===!1&&(U.depthBuffer&&(Ee|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&(Ee|=i.STENCIL_BUFFER_BIT)),re&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[H]),me===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[He]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[He])),re){const Ne=n.get(C[H]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ne,0)}i.blitFramebuffer(0,0,Q,be,0,0,Q,be,Ee,i.NEAREST),y&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Te)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),re)for(let H=0;H<C.length;H++){t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+H,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[H]);const me=n.get(C[H]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+H,i.TEXTURE_2D,me,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}}function ot(U){return Math.min(v,U.samples)}function xt(U){const C=n.get(U);return c&&U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Vt(U){const C=a.render.frame;E.get(U)!==C&&(E.set(U,C),U.update())}function Xt(U,C){const Q=U.colorSpace,be=U.format,Ee=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||U.format===$a||Q!==ui&&Q!==hr&&(Q===Bt||Q===Uo?c===!1?e.has("EXT_sRGB")===!0&&be===Qn?(U.format=$a,U.minFilter=kn,U.generateMipmaps=!1):C=Hu.sRGBToLinear(C):(be!==Qn||Ee!==Hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),C}this.allocateTextureUnit=de,this.resetTextureUnits=le,this.setTexture2D=ge,this.setTexture2DArray=$,this.setTexture3D=se,this.setTextureCube=Pe,this.rebindTextures=tt,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=dt,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=ct,this.useMultisampledRTT=xt}const s0=0,Jt=1;function o0(i,e,t){const n=t.isWebGL2;function r(o,a=hr){let c;const d=a===Bt||a===Uo?Jt:s0;if(o===Hi)return i.UNSIGNED_BYTE;if(o===Iu)return i.UNSIGNED_SHORT_4_4_4_4;if(o===Uu)return i.UNSIGNED_SHORT_5_5_5_1;if(o===Md)return i.BYTE;if(o===Sd)return i.SHORT;if(o===rl)return i.UNSIGNED_SHORT;if(o===Du)return i.INT;if(o===Fi)return i.UNSIGNED_INT;if(o===Oi)return i.FLOAT;if(o===ws)return n?i.HALF_FLOAT:(c=e.get("OES_texture_half_float"),c!==null?c.HALF_FLOAT_OES:null);if(o===Ed)return i.ALPHA;if(o===Qn)return i.RGBA;if(o===bd)return i.LUMINANCE;if(o===Td)return i.LUMINANCE_ALPHA;if(o===cr)return i.DEPTH_COMPONENT;if(o===$r)return i.DEPTH_STENCIL;if(o===$a)return c=e.get("EXT_sRGB"),c!==null?c.SRGB_ALPHA_EXT:null;if(o===wd)return i.RED;if(o===Nu)return i.RED_INTEGER;if(o===Ad)return i.RG;if(o===Fu)return i.RG_INTEGER;if(o===Ou)return i.RGBA_INTEGER;if(o===ia||o===ra||o===sa||o===oa)if(d===Jt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(o===ia)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===ra)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===sa)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===oa)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(o===ia)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===ra)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===sa)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===oa)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===kl||o===Gl||o===Vl||o===Wl)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(o===kl)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===Gl)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===Vl)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===Wl)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===Cd)return c=e.get("WEBGL_compressed_texture_etc1"),c!==null?c.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===Xl||o===ql)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(o===Xl)return d===Jt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(o===ql)return d===Jt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===jl||o===Yl||o===$l||o===Zl||o===Kl||o===Ql||o===Jl||o===ec||o===tc||o===nc||o===ic||o===rc||o===sc||o===oc)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(o===jl)return d===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===Yl)return d===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===$l)return d===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===Zl)return d===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===Kl)return d===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===Ql)return d===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===Jl)return d===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===ec)return d===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===tc)return d===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===nc)return d===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===ic)return d===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===rc)return d===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===sc)return d===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===oc)return d===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===aa||o===ac||o===lc)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(o===aa)return d===Jt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===ac)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===lc)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===Rd||o===cc||o===uc||o===hc)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(o===aa)return c.COMPRESSED_RED_RGTC1_EXT;if(o===cc)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===uc)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===hc)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===lr?n?i.UNSIGNED_INT_24_8:(c=e.get("WEBGL_depth_texture"),c!==null?c.UNSIGNED_INT_24_8_WEBGL:null):i[o]!==void 0?i[o]:null}return{convert:r}}class a0 extends Gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class mo extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const l0={type:"move"};class Ra{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,o=null,a=null;const c=this._targetRay,d=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){a=!0;for(const b of e.hand.values()){const x=t.getJointPose(b,n),g=this._getHandJoint(f,b);x!==null&&(g.matrix.fromArray(x.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=x.radius),g.visible=x!==null}const m=f.joints["index-finger-tip"],v=f.joints["thumb-tip"],_=m.position.distanceTo(v.position),y=.02,E=.005;f.inputState.pinching&&_>y+E?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&_<=y-E&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1));c!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&o!==null&&(r=o),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(l0)))}return c!==null&&(c.visible=r!==null),d!==null&&(d.visible=o!==null),f!==null&&(f.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new mo;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class c0 extends Fn{constructor(e,t,n,r,o,a,c,d,f,m){if(m=m!==void 0?m:cr,m!==cr&&m!==$r)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&m===cr&&(n=Fi),n===void 0&&m===$r&&(n=lr),super(null,r,o,a,c,d,m,n,f),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:yn,this.minFilter=d!==void 0?d:yn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class u0 extends _r{constructor(e,t){super();const n=this;let r=null,o=1,a=null,c="local-floor",d=1,f=null,m=null,v=null,_=null,y=null,E=null;const b=t.getContextAttributes();let x=null,g=null;const P=[],w=[],L=new Gn;L.layers.enable(1),L.viewport=new on;const N=new Gn;N.layers.enable(2),N.viewport=new on;const u=[L,N],F=new a0;F.layers.enable(1),F.layers.enable(2);let q=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let se=P[$];return se===void 0&&(se=new Ra,P[$]=se),se.getTargetRaySpace()},this.getControllerGrip=function($){let se=P[$];return se===void 0&&(se=new Ra,P[$]=se),se.getGripSpace()},this.getHand=function($){let se=P[$];return se===void 0&&(se=new Ra,P[$]=se),se.getHandSpace()};function I($){const se=w.indexOf($.inputSource);if(se===-1)return;const Pe=P[se];Pe!==void 0&&(Pe.update($.inputSource,$.frame,f||a),Pe.dispatchEvent({type:$.type,data:$.inputSource}))}function fe(){r.removeEventListener("select",I),r.removeEventListener("selectstart",I),r.removeEventListener("selectend",I),r.removeEventListener("squeeze",I),r.removeEventListener("squeezestart",I),r.removeEventListener("squeezeend",I),r.removeEventListener("end",fe),r.removeEventListener("inputsourceschange",oe);for(let $=0;$<P.length;$++){const se=w[$];se!==null&&(w[$]=null,P[$].disconnect(se))}q=null,R=null,e.setRenderTarget(x),y=null,_=null,v=null,r=null,g=null,ge.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){c=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||a},this.setReferenceSpace=function($){f=$},this.getBaseLayer=function(){return _!==null?_:y},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",I),r.addEventListener("selectstart",I),r.addEventListener("selectend",I),r.addEventListener("squeeze",I),r.addEventListener("squeezestart",I),r.addEventListener("squeezeend",I),r.addEventListener("end",fe),r.addEventListener("inputsourceschange",oe),b.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const se={antialias:r.renderState.layers===void 0?b.antialias:!0,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:o};y=new XRWebGLLayer(r,t,se),r.updateRenderState({baseLayer:y}),g=new pr(y.framebufferWidth,y.framebufferHeight,{format:Qn,type:Hi,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil})}else{let se=null,Pe=null,Ie=null;b.depth&&(Ie=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=b.stencil?$r:cr,Pe=b.stencil?lr:Fi);const Be={colorFormat:t.RGBA8,depthFormat:Ie,scaleFactor:o};v=new XRWebGLBinding(r,t),_=v.createProjectionLayer(Be),r.updateRenderState({layers:[_]}),g=new pr(_.textureWidth,_.textureHeight,{format:Qn,type:Hi,depthTexture:new c0(_.textureWidth,_.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0});const Ye=e.properties.get(g);Ye.__ignoreDepthValues=_.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(d),f=null,a=await r.requestReferenceSpace(c),ge.setContext(r),ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function oe($){for(let se=0;se<$.removed.length;se++){const Pe=$.removed[se],Ie=w.indexOf(Pe);Ie>=0&&(w[Ie]=null,P[Ie].disconnect(Pe))}for(let se=0;se<$.added.length;se++){const Pe=$.added[se];let Ie=w.indexOf(Pe);if(Ie===-1){for(let Ye=0;Ye<P.length;Ye++)if(Ye>=w.length){w.push(Pe),Ie=Ye;break}else if(w[Ye]===null){w[Ye]=Pe,Ie=Ye;break}if(Ie===-1)break}const Be=P[Ie];Be&&Be.connect(Pe)}}const Y=new z,J=new z;function te($,se,Pe){Y.setFromMatrixPosition(se.matrixWorld),J.setFromMatrixPosition(Pe.matrixWorld);const Ie=Y.distanceTo(J),Be=se.projectionMatrix.elements,Ye=Pe.projectionMatrix.elements,nt=Be[14]/(Be[10]-1),Xe=Be[14]/(Be[10]+1),lt=(Be[9]+1)/Be[5],Zt=(Be[9]-1)/Be[5],ct=(Be[8]-1)/Be[0],Z=(Ye[8]+1)/Ye[0],Et=nt*ct,We=nt*Z,tt=Ie/(-ct+Z),Se=tt*-ct;se.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Se),$.translateZ(tt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert();const ht=nt+tt,dt=Xe+tt,ot=Et-Se,xt=We+(Ie-Se),Vt=lt*Xe/dt*ht,Xt=Zt*Xe/dt*ht;$.projectionMatrix.makePerspective(ot,xt,Vt,Xt,ht,dt),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}function _e($,se){se===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(se.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;F.near=N.near=L.near=$.near,F.far=N.far=L.far=$.far,(q!==F.near||R!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),q=F.near,R=F.far);const se=$.parent,Pe=F.cameras;_e(F,se);for(let Ie=0;Ie<Pe.length;Ie++)_e(Pe[Ie],se);Pe.length===2?te(F,L,N):F.projectionMatrix.copy(L.projectionMatrix),le($,F,se)};function le($,se,Pe){Pe===null?$.matrix.copy(se.matrixWorld):($.matrix.copy(Pe.matrixWorld),$.matrix.invert(),$.matrix.multiply(se.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(se.projectionMatrix),$.projectionMatrixInverse.copy(se.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=As*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(_===null&&y===null))return d},this.setFoveation=function($){d=$,_!==null&&(_.fixedFoveation=$),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=$)};let de=null;function ve($,se){if(m=se.getViewerPose(f||a),E=se,m!==null){const Pe=m.views;y!==null&&(e.setRenderTargetFramebuffer(g,y.framebuffer),e.setRenderTarget(g));let Ie=!1;Pe.length!==F.cameras.length&&(F.cameras.length=0,Ie=!0);for(let Be=0;Be<Pe.length;Be++){const Ye=Pe[Be];let nt=null;if(y!==null)nt=y.getViewport(Ye);else{const lt=v.getViewSubImage(_,Ye);nt=lt.viewport,Be===0&&(e.setRenderTargetTextures(g,lt.colorTexture,_.ignoreDepthValues?void 0:lt.depthStencilTexture),e.setRenderTarget(g))}let Xe=u[Be];Xe===void 0&&(Xe=new Gn,Xe.layers.enable(Be),Xe.viewport=new on,u[Be]=Xe),Xe.matrix.fromArray(Ye.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(Ye.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(nt.x,nt.y,nt.width,nt.height),Be===0&&(F.matrix.copy(Xe.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ie===!0&&F.cameras.push(Xe)}}for(let Pe=0;Pe<P.length;Pe++){const Ie=w[Pe],Be=P[Pe];Ie!==null&&Be!==void 0&&Be.update(Ie,se,f||a)}de&&de($,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),E=null}const ge=new $u;ge.setAnimationLoop(ve),this.setAnimationLoop=function($){de=$},this.dispose=function(){}}}function h0(i,e){function t(x,g){x.matrixAutoUpdate===!0&&x.updateMatrix(),g.value.copy(x.matrix)}function n(x,g){g.color.getRGB(x.fogColor.value,qu(i)),g.isFog?(x.fogNear.value=g.near,x.fogFar.value=g.far):g.isFogExp2&&(x.fogDensity.value=g.density)}function r(x,g,P,w,L){g.isMeshBasicMaterial||g.isMeshLambertMaterial?o(x,g):g.isMeshToonMaterial?(o(x,g),v(x,g)):g.isMeshPhongMaterial?(o(x,g),m(x,g)):g.isMeshStandardMaterial?(o(x,g),_(x,g),g.isMeshPhysicalMaterial&&y(x,g,L)):g.isMeshMatcapMaterial?(o(x,g),E(x,g)):g.isMeshDepthMaterial?o(x,g):g.isMeshDistanceMaterial?(o(x,g),b(x,g)):g.isMeshNormalMaterial?o(x,g):g.isLineBasicMaterial?(a(x,g),g.isLineDashedMaterial&&c(x,g)):g.isPointsMaterial?d(x,g,P,w):g.isSpriteMaterial?f(x,g):g.isShadowMaterial?(x.color.value.copy(g.color),x.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function o(x,g){x.opacity.value=g.opacity,g.color&&x.diffuse.value.copy(g.color),g.emissive&&x.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(x.map.value=g.map,t(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,t(g.alphaMap,x.alphaMapTransform)),g.bumpMap&&(x.bumpMap.value=g.bumpMap,t(g.bumpMap,x.bumpMapTransform),x.bumpScale.value=g.bumpScale,g.side===wn&&(x.bumpScale.value*=-1)),g.normalMap&&(x.normalMap.value=g.normalMap,t(g.normalMap,x.normalMapTransform),x.normalScale.value.copy(g.normalScale),g.side===wn&&x.normalScale.value.negate()),g.displacementMap&&(x.displacementMap.value=g.displacementMap,t(g.displacementMap,x.displacementMapTransform),x.displacementScale.value=g.displacementScale,x.displacementBias.value=g.displacementBias),g.emissiveMap&&(x.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,x.emissiveMapTransform)),g.specularMap&&(x.specularMap.value=g.specularMap,t(g.specularMap,x.specularMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest);const P=e.get(g).envMap;if(P&&(x.envMap.value=P,x.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=g.reflectivity,x.ior.value=g.ior,x.refractionRatio.value=g.refractionRatio),g.lightMap){x.lightMap.value=g.lightMap;const w=i._useLegacyLights===!0?Math.PI:1;x.lightMapIntensity.value=g.lightMapIntensity*w,t(g.lightMap,x.lightMapTransform)}g.aoMap&&(x.aoMap.value=g.aoMap,x.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,x.aoMapTransform))}function a(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,g.map&&(x.map.value=g.map,t(g.map,x.mapTransform))}function c(x,g){x.dashSize.value=g.dashSize,x.totalSize.value=g.dashSize+g.gapSize,x.scale.value=g.scale}function d(x,g,P,w){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.size.value=g.size*P,x.scale.value=w*.5,g.map&&(x.map.value=g.map,t(g.map,x.uvTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,t(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function f(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.rotation.value=g.rotation,g.map&&(x.map.value=g.map,t(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,t(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function m(x,g){x.specular.value.copy(g.specular),x.shininess.value=Math.max(g.shininess,1e-4)}function v(x,g){g.gradientMap&&(x.gradientMap.value=g.gradientMap)}function _(x,g){x.metalness.value=g.metalness,g.metalnessMap&&(x.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,x.metalnessMapTransform)),x.roughness.value=g.roughness,g.roughnessMap&&(x.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,x.roughnessMapTransform)),e.get(g).envMap&&(x.envMapIntensity.value=g.envMapIntensity)}function y(x,g,P){x.ior.value=g.ior,g.sheen>0&&(x.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),x.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(x.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,x.sheenColorMapTransform)),g.sheenRoughnessMap&&(x.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,x.sheenRoughnessMapTransform))),g.clearcoat>0&&(x.clearcoat.value=g.clearcoat,x.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(x.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,x.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(x.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===wn&&x.clearcoatNormalScale.value.negate())),g.iridescence>0&&(x.iridescence.value=g.iridescence,x.iridescenceIOR.value=g.iridescenceIOR,x.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(x.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,x.iridescenceMapTransform)),g.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),g.transmission>0&&(x.transmission.value=g.transmission,x.transmissionSamplerMap.value=P.texture,x.transmissionSamplerSize.value.set(P.width,P.height),g.transmissionMap&&(x.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,x.transmissionMapTransform)),x.thickness.value=g.thickness,g.thicknessMap&&(x.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=g.attenuationDistance,x.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(x.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(x.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=g.specularIntensity,x.specularColor.value.copy(g.specularColor),g.specularColorMap&&(x.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,x.specularColorMapTransform)),g.specularIntensityMap&&(x.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,x.specularIntensityMapTransform))}function E(x,g){g.matcap&&(x.matcap.value=g.matcap)}function b(x,g){const P=e.get(g).light;x.referencePosition.value.setFromMatrixPosition(P.matrixWorld),x.nearDistance.value=P.shadow.camera.near,x.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function d0(i,e,t,n){let r={},o={},a=[];const c=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function d(P,w){const L=w.program;n.uniformBlockBinding(P,L)}function f(P,w){let L=r[P.id];L===void 0&&(E(P),L=m(P),r[P.id]=L,P.addEventListener("dispose",x));const N=w.program;n.updateUBOMapping(P,N);const u=e.render.frame;o[P.id]!==u&&(_(P),o[P.id]=u)}function m(P){const w=v();P.__bindingPointIndex=w;const L=i.createBuffer(),N=P.__size,u=P.usage;return i.bindBuffer(i.UNIFORM_BUFFER,L),i.bufferData(i.UNIFORM_BUFFER,N,u),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,L),L}function v(){for(let P=0;P<c;P++)if(a.indexOf(P)===-1)return a.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(P){const w=r[P.id],L=P.uniforms,N=P.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let u=0,F=L.length;u<F;u++){const q=L[u];if(y(q,u,N)===!0){const R=q.__offset,I=Array.isArray(q.value)?q.value:[q.value];let fe=0;for(let oe=0;oe<I.length;oe++){const Y=I[oe],J=b(Y);typeof Y=="number"?(q.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,R+fe,q.__data)):Y.isMatrix3?(q.__data[0]=Y.elements[0],q.__data[1]=Y.elements[1],q.__data[2]=Y.elements[2],q.__data[3]=Y.elements[0],q.__data[4]=Y.elements[3],q.__data[5]=Y.elements[4],q.__data[6]=Y.elements[5],q.__data[7]=Y.elements[0],q.__data[8]=Y.elements[6],q.__data[9]=Y.elements[7],q.__data[10]=Y.elements[8],q.__data[11]=Y.elements[0]):(Y.toArray(q.__data,fe),fe+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,R,q.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function y(P,w,L){const N=P.value;if(L[w]===void 0){if(typeof N=="number")L[w]=N;else{const u=Array.isArray(N)?N:[N],F=[];for(let q=0;q<u.length;q++)F.push(u[q].clone());L[w]=F}return!0}else if(typeof N=="number"){if(L[w]!==N)return L[w]=N,!0}else{const u=Array.isArray(L[w])?L[w]:[L[w]],F=Array.isArray(N)?N:[N];for(let q=0;q<u.length;q++){const R=u[q];if(R.equals(F[q])===!1)return R.copy(F[q]),!0}}return!1}function E(P){const w=P.uniforms;let L=0;const N=16;let u=0;for(let F=0,q=w.length;F<q;F++){const R=w[F],I={boundary:0,storage:0},fe=Array.isArray(R.value)?R.value:[R.value];for(let oe=0,Y=fe.length;oe<Y;oe++){const J=fe[oe],te=b(J);I.boundary+=te.boundary,I.storage+=te.storage}if(R.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=L,F>0){u=L%N;const oe=N-u;u!==0&&oe-I.boundary<0&&(L+=N-u,R.__offset=L)}L+=I.storage}return u=L%N,u>0&&(L+=N-u),P.__size=L,P.__cache={},this}function b(P){const w={boundary:0,storage:0};return typeof P=="number"?(w.boundary=4,w.storage=4):P.isVector2?(w.boundary=8,w.storage=8):P.isVector3||P.isColor?(w.boundary=16,w.storage=12):P.isVector4?(w.boundary=16,w.storage=16):P.isMatrix3?(w.boundary=48,w.storage=48):P.isMatrix4?(w.boundary=64,w.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),w}function x(P){const w=P.target;w.removeEventListener("dispose",x);const L=a.indexOf(w.__bindingPointIndex);a.splice(L,1),i.deleteBuffer(r[w.id]),delete r[w.id],delete o[w.id]}function g(){for(const P in r)i.deleteBuffer(r[P]);a=[],r={},o={}}return{bind:d,update:f,dispose:g}}class Qa{constructor(e={}){const{canvas:t=sf(),context:n=null,depth:r=!0,stencil:o=!0,alpha:a=!1,antialias:c=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:f=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:v=!1}=e;this.isWebGLRenderer=!0;let _;n!==null?_=n.getContextAttributes().alpha:_=a;const y=new Uint32Array(4),E=new Int32Array(4);let b=null,x=null;const g=[],P=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Bt,this._useLegacyLights=!1,this.toneMapping=zi,this.toneMappingExposure=1;const w=this;let L=!1,N=0,u=0,F=null,q=-1,R=null;const I=new on,fe=new on;let oe=null;const Y=new Mt(0);let J=0,te=t.width,_e=t.height,le=1,de=null,ve=null;const ge=new on(0,0,te,_e),$=new on(0,0,te,_e);let se=!1;const Pe=new al;let Ie=!1,Be=!1,Ye=null;const nt=new It,Xe=new et,lt=new z,Zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ct(){return F===null?le:1}let Z=n;function Et(D,j){for(let ce=0;ce<D.length;ce++){const ee=D[ce],ae=t.getContext(ee,j);if(ae!==null)return ae}return null}try{const D={alpha:!0,depth:r,stencil:o,antialias:c,premultipliedAlpha:d,preserveDrawingBuffer:f,powerPreference:m,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${il}`),t.addEventListener("webglcontextlost",De,!1),t.addEventListener("webglcontextrestored",ie,!1),t.addEventListener("webglcontextcreationerror",Me,!1),Z===null){const j=["webgl2","webgl","experimental-webgl"];if(w.isWebGL1Renderer===!0&&j.shift(),Z=Et(j,D),Z===null)throw Et(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&Z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),Z.getShaderPrecisionFormat===void 0&&(Z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let We,tt,Se,ht,dt,ot,xt,Vt,Xt,U,C,Q,be,Ee,Te,He,Ae,re,H,me,Ne,Re,Ce,ke;function pt(){We=new Sg(Z),tt=new gg(Z,We,e),We.init(tt),Re=new o0(Z,We,tt),Se=new i0(Z,We,tt),ht=new Tg(Z),dt=new V_,ot=new r0(Z,We,Se,dt,tt,Re,ht),xt=new vg(w),Vt=new Mg(w),Xt=new Nf(Z,tt),Ce=new pg(Z,We,Xt,tt),U=new Eg(Z,Xt,ht,Ce),C=new Rg(Z,U,Xt,ht),H=new Cg(Z,tt,ot),He=new _g(dt),Q=new G_(w,xt,Vt,We,tt,Ce,He),be=new h0(w,dt),Ee=new X_,Te=new K_(We,tt),re=new fg(w,xt,Vt,Se,C,_,d),Ae=new n0(w,C,tt),ke=new d0(Z,ht,tt,Se),me=new mg(Z,We,ht,tt),Ne=new bg(Z,We,ht,tt),ht.programs=Q.programs,w.capabilities=tt,w.extensions=We,w.properties=dt,w.renderLists=Ee,w.shadowMap=Ae,w.state=Se,w.info=ht}pt();const G=new u0(w,Z);this.xr=G,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const D=We.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=We.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return le},this.setPixelRatio=function(D){D!==void 0&&(le=D,this.setSize(te,_e,!1))},this.getSize=function(D){return D.set(te,_e)},this.setSize=function(D,j,ce=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}te=D,_e=j,t.width=Math.floor(D*le),t.height=Math.floor(j*le),ce===!0&&(t.style.width=D+"px",t.style.height=j+"px"),this.setViewport(0,0,D,j)},this.getDrawingBufferSize=function(D){return D.set(te*le,_e*le).floor()},this.setDrawingBufferSize=function(D,j,ce){te=D,_e=j,le=ce,t.width=Math.floor(D*ce),t.height=Math.floor(j*ce),this.setViewport(0,0,D,j)},this.getCurrentViewport=function(D){return D.copy(I)},this.getViewport=function(D){return D.copy(ge)},this.setViewport=function(D,j,ce,ee){D.isVector4?ge.set(D.x,D.y,D.z,D.w):ge.set(D,j,ce,ee),Se.viewport(I.copy(ge).multiplyScalar(le).floor())},this.getScissor=function(D){return D.copy($)},this.setScissor=function(D,j,ce,ee){D.isVector4?$.set(D.x,D.y,D.z,D.w):$.set(D,j,ce,ee),Se.scissor(fe.copy($).multiplyScalar(le).floor())},this.getScissorTest=function(){return se},this.setScissorTest=function(D){Se.setScissorTest(se=D)},this.setOpaqueSort=function(D){de=D},this.setTransparentSort=function(D){ve=D},this.getClearColor=function(D){return D.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor.apply(re,arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha.apply(re,arguments)},this.clear=function(D=!0,j=!0,ce=!0){let ee=0;if(D){let ae=!1;if(F!==null){const ze=F.texture.format;ae=ze===Ou||ze===Fu||ze===Nu}if(ae){const ze=F.texture.type,qe=ze===Hi||ze===Fi||ze===rl||ze===lr||ze===Iu||ze===Uu,it=re.getClearColor(),rt=re.getClearAlpha(),gt=it.r,Qe=it.g,ut=it.b;qe?(y[0]=gt,y[1]=Qe,y[2]=ut,y[3]=rt,Z.clearBufferuiv(Z.COLOR,0,y)):(E[0]=gt,E[1]=Qe,E[2]=ut,E[3]=rt,Z.clearBufferiv(Z.COLOR,0,E))}else ee|=Z.COLOR_BUFFER_BIT}j&&(ee|=Z.DEPTH_BUFFER_BIT),ce&&(ee|=Z.STENCIL_BUFFER_BIT),Z.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",De,!1),t.removeEventListener("webglcontextrestored",ie,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),Ee.dispose(),Te.dispose(),dt.dispose(),xt.dispose(),Vt.dispose(),C.dispose(),Ce.dispose(),ke.dispose(),Q.dispose(),G.dispose(),G.removeEventListener("sessionstart",At),G.removeEventListener("sessionend",On),Ye&&(Ye.dispose(),Ye=null),an.stop()};function De(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function ie(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const D=ht.autoReset,j=Ae.enabled,ce=Ae.autoUpdate,ee=Ae.needsUpdate,ae=Ae.type;pt(),ht.autoReset=D,Ae.enabled=j,Ae.autoUpdate=ce,Ae.needsUpdate=ee,Ae.type=ae}function Me(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function we(D){const j=D.target;j.removeEventListener("dispose",we),mt(j)}function mt(D){St(D),dt.remove(D)}function St(D){const j=dt.get(D).programs;j!==void 0&&(j.forEach(function(ce){Q.releaseProgram(ce)}),D.isShaderMaterial&&Q.releaseShaderCache(D))}this.renderBufferDirect=function(D,j,ce,ee,ae,ze){j===null&&(j=Zt);const qe=ae.isMesh&&ae.matrixWorld.determinant()<0,it=ns(D,j,ce,ee,ae);Se.setMaterial(ee,qe);let rt=ce.index,gt=1;if(ee.wireframe===!0){if(rt=U.getWireframeAttribute(ce),rt===void 0)return;gt=2}const Qe=ce.drawRange,ut=ce.attributes.position;let Ut=Qe.start*gt,Nt=(Qe.start+Qe.count)*gt;ze!==null&&(Ut=Math.max(Ut,ze.start*gt),Nt=Math.min(Nt,(ze.start+ze.count)*gt)),rt!==null?(Ut=Math.max(Ut,0),Nt=Math.min(Nt,rt.count)):ut!=null&&(Ut=Math.max(Ut,0),Nt=Math.min(Nt,ut.count));const mn=Nt-Ut;if(mn<0||mn===1/0)return;Ce.setup(ae,ee,it,ce,rt);let An,Ht=me;if(rt!==null&&(An=Xt.get(rt),Ht=Ne,Ht.setIndex(An)),ae.isMesh)ee.wireframe===!0?(Se.setLineWidth(ee.wireframeLinewidth*ct()),Ht.setMode(Z.LINES)):Ht.setMode(Z.TRIANGLES);else if(ae.isLine){let $e=ee.linewidth;$e===void 0&&($e=1),Se.setLineWidth($e*ct()),ae.isLineSegments?Ht.setMode(Z.LINES):ae.isLineLoop?Ht.setMode(Z.LINE_LOOP):Ht.setMode(Z.LINE_STRIP)}else ae.isPoints?Ht.setMode(Z.POINTS):ae.isSprite&&Ht.setMode(Z.TRIANGLES);if(ae.isInstancedMesh)Ht.renderInstances(Ut,mn,ae.count);else if(ce.isInstancedBufferGeometry){const $e=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,ti=Math.min(ce.instanceCount,$e);Ht.renderInstances(Ut,mn,ti)}else Ht.render(Ut,mn)},this.compile=function(D,j){function ce(ee,ae,ze){ee.transparent===!0&&ee.side===ai&&ee.forceSinglePass===!1?(ee.side=wn,ee.needsUpdate=!0,Wn(ee,ae,ze),ee.side=Vi,ee.needsUpdate=!0,Wn(ee,ae,ze),ee.side=ai):Wn(ee,ae,ze)}x=Te.get(D),x.init(),P.push(x),D.traverseVisible(function(ee){ee.isLight&&ee.layers.test(j.layers)&&(x.pushLight(ee),ee.castShadow&&x.pushShadow(ee))}),x.setupLights(w._useLegacyLights),D.traverse(function(ee){const ae=ee.material;if(ae)if(Array.isArray(ae))for(let ze=0;ze<ae.length;ze++){const qe=ae[ze];ce(qe,D,ee)}else ce(ae,D,ee)}),P.pop(),x=null};let bt=null;function nn(D){bt&&bt(D)}function At(){an.stop()}function On(){an.start()}const an=new $u;an.setAnimationLoop(nn),typeof self<"u"&&an.setContext(self),this.setAnimationLoop=function(D){bt=D,G.setAnimationLoop(D),D===null?an.stop():an.start()},G.addEventListener("sessionstart",At),G.addEventListener("sessionend",On),this.render=function(D,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(j),j=G.getCamera()),D.isScene===!0&&D.onBeforeRender(w,D,j,F),x=Te.get(D,P.length),x.init(),P.push(x),nt.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Pe.setFromProjectionMatrix(nt),Be=this.localClippingEnabled,Ie=He.init(this.clippingPlanes,Be),b=Ee.get(D,g.length),b.init(),g.push(b),es(D,j,0,w.sortObjects),b.finish(),w.sortObjects===!0&&b.sort(de,ve),this.info.render.frame++,Ie===!0&&He.beginShadows();const ce=x.state.shadowsArray;if(Ae.render(ce,D,j),Ie===!0&&He.endShadows(),this.info.autoReset===!0&&this.info.reset(),re.render(b,D),x.setupLights(w._useLegacyLights),j.isArrayCamera){const ee=j.cameras;for(let ae=0,ze=ee.length;ae<ze;ae++){const qe=ee[ae];Fs(b,D,qe,qe.viewport)}}else Fs(b,D,j);F!==null&&(ot.updateMultisampleRenderTarget(F),ot.updateRenderTargetMipmap(F)),D.isScene===!0&&D.onAfterRender(w,D,j),Ce.resetDefaultState(),q=-1,R=null,P.pop(),P.length>0?x=P[P.length-1]:x=null,g.pop(),g.length>0?b=g[g.length-1]:b=null};function es(D,j,ce,ee){if(D.visible===!1)return;if(D.layers.test(j.layers)){if(D.isGroup)ce=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(j);else if(D.isLight)x.pushLight(D),D.castShadow&&x.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||Pe.intersectsSprite(D)){ee&&lt.setFromMatrixPosition(D.matrixWorld).applyMatrix4(nt);const qe=C.update(D),it=D.material;it.visible&&b.push(D,qe,it,ce,lt.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||Pe.intersectsObject(D))){const qe=C.update(D),it=D.material;if(ee&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),lt.copy(D.boundingSphere.center)):(qe.boundingSphere===null&&qe.computeBoundingSphere(),lt.copy(qe.boundingSphere.center)),lt.applyMatrix4(D.matrixWorld).applyMatrix4(nt)),Array.isArray(it)){const rt=qe.groups;for(let gt=0,Qe=rt.length;gt<Qe;gt++){const ut=rt[gt],Ut=it[ut.materialIndex];Ut&&Ut.visible&&b.push(D,qe,Ut,ce,lt.z,ut)}}else it.visible&&b.push(D,qe,it,ce,lt.z,null)}}const ze=D.children;for(let qe=0,it=ze.length;qe<it;qe++)es(ze[qe],j,ce,ee)}function Fs(D,j,ce,ee){const ae=D.opaque,ze=D.transmissive,qe=D.transparent;x.setupLightsView(ce),Ie===!0&&He.setGlobalState(w.clippingPlanes,ce),ze.length>0&&Ho(ae,ze,j,ce),ee&&Se.viewport(I.copy(ee)),ae.length>0&&Wi(ae,j,ce),ze.length>0&&Wi(ze,j,ce),qe.length>0&&Wi(qe,j,ce),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function Ho(D,j,ce,ee){const ae=tt.isWebGL2;Ye===null&&(Ye=new pr(1,1,{generateMipmaps:!0,type:We.has("EXT_color_buffer_half_float")?ws:Hi,minFilter:Ts,samples:ae?4:0})),w.getDrawingBufferSize(Xe),ae?Ye.setSize(Xe.x,Xe.y):Ye.setSize(Ro(Xe.x),Ro(Xe.y));const ze=w.getRenderTarget();w.setRenderTarget(Ye),w.getClearColor(Y),J=w.getClearAlpha(),J<1&&w.setClearColor(16777215,.5),w.clear();const qe=w.toneMapping;w.toneMapping=zi,Wi(D,ce,ee),ot.updateMultisampleRenderTarget(Ye),ot.updateRenderTargetMipmap(Ye);let it=!1;for(let rt=0,gt=j.length;rt<gt;rt++){const Qe=j[rt],ut=Qe.object,Ut=Qe.geometry,Nt=Qe.material,mn=Qe.group;if(Nt.side===ai&&ut.layers.test(ee.layers)){const An=Nt.side;Nt.side=wn,Nt.needsUpdate=!0,Os(ut,ce,ee,Ut,Nt,mn),Nt.side=An,Nt.needsUpdate=!0,it=!0}}it===!0&&(ot.updateMultisampleRenderTarget(Ye),ot.updateRenderTargetMipmap(Ye)),w.setRenderTarget(ze),w.setClearColor(Y,J),w.toneMapping=qe}function Wi(D,j,ce){const ee=j.isScene===!0?j.overrideMaterial:null;for(let ae=0,ze=D.length;ae<ze;ae++){const qe=D[ae],it=qe.object,rt=qe.geometry,gt=ee===null?qe.material:ee,Qe=qe.group;it.layers.test(ce.layers)&&Os(it,j,ce,rt,gt,Qe)}}function Os(D,j,ce,ee,ae,ze){D.onBeforeRender(w,j,ce,ee,ae,ze),D.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),ae.onBeforeRender(w,j,ce,ee,D,ze),ae.transparent===!0&&ae.side===ai&&ae.forceSinglePass===!1?(ae.side=wn,ae.needsUpdate=!0,w.renderBufferDirect(ce,j,ee,ae,D,ze),ae.side=Vi,ae.needsUpdate=!0,w.renderBufferDirect(ce,j,ee,ae,D,ze),ae.side=ai):w.renderBufferDirect(ce,j,ee,ae,D,ze),D.onAfterRender(w,j,ce,ee,ae,ze)}function Wn(D,j,ce){j.isScene!==!0&&(j=Zt);const ee=dt.get(D),ae=x.state.lights,ze=x.state.shadowsArray,qe=ae.state.version,it=Q.getParameters(D,ae.state,ze,j,ce),rt=Q.getProgramCacheKey(it);let gt=ee.programs;ee.environment=D.isMeshStandardMaterial?j.environment:null,ee.fog=j.fog,ee.envMap=(D.isMeshStandardMaterial?Vt:xt).get(D.envMap||ee.environment),gt===void 0&&(D.addEventListener("dispose",we),gt=new Map,ee.programs=gt);let Qe=gt.get(rt);if(Qe!==void 0){if(ee.currentProgram===Qe&&ee.lightsStateVersion===qe)return ts(D,it),Qe}else it.uniforms=Q.getUniforms(D),D.onBuild(ce,it,w),D.onBeforeCompile(it,w),Qe=Q.acquireProgram(it,rt),gt.set(rt,Qe),ee.uniforms=it.uniforms;const ut=ee.uniforms;(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(ut.clippingPlanes=He.uniform),ts(D,it),ee.needsLights=xr(D),ee.lightsStateVersion=qe,ee.needsLights&&(ut.ambientLightColor.value=ae.state.ambient,ut.lightProbe.value=ae.state.probe,ut.directionalLights.value=ae.state.directional,ut.directionalLightShadows.value=ae.state.directionalShadow,ut.spotLights.value=ae.state.spot,ut.spotLightShadows.value=ae.state.spotShadow,ut.rectAreaLights.value=ae.state.rectArea,ut.ltc_1.value=ae.state.rectAreaLTC1,ut.ltc_2.value=ae.state.rectAreaLTC2,ut.pointLights.value=ae.state.point,ut.pointLightShadows.value=ae.state.pointShadow,ut.hemisphereLights.value=ae.state.hemi,ut.directionalShadowMap.value=ae.state.directionalShadowMap,ut.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,ut.spotShadowMap.value=ae.state.spotShadowMap,ut.spotLightMatrix.value=ae.state.spotLightMatrix,ut.spotLightMap.value=ae.state.spotLightMap,ut.pointShadowMap.value=ae.state.pointShadowMap,ut.pointShadowMatrix.value=ae.state.pointShadowMatrix);const Ut=Qe.getUniforms(),Nt=bo.seqWithValue(Ut.seq,ut);return ee.currentProgram=Qe,ee.uniformsList=Nt,Qe}function ts(D,j){const ce=dt.get(D);ce.outputColorSpace=j.outputColorSpace,ce.instancing=j.instancing,ce.instancingColor=j.instancingColor,ce.skinning=j.skinning,ce.morphTargets=j.morphTargets,ce.morphNormals=j.morphNormals,ce.morphColors=j.morphColors,ce.morphTargetsCount=j.morphTargetsCount,ce.numClippingPlanes=j.numClippingPlanes,ce.numIntersection=j.numClipIntersection,ce.vertexAlphas=j.vertexAlphas,ce.vertexTangents=j.vertexTangents,ce.toneMapping=j.toneMapping}function ns(D,j,ce,ee,ae){j.isScene!==!0&&(j=Zt),ot.resetTextureUnits();const ze=j.fog,qe=ee.isMeshStandardMaterial?j.environment:null,it=F===null?w.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:ui,rt=(ee.isMeshStandardMaterial?Vt:xt).get(ee.envMap||qe),gt=ee.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,Qe=!!ce.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),ut=!!ce.morphAttributes.position,Ut=!!ce.morphAttributes.normal,Nt=!!ce.morphAttributes.color;let mn=zi;ee.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(mn=w.toneMapping);const An=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,Ht=An!==void 0?An.length:0,$e=dt.get(ee),ti=x.state.lights;if(Ie===!0&&(Be===!0||D!==R)){const gn=D===R&&ee.id===q;He.setState(ee,D,gn)}let Dt=!1;ee.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==ti.state.version||$e.outputColorSpace!==it||ae.isInstancedMesh&&$e.instancing===!1||!ae.isInstancedMesh&&$e.instancing===!0||ae.isSkinnedMesh&&$e.skinning===!1||!ae.isSkinnedMesh&&$e.skinning===!0||ae.isInstancedMesh&&$e.instancingColor===!0&&ae.instanceColor===null||ae.isInstancedMesh&&$e.instancingColor===!1&&ae.instanceColor!==null||$e.envMap!==rt||ee.fog===!0&&$e.fog!==ze||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==He.numPlanes||$e.numIntersection!==He.numIntersection)||$e.vertexAlphas!==gt||$e.vertexTangents!==Qe||$e.morphTargets!==ut||$e.morphNormals!==Ut||$e.morphColors!==Nt||$e.toneMapping!==mn||tt.isWebGL2===!0&&$e.morphTargetsCount!==Ht)&&(Dt=!0):(Dt=!0,$e.__version=ee.version);let hi=$e.currentProgram;Dt===!0&&(hi=Wn(ee,j,ae));let Bs=!1,di=!1,yr=!1;const jt=hi.getUniforms(),ni=$e.uniforms;if(Se.useProgram(hi.program)&&(Bs=!0,di=!0,yr=!0),ee.id!==q&&(q=ee.id,di=!0),Bs||R!==D){jt.setValue(Z,"projectionMatrix",D.projectionMatrix),jt.setValue(Z,"viewMatrix",D.matrixWorldInverse);const gn=jt.map.cameraPosition;gn!==void 0&&gn.setValue(Z,lt.setFromMatrixPosition(D.matrixWorld)),tt.logarithmicDepthBuffer&&jt.setValue(Z,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&jt.setValue(Z,"isOrthographic",D.isOrthographicCamera===!0),R!==D&&(R=D,di=!0,yr=!0)}if(ae.isSkinnedMesh){jt.setOptional(Z,ae,"bindMatrix"),jt.setOptional(Z,ae,"bindMatrixInverse");const gn=ae.skeleton;gn&&(tt.floatVertexTextures?(gn.boneTexture===null&&gn.computeBoneTexture(),jt.setValue(Z,"boneTexture",gn.boneTexture,ot),jt.setValue(Z,"boneTextureSize",gn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const rs=ce.morphAttributes;if((rs.position!==void 0||rs.normal!==void 0||rs.color!==void 0&&tt.isWebGL2===!0)&&H.update(ae,ce,hi),(di||$e.receiveShadow!==ae.receiveShadow)&&($e.receiveShadow=ae.receiveShadow,jt.setValue(Z,"receiveShadow",ae.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(ni.envMap.value=rt,ni.flipEnvMap.value=rt.isCubeTexture&&rt.isRenderTargetTexture===!1?-1:1),di&&(jt.setValue(Z,"toneMappingExposure",w.toneMappingExposure),$e.needsLights&&is(ni,yr),ze&&ee.fog===!0&&be.refreshFogUniforms(ni,ze),be.refreshMaterialUniforms(ni,ee,le,_e,Ye),bo.upload(Z,$e.uniformsList,ni,ot)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(bo.upload(Z,$e.uniformsList,ni,ot),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&jt.setValue(Z,"center",ae.center),jt.setValue(Z,"modelViewMatrix",ae.modelViewMatrix),jt.setValue(Z,"normalMatrix",ae.normalMatrix),jt.setValue(Z,"modelMatrix",ae.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const gn=ee.uniformsGroups;for(let _n=0,zs=gn.length;_n<zs;_n++)if(tt.isWebGL2){const wi=gn[_n];ke.update(wi,hi),ke.bind(wi,hi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return hi}function is(D,j){D.ambientLightColor.needsUpdate=j,D.lightProbe.needsUpdate=j,D.directionalLights.needsUpdate=j,D.directionalLightShadows.needsUpdate=j,D.pointLights.needsUpdate=j,D.pointLightShadows.needsUpdate=j,D.spotLights.needsUpdate=j,D.spotLightShadows.needsUpdate=j,D.rectAreaLights.needsUpdate=j,D.hemisphereLights.needsUpdate=j}function xr(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return u},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(D,j,ce){dt.get(D.texture).__webglTexture=j,dt.get(D.depthTexture).__webglTexture=ce;const ee=dt.get(D);ee.__hasExternalTextures=!0,ee.__hasExternalTextures&&(ee.__autoAllocateDepthBuffer=ce===void 0,ee.__autoAllocateDepthBuffer||We.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(D,j){const ce=dt.get(D);ce.__webglFramebuffer=j,ce.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(D,j=0,ce=0){F=D,N=j,u=ce;let ee=!0,ae=null,ze=!1,qe=!1;if(D){const rt=dt.get(D);rt.__useDefaultFramebuffer!==void 0?(Se.bindFramebuffer(Z.FRAMEBUFFER,null),ee=!1):rt.__webglFramebuffer===void 0?ot.setupRenderTarget(D):rt.__hasExternalTextures&&ot.rebindTextures(D,dt.get(D.texture).__webglTexture,dt.get(D.depthTexture).__webglTexture);const gt=D.texture;(gt.isData3DTexture||gt.isDataArrayTexture||gt.isCompressedArrayTexture)&&(qe=!0);const Qe=dt.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(Qe[j])?ae=Qe[j][ce]:ae=Qe[j],ze=!0):tt.isWebGL2&&D.samples>0&&ot.useMultisampledRTT(D)===!1?ae=dt.get(D).__webglMultisampledFramebuffer:Array.isArray(Qe)?ae=Qe[ce]:ae=Qe,I.copy(D.viewport),fe.copy(D.scissor),oe=D.scissorTest}else I.copy(ge).multiplyScalar(le).floor(),fe.copy($).multiplyScalar(le).floor(),oe=se;if(Se.bindFramebuffer(Z.FRAMEBUFFER,ae)&&tt.drawBuffers&&ee&&Se.drawBuffers(D,ae),Se.viewport(I),Se.scissor(fe),Se.setScissorTest(oe),ze){const rt=dt.get(D.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+j,rt.__webglTexture,ce)}else if(qe){const rt=dt.get(D.texture),gt=j||0;Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,rt.__webglTexture,ce||0,gt)}q=-1},this.readRenderTargetPixels=function(D,j,ce,ee,ae,ze,qe){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let it=dt.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&qe!==void 0&&(it=it[qe]),it){Se.bindFramebuffer(Z.FRAMEBUFFER,it);try{const rt=D.texture,gt=rt.format,Qe=rt.type;if(gt!==Qn&&Re.convert(gt)!==Z.getParameter(Z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ut=Qe===ws&&(We.has("EXT_color_buffer_half_float")||tt.isWebGL2&&We.has("EXT_color_buffer_float"));if(Qe!==Hi&&Re.convert(Qe)!==Z.getParameter(Z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Qe===Oi&&(tt.isWebGL2||We.has("OES_texture_float")||We.has("WEBGL_color_buffer_float")))&&!ut){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=D.width-ee&&ce>=0&&ce<=D.height-ae&&Z.readPixels(j,ce,ee,ae,Re.convert(gt),Re.convert(Qe),ze)}finally{const rt=F!==null?dt.get(F).__webglFramebuffer:null;Se.bindFramebuffer(Z.FRAMEBUFFER,rt)}}},this.copyFramebufferToTexture=function(D,j,ce=0){const ee=Math.pow(2,-ce),ae=Math.floor(j.image.width*ee),ze=Math.floor(j.image.height*ee);ot.setTexture2D(j,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,ce,0,0,D.x,D.y,ae,ze),Se.unbindTexture()},this.copyTextureToTexture=function(D,j,ce,ee=0){const ae=j.image.width,ze=j.image.height,qe=Re.convert(ce.format),it=Re.convert(ce.type);ot.setTexture2D(ce,0),Z.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,ce.flipY),Z.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ce.premultiplyAlpha),Z.pixelStorei(Z.UNPACK_ALIGNMENT,ce.unpackAlignment),j.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,ee,D.x,D.y,ae,ze,qe,it,j.image.data):j.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,ee,D.x,D.y,j.mipmaps[0].width,j.mipmaps[0].height,qe,j.mipmaps[0].data):Z.texSubImage2D(Z.TEXTURE_2D,ee,D.x,D.y,qe,it,j.image),ee===0&&ce.generateMipmaps&&Z.generateMipmap(Z.TEXTURE_2D),Se.unbindTexture()},this.copyTextureToTexture3D=function(D,j,ce,ee,ae=0){if(w.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ze=D.max.x-D.min.x+1,qe=D.max.y-D.min.y+1,it=D.max.z-D.min.z+1,rt=Re.convert(ee.format),gt=Re.convert(ee.type);let Qe;if(ee.isData3DTexture)ot.setTexture3D(ee,0),Qe=Z.TEXTURE_3D;else if(ee.isDataArrayTexture)ot.setTexture2DArray(ee,0),Qe=Z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Z.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,ee.flipY),Z.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),Z.pixelStorei(Z.UNPACK_ALIGNMENT,ee.unpackAlignment);const ut=Z.getParameter(Z.UNPACK_ROW_LENGTH),Ut=Z.getParameter(Z.UNPACK_IMAGE_HEIGHT),Nt=Z.getParameter(Z.UNPACK_SKIP_PIXELS),mn=Z.getParameter(Z.UNPACK_SKIP_ROWS),An=Z.getParameter(Z.UNPACK_SKIP_IMAGES),Ht=ce.isCompressedTexture?ce.mipmaps[0]:ce.image;Z.pixelStorei(Z.UNPACK_ROW_LENGTH,Ht.width),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,Ht.height),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,D.min.x),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,D.min.y),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,D.min.z),ce.isDataTexture||ce.isData3DTexture?Z.texSubImage3D(Qe,ae,j.x,j.y,j.z,ze,qe,it,rt,gt,Ht.data):ce.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Z.compressedTexSubImage3D(Qe,ae,j.x,j.y,j.z,ze,qe,it,rt,Ht.data)):Z.texSubImage3D(Qe,ae,j.x,j.y,j.z,ze,qe,it,rt,gt,Ht),Z.pixelStorei(Z.UNPACK_ROW_LENGTH,ut),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,Ut),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,Nt),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,mn),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,An),ae===0&&ee.generateMipmaps&&Z.generateMipmap(Qe),Se.unbindTexture()},this.initTexture=function(D){D.isCubeTexture?ot.setTextureCube(D,0):D.isData3DTexture?ot.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?ot.setTexture2DArray(D,0):ot.setTexture2D(D,0),Se.unbindTexture()},this.resetState=function(){N=0,u=0,F=null,Se.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Bt?ur:Bu}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ur?Bt:ui}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class f0 extends Qa{}f0.prototype.isWebGL1Renderer=!0;class p0 extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Ns extends Qr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Mt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Kc=new z,Qc=new z,Jc=new It,Pa=new Fo,go=new No;class ri extends qt{constructor(e=new cn,t=new Ns){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,o=t.count;r<o;r++)Kc.fromBufferAttribute(t,r-1),Qc.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Kc.distanceTo(Qc);e.setAttribute("lineDistance",new Lt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,o=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),go.copy(n.boundingSphere),go.applyMatrix4(r),go.radius+=o,e.ray.intersectsSphere(go)===!1)return;Jc.copy(r).invert(),Pa.copy(e.ray).applyMatrix4(Jc);const c=o/((this.scale.x+this.scale.y+this.scale.z)/3),d=c*c,f=new z,m=new z,v=new z,_=new z,y=this.isLineSegments?2:1,E=n.index,x=n.attributes.position;if(E!==null){const g=Math.max(0,a.start),P=Math.min(E.count,a.start+a.count);for(let w=g,L=P-1;w<L;w+=y){const N=E.getX(w),u=E.getX(w+1);if(f.fromBufferAttribute(x,N),m.fromBufferAttribute(x,u),Pa.distanceSqToSegment(f,m,_,v)>d)continue;_.applyMatrix4(this.matrixWorld);const q=e.ray.origin.distanceTo(_);q<e.near||q>e.far||t.push({distance:q,point:v.clone().applyMatrix4(this.matrixWorld),index:w,face:null,faceIndex:null,object:this})}}else{const g=Math.max(0,a.start),P=Math.min(x.count,a.start+a.count);for(let w=g,L=P-1;w<L;w+=y){if(f.fromBufferAttribute(x,w),m.fromBufferAttribute(x,w+1),Pa.distanceSqToSegment(f,m,_,v)>d)continue;_.applyMatrix4(this.matrixWorld);const u=e.ray.origin.distanceTo(_);u<e.near||u>e.far||t.push({distance:u,point:v.clone().applyMatrix4(this.matrixWorld),index:w,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=r.length;o<a;o++){const c=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}}const eu=new z,tu=new z;class th extends ri{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,o=t.count;r<o;r+=2)eu.fromBufferAttribute(t,r),tu.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+eu.distanceTo(tu);e.setAttribute("lineDistance",new Lt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class m0{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),o=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),o+=n.distanceTo(r),t.push(o),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const o=n.length;let a;t?a=t:a=e*n[o-1];let c=0,d=o-1,f;for(;c<=d;)if(r=Math.floor(c+(d-c)/2),f=n[r]-a,f<0)c=r+1;else if(f>0)d=r-1;else{d=r;break}if(r=d,n[r]===a)return r/(o-1);const m=n[r],_=n[r+1]-m,y=(a-m)/_;return(r+y)/(o-1)}getTangent(e,t){let r=e-1e-4,o=e+1e-4;r<0&&(r=0),o>1&&(o=1);const a=this.getPoint(r),c=this.getPoint(o),d=t||(a.isVector2?new et:new z);return d.copy(c).sub(a).normalize(),d}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new z,r=[],o=[],a=[],c=new z,d=new It;for(let y=0;y<=e;y++){const E=y/e;r[y]=this.getTangentAt(E,new z)}o[0]=new z,a[0]=new z;let f=Number.MAX_VALUE;const m=Math.abs(r[0].x),v=Math.abs(r[0].y),_=Math.abs(r[0].z);m<=f&&(f=m,n.set(1,0,0)),v<=f&&(f=v,n.set(0,1,0)),_<=f&&n.set(0,0,1),c.crossVectors(r[0],n).normalize(),o[0].crossVectors(r[0],c),a[0].crossVectors(r[0],o[0]);for(let y=1;y<=e;y++){if(o[y]=o[y-1].clone(),a[y]=a[y-1].clone(),c.crossVectors(r[y-1],r[y]),c.length()>Number.EPSILON){c.normalize();const E=Math.acos(sn(r[y-1].dot(r[y]),-1,1));o[y].applyMatrix4(d.makeRotationAxis(c,E))}a[y].crossVectors(r[y],o[y])}if(t===!0){let y=Math.acos(sn(o[0].dot(o[e]),-1,1));y/=e,r[0].dot(c.crossVectors(o[0],o[e]))>0&&(y=-y);for(let E=1;E<=e;E++)o[E].applyMatrix4(d.makeRotationAxis(r[E],y*E)),a[E].crossVectors(r[E],o[E])}return{tangents:r,normals:o,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function cl(){let i=0,e=0,t=0,n=0;function r(o,a,c,d){i=o,e=c,t=-3*o+3*a-2*c-d,n=2*o-2*a+c+d}return{initCatmullRom:function(o,a,c,d,f){r(a,c,f*(c-o),f*(d-a))},initNonuniformCatmullRom:function(o,a,c,d,f,m,v){let _=(a-o)/f-(c-o)/(f+m)+(c-a)/m,y=(c-a)/m-(d-a)/(m+v)+(d-c)/v;_*=m,y*=m,r(a,c,_,y)},calc:function(o){const a=o*o,c=a*o;return i+e*o+t*a+n*c}}}const _o=new z,La=new cl,Da=new cl,Ia=new cl;class g0 extends m0{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new z){const n=t,r=this.points,o=r.length,a=(o-(this.closed?0:1))*e;let c=Math.floor(a),d=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/o)+1)*o:d===0&&c===o-1&&(c=o-2,d=1);let f,m;this.closed||c>0?f=r[(c-1)%o]:(_o.subVectors(r[0],r[1]).add(r[0]),f=_o);const v=r[c%o],_=r[(c+1)%o];if(this.closed||c+2<o?m=r[(c+2)%o]:(_o.subVectors(r[o-1],r[o-2]).add(r[o-1]),m=_o),this.curveType==="centripetal"||this.curveType==="chordal"){const y=this.curveType==="chordal"?.5:.25;let E=Math.pow(f.distanceToSquared(v),y),b=Math.pow(v.distanceToSquared(_),y),x=Math.pow(_.distanceToSquared(m),y);b<1e-4&&(b=1),E<1e-4&&(E=b),x<1e-4&&(x=b),La.initNonuniformCatmullRom(f.x,v.x,_.x,m.x,E,b,x),Da.initNonuniformCatmullRom(f.y,v.y,_.y,m.y,E,b,x),Ia.initNonuniformCatmullRom(f.z,v.z,_.z,m.z,E,b,x)}else this.curveType==="catmullrom"&&(La.initCatmullRom(f.x,v.x,_.x,m.x,this.tension),Da.initCatmullRom(f.y,v.y,_.y,m.y,this.tension),Ia.initCatmullRom(f.z,v.z,_.z,m.z,this.tension));return n.set(La.calc(d),Da.calc(d),Ia.calc(d)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new z().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class fn extends cn{constructor(e=1,t=1,n=1,r=32,o=1,a=!1,c=0,d=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:o,openEnded:a,thetaStart:c,thetaLength:d};const f=this;r=Math.floor(r),o=Math.floor(o);const m=[],v=[],_=[],y=[];let E=0;const b=[],x=n/2;let g=0;P(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(m),this.setAttribute("position",new Lt(v,3)),this.setAttribute("normal",new Lt(_,3)),this.setAttribute("uv",new Lt(y,2));function P(){const L=new z,N=new z;let u=0;const F=(t-e)/n;for(let q=0;q<=o;q++){const R=[],I=q/o,fe=I*(t-e)+e;for(let oe=0;oe<=r;oe++){const Y=oe/r,J=Y*d+c,te=Math.sin(J),_e=Math.cos(J);N.x=fe*te,N.y=-I*n+x,N.z=fe*_e,v.push(N.x,N.y,N.z),L.set(te,F,_e).normalize(),_.push(L.x,L.y,L.z),y.push(Y,1-I),R.push(E++)}b.push(R)}for(let q=0;q<r;q++)for(let R=0;R<o;R++){const I=b[R][q],fe=b[R+1][q],oe=b[R+1][q+1],Y=b[R][q+1];m.push(I,fe,Y),m.push(fe,oe,Y),u+=6}f.addGroup(g,u,0),g+=u}function w(L){const N=E,u=new et,F=new z;let q=0;const R=L===!0?e:t,I=L===!0?1:-1;for(let oe=1;oe<=r;oe++)v.push(0,x*I,0),_.push(0,I,0),y.push(.5,.5),E++;const fe=E;for(let oe=0;oe<=r;oe++){const J=oe/r*d+c,te=Math.cos(J),_e=Math.sin(J);F.x=R*_e,F.y=x*I,F.z=R*te,v.push(F.x,F.y,F.z),_.push(0,I,0),u.x=te*.5+.5,u.y=_e*.5*I+.5,y.push(u.x,u.y),E++}for(let oe=0;oe<r;oe++){const Y=N+oe,J=fe+oe;L===!0?m.push(J,J+1,Y):m.push(J+1,J,Y),q+=3}f.addGroup(g,q,L===!0?1:2),g+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ul extends cn{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const o=[],a=[];c(r),f(n),m(),this.setAttribute("position",new Lt(o,3)),this.setAttribute("normal",new Lt(o.slice(),3)),this.setAttribute("uv",new Lt(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function c(P){const w=new z,L=new z,N=new z;for(let u=0;u<t.length;u+=3)y(t[u+0],w),y(t[u+1],L),y(t[u+2],N),d(w,L,N,P)}function d(P,w,L,N){const u=N+1,F=[];for(let q=0;q<=u;q++){F[q]=[];const R=P.clone().lerp(L,q/u),I=w.clone().lerp(L,q/u),fe=u-q;for(let oe=0;oe<=fe;oe++)oe===0&&q===u?F[q][oe]=R:F[q][oe]=R.clone().lerp(I,oe/fe)}for(let q=0;q<u;q++)for(let R=0;R<2*(u-q)-1;R++){const I=Math.floor(R/2);R%2===0?(_(F[q][I+1]),_(F[q+1][I]),_(F[q][I])):(_(F[q][I+1]),_(F[q+1][I+1]),_(F[q+1][I]))}}function f(P){const w=new z;for(let L=0;L<o.length;L+=3)w.x=o[L+0],w.y=o[L+1],w.z=o[L+2],w.normalize().multiplyScalar(P),o[L+0]=w.x,o[L+1]=w.y,o[L+2]=w.z}function m(){const P=new z;for(let w=0;w<o.length;w+=3){P.x=o[w+0],P.y=o[w+1],P.z=o[w+2];const L=x(P)/2/Math.PI+.5,N=g(P)/Math.PI+.5;a.push(L,1-N)}E(),v()}function v(){for(let P=0;P<a.length;P+=6){const w=a[P+0],L=a[P+2],N=a[P+4],u=Math.max(w,L,N),F=Math.min(w,L,N);u>.9&&F<.1&&(w<.2&&(a[P+0]+=1),L<.2&&(a[P+2]+=1),N<.2&&(a[P+4]+=1))}}function _(P){o.push(P.x,P.y,P.z)}function y(P,w){const L=P*3;w.x=e[L+0],w.y=e[L+1],w.z=e[L+2]}function E(){const P=new z,w=new z,L=new z,N=new z,u=new et,F=new et,q=new et;for(let R=0,I=0;R<o.length;R+=9,I+=6){P.set(o[R+0],o[R+1],o[R+2]),w.set(o[R+3],o[R+4],o[R+5]),L.set(o[R+6],o[R+7],o[R+8]),u.set(a[I+0],a[I+1]),F.set(a[I+2],a[I+3]),q.set(a[I+4],a[I+5]),N.copy(P).add(w).add(L).divideScalar(3);const fe=x(N);b(u,I+0,P,fe),b(F,I+2,w,fe),b(q,I+4,L,fe)}}function b(P,w,L,N){N<0&&P.x===1&&(a[w]=P.x-1),L.x===0&&L.z===0&&(a[w]=N/2/Math.PI+.5)}function x(P){return Math.atan2(P.z,-P.x)}function g(P){return Math.atan2(-P.y,Math.sqrt(P.x*P.x+P.z*P.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ul(e.vertices,e.indices,e.radius,e.details)}}class Vr extends ul{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Vr(e.radius,e.detail)}}class hl extends cn{constructor(e=1,t=32,n=16,r=0,o=Math.PI*2,a=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:o,thetaStart:a,thetaLength:c},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const d=Math.min(a+c,Math.PI);let f=0;const m=[],v=new z,_=new z,y=[],E=[],b=[],x=[];for(let g=0;g<=n;g++){const P=[],w=g/n;let L=0;g===0&&a===0?L=.5/t:g===n&&d===Math.PI&&(L=-.5/t);for(let N=0;N<=t;N++){const u=N/t;v.x=-e*Math.cos(r+u*o)*Math.sin(a+w*c),v.y=e*Math.cos(a+w*c),v.z=e*Math.sin(r+u*o)*Math.sin(a+w*c),E.push(v.x,v.y,v.z),_.copy(v).normalize(),b.push(_.x,_.y,_.z),x.push(u+L,1-w),P.push(f++)}m.push(P)}for(let g=0;g<n;g++)for(let P=0;P<t;P++){const w=m[g][P+1],L=m[g][P],N=m[g+1][P],u=m[g+1][P+1];(g!==0||a>0)&&y.push(w,L,u),(g!==n-1||d<Math.PI)&&y.push(L,N,u)}this.setIndex(y),this.setAttribute("position",new Lt(E,3)),this.setAttribute("normal",new Lt(b,3)),this.setAttribute("uv",new Lt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ar extends cn{constructor(e=1,t=.4,n=12,r=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:o},n=Math.floor(n),r=Math.floor(r);const a=[],c=[],d=[],f=[],m=new z,v=new z,_=new z;for(let y=0;y<=n;y++)for(let E=0;E<=r;E++){const b=E/r*o,x=y/n*Math.PI*2;v.x=(e+t*Math.cos(x))*Math.cos(b),v.y=(e+t*Math.cos(x))*Math.sin(b),v.z=t*Math.sin(x),c.push(v.x,v.y,v.z),m.x=e*Math.cos(b),m.y=e*Math.sin(b),_.subVectors(v,m).normalize(),d.push(_.x,_.y,_.z),f.push(E/r),f.push(y/n)}for(let y=1;y<=n;y++)for(let E=1;E<=r;E++){const b=(r+1)*y+E-1,x=(r+1)*(y-1)+E-1,g=(r+1)*(y-1)+E,P=(r+1)*y+E;a.push(b,x,P),a.push(x,g,P)}this.setIndex(a),this.setAttribute("position",new Lt(c,3)),this.setAttribute("normal",new Lt(d,3)),this.setAttribute("uv",new Lt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ar(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class _0 extends Qr{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Mt(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class nh extends qt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Mt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Ua=new It,nu=new z,iu=new z;class v0{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.map=null,this.mapPass=null,this.matrix=new It,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new al,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new on(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;nu.setFromMatrixPosition(e.matrixWorld),t.position.copy(nu),iu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(iu),t.updateMatrixWorld(),Ua.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ua),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ua)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class x0 extends v0{constructor(){super(new Zu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class y0 extends nh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.shadow=new x0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class M0 extends nh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class S0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ru(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=ru();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ru(){return(typeof performance>"u"?Date:performance).now()}class dl{constructor(e,t,n=0,r=1/0){this.ray=new Fo(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new ol,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Ja(e,this,n,t),n.sort(su),n}intersectObjects(e,t=!0,n=[]){for(let r=0,o=e.length;r<o;r++)Ja(e[r],this,n,t);return n.sort(su),n}}function su(i,e){return i.distance-e.distance}function Ja(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Ja(r[o],e,t,!0)}}class ou{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(sn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class E0 extends th{constructor(e=10,t=10,n=4473924,r=8947848){n=new Mt(n),r=new Mt(r);const o=t/2,a=e/t,c=e/2,d=[],f=[];for(let _=0,y=0,E=-c;_<=t;_++,E+=a){d.push(-c,0,E,c,0,E),d.push(E,0,-c,E,0,c);const b=_===o?n:r;b.toArray(f,y),y+=3,b.toArray(f,y),y+=3,b.toArray(f,y),y+=3,b.toArray(f,y),y+=3}const m=new cn;m.setAttribute("position",new Lt(d,3)),m.setAttribute("color",new Lt(f,3));const v=new Ns({vertexColors:!0,toneMapped:!1});super(m,v),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class b0 extends th{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new cn;r.setAttribute("position",new Lt(t,3)),r.setAttribute("color",new Lt(n,3));const o=new Ns({vertexColors:!0,toneMapped:!1});super(r,o),this.type="AxesHelper"}setColors(e,t,n){const r=new Mt,o=this.geometry.attributes.color.array;return r.set(e),r.toArray(o,0),r.toArray(o,3),r.set(t),r.toArray(o,6),r.toArray(o,9),r.set(n),r.toArray(o,12),r.toArray(o,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:il}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=il);/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.17.0
 * @author George Michael Brower
 * @license MIT
 */class ci{constructor(e,t,n,r,o="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(r),this.$name=document.createElement("div"),this.$name.classList.add("name"),ci.nextNameID=ci.nextNameID||0,this.$name.id="lil-gui-name-"+ ++ci.nextNameID,this.$widget=document.createElement(o),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.innerHTML=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled||(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e)),this}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.object[this.property]=e,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class T0 extends ci{constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function el(i){let e,t;return(e=i.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=i.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=i.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),!!t&&"#"+t}const w0={isPrimitive:!0,match:i=>typeof i=="string",fromHexString:el,toHexString:el},Cs={isPrimitive:!0,match:i=>typeof i=="number",fromHexString:i=>parseInt(i.substring(1),16),toHexString:i=>"#"+i.toString(16).padStart(6,0)},A0={isPrimitive:!1,match:Array.isArray,fromHexString(i,e,t=1){const n=Cs.fromHexString(i);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(255&n)/255*t},toHexString:([i,e,t],n=1)=>Cs.toHexString(i*(n=255/n)<<16^e*n<<8^t*n<<0)},C0={isPrimitive:!1,match:i=>Object(i)===i,fromHexString(i,e,t=1){const n=Cs.fromHexString(i);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(255&n)/255*t},toHexString:({r:i,g:e,b:t},n=1)=>Cs.toHexString(i*(n=255/n)<<16^e*n<<8^t*n<<0)},R0=[w0,Cs,A0,C0];class P0 extends ci{constructor(e,t,n,r){var o;super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=(o=this.initialValue,R0.find(a=>a.match(o))),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const a=el(this.$text.value);a&&this._setValueFromHexString(a)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Na extends ci{constructor(e,t,n){super(e,t,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",r=>{r.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class L0 extends ci{constructor(e,t,n,r,o,a){super(e,t,n,"number"),this._initInput(),this.min(r),this.max(o);const c=a!==void 0;this.step(c?a:this._getImplicitStep(),c),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=100*t+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=m=>{const v=parseFloat(this.$input.value);isNaN(v)||(this._snapClampSetValue(v+m),this.$input.value=this.getValue())};let t,n,r,o,a,c=!1;const d=m=>{if(c){const v=m.clientX-t,_=m.clientY-n;Math.abs(_)>5?(m.preventDefault(),this.$input.blur(),c=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(v)>5&&f()}if(!c){const v=m.clientY-r;a-=v*this._step*this._arrowKeyMultiplier(m),o+a>this._max?a=this._max-o:o+a<this._min&&(a=this._min-o),this._snapClampSetValue(o+a)}r=m.clientY},f=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",d),window.removeEventListener("mouseup",f)};this.$input.addEventListener("input",()=>{let m=parseFloat(this.$input.value);isNaN(m)||(this._stepExplicit&&(m=this._snap(m)),this.setValue(this._clamp(m)))}),this.$input.addEventListener("keydown",m=>{m.code==="Enter"&&this.$input.blur(),m.code==="ArrowUp"&&(m.preventDefault(),e(this._step*this._arrowKeyMultiplier(m))),m.code==="ArrowDown"&&(m.preventDefault(),e(this._step*this._arrowKeyMultiplier(m)*-1))}),this.$input.addEventListener("wheel",m=>{this._inputFocused&&(m.preventDefault(),e(this._step*this._normalizeMouseWheel(m)))},{passive:!1}),this.$input.addEventListener("mousedown",m=>{t=m.clientX,n=r=m.clientY,c=!0,o=this.getValue(),a=0,window.addEventListener("mousemove",d),window.addEventListener("mouseup",f)}),this.$input.addEventListener("focus",()=>{this._inputFocused=!0}),this.$input.addEventListener("blur",()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=_=>{const y=this.$slider.getBoundingClientRect();let E=(b=_,x=y.left,g=y.right,P=this._min,w=this._max,(b-x)/(g-x)*(w-P)+P);var b,x,g,P,w;this._snapClampSetValue(E)},t=_=>{e(_.clientX)},n=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",t),window.removeEventListener("mouseup",n)};let r,o,a=!1;const c=_=>{_.preventDefault(),this._setDraggingStyle(!0),e(_.touches[0].clientX),a=!1},d=_=>{if(a){const y=_.touches[0].clientX-r,E=_.touches[0].clientY-o;Math.abs(y)>Math.abs(E)?c(_):(window.removeEventListener("touchmove",d),window.removeEventListener("touchend",f))}else _.preventDefault(),e(_.touches[0].clientX)},f=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",d),window.removeEventListener("touchend",f)},m=this._callOnFinishChange.bind(this);let v;this.$slider.addEventListener("mousedown",_=>{this._setDraggingStyle(!0),e(_.clientX),window.addEventListener("mousemove",t),window.addEventListener("mouseup",n)}),this.$slider.addEventListener("touchstart",_=>{_.touches.length>1||(this._hasScrollBar?(r=_.touches[0].clientX,o=_.touches[0].clientY,a=!0):c(_),window.addEventListener("touchmove",d,{passive:!1}),window.addEventListener("touchend",f))},{passive:!1}),this.$slider.addEventListener("wheel",_=>{if(Math.abs(_.deltaX)<Math.abs(_.deltaY)&&this._hasScrollBar)return;_.preventDefault();const y=this._normalizeMouseWheel(_)*this._step;this._snapClampSetValue(this.getValue()+y),this.$input.value=this.getValue(),clearTimeout(v),v=setTimeout(m,400)},{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle("lil-gui-"+t,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class D0 extends ci{constructor(e,t,n,r){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(r)?r:Object.values(r),this._names=Array.isArray(r)?r:Object.keys(r),this._names.forEach(o=>{const a=document.createElement("option");a.innerHTML=o,this.$select.appendChild(a)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.innerHTML=t===-1?e:this._names[t],this}}class I0 extends ci{constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",r=>{r.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}let au=!1;class Bo{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:r,title:o="Controls",injectStyles:a=!0,touchStyles:c=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",d=>{d.code!=="Enter"&&d.code!=="Space"||(d.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(o),c&&this.domElement.classList.add("allow-touch-styles"),this.parent)return this.parent.children.push(this),this.parent.folders.push(this),void this.parent.$children.appendChild(this.domElement);this.domElement.classList.add("root"),!au&&a&&(function(d){const f=document.createElement("style");f.innerHTML=d;const m=document.querySelector("head link[rel=stylesheet], head style");m?document.head.insertBefore(f,m):document.head.appendChild(f)}('.lil-gui{--background-color:#1f1f1f;--text-color:#ebebeb;--title-background-color:#111;--title-text-color:#ebebeb;--widget-color:#424242;--hover-color:#4f4f4f;--focus-color:#595959;--number-color:#2cc9ff;--string-color:#a2db3c;--font-size:11px;--input-font-size:11px;--font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;--font-family-mono:Menlo,Monaco,Consolas,"Droid Sans Mono",monospace;--padding:4px;--spacing:4px;--widget-height:20px;--name-width:45%;--slider-knob-width:2px;--slider-input-width:27%;--color-input-width:27%;--slider-input-min-width:45px;--color-input-min-width:45px;--folder-indent:7px;--widget-padding:0 0 0 3px;--widget-border-radius:2px;--checkbox-size:calc(var(--widget-height)*0.75);--scrollbar-width:5px;background-color:var(--background-color);color:var(--text-color);font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-weight:400;line-height:1;text-align:left;touch-action:manipulation;user-select:none;-webkit-user-select:none}.lil-gui,.lil-gui *{box-sizing:border-box;margin:0;padding:0}.lil-gui.root{display:flex;flex-direction:column;width:var(--width,245px)}.lil-gui.root>.title{background:var(--title-background-color);color:var(--title-text-color)}.lil-gui.root>.children{overflow-x:hidden;overflow-y:auto}.lil-gui.root>.children::-webkit-scrollbar{background:var(--background-color);height:var(--scrollbar-width);width:var(--scrollbar-width)}.lil-gui.root>.children::-webkit-scrollbar-thumb{background:var(--focus-color);border-radius:var(--scrollbar-width)}.lil-gui.force-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}.lil-gui.autoPlace{max-height:100%;position:fixed;right:15px;top:0;z-index:1001}.lil-gui .controller{align-items:center;display:flex;margin:var(--spacing) 0;padding:0 var(--padding)}.lil-gui .controller.disabled{opacity:.5}.lil-gui .controller.disabled,.lil-gui .controller.disabled *{pointer-events:none!important}.lil-gui .controller>.name{flex-shrink:0;line-height:var(--widget-height);min-width:var(--name-width);padding-right:var(--spacing);white-space:pre}.lil-gui .controller .widget{align-items:center;display:flex;min-height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.string input{color:var(--string-color)}.lil-gui .controller.boolean .widget{cursor:pointer}.lil-gui .controller.color .display{border-radius:var(--widget-border-radius);height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.color input[type=color]{cursor:pointer;height:100%;opacity:0;width:100%}.lil-gui .controller.color input[type=text]{flex-shrink:0;font-family:var(--font-family-mono);margin-left:var(--spacing);min-width:var(--color-input-min-width);width:var(--color-input-width)}.lil-gui .controller.option select{max-width:100%;opacity:0;position:absolute;width:100%}.lil-gui .controller.option .display{background:var(--widget-color);border-radius:var(--widget-border-radius);height:var(--widget-height);line-height:var(--widget-height);max-width:100%;overflow:hidden;padding-left:.55em;padding-right:1.75em;pointer-events:none;position:relative;word-break:break-all}.lil-gui .controller.option .display.active{background:var(--focus-color)}.lil-gui .controller.option .display:after{bottom:0;content:"↕";font-family:lil-gui;padding-right:.375em;position:absolute;right:0;top:0}.lil-gui .controller.option .widget,.lil-gui .controller.option select{cursor:pointer}.lil-gui .controller.number input{color:var(--number-color)}.lil-gui .controller.number.hasSlider input{flex-shrink:0;margin-left:var(--spacing);min-width:var(--slider-input-min-width);width:var(--slider-input-width)}.lil-gui .controller.number .slider{background-color:var(--widget-color);border-radius:var(--widget-border-radius);cursor:ew-resize;height:var(--widget-height);overflow:hidden;padding-right:var(--slider-knob-width);touch-action:pan-y;width:100%}.lil-gui .controller.number .slider.active{background-color:var(--focus-color)}.lil-gui .controller.number .slider.active .fill{opacity:.95}.lil-gui .controller.number .fill{border-right:var(--slider-knob-width) solid var(--number-color);box-sizing:content-box;height:100%}.lil-gui-dragging .lil-gui{--hover-color:var(--widget-color)}.lil-gui-dragging *{cursor:ew-resize!important}.lil-gui-dragging.lil-gui-vertical *{cursor:ns-resize!important}.lil-gui .title{--title-height:calc(var(--widget-height) + var(--spacing)*1.25);-webkit-tap-highlight-color:transparent;text-decoration-skip:objects;cursor:pointer;font-weight:600;height:var(--title-height);line-height:calc(var(--title-height) - 4px);outline:none;padding:0 var(--padding)}.lil-gui .title:before{content:"▾";display:inline-block;font-family:lil-gui;padding-right:2px}.lil-gui .title:active{background:var(--title-background-color);opacity:.75}.lil-gui.root>.title:focus{text-decoration:none!important}.lil-gui.closed>.title:before{content:"▸"}.lil-gui.closed>.children{opacity:0;transform:translateY(-7px)}.lil-gui.closed:not(.transition)>.children{display:none}.lil-gui.transition>.children{overflow:hidden;pointer-events:none;transition-duration:.3s;transition-property:height,opacity,transform;transition-timing-function:cubic-bezier(.2,.6,.35,1)}.lil-gui .children:empty:before{content:"Empty";display:block;font-style:italic;height:var(--widget-height);line-height:var(--widget-height);margin:var(--spacing) 0;opacity:.5;padding:0 var(--padding)}.lil-gui.root>.children>.lil-gui>.title{border-width:0;border-bottom:1px solid var(--widget-color);border-left:0 solid var(--widget-color);border-right:0 solid var(--widget-color);border-top:1px solid var(--widget-color);transition:border-color .3s}.lil-gui.root>.children>.lil-gui.closed>.title{border-bottom-color:transparent}.lil-gui+.controller{border-top:1px solid var(--widget-color);margin-top:0;padding-top:var(--spacing)}.lil-gui .lil-gui .lil-gui>.title{border:none}.lil-gui .lil-gui .lil-gui>.children{border:none;border-left:2px solid var(--widget-color);margin-left:var(--folder-indent)}.lil-gui .lil-gui .controller{border:none}.lil-gui input{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:0;border-radius:var(--widget-border-radius);color:var(--text-color);font-family:var(--font-family);font-size:var(--input-font-size);height:var(--widget-height);outline:none;width:100%}.lil-gui input:disabled{opacity:1}.lil-gui input[type=number],.lil-gui input[type=text]{padding:var(--widget-padding)}.lil-gui input[type=number]:focus,.lil-gui input[type=text]:focus{background:var(--focus-color)}.lil-gui input::-webkit-inner-spin-button,.lil-gui input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.lil-gui input[type=number]{-moz-appearance:textfield}.lil-gui input[type=checkbox]{appearance:none;-webkit-appearance:none;border-radius:var(--widget-border-radius);cursor:pointer;height:var(--checkbox-size);text-align:center;width:var(--checkbox-size)}.lil-gui input[type=checkbox]:checked:before{content:"✓";font-family:lil-gui;font-size:var(--checkbox-size);line-height:var(--checkbox-size)}.lil-gui button{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:1px solid var(--widget-color);border-radius:var(--widget-border-radius);color:var(--text-color);cursor:pointer;font-family:var(--font-family);font-size:var(--font-size);height:var(--widget-height);line-height:calc(var(--widget-height) - 4px);outline:none;text-align:center;text-transform:none;width:100%}.lil-gui button:active{background:var(--focus-color)}@font-face{font-family:lil-gui;src:url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff")}@media (pointer:coarse){.lil-gui.allow-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}}@media (hover:hover){.lil-gui .controller.color .display:hover:before{border:1px solid #fff9;border-radius:var(--widget-border-radius);bottom:0;content:" ";display:block;left:0;position:absolute;right:0;top:0}.lil-gui .controller.option .display.focus{background:var(--focus-color)}.lil-gui .controller.option .widget:hover .display{background:var(--hover-color)}.lil-gui .controller.number .slider:hover{background-color:var(--hover-color)}body:not(.lil-gui-dragging) .lil-gui .title:hover{background:var(--title-background-color);opacity:.85}.lil-gui .title:focus{text-decoration:underline var(--focus-color)}.lil-gui input:hover{background:var(--hover-color)}.lil-gui input:active{background:var(--focus-color)}.lil-gui input[type=checkbox]:focus{box-shadow:inset 0 0 0 1px var(--focus-color)}.lil-gui button:hover{background:var(--hover-color);border-color:var(--hover-color)}.lil-gui button:focus{border-color:var(--focus-color)}}'),au=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty("--width",r+"px"),this.domElement.addEventListener("keydown",d=>d.stopPropagation()),this.domElement.addEventListener("keyup",d=>d.stopPropagation())}add(e,t,n,r,o){if(Object(n)===n)return new D0(this,e,t,n);const a=e[t];switch(typeof a){case"number":return new L0(this,e,t,n,r,o);case"boolean":return new T0(this,e,t);case"string":return new I0(this,e,t);case"function":return new Na(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,a)}addColor(e,t,n=1){return new P0(this,e,t,n)}addFolder(e){return new Bo({parent:this,title:e})}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof Na||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof Na)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const n=o=>{o.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const r=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=r+"px"})}),this}title(e){return this._title=e,this.$title.innerHTML=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(t=>t.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}const lu={type:"change"},Fa={type:"start"},cu={type:"end"},vo=new Fo,uu=new Ui,U0=Math.cos(70*rf.DEG2RAD);class hu extends _r{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Mr.ROTATE,MIDDLE:Mr.DOLLY,RIGHT:Mr.PAN},this.touches={ONE:Sr.ROTATE,TWO:Sr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return c.phi},this.getAzimuthalAngle=function(){return c.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(H){H.addEventListener("keydown",C),this._domElementKeyEvents=H},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",C),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(lu),n.update(),o=r.NONE},this.update=function(){const H=new z,me=new ln().setFromUnitVectors(e.up,new z(0,1,0)),Ne=me.clone().invert(),Re=new z,Ce=new ln,ke=new z,pt=2*Math.PI;return function(De=null){const ie=n.object.position;H.copy(ie).sub(n.target),H.applyQuaternion(me),c.setFromVector3(H),n.autoRotate&&o===r.NONE&&fe(R(De)),n.enableDamping?(c.theta+=d.theta*n.dampingFactor,c.phi+=d.phi*n.dampingFactor):(c.theta+=d.theta,c.phi+=d.phi);let Me=n.minAzimuthAngle,we=n.maxAzimuthAngle;isFinite(Me)&&isFinite(we)&&(Me<-Math.PI?Me+=pt:Me>Math.PI&&(Me-=pt),we<-Math.PI?we+=pt:we>Math.PI&&(we-=pt),Me<=we?c.theta=Math.max(Me,Math.min(we,c.theta)):c.theta=c.theta>(Me+we)/2?Math.max(Me,c.theta):Math.min(we,c.theta)),c.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,c.phi)),c.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(m,n.dampingFactor):n.target.add(m),n.zoomToCursor&&u||n.object.isOrthographicCamera?c.radius=ve(c.radius):c.radius=ve(c.radius*f),H.setFromSpherical(c),H.applyQuaternion(Ne),ie.copy(n.target).add(H),n.object.lookAt(n.target),n.enableDamping===!0?(d.theta*=1-n.dampingFactor,d.phi*=1-n.dampingFactor,m.multiplyScalar(1-n.dampingFactor)):(d.set(0,0,0),m.set(0,0,0));let mt=!1;if(n.zoomToCursor&&u){let St=null;if(n.object.isPerspectiveCamera){const bt=H.length();St=ve(bt*f);const nn=bt-St;n.object.position.addScaledVector(L,nn),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const bt=new z(N.x,N.y,0);bt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/f)),n.object.updateProjectionMatrix(),mt=!0;const nn=new z(N.x,N.y,0);nn.unproject(n.object),n.object.position.sub(nn).add(bt),n.object.updateMatrixWorld(),St=H.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;St!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(St).add(n.object.position):(vo.origin.copy(n.object.position),vo.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(vo.direction))<U0?e.lookAt(n.target):(uu.setFromNormalAndCoplanarPoint(n.object.up,n.target),vo.intersectPlane(uu,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/f)),n.object.updateProjectionMatrix(),mt=!0);return f=1,u=!1,mt||Re.distanceToSquared(n.object.position)>a||8*(1-Ce.dot(n.object.quaternion))>a||ke.distanceToSquared(n.target)>0?(n.dispatchEvent(lu),Re.copy(n.object.position),Ce.copy(n.object.quaternion),ke.copy(n.target),mt=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Ee),n.domElement.removeEventListener("pointerdown",dt),n.domElement.removeEventListener("pointercancel",xt),n.domElement.removeEventListener("wheel",U),n.domElement.removeEventListener("pointermove",ot),n.domElement.removeEventListener("pointerup",xt),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",C),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let o=r.NONE;const a=1e-6,c=new ou,d=new ou;let f=1;const m=new z,v=new et,_=new et,y=new et,E=new et,b=new et,x=new et,g=new et,P=new et,w=new et,L=new z,N=new et;let u=!1;const F=[],q={};function R(H){return H!==null?2*Math.PI/60*n.autoRotateSpeed*H:2*Math.PI/60/60*n.autoRotateSpeed}function I(){return Math.pow(.95,n.zoomSpeed)}function fe(H){d.theta-=H}function oe(H){d.phi-=H}const Y=function(){const H=new z;return function(Ne,Re){H.setFromMatrixColumn(Re,0),H.multiplyScalar(-Ne),m.add(H)}}(),J=function(){const H=new z;return function(Ne,Re){n.screenSpacePanning===!0?H.setFromMatrixColumn(Re,1):(H.setFromMatrixColumn(Re,0),H.crossVectors(n.object.up,H)),H.multiplyScalar(Ne),m.add(H)}}(),te=function(){const H=new z;return function(Ne,Re){const Ce=n.domElement;if(n.object.isPerspectiveCamera){const ke=n.object.position;H.copy(ke).sub(n.target);let pt=H.length();pt*=Math.tan(n.object.fov/2*Math.PI/180),Y(2*Ne*pt/Ce.clientHeight,n.object.matrix),J(2*Re*pt/Ce.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(Y(Ne*(n.object.right-n.object.left)/n.object.zoom/Ce.clientWidth,n.object.matrix),J(Re*(n.object.top-n.object.bottom)/n.object.zoom/Ce.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function _e(H){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?f/=H:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function le(H){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?f*=H:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function de(H){if(!n.zoomToCursor)return;u=!0;const me=n.domElement.getBoundingClientRect(),Ne=H.clientX-me.left,Re=H.clientY-me.top,Ce=me.width,ke=me.height;N.x=Ne/Ce*2-1,N.y=-(Re/ke)*2+1,L.set(N.x,N.y,1).unproject(n.object).sub(n.object.position).normalize()}function ve(H){return Math.max(n.minDistance,Math.min(n.maxDistance,H))}function ge(H){v.set(H.clientX,H.clientY)}function $(H){de(H),g.set(H.clientX,H.clientY)}function se(H){E.set(H.clientX,H.clientY)}function Pe(H){_.set(H.clientX,H.clientY),y.subVectors(_,v).multiplyScalar(n.rotateSpeed);const me=n.domElement;fe(2*Math.PI*y.x/me.clientHeight),oe(2*Math.PI*y.y/me.clientHeight),v.copy(_),n.update()}function Ie(H){P.set(H.clientX,H.clientY),w.subVectors(P,g),w.y>0?_e(I()):w.y<0&&le(I()),g.copy(P),n.update()}function Be(H){b.set(H.clientX,H.clientY),x.subVectors(b,E).multiplyScalar(n.panSpeed),te(x.x,x.y),E.copy(b),n.update()}function Ye(H){de(H),H.deltaY<0?le(I()):H.deltaY>0&&_e(I()),n.update()}function nt(H){let me=!1;switch(H.code){case n.keys.UP:H.ctrlKey||H.metaKey||H.shiftKey?oe(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):te(0,n.keyPanSpeed),me=!0;break;case n.keys.BOTTOM:H.ctrlKey||H.metaKey||H.shiftKey?oe(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):te(0,-n.keyPanSpeed),me=!0;break;case n.keys.LEFT:H.ctrlKey||H.metaKey||H.shiftKey?fe(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):te(n.keyPanSpeed,0),me=!0;break;case n.keys.RIGHT:H.ctrlKey||H.metaKey||H.shiftKey?fe(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):te(-n.keyPanSpeed,0),me=!0;break}me&&(H.preventDefault(),n.update())}function Xe(){if(F.length===1)v.set(F[0].pageX,F[0].pageY);else{const H=.5*(F[0].pageX+F[1].pageX),me=.5*(F[0].pageY+F[1].pageY);v.set(H,me)}}function lt(){if(F.length===1)E.set(F[0].pageX,F[0].pageY);else{const H=.5*(F[0].pageX+F[1].pageX),me=.5*(F[0].pageY+F[1].pageY);E.set(H,me)}}function Zt(){const H=F[0].pageX-F[1].pageX,me=F[0].pageY-F[1].pageY,Ne=Math.sqrt(H*H+me*me);g.set(0,Ne)}function ct(){n.enableZoom&&Zt(),n.enablePan&&lt()}function Z(){n.enableZoom&&Zt(),n.enableRotate&&Xe()}function Et(H){if(F.length==1)_.set(H.pageX,H.pageY);else{const Ne=re(H),Re=.5*(H.pageX+Ne.x),Ce=.5*(H.pageY+Ne.y);_.set(Re,Ce)}y.subVectors(_,v).multiplyScalar(n.rotateSpeed);const me=n.domElement;fe(2*Math.PI*y.x/me.clientHeight),oe(2*Math.PI*y.y/me.clientHeight),v.copy(_)}function We(H){if(F.length===1)b.set(H.pageX,H.pageY);else{const me=re(H),Ne=.5*(H.pageX+me.x),Re=.5*(H.pageY+me.y);b.set(Ne,Re)}x.subVectors(b,E).multiplyScalar(n.panSpeed),te(x.x,x.y),E.copy(b)}function tt(H){const me=re(H),Ne=H.pageX-me.x,Re=H.pageY-me.y,Ce=Math.sqrt(Ne*Ne+Re*Re);P.set(0,Ce),w.set(0,Math.pow(P.y/g.y,n.zoomSpeed)),_e(w.y),g.copy(P)}function Se(H){n.enableZoom&&tt(H),n.enablePan&&We(H)}function ht(H){n.enableZoom&&tt(H),n.enableRotate&&Et(H)}function dt(H){n.enabled!==!1&&(F.length===0&&(n.domElement.setPointerCapture(H.pointerId),n.domElement.addEventListener("pointermove",ot),n.domElement.addEventListener("pointerup",xt)),Te(H),H.pointerType==="touch"?Q(H):Vt(H))}function ot(H){n.enabled!==!1&&(H.pointerType==="touch"?be(H):Xt(H))}function xt(H){He(H),F.length===0&&(n.domElement.releasePointerCapture(H.pointerId),n.domElement.removeEventListener("pointermove",ot),n.domElement.removeEventListener("pointerup",xt)),n.dispatchEvent(cu),o=r.NONE}function Vt(H){let me;switch(H.button){case 0:me=n.mouseButtons.LEFT;break;case 1:me=n.mouseButtons.MIDDLE;break;case 2:me=n.mouseButtons.RIGHT;break;default:me=-1}switch(me){case Mr.DOLLY:if(n.enableZoom===!1)return;$(H),o=r.DOLLY;break;case Mr.ROTATE:if(H.ctrlKey||H.metaKey||H.shiftKey){if(n.enablePan===!1)return;se(H),o=r.PAN}else{if(n.enableRotate===!1)return;ge(H),o=r.ROTATE}break;case Mr.PAN:if(H.ctrlKey||H.metaKey||H.shiftKey){if(n.enableRotate===!1)return;ge(H),o=r.ROTATE}else{if(n.enablePan===!1)return;se(H),o=r.PAN}break;default:o=r.NONE}o!==r.NONE&&n.dispatchEvent(Fa)}function Xt(H){switch(o){case r.ROTATE:if(n.enableRotate===!1)return;Pe(H);break;case r.DOLLY:if(n.enableZoom===!1)return;Ie(H);break;case r.PAN:if(n.enablePan===!1)return;Be(H);break}}function U(H){n.enabled===!1||n.enableZoom===!1||o!==r.NONE||(H.preventDefault(),n.dispatchEvent(Fa),Ye(H),n.dispatchEvent(cu))}function C(H){n.enabled===!1||n.enablePan===!1||nt(H)}function Q(H){switch(Ae(H),F.length){case 1:switch(n.touches.ONE){case Sr.ROTATE:if(n.enableRotate===!1)return;Xe(),o=r.TOUCH_ROTATE;break;case Sr.PAN:if(n.enablePan===!1)return;lt(),o=r.TOUCH_PAN;break;default:o=r.NONE}break;case 2:switch(n.touches.TWO){case Sr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ct(),o=r.TOUCH_DOLLY_PAN;break;case Sr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Z(),o=r.TOUCH_DOLLY_ROTATE;break;default:o=r.NONE}break;default:o=r.NONE}o!==r.NONE&&n.dispatchEvent(Fa)}function be(H){switch(Ae(H),o){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;Et(H),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;We(H),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Se(H),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ht(H),n.update();break;default:o=r.NONE}}function Ee(H){n.enabled!==!1&&H.preventDefault()}function Te(H){F.push(H)}function He(H){delete q[H.pointerId];for(let me=0;me<F.length;me++)if(F[me].pointerId==H.pointerId){F.splice(me,1);return}}function Ae(H){let me=q[H.pointerId];me===void 0&&(me=new et,q[H.pointerId]=me),me.set(H.pageX,H.pageY)}function re(H){const me=H.pointerId===F[0].pointerId?F[1]:F[0];return q[me.pointerId]}n.domElement.addEventListener("contextmenu",Ee),n.domElement.addEventListener("pointerdown",dt),n.domElement.addEventListener("pointercancel",xt),n.domElement.addEventListener("wheel",U,{passive:!1}),this.update()}}const nr=new dl,bn=new z,Ii=new z,Ot=new ln,du={X:new z(1,0,0),Y:new z(0,1,0),Z:new z(0,0,1)},Oa={type:"change"},fu={type:"mouseDown"},pu={type:"mouseUp",mode:null},mu={type:"objectChange"};class gu extends qt{constructor(e,t){super(),t===void 0&&(console.warn('THREE.TransformControls: The second parameter "domElement" is now mandatory.'),t=document),this.isTransformControls=!0,this.visible=!1,this.domElement=t,this.domElement.style.touchAction="none";const n=new H0;this._gizmo=n,this.add(n);const r=new k0;this._plane=r,this.add(r);const o=this;function a(P,w){let L=w;Object.defineProperty(o,P,{get:function(){return L!==void 0?L:w},set:function(N){L!==N&&(L=N,r[P]=N,n[P]=N,o.dispatchEvent({type:P+"-changed",value:N}),o.dispatchEvent(Oa))}}),o[P]=w,r[P]=w,n[P]=w}a("camera",e),a("object",void 0),a("enabled",!0),a("axis",null),a("mode","translate"),a("translationSnap",null),a("rotationSnap",null),a("scaleSnap",null),a("space","world"),a("size",1),a("dragging",!1),a("showX",!0),a("showY",!0),a("showZ",!0);const c=new z,d=new z,f=new ln,m=new ln,v=new z,_=new ln,y=new z,E=new z,b=new z,x=0,g=new z;a("worldPosition",c),a("worldPositionStart",d),a("worldQuaternion",f),a("worldQuaternionStart",m),a("cameraPosition",v),a("cameraQuaternion",_),a("pointStart",y),a("pointEnd",E),a("rotationAxis",b),a("rotationAngle",x),a("eye",g),this._offset=new z,this._startNorm=new z,this._endNorm=new z,this._cameraScale=new z,this._parentPosition=new z,this._parentQuaternion=new ln,this._parentQuaternionInv=new ln,this._parentScale=new z,this._worldScaleStart=new z,this._worldQuaternionInv=new ln,this._worldScale=new z,this._positionStart=new z,this._quaternionStart=new ln,this._scaleStart=new z,this._getPointer=N0.bind(this),this._onPointerDown=O0.bind(this),this._onPointerHover=F0.bind(this),this._onPointerMove=B0.bind(this),this._onPointerUp=z0.bind(this),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp)}updateMatrixWorld(){this.object!==void 0&&(this.object.updateMatrixWorld(),this.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):this.object.parent.matrixWorld.decompose(this._parentPosition,this._parentQuaternion,this._parentScale),this.object.matrixWorld.decompose(this.worldPosition,this.worldQuaternion,this._worldScale),this._parentQuaternionInv.copy(this._parentQuaternion).invert(),this._worldQuaternionInv.copy(this.worldQuaternion).invert()),this.camera.updateMatrixWorld(),this.camera.matrixWorld.decompose(this.cameraPosition,this.cameraQuaternion,this._cameraScale),this.camera.isOrthographicCamera?this.camera.getWorldDirection(this.eye).negate():this.eye.copy(this.cameraPosition).sub(this.worldPosition).normalize(),super.updateMatrixWorld(this)}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;nr.setFromCamera(e,this.camera);const t=Ba(this._gizmo.picker[this.mode],nr);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e.button!==0)&&this.axis!==null){nr.setFromCamera(e,this.camera);const t=Ba(this._plane,nr,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,fu.mode=this.mode,this.dispatchEvent(fu)}}pointerMove(e){const t=this.axis,n=this.mode,r=this.object;let o=this.space;if(n==="scale"?o="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(o="world"),r===void 0||t===null||this.dragging===!1||e.button!==-1)return;nr.setFromCamera(e,this.camera);const a=Ba(this._plane,nr,!0);if(a){if(this.pointEnd.copy(a.point).sub(this.worldPositionStart),n==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),o==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),o==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),r.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(o==="local"&&(r.position.applyQuaternion(Ot.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(r.position.x=Math.round(r.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(r.position.y=Math.round(r.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(r.position.z=Math.round(r.position.z/this.translationSnap)*this.translationSnap),r.position.applyQuaternion(this._quaternionStart)),o==="world"&&(r.parent&&r.position.add(bn.setFromMatrixPosition(r.parent.matrixWorld)),t.search("X")!==-1&&(r.position.x=Math.round(r.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(r.position.y=Math.round(r.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(r.position.z=Math.round(r.position.z/this.translationSnap)*this.translationSnap),r.parent&&r.position.sub(bn.setFromMatrixPosition(r.parent.matrixWorld))));else if(n==="scale"){if(t.search("XYZ")!==-1){let c=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(c*=-1),Ii.set(c,c,c)}else bn.copy(this.pointStart),Ii.copy(this.pointEnd),bn.applyQuaternion(this._worldQuaternionInv),Ii.applyQuaternion(this._worldQuaternionInv),Ii.divide(bn),t.search("X")===-1&&(Ii.x=1),t.search("Y")===-1&&(Ii.y=1),t.search("Z")===-1&&(Ii.z=1);r.scale.copy(this._scaleStart).multiply(Ii),this.scaleSnap&&(t.search("X")!==-1&&(r.scale.x=Math.round(r.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(r.scale.y=Math.round(r.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(r.scale.z=Math.round(r.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const c=20/this.worldPosition.distanceTo(bn.setFromMatrixPosition(this.camera.matrixWorld));t==="E"?(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1):t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(bn.copy(this.rotationAxis).cross(this.eye))*c):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(du[t]),bn.copy(du[t]),o==="local"&&bn.applyQuaternion(this.worldQuaternion),this.rotationAngle=this._offset.dot(bn.cross(this.eye).normalize())*c),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),o==="local"&&t!=="E"&&t!=="XYZE"?(r.quaternion.copy(this._quaternionStart),r.quaternion.multiply(Ot.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),r.quaternion.copy(Ot.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),r.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(Oa),this.dispatchEvent(mu)}}pointerUp(e){e.button===0&&(this.dragging&&this.axis!==null&&(pu.mode=this.mode,this.dispatchEvent(pu)),this.dragging=!1,this.axis=null)}dispose(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}attach(e){return this.object=e,this.visible=!0,this}detach(){return this.object=void 0,this.visible=!1,this.axis=null,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(Oa),this.dispatchEvent(mu),this.pointStart.copy(this.pointEnd))}getRaycaster(){return nr}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}}function N0(i){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:i.button};{const e=this.domElement.getBoundingClientRect();return{x:(i.clientX-e.left)/e.width*2-1,y:-(i.clientY-e.top)/e.height*2+1,button:i.button}}}function F0(i){if(this.enabled)switch(i.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(i));break}}function O0(i){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(i)),this.pointerDown(this._getPointer(i)))}function B0(i){this.enabled&&this.pointerMove(this._getPointer(i))}function z0(i){this.enabled&&(this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(i)))}function Ba(i,e,t){const n=e.intersectObject(i,!0);for(let r=0;r<n.length;r++)if(n[r].object.visible||t)return n[r];return!1}const xo=new Is,Pt=new z(0,1,0),_u=new z(0,0,0),vu=new It,yo=new ln,To=new ln,ii=new z,xu=new It,xs=new z(1,0,0),rr=new z(0,1,0),ys=new z(0,0,1),Mo=new z,ms=new z,gs=new z;class H0 extends qt{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const e=new vr({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new Ns({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=e.clone();n.opacity=.15;const r=t.clone();r.opacity=.5;const o=e.clone();o.color.setHex(16711680);const a=e.clone();a.color.setHex(65280);const c=e.clone();c.color.setHex(255);const d=e.clone();d.color.setHex(16711680),d.opacity=.5;const f=e.clone();f.color.setHex(65280),f.opacity=.5;const m=e.clone();m.color.setHex(255),m.opacity=.5;const v=e.clone();v.opacity=.25;const _=e.clone();_.color.setHex(16776960),_.opacity=.25,e.clone().color.setHex(16776960);const E=e.clone();E.color.setHex(7895160);const b=new fn(0,.04,.1,12);b.translate(0,.05,0);const x=new Gt(.08,.08,.08);x.translate(0,.04,0);const g=new cn;g.setAttribute("position",new Lt([0,0,0,1,0,0],3));const P=new fn(.0075,.0075,.5,3);P.translate(0,.25,0);function w(te,_e){const le=new ar(te,.0075,3,64,_e*Math.PI*2);return le.rotateY(Math.PI/2),le.rotateX(Math.PI/2),le}function L(){const te=new cn;return te.setAttribute("position",new Lt([0,0,0,1,1,1],3)),te}const N={X:[[new Oe(b,o),[.5,0,0],[0,0,-Math.PI/2]],[new Oe(b,o),[-.5,0,0],[0,0,Math.PI/2]],[new Oe(P,o),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new Oe(b,a),[0,.5,0]],[new Oe(b,a),[0,-.5,0],[Math.PI,0,0]],[new Oe(P,a)]],Z:[[new Oe(b,c),[0,0,.5],[Math.PI/2,0,0]],[new Oe(b,c),[0,0,-.5],[-Math.PI/2,0,0]],[new Oe(P,c),null,[Math.PI/2,0,0]]],XYZ:[[new Oe(new Vr(.1,0),v.clone()),[0,0,0]]],XY:[[new Oe(new Gt(.15,.15,.01),m.clone()),[.15,.15,0]]],YZ:[[new Oe(new Gt(.15,.15,.01),d.clone()),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Oe(new Gt(.15,.15,.01),f.clone()),[.15,0,.15],[-Math.PI/2,0,0]]]},u={X:[[new Oe(new fn(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new Oe(new fn(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new Oe(new fn(.2,0,.6,4),n),[0,.3,0]],[new Oe(new fn(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new Oe(new fn(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new Oe(new fn(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new Oe(new Vr(.2,0),n)]],XY:[[new Oe(new Gt(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new Oe(new Gt(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Oe(new Gt(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},F={START:[[new Oe(new Vr(.01,2),r),null,null,null,"helper"]],END:[[new Oe(new Vr(.01,2),r),null,null,null,"helper"]],DELTA:[[new ri(L(),r),null,null,null,"helper"]],X:[[new ri(g,r.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new ri(g,r.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new ri(g,r.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},q={XYZE:[[new Oe(w(.5,1),E),null,[0,Math.PI/2,0]]],X:[[new Oe(w(.5,.5),o)]],Y:[[new Oe(w(.5,.5),a),null,[0,0,-Math.PI/2]]],Z:[[new Oe(w(.5,.5),c),null,[0,Math.PI/2,0]]],E:[[new Oe(w(.75,1),_),null,[0,Math.PI/2,0]]]},R={AXIS:[[new ri(g,r.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]]},I={XYZE:[[new Oe(new hl(.25,10,8),n)]],X:[[new Oe(new ar(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new Oe(new ar(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new Oe(new ar(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new Oe(new ar(.75,.1,2,24),n)]]},fe={X:[[new Oe(x,o),[.5,0,0],[0,0,-Math.PI/2]],[new Oe(P,o),[0,0,0],[0,0,-Math.PI/2]],[new Oe(x,o),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new Oe(x,a),[0,.5,0]],[new Oe(P,a)],[new Oe(x,a),[0,-.5,0],[0,0,Math.PI]]],Z:[[new Oe(x,c),[0,0,.5],[Math.PI/2,0,0]],[new Oe(P,c),[0,0,0],[Math.PI/2,0,0]],[new Oe(x,c),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new Oe(new Gt(.15,.15,.01),m),[.15,.15,0]]],YZ:[[new Oe(new Gt(.15,.15,.01),d),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Oe(new Gt(.15,.15,.01),f),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new Oe(new Gt(.1,.1,.1),v.clone())]]},oe={X:[[new Oe(new fn(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new Oe(new fn(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new Oe(new fn(.2,0,.6,4),n),[0,.3,0]],[new Oe(new fn(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new Oe(new fn(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new Oe(new fn(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new Oe(new Gt(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new Oe(new Gt(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Oe(new Gt(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new Oe(new Gt(.2,.2,.2),n),[0,0,0]]]},Y={X:[[new ri(g,r.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new ri(g,r.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new ri(g,r.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function J(te){const _e=new qt;for(const le in te)for(let de=te[le].length;de--;){const ve=te[le][de][0].clone(),ge=te[le][de][1],$=te[le][de][2],se=te[le][de][3],Pe=te[le][de][4];ve.name=le,ve.tag=Pe,ge&&ve.position.set(ge[0],ge[1],ge[2]),$&&ve.rotation.set($[0],$[1],$[2]),se&&ve.scale.set(se[0],se[1],se[2]),ve.updateMatrix();const Ie=ve.geometry.clone();Ie.applyMatrix4(ve.matrix),ve.geometry=Ie,ve.renderOrder=1/0,ve.position.set(0,0,0),ve.rotation.set(0,0,0),ve.scale.set(1,1,1),_e.add(ve)}return _e}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=J(N)),this.add(this.gizmo.rotate=J(q)),this.add(this.gizmo.scale=J(fe)),this.add(this.picker.translate=J(u)),this.add(this.picker.rotate=J(I)),this.add(this.picker.scale=J(oe)),this.add(this.helper.translate=J(F)),this.add(this.helper.rotate=J(R)),this.add(this.helper.scale=J(Y)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){const n=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:To;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let r=[];r=r.concat(this.picker[this.mode].children),r=r.concat(this.gizmo[this.mode].children),r=r.concat(this.helper[this.mode].children);for(let o=0;o<r.length;o++){const a=r[o];a.visible=!0,a.rotation.set(0,0,0),a.position.copy(this.worldPosition);let c;if(this.camera.isOrthographicCamera?c=(this.camera.top-this.camera.bottom)/this.camera.zoom:c=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),a.scale.set(1,1,1).multiplyScalar(c*this.size/4),a.tag==="helper"){a.visible=!1,a.name==="AXIS"?(a.visible=!!this.axis,this.axis==="X"&&(Ot.setFromEuler(xo.set(0,0,0)),a.quaternion.copy(n).multiply(Ot),Math.abs(Pt.copy(xs).applyQuaternion(n).dot(this.eye))>.9&&(a.visible=!1)),this.axis==="Y"&&(Ot.setFromEuler(xo.set(0,0,Math.PI/2)),a.quaternion.copy(n).multiply(Ot),Math.abs(Pt.copy(rr).applyQuaternion(n).dot(this.eye))>.9&&(a.visible=!1)),this.axis==="Z"&&(Ot.setFromEuler(xo.set(0,Math.PI/2,0)),a.quaternion.copy(n).multiply(Ot),Math.abs(Pt.copy(ys).applyQuaternion(n).dot(this.eye))>.9&&(a.visible=!1)),this.axis==="XYZE"&&(Ot.setFromEuler(xo.set(0,Math.PI/2,0)),Pt.copy(this.rotationAxis),a.quaternion.setFromRotationMatrix(vu.lookAt(_u,Pt,rr)),a.quaternion.multiply(Ot),a.visible=this.dragging),this.axis==="E"&&(a.visible=!1)):a.name==="START"?(a.position.copy(this.worldPositionStart),a.visible=this.dragging):a.name==="END"?(a.position.copy(this.worldPosition),a.visible=this.dragging):a.name==="DELTA"?(a.position.copy(this.worldPositionStart),a.quaternion.copy(this.worldQuaternionStart),bn.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),bn.applyQuaternion(this.worldQuaternionStart.clone().invert()),a.scale.copy(bn),a.visible=this.dragging):(a.quaternion.copy(n),this.dragging?a.position.copy(this.worldPositionStart):a.position.copy(this.worldPosition),this.axis&&(a.visible=this.axis.search(a.name)!==-1));continue}a.quaternion.copy(n),this.mode==="translate"||this.mode==="scale"?(a.name==="X"&&Math.abs(Pt.copy(xs).applyQuaternion(n).dot(this.eye))>.99&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="Y"&&Math.abs(Pt.copy(rr).applyQuaternion(n).dot(this.eye))>.99&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="Z"&&Math.abs(Pt.copy(ys).applyQuaternion(n).dot(this.eye))>.99&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="XY"&&Math.abs(Pt.copy(ys).applyQuaternion(n).dot(this.eye))<.2&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="YZ"&&Math.abs(Pt.copy(xs).applyQuaternion(n).dot(this.eye))<.2&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="XZ"&&Math.abs(Pt.copy(rr).applyQuaternion(n).dot(this.eye))<.2&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1)):this.mode==="rotate"&&(yo.copy(n),Pt.copy(this.eye).applyQuaternion(Ot.copy(n).invert()),a.name.search("E")!==-1&&a.quaternion.setFromRotationMatrix(vu.lookAt(this.eye,_u,rr)),a.name==="X"&&(Ot.setFromAxisAngle(xs,Math.atan2(-Pt.y,Pt.z)),Ot.multiplyQuaternions(yo,Ot),a.quaternion.copy(Ot)),a.name==="Y"&&(Ot.setFromAxisAngle(rr,Math.atan2(Pt.x,Pt.z)),Ot.multiplyQuaternions(yo,Ot),a.quaternion.copy(Ot)),a.name==="Z"&&(Ot.setFromAxisAngle(ys,Math.atan2(Pt.y,Pt.x)),Ot.multiplyQuaternions(yo,Ot),a.quaternion.copy(Ot))),a.visible=a.visible&&(a.name.indexOf("X")===-1||this.showX),a.visible=a.visible&&(a.name.indexOf("Y")===-1||this.showY),a.visible=a.visible&&(a.name.indexOf("Z")===-1||this.showZ),a.visible=a.visible&&(a.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),a.material._color=a.material._color||a.material.color.clone(),a.material._opacity=a.material._opacity||a.material.opacity,a.material.color.copy(a.material._color),a.material.opacity=a.material._opacity,this.enabled&&this.axis&&(a.name===this.axis||this.axis.split("").some(function(d){return a.name===d}))&&(a.material.color.setHex(16776960),a.material.opacity=1)}super.updateMatrixWorld(e)}}class k0 extends Oe{constructor(){super(new Us(1e5,1e5,2,2),new vr({visible:!1,wireframe:!0,side:ai,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),Mo.copy(xs).applyQuaternion(t==="local"?this.worldQuaternion:To),ms.copy(rr).applyQuaternion(t==="local"?this.worldQuaternion:To),gs.copy(ys).applyQuaternion(t==="local"?this.worldQuaternion:To),Pt.copy(ms),this.mode){case"translate":case"scale":switch(this.axis){case"X":Pt.copy(this.eye).cross(Mo),ii.copy(Mo).cross(Pt);break;case"Y":Pt.copy(this.eye).cross(ms),ii.copy(ms).cross(Pt);break;case"Z":Pt.copy(this.eye).cross(gs),ii.copy(gs).cross(Pt);break;case"XY":ii.copy(gs);break;case"YZ":ii.copy(Mo);break;case"XZ":Pt.copy(gs),ii.copy(ms);break;case"XYZ":case"E":ii.set(0,0,0);break}break;case"rotate":default:ii.set(0,0,0)}ii.length()===0?this.quaternion.copy(this.cameraQuaternion):(xu.lookAt(bn.set(0,0,0),ii,Pt),this.quaternion.setFromRotationMatrix(xu)),super.updateMatrixWorld(e)}}var bs=function(){var i=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(m){m.preventDefault(),n(++i%e.children.length)},!1);function t(m){return e.appendChild(m.dom),m}function n(m){for(var v=0;v<e.children.length;v++)e.children[v].style.display=v===m?"block":"none";i=m}var r=(performance||Date).now(),o=r,a=0,c=t(new bs.Panel("FPS","#0ff","#002")),d=t(new bs.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var f=t(new bs.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:e,addPanel:t,showPanel:n,begin:function(){r=(performance||Date).now()},end:function(){a++;var m=(performance||Date).now();if(d.update(m-r,200),m>=o+1e3&&(c.update(a*1e3/(m-o),100),o=m,a=0,f)){var v=performance.memory;f.update(v.usedJSHeapSize/1048576,v.jsHeapSizeLimit/1048576)}return m},update:function(){r=this.end()},domElement:e,setMode:n}};bs.Panel=function(i,e,t){var n=1/0,r=0,o=Math.round,a=o(window.devicePixelRatio||1),c=80*a,d=48*a,f=3*a,m=2*a,v=3*a,_=15*a,y=74*a,E=30*a,b=document.createElement("canvas");b.width=c,b.height=d,b.style.cssText="width:80px;height:48px";var x=b.getContext("2d");return x.font="bold "+9*a+"px Helvetica,Arial,sans-serif",x.textBaseline="top",x.fillStyle=t,x.fillRect(0,0,c,d),x.fillStyle=e,x.fillText(i,f,m),x.fillRect(v,_,y,E),x.fillStyle=t,x.globalAlpha=.9,x.fillRect(v,_,y,E),{dom:b,update:function(g,P){n=Math.min(n,g),r=Math.max(r,g),x.fillStyle=t,x.globalAlpha=1,x.fillRect(0,0,c,_),x.fillStyle=e,x.fillText(o(g)+" "+i+" ("+o(n)+"-"+o(r)+")",f,m),x.drawImage(b,v+a,_,y-a,E,v,_,y-a,E),x.fillRect(v+y-a,_,a,E),x.fillStyle=t,x.globalAlpha=.9,x.fillRect(v+y-a,_,a,o((1-g/P)*E))}}};const G0=bs;class ih extends qt{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new et(.5,.5),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof Element&&t.element.parentNode!==null&&t.element.parentNode.removeChild(t.element)})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this}}const zr=new z,yu=new It,Mu=new It,Su=new z,Eu=new z;class V0{constructor(e={}){const t=this;let n,r,o,a;const c={objects:new WeakMap},d=e.element!==void 0?e.element:document.createElement("div");d.style.overflow="hidden",this.domElement=d,this.getSize=function(){return{width:n,height:r}},this.render=function(y,E){y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),E.parent===null&&E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),yu.copy(E.matrixWorldInverse),Mu.multiplyMatrices(E.projectionMatrix,yu),f(y,y,E),_(y)},this.setSize=function(y,E){n=y,r=E,o=n/2,a=r/2,d.style.width=y+"px",d.style.height=E+"px"};function f(y,E,b){if(y.isCSS2DObject){zr.setFromMatrixPosition(y.matrixWorld),zr.applyMatrix4(Mu);const x=y.visible===!0&&zr.z>=-1&&zr.z<=1&&y.layers.test(b.layers)===!0;if(y.element.style.display=x===!0?"":"none",x===!0){y.onBeforeRender(t,E,b);const P=y.element;P.style.transform="translate("+-100*y.center.x+"%,"+-100*y.center.y+"%)translate("+(zr.x*o+o)+"px,"+(-zr.y*a+a)+"px)",P.parentNode!==d&&d.appendChild(P),y.onAfterRender(t,E,b)}const g={distanceToCameraSquared:m(b,y)};c.objects.set(y,g)}for(let x=0,g=y.children.length;x<g;x++)f(y.children[x],E,b)}function m(y,E){return Su.setFromMatrixPosition(y.matrixWorld),Eu.setFromMatrixPosition(E.matrixWorld),Su.distanceToSquared(Eu)}function v(y){const E=[];return y.traverse(function(b){b.isCSS2DObject&&E.push(b)}),E}function _(y){const E=v(y).sort(function(x,g){if(x.renderOrder!==g.renderOrder)return g.renderOrder-x.renderOrder;const P=c.objects.get(x).distanceToCameraSquared,w=c.objects.get(g).distanceToCameraSquared;return P-w}),b=E.length;for(let x=0,g=E.length;x<g;x++)E[x].element.style.zIndex=b-x}}}var W0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},X0={exports:{}};/*!
 * jQuery JavaScript Library v3.6.4
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-03-08T15:28Z
 */(function(i){(function(e,t){i.exports=e.document?t(e,!0):function(n){if(!n.document)throw new Error("jQuery requires a window with a document");return t(n)}})(typeof window<"u"?window:W0,function(e,t){var n=[],r=Object.getPrototypeOf,o=n.slice,a=n.flat?function(s){return n.flat.call(s)}:function(s){return n.concat.apply([],s)},c=n.push,d=n.indexOf,f={},m=f.toString,v=f.hasOwnProperty,_=v.toString,y=_.call(Object),E={},b=function(l){return typeof l=="function"&&typeof l.nodeType!="number"&&typeof l.item!="function"},x=function(l){return l!=null&&l===l.window},g=e.document,P={type:!0,src:!0,nonce:!0,noModule:!0};function w(s,l,h){h=h||g;var p,M,S=h.createElement("script");if(S.text=s,l)for(p in P)M=l[p]||l.getAttribute&&l.getAttribute(p),M&&S.setAttribute(p,M);h.head.appendChild(S).parentNode.removeChild(S)}function L(s){return s==null?s+"":typeof s=="object"||typeof s=="function"?f[m.call(s)]||"object":typeof s}var N="3.6.4",u=function(s,l){return new u.fn.init(s,l)};u.fn=u.prototype={jquery:N,constructor:u,length:0,toArray:function(){return o.call(this)},get:function(s){return s==null?o.call(this):s<0?this[s+this.length]:this[s]},pushStack:function(s){var l=u.merge(this.constructor(),s);return l.prevObject=this,l},each:function(s){return u.each(this,s)},map:function(s){return this.pushStack(u.map(this,function(l,h){return s.call(l,h,l)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(u.grep(this,function(s,l){return(l+1)%2}))},odd:function(){return this.pushStack(u.grep(this,function(s,l){return l%2}))},eq:function(s){var l=this.length,h=+s+(s<0?l:0);return this.pushStack(h>=0&&h<l?[this[h]]:[])},end:function(){return this.prevObject||this.constructor()},push:c,sort:n.sort,splice:n.splice},u.extend=u.fn.extend=function(){var s,l,h,p,M,S,T=arguments[0]||{},k=1,O=arguments.length,X=!1;for(typeof T=="boolean"&&(X=T,T=arguments[k]||{},k++),typeof T!="object"&&!b(T)&&(T={}),k===O&&(T=this,k--);k<O;k++)if((s=arguments[k])!=null)for(l in s)p=s[l],!(l==="__proto__"||T===p)&&(X&&p&&(u.isPlainObject(p)||(M=Array.isArray(p)))?(h=T[l],M&&!Array.isArray(h)?S=[]:!M&&!u.isPlainObject(h)?S={}:S=h,M=!1,T[l]=u.extend(X,S,p)):p!==void 0&&(T[l]=p));return T},u.extend({expando:"jQuery"+(N+Math.random()).replace(/\D/g,""),isReady:!0,error:function(s){throw new Error(s)},noop:function(){},isPlainObject:function(s){var l,h;return!s||m.call(s)!=="[object Object]"?!1:(l=r(s),l?(h=v.call(l,"constructor")&&l.constructor,typeof h=="function"&&_.call(h)===y):!0)},isEmptyObject:function(s){var l;for(l in s)return!1;return!0},globalEval:function(s,l,h){w(s,{nonce:l&&l.nonce},h)},each:function(s,l){var h,p=0;if(F(s))for(h=s.length;p<h&&l.call(s[p],p,s[p])!==!1;p++);else for(p in s)if(l.call(s[p],p,s[p])===!1)break;return s},makeArray:function(s,l){var h=l||[];return s!=null&&(F(Object(s))?u.merge(h,typeof s=="string"?[s]:s):c.call(h,s)),h},inArray:function(s,l,h){return l==null?-1:d.call(l,s,h)},merge:function(s,l){for(var h=+l.length,p=0,M=s.length;p<h;p++)s[M++]=l[p];return s.length=M,s},grep:function(s,l,h){for(var p,M=[],S=0,T=s.length,k=!h;S<T;S++)p=!l(s[S],S),p!==k&&M.push(s[S]);return M},map:function(s,l,h){var p,M,S=0,T=[];if(F(s))for(p=s.length;S<p;S++)M=l(s[S],S,h),M!=null&&T.push(M);else for(S in s)M=l(s[S],S,h),M!=null&&T.push(M);return a(T)},guid:1,support:E}),typeof Symbol=="function"&&(u.fn[Symbol.iterator]=n[Symbol.iterator]),u.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(s,l){f["[object "+l+"]"]=l.toLowerCase()});function F(s){var l=!!s&&"length"in s&&s.length,h=L(s);return b(s)||x(s)?!1:h==="array"||l===0||typeof l=="number"&&l>0&&l-1 in s}var q=function(s){var l,h,p,M,S,T,k,O,X,ne,xe,K,ue,Ve,at,Ge,Kt,Yt,Cn,wt="sizzle"+1*new Date,st=s.document,Mn=0,yt=0,kt=Vs(),as=Vs(),Hs=Vs(),Rn=Vs(),ji=function(A,B){return A===B&&(xe=!0),0},Yi={}.hasOwnProperty,Sn=[],Ai=Sn.pop,Bn=Sn.push,Ci=Sn.push,Tl=Sn.slice,$i=function(A,B){for(var V=0,he=A.length;V<he;V++)if(A[V]===B)return V;return-1},Yo="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",Tt="[\\x20\\t\\r\\n\\f]",Zi="(?:\\\\[\\da-fA-F]{1,6}"+Tt+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",wl="\\["+Tt+"*("+Zi+")(?:"+Tt+"*([*^$|!~]?=)"+Tt+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+Zi+"))|)"+Tt+"*\\]",$o=":("+Zi+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+wl+")*)|.*)\\)|)",Lh=new RegExp(Tt+"+","g"),ks=new RegExp("^"+Tt+"+|((?:^|[^\\\\])(?:\\\\.)*)"+Tt+"+$","g"),Dh=new RegExp("^"+Tt+"*,"+Tt+"*"),Al=new RegExp("^"+Tt+"*([>+~]|"+Tt+")"+Tt+"*"),Ih=new RegExp(Tt+"|>"),Uh=new RegExp($o),Nh=new RegExp("^"+Zi+"$"),Gs={ID:new RegExp("^#("+Zi+")"),CLASS:new RegExp("^\\.("+Zi+")"),TAG:new RegExp("^("+Zi+"|[*])"),ATTR:new RegExp("^"+wl),PSEUDO:new RegExp("^"+$o),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+Tt+"*(even|odd|(([+-]|)(\\d*)n|)"+Tt+"*(?:([+-]|)"+Tt+"*(\\d+)|))"+Tt+"*\\)|)","i"),bool:new RegExp("^(?:"+Yo+")$","i"),needsContext:new RegExp("^"+Tt+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+Tt+"*((?:-\\d)?\\d*)"+Tt+"*\\)|)(?=[^-]|$)","i")},Fh=/HTML$/i,Oh=/^(?:input|select|textarea|button)$/i,Bh=/^h\d$/i,ls=/^[^{]+\{\s*\[native \w/,zh=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Zo=/[+~]/,fi=new RegExp("\\\\[\\da-fA-F]{1,6}"+Tt+"?|\\\\([^\\r\\n\\f])","g"),pi=function(A,B){var V="0x"+A.slice(1)-65536;return B||(V<0?String.fromCharCode(V+65536):String.fromCharCode(V>>10|55296,V&1023|56320))},Cl=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,Rl=function(A,B){return B?A==="\0"?"�":A.slice(0,-1)+"\\"+A.charCodeAt(A.length-1).toString(16)+" ":"\\"+A},Pl=function(){K()},Hh=Xs(function(A){return A.disabled===!0&&A.nodeName.toLowerCase()==="fieldset"},{dir:"parentNode",next:"legend"});try{Ci.apply(Sn=Tl.call(st.childNodes),st.childNodes),Sn[st.childNodes.length].nodeType}catch{Ci={apply:Sn.length?function(B,V){Bn.apply(B,Tl.call(V))}:function(B,V){for(var he=B.length,W=0;B[he++]=V[W++];);B.length=he-1}}}function Ct(A,B,V,he){var W,pe,ye,Le,Fe,Ze,je,Je=B&&B.ownerDocument,_t=B?B.nodeType:9;if(V=V||[],typeof A!="string"||!A||_t!==1&&_t!==9&&_t!==11)return V;if(!he&&(K(B),B=B||ue,at)){if(_t!==11&&(Fe=zh.exec(A)))if(W=Fe[1]){if(_t===9)if(ye=B.getElementById(W)){if(ye.id===W)return V.push(ye),V}else return V;else if(Je&&(ye=Je.getElementById(W))&&Cn(B,ye)&&ye.id===W)return V.push(ye),V}else{if(Fe[2])return Ci.apply(V,B.getElementsByTagName(A)),V;if((W=Fe[3])&&h.getElementsByClassName&&B.getElementsByClassName)return Ci.apply(V,B.getElementsByClassName(W)),V}if(h.qsa&&!Rn[A+" "]&&(!Ge||!Ge.test(A))&&(_t!==1||B.nodeName.toLowerCase()!=="object")){if(je=A,Je=B,_t===1&&(Ih.test(A)||Al.test(A))){for(Je=Zo.test(A)&&Qo(B.parentNode)||B,(Je!==B||!h.scope)&&((Le=B.getAttribute("id"))?Le=Le.replace(Cl,Rl):B.setAttribute("id",Le=wt)),Ze=T(A),pe=Ze.length;pe--;)Ze[pe]=(Le?"#"+Le:":scope")+" "+Ws(Ze[pe]);je=Ze.join(",")}try{return Ci.apply(V,Je.querySelectorAll(je)),V}catch{Rn(A,!0)}finally{Le===wt&&B.removeAttribute("id")}}}return O(A.replace(ks,"$1"),B,V,he)}function Vs(){var A=[];function B(V,he){return A.push(V+" ")>p.cacheLength&&delete B[A.shift()],B[V+" "]=he}return B}function Xn(A){return A[wt]=!0,A}function zn(A){var B=ue.createElement("fieldset");try{return!!A(B)}catch{return!1}finally{B.parentNode&&B.parentNode.removeChild(B),B=null}}function Ko(A,B){for(var V=A.split("|"),he=V.length;he--;)p.attrHandle[V[he]]=B}function Ll(A,B){var V=B&&A,he=V&&A.nodeType===1&&B.nodeType===1&&A.sourceIndex-B.sourceIndex;if(he)return he;if(V){for(;V=V.nextSibling;)if(V===B)return-1}return A?1:-1}function kh(A){return function(B){var V=B.nodeName.toLowerCase();return V==="input"&&B.type===A}}function Gh(A){return function(B){var V=B.nodeName.toLowerCase();return(V==="input"||V==="button")&&B.type===A}}function Dl(A){return function(B){return"form"in B?B.parentNode&&B.disabled===!1?"label"in B?"label"in B.parentNode?B.parentNode.disabled===A:B.disabled===A:B.isDisabled===A||B.isDisabled!==!A&&Hh(B)===A:B.disabled===A:"label"in B?B.disabled===A:!1}}function Ki(A){return Xn(function(B){return B=+B,Xn(function(V,he){for(var W,pe=A([],V.length,B),ye=pe.length;ye--;)V[W=pe[ye]]&&(V[W]=!(he[W]=V[W]))})})}function Qo(A){return A&&typeof A.getElementsByTagName<"u"&&A}h=Ct.support={},S=Ct.isXML=function(A){var B=A&&A.namespaceURI,V=A&&(A.ownerDocument||A).documentElement;return!Fh.test(B||V&&V.nodeName||"HTML")},K=Ct.setDocument=function(A){var B,V,he=A?A.ownerDocument||A:st;return he==ue||he.nodeType!==9||!he.documentElement||(ue=he,Ve=ue.documentElement,at=!S(ue),st!=ue&&(V=ue.defaultView)&&V.top!==V&&(V.addEventListener?V.addEventListener("unload",Pl,!1):V.attachEvent&&V.attachEvent("onunload",Pl)),h.scope=zn(function(W){return Ve.appendChild(W).appendChild(ue.createElement("div")),typeof W.querySelectorAll<"u"&&!W.querySelectorAll(":scope fieldset div").length}),h.cssHas=zn(function(){try{return ue.querySelector(":has(*,:jqfake)"),!1}catch{return!0}}),h.attributes=zn(function(W){return W.className="i",!W.getAttribute("className")}),h.getElementsByTagName=zn(function(W){return W.appendChild(ue.createComment("")),!W.getElementsByTagName("*").length}),h.getElementsByClassName=ls.test(ue.getElementsByClassName),h.getById=zn(function(W){return Ve.appendChild(W).id=wt,!ue.getElementsByName||!ue.getElementsByName(wt).length}),h.getById?(p.filter.ID=function(W){var pe=W.replace(fi,pi);return function(ye){return ye.getAttribute("id")===pe}},p.find.ID=function(W,pe){if(typeof pe.getElementById<"u"&&at){var ye=pe.getElementById(W);return ye?[ye]:[]}}):(p.filter.ID=function(W){var pe=W.replace(fi,pi);return function(ye){var Le=typeof ye.getAttributeNode<"u"&&ye.getAttributeNode("id");return Le&&Le.value===pe}},p.find.ID=function(W,pe){if(typeof pe.getElementById<"u"&&at){var ye,Le,Fe,Ze=pe.getElementById(W);if(Ze){if(ye=Ze.getAttributeNode("id"),ye&&ye.value===W)return[Ze];for(Fe=pe.getElementsByName(W),Le=0;Ze=Fe[Le++];)if(ye=Ze.getAttributeNode("id"),ye&&ye.value===W)return[Ze]}return[]}}),p.find.TAG=h.getElementsByTagName?function(W,pe){if(typeof pe.getElementsByTagName<"u")return pe.getElementsByTagName(W);if(h.qsa)return pe.querySelectorAll(W)}:function(W,pe){var ye,Le=[],Fe=0,Ze=pe.getElementsByTagName(W);if(W==="*"){for(;ye=Ze[Fe++];)ye.nodeType===1&&Le.push(ye);return Le}return Ze},p.find.CLASS=h.getElementsByClassName&&function(W,pe){if(typeof pe.getElementsByClassName<"u"&&at)return pe.getElementsByClassName(W)},Kt=[],Ge=[],(h.qsa=ls.test(ue.querySelectorAll))&&(zn(function(W){var pe;Ve.appendChild(W).innerHTML="<a id='"+wt+"'></a><select id='"+wt+"-\r\\' msallowcapture=''><option selected=''></option></select>",W.querySelectorAll("[msallowcapture^='']").length&&Ge.push("[*^$]="+Tt+`*(?:''|"")`),W.querySelectorAll("[selected]").length||Ge.push("\\["+Tt+"*(?:value|"+Yo+")"),W.querySelectorAll("[id~="+wt+"-]").length||Ge.push("~="),pe=ue.createElement("input"),pe.setAttribute("name",""),W.appendChild(pe),W.querySelectorAll("[name='']").length||Ge.push("\\["+Tt+"*name"+Tt+"*="+Tt+`*(?:''|"")`),W.querySelectorAll(":checked").length||Ge.push(":checked"),W.querySelectorAll("a#"+wt+"+*").length||Ge.push(".#.+[+~]"),W.querySelectorAll("\\\f"),Ge.push("[\\r\\n\\f]")}),zn(function(W){W.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var pe=ue.createElement("input");pe.setAttribute("type","hidden"),W.appendChild(pe).setAttribute("name","D"),W.querySelectorAll("[name=d]").length&&Ge.push("name"+Tt+"*[*^$|!~]?="),W.querySelectorAll(":enabled").length!==2&&Ge.push(":enabled",":disabled"),Ve.appendChild(W).disabled=!0,W.querySelectorAll(":disabled").length!==2&&Ge.push(":enabled",":disabled"),W.querySelectorAll("*,:x"),Ge.push(",.*:")})),(h.matchesSelector=ls.test(Yt=Ve.matches||Ve.webkitMatchesSelector||Ve.mozMatchesSelector||Ve.oMatchesSelector||Ve.msMatchesSelector))&&zn(function(W){h.disconnectedMatch=Yt.call(W,"*"),Yt.call(W,"[s!='']:x"),Kt.push("!=",$o)}),h.cssHas||Ge.push(":has"),Ge=Ge.length&&new RegExp(Ge.join("|")),Kt=Kt.length&&new RegExp(Kt.join("|")),B=ls.test(Ve.compareDocumentPosition),Cn=B||ls.test(Ve.contains)?function(W,pe){var ye=W.nodeType===9&&W.documentElement||W,Le=pe&&pe.parentNode;return W===Le||!!(Le&&Le.nodeType===1&&(ye.contains?ye.contains(Le):W.compareDocumentPosition&&W.compareDocumentPosition(Le)&16))}:function(W,pe){if(pe){for(;pe=pe.parentNode;)if(pe===W)return!0}return!1},ji=B?function(W,pe){if(W===pe)return xe=!0,0;var ye=!W.compareDocumentPosition-!pe.compareDocumentPosition;return ye||(ye=(W.ownerDocument||W)==(pe.ownerDocument||pe)?W.compareDocumentPosition(pe):1,ye&1||!h.sortDetached&&pe.compareDocumentPosition(W)===ye?W==ue||W.ownerDocument==st&&Cn(st,W)?-1:pe==ue||pe.ownerDocument==st&&Cn(st,pe)?1:ne?$i(ne,W)-$i(ne,pe):0:ye&4?-1:1)}:function(W,pe){if(W===pe)return xe=!0,0;var ye,Le=0,Fe=W.parentNode,Ze=pe.parentNode,je=[W],Je=[pe];if(!Fe||!Ze)return W==ue?-1:pe==ue?1:Fe?-1:Ze?1:ne?$i(ne,W)-$i(ne,pe):0;if(Fe===Ze)return Ll(W,pe);for(ye=W;ye=ye.parentNode;)je.unshift(ye);for(ye=pe;ye=ye.parentNode;)Je.unshift(ye);for(;je[Le]===Je[Le];)Le++;return Le?Ll(je[Le],Je[Le]):je[Le]==st?-1:Je[Le]==st?1:0}),ue},Ct.matches=function(A,B){return Ct(A,null,null,B)},Ct.matchesSelector=function(A,B){if(K(A),h.matchesSelector&&at&&!Rn[B+" "]&&(!Kt||!Kt.test(B))&&(!Ge||!Ge.test(B)))try{var V=Yt.call(A,B);if(V||h.disconnectedMatch||A.document&&A.document.nodeType!==11)return V}catch{Rn(B,!0)}return Ct(B,ue,null,[A]).length>0},Ct.contains=function(A,B){return(A.ownerDocument||A)!=ue&&K(A),Cn(A,B)},Ct.attr=function(A,B){(A.ownerDocument||A)!=ue&&K(A);var V=p.attrHandle[B.toLowerCase()],he=V&&Yi.call(p.attrHandle,B.toLowerCase())?V(A,B,!at):void 0;return he!==void 0?he:h.attributes||!at?A.getAttribute(B):(he=A.getAttributeNode(B))&&he.specified?he.value:null},Ct.escape=function(A){return(A+"").replace(Cl,Rl)},Ct.error=function(A){throw new Error("Syntax error, unrecognized expression: "+A)},Ct.uniqueSort=function(A){var B,V=[],he=0,W=0;if(xe=!h.detectDuplicates,ne=!h.sortStable&&A.slice(0),A.sort(ji),xe){for(;B=A[W++];)B===A[W]&&(he=V.push(W));for(;he--;)A.splice(V[he],1)}return ne=null,A},M=Ct.getText=function(A){var B,V="",he=0,W=A.nodeType;if(W){if(W===1||W===9||W===11){if(typeof A.textContent=="string")return A.textContent;for(A=A.firstChild;A;A=A.nextSibling)V+=M(A)}else if(W===3||W===4)return A.nodeValue}else for(;B=A[he++];)V+=M(B);return V},p=Ct.selectors={cacheLength:50,createPseudo:Xn,match:Gs,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(A){return A[1]=A[1].replace(fi,pi),A[3]=(A[3]||A[4]||A[5]||"").replace(fi,pi),A[2]==="~="&&(A[3]=" "+A[3]+" "),A.slice(0,4)},CHILD:function(A){return A[1]=A[1].toLowerCase(),A[1].slice(0,3)==="nth"?(A[3]||Ct.error(A[0]),A[4]=+(A[4]?A[5]+(A[6]||1):2*(A[3]==="even"||A[3]==="odd")),A[5]=+(A[7]+A[8]||A[3]==="odd")):A[3]&&Ct.error(A[0]),A},PSEUDO:function(A){var B,V=!A[6]&&A[2];return Gs.CHILD.test(A[0])?null:(A[3]?A[2]=A[4]||A[5]||"":V&&Uh.test(V)&&(B=T(V,!0))&&(B=V.indexOf(")",V.length-B)-V.length)&&(A[0]=A[0].slice(0,B),A[2]=V.slice(0,B)),A.slice(0,3))}},filter:{TAG:function(A){var B=A.replace(fi,pi).toLowerCase();return A==="*"?function(){return!0}:function(V){return V.nodeName&&V.nodeName.toLowerCase()===B}},CLASS:function(A){var B=kt[A+" "];return B||(B=new RegExp("(^|"+Tt+")"+A+"("+Tt+"|$)"))&&kt(A,function(V){return B.test(typeof V.className=="string"&&V.className||typeof V.getAttribute<"u"&&V.getAttribute("class")||"")})},ATTR:function(A,B,V){return function(he){var W=Ct.attr(he,A);return W==null?B==="!=":B?(W+="",B==="="?W===V:B==="!="?W!==V:B==="^="?V&&W.indexOf(V)===0:B==="*="?V&&W.indexOf(V)>-1:B==="$="?V&&W.slice(-V.length)===V:B==="~="?(" "+W.replace(Lh," ")+" ").indexOf(V)>-1:B==="|="?W===V||W.slice(0,V.length+1)===V+"-":!1):!0}},CHILD:function(A,B,V,he,W){var pe=A.slice(0,3)!=="nth",ye=A.slice(-4)!=="last",Le=B==="of-type";return he===1&&W===0?function(Fe){return!!Fe.parentNode}:function(Fe,Ze,je){var Je,_t,Rt,Ke,Qt,un,Pn=pe!==ye?"nextSibling":"previousSibling",Ft=Fe.parentNode,cs=Le&&Fe.nodeName.toLowerCase(),us=!je&&!Le,Ln=!1;if(Ft){if(pe){for(;Pn;){for(Ke=Fe;Ke=Ke[Pn];)if(Le?Ke.nodeName.toLowerCase()===cs:Ke.nodeType===1)return!1;un=Pn=A==="only"&&!un&&"nextSibling"}return!0}if(un=[ye?Ft.firstChild:Ft.lastChild],ye&&us){for(Ke=Ft,Rt=Ke[wt]||(Ke[wt]={}),_t=Rt[Ke.uniqueID]||(Rt[Ke.uniqueID]={}),Je=_t[A]||[],Qt=Je[0]===Mn&&Je[1],Ln=Qt&&Je[2],Ke=Qt&&Ft.childNodes[Qt];Ke=++Qt&&Ke&&Ke[Pn]||(Ln=Qt=0)||un.pop();)if(Ke.nodeType===1&&++Ln&&Ke===Fe){_t[A]=[Mn,Qt,Ln];break}}else if(us&&(Ke=Fe,Rt=Ke[wt]||(Ke[wt]={}),_t=Rt[Ke.uniqueID]||(Rt[Ke.uniqueID]={}),Je=_t[A]||[],Qt=Je[0]===Mn&&Je[1],Ln=Qt),Ln===!1)for(;(Ke=++Qt&&Ke&&Ke[Pn]||(Ln=Qt=0)||un.pop())&&!((Le?Ke.nodeName.toLowerCase()===cs:Ke.nodeType===1)&&++Ln&&(us&&(Rt=Ke[wt]||(Ke[wt]={}),_t=Rt[Ke.uniqueID]||(Rt[Ke.uniqueID]={}),_t[A]=[Mn,Ln]),Ke===Fe)););return Ln-=W,Ln===he||Ln%he===0&&Ln/he>=0}}},PSEUDO:function(A,B){var V,he=p.pseudos[A]||p.setFilters[A.toLowerCase()]||Ct.error("unsupported pseudo: "+A);return he[wt]?he(B):he.length>1?(V=[A,A,"",B],p.setFilters.hasOwnProperty(A.toLowerCase())?Xn(function(W,pe){for(var ye,Le=he(W,B),Fe=Le.length;Fe--;)ye=$i(W,Le[Fe]),W[ye]=!(pe[ye]=Le[Fe])}):function(W){return he(W,0,V)}):he}},pseudos:{not:Xn(function(A){var B=[],V=[],he=k(A.replace(ks,"$1"));return he[wt]?Xn(function(W,pe,ye,Le){for(var Fe,Ze=he(W,null,Le,[]),je=W.length;je--;)(Fe=Ze[je])&&(W[je]=!(pe[je]=Fe))}):function(W,pe,ye){return B[0]=W,he(B,null,ye,V),B[0]=null,!V.pop()}}),has:Xn(function(A){return function(B){return Ct(A,B).length>0}}),contains:Xn(function(A){return A=A.replace(fi,pi),function(B){return(B.textContent||M(B)).indexOf(A)>-1}}),lang:Xn(function(A){return Nh.test(A||"")||Ct.error("unsupported lang: "+A),A=A.replace(fi,pi).toLowerCase(),function(B){var V;do if(V=at?B.lang:B.getAttribute("xml:lang")||B.getAttribute("lang"))return V=V.toLowerCase(),V===A||V.indexOf(A+"-")===0;while((B=B.parentNode)&&B.nodeType===1);return!1}}),target:function(A){var B=s.location&&s.location.hash;return B&&B.slice(1)===A.id},root:function(A){return A===Ve},focus:function(A){return A===ue.activeElement&&(!ue.hasFocus||ue.hasFocus())&&!!(A.type||A.href||~A.tabIndex)},enabled:Dl(!1),disabled:Dl(!0),checked:function(A){var B=A.nodeName.toLowerCase();return B==="input"&&!!A.checked||B==="option"&&!!A.selected},selected:function(A){return A.parentNode&&A.parentNode.selectedIndex,A.selected===!0},empty:function(A){for(A=A.firstChild;A;A=A.nextSibling)if(A.nodeType<6)return!1;return!0},parent:function(A){return!p.pseudos.empty(A)},header:function(A){return Bh.test(A.nodeName)},input:function(A){return Oh.test(A.nodeName)},button:function(A){var B=A.nodeName.toLowerCase();return B==="input"&&A.type==="button"||B==="button"},text:function(A){var B;return A.nodeName.toLowerCase()==="input"&&A.type==="text"&&((B=A.getAttribute("type"))==null||B.toLowerCase()==="text")},first:Ki(function(){return[0]}),last:Ki(function(A,B){return[B-1]}),eq:Ki(function(A,B,V){return[V<0?V+B:V]}),even:Ki(function(A,B){for(var V=0;V<B;V+=2)A.push(V);return A}),odd:Ki(function(A,B){for(var V=1;V<B;V+=2)A.push(V);return A}),lt:Ki(function(A,B,V){for(var he=V<0?V+B:V>B?B:V;--he>=0;)A.push(he);return A}),gt:Ki(function(A,B,V){for(var he=V<0?V+B:V;++he<B;)A.push(he);return A})}},p.pseudos.nth=p.pseudos.eq;for(l in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})p.pseudos[l]=kh(l);for(l in{submit:!0,reset:!0})p.pseudos[l]=Gh(l);function Il(){}Il.prototype=p.filters=p.pseudos,p.setFilters=new Il,T=Ct.tokenize=function(A,B){var V,he,W,pe,ye,Le,Fe,Ze=as[A+" "];if(Ze)return B?0:Ze.slice(0);for(ye=A,Le=[],Fe=p.preFilter;ye;){(!V||(he=Dh.exec(ye)))&&(he&&(ye=ye.slice(he[0].length)||ye),Le.push(W=[])),V=!1,(he=Al.exec(ye))&&(V=he.shift(),W.push({value:V,type:he[0].replace(ks," ")}),ye=ye.slice(V.length));for(pe in p.filter)(he=Gs[pe].exec(ye))&&(!Fe[pe]||(he=Fe[pe](he)))&&(V=he.shift(),W.push({value:V,type:pe,matches:he}),ye=ye.slice(V.length));if(!V)break}return B?ye.length:ye?Ct.error(A):as(A,Le).slice(0)};function Ws(A){for(var B=0,V=A.length,he="";B<V;B++)he+=A[B].value;return he}function Xs(A,B,V){var he=B.dir,W=B.next,pe=W||he,ye=V&&pe==="parentNode",Le=yt++;return B.first?function(Fe,Ze,je){for(;Fe=Fe[he];)if(Fe.nodeType===1||ye)return A(Fe,Ze,je);return!1}:function(Fe,Ze,je){var Je,_t,Rt,Ke=[Mn,Le];if(je){for(;Fe=Fe[he];)if((Fe.nodeType===1||ye)&&A(Fe,Ze,je))return!0}else for(;Fe=Fe[he];)if(Fe.nodeType===1||ye)if(Rt=Fe[wt]||(Fe[wt]={}),_t=Rt[Fe.uniqueID]||(Rt[Fe.uniqueID]={}),W&&W===Fe.nodeName.toLowerCase())Fe=Fe[he]||Fe;else{if((Je=_t[pe])&&Je[0]===Mn&&Je[1]===Le)return Ke[2]=Je[2];if(_t[pe]=Ke,Ke[2]=A(Fe,Ze,je))return!0}return!1}}function Jo(A){return A.length>1?function(B,V,he){for(var W=A.length;W--;)if(!A[W](B,V,he))return!1;return!0}:A[0]}function Vh(A,B,V){for(var he=0,W=B.length;he<W;he++)Ct(A,B[he],V);return V}function qs(A,B,V,he,W){for(var pe,ye=[],Le=0,Fe=A.length,Ze=B!=null;Le<Fe;Le++)(pe=A[Le])&&(!V||V(pe,he,W))&&(ye.push(pe),Ze&&B.push(Le));return ye}function ea(A,B,V,he,W,pe){return he&&!he[wt]&&(he=ea(he)),W&&!W[wt]&&(W=ea(W,pe)),Xn(function(ye,Le,Fe,Ze){var je,Je,_t,Rt=[],Ke=[],Qt=Le.length,un=ye||Vh(B||"*",Fe.nodeType?[Fe]:Fe,[]),Pn=A&&(ye||!B)?qs(un,Rt,A,Fe,Ze):un,Ft=V?W||(ye?A:Qt||he)?[]:Le:Pn;if(V&&V(Pn,Ft,Fe,Ze),he)for(je=qs(Ft,Ke),he(je,[],Fe,Ze),Je=je.length;Je--;)(_t=je[Je])&&(Ft[Ke[Je]]=!(Pn[Ke[Je]]=_t));if(ye){if(W||A){if(W){for(je=[],Je=Ft.length;Je--;)(_t=Ft[Je])&&je.push(Pn[Je]=_t);W(null,Ft=[],je,Ze)}for(Je=Ft.length;Je--;)(_t=Ft[Je])&&(je=W?$i(ye,_t):Rt[Je])>-1&&(ye[je]=!(Le[je]=_t))}}else Ft=qs(Ft===Le?Ft.splice(Qt,Ft.length):Ft),W?W(null,Le,Ft,Ze):Ci.apply(Le,Ft)})}function ta(A){for(var B,V,he,W=A.length,pe=p.relative[A[0].type],ye=pe||p.relative[" "],Le=pe?1:0,Fe=Xs(function(Je){return Je===B},ye,!0),Ze=Xs(function(Je){return $i(B,Je)>-1},ye,!0),je=[function(Je,_t,Rt){var Ke=!pe&&(Rt||_t!==X)||((B=_t).nodeType?Fe(Je,_t,Rt):Ze(Je,_t,Rt));return B=null,Ke}];Le<W;Le++)if(V=p.relative[A[Le].type])je=[Xs(Jo(je),V)];else{if(V=p.filter[A[Le].type].apply(null,A[Le].matches),V[wt]){for(he=++Le;he<W&&!p.relative[A[he].type];he++);return ea(Le>1&&Jo(je),Le>1&&Ws(A.slice(0,Le-1).concat({value:A[Le-2].type===" "?"*":""})).replace(ks,"$1"),V,Le<he&&ta(A.slice(Le,he)),he<W&&ta(A=A.slice(he)),he<W&&Ws(A))}je.push(V)}return Jo(je)}function Wh(A,B){var V=B.length>0,he=A.length>0,W=function(pe,ye,Le,Fe,Ze){var je,Je,_t,Rt=0,Ke="0",Qt=pe&&[],un=[],Pn=X,Ft=pe||he&&p.find.TAG("*",Ze),cs=Mn+=Pn==null?1:Math.random()||.1,us=Ft.length;for(Ze&&(X=ye==ue||ye||Ze);Ke!==us&&(je=Ft[Ke])!=null;Ke++){if(he&&je){for(Je=0,!ye&&je.ownerDocument!=ue&&(K(je),Le=!at);_t=A[Je++];)if(_t(je,ye||ue,Le)){Fe.push(je);break}Ze&&(Mn=cs)}V&&((je=!_t&&je)&&Rt--,pe&&Qt.push(je))}if(Rt+=Ke,V&&Ke!==Rt){for(Je=0;_t=B[Je++];)_t(Qt,un,ye,Le);if(pe){if(Rt>0)for(;Ke--;)Qt[Ke]||un[Ke]||(un[Ke]=Ai.call(Fe));un=qs(un)}Ci.apply(Fe,un),Ze&&!pe&&un.length>0&&Rt+B.length>1&&Ct.uniqueSort(Fe)}return Ze&&(Mn=cs,X=Pn),Qt};return V?Xn(W):W}return k=Ct.compile=function(A,B){var V,he=[],W=[],pe=Hs[A+" "];if(!pe){for(B||(B=T(A)),V=B.length;V--;)pe=ta(B[V]),pe[wt]?he.push(pe):W.push(pe);pe=Hs(A,Wh(W,he)),pe.selector=A}return pe},O=Ct.select=function(A,B,V,he){var W,pe,ye,Le,Fe,Ze=typeof A=="function"&&A,je=!he&&T(A=Ze.selector||A);if(V=V||[],je.length===1){if(pe=je[0]=je[0].slice(0),pe.length>2&&(ye=pe[0]).type==="ID"&&B.nodeType===9&&at&&p.relative[pe[1].type]){if(B=(p.find.ID(ye.matches[0].replace(fi,pi),B)||[])[0],B)Ze&&(B=B.parentNode);else return V;A=A.slice(pe.shift().value.length)}for(W=Gs.needsContext.test(A)?0:pe.length;W--&&(ye=pe[W],!p.relative[Le=ye.type]);)if((Fe=p.find[Le])&&(he=Fe(ye.matches[0].replace(fi,pi),Zo.test(pe[0].type)&&Qo(B.parentNode)||B))){if(pe.splice(W,1),A=he.length&&Ws(pe),!A)return Ci.apply(V,he),V;break}}return(Ze||k(A,je))(he,B,!at,V,!B||Zo.test(A)&&Qo(B.parentNode)||B),V},h.sortStable=wt.split("").sort(ji).join("")===wt,h.detectDuplicates=!!xe,K(),h.sortDetached=zn(function(A){return A.compareDocumentPosition(ue.createElement("fieldset"))&1}),zn(function(A){return A.innerHTML="<a href='#'></a>",A.firstChild.getAttribute("href")==="#"})||Ko("type|href|height|width",function(A,B,V){if(!V)return A.getAttribute(B,B.toLowerCase()==="type"?1:2)}),(!h.attributes||!zn(function(A){return A.innerHTML="<input/>",A.firstChild.setAttribute("value",""),A.firstChild.getAttribute("value")===""}))&&Ko("value",function(A,B,V){if(!V&&A.nodeName.toLowerCase()==="input")return A.defaultValue}),zn(function(A){return A.getAttribute("disabled")==null})||Ko(Yo,function(A,B,V){var he;if(!V)return A[B]===!0?B.toLowerCase():(he=A.getAttributeNode(B))&&he.specified?he.value:null}),Ct}(e);u.find=q,u.expr=q.selectors,u.expr[":"]=u.expr.pseudos,u.uniqueSort=u.unique=q.uniqueSort,u.text=q.getText,u.isXMLDoc=q.isXML,u.contains=q.contains,u.escapeSelector=q.escape;var R=function(s,l,h){for(var p=[],M=h!==void 0;(s=s[l])&&s.nodeType!==9;)if(s.nodeType===1){if(M&&u(s).is(h))break;p.push(s)}return p},I=function(s,l){for(var h=[];s;s=s.nextSibling)s.nodeType===1&&s!==l&&h.push(s);return h},fe=u.expr.match.needsContext;function oe(s,l){return s.nodeName&&s.nodeName.toLowerCase()===l.toLowerCase()}var Y=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function J(s,l,h){return b(l)?u.grep(s,function(p,M){return!!l.call(p,M,p)!==h}):l.nodeType?u.grep(s,function(p){return p===l!==h}):typeof l!="string"?u.grep(s,function(p){return d.call(l,p)>-1!==h}):u.filter(l,s,h)}u.filter=function(s,l,h){var p=l[0];return h&&(s=":not("+s+")"),l.length===1&&p.nodeType===1?u.find.matchesSelector(p,s)?[p]:[]:u.find.matches(s,u.grep(l,function(M){return M.nodeType===1}))},u.fn.extend({find:function(s){var l,h,p=this.length,M=this;if(typeof s!="string")return this.pushStack(u(s).filter(function(){for(l=0;l<p;l++)if(u.contains(M[l],this))return!0}));for(h=this.pushStack([]),l=0;l<p;l++)u.find(s,M[l],h);return p>1?u.uniqueSort(h):h},filter:function(s){return this.pushStack(J(this,s||[],!1))},not:function(s){return this.pushStack(J(this,s||[],!0))},is:function(s){return!!J(this,typeof s=="string"&&fe.test(s)?u(s):s||[],!1).length}});var te,_e=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,le=u.fn.init=function(s,l,h){var p,M;if(!s)return this;if(h=h||te,typeof s=="string")if(s[0]==="<"&&s[s.length-1]===">"&&s.length>=3?p=[null,s,null]:p=_e.exec(s),p&&(p[1]||!l))if(p[1]){if(l=l instanceof u?l[0]:l,u.merge(this,u.parseHTML(p[1],l&&l.nodeType?l.ownerDocument||l:g,!0)),Y.test(p[1])&&u.isPlainObject(l))for(p in l)b(this[p])?this[p](l[p]):this.attr(p,l[p]);return this}else return M=g.getElementById(p[2]),M&&(this[0]=M,this.length=1),this;else return!l||l.jquery?(l||h).find(s):this.constructor(l).find(s);else{if(s.nodeType)return this[0]=s,this.length=1,this;if(b(s))return h.ready!==void 0?h.ready(s):s(u)}return u.makeArray(s,this)};le.prototype=u.fn,te=u(g);var de=/^(?:parents|prev(?:Until|All))/,ve={children:!0,contents:!0,next:!0,prev:!0};u.fn.extend({has:function(s){var l=u(s,this),h=l.length;return this.filter(function(){for(var p=0;p<h;p++)if(u.contains(this,l[p]))return!0})},closest:function(s,l){var h,p=0,M=this.length,S=[],T=typeof s!="string"&&u(s);if(!fe.test(s)){for(;p<M;p++)for(h=this[p];h&&h!==l;h=h.parentNode)if(h.nodeType<11&&(T?T.index(h)>-1:h.nodeType===1&&u.find.matchesSelector(h,s))){S.push(h);break}}return this.pushStack(S.length>1?u.uniqueSort(S):S)},index:function(s){return s?typeof s=="string"?d.call(u(s),this[0]):d.call(this,s.jquery?s[0]:s):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(s,l){return this.pushStack(u.uniqueSort(u.merge(this.get(),u(s,l))))},addBack:function(s){return this.add(s==null?this.prevObject:this.prevObject.filter(s))}});function ge(s,l){for(;(s=s[l])&&s.nodeType!==1;);return s}u.each({parent:function(s){var l=s.parentNode;return l&&l.nodeType!==11?l:null},parents:function(s){return R(s,"parentNode")},parentsUntil:function(s,l,h){return R(s,"parentNode",h)},next:function(s){return ge(s,"nextSibling")},prev:function(s){return ge(s,"previousSibling")},nextAll:function(s){return R(s,"nextSibling")},prevAll:function(s){return R(s,"previousSibling")},nextUntil:function(s,l,h){return R(s,"nextSibling",h)},prevUntil:function(s,l,h){return R(s,"previousSibling",h)},siblings:function(s){return I((s.parentNode||{}).firstChild,s)},children:function(s){return I(s.firstChild)},contents:function(s){return s.contentDocument!=null&&r(s.contentDocument)?s.contentDocument:(oe(s,"template")&&(s=s.content||s),u.merge([],s.childNodes))}},function(s,l){u.fn[s]=function(h,p){var M=u.map(this,l,h);return s.slice(-5)!=="Until"&&(p=h),p&&typeof p=="string"&&(M=u.filter(p,M)),this.length>1&&(ve[s]||u.uniqueSort(M),de.test(s)&&M.reverse()),this.pushStack(M)}});var $=/[^\x20\t\r\n\f]+/g;function se(s){var l={};return u.each(s.match($)||[],function(h,p){l[p]=!0}),l}u.Callbacks=function(s){s=typeof s=="string"?se(s):u.extend({},s);var l,h,p,M,S=[],T=[],k=-1,O=function(){for(M=M||s.once,p=l=!0;T.length;k=-1)for(h=T.shift();++k<S.length;)S[k].apply(h[0],h[1])===!1&&s.stopOnFalse&&(k=S.length,h=!1);s.memory||(h=!1),l=!1,M&&(h?S=[]:S="")},X={add:function(){return S&&(h&&!l&&(k=S.length-1,T.push(h)),function ne(xe){u.each(xe,function(K,ue){b(ue)?(!s.unique||!X.has(ue))&&S.push(ue):ue&&ue.length&&L(ue)!=="string"&&ne(ue)})}(arguments),h&&!l&&O()),this},remove:function(){return u.each(arguments,function(ne,xe){for(var K;(K=u.inArray(xe,S,K))>-1;)S.splice(K,1),K<=k&&k--}),this},has:function(ne){return ne?u.inArray(ne,S)>-1:S.length>0},empty:function(){return S&&(S=[]),this},disable:function(){return M=T=[],S=h="",this},disabled:function(){return!S},lock:function(){return M=T=[],!h&&!l&&(S=h=""),this},locked:function(){return!!M},fireWith:function(ne,xe){return M||(xe=xe||[],xe=[ne,xe.slice?xe.slice():xe],T.push(xe),l||O()),this},fire:function(){return X.fireWith(this,arguments),this},fired:function(){return!!p}};return X};function Pe(s){return s}function Ie(s){throw s}function Be(s,l,h,p){var M;try{s&&b(M=s.promise)?M.call(s).done(l).fail(h):s&&b(M=s.then)?M.call(s,l,h):l.apply(void 0,[s].slice(p))}catch(S){h.apply(void 0,[S])}}u.extend({Deferred:function(s){var l=[["notify","progress",u.Callbacks("memory"),u.Callbacks("memory"),2],["resolve","done",u.Callbacks("once memory"),u.Callbacks("once memory"),0,"resolved"],["reject","fail",u.Callbacks("once memory"),u.Callbacks("once memory"),1,"rejected"]],h="pending",p={state:function(){return h},always:function(){return M.done(arguments).fail(arguments),this},catch:function(S){return p.then(null,S)},pipe:function(){var S=arguments;return u.Deferred(function(T){u.each(l,function(k,O){var X=b(S[O[4]])&&S[O[4]];M[O[1]](function(){var ne=X&&X.apply(this,arguments);ne&&b(ne.promise)?ne.promise().progress(T.notify).done(T.resolve).fail(T.reject):T[O[0]+"With"](this,X?[ne]:arguments)})}),S=null}).promise()},then:function(S,T,k){var O=0;function X(ne,xe,K,ue){return function(){var Ve=this,at=arguments,Ge=function(){var Yt,Cn;if(!(ne<O)){if(Yt=K.apply(Ve,at),Yt===xe.promise())throw new TypeError("Thenable self-resolution");Cn=Yt&&(typeof Yt=="object"||typeof Yt=="function")&&Yt.then,b(Cn)?ue?Cn.call(Yt,X(O,xe,Pe,ue),X(O,xe,Ie,ue)):(O++,Cn.call(Yt,X(O,xe,Pe,ue),X(O,xe,Ie,ue),X(O,xe,Pe,xe.notifyWith))):(K!==Pe&&(Ve=void 0,at=[Yt]),(ue||xe.resolveWith)(Ve,at))}},Kt=ue?Ge:function(){try{Ge()}catch(Yt){u.Deferred.exceptionHook&&u.Deferred.exceptionHook(Yt,Kt.stackTrace),ne+1>=O&&(K!==Ie&&(Ve=void 0,at=[Yt]),xe.rejectWith(Ve,at))}};ne?Kt():(u.Deferred.getStackHook&&(Kt.stackTrace=u.Deferred.getStackHook()),e.setTimeout(Kt))}}return u.Deferred(function(ne){l[0][3].add(X(0,ne,b(k)?k:Pe,ne.notifyWith)),l[1][3].add(X(0,ne,b(S)?S:Pe)),l[2][3].add(X(0,ne,b(T)?T:Ie))}).promise()},promise:function(S){return S!=null?u.extend(S,p):p}},M={};return u.each(l,function(S,T){var k=T[2],O=T[5];p[T[1]]=k.add,O&&k.add(function(){h=O},l[3-S][2].disable,l[3-S][3].disable,l[0][2].lock,l[0][3].lock),k.add(T[3].fire),M[T[0]]=function(){return M[T[0]+"With"](this===M?void 0:this,arguments),this},M[T[0]+"With"]=k.fireWith}),p.promise(M),s&&s.call(M,M),M},when:function(s){var l=arguments.length,h=l,p=Array(h),M=o.call(arguments),S=u.Deferred(),T=function(k){return function(O){p[k]=this,M[k]=arguments.length>1?o.call(arguments):O,--l||S.resolveWith(p,M)}};if(l<=1&&(Be(s,S.done(T(h)).resolve,S.reject,!l),S.state()==="pending"||b(M[h]&&M[h].then)))return S.then();for(;h--;)Be(M[h],T(h),S.reject);return S.promise()}});var Ye=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;u.Deferred.exceptionHook=function(s,l){e.console&&e.console.warn&&s&&Ye.test(s.name)&&e.console.warn("jQuery.Deferred exception: "+s.message,s.stack,l)},u.readyException=function(s){e.setTimeout(function(){throw s})};var nt=u.Deferred();u.fn.ready=function(s){return nt.then(s).catch(function(l){u.readyException(l)}),this},u.extend({isReady:!1,readyWait:1,ready:function(s){(s===!0?--u.readyWait:u.isReady)||(u.isReady=!0,!(s!==!0&&--u.readyWait>0)&&nt.resolveWith(g,[u]))}}),u.ready.then=nt.then;function Xe(){g.removeEventListener("DOMContentLoaded",Xe),e.removeEventListener("load",Xe),u.ready()}g.readyState==="complete"||g.readyState!=="loading"&&!g.documentElement.doScroll?e.setTimeout(u.ready):(g.addEventListener("DOMContentLoaded",Xe),e.addEventListener("load",Xe));var lt=function(s,l,h,p,M,S,T){var k=0,O=s.length,X=h==null;if(L(h)==="object"){M=!0;for(k in h)lt(s,l,k,h[k],!0,S,T)}else if(p!==void 0&&(M=!0,b(p)||(T=!0),X&&(T?(l.call(s,p),l=null):(X=l,l=function(ne,xe,K){return X.call(u(ne),K)})),l))for(;k<O;k++)l(s[k],h,T?p:p.call(s[k],k,l(s[k],h)));return M?s:X?l.call(s):O?l(s[0],h):S},Zt=/^-ms-/,ct=/-([a-z])/g;function Z(s,l){return l.toUpperCase()}function Et(s){return s.replace(Zt,"ms-").replace(ct,Z)}var We=function(s){return s.nodeType===1||s.nodeType===9||!+s.nodeType};function tt(){this.expando=u.expando+tt.uid++}tt.uid=1,tt.prototype={cache:function(s){var l=s[this.expando];return l||(l={},We(s)&&(s.nodeType?s[this.expando]=l:Object.defineProperty(s,this.expando,{value:l,configurable:!0}))),l},set:function(s,l,h){var p,M=this.cache(s);if(typeof l=="string")M[Et(l)]=h;else for(p in l)M[Et(p)]=l[p];return M},get:function(s,l){return l===void 0?this.cache(s):s[this.expando]&&s[this.expando][Et(l)]},access:function(s,l,h){return l===void 0||l&&typeof l=="string"&&h===void 0?this.get(s,l):(this.set(s,l,h),h!==void 0?h:l)},remove:function(s,l){var h,p=s[this.expando];if(p!==void 0){if(l!==void 0)for(Array.isArray(l)?l=l.map(Et):(l=Et(l),l=l in p?[l]:l.match($)||[]),h=l.length;h--;)delete p[l[h]];(l===void 0||u.isEmptyObject(p))&&(s.nodeType?s[this.expando]=void 0:delete s[this.expando])}},hasData:function(s){var l=s[this.expando];return l!==void 0&&!u.isEmptyObject(l)}};var Se=new tt,ht=new tt,dt=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ot=/[A-Z]/g;function xt(s){return s==="true"?!0:s==="false"?!1:s==="null"?null:s===+s+""?+s:dt.test(s)?JSON.parse(s):s}function Vt(s,l,h){var p;if(h===void 0&&s.nodeType===1)if(p="data-"+l.replace(ot,"-$&").toLowerCase(),h=s.getAttribute(p),typeof h=="string"){try{h=xt(h)}catch{}ht.set(s,l,h)}else h=void 0;return h}u.extend({hasData:function(s){return ht.hasData(s)||Se.hasData(s)},data:function(s,l,h){return ht.access(s,l,h)},removeData:function(s,l){ht.remove(s,l)},_data:function(s,l,h){return Se.access(s,l,h)},_removeData:function(s,l){Se.remove(s,l)}}),u.fn.extend({data:function(s,l){var h,p,M,S=this[0],T=S&&S.attributes;if(s===void 0){if(this.length&&(M=ht.get(S),S.nodeType===1&&!Se.get(S,"hasDataAttrs"))){for(h=T.length;h--;)T[h]&&(p=T[h].name,p.indexOf("data-")===0&&(p=Et(p.slice(5)),Vt(S,p,M[p])));Se.set(S,"hasDataAttrs",!0)}return M}return typeof s=="object"?this.each(function(){ht.set(this,s)}):lt(this,function(k){var O;if(S&&k===void 0)return O=ht.get(S,s),O!==void 0||(O=Vt(S,s),O!==void 0)?O:void 0;this.each(function(){ht.set(this,s,k)})},null,l,arguments.length>1,null,!0)},removeData:function(s){return this.each(function(){ht.remove(this,s)})}}),u.extend({queue:function(s,l,h){var p;if(s)return l=(l||"fx")+"queue",p=Se.get(s,l),h&&(!p||Array.isArray(h)?p=Se.access(s,l,u.makeArray(h)):p.push(h)),p||[]},dequeue:function(s,l){l=l||"fx";var h=u.queue(s,l),p=h.length,M=h.shift(),S=u._queueHooks(s,l),T=function(){u.dequeue(s,l)};M==="inprogress"&&(M=h.shift(),p--),M&&(l==="fx"&&h.unshift("inprogress"),delete S.stop,M.call(s,T,S)),!p&&S&&S.empty.fire()},_queueHooks:function(s,l){var h=l+"queueHooks";return Se.get(s,h)||Se.access(s,h,{empty:u.Callbacks("once memory").add(function(){Se.remove(s,[l+"queue",h])})})}}),u.fn.extend({queue:function(s,l){var h=2;return typeof s!="string"&&(l=s,s="fx",h--),arguments.length<h?u.queue(this[0],s):l===void 0?this:this.each(function(){var p=u.queue(this,s,l);u._queueHooks(this,s),s==="fx"&&p[0]!=="inprogress"&&u.dequeue(this,s)})},dequeue:function(s){return this.each(function(){u.dequeue(this,s)})},clearQueue:function(s){return this.queue(s||"fx",[])},promise:function(s,l){var h,p=1,M=u.Deferred(),S=this,T=this.length,k=function(){--p||M.resolveWith(S,[S])};for(typeof s!="string"&&(l=s,s=void 0),s=s||"fx";T--;)h=Se.get(S[T],s+"queueHooks"),h&&h.empty&&(p++,h.empty.add(k));return k(),M.promise(l)}});var Xt=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=new RegExp("^(?:([+-])=|)("+Xt+")([a-z%]*)$","i"),C=["Top","Right","Bottom","Left"],Q=g.documentElement,be=function(s){return u.contains(s.ownerDocument,s)},Ee={composed:!0};Q.getRootNode&&(be=function(s){return u.contains(s.ownerDocument,s)||s.getRootNode(Ee)===s.ownerDocument});var Te=function(s,l){return s=l||s,s.style.display==="none"||s.style.display===""&&be(s)&&u.css(s,"display")==="none"};function He(s,l,h,p){var M,S,T=20,k=p?function(){return p.cur()}:function(){return u.css(s,l,"")},O=k(),X=h&&h[3]||(u.cssNumber[l]?"":"px"),ne=s.nodeType&&(u.cssNumber[l]||X!=="px"&&+O)&&U.exec(u.css(s,l));if(ne&&ne[3]!==X){for(O=O/2,X=X||ne[3],ne=+O||1;T--;)u.style(s,l,ne+X),(1-S)*(1-(S=k()/O||.5))<=0&&(T=0),ne=ne/S;ne=ne*2,u.style(s,l,ne+X),h=h||[]}return h&&(ne=+ne||+O||0,M=h[1]?ne+(h[1]+1)*h[2]:+h[2],p&&(p.unit=X,p.start=ne,p.end=M)),M}var Ae={};function re(s){var l,h=s.ownerDocument,p=s.nodeName,M=Ae[p];return M||(l=h.body.appendChild(h.createElement(p)),M=u.css(l,"display"),l.parentNode.removeChild(l),M==="none"&&(M="block"),Ae[p]=M,M)}function H(s,l){for(var h,p,M=[],S=0,T=s.length;S<T;S++)p=s[S],p.style&&(h=p.style.display,l?(h==="none"&&(M[S]=Se.get(p,"display")||null,M[S]||(p.style.display="")),p.style.display===""&&Te(p)&&(M[S]=re(p))):h!=="none"&&(M[S]="none",Se.set(p,"display",h)));for(S=0;S<T;S++)M[S]!=null&&(s[S].style.display=M[S]);return s}u.fn.extend({show:function(){return H(this,!0)},hide:function(){return H(this)},toggle:function(s){return typeof s=="boolean"?s?this.show():this.hide():this.each(function(){Te(this)?u(this).show():u(this).hide()})}});var me=/^(?:checkbox|radio)$/i,Ne=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Re=/^$|^module$|\/(?:java|ecma)script/i;(function(){var s=g.createDocumentFragment(),l=s.appendChild(g.createElement("div")),h=g.createElement("input");h.setAttribute("type","radio"),h.setAttribute("checked","checked"),h.setAttribute("name","t"),l.appendChild(h),E.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,l.innerHTML="<textarea>x</textarea>",E.noCloneChecked=!!l.cloneNode(!0).lastChild.defaultValue,l.innerHTML="<option></option>",E.option=!!l.lastChild})();var Ce={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Ce.tbody=Ce.tfoot=Ce.colgroup=Ce.caption=Ce.thead,Ce.th=Ce.td,E.option||(Ce.optgroup=Ce.option=[1,"<select multiple='multiple'>","</select>"]);function ke(s,l){var h;return typeof s.getElementsByTagName<"u"?h=s.getElementsByTagName(l||"*"):typeof s.querySelectorAll<"u"?h=s.querySelectorAll(l||"*"):h=[],l===void 0||l&&oe(s,l)?u.merge([s],h):h}function pt(s,l){for(var h=0,p=s.length;h<p;h++)Se.set(s[h],"globalEval",!l||Se.get(l[h],"globalEval"))}var G=/<|&#?\w+;/;function De(s,l,h,p,M){for(var S,T,k,O,X,ne,xe=l.createDocumentFragment(),K=[],ue=0,Ve=s.length;ue<Ve;ue++)if(S=s[ue],S||S===0)if(L(S)==="object")u.merge(K,S.nodeType?[S]:S);else if(!G.test(S))K.push(l.createTextNode(S));else{for(T=T||xe.appendChild(l.createElement("div")),k=(Ne.exec(S)||["",""])[1].toLowerCase(),O=Ce[k]||Ce._default,T.innerHTML=O[1]+u.htmlPrefilter(S)+O[2],ne=O[0];ne--;)T=T.lastChild;u.merge(K,T.childNodes),T=xe.firstChild,T.textContent=""}for(xe.textContent="",ue=0;S=K[ue++];){if(p&&u.inArray(S,p)>-1){M&&M.push(S);continue}if(X=be(S),T=ke(xe.appendChild(S),"script"),X&&pt(T),h)for(ne=0;S=T[ne++];)Re.test(S.type||"")&&h.push(S)}return xe}var ie=/^([^.]*)(?:\.(.+)|)/;function Me(){return!0}function we(){return!1}function mt(s,l){return s===St()==(l==="focus")}function St(){try{return g.activeElement}catch{}}function bt(s,l,h,p,M,S){var T,k;if(typeof l=="object"){typeof h!="string"&&(p=p||h,h=void 0);for(k in l)bt(s,k,h,p,l[k],S);return s}if(p==null&&M==null?(M=h,p=h=void 0):M==null&&(typeof h=="string"?(M=p,p=void 0):(M=p,p=h,h=void 0)),M===!1)M=we;else if(!M)return s;return S===1&&(T=M,M=function(O){return u().off(O),T.apply(this,arguments)},M.guid=T.guid||(T.guid=u.guid++)),s.each(function(){u.event.add(this,l,M,p,h)})}u.event={global:{},add:function(s,l,h,p,M){var S,T,k,O,X,ne,xe,K,ue,Ve,at,Ge=Se.get(s);if(We(s))for(h.handler&&(S=h,h=S.handler,M=S.selector),M&&u.find.matchesSelector(Q,M),h.guid||(h.guid=u.guid++),(O=Ge.events)||(O=Ge.events=Object.create(null)),(T=Ge.handle)||(T=Ge.handle=function(Kt){return typeof u<"u"&&u.event.triggered!==Kt.type?u.event.dispatch.apply(s,arguments):void 0}),l=(l||"").match($)||[""],X=l.length;X--;)k=ie.exec(l[X])||[],ue=at=k[1],Ve=(k[2]||"").split(".").sort(),ue&&(xe=u.event.special[ue]||{},ue=(M?xe.delegateType:xe.bindType)||ue,xe=u.event.special[ue]||{},ne=u.extend({type:ue,origType:at,data:p,handler:h,guid:h.guid,selector:M,needsContext:M&&u.expr.match.needsContext.test(M),namespace:Ve.join(".")},S),(K=O[ue])||(K=O[ue]=[],K.delegateCount=0,(!xe.setup||xe.setup.call(s,p,Ve,T)===!1)&&s.addEventListener&&s.addEventListener(ue,T)),xe.add&&(xe.add.call(s,ne),ne.handler.guid||(ne.handler.guid=h.guid)),M?K.splice(K.delegateCount++,0,ne):K.push(ne),u.event.global[ue]=!0)},remove:function(s,l,h,p,M){var S,T,k,O,X,ne,xe,K,ue,Ve,at,Ge=Se.hasData(s)&&Se.get(s);if(!(!Ge||!(O=Ge.events))){for(l=(l||"").match($)||[""],X=l.length;X--;){if(k=ie.exec(l[X])||[],ue=at=k[1],Ve=(k[2]||"").split(".").sort(),!ue){for(ue in O)u.event.remove(s,ue+l[X],h,p,!0);continue}for(xe=u.event.special[ue]||{},ue=(p?xe.delegateType:xe.bindType)||ue,K=O[ue]||[],k=k[2]&&new RegExp("(^|\\.)"+Ve.join("\\.(?:.*\\.|)")+"(\\.|$)"),T=S=K.length;S--;)ne=K[S],(M||at===ne.origType)&&(!h||h.guid===ne.guid)&&(!k||k.test(ne.namespace))&&(!p||p===ne.selector||p==="**"&&ne.selector)&&(K.splice(S,1),ne.selector&&K.delegateCount--,xe.remove&&xe.remove.call(s,ne));T&&!K.length&&((!xe.teardown||xe.teardown.call(s,Ve,Ge.handle)===!1)&&u.removeEvent(s,ue,Ge.handle),delete O[ue])}u.isEmptyObject(O)&&Se.remove(s,"handle events")}},dispatch:function(s){var l,h,p,M,S,T,k=new Array(arguments.length),O=u.event.fix(s),X=(Se.get(this,"events")||Object.create(null))[O.type]||[],ne=u.event.special[O.type]||{};for(k[0]=O,l=1;l<arguments.length;l++)k[l]=arguments[l];if(O.delegateTarget=this,!(ne.preDispatch&&ne.preDispatch.call(this,O)===!1)){for(T=u.event.handlers.call(this,O,X),l=0;(M=T[l++])&&!O.isPropagationStopped();)for(O.currentTarget=M.elem,h=0;(S=M.handlers[h++])&&!O.isImmediatePropagationStopped();)(!O.rnamespace||S.namespace===!1||O.rnamespace.test(S.namespace))&&(O.handleObj=S,O.data=S.data,p=((u.event.special[S.origType]||{}).handle||S.handler).apply(M.elem,k),p!==void 0&&(O.result=p)===!1&&(O.preventDefault(),O.stopPropagation()));return ne.postDispatch&&ne.postDispatch.call(this,O),O.result}},handlers:function(s,l){var h,p,M,S,T,k=[],O=l.delegateCount,X=s.target;if(O&&X.nodeType&&!(s.type==="click"&&s.button>=1)){for(;X!==this;X=X.parentNode||this)if(X.nodeType===1&&!(s.type==="click"&&X.disabled===!0)){for(S=[],T={},h=0;h<O;h++)p=l[h],M=p.selector+" ",T[M]===void 0&&(T[M]=p.needsContext?u(M,this).index(X)>-1:u.find(M,this,null,[X]).length),T[M]&&S.push(p);S.length&&k.push({elem:X,handlers:S})}}return X=this,O<l.length&&k.push({elem:X,handlers:l.slice(O)}),k},addProp:function(s,l){Object.defineProperty(u.Event.prototype,s,{enumerable:!0,configurable:!0,get:b(l)?function(){if(this.originalEvent)return l(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[s]},set:function(h){Object.defineProperty(this,s,{enumerable:!0,configurable:!0,writable:!0,value:h})}})},fix:function(s){return s[u.expando]?s:new u.Event(s)},special:{load:{noBubble:!0},click:{setup:function(s){var l=this||s;return me.test(l.type)&&l.click&&oe(l,"input")&&nn(l,"click",Me),!1},trigger:function(s){var l=this||s;return me.test(l.type)&&l.click&&oe(l,"input")&&nn(l,"click"),!0},_default:function(s){var l=s.target;return me.test(l.type)&&l.click&&oe(l,"input")&&Se.get(l,"click")||oe(l,"a")}},beforeunload:{postDispatch:function(s){s.result!==void 0&&s.originalEvent&&(s.originalEvent.returnValue=s.result)}}}};function nn(s,l,h){if(!h){Se.get(s,l)===void 0&&u.event.add(s,l,Me);return}Se.set(s,l,!1),u.event.add(s,l,{namespace:!1,handler:function(p){var M,S,T=Se.get(this,l);if(p.isTrigger&1&&this[l]){if(T.length)(u.event.special[l]||{}).delegateType&&p.stopPropagation();else if(T=o.call(arguments),Se.set(this,l,T),M=h(this,l),this[l](),S=Se.get(this,l),T!==S||M?Se.set(this,l,!1):S={},T!==S)return p.stopImmediatePropagation(),p.preventDefault(),S&&S.value}else T.length&&(Se.set(this,l,{value:u.event.trigger(u.extend(T[0],u.Event.prototype),T.slice(1),this)}),p.stopImmediatePropagation())}})}u.removeEvent=function(s,l,h){s.removeEventListener&&s.removeEventListener(l,h)},u.Event=function(s,l){if(!(this instanceof u.Event))return new u.Event(s,l);s&&s.type?(this.originalEvent=s,this.type=s.type,this.isDefaultPrevented=s.defaultPrevented||s.defaultPrevented===void 0&&s.returnValue===!1?Me:we,this.target=s.target&&s.target.nodeType===3?s.target.parentNode:s.target,this.currentTarget=s.currentTarget,this.relatedTarget=s.relatedTarget):this.type=s,l&&u.extend(this,l),this.timeStamp=s&&s.timeStamp||Date.now(),this[u.expando]=!0},u.Event.prototype={constructor:u.Event,isDefaultPrevented:we,isPropagationStopped:we,isImmediatePropagationStopped:we,isSimulated:!1,preventDefault:function(){var s=this.originalEvent;this.isDefaultPrevented=Me,s&&!this.isSimulated&&s.preventDefault()},stopPropagation:function(){var s=this.originalEvent;this.isPropagationStopped=Me,s&&!this.isSimulated&&s.stopPropagation()},stopImmediatePropagation:function(){var s=this.originalEvent;this.isImmediatePropagationStopped=Me,s&&!this.isSimulated&&s.stopImmediatePropagation(),this.stopPropagation()}},u.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},u.event.addProp),u.each({focus:"focusin",blur:"focusout"},function(s,l){u.event.special[s]={setup:function(){return nn(this,s,mt),!1},trigger:function(){return nn(this,s),!0},_default:function(h){return Se.get(h.target,s)},delegateType:l}}),u.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(s,l){u.event.special[s]={delegateType:l,bindType:l,handle:function(h){var p,M=this,S=h.relatedTarget,T=h.handleObj;return(!S||S!==M&&!u.contains(M,S))&&(h.type=T.origType,p=T.handler.apply(this,arguments),h.type=l),p}}}),u.fn.extend({on:function(s,l,h,p){return bt(this,s,l,h,p)},one:function(s,l,h,p){return bt(this,s,l,h,p,1)},off:function(s,l,h){var p,M;if(s&&s.preventDefault&&s.handleObj)return p=s.handleObj,u(s.delegateTarget).off(p.namespace?p.origType+"."+p.namespace:p.origType,p.selector,p.handler),this;if(typeof s=="object"){for(M in s)this.off(M,l,s[M]);return this}return(l===!1||typeof l=="function")&&(h=l,l=void 0),h===!1&&(h=we),this.each(function(){u.event.remove(this,s,h,l)})}});var At=/<script|<style|<link/i,On=/checked\s*(?:[^=]|=\s*.checked.)/i,an=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function es(s,l){return oe(s,"table")&&oe(l.nodeType!==11?l:l.firstChild,"tr")&&u(s).children("tbody")[0]||s}function Fs(s){return s.type=(s.getAttribute("type")!==null)+"/"+s.type,s}function Ho(s){return(s.type||"").slice(0,5)==="true/"?s.type=s.type.slice(5):s.removeAttribute("type"),s}function Wi(s,l){var h,p,M,S,T,k,O;if(l.nodeType===1){if(Se.hasData(s)&&(S=Se.get(s),O=S.events,O)){Se.remove(l,"handle events");for(M in O)for(h=0,p=O[M].length;h<p;h++)u.event.add(l,M,O[M][h])}ht.hasData(s)&&(T=ht.access(s),k=u.extend({},T),ht.set(l,k))}}function Os(s,l){var h=l.nodeName.toLowerCase();h==="input"&&me.test(s.type)?l.checked=s.checked:(h==="input"||h==="textarea")&&(l.defaultValue=s.defaultValue)}function Wn(s,l,h,p){l=a(l);var M,S,T,k,O,X,ne=0,xe=s.length,K=xe-1,ue=l[0],Ve=b(ue);if(Ve||xe>1&&typeof ue=="string"&&!E.checkClone&&On.test(ue))return s.each(function(at){var Ge=s.eq(at);Ve&&(l[0]=ue.call(this,at,Ge.html())),Wn(Ge,l,h,p)});if(xe&&(M=De(l,s[0].ownerDocument,!1,s,p),S=M.firstChild,M.childNodes.length===1&&(M=S),S||p)){for(T=u.map(ke(M,"script"),Fs),k=T.length;ne<xe;ne++)O=M,ne!==K&&(O=u.clone(O,!0,!0),k&&u.merge(T,ke(O,"script"))),h.call(s[ne],O,ne);if(k)for(X=T[T.length-1].ownerDocument,u.map(T,Ho),ne=0;ne<k;ne++)O=T[ne],Re.test(O.type||"")&&!Se.access(O,"globalEval")&&u.contains(X,O)&&(O.src&&(O.type||"").toLowerCase()!=="module"?u._evalUrl&&!O.noModule&&u._evalUrl(O.src,{nonce:O.nonce||O.getAttribute("nonce")},X):w(O.textContent.replace(an,""),O,X))}return s}function ts(s,l,h){for(var p,M=l?u.filter(l,s):s,S=0;(p=M[S])!=null;S++)!h&&p.nodeType===1&&u.cleanData(ke(p)),p.parentNode&&(h&&be(p)&&pt(ke(p,"script")),p.parentNode.removeChild(p));return s}u.extend({htmlPrefilter:function(s){return s},clone:function(s,l,h){var p,M,S,T,k=s.cloneNode(!0),O=be(s);if(!E.noCloneChecked&&(s.nodeType===1||s.nodeType===11)&&!u.isXMLDoc(s))for(T=ke(k),S=ke(s),p=0,M=S.length;p<M;p++)Os(S[p],T[p]);if(l)if(h)for(S=S||ke(s),T=T||ke(k),p=0,M=S.length;p<M;p++)Wi(S[p],T[p]);else Wi(s,k);return T=ke(k,"script"),T.length>0&&pt(T,!O&&ke(s,"script")),k},cleanData:function(s){for(var l,h,p,M=u.event.special,S=0;(h=s[S])!==void 0;S++)if(We(h)){if(l=h[Se.expando]){if(l.events)for(p in l.events)M[p]?u.event.remove(h,p):u.removeEvent(h,p,l.handle);h[Se.expando]=void 0}h[ht.expando]&&(h[ht.expando]=void 0)}}}),u.fn.extend({detach:function(s){return ts(this,s,!0)},remove:function(s){return ts(this,s)},text:function(s){return lt(this,function(l){return l===void 0?u.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=l)})},null,s,arguments.length)},append:function(){return Wn(this,arguments,function(s){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var l=es(this,s);l.appendChild(s)}})},prepend:function(){return Wn(this,arguments,function(s){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var l=es(this,s);l.insertBefore(s,l.firstChild)}})},before:function(){return Wn(this,arguments,function(s){this.parentNode&&this.parentNode.insertBefore(s,this)})},after:function(){return Wn(this,arguments,function(s){this.parentNode&&this.parentNode.insertBefore(s,this.nextSibling)})},empty:function(){for(var s,l=0;(s=this[l])!=null;l++)s.nodeType===1&&(u.cleanData(ke(s,!1)),s.textContent="");return this},clone:function(s,l){return s=s??!1,l=l??s,this.map(function(){return u.clone(this,s,l)})},html:function(s){return lt(this,function(l){var h=this[0]||{},p=0,M=this.length;if(l===void 0&&h.nodeType===1)return h.innerHTML;if(typeof l=="string"&&!At.test(l)&&!Ce[(Ne.exec(l)||["",""])[1].toLowerCase()]){l=u.htmlPrefilter(l);try{for(;p<M;p++)h=this[p]||{},h.nodeType===1&&(u.cleanData(ke(h,!1)),h.innerHTML=l);h=0}catch{}}h&&this.empty().append(l)},null,s,arguments.length)},replaceWith:function(){var s=[];return Wn(this,arguments,function(l){var h=this.parentNode;u.inArray(this,s)<0&&(u.cleanData(ke(this)),h&&h.replaceChild(l,this))},s)}}),u.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(s,l){u.fn[s]=function(h){for(var p,M=[],S=u(h),T=S.length-1,k=0;k<=T;k++)p=k===T?this:this.clone(!0),u(S[k])[l](p),c.apply(M,p.get());return this.pushStack(M)}});var ns=new RegExp("^("+Xt+")(?!px)[a-z%]+$","i"),is=/^--/,xr=function(s){var l=s.ownerDocument.defaultView;return(!l||!l.opener)&&(l=e),l.getComputedStyle(s)},D=function(s,l,h){var p,M,S={};for(M in l)S[M]=s.style[M],s.style[M]=l[M];p=h.call(s);for(M in l)s.style[M]=S[M];return p},j=new RegExp(C.join("|"),"i"),ce="[\\x20\\t\\r\\n\\f]",ee=new RegExp("^"+ce+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ce+"+$","g");(function(){function s(){if(X){O.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",X.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",Q.appendChild(O).appendChild(X);var ne=e.getComputedStyle(X);h=ne.top!=="1%",k=l(ne.marginLeft)===12,X.style.right="60%",S=l(ne.right)===36,p=l(ne.width)===36,X.style.position="absolute",M=l(X.offsetWidth/3)===12,Q.removeChild(O),X=null}}function l(ne){return Math.round(parseFloat(ne))}var h,p,M,S,T,k,O=g.createElement("div"),X=g.createElement("div");X.style&&(X.style.backgroundClip="content-box",X.cloneNode(!0).style.backgroundClip="",E.clearCloneStyle=X.style.backgroundClip==="content-box",u.extend(E,{boxSizingReliable:function(){return s(),p},pixelBoxStyles:function(){return s(),S},pixelPosition:function(){return s(),h},reliableMarginLeft:function(){return s(),k},scrollboxSize:function(){return s(),M},reliableTrDimensions:function(){var ne,xe,K,ue;return T==null&&(ne=g.createElement("table"),xe=g.createElement("tr"),K=g.createElement("div"),ne.style.cssText="position:absolute;left:-11111px;border-collapse:separate",xe.style.cssText="border:1px solid",xe.style.height="1px",K.style.height="9px",K.style.display="block",Q.appendChild(ne).appendChild(xe).appendChild(K),ue=e.getComputedStyle(xe),T=parseInt(ue.height,10)+parseInt(ue.borderTopWidth,10)+parseInt(ue.borderBottomWidth,10)===xe.offsetHeight,Q.removeChild(ne)),T}}))})();function ae(s,l,h){var p,M,S,T,k=is.test(l),O=s.style;return h=h||xr(s),h&&(T=h.getPropertyValue(l)||h[l],k&&T&&(T=T.replace(ee,"$1")||void 0),T===""&&!be(s)&&(T=u.style(s,l)),!E.pixelBoxStyles()&&ns.test(T)&&j.test(l)&&(p=O.width,M=O.minWidth,S=O.maxWidth,O.minWidth=O.maxWidth=O.width=T,T=h.width,O.width=p,O.minWidth=M,O.maxWidth=S)),T!==void 0?T+"":T}function ze(s,l){return{get:function(){if(s()){delete this.get;return}return(this.get=l).apply(this,arguments)}}}var qe=["Webkit","Moz","ms"],it=g.createElement("div").style,rt={};function gt(s){for(var l=s[0].toUpperCase()+s.slice(1),h=qe.length;h--;)if(s=qe[h]+l,s in it)return s}function Qe(s){var l=u.cssProps[s]||rt[s];return l||(s in it?s:rt[s]=gt(s)||s)}var ut=/^(none|table(?!-c[ea]).+)/,Ut={position:"absolute",visibility:"hidden",display:"block"},Nt={letterSpacing:"0",fontWeight:"400"};function mn(s,l,h){var p=U.exec(l);return p?Math.max(0,p[2]-(h||0))+(p[3]||"px"):l}function An(s,l,h,p,M,S){var T=l==="width"?1:0,k=0,O=0;if(h===(p?"border":"content"))return 0;for(;T<4;T+=2)h==="margin"&&(O+=u.css(s,h+C[T],!0,M)),p?(h==="content"&&(O-=u.css(s,"padding"+C[T],!0,M)),h!=="margin"&&(O-=u.css(s,"border"+C[T]+"Width",!0,M))):(O+=u.css(s,"padding"+C[T],!0,M),h!=="padding"?O+=u.css(s,"border"+C[T]+"Width",!0,M):k+=u.css(s,"border"+C[T]+"Width",!0,M));return!p&&S>=0&&(O+=Math.max(0,Math.ceil(s["offset"+l[0].toUpperCase()+l.slice(1)]-S-O-k-.5))||0),O}function Ht(s,l,h){var p=xr(s),M=!E.boxSizingReliable()||h,S=M&&u.css(s,"boxSizing",!1,p)==="border-box",T=S,k=ae(s,l,p),O="offset"+l[0].toUpperCase()+l.slice(1);if(ns.test(k)){if(!h)return k;k="auto"}return(!E.boxSizingReliable()&&S||!E.reliableTrDimensions()&&oe(s,"tr")||k==="auto"||!parseFloat(k)&&u.css(s,"display",!1,p)==="inline")&&s.getClientRects().length&&(S=u.css(s,"boxSizing",!1,p)==="border-box",T=O in s,T&&(k=s[O])),k=parseFloat(k)||0,k+An(s,l,h||(S?"border":"content"),T,p,k)+"px"}u.extend({cssHooks:{opacity:{get:function(s,l){if(l){var h=ae(s,"opacity");return h===""?"1":h}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(s,l,h,p){if(!(!s||s.nodeType===3||s.nodeType===8||!s.style)){var M,S,T,k=Et(l),O=is.test(l),X=s.style;if(O||(l=Qe(k)),T=u.cssHooks[l]||u.cssHooks[k],h!==void 0){if(S=typeof h,S==="string"&&(M=U.exec(h))&&M[1]&&(h=He(s,l,M),S="number"),h==null||h!==h)return;S==="number"&&!O&&(h+=M&&M[3]||(u.cssNumber[k]?"":"px")),!E.clearCloneStyle&&h===""&&l.indexOf("background")===0&&(X[l]="inherit"),(!T||!("set"in T)||(h=T.set(s,h,p))!==void 0)&&(O?X.setProperty(l,h):X[l]=h)}else return T&&"get"in T&&(M=T.get(s,!1,p))!==void 0?M:X[l]}},css:function(s,l,h,p){var M,S,T,k=Et(l),O=is.test(l);return O||(l=Qe(k)),T=u.cssHooks[l]||u.cssHooks[k],T&&"get"in T&&(M=T.get(s,!0,h)),M===void 0&&(M=ae(s,l,p)),M==="normal"&&l in Nt&&(M=Nt[l]),h===""||h?(S=parseFloat(M),h===!0||isFinite(S)?S||0:M):M}}),u.each(["height","width"],function(s,l){u.cssHooks[l]={get:function(h,p,M){if(p)return ut.test(u.css(h,"display"))&&(!h.getClientRects().length||!h.getBoundingClientRect().width)?D(h,Ut,function(){return Ht(h,l,M)}):Ht(h,l,M)},set:function(h,p,M){var S,T=xr(h),k=!E.scrollboxSize()&&T.position==="absolute",O=k||M,X=O&&u.css(h,"boxSizing",!1,T)==="border-box",ne=M?An(h,l,M,X,T):0;return X&&k&&(ne-=Math.ceil(h["offset"+l[0].toUpperCase()+l.slice(1)]-parseFloat(T[l])-An(h,l,"border",!1,T)-.5)),ne&&(S=U.exec(p))&&(S[3]||"px")!=="px"&&(h.style[l]=p,p=u.css(h,l)),mn(h,p,ne)}}}),u.cssHooks.marginLeft=ze(E.reliableMarginLeft,function(s,l){if(l)return(parseFloat(ae(s,"marginLeft"))||s.getBoundingClientRect().left-D(s,{marginLeft:0},function(){return s.getBoundingClientRect().left}))+"px"}),u.each({margin:"",padding:"",border:"Width"},function(s,l){u.cssHooks[s+l]={expand:function(h){for(var p=0,M={},S=typeof h=="string"?h.split(" "):[h];p<4;p++)M[s+C[p]+l]=S[p]||S[p-2]||S[0];return M}},s!=="margin"&&(u.cssHooks[s+l].set=mn)}),u.fn.extend({css:function(s,l){return lt(this,function(h,p,M){var S,T,k={},O=0;if(Array.isArray(p)){for(S=xr(h),T=p.length;O<T;O++)k[p[O]]=u.css(h,p[O],!1,S);return k}return M!==void 0?u.style(h,p,M):u.css(h,p)},s,l,arguments.length>1)}});function $e(s,l,h,p,M){return new $e.prototype.init(s,l,h,p,M)}u.Tween=$e,$e.prototype={constructor:$e,init:function(s,l,h,p,M,S){this.elem=s,this.prop=h,this.easing=M||u.easing._default,this.options=l,this.start=this.now=this.cur(),this.end=p,this.unit=S||(u.cssNumber[h]?"":"px")},cur:function(){var s=$e.propHooks[this.prop];return s&&s.get?s.get(this):$e.propHooks._default.get(this)},run:function(s){var l,h=$e.propHooks[this.prop];return this.options.duration?this.pos=l=u.easing[this.easing](s,this.options.duration*s,0,1,this.options.duration):this.pos=l=s,this.now=(this.end-this.start)*l+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),h&&h.set?h.set(this):$e.propHooks._default.set(this),this}},$e.prototype.init.prototype=$e.prototype,$e.propHooks={_default:{get:function(s){var l;return s.elem.nodeType!==1||s.elem[s.prop]!=null&&s.elem.style[s.prop]==null?s.elem[s.prop]:(l=u.css(s.elem,s.prop,""),!l||l==="auto"?0:l)},set:function(s){u.fx.step[s.prop]?u.fx.step[s.prop](s):s.elem.nodeType===1&&(u.cssHooks[s.prop]||s.elem.style[Qe(s.prop)]!=null)?u.style(s.elem,s.prop,s.now+s.unit):s.elem[s.prop]=s.now}}},$e.propHooks.scrollTop=$e.propHooks.scrollLeft={set:function(s){s.elem.nodeType&&s.elem.parentNode&&(s.elem[s.prop]=s.now)}},u.easing={linear:function(s){return s},swing:function(s){return .5-Math.cos(s*Math.PI)/2},_default:"swing"},u.fx=$e.prototype.init,u.fx.step={};var ti,Dt,hi=/^(?:toggle|show|hide)$/,Bs=/queueHooks$/;function di(){Dt&&(g.hidden===!1&&e.requestAnimationFrame?e.requestAnimationFrame(di):e.setTimeout(di,u.fx.interval),u.fx.tick())}function yr(){return e.setTimeout(function(){ti=void 0}),ti=Date.now()}function jt(s,l){var h,p=0,M={height:s};for(l=l?1:0;p<4;p+=2-l)h=C[p],M["margin"+h]=M["padding"+h]=s;return l&&(M.opacity=M.width=s),M}function ni(s,l,h){for(var p,M=(_n.tweeners[l]||[]).concat(_n.tweeners["*"]),S=0,T=M.length;S<T;S++)if(p=M[S].call(h,l,s))return p}function rs(s,l,h){var p,M,S,T,k,O,X,ne,xe="width"in l||"height"in l,K=this,ue={},Ve=s.style,at=s.nodeType&&Te(s),Ge=Se.get(s,"fxshow");h.queue||(T=u._queueHooks(s,"fx"),T.unqueued==null&&(T.unqueued=0,k=T.empty.fire,T.empty.fire=function(){T.unqueued||k()}),T.unqueued++,K.always(function(){K.always(function(){T.unqueued--,u.queue(s,"fx").length||T.empty.fire()})}));for(p in l)if(M=l[p],hi.test(M)){if(delete l[p],S=S||M==="toggle",M===(at?"hide":"show"))if(M==="show"&&Ge&&Ge[p]!==void 0)at=!0;else continue;ue[p]=Ge&&Ge[p]||u.style(s,p)}if(O=!u.isEmptyObject(l),!(!O&&u.isEmptyObject(ue))){xe&&s.nodeType===1&&(h.overflow=[Ve.overflow,Ve.overflowX,Ve.overflowY],X=Ge&&Ge.display,X==null&&(X=Se.get(s,"display")),ne=u.css(s,"display"),ne==="none"&&(X?ne=X:(H([s],!0),X=s.style.display||X,ne=u.css(s,"display"),H([s]))),(ne==="inline"||ne==="inline-block"&&X!=null)&&u.css(s,"float")==="none"&&(O||(K.done(function(){Ve.display=X}),X==null&&(ne=Ve.display,X=ne==="none"?"":ne)),Ve.display="inline-block")),h.overflow&&(Ve.overflow="hidden",K.always(function(){Ve.overflow=h.overflow[0],Ve.overflowX=h.overflow[1],Ve.overflowY=h.overflow[2]})),O=!1;for(p in ue)O||(Ge?"hidden"in Ge&&(at=Ge.hidden):Ge=Se.access(s,"fxshow",{display:X}),S&&(Ge.hidden=!at),at&&H([s],!0),K.done(function(){at||H([s]),Se.remove(s,"fxshow");for(p in ue)u.style(s,p,ue[p])})),O=ni(at?Ge[p]:0,p,K),p in Ge||(Ge[p]=O.start,at&&(O.end=O.start,O.start=0))}}function gn(s,l){var h,p,M,S,T;for(h in s)if(p=Et(h),M=l[p],S=s[h],Array.isArray(S)&&(M=S[1],S=s[h]=S[0]),h!==p&&(s[p]=S,delete s[h]),T=u.cssHooks[p],T&&"expand"in T){S=T.expand(S),delete s[p];for(h in S)h in s||(s[h]=S[h],l[h]=M)}else l[p]=M}function _n(s,l,h){var p,M,S=0,T=_n.prefilters.length,k=u.Deferred().always(function(){delete O.elem}),O=function(){if(M)return!1;for(var xe=ti||yr(),K=Math.max(0,X.startTime+X.duration-xe),ue=K/X.duration||0,Ve=1-ue,at=0,Ge=X.tweens.length;at<Ge;at++)X.tweens[at].run(Ve);return k.notifyWith(s,[X,Ve,K]),Ve<1&&Ge?K:(Ge||k.notifyWith(s,[X,1,0]),k.resolveWith(s,[X]),!1)},X=k.promise({elem:s,props:u.extend({},l),opts:u.extend(!0,{specialEasing:{},easing:u.easing._default},h),originalProperties:l,originalOptions:h,startTime:ti||yr(),duration:h.duration,tweens:[],createTween:function(xe,K){var ue=u.Tween(s,X.opts,xe,K,X.opts.specialEasing[xe]||X.opts.easing);return X.tweens.push(ue),ue},stop:function(xe){var K=0,ue=xe?X.tweens.length:0;if(M)return this;for(M=!0;K<ue;K++)X.tweens[K].run(1);return xe?(k.notifyWith(s,[X,1,0]),k.resolveWith(s,[X,xe])):k.rejectWith(s,[X,xe]),this}}),ne=X.props;for(gn(ne,X.opts.specialEasing);S<T;S++)if(p=_n.prefilters[S].call(X,s,ne,X.opts),p)return b(p.stop)&&(u._queueHooks(X.elem,X.opts.queue).stop=p.stop.bind(p)),p;return u.map(ne,ni,X),b(X.opts.start)&&X.opts.start.call(s,X),X.progress(X.opts.progress).done(X.opts.done,X.opts.complete).fail(X.opts.fail).always(X.opts.always),u.fx.timer(u.extend(O,{elem:s,anim:X,queue:X.opts.queue})),X}u.Animation=u.extend(_n,{tweeners:{"*":[function(s,l){var h=this.createTween(s,l);return He(h.elem,s,U.exec(l),h),h}]},tweener:function(s,l){b(s)?(l=s,s=["*"]):s=s.match($);for(var h,p=0,M=s.length;p<M;p++)h=s[p],_n.tweeners[h]=_n.tweeners[h]||[],_n.tweeners[h].unshift(l)},prefilters:[rs],prefilter:function(s,l){l?_n.prefilters.unshift(s):_n.prefilters.push(s)}}),u.speed=function(s,l,h){var p=s&&typeof s=="object"?u.extend({},s):{complete:h||!h&&l||b(s)&&s,duration:s,easing:h&&l||l&&!b(l)&&l};return u.fx.off?p.duration=0:typeof p.duration!="number"&&(p.duration in u.fx.speeds?p.duration=u.fx.speeds[p.duration]:p.duration=u.fx.speeds._default),(p.queue==null||p.queue===!0)&&(p.queue="fx"),p.old=p.complete,p.complete=function(){b(p.old)&&p.old.call(this),p.queue&&u.dequeue(this,p.queue)},p},u.fn.extend({fadeTo:function(s,l,h,p){return this.filter(Te).css("opacity",0).show().end().animate({opacity:l},s,h,p)},animate:function(s,l,h,p){var M=u.isEmptyObject(s),S=u.speed(l,h,p),T=function(){var k=_n(this,u.extend({},s),S);(M||Se.get(this,"finish"))&&k.stop(!0)};return T.finish=T,M||S.queue===!1?this.each(T):this.queue(S.queue,T)},stop:function(s,l,h){var p=function(M){var S=M.stop;delete M.stop,S(h)};return typeof s!="string"&&(h=l,l=s,s=void 0),l&&this.queue(s||"fx",[]),this.each(function(){var M=!0,S=s!=null&&s+"queueHooks",T=u.timers,k=Se.get(this);if(S)k[S]&&k[S].stop&&p(k[S]);else for(S in k)k[S]&&k[S].stop&&Bs.test(S)&&p(k[S]);for(S=T.length;S--;)T[S].elem===this&&(s==null||T[S].queue===s)&&(T[S].anim.stop(h),M=!1,T.splice(S,1));(M||!h)&&u.dequeue(this,s)})},finish:function(s){return s!==!1&&(s=s||"fx"),this.each(function(){var l,h=Se.get(this),p=h[s+"queue"],M=h[s+"queueHooks"],S=u.timers,T=p?p.length:0;for(h.finish=!0,u.queue(this,s,[]),M&&M.stop&&M.stop.call(this,!0),l=S.length;l--;)S[l].elem===this&&S[l].queue===s&&(S[l].anim.stop(!0),S.splice(l,1));for(l=0;l<T;l++)p[l]&&p[l].finish&&p[l].finish.call(this);delete h.finish})}}),u.each(["toggle","show","hide"],function(s,l){var h=u.fn[l];u.fn[l]=function(p,M,S){return p==null||typeof p=="boolean"?h.apply(this,arguments):this.animate(jt(l,!0),p,M,S)}}),u.each({slideDown:jt("show"),slideUp:jt("hide"),slideToggle:jt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(s,l){u.fn[s]=function(h,p,M){return this.animate(l,h,p,M)}}),u.timers=[],u.fx.tick=function(){var s,l=0,h=u.timers;for(ti=Date.now();l<h.length;l++)s=h[l],!s()&&h[l]===s&&h.splice(l--,1);h.length||u.fx.stop(),ti=void 0},u.fx.timer=function(s){u.timers.push(s),u.fx.start()},u.fx.interval=13,u.fx.start=function(){Dt||(Dt=!0,di())},u.fx.stop=function(){Dt=null},u.fx.speeds={slow:600,fast:200,_default:400},u.fn.delay=function(s,l){return s=u.fx&&u.fx.speeds[s]||s,l=l||"fx",this.queue(l,function(h,p){var M=e.setTimeout(h,s);p.stop=function(){e.clearTimeout(M)}})},function(){var s=g.createElement("input"),l=g.createElement("select"),h=l.appendChild(g.createElement("option"));s.type="checkbox",E.checkOn=s.value!=="",E.optSelected=h.selected,s=g.createElement("input"),s.value="t",s.type="radio",E.radioValue=s.value==="t"}();var zs,wi=u.expr.attrHandle;u.fn.extend({attr:function(s,l){return lt(this,u.attr,s,l,arguments.length>1)},removeAttr:function(s){return this.each(function(){u.removeAttr(this,s)})}}),u.extend({attr:function(s,l,h){var p,M,S=s.nodeType;if(!(S===3||S===8||S===2)){if(typeof s.getAttribute>"u")return u.prop(s,l,h);if((S!==1||!u.isXMLDoc(s))&&(M=u.attrHooks[l.toLowerCase()]||(u.expr.match.bool.test(l)?zs:void 0)),h!==void 0){if(h===null){u.removeAttr(s,l);return}return M&&"set"in M&&(p=M.set(s,h,l))!==void 0?p:(s.setAttribute(l,h+""),h)}return M&&"get"in M&&(p=M.get(s,l))!==null?p:(p=u.find.attr(s,l),p??void 0)}},attrHooks:{type:{set:function(s,l){if(!E.radioValue&&l==="radio"&&oe(s,"input")){var h=s.value;return s.setAttribute("type",l),h&&(s.value=h),l}}}},removeAttr:function(s,l){var h,p=0,M=l&&l.match($);if(M&&s.nodeType===1)for(;h=M[p++];)s.removeAttribute(h)}}),zs={set:function(s,l,h){return l===!1?u.removeAttr(s,h):s.setAttribute(h,h),h}},u.each(u.expr.match.bool.source.match(/\w+/g),function(s,l){var h=wi[l]||u.find.attr;wi[l]=function(p,M,S){var T,k,O=M.toLowerCase();return S||(k=wi[O],wi[O]=T,T=h(p,M,S)!=null?O:null,wi[O]=k),T}});var dh=/^(?:input|select|textarea|button)$/i,fh=/^(?:a|area)$/i;u.fn.extend({prop:function(s,l){return lt(this,u.prop,s,l,arguments.length>1)},removeProp:function(s){return this.each(function(){delete this[u.propFix[s]||s]})}}),u.extend({prop:function(s,l,h){var p,M,S=s.nodeType;if(!(S===3||S===8||S===2))return(S!==1||!u.isXMLDoc(s))&&(l=u.propFix[l]||l,M=u.propHooks[l]),h!==void 0?M&&"set"in M&&(p=M.set(s,h,l))!==void 0?p:s[l]=h:M&&"get"in M&&(p=M.get(s,l))!==null?p:s[l]},propHooks:{tabIndex:{get:function(s){var l=u.find.attr(s,"tabindex");return l?parseInt(l,10):dh.test(s.nodeName)||fh.test(s.nodeName)&&s.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),E.optSelected||(u.propHooks.selected={get:function(s){var l=s.parentNode;return l&&l.parentNode&&l.parentNode.selectedIndex,null},set:function(s){var l=s.parentNode;l&&(l.selectedIndex,l.parentNode&&l.parentNode.selectedIndex)}}),u.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){u.propFix[this.toLowerCase()]=this});function Xi(s){var l=s.match($)||[];return l.join(" ")}function qi(s){return s.getAttribute&&s.getAttribute("class")||""}function ko(s){return Array.isArray(s)?s:typeof s=="string"?s.match($)||[]:[]}u.fn.extend({addClass:function(s){var l,h,p,M,S,T;return b(s)?this.each(function(k){u(this).addClass(s.call(this,k,qi(this)))}):(l=ko(s),l.length?this.each(function(){if(p=qi(this),h=this.nodeType===1&&" "+Xi(p)+" ",h){for(S=0;S<l.length;S++)M=l[S],h.indexOf(" "+M+" ")<0&&(h+=M+" ");T=Xi(h),p!==T&&this.setAttribute("class",T)}}):this)},removeClass:function(s){var l,h,p,M,S,T;return b(s)?this.each(function(k){u(this).removeClass(s.call(this,k,qi(this)))}):arguments.length?(l=ko(s),l.length?this.each(function(){if(p=qi(this),h=this.nodeType===1&&" "+Xi(p)+" ",h){for(S=0;S<l.length;S++)for(M=l[S];h.indexOf(" "+M+" ")>-1;)h=h.replace(" "+M+" "," ");T=Xi(h),p!==T&&this.setAttribute("class",T)}}):this):this.attr("class","")},toggleClass:function(s,l){var h,p,M,S,T=typeof s,k=T==="string"||Array.isArray(s);return b(s)?this.each(function(O){u(this).toggleClass(s.call(this,O,qi(this),l),l)}):typeof l=="boolean"&&k?l?this.addClass(s):this.removeClass(s):(h=ko(s),this.each(function(){if(k)for(S=u(this),M=0;M<h.length;M++)p=h[M],S.hasClass(p)?S.removeClass(p):S.addClass(p);else(s===void 0||T==="boolean")&&(p=qi(this),p&&Se.set(this,"__className__",p),this.setAttribute&&this.setAttribute("class",p||s===!1?"":Se.get(this,"__className__")||""))}))},hasClass:function(s){var l,h,p=0;for(l=" "+s+" ";h=this[p++];)if(h.nodeType===1&&(" "+Xi(qi(h))+" ").indexOf(l)>-1)return!0;return!1}});var ph=/\r/g;u.fn.extend({val:function(s){var l,h,p,M=this[0];return arguments.length?(p=b(s),this.each(function(S){var T;this.nodeType===1&&(p?T=s.call(this,S,u(this).val()):T=s,T==null?T="":typeof T=="number"?T+="":Array.isArray(T)&&(T=u.map(T,function(k){return k==null?"":k+""})),l=u.valHooks[this.type]||u.valHooks[this.nodeName.toLowerCase()],(!l||!("set"in l)||l.set(this,T,"value")===void 0)&&(this.value=T))})):M?(l=u.valHooks[M.type]||u.valHooks[M.nodeName.toLowerCase()],l&&"get"in l&&(h=l.get(M,"value"))!==void 0?h:(h=M.value,typeof h=="string"?h.replace(ph,""):h??"")):void 0}}),u.extend({valHooks:{option:{get:function(s){var l=u.find.attr(s,"value");return l??Xi(u.text(s))}},select:{get:function(s){var l,h,p,M=s.options,S=s.selectedIndex,T=s.type==="select-one",k=T?null:[],O=T?S+1:M.length;for(S<0?p=O:p=T?S:0;p<O;p++)if(h=M[p],(h.selected||p===S)&&!h.disabled&&(!h.parentNode.disabled||!oe(h.parentNode,"optgroup"))){if(l=u(h).val(),T)return l;k.push(l)}return k},set:function(s,l){for(var h,p,M=s.options,S=u.makeArray(l),T=M.length;T--;)p=M[T],(p.selected=u.inArray(u.valHooks.option.get(p),S)>-1)&&(h=!0);return h||(s.selectedIndex=-1),S}}}}),u.each(["radio","checkbox"],function(){u.valHooks[this]={set:function(s,l){if(Array.isArray(l))return s.checked=u.inArray(u(s).val(),l)>-1}},E.checkOn||(u.valHooks[this].get=function(s){return s.getAttribute("value")===null?"on":s.value})}),E.focusin="onfocusin"in e;var gl=/^(?:focusinfocus|focusoutblur)$/,_l=function(s){s.stopPropagation()};u.extend(u.event,{trigger:function(s,l,h,p){var M,S,T,k,O,X,ne,xe,K=[h||g],ue=v.call(s,"type")?s.type:s,Ve=v.call(s,"namespace")?s.namespace.split("."):[];if(S=xe=T=h=h||g,!(h.nodeType===3||h.nodeType===8)&&!gl.test(ue+u.event.triggered)&&(ue.indexOf(".")>-1&&(Ve=ue.split("."),ue=Ve.shift(),Ve.sort()),O=ue.indexOf(":")<0&&"on"+ue,s=s[u.expando]?s:new u.Event(ue,typeof s=="object"&&s),s.isTrigger=p?2:3,s.namespace=Ve.join("."),s.rnamespace=s.namespace?new RegExp("(^|\\.)"+Ve.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,s.result=void 0,s.target||(s.target=h),l=l==null?[s]:u.makeArray(l,[s]),ne=u.event.special[ue]||{},!(!p&&ne.trigger&&ne.trigger.apply(h,l)===!1))){if(!p&&!ne.noBubble&&!x(h)){for(k=ne.delegateType||ue,gl.test(k+ue)||(S=S.parentNode);S;S=S.parentNode)K.push(S),T=S;T===(h.ownerDocument||g)&&K.push(T.defaultView||T.parentWindow||e)}for(M=0;(S=K[M++])&&!s.isPropagationStopped();)xe=S,s.type=M>1?k:ne.bindType||ue,X=(Se.get(S,"events")||Object.create(null))[s.type]&&Se.get(S,"handle"),X&&X.apply(S,l),X=O&&S[O],X&&X.apply&&We(S)&&(s.result=X.apply(S,l),s.result===!1&&s.preventDefault());return s.type=ue,!p&&!s.isDefaultPrevented()&&(!ne._default||ne._default.apply(K.pop(),l)===!1)&&We(h)&&O&&b(h[ue])&&!x(h)&&(T=h[O],T&&(h[O]=null),u.event.triggered=ue,s.isPropagationStopped()&&xe.addEventListener(ue,_l),h[ue](),s.isPropagationStopped()&&xe.removeEventListener(ue,_l),u.event.triggered=void 0,T&&(h[O]=T)),s.result}},simulate:function(s,l,h){var p=u.extend(new u.Event,h,{type:s,isSimulated:!0});u.event.trigger(p,null,l)}}),u.fn.extend({trigger:function(s,l){return this.each(function(){u.event.trigger(s,l,this)})},triggerHandler:function(s,l){var h=this[0];if(h)return u.event.trigger(s,l,h,!0)}}),E.focusin||u.each({focus:"focusin",blur:"focusout"},function(s,l){var h=function(p){u.event.simulate(l,p.target,u.event.fix(p))};u.event.special[l]={setup:function(){var p=this.ownerDocument||this.document||this,M=Se.access(p,l);M||p.addEventListener(s,h,!0),Se.access(p,l,(M||0)+1)},teardown:function(){var p=this.ownerDocument||this.document||this,M=Se.access(p,l)-1;M?Se.access(p,l,M):(p.removeEventListener(s,h,!0),Se.remove(p,l))}}});var ss=e.location,vl={guid:Date.now()},Go=/\?/;u.parseXML=function(s){var l,h;if(!s||typeof s!="string")return null;try{l=new e.DOMParser().parseFromString(s,"text/xml")}catch{}return h=l&&l.getElementsByTagName("parsererror")[0],(!l||h)&&u.error("Invalid XML: "+(h?u.map(h.childNodes,function(p){return p.textContent}).join(`
`):s)),l};var mh=/\[\]$/,xl=/\r?\n/g,gh=/^(?:submit|button|image|reset|file)$/i,_h=/^(?:input|select|textarea|keygen)/i;function Vo(s,l,h,p){var M;if(Array.isArray(l))u.each(l,function(S,T){h||mh.test(s)?p(s,T):Vo(s+"["+(typeof T=="object"&&T!=null?S:"")+"]",T,h,p)});else if(!h&&L(l)==="object")for(M in l)Vo(s+"["+M+"]",l[M],h,p);else p(s,l)}u.param=function(s,l){var h,p=[],M=function(S,T){var k=b(T)?T():T;p[p.length]=encodeURIComponent(S)+"="+encodeURIComponent(k??"")};if(s==null)return"";if(Array.isArray(s)||s.jquery&&!u.isPlainObject(s))u.each(s,function(){M(this.name,this.value)});else for(h in s)Vo(h,s[h],l,M);return p.join("&")},u.fn.extend({serialize:function(){return u.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var s=u.prop(this,"elements");return s?u.makeArray(s):this}).filter(function(){var s=this.type;return this.name&&!u(this).is(":disabled")&&_h.test(this.nodeName)&&!gh.test(s)&&(this.checked||!me.test(s))}).map(function(s,l){var h=u(this).val();return h==null?null:Array.isArray(h)?u.map(h,function(p){return{name:l.name,value:p.replace(xl,`\r
`)}}):{name:l.name,value:h.replace(xl,`\r
`)}}).get()}});var vh=/%20/g,xh=/#.*$/,yh=/([?&])_=[^&]*/,Mh=/^(.*?):[ \t]*([^\r\n]*)$/mg,Sh=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Eh=/^(?:GET|HEAD)$/,bh=/^\/\//,yl={},Wo={},Ml="*/".concat("*"),Xo=g.createElement("a");Xo.href=ss.href;function Sl(s){return function(l,h){typeof l!="string"&&(h=l,l="*");var p,M=0,S=l.toLowerCase().match($)||[];if(b(h))for(;p=S[M++];)p[0]==="+"?(p=p.slice(1)||"*",(s[p]=s[p]||[]).unshift(h)):(s[p]=s[p]||[]).push(h)}}function El(s,l,h,p){var M={},S=s===Wo;function T(k){var O;return M[k]=!0,u.each(s[k]||[],function(X,ne){var xe=ne(l,h,p);if(typeof xe=="string"&&!S&&!M[xe])return l.dataTypes.unshift(xe),T(xe),!1;if(S)return!(O=xe)}),O}return T(l.dataTypes[0])||!M["*"]&&T("*")}function qo(s,l){var h,p,M=u.ajaxSettings.flatOptions||{};for(h in l)l[h]!==void 0&&((M[h]?s:p||(p={}))[h]=l[h]);return p&&u.extend(!0,s,p),s}function Th(s,l,h){for(var p,M,S,T,k=s.contents,O=s.dataTypes;O[0]==="*";)O.shift(),p===void 0&&(p=s.mimeType||l.getResponseHeader("Content-Type"));if(p){for(M in k)if(k[M]&&k[M].test(p)){O.unshift(M);break}}if(O[0]in h)S=O[0];else{for(M in h){if(!O[0]||s.converters[M+" "+O[0]]){S=M;break}T||(T=M)}S=S||T}if(S)return S!==O[0]&&O.unshift(S),h[S]}function wh(s,l,h,p){var M,S,T,k,O,X={},ne=s.dataTypes.slice();if(ne[1])for(T in s.converters)X[T.toLowerCase()]=s.converters[T];for(S=ne.shift();S;)if(s.responseFields[S]&&(h[s.responseFields[S]]=l),!O&&p&&s.dataFilter&&(l=s.dataFilter(l,s.dataType)),O=S,S=ne.shift(),S){if(S==="*")S=O;else if(O!=="*"&&O!==S){if(T=X[O+" "+S]||X["* "+S],!T){for(M in X)if(k=M.split(" "),k[1]===S&&(T=X[O+" "+k[0]]||X["* "+k[0]],T)){T===!0?T=X[M]:X[M]!==!0&&(S=k[0],ne.unshift(k[1]));break}}if(T!==!0)if(T&&s.throws)l=T(l);else try{l=T(l)}catch(xe){return{state:"parsererror",error:T?xe:"No conversion from "+O+" to "+S}}}}return{state:"success",data:l}}u.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ss.href,type:"GET",isLocal:Sh.test(ss.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Ml,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":u.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(s,l){return l?qo(qo(s,u.ajaxSettings),l):qo(u.ajaxSettings,s)},ajaxPrefilter:Sl(yl),ajaxTransport:Sl(Wo),ajax:function(s,l){typeof s=="object"&&(l=s,s=void 0),l=l||{};var h,p,M,S,T,k,O,X,ne,xe,K=u.ajaxSetup({},l),ue=K.context||K,Ve=K.context&&(ue.nodeType||ue.jquery)?u(ue):u.event,at=u.Deferred(),Ge=u.Callbacks("once memory"),Kt=K.statusCode||{},Yt={},Cn={},wt="canceled",st={readyState:0,getResponseHeader:function(yt){var kt;if(O){if(!S)for(S={};kt=Mh.exec(M);)S[kt[1].toLowerCase()+" "]=(S[kt[1].toLowerCase()+" "]||[]).concat(kt[2]);kt=S[yt.toLowerCase()+" "]}return kt==null?null:kt.join(", ")},getAllResponseHeaders:function(){return O?M:null},setRequestHeader:function(yt,kt){return O==null&&(yt=Cn[yt.toLowerCase()]=Cn[yt.toLowerCase()]||yt,Yt[yt]=kt),this},overrideMimeType:function(yt){return O==null&&(K.mimeType=yt),this},statusCode:function(yt){var kt;if(yt)if(O)st.always(yt[st.status]);else for(kt in yt)Kt[kt]=[Kt[kt],yt[kt]];return this},abort:function(yt){var kt=yt||wt;return h&&h.abort(kt),Mn(0,kt),this}};if(at.promise(st),K.url=((s||K.url||ss.href)+"").replace(bh,ss.protocol+"//"),K.type=l.method||l.type||K.method||K.type,K.dataTypes=(K.dataType||"*").toLowerCase().match($)||[""],K.crossDomain==null){k=g.createElement("a");try{k.href=K.url,k.href=k.href,K.crossDomain=Xo.protocol+"//"+Xo.host!=k.protocol+"//"+k.host}catch{K.crossDomain=!0}}if(K.data&&K.processData&&typeof K.data!="string"&&(K.data=u.param(K.data,K.traditional)),El(yl,K,l,st),O)return st;X=u.event&&K.global,X&&u.active++===0&&u.event.trigger("ajaxStart"),K.type=K.type.toUpperCase(),K.hasContent=!Eh.test(K.type),p=K.url.replace(xh,""),K.hasContent?K.data&&K.processData&&(K.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(K.data=K.data.replace(vh,"+")):(xe=K.url.slice(p.length),K.data&&(K.processData||typeof K.data=="string")&&(p+=(Go.test(p)?"&":"?")+K.data,delete K.data),K.cache===!1&&(p=p.replace(yh,"$1"),xe=(Go.test(p)?"&":"?")+"_="+vl.guid+++xe),K.url=p+xe),K.ifModified&&(u.lastModified[p]&&st.setRequestHeader("If-Modified-Since",u.lastModified[p]),u.etag[p]&&st.setRequestHeader("If-None-Match",u.etag[p])),(K.data&&K.hasContent&&K.contentType!==!1||l.contentType)&&st.setRequestHeader("Content-Type",K.contentType),st.setRequestHeader("Accept",K.dataTypes[0]&&K.accepts[K.dataTypes[0]]?K.accepts[K.dataTypes[0]]+(K.dataTypes[0]!=="*"?", "+Ml+"; q=0.01":""):K.accepts["*"]);for(ne in K.headers)st.setRequestHeader(ne,K.headers[ne]);if(K.beforeSend&&(K.beforeSend.call(ue,st,K)===!1||O))return st.abort();if(wt="abort",Ge.add(K.complete),st.done(K.success),st.fail(K.error),h=El(Wo,K,l,st),!h)Mn(-1,"No Transport");else{if(st.readyState=1,X&&Ve.trigger("ajaxSend",[st,K]),O)return st;K.async&&K.timeout>0&&(T=e.setTimeout(function(){st.abort("timeout")},K.timeout));try{O=!1,h.send(Yt,Mn)}catch(yt){if(O)throw yt;Mn(-1,yt)}}function Mn(yt,kt,as,Hs){var Rn,ji,Yi,Sn,Ai,Bn=kt;O||(O=!0,T&&e.clearTimeout(T),h=void 0,M=Hs||"",st.readyState=yt>0?4:0,Rn=yt>=200&&yt<300||yt===304,as&&(Sn=Th(K,st,as)),!Rn&&u.inArray("script",K.dataTypes)>-1&&u.inArray("json",K.dataTypes)<0&&(K.converters["text script"]=function(){}),Sn=wh(K,Sn,st,Rn),Rn?(K.ifModified&&(Ai=st.getResponseHeader("Last-Modified"),Ai&&(u.lastModified[p]=Ai),Ai=st.getResponseHeader("etag"),Ai&&(u.etag[p]=Ai)),yt===204||K.type==="HEAD"?Bn="nocontent":yt===304?Bn="notmodified":(Bn=Sn.state,ji=Sn.data,Yi=Sn.error,Rn=!Yi)):(Yi=Bn,(yt||!Bn)&&(Bn="error",yt<0&&(yt=0))),st.status=yt,st.statusText=(kt||Bn)+"",Rn?at.resolveWith(ue,[ji,Bn,st]):at.rejectWith(ue,[st,Bn,Yi]),st.statusCode(Kt),Kt=void 0,X&&Ve.trigger(Rn?"ajaxSuccess":"ajaxError",[st,K,Rn?ji:Yi]),Ge.fireWith(ue,[st,Bn]),X&&(Ve.trigger("ajaxComplete",[st,K]),--u.active||u.event.trigger("ajaxStop")))}return st},getJSON:function(s,l,h){return u.get(s,l,h,"json")},getScript:function(s,l){return u.get(s,void 0,l,"script")}}),u.each(["get","post"],function(s,l){u[l]=function(h,p,M,S){return b(p)&&(S=S||M,M=p,p=void 0),u.ajax(u.extend({url:h,type:l,dataType:S,data:p,success:M},u.isPlainObject(h)&&h))}}),u.ajaxPrefilter(function(s){var l;for(l in s.headers)l.toLowerCase()==="content-type"&&(s.contentType=s.headers[l]||"")}),u._evalUrl=function(s,l,h){return u.ajax({url:s,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(p){u.globalEval(p,l,h)}})},u.fn.extend({wrapAll:function(s){var l;return this[0]&&(b(s)&&(s=s.call(this[0])),l=u(s,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&l.insertBefore(this[0]),l.map(function(){for(var h=this;h.firstElementChild;)h=h.firstElementChild;return h}).append(this)),this},wrapInner:function(s){return b(s)?this.each(function(l){u(this).wrapInner(s.call(this,l))}):this.each(function(){var l=u(this),h=l.contents();h.length?h.wrapAll(s):l.append(s)})},wrap:function(s){var l=b(s);return this.each(function(h){u(this).wrapAll(l?s.call(this,h):s)})},unwrap:function(s){return this.parent(s).not("body").each(function(){u(this).replaceWith(this.childNodes)}),this}}),u.expr.pseudos.hidden=function(s){return!u.expr.pseudos.visible(s)},u.expr.pseudos.visible=function(s){return!!(s.offsetWidth||s.offsetHeight||s.getClientRects().length)},u.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch{}};var Ah={0:200,1223:204},os=u.ajaxSettings.xhr();E.cors=!!os&&"withCredentials"in os,E.ajax=os=!!os,u.ajaxTransport(function(s){var l,h;if(E.cors||os&&!s.crossDomain)return{send:function(p,M){var S,T=s.xhr();if(T.open(s.type,s.url,s.async,s.username,s.password),s.xhrFields)for(S in s.xhrFields)T[S]=s.xhrFields[S];s.mimeType&&T.overrideMimeType&&T.overrideMimeType(s.mimeType),!s.crossDomain&&!p["X-Requested-With"]&&(p["X-Requested-With"]="XMLHttpRequest");for(S in p)T.setRequestHeader(S,p[S]);l=function(k){return function(){l&&(l=h=T.onload=T.onerror=T.onabort=T.ontimeout=T.onreadystatechange=null,k==="abort"?T.abort():k==="error"?typeof T.status!="number"?M(0,"error"):M(T.status,T.statusText):M(Ah[T.status]||T.status,T.statusText,(T.responseType||"text")!=="text"||typeof T.responseText!="string"?{binary:T.response}:{text:T.responseText},T.getAllResponseHeaders()))}},T.onload=l(),h=T.onerror=T.ontimeout=l("error"),T.onabort!==void 0?T.onabort=h:T.onreadystatechange=function(){T.readyState===4&&e.setTimeout(function(){l&&h()})},l=l("abort");try{T.send(s.hasContent&&s.data||null)}catch(k){if(l)throw k}},abort:function(){l&&l()}}}),u.ajaxPrefilter(function(s){s.crossDomain&&(s.contents.script=!1)}),u.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(s){return u.globalEval(s),s}}}),u.ajaxPrefilter("script",function(s){s.cache===void 0&&(s.cache=!1),s.crossDomain&&(s.type="GET")}),u.ajaxTransport("script",function(s){if(s.crossDomain||s.scriptAttrs){var l,h;return{send:function(p,M){l=u("<script>").attr(s.scriptAttrs||{}).prop({charset:s.scriptCharset,src:s.url}).on("load error",h=function(S){l.remove(),h=null,S&&M(S.type==="error"?404:200,S.type)}),g.head.appendChild(l[0])},abort:function(){h&&h()}}}});var bl=[],jo=/(=)\?(?=&|$)|\?\?/;u.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var s=bl.pop()||u.expando+"_"+vl.guid++;return this[s]=!0,s}}),u.ajaxPrefilter("json jsonp",function(s,l,h){var p,M,S,T=s.jsonp!==!1&&(jo.test(s.url)?"url":typeof s.data=="string"&&(s.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&jo.test(s.data)&&"data");if(T||s.dataTypes[0]==="jsonp")return p=s.jsonpCallback=b(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback,T?s[T]=s[T].replace(jo,"$1"+p):s.jsonp!==!1&&(s.url+=(Go.test(s.url)?"&":"?")+s.jsonp+"="+p),s.converters["script json"]=function(){return S||u.error(p+" was not called"),S[0]},s.dataTypes[0]="json",M=e[p],e[p]=function(){S=arguments},h.always(function(){M===void 0?u(e).removeProp(p):e[p]=M,s[p]&&(s.jsonpCallback=l.jsonpCallback,bl.push(p)),S&&b(M)&&M(S[0]),S=M=void 0}),"script"}),E.createHTMLDocument=function(){var s=g.implementation.createHTMLDocument("").body;return s.innerHTML="<form></form><form></form>",s.childNodes.length===2}(),u.parseHTML=function(s,l,h){if(typeof s!="string")return[];typeof l=="boolean"&&(h=l,l=!1);var p,M,S;return l||(E.createHTMLDocument?(l=g.implementation.createHTMLDocument(""),p=l.createElement("base"),p.href=g.location.href,l.head.appendChild(p)):l=g),M=Y.exec(s),S=!h&&[],M?[l.createElement(M[1])]:(M=De([s],l,S),S&&S.length&&u(S).remove(),u.merge([],M.childNodes))},u.fn.load=function(s,l,h){var p,M,S,T=this,k=s.indexOf(" ");return k>-1&&(p=Xi(s.slice(k)),s=s.slice(0,k)),b(l)?(h=l,l=void 0):l&&typeof l=="object"&&(M="POST"),T.length>0&&u.ajax({url:s,type:M||"GET",dataType:"html",data:l}).done(function(O){S=arguments,T.html(p?u("<div>").append(u.parseHTML(O)).find(p):O)}).always(h&&function(O,X){T.each(function(){h.apply(this,S||[O.responseText,X,O])})}),this},u.expr.pseudos.animated=function(s){return u.grep(u.timers,function(l){return s===l.elem}).length},u.offset={setOffset:function(s,l,h){var p,M,S,T,k,O,X,ne=u.css(s,"position"),xe=u(s),K={};ne==="static"&&(s.style.position="relative"),k=xe.offset(),S=u.css(s,"top"),O=u.css(s,"left"),X=(ne==="absolute"||ne==="fixed")&&(S+O).indexOf("auto")>-1,X?(p=xe.position(),T=p.top,M=p.left):(T=parseFloat(S)||0,M=parseFloat(O)||0),b(l)&&(l=l.call(s,h,u.extend({},k))),l.top!=null&&(K.top=l.top-k.top+T),l.left!=null&&(K.left=l.left-k.left+M),"using"in l?l.using.call(s,K):xe.css(K)}},u.fn.extend({offset:function(s){if(arguments.length)return s===void 0?this:this.each(function(M){u.offset.setOffset(this,s,M)});var l,h,p=this[0];if(p)return p.getClientRects().length?(l=p.getBoundingClientRect(),h=p.ownerDocument.defaultView,{top:l.top+h.pageYOffset,left:l.left+h.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var s,l,h,p=this[0],M={top:0,left:0};if(u.css(p,"position")==="fixed")l=p.getBoundingClientRect();else{for(l=this.offset(),h=p.ownerDocument,s=p.offsetParent||h.documentElement;s&&(s===h.body||s===h.documentElement)&&u.css(s,"position")==="static";)s=s.parentNode;s&&s!==p&&s.nodeType===1&&(M=u(s).offset(),M.top+=u.css(s,"borderTopWidth",!0),M.left+=u.css(s,"borderLeftWidth",!0))}return{top:l.top-M.top-u.css(p,"marginTop",!0),left:l.left-M.left-u.css(p,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var s=this.offsetParent;s&&u.css(s,"position")==="static";)s=s.offsetParent;return s||Q})}}),u.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(s,l){var h=l==="pageYOffset";u.fn[s]=function(p){return lt(this,function(M,S,T){var k;if(x(M)?k=M:M.nodeType===9&&(k=M.defaultView),T===void 0)return k?k[l]:M[S];k?k.scrollTo(h?k.pageXOffset:T,h?T:k.pageYOffset):M[S]=T},s,p,arguments.length)}}),u.each(["top","left"],function(s,l){u.cssHooks[l]=ze(E.pixelPosition,function(h,p){if(p)return p=ae(h,l),ns.test(p)?u(h).position()[l]+"px":p})}),u.each({Height:"height",Width:"width"},function(s,l){u.each({padding:"inner"+s,content:l,"":"outer"+s},function(h,p){u.fn[p]=function(M,S){var T=arguments.length&&(h||typeof M!="boolean"),k=h||(M===!0||S===!0?"margin":"border");return lt(this,function(O,X,ne){var xe;return x(O)?p.indexOf("outer")===0?O["inner"+s]:O.document.documentElement["client"+s]:O.nodeType===9?(xe=O.documentElement,Math.max(O.body["scroll"+s],xe["scroll"+s],O.body["offset"+s],xe["offset"+s],xe["client"+s])):ne===void 0?u.css(O,X,k):u.style(O,X,ne,k)},l,T?M:void 0,T)}})}),u.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(s,l){u.fn[l]=function(h){return this.on(l,h)}}),u.fn.extend({bind:function(s,l,h){return this.on(s,null,l,h)},unbind:function(s,l){return this.off(s,null,l)},delegate:function(s,l,h,p){return this.on(l,s,h,p)},undelegate:function(s,l,h){return arguments.length===1?this.off(s,"**"):this.off(l,s||"**",h)},hover:function(s,l){return this.mouseenter(s).mouseleave(l||s)}}),u.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(s,l){u.fn[l]=function(h,p){return arguments.length>0?this.on(l,null,h,p):this.trigger(l)}});var Ch=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;u.proxy=function(s,l){var h,p,M;if(typeof l=="string"&&(h=s[l],l=s,s=h),!!b(s))return p=o.call(arguments,2),M=function(){return s.apply(l||this,p.concat(o.call(arguments)))},M.guid=s.guid=s.guid||u.guid++,M},u.holdReady=function(s){s?u.readyWait++:u.ready(!0)},u.isArray=Array.isArray,u.parseJSON=JSON.parse,u.nodeName=oe,u.isFunction=b,u.isWindow=x,u.camelCase=Et,u.type=L,u.now=Date.now,u.isNumeric=function(s){var l=u.type(s);return(l==="number"||l==="string")&&!isNaN(s-parseFloat(s))},u.trim=function(s){return s==null?"":(s+"").replace(Ch,"$1")};var Rh=e.jQuery,Ph=e.$;return u.noConflict=function(s){return e.$===u&&(e.$=Ph),s&&e.jQuery===u&&(e.jQuery=Rh),u},typeof t>"u"&&(e.jQuery=e.$=u),u})})(X0);let sr,_s;const En=new Bo,q0=new Bo({container:document.getElementById("trajectoryGUI"),autoPlace:!1});let bi=[],Lo=[],gr=[],za=[],rh,Nn=[],Un,Wt,pn,Ni;const Vn=[];let ki=4;const So=new z,bu=new dl,Ha=new et,ka=new et,tl=new et,j0=new Gt(.4,.4,.4);let Tn;const nl=200,Eo={uniform:!0,tension:.5,centripetal:!1,chordal:!1,addPoint:zo,removePoint:ml,exportSpline:uv,addTrigger:tv,removeTrigger:nv};let sh=.1,oh=!0,wo=!0,Tu=0,Y0=!0,ah={curve:"curve1"},Si;const $0=new S0;let Gi=[],lh=1,li=[],Jn=[],dr=[];for(let i=0;i<lh;i++)Jn.push(Math.random());let Rs=[],Do=[],Ps=[],zt=[],Z0=2,Ls=[],oi=0;K0();ch();function K0(){_s=document.getElementById("container"),_s.getBoundingClientRect(),_s.clientWidth,_s.clientHeight,Wt=new p0,Wt.background=new Mt(15790320),Un=new Gn(70,window.innerWidth/window.innerHeight,1,1e4),Un.position.set(30,16,0),Wt.add(Un),Wt.add(new M0(15790320,3));const i=new y0(16777215,4.5);i.position.set(0,30,4),i.angle=Math.PI*.2,i.decay=0,i.castShadow=!0,i.shadow.camera.near=4,i.shadow.camera.far=40,i.shadow.bias=-222e-6,i.shadow.mapSize.width=1024,i.shadow.mapSize.height=1024,Wt.add(i);const e=new Us(20,20);e.rotateX(-Math.PI/2);const t=new _0({color:0,opacity:1}),n=new Oe(e,t);n.position.y=0,Wt.add(n);const r=new E0(20,20);r.position.y=0,r.material.opacity=1,r.material.transparent=!0,Wt.add(r),pn=new Qa({antialias:Y0}),pn.setPixelRatio(window.devicePixelRatio),pn.setSize(window.innerWidth,window.innerHeight),_s.appendChild(pn.domElement),Ni=new V0,Ni.setSize(window.innerWidth,window.innerHeight),Ni.domElement.style.position="absolute",Ni.domElement.style.top="0px",Ni.domElement.style.pointerEvents="none",document.body.appendChild(Ni.domElement),En.add(Eo,"uniform").onChange(Wr),En.add(Eo,"tension",0,1).step(.01).onChange(function(f){zt[oi].tension=f,Ti()}),rh=En.addFolder("Curves"),En.add({addPointRandom:function(){zo(void 0,oi)}},"addPointRandom"),En.add({removePointRandom:function(){ml(oi)}},"removePointRandom"),En.add(Eo,"addTrigger"),En.add(Eo,"removeTrigger"),En.add({addTrajectory:Q0},"addTrajectory"),En.add({deleteTrajectory:J0},"deleteTrajectory"),En.add({closed:oh},"closed").onChange(function(f){f===!0?zt[oi].closed=!0:zt[oi].closed=!1}),En.add({loop:wo},"loop").onChange(function(f){f===!0?wo=!0:wo=!1}),En.add({Mobile:!1},"Mobile").onChange(function(f){pn.domElement.parentNode.removeChild(pn.domElement),pn=new Qa({antialias:!f}),pn.setPixelRatio(window.devicePixelRatio*.95),pn.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(pn.domElement);const m=new hu(Un,pn.domElement);m.damping=.2,Tn=new gu(Un,pn.domElement),Tn.addEventListener("change",function(v){v.value||Wr()}),Tn.addEventListener("dragging-changed",function(v){m.enabled=!v.value}),Wt.add(Tn)}),En.open();const o=new hu(Un,pn.domElement);o.damping=.2,Tn=new gu(Un,pn.domElement),Tn.addEventListener("change",function(f){f.value||Wr()}),Tn.addEventListener("dragging-changed",function(f){o.enabled=!f.value}),Wt.add(Tn),Tn.addEventListener("objectChange",function(){Ti()}),document.addEventListener("keydown",av),document.addEventListener("keydown",lv),document.addEventListener("dblclick",iv),document.addEventListener("pointerdown",rv),document.addEventListener("pointerup",sv),document.addEventListener("pointermove",ov),window.addEventListener("resize",cv);const a=new b0(20);Wt.add(a),a.position.set(0,0,0),a.lineWidth=10,Ls=[[new z(-10,1,-10),new z(10,1,-10),new z(10,1,10),new z(-10,1,10)],[new z(-10,4,-10),new z(10,4,-10),new z(10,4,10),new z(-10,4,10)]],bi=q0.addFolder("Trajectories");for(let f=0;f<Z0;f++){let m=Ls[f];for(let _=0;_<ki;_++)pl(m[_]);m.length=0;for(let _=f*ki;_<(f+1)*ki;_++)m.push(Vn[_].position);let v=uh(m);zt.push(v),Wt.add(v.mesh),Lo=bi.addFolder("Trajectory "+(f+1)).close();for(let _=0;_<m.length;_++){let y=Lo.addFolder("Control Point "+(_+1)).close();y.add(m[_],"x").name("X").listen(),y.add(m[_],"y").name("Y").listen(),y.add(m[_],"z").name("Z").listen()}fl()}const c=new Gt(1,1,1),d=new vr({color:65280});gr=En.addFolder("Triggers");for(let f=0;f<lh;f++){let m=new Oe(c,d);m.geometry.rotateX(Math.PI),Wt.add(m);let v=document.createElement("p");v.style.fontSize="10px";let _=new ih(v);_.position.set(0,3,0),m.add(_),Gi.push(m),li.push(Math.random()*.2);let y=gr.addFolder("Trigger "+(f+1)),E=Gi.indexOf(m);y.add({["Speed T"+(E+1)]:sh},["Speed T"+(E+1)],.02,.2).step(.004).onChange(function(x){li[E]=Math.abs(x)}),dr.push(!0),y.add({["Animate T"+(E+1)]:dr[E]},["Animate T"+(E+1)]).onChange(function(x){dr[E]=x}),Nn[f]=0,Do.push(Nn[f]),y.add({["Position T"+(f+1)]:Jn[f]},["Position T"+(f+1)],0,1).onChange(function(x){Si=zt[Do[f]].getPointAt(x),Rs[f]=x}),Rs[f]=Jn[f];let b=zt.map((x,g)=>"Curve "+(g+1));y.add({["Curve T"+(E+1)]:b[oi]},["Curve T"+(E+1)],b).onChange(function(x){let g=b.indexOf(x);Nn[E]=g,console.log(Nn[0])}),y.open()}sr=new G0,sr.dom.style.position="absolute",sr.dom.style.left="50%",sr.dom.style.top="0",sr.dom.style.transform="translateX(-50%)",document.body.appendChild(sr.dom),Wr()}function ch(){if(Gi.length>0)for(let i=0;i<Gi.length;i++){let e=Gi[i];Ps[i]=[],Tu=zt[Nn[i]].getLength(),$0.getDelta(),Jn[i]+=li[i]/Tu,dr[i]?(wo===!0?(li[i]=Math.abs(li[i]),Jn[i]%=1):(Jn[i]>=.99||Jn[i]<=.01)&&(li[i]*=-1),Si=zt[Nn[i]].getPointAt(Jn[i])):Si=zt[Nn[i]].getPointAt(Rs[i]),Ps[i].push(Si);let n=e.children[0].element;n.innerHTML='<span style="font-size: 20px;">'+(i+1)+'</span> <span style="font-size: 10px;">'+Si.x.toFixed(2)+", "+Si.y.toFixed(2)+", "+Si.z.toFixed(2)+"</span>",e.position.copy(Si),zt[Nn[i]].updateArcLengths()}Ti(),Ni.render(Wt,Un),Wr(),sr.update(),requestAnimationFrame(ch)}function uh(i){const e=new cn;e.setAttribute("position",new ei(new Float32Array(nl*3),3));let t=new g0(i,oh);t.curveType="catmullrom";const n=[0,16711680,255,8421504],r=n[Math.floor(Math.random()*n.length)];return t.mesh=new ri(e.clone(),new Ns({color:r,opacity:.35})),t}function Q0(){let i=[];for(let r=0;r<ki;r++)i.push(new z(Ga(-10,10),Ga(1,1),Ga(-10,10)));for(let r=0;r<ki;r++)pl(i[r]);i.length=0;let e=Vn.length-ki;for(let r=e;r<Vn.length;r++)i.push(Vn[r].position);let t=uh(i);zt.push(t),Ls.push(i),Wt.add(t.mesh),Lo=bi.addFolder("Trajectory "+zt.length).close();for(let r=0;r<i.length;r++){let o=Lo.addFolder("Control Point "+(r+1)).close();o.add(i[r],"x").name("X").listen(),o.add(i[r],"y").name("Y").listen(),o.add(i[r],"z").name("Z").listen()}fl();let n=Object.keys(gr.folders);for(let r=0;r<n.length;r++){let o=gr.folders[n[r]],a=o.controllers[o.controllers.length-1];ev(o,[a],r)}Ti()}function J0(){if(zt.length<=0)return;let i=zt[zt.length-1];Wt.remove(i.mesh),zt.pop();for(let r=0;r<ki;r++){let o=Vn[Vn.length-1];Wt.remove(o),Vn.pop()}let e=Object.keys(bi.folders);if(e.length<=0)return;let t=e[e.length-1];bi.folders[t].destroy(),fl()}function fl(){if(za.length>0){let t=za.pop();t.domElement.style.display="none"}let i=zt.map((t,n)=>"curve"+(n+1)),e=rh.add(ah,"curve",i).onChange(function(t){oi=parseInt(t.replace("curve",""))-1});za.push(e)}function ev(i,e,t){if(e.length>0){let o=e.pop();o.domElement.style.display="none"}let n=zt.map((o,a)=>"Curve "+(a+1)),r=i.add(ah,"Curve ",n).onChange(function(o){Nn[t]=parseInt(o.replace("Curve ",""))-1,console.log(Nn[t])});e.push(r)}function pl(i){const e=new vr({color:Math.random()*16777215}),t=new Oe(j0,e);return i?t.position.copy(i):(t.position.x=Math.random()*20-10,t.position.y=Math.random()*12,t.position.z=Math.random()*16-8),Wt.add(t),Vn.push(t),console.log(Vn),t}function tv(){const i=new Gt(1,1,1),e=new vr({color:65280});let t=new Oe(i,e);t.geometry.rotateX(Math.PI),Wt.add(t);let n=document.createElement("p");n.style.fontSize="10px";let r=new ih(n);r.position.set(0,3,0),t.add(r),Gi.push(t),Jn.push(0),li.push(Math.random()*.2);let o=Gi.indexOf(t),a=gr.addFolder("Trigger "+(o+1));a.add({["Speed T"+(o+1)]:sh},["Speed T"+(o+1)],.02,.2).step(.004).onChange(function(d){li[o]=d}),Nn[o]=0,Do.push(oi),dr.push(!0),a.add({["Animate T"+(o+1)]:dr[o]},["Animate T"+(o+1)]).onChange(function(d){dr[o]=d}),a.add({["Position T"+(o+1)]:Jn[o]},["Position T"+(o+1)],0,1).onChange(function(d){Si=zt[Do[o]].getPointAt(d),Rs[o]=d});let c=zt.map((d,f)=>"Curve "+(f+1));a.add({["Curve T"+(o+1)]:c[oi]},["Curve T"+(o+1)],c).onChange(function(d){let f=c.indexOf(d);Nn[o]=f,console.log(Nn[0])}),Rs[o]=Jn[o],Ti()}function nv(){let i=Object.keys(gr.folders);if(i.length<=0)return;let e=i[i.length-1];gr.folders[e].destroy();let n=Gi.pop(),r=n.children[0];n.remove(r),Wt.remove(n),li.pop(),Ps.pop(),Ti()}function zo(i,e){let t=Ls[e],n=pl(i).position;t.push(n);let o=Object.keys(bi.folders)[e],c=bi.folders[o].addFolder("Control Point "+t.length).close();c.add(n,"x").name("X").listen(),c.add(n,"y").name("Y").listen(),c.add(n,"z").name("Z").listen(),Ti()}function ml(i){let e=Ls[i];if(e.length<=2)return;const t=Vn.pop();e.pop(),Tn.object===t&&Tn.detach(),Wt.remove(t);let r=Object.keys(bi.folders)[i],o=bi.folders[r],a=Object.keys(o.folders);if(a.length>0){let c=a[a.length-1];o.folders[c].destroy()}Ti()}function iv(i){if(i.button===0){const e=i.clientX/window.innerWidth*2-1,t=-(i.clientY/window.innerHeight)*2+1,n=new dl;n.setFromCamera(new et(e,t),Un);const r=n.intersectObjects(Wt.children,!0);if(r.length>0){const o=r[0].point;zo(o,oi)}}}function Ti(){for(let i=0;i<zt.length;i++){const e=zt[i],n=e.mesh.geometry.attributes.position;for(let r=0;r<nl;r++){const o=r/(nl-1);e.getPoint(o,So),n.setXYZ(r,So.x,So.y,So.z)}n.needsUpdate=!0}}function Wr(){for(let i=0;i<zt.length;i++)zt[i].mesh.visible=!0;pn.render(Wt,Un)}function rv(i){tl.x=i.clientX,tl.y=i.clientY}function sv(i){ka.x=i.clientX,ka.y=i.clientY,tl.distanceTo(ka)===0&&Tn.detach(),Ti()}function ov(i){Ha.x=i.clientX/window.innerWidth*2-1,Ha.y=-(i.clientY/window.innerHeight)*2+1,bu.setFromCamera(Ha,Un);const e=bu.intersectObjects(Vn.flat(),!1);if(e.length>0){const t=e[0].object;t!==Tn.object&&Tn.attach(t)}}function av(i){i.key==="p"&&zo()}function lv(i){i.key==="r"&&ml()}function cv(){Un.aspect=window.innerWidth/window.innerHeight,Un.updateProjectionMatrix(),pn.setSize(window.innerWidth,window.innerHeight),Ni.setSize(window.innerWidth,window.innerHeight),Wr()}function Ga(i,e){return Math.random()*(e-i)+i}function uv(){const i=[];for(let t=0;t<ki;t++){const n=Vn[t].position;i.push(`new THREE.Vector3(${n.x}, ${n.y}, ${n.z})`)}console.log(i.join(`,
`));const e="["+i.join(`,
	`)+"]";prompt("copy and paste code",e)}const hv="http://:8081/";let Ao="",wu="";const fr=io(hv);fr.on("connect",()=>{console.log("Connected to server!"),Ao=fr.id,console.log(`Your socket id is ${Ao}`),wu="Browser",fr.emit("clientSource",{id:Ao,source:wu})});setInterval(()=>{for(let i=0;i<Ps.length;i++){let e=Ps[i][0];const t=Va(e.x,1e3,-1e3,-15,15),n=Va(e.y,0,500,0,10),r=Va(e.z,-1e3,1e3,-15,15);fr.emit("coordinates",{id:Ao,TriggerID:"Trigger_"+(i+1),x:t,y:r,z:n})}},20);fr.on("pongCheck",()=>{Date.now()-hh});let hh;setInterval(()=>{hh=Date.now(),fr.emit("pingCheck")},1e3);function Va(i,e,t,n,r){return(i-e)*(r-n)/(t-e)+n}fr.on("disconnect",()=>{console.log("Disconnected from server!")});
