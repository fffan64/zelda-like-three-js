(function(){const A=document.createElement("link").relList;if(A&&A.supports&&A.supports("modulepreload"))return;for(const C of document.querySelectorAll('link[rel="modulepreload"]'))g(C);new MutationObserver(C=>{for(const Q of C)if(Q.type==="childList")for(const E of Q.addedNodes)E.tagName==="LINK"&&E.rel==="modulepreload"&&g(E)}).observe(document,{childList:!0,subtree:!0});function I(C){const Q={};return C.integrity&&(Q.integrity=C.integrity),C.referrerPolicy&&(Q.referrerPolicy=C.referrerPolicy),C.crossOrigin==="use-credentials"?Q.credentials="include":C.crossOrigin==="anonymous"?Q.credentials="omit":Q.credentials="same-origin",Q}function g(C){if(C.ep)return;C.ep=!0;const Q=I(C);fetch(C.href,Q)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ji="161",rs=0,Go=1,Ss=2,Ge=1,ws=2,ug=3,Og=0,XI=1,yg=2,BC=0,gB=1,lo=2,ko=3,yo=4,cs=5,cC=100,Gs=101,ls=102,Mo=103,Uo=104,ks=200,ys=201,Ms=202,Us=203,Qi=204,Ei=205,Ns=206,Ks=207,Fs=208,Js=209,Rs=210,qs=211,ps=212,ds=213,Ys=214,Ls=0,fs=1,Hs=2,YQ=3,us=4,ms=5,Ts=6,bs=7,le=0,xs=1,Os=2,QC=0,_s=1,Zs=2,vs=3,Ws=4,Ps=5,js=6,No="attached",Vs="detached",ke=300,QB=301,EB=302,ii=303,oi=304,VQ=306,iB=1e3,og=1001,LQ=1002,dI=1003,ti=1004,XC=1005,OI=1006,qQ=1007,Tg=1008,EC=1009,Xs=1010,zs=1011,Ri=1012,ye=1013,gC=1014,Mg=1015,TB=1016,Me=1017,Ue=1018,MC=1020,$s=1021,tg=1023,AD=1024,ID=1025,UC=1026,oB=1027,gD=1028,Ne=1029,CD=1030,Ke=1031,Fe=1033,SE=33776,wE=33777,cE=33778,GE=33779,Ko=35840,Fo=35841,Jo=35842,Ro=35843,Je=36196,qo=37492,po=37496,Yo=37808,Lo=37809,fo=37810,Ho=37811,uo=37812,mo=37813,To=37814,bo=37815,xo=37816,Oo=37817,_o=37818,Zo=37819,vo=37820,Wo=37821,lE=36492,Po=36494,jo=36495,BD=36283,Vo=36284,Xo=36285,zo=36286,qi=2200,QD=2201,ED=2202,bB=2300,tB=2301,kE=2302,zC=2400,$C=2401,fQ=2402,pi=2500,iD=2501,oD=0,Re=1,ei=2,qe=3e3,NC=3001,tD=3200,eD=3201,pe=0,aD=1,eg="",kI="srgb",LI="srgb-linear",di="display-p3",XQ="display-p3-linear",HQ="linear",DI="srgb",uQ="rec709",mQ="p3",dC=7680,$o=519,sD=512,DD=513,nD=514,de=515,hD=516,rD=517,SD=518,wD=519,ai=35044,At="300 es",si=1035,bg=2e3,TQ=2001;class pC{addEventListener(A,I){this._listeners===void 0&&(this._listeners={});const g=this._listeners;g[A]===void 0&&(g[A]=[]),g[A].indexOf(I)===-1&&g[A].push(I)}hasEventListener(A,I){if(this._listeners===void 0)return!1;const g=this._listeners;return g[A]!==void 0&&g[A].indexOf(I)!==-1}removeEventListener(A,I){if(this._listeners===void 0)return;const C=this._listeners[A];if(C!==void 0){const Q=C.indexOf(I);Q!==-1&&C.splice(Q,1)}}dispatchEvent(A){if(this._listeners===void 0)return;const g=this._listeners[A.type];if(g!==void 0){A.target=this;const C=g.slice(0);for(let Q=0,E=C.length;Q<E;Q++)C[Q].call(this,A);A.target=null}}}const bI=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let It=1234567;const fB=Math.PI/180,eB=180/Math.PI;function Sg(){const B=Math.random()*4294967295|0,A=Math.random()*4294967295|0,I=Math.random()*4294967295|0,g=Math.random()*4294967295|0;return(bI[B&255]+bI[B>>8&255]+bI[B>>16&255]+bI[B>>24&255]+"-"+bI[A&255]+bI[A>>8&255]+"-"+bI[A>>16&15|64]+bI[A>>24&255]+"-"+bI[I&63|128]+bI[I>>8&255]+"-"+bI[I>>16&255]+bI[I>>24&255]+bI[g&255]+bI[g>>8&255]+bI[g>>16&255]+bI[g>>24&255]).toLowerCase()}function _I(B,A,I){return Math.max(A,Math.min(I,B))}function Yi(B,A){return(B%A+A)%A}function cD(B,A,I,g,C){return g+(B-A)*(C-g)/(I-A)}function GD(B,A,I){return B!==A?(I-B)/(A-B):0}function HB(B,A,I){return(1-I)*B+I*A}function lD(B,A,I,g){return HB(B,A,1-Math.exp(-I*g))}function kD(B,A=1){return A-Math.abs(Yi(B,A*2)-A)}function yD(B,A,I){return B<=A?0:B>=I?1:(B=(B-A)/(I-A),B*B*(3-2*B))}function MD(B,A,I){return B<=A?0:B>=I?1:(B=(B-A)/(I-A),B*B*B*(B*(B*6-15)+10))}function UD(B,A){return B+Math.floor(Math.random()*(A-B+1))}function ND(B,A){return B+Math.random()*(A-B)}function KD(B){return B*(.5-Math.random())}function FD(B){B!==void 0&&(It=B);let A=It+=1831565813;return A=Math.imul(A^A>>>15,A|1),A^=A+Math.imul(A^A>>>7,A|61),((A^A>>>14)>>>0)/4294967296}function JD(B){return B*fB}function RD(B){return B*eB}function Di(B){return(B&B-1)===0&&B!==0}function qD(B){return Math.pow(2,Math.ceil(Math.log(B)/Math.LN2))}function bQ(B){return Math.pow(2,Math.floor(Math.log(B)/Math.LN2))}function pD(B,A,I,g,C){const Q=Math.cos,E=Math.sin,i=Q(I/2),o=E(I/2),t=Q((A+g)/2),e=E((A+g)/2),a=Q((A-g)/2),s=E((A-g)/2),n=Q((g-A)/2),S=E((g-A)/2);switch(C){case"XYX":B.set(i*e,o*a,o*s,i*t);break;case"YZY":B.set(o*s,i*e,o*a,i*t);break;case"ZXZ":B.set(o*a,o*s,i*e,i*t);break;case"XZX":B.set(i*e,o*S,o*n,i*t);break;case"YXY":B.set(o*n,i*e,o*S,i*t);break;case"ZYZ":B.set(o*S,o*n,i*e,i*t);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+C)}}function rg(B,A){switch(A.constructor){case Float32Array:return B;case Uint32Array:return B/4294967295;case Uint16Array:return B/65535;case Uint8Array:return B/255;case Int32Array:return Math.max(B/2147483647,-1);case Int16Array:return Math.max(B/32767,-1);case Int8Array:return Math.max(B/127,-1);default:throw new Error("Invalid component type.")}}function BI(B,A){switch(A.constructor){case Float32Array:return B;case Uint32Array:return Math.round(B*4294967295);case Uint16Array:return Math.round(B*65535);case Uint8Array:return Math.round(B*255);case Int32Array:return Math.round(B*2147483647);case Int16Array:return Math.round(B*32767);case Int8Array:return Math.round(B*127);default:throw new Error("Invalid component type.")}}const dD={DEG2RAD:fB,RAD2DEG:eB,generateUUID:Sg,clamp:_I,euclideanModulo:Yi,mapLinear:cD,inverseLerp:GD,lerp:HB,damp:lD,pingpong:kD,smoothstep:yD,smootherstep:MD,randInt:UD,randFloat:ND,randFloatSpread:KD,seededRandom:FD,degToRad:JD,radToDeg:RD,isPowerOfTwo:Di,ceilPowerOfTwo:qD,floorPowerOfTwo:bQ,setQuaternionFromProperEuler:pD,normalize:BI,denormalize:rg};class ZA{constructor(A=0,I=0){ZA.prototype.isVector2=!0,this.x=A,this.y=I}get width(){return this.x}set width(A){this.x=A}get height(){return this.y}set height(A){this.y=A}set(A,I){return this.x=A,this.y=I,this}setScalar(A){return this.x=A,this.y=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y)}copy(A){return this.x=A.x,this.y=A.y,this}add(A){return this.x+=A.x,this.y+=A.y,this}addScalar(A){return this.x+=A,this.y+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this}subScalar(A){return this.x-=A,this.y-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this}multiply(A){return this.x*=A.x,this.y*=A.y,this}multiplyScalar(A){return this.x*=A,this.y*=A,this}divide(A){return this.x/=A.x,this.y/=A.y,this}divideScalar(A){return this.multiplyScalar(1/A)}applyMatrix3(A){const I=this.x,g=this.y,C=A.elements;return this.x=C[0]*I+C[3]*g+C[6],this.y=C[1]*I+C[4]*g+C[7],this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(A){return this.x*A.x+this.y*A.y}cross(A){return this.x*A.y-this.y*A.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(A){const I=Math.sqrt(this.lengthSq()*A.lengthSq());if(I===0)return Math.PI/2;const g=this.dot(A)/I;return Math.acos(_I(g,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const I=this.x-A.x,g=this.y-A.y;return I*I+g*g}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this}equals(A){return A.x===this.x&&A.y===this.y}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this}rotateAround(A,I){const g=Math.cos(I),C=Math.sin(I),Q=this.x-A.x,E=this.y-A.y;return this.x=Q*g-E*C+A.x,this.y=Q*C+E*g+A.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class _A{constructor(A,I,g,C,Q,E,i,o,t){_A.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],A!==void 0&&this.set(A,I,g,C,Q,E,i,o,t)}set(A,I,g,C,Q,E,i,o,t){const e=this.elements;return e[0]=A,e[1]=C,e[2]=i,e[3]=I,e[4]=Q,e[5]=o,e[6]=g,e[7]=E,e[8]=t,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(A){const I=this.elements,g=A.elements;return I[0]=g[0],I[1]=g[1],I[2]=g[2],I[3]=g[3],I[4]=g[4],I[5]=g[5],I[6]=g[6],I[7]=g[7],I[8]=g[8],this}extractBasis(A,I,g){return A.setFromMatrix3Column(this,0),I.setFromMatrix3Column(this,1),g.setFromMatrix3Column(this,2),this}setFromMatrix4(A){const I=A.elements;return this.set(I[0],I[4],I[8],I[1],I[5],I[9],I[2],I[6],I[10]),this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,I){const g=A.elements,C=I.elements,Q=this.elements,E=g[0],i=g[3],o=g[6],t=g[1],e=g[4],a=g[7],s=g[2],n=g[5],S=g[8],w=C[0],r=C[3],h=C[6],M=C[1],G=C[4],K=C[7],d=C[2],R=C[5],J=C[8];return Q[0]=E*w+i*M+o*d,Q[3]=E*r+i*G+o*R,Q[6]=E*h+i*K+o*J,Q[1]=t*w+e*M+a*d,Q[4]=t*r+e*G+a*R,Q[7]=t*h+e*K+a*J,Q[2]=s*w+n*M+S*d,Q[5]=s*r+n*G+S*R,Q[8]=s*h+n*K+S*J,this}multiplyScalar(A){const I=this.elements;return I[0]*=A,I[3]*=A,I[6]*=A,I[1]*=A,I[4]*=A,I[7]*=A,I[2]*=A,I[5]*=A,I[8]*=A,this}determinant(){const A=this.elements,I=A[0],g=A[1],C=A[2],Q=A[3],E=A[4],i=A[5],o=A[6],t=A[7],e=A[8];return I*E*e-I*i*t-g*Q*e+g*i*o+C*Q*t-C*E*o}invert(){const A=this.elements,I=A[0],g=A[1],C=A[2],Q=A[3],E=A[4],i=A[5],o=A[6],t=A[7],e=A[8],a=e*E-i*t,s=i*o-e*Q,n=t*Q-E*o,S=I*a+g*s+C*n;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/S;return A[0]=a*w,A[1]=(C*t-e*g)*w,A[2]=(i*g-C*E)*w,A[3]=s*w,A[4]=(e*I-C*o)*w,A[5]=(C*Q-i*I)*w,A[6]=n*w,A[7]=(g*o-t*I)*w,A[8]=(E*I-g*Q)*w,this}transpose(){let A;const I=this.elements;return A=I[1],I[1]=I[3],I[3]=A,A=I[2],I[2]=I[6],I[6]=A,A=I[5],I[5]=I[7],I[7]=A,this}getNormalMatrix(A){return this.setFromMatrix4(A).invert().transpose()}transposeIntoArray(A){const I=this.elements;return A[0]=I[0],A[1]=I[3],A[2]=I[6],A[3]=I[1],A[4]=I[4],A[5]=I[7],A[6]=I[2],A[7]=I[5],A[8]=I[8],this}setUvTransform(A,I,g,C,Q,E,i){const o=Math.cos(Q),t=Math.sin(Q);return this.set(g*o,g*t,-g*(o*E+t*i)+E+A,-C*t,C*o,-C*(-t*E+o*i)+i+I,0,0,1),this}scale(A,I){return this.premultiply(yE.makeScale(A,I)),this}rotate(A){return this.premultiply(yE.makeRotation(-A)),this}translate(A,I){return this.premultiply(yE.makeTranslation(A,I)),this}makeTranslation(A,I){return A.isVector2?this.set(1,0,A.x,0,1,A.y,0,0,1):this.set(1,0,A,0,1,I,0,0,1),this}makeRotation(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,-g,0,g,I,0,0,0,1),this}makeScale(A,I){return this.set(A,0,0,0,I,0,0,0,1),this}equals(A){const I=this.elements,g=A.elements;for(let C=0;C<9;C++)if(I[C]!==g[C])return!1;return!0}fromArray(A,I=0){for(let g=0;g<9;g++)this.elements[g]=A[g+I];return this}toArray(A=[],I=0){const g=this.elements;return A[I]=g[0],A[I+1]=g[1],A[I+2]=g[2],A[I+3]=g[3],A[I+4]=g[4],A[I+5]=g[5],A[I+6]=g[6],A[I+7]=g[7],A[I+8]=g[8],A}clone(){return new this.constructor().fromArray(this.elements)}}const yE=new _A;function Ye(B){for(let A=B.length-1;A>=0;--A)if(B[A]>=65535)return!0;return!1}function xB(B){return document.createElementNS("http://www.w3.org/1999/xhtml",B)}function YD(){const B=xB("canvas");return B.style.display="block",B}const gt={};function KC(B){B in gt||(gt[B]=!0,console.warn(B))}const Ct=new _A().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Bt=new _A().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),gQ={[LI]:{transfer:HQ,primaries:uQ,toReference:B=>B,fromReference:B=>B},[kI]:{transfer:DI,primaries:uQ,toReference:B=>B.convertSRGBToLinear(),fromReference:B=>B.convertLinearToSRGB()},[XQ]:{transfer:HQ,primaries:mQ,toReference:B=>B.applyMatrix3(Bt),fromReference:B=>B.applyMatrix3(Ct)},[di]:{transfer:DI,primaries:mQ,toReference:B=>B.convertSRGBToLinear().applyMatrix3(Bt),fromReference:B=>B.applyMatrix3(Ct).convertLinearToSRGB()}},LD=new Set([LI,XQ]),II={enabled:!0,_workingColorSpace:LI,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(B){if(!LD.has(B))throw new Error(`Unsupported working color space, "${B}".`);this._workingColorSpace=B},convert:function(B,A,I){if(this.enabled===!1||A===I||!A||!I)return B;const g=gQ[A].toReference,C=gQ[I].fromReference;return C(g(B))},fromWorkingColorSpace:function(B,A){return this.convert(B,this._workingColorSpace,A)},toWorkingColorSpace:function(B,A){return this.convert(B,A,this._workingColorSpace)},getPrimaries:function(B){return gQ[B].primaries},getTransfer:function(B){return B===eg?HQ:gQ[B].transfer}};function CB(B){return B<.04045?B*.0773993808:Math.pow(B*.9478672986+.0521327014,2.4)}function ME(B){return B<.0031308?B*12.92:1.055*Math.pow(B,.41666)-.055}let YC;class Le{static getDataURL(A){if(/^data:/i.test(A.src)||typeof HTMLCanvasElement>"u")return A.src;let I;if(A instanceof HTMLCanvasElement)I=A;else{YC===void 0&&(YC=xB("canvas")),YC.width=A.width,YC.height=A.height;const g=YC.getContext("2d");A instanceof ImageData?g.putImageData(A,0,0):g.drawImage(A,0,0,A.width,A.height),I=YC}return I.width>2048||I.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",A),I.toDataURL("image/jpeg",.6)):I.toDataURL("image/png")}static sRGBToLinear(A){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const I=xB("canvas");I.width=A.width,I.height=A.height;const g=I.getContext("2d");g.drawImage(A,0,0,A.width,A.height);const C=g.getImageData(0,0,A.width,A.height),Q=C.data;for(let E=0;E<Q.length;E++)Q[E]=CB(Q[E]/255)*255;return g.putImageData(C,0,0),I}else if(A.data){const I=A.data.slice(0);for(let g=0;g<I.length;g++)I instanceof Uint8Array||I instanceof Uint8ClampedArray?I[g]=Math.floor(CB(I[g]/255)*255):I[g]=CB(I[g]);return{data:I,width:A.width,height:A.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),A}}let fD=0;class fe{constructor(A=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fD++}),this.uuid=Sg(),this.data=A,this.dataReady=!0,this.version=0}set needsUpdate(A){A===!0&&this.version++}toJSON(A){const I=A===void 0||typeof A=="string";if(!I&&A.images[this.uuid]!==void 0)return A.images[this.uuid];const g={uuid:this.uuid,url:""},C=this.data;if(C!==null){let Q;if(Array.isArray(C)){Q=[];for(let E=0,i=C.length;E<i;E++)C[E].isDataTexture?Q.push(UE(C[E].image)):Q.push(UE(C[E]))}else Q=UE(C);g.url=Q}return I||(A.images[this.uuid]=g),g}}function UE(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap?Le.getDataURL(B):B.data?{data:Array.from(B.data),width:B.width,height:B.height,type:B.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let HD=0;class YI extends pC{constructor(A=YI.DEFAULT_IMAGE,I=YI.DEFAULT_MAPPING,g=og,C=og,Q=OI,E=Tg,i=tg,o=EC,t=YI.DEFAULT_ANISOTROPY,e=eg){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:HD++}),this.uuid=Sg(),this.name="",this.source=new fe(A),this.mipmaps=[],this.mapping=I,this.channel=0,this.wrapS=g,this.wrapT=C,this.magFilter=Q,this.minFilter=E,this.anisotropy=t,this.format=i,this.internalFormat=null,this.type=o,this.offset=new ZA(0,0),this.repeat=new ZA(1,1),this.center=new ZA(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _A,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof e=="string"?this.colorSpace=e:(KC("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===NC?kI:eg),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(A=null){this.source.data=A}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(A){return this.name=A.name,this.source=A.source,this.mipmaps=A.mipmaps.slice(0),this.mapping=A.mapping,this.channel=A.channel,this.wrapS=A.wrapS,this.wrapT=A.wrapT,this.magFilter=A.magFilter,this.minFilter=A.minFilter,this.anisotropy=A.anisotropy,this.format=A.format,this.internalFormat=A.internalFormat,this.type=A.type,this.offset.copy(A.offset),this.repeat.copy(A.repeat),this.center.copy(A.center),this.rotation=A.rotation,this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrix.copy(A.matrix),this.generateMipmaps=A.generateMipmaps,this.premultiplyAlpha=A.premultiplyAlpha,this.flipY=A.flipY,this.unpackAlignment=A.unpackAlignment,this.colorSpace=A.colorSpace,this.userData=JSON.parse(JSON.stringify(A.userData)),this.needsUpdate=!0,this}toJSON(A){const I=A===void 0||typeof A=="string";if(!I&&A.textures[this.uuid]!==void 0)return A.textures[this.uuid];const g={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(A).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(g.userData=this.userData),I||(A.textures[this.uuid]=g),g}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(A){if(this.mapping!==ke)return A;if(A.applyMatrix3(this.matrix),A.x<0||A.x>1)switch(this.wrapS){case iB:A.x=A.x-Math.floor(A.x);break;case og:A.x=A.x<0?0:1;break;case LQ:Math.abs(Math.floor(A.x)%2)===1?A.x=Math.ceil(A.x)-A.x:A.x=A.x-Math.floor(A.x);break}if(A.y<0||A.y>1)switch(this.wrapT){case iB:A.y=A.y-Math.floor(A.y);break;case og:A.y=A.y<0?0:1;break;case LQ:Math.abs(Math.floor(A.y)%2)===1?A.y=Math.ceil(A.y)-A.y:A.y=A.y-Math.floor(A.y);break}return this.flipY&&(A.y=1-A.y),A}set needsUpdate(A){A===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return KC("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===kI?NC:qe}set encoding(A){KC("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=A===NC?kI:eg}}YI.DEFAULT_IMAGE=null;YI.DEFAULT_MAPPING=ke;YI.DEFAULT_ANISOTROPY=1;class oI{constructor(A=0,I=0,g=0,C=1){oI.prototype.isVector4=!0,this.x=A,this.y=I,this.z=g,this.w=C}get width(){return this.z}set width(A){this.z=A}get height(){return this.w}set height(A){this.w=A}set(A,I,g,C){return this.x=A,this.y=I,this.z=g,this.w=C,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this.w=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setW(A){return this.w=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;case 2:this.z=I;break;case 3:this.w=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this.w=A.w!==void 0?A.w:1,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this.w+=A.w,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this.w+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this.z=A.z+I.z,this.w=A.w+I.w,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this.z+=A.z*I,this.w+=A.w*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this.w-=A.w,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this.w-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this.z=A.z-I.z,this.w=A.w-I.w,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this.w*=A.w,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this.w*=A,this}applyMatrix4(A){const I=this.x,g=this.y,C=this.z,Q=this.w,E=A.elements;return this.x=E[0]*I+E[4]*g+E[8]*C+E[12]*Q,this.y=E[1]*I+E[5]*g+E[9]*C+E[13]*Q,this.z=E[2]*I+E[6]*g+E[10]*C+E[14]*Q,this.w=E[3]*I+E[7]*g+E[11]*C+E[15]*Q,this}divideScalar(A){return this.multiplyScalar(1/A)}setAxisAngleFromQuaternion(A){this.w=2*Math.acos(A.w);const I=Math.sqrt(1-A.w*A.w);return I<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=A.x/I,this.y=A.y/I,this.z=A.z/I),this}setAxisAngleFromRotationMatrix(A){let I,g,C,Q;const o=A.elements,t=o[0],e=o[4],a=o[8],s=o[1],n=o[5],S=o[9],w=o[2],r=o[6],h=o[10];if(Math.abs(e-s)<.01&&Math.abs(a-w)<.01&&Math.abs(S-r)<.01){if(Math.abs(e+s)<.1&&Math.abs(a+w)<.1&&Math.abs(S+r)<.1&&Math.abs(t+n+h-3)<.1)return this.set(1,0,0,0),this;I=Math.PI;const G=(t+1)/2,K=(n+1)/2,d=(h+1)/2,R=(e+s)/4,J=(a+w)/4,Z=(S+r)/4;return G>K&&G>d?G<.01?(g=0,C=.707106781,Q=.707106781):(g=Math.sqrt(G),C=R/g,Q=J/g):K>d?K<.01?(g=.707106781,C=0,Q=.707106781):(C=Math.sqrt(K),g=R/C,Q=Z/C):d<.01?(g=.707106781,C=.707106781,Q=0):(Q=Math.sqrt(d),g=J/Q,C=Z/Q),this.set(g,C,Q,I),this}let M=Math.sqrt((r-S)*(r-S)+(a-w)*(a-w)+(s-e)*(s-e));return Math.abs(M)<.001&&(M=1),this.x=(r-S)/M,this.y=(a-w)/M,this.z=(s-e)/M,this.w=Math.acos((t+n+h-1)/2),this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this.w=Math.min(this.w,A.w),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this.w=Math.max(this.w,A.w),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this.z=Math.max(A.z,Math.min(I.z,this.z)),this.w=Math.max(A.w,Math.min(I.w,this.w)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this.z=Math.max(A,Math.min(I,this.z)),this.w=Math.max(A,Math.min(I,this.w)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z+this.w*A.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this.z+=(A.z-this.z)*I,this.w+=(A.w-this.w)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this.z=A.z+(I.z-A.z)*g,this.w=A.w+(I.w-A.w)*g,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z&&A.w===this.w}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this.z=A[I+2],this.w=A[I+3],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A[I+2]=this.z,A[I+3]=this.w,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this.z=A.getZ(I),this.w=A.getW(I),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class uD extends pC{constructor(A=1,I=1,g={}){super(),this.isRenderTarget=!0,this.width=A,this.height=I,this.depth=1,this.scissor=new oI(0,0,A,I),this.scissorTest=!1,this.viewport=new oI(0,0,A,I);const C={width:A,height:I,depth:1};g.encoding!==void 0&&(KC("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),g.colorSpace=g.encoding===NC?kI:eg),g=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:OI,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},g),this.texture=new YI(C,g.mapping,g.wrapS,g.wrapT,g.magFilter,g.minFilter,g.format,g.type,g.anisotropy,g.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=g.generateMipmaps,this.texture.internalFormat=g.internalFormat,this.depthBuffer=g.depthBuffer,this.stencilBuffer=g.stencilBuffer,this.depthTexture=g.depthTexture,this.samples=g.samples}setSize(A,I,g=1){(this.width!==A||this.height!==I||this.depth!==g)&&(this.width=A,this.height=I,this.depth=g,this.texture.image.width=A,this.texture.image.height=I,this.texture.image.depth=g,this.dispose()),this.viewport.set(0,0,A,I),this.scissor.set(0,0,A,I)}clone(){return new this.constructor().copy(this)}copy(A){this.width=A.width,this.height=A.height,this.depth=A.depth,this.scissor.copy(A.scissor),this.scissorTest=A.scissorTest,this.viewport.copy(A.viewport),this.texture=A.texture.clone(),this.texture.isRenderTargetTexture=!0;const I=Object.assign({},A.texture.image);return this.texture.source=new fe(I),this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,A.depthTexture!==null&&(this.depthTexture=A.depthTexture.clone()),this.samples=A.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class FC extends uD{constructor(A=1,I=1,g={}){super(A,I,g),this.isWebGLRenderTarget=!0}}class He extends YI{constructor(A=null,I=1,g=1,C=1){super(null),this.isDataArrayTexture=!0,this.image={data:A,width:I,height:g,depth:C},this.magFilter=dI,this.minFilter=dI,this.wrapR=og,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mD extends YI{constructor(A=null,I=1,g=1,C=1){super(null),this.isData3DTexture=!0,this.image={data:A,width:I,height:g,depth:C},this.magFilter=dI,this.minFilter=dI,this.wrapR=og,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wg{constructor(A=0,I=0,g=0,C=1){this.isQuaternion=!0,this._x=A,this._y=I,this._z=g,this._w=C}static slerpFlat(A,I,g,C,Q,E,i){let o=g[C+0],t=g[C+1],e=g[C+2],a=g[C+3];const s=Q[E+0],n=Q[E+1],S=Q[E+2],w=Q[E+3];if(i===0){A[I+0]=o,A[I+1]=t,A[I+2]=e,A[I+3]=a;return}if(i===1){A[I+0]=s,A[I+1]=n,A[I+2]=S,A[I+3]=w;return}if(a!==w||o!==s||t!==n||e!==S){let r=1-i;const h=o*s+t*n+e*S+a*w,M=h>=0?1:-1,G=1-h*h;if(G>Number.EPSILON){const d=Math.sqrt(G),R=Math.atan2(d,h*M);r=Math.sin(r*R)/d,i=Math.sin(i*R)/d}const K=i*M;if(o=o*r+s*K,t=t*r+n*K,e=e*r+S*K,a=a*r+w*K,r===1-i){const d=1/Math.sqrt(o*o+t*t+e*e+a*a);o*=d,t*=d,e*=d,a*=d}}A[I]=o,A[I+1]=t,A[I+2]=e,A[I+3]=a}static multiplyQuaternionsFlat(A,I,g,C,Q,E){const i=g[C],o=g[C+1],t=g[C+2],e=g[C+3],a=Q[E],s=Q[E+1],n=Q[E+2],S=Q[E+3];return A[I]=i*S+e*a+o*n-t*s,A[I+1]=o*S+e*s+t*a-i*n,A[I+2]=t*S+e*n+i*s-o*a,A[I+3]=e*S-i*a-o*s-t*n,A}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get w(){return this._w}set w(A){this._w=A,this._onChangeCallback()}set(A,I,g,C){return this._x=A,this._y=I,this._z=g,this._w=C,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(A){return this._x=A.x,this._y=A.y,this._z=A.z,this._w=A.w,this._onChangeCallback(),this}setFromEuler(A,I=!0){const g=A._x,C=A._y,Q=A._z,E=A._order,i=Math.cos,o=Math.sin,t=i(g/2),e=i(C/2),a=i(Q/2),s=o(g/2),n=o(C/2),S=o(Q/2);switch(E){case"XYZ":this._x=s*e*a+t*n*S,this._y=t*n*a-s*e*S,this._z=t*e*S+s*n*a,this._w=t*e*a-s*n*S;break;case"YXZ":this._x=s*e*a+t*n*S,this._y=t*n*a-s*e*S,this._z=t*e*S-s*n*a,this._w=t*e*a+s*n*S;break;case"ZXY":this._x=s*e*a-t*n*S,this._y=t*n*a+s*e*S,this._z=t*e*S+s*n*a,this._w=t*e*a-s*n*S;break;case"ZYX":this._x=s*e*a-t*n*S,this._y=t*n*a+s*e*S,this._z=t*e*S-s*n*a,this._w=t*e*a+s*n*S;break;case"YZX":this._x=s*e*a+t*n*S,this._y=t*n*a+s*e*S,this._z=t*e*S-s*n*a,this._w=t*e*a-s*n*S;break;case"XZY":this._x=s*e*a-t*n*S,this._y=t*n*a-s*e*S,this._z=t*e*S+s*n*a,this._w=t*e*a+s*n*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+E)}return I===!0&&this._onChangeCallback(),this}setFromAxisAngle(A,I){const g=I/2,C=Math.sin(g);return this._x=A.x*C,this._y=A.y*C,this._z=A.z*C,this._w=Math.cos(g),this._onChangeCallback(),this}setFromRotationMatrix(A){const I=A.elements,g=I[0],C=I[4],Q=I[8],E=I[1],i=I[5],o=I[9],t=I[2],e=I[6],a=I[10],s=g+i+a;if(s>0){const n=.5/Math.sqrt(s+1);this._w=.25/n,this._x=(e-o)*n,this._y=(Q-t)*n,this._z=(E-C)*n}else if(g>i&&g>a){const n=2*Math.sqrt(1+g-i-a);this._w=(e-o)/n,this._x=.25*n,this._y=(C+E)/n,this._z=(Q+t)/n}else if(i>a){const n=2*Math.sqrt(1+i-g-a);this._w=(Q-t)/n,this._x=(C+E)/n,this._y=.25*n,this._z=(o+e)/n}else{const n=2*Math.sqrt(1+a-g-i);this._w=(E-C)/n,this._x=(Q+t)/n,this._y=(o+e)/n,this._z=.25*n}return this._onChangeCallback(),this}setFromUnitVectors(A,I){let g=A.dot(I)+1;return g<Number.EPSILON?(g=0,Math.abs(A.x)>Math.abs(A.z)?(this._x=-A.y,this._y=A.x,this._z=0,this._w=g):(this._x=0,this._y=-A.z,this._z=A.y,this._w=g)):(this._x=A.y*I.z-A.z*I.y,this._y=A.z*I.x-A.x*I.z,this._z=A.x*I.y-A.y*I.x,this._w=g),this.normalize()}angleTo(A){return 2*Math.acos(Math.abs(_I(this.dot(A),-1,1)))}rotateTowards(A,I){const g=this.angleTo(A);if(g===0)return this;const C=Math.min(1,I/g);return this.slerp(A,C),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(A){return this._x*A._x+this._y*A._y+this._z*A._z+this._w*A._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let A=this.length();return A===0?(this._x=0,this._y=0,this._z=0,this._w=1):(A=1/A,this._x=this._x*A,this._y=this._y*A,this._z=this._z*A,this._w=this._w*A),this._onChangeCallback(),this}multiply(A){return this.multiplyQuaternions(this,A)}premultiply(A){return this.multiplyQuaternions(A,this)}multiplyQuaternions(A,I){const g=A._x,C=A._y,Q=A._z,E=A._w,i=I._x,o=I._y,t=I._z,e=I._w;return this._x=g*e+E*i+C*t-Q*o,this._y=C*e+E*o+Q*i-g*t,this._z=Q*e+E*t+g*o-C*i,this._w=E*e-g*i-C*o-Q*t,this._onChangeCallback(),this}slerp(A,I){if(I===0)return this;if(I===1)return this.copy(A);const g=this._x,C=this._y,Q=this._z,E=this._w;let i=E*A._w+g*A._x+C*A._y+Q*A._z;if(i<0?(this._w=-A._w,this._x=-A._x,this._y=-A._y,this._z=-A._z,i=-i):this.copy(A),i>=1)return this._w=E,this._x=g,this._y=C,this._z=Q,this;const o=1-i*i;if(o<=Number.EPSILON){const n=1-I;return this._w=n*E+I*this._w,this._x=n*g+I*this._x,this._y=n*C+I*this._y,this._z=n*Q+I*this._z,this.normalize(),this}const t=Math.sqrt(o),e=Math.atan2(t,i),a=Math.sin((1-I)*e)/t,s=Math.sin(I*e)/t;return this._w=E*a+this._w*s,this._x=g*a+this._x*s,this._y=C*a+this._y*s,this._z=Q*a+this._z*s,this._onChangeCallback(),this}slerpQuaternions(A,I,g){return this.copy(A).slerp(I,g)}random(){const A=Math.random(),I=Math.sqrt(1-A),g=Math.sqrt(A),C=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random();return this.set(I*Math.cos(C),g*Math.sin(Q),g*Math.cos(Q),I*Math.sin(C))}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._w===this._w}fromArray(A,I=0){return this._x=A[I],this._y=A[I+1],this._z=A[I+2],this._w=A[I+3],this._onChangeCallback(),this}toArray(A=[],I=0){return A[I]=this._x,A[I+1]=this._y,A[I+2]=this._z,A[I+3]=this._w,A}fromBufferAttribute(A,I){return this._x=A.getX(I),this._y=A.getY(I),this._z=A.getZ(I),this._w=A.getW(I),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(A=0,I=0,g=0){Y.prototype.isVector3=!0,this.x=A,this.y=I,this.z=g}set(A,I,g){return g===void 0&&(g=this.z),this.x=A,this.y=I,this.z=g,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;case 2:this.z=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this.z=A.z+I.z,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this.z+=A.z*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this.z=A.z-I.z,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this}multiplyVectors(A,I){return this.x=A.x*I.x,this.y=A.y*I.y,this.z=A.z*I.z,this}applyEuler(A){return this.applyQuaternion(Qt.setFromEuler(A))}applyAxisAngle(A,I){return this.applyQuaternion(Qt.setFromAxisAngle(A,I))}applyMatrix3(A){const I=this.x,g=this.y,C=this.z,Q=A.elements;return this.x=Q[0]*I+Q[3]*g+Q[6]*C,this.y=Q[1]*I+Q[4]*g+Q[7]*C,this.z=Q[2]*I+Q[5]*g+Q[8]*C,this}applyNormalMatrix(A){return this.applyMatrix3(A).normalize()}applyMatrix4(A){const I=this.x,g=this.y,C=this.z,Q=A.elements,E=1/(Q[3]*I+Q[7]*g+Q[11]*C+Q[15]);return this.x=(Q[0]*I+Q[4]*g+Q[8]*C+Q[12])*E,this.y=(Q[1]*I+Q[5]*g+Q[9]*C+Q[13])*E,this.z=(Q[2]*I+Q[6]*g+Q[10]*C+Q[14])*E,this}applyQuaternion(A){const I=this.x,g=this.y,C=this.z,Q=A.x,E=A.y,i=A.z,o=A.w,t=2*(E*C-i*g),e=2*(i*I-Q*C),a=2*(Q*g-E*I);return this.x=I+o*t+E*a-i*e,this.y=g+o*e+i*t-Q*a,this.z=C+o*a+Q*e-E*t,this}project(A){return this.applyMatrix4(A.matrixWorldInverse).applyMatrix4(A.projectionMatrix)}unproject(A){return this.applyMatrix4(A.projectionMatrixInverse).applyMatrix4(A.matrixWorld)}transformDirection(A){const I=this.x,g=this.y,C=this.z,Q=A.elements;return this.x=Q[0]*I+Q[4]*g+Q[8]*C,this.y=Q[1]*I+Q[5]*g+Q[9]*C,this.z=Q[2]*I+Q[6]*g+Q[10]*C,this.normalize()}divide(A){return this.x/=A.x,this.y/=A.y,this.z/=A.z,this}divideScalar(A){return this.multiplyScalar(1/A)}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this.z=Math.max(A.z,Math.min(I.z,this.z)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this.z=Math.max(A,Math.min(I,this.z)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this.z+=(A.z-this.z)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this.z=A.z+(I.z-A.z)*g,this}cross(A){return this.crossVectors(this,A)}crossVectors(A,I){const g=A.x,C=A.y,Q=A.z,E=I.x,i=I.y,o=I.z;return this.x=C*o-Q*i,this.y=Q*E-g*o,this.z=g*i-C*E,this}projectOnVector(A){const I=A.lengthSq();if(I===0)return this.set(0,0,0);const g=A.dot(this)/I;return this.copy(A).multiplyScalar(g)}projectOnPlane(A){return NE.copy(this).projectOnVector(A),this.sub(NE)}reflect(A){return this.sub(NE.copy(A).multiplyScalar(2*this.dot(A)))}angleTo(A){const I=Math.sqrt(this.lengthSq()*A.lengthSq());if(I===0)return Math.PI/2;const g=this.dot(A)/I;return Math.acos(_I(g,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const I=this.x-A.x,g=this.y-A.y,C=this.z-A.z;return I*I+g*g+C*C}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)+Math.abs(this.z-A.z)}setFromSpherical(A){return this.setFromSphericalCoords(A.radius,A.phi,A.theta)}setFromSphericalCoords(A,I,g){const C=Math.sin(I)*A;return this.x=C*Math.sin(g),this.y=Math.cos(I)*A,this.z=C*Math.cos(g),this}setFromCylindrical(A){return this.setFromCylindricalCoords(A.radius,A.theta,A.y)}setFromCylindricalCoords(A,I,g){return this.x=A*Math.sin(I),this.y=g,this.z=A*Math.cos(I),this}setFromMatrixPosition(A){const I=A.elements;return this.x=I[12],this.y=I[13],this.z=I[14],this}setFromMatrixScale(A){const I=this.setFromMatrixColumn(A,0).length(),g=this.setFromMatrixColumn(A,1).length(),C=this.setFromMatrixColumn(A,2).length();return this.x=I,this.y=g,this.z=C,this}setFromMatrixColumn(A,I){return this.fromArray(A.elements,I*4)}setFromMatrix3Column(A,I){return this.fromArray(A.elements,I*3)}setFromEuler(A){return this.x=A._x,this.y=A._y,this.z=A._z,this}setFromColor(A){return this.x=A.r,this.y=A.g,this.z=A.b,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this.z=A[I+2],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A[I+2]=this.z,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this.z=A.getZ(I),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const A=(Math.random()-.5)*2,I=Math.random()*Math.PI*2,g=Math.sqrt(1-A**2);return this.x=g*Math.cos(I),this.y=g*Math.sin(I),this.z=A,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const NE=new Y,Qt=new wg;class Kg{constructor(A=new Y(1/0,1/0,1/0),I=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=A,this.max=I}set(A,I){return this.min.copy(A),this.max.copy(I),this}setFromArray(A){this.makeEmpty();for(let I=0,g=A.length;I<g;I+=3)this.expandByPoint(ag.fromArray(A,I));return this}setFromBufferAttribute(A){this.makeEmpty();for(let I=0,g=A.count;I<g;I++)this.expandByPoint(ag.fromBufferAttribute(A,I));return this}setFromPoints(A){this.makeEmpty();for(let I=0,g=A.length;I<g;I++)this.expandByPoint(A[I]);return this}setFromCenterAndSize(A,I){const g=ag.copy(I).multiplyScalar(.5);return this.min.copy(A).sub(g),this.max.copy(A).add(g),this}setFromObject(A,I=!1){return this.makeEmpty(),this.expandByObject(A,I)}clone(){return new this.constructor().copy(this)}copy(A){return this.min.copy(A.min),this.max.copy(A.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(A){return this.isEmpty()?A.set(0,0,0):A.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(A){return this.isEmpty()?A.set(0,0,0):A.subVectors(this.max,this.min)}expandByPoint(A){return this.min.min(A),this.max.max(A),this}expandByVector(A){return this.min.sub(A),this.max.add(A),this}expandByScalar(A){return this.min.addScalar(-A),this.max.addScalar(A),this}expandByObject(A,I=!1){A.updateWorldMatrix(!1,!1);const g=A.geometry;if(g!==void 0){const Q=g.getAttribute("position");if(I===!0&&Q!==void 0&&A.isInstancedMesh!==!0)for(let E=0,i=Q.count;E<i;E++)A.isMesh===!0?A.getVertexPosition(E,ag):ag.fromBufferAttribute(Q,E),ag.applyMatrix4(A.matrixWorld),this.expandByPoint(ag);else A.boundingBox!==void 0?(A.boundingBox===null&&A.computeBoundingBox(),CQ.copy(A.boundingBox)):(g.boundingBox===null&&g.computeBoundingBox(),CQ.copy(g.boundingBox)),CQ.applyMatrix4(A.matrixWorld),this.union(CQ)}const C=A.children;for(let Q=0,E=C.length;Q<E;Q++)this.expandByObject(C[Q],I);return this}containsPoint(A){return!(A.x<this.min.x||A.x>this.max.x||A.y<this.min.y||A.y>this.max.y||A.z<this.min.z||A.z>this.max.z)}containsBox(A){return this.min.x<=A.min.x&&A.max.x<=this.max.x&&this.min.y<=A.min.y&&A.max.y<=this.max.y&&this.min.z<=A.min.z&&A.max.z<=this.max.z}getParameter(A,I){return I.set((A.x-this.min.x)/(this.max.x-this.min.x),(A.y-this.min.y)/(this.max.y-this.min.y),(A.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(A){return!(A.max.x<this.min.x||A.min.x>this.max.x||A.max.y<this.min.y||A.min.y>this.max.y||A.max.z<this.min.z||A.min.z>this.max.z)}intersectsSphere(A){return this.clampPoint(A.center,ag),ag.distanceToSquared(A.center)<=A.radius*A.radius}intersectsPlane(A){let I,g;return A.normal.x>0?(I=A.normal.x*this.min.x,g=A.normal.x*this.max.x):(I=A.normal.x*this.max.x,g=A.normal.x*this.min.x),A.normal.y>0?(I+=A.normal.y*this.min.y,g+=A.normal.y*this.max.y):(I+=A.normal.y*this.max.y,g+=A.normal.y*this.min.y),A.normal.z>0?(I+=A.normal.z*this.min.z,g+=A.normal.z*this.max.z):(I+=A.normal.z*this.max.z,g+=A.normal.z*this.min.z),I<=-A.constant&&g>=-A.constant}intersectsTriangle(A){if(this.isEmpty())return!1;this.getCenter(yB),BQ.subVectors(this.max,yB),LC.subVectors(A.a,yB),fC.subVectors(A.b,yB),HC.subVectors(A.c,yB),Pg.subVectors(fC,LC),jg.subVectors(HC,fC),aC.subVectors(LC,HC);let I=[0,-Pg.z,Pg.y,0,-jg.z,jg.y,0,-aC.z,aC.y,Pg.z,0,-Pg.x,jg.z,0,-jg.x,aC.z,0,-aC.x,-Pg.y,Pg.x,0,-jg.y,jg.x,0,-aC.y,aC.x,0];return!KE(I,LC,fC,HC,BQ)||(I=[1,0,0,0,1,0,0,0,1],!KE(I,LC,fC,HC,BQ))?!1:(QQ.crossVectors(Pg,jg),I=[QQ.x,QQ.y,QQ.z],KE(I,LC,fC,HC,BQ))}clampPoint(A,I){return I.copy(A).clamp(this.min,this.max)}distanceToPoint(A){return this.clampPoint(A,ag).distanceTo(A)}getBoundingSphere(A){return this.isEmpty()?A.makeEmpty():(this.getCenter(A.center),A.radius=this.getSize(ag).length()*.5),A}intersect(A){return this.min.max(A.min),this.max.min(A.max),this.isEmpty()&&this.makeEmpty(),this}union(A){return this.min.min(A.min),this.max.max(A.max),this}applyMatrix4(A){return this.isEmpty()?this:(pg[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(A),pg[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(A),pg[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(A),pg[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(A),pg[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(A),pg[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(A),pg[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(A),pg[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(A),this.setFromPoints(pg),this)}translate(A){return this.min.add(A),this.max.add(A),this}equals(A){return A.min.equals(this.min)&&A.max.equals(this.max)}}const pg=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],ag=new Y,CQ=new Kg,LC=new Y,fC=new Y,HC=new Y,Pg=new Y,jg=new Y,aC=new Y,yB=new Y,BQ=new Y,QQ=new Y,sC=new Y;function KE(B,A,I,g,C){for(let Q=0,E=B.length-3;Q<=E;Q+=3){sC.fromArray(B,Q);const i=C.x*Math.abs(sC.x)+C.y*Math.abs(sC.y)+C.z*Math.abs(sC.z),o=A.dot(sC),t=I.dot(sC),e=g.dot(sC);if(Math.max(-Math.max(o,t,e),Math.min(o,t,e))>i)return!1}return!0}const TD=new Kg,MB=new Y,FE=new Y;class Fg{constructor(A=new Y,I=-1){this.isSphere=!0,this.center=A,this.radius=I}set(A,I){return this.center.copy(A),this.radius=I,this}setFromPoints(A,I){const g=this.center;I!==void 0?g.copy(I):TD.setFromPoints(A).getCenter(g);let C=0;for(let Q=0,E=A.length;Q<E;Q++)C=Math.max(C,g.distanceToSquared(A[Q]));return this.radius=Math.sqrt(C),this}copy(A){return this.center.copy(A.center),this.radius=A.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(A){return A.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(A){return A.distanceTo(this.center)-this.radius}intersectsSphere(A){const I=this.radius+A.radius;return A.center.distanceToSquared(this.center)<=I*I}intersectsBox(A){return A.intersectsSphere(this)}intersectsPlane(A){return Math.abs(A.distanceToPoint(this.center))<=this.radius}clampPoint(A,I){const g=this.center.distanceToSquared(A);return I.copy(A),g>this.radius*this.radius&&(I.sub(this.center).normalize(),I.multiplyScalar(this.radius).add(this.center)),I}getBoundingBox(A){return this.isEmpty()?(A.makeEmpty(),A):(A.set(this.center,this.center),A.expandByScalar(this.radius),A)}applyMatrix4(A){return this.center.applyMatrix4(A),this.radius=this.radius*A.getMaxScaleOnAxis(),this}translate(A){return this.center.add(A),this}expandByPoint(A){if(this.isEmpty())return this.center.copy(A),this.radius=0,this;MB.subVectors(A,this.center);const I=MB.lengthSq();if(I>this.radius*this.radius){const g=Math.sqrt(I),C=(g-this.radius)*.5;this.center.addScaledVector(MB,C/g),this.radius+=C}return this}union(A){return A.isEmpty()?this:this.isEmpty()?(this.copy(A),this):(this.center.equals(A.center)===!0?this.radius=Math.max(this.radius,A.radius):(FE.subVectors(A.center,this.center).setLength(A.radius),this.expandByPoint(MB.copy(A.center).add(FE)),this.expandByPoint(MB.copy(A.center).sub(FE))),this)}equals(A){return A.center.equals(this.center)&&A.radius===this.radius}clone(){return new this.constructor().copy(this)}}const dg=new Y,JE=new Y,EQ=new Y,Vg=new Y,RE=new Y,iQ=new Y,qE=new Y;class zQ{constructor(A=new Y,I=new Y(0,0,-1)){this.origin=A,this.direction=I}set(A,I){return this.origin.copy(A),this.direction.copy(I),this}copy(A){return this.origin.copy(A.origin),this.direction.copy(A.direction),this}at(A,I){return I.copy(this.origin).addScaledVector(this.direction,A)}lookAt(A){return this.direction.copy(A).sub(this.origin).normalize(),this}recast(A){return this.origin.copy(this.at(A,dg)),this}closestPointToPoint(A,I){I.subVectors(A,this.origin);const g=I.dot(this.direction);return g<0?I.copy(this.origin):I.copy(this.origin).addScaledVector(this.direction,g)}distanceToPoint(A){return Math.sqrt(this.distanceSqToPoint(A))}distanceSqToPoint(A){const I=dg.subVectors(A,this.origin).dot(this.direction);return I<0?this.origin.distanceToSquared(A):(dg.copy(this.origin).addScaledVector(this.direction,I),dg.distanceToSquared(A))}distanceSqToSegment(A,I,g,C){JE.copy(A).add(I).multiplyScalar(.5),EQ.copy(I).sub(A).normalize(),Vg.copy(this.origin).sub(JE);const Q=A.distanceTo(I)*.5,E=-this.direction.dot(EQ),i=Vg.dot(this.direction),o=-Vg.dot(EQ),t=Vg.lengthSq(),e=Math.abs(1-E*E);let a,s,n,S;if(e>0)if(a=E*o-i,s=E*i-o,S=Q*e,a>=0)if(s>=-S)if(s<=S){const w=1/e;a*=w,s*=w,n=a*(a+E*s+2*i)+s*(E*a+s+2*o)+t}else s=Q,a=Math.max(0,-(E*s+i)),n=-a*a+s*(s+2*o)+t;else s=-Q,a=Math.max(0,-(E*s+i)),n=-a*a+s*(s+2*o)+t;else s<=-S?(a=Math.max(0,-(-E*Q+i)),s=a>0?-Q:Math.min(Math.max(-Q,-o),Q),n=-a*a+s*(s+2*o)+t):s<=S?(a=0,s=Math.min(Math.max(-Q,-o),Q),n=s*(s+2*o)+t):(a=Math.max(0,-(E*Q+i)),s=a>0?Q:Math.min(Math.max(-Q,-o),Q),n=-a*a+s*(s+2*o)+t);else s=E>0?-Q:Q,a=Math.max(0,-(E*s+i)),n=-a*a+s*(s+2*o)+t;return g&&g.copy(this.origin).addScaledVector(this.direction,a),C&&C.copy(JE).addScaledVector(EQ,s),n}intersectSphere(A,I){dg.subVectors(A.center,this.origin);const g=dg.dot(this.direction),C=dg.dot(dg)-g*g,Q=A.radius*A.radius;if(C>Q)return null;const E=Math.sqrt(Q-C),i=g-E,o=g+E;return o<0?null:i<0?this.at(o,I):this.at(i,I)}intersectsSphere(A){return this.distanceSqToPoint(A.center)<=A.radius*A.radius}distanceToPlane(A){const I=A.normal.dot(this.direction);if(I===0)return A.distanceToPoint(this.origin)===0?0:null;const g=-(this.origin.dot(A.normal)+A.constant)/I;return g>=0?g:null}intersectPlane(A,I){const g=this.distanceToPlane(A);return g===null?null:this.at(g,I)}intersectsPlane(A){const I=A.distanceToPoint(this.origin);return I===0||A.normal.dot(this.direction)*I<0}intersectBox(A,I){let g,C,Q,E,i,o;const t=1/this.direction.x,e=1/this.direction.y,a=1/this.direction.z,s=this.origin;return t>=0?(g=(A.min.x-s.x)*t,C=(A.max.x-s.x)*t):(g=(A.max.x-s.x)*t,C=(A.min.x-s.x)*t),e>=0?(Q=(A.min.y-s.y)*e,E=(A.max.y-s.y)*e):(Q=(A.max.y-s.y)*e,E=(A.min.y-s.y)*e),g>E||Q>C||((Q>g||isNaN(g))&&(g=Q),(E<C||isNaN(C))&&(C=E),a>=0?(i=(A.min.z-s.z)*a,o=(A.max.z-s.z)*a):(i=(A.max.z-s.z)*a,o=(A.min.z-s.z)*a),g>o||i>C)||((i>g||g!==g)&&(g=i),(o<C||C!==C)&&(C=o),C<0)?null:this.at(g>=0?g:C,I)}intersectsBox(A){return this.intersectBox(A,dg)!==null}intersectTriangle(A,I,g,C,Q){RE.subVectors(I,A),iQ.subVectors(g,A),qE.crossVectors(RE,iQ);let E=this.direction.dot(qE),i;if(E>0){if(C)return null;i=1}else if(E<0)i=-1,E=-E;else return null;Vg.subVectors(this.origin,A);const o=i*this.direction.dot(iQ.crossVectors(Vg,iQ));if(o<0)return null;const t=i*this.direction.dot(RE.cross(Vg));if(t<0||o+t>E)return null;const e=-i*Vg.dot(qE);return e<0?null:this.at(e/E,Q)}applyMatrix4(A){return this.origin.applyMatrix4(A),this.direction.transformDirection(A),this}equals(A){return A.origin.equals(this.origin)&&A.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vA{constructor(A,I,g,C,Q,E,i,o,t,e,a,s,n,S,w,r){vA.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],A!==void 0&&this.set(A,I,g,C,Q,E,i,o,t,e,a,s,n,S,w,r)}set(A,I,g,C,Q,E,i,o,t,e,a,s,n,S,w,r){const h=this.elements;return h[0]=A,h[4]=I,h[8]=g,h[12]=C,h[1]=Q,h[5]=E,h[9]=i,h[13]=o,h[2]=t,h[6]=e,h[10]=a,h[14]=s,h[3]=n,h[7]=S,h[11]=w,h[15]=r,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vA().fromArray(this.elements)}copy(A){const I=this.elements,g=A.elements;return I[0]=g[0],I[1]=g[1],I[2]=g[2],I[3]=g[3],I[4]=g[4],I[5]=g[5],I[6]=g[6],I[7]=g[7],I[8]=g[8],I[9]=g[9],I[10]=g[10],I[11]=g[11],I[12]=g[12],I[13]=g[13],I[14]=g[14],I[15]=g[15],this}copyPosition(A){const I=this.elements,g=A.elements;return I[12]=g[12],I[13]=g[13],I[14]=g[14],this}setFromMatrix3(A){const I=A.elements;return this.set(I[0],I[3],I[6],0,I[1],I[4],I[7],0,I[2],I[5],I[8],0,0,0,0,1),this}extractBasis(A,I,g){return A.setFromMatrixColumn(this,0),I.setFromMatrixColumn(this,1),g.setFromMatrixColumn(this,2),this}makeBasis(A,I,g){return this.set(A.x,I.x,g.x,0,A.y,I.y,g.y,0,A.z,I.z,g.z,0,0,0,0,1),this}extractRotation(A){const I=this.elements,g=A.elements,C=1/uC.setFromMatrixColumn(A,0).length(),Q=1/uC.setFromMatrixColumn(A,1).length(),E=1/uC.setFromMatrixColumn(A,2).length();return I[0]=g[0]*C,I[1]=g[1]*C,I[2]=g[2]*C,I[3]=0,I[4]=g[4]*Q,I[5]=g[5]*Q,I[6]=g[6]*Q,I[7]=0,I[8]=g[8]*E,I[9]=g[9]*E,I[10]=g[10]*E,I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,this}makeRotationFromEuler(A){const I=this.elements,g=A.x,C=A.y,Q=A.z,E=Math.cos(g),i=Math.sin(g),o=Math.cos(C),t=Math.sin(C),e=Math.cos(Q),a=Math.sin(Q);if(A.order==="XYZ"){const s=E*e,n=E*a,S=i*e,w=i*a;I[0]=o*e,I[4]=-o*a,I[8]=t,I[1]=n+S*t,I[5]=s-w*t,I[9]=-i*o,I[2]=w-s*t,I[6]=S+n*t,I[10]=E*o}else if(A.order==="YXZ"){const s=o*e,n=o*a,S=t*e,w=t*a;I[0]=s+w*i,I[4]=S*i-n,I[8]=E*t,I[1]=E*a,I[5]=E*e,I[9]=-i,I[2]=n*i-S,I[6]=w+s*i,I[10]=E*o}else if(A.order==="ZXY"){const s=o*e,n=o*a,S=t*e,w=t*a;I[0]=s-w*i,I[4]=-E*a,I[8]=S+n*i,I[1]=n+S*i,I[5]=E*e,I[9]=w-s*i,I[2]=-E*t,I[6]=i,I[10]=E*o}else if(A.order==="ZYX"){const s=E*e,n=E*a,S=i*e,w=i*a;I[0]=o*e,I[4]=S*t-n,I[8]=s*t+w,I[1]=o*a,I[5]=w*t+s,I[9]=n*t-S,I[2]=-t,I[6]=i*o,I[10]=E*o}else if(A.order==="YZX"){const s=E*o,n=E*t,S=i*o,w=i*t;I[0]=o*e,I[4]=w-s*a,I[8]=S*a+n,I[1]=a,I[5]=E*e,I[9]=-i*e,I[2]=-t*e,I[6]=n*a+S,I[10]=s-w*a}else if(A.order==="XZY"){const s=E*o,n=E*t,S=i*o,w=i*t;I[0]=o*e,I[4]=-a,I[8]=t*e,I[1]=s*a+w,I[5]=E*e,I[9]=n*a-S,I[2]=S*a-n,I[6]=i*e,I[10]=w*a+s}return I[3]=0,I[7]=0,I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,this}makeRotationFromQuaternion(A){return this.compose(bD,A,xD)}lookAt(A,I,g){const C=this.elements;return $I.subVectors(A,I),$I.lengthSq()===0&&($I.z=1),$I.normalize(),Xg.crossVectors(g,$I),Xg.lengthSq()===0&&(Math.abs(g.z)===1?$I.x+=1e-4:$I.z+=1e-4,$I.normalize(),Xg.crossVectors(g,$I)),Xg.normalize(),oQ.crossVectors($I,Xg),C[0]=Xg.x,C[4]=oQ.x,C[8]=$I.x,C[1]=Xg.y,C[5]=oQ.y,C[9]=$I.y,C[2]=Xg.z,C[6]=oQ.z,C[10]=$I.z,this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,I){const g=A.elements,C=I.elements,Q=this.elements,E=g[0],i=g[4],o=g[8],t=g[12],e=g[1],a=g[5],s=g[9],n=g[13],S=g[2],w=g[6],r=g[10],h=g[14],M=g[3],G=g[7],K=g[11],d=g[15],R=C[0],J=C[4],Z=C[8],CA=C[12],l=C[1],N=C[5],P=C[9],BA=C[13],L=C[2],O=C[6],_=C[10],j=C[14],W=C[3],v=C[7],$=C[11],AA=C[15];return Q[0]=E*R+i*l+o*L+t*W,Q[4]=E*J+i*N+o*O+t*v,Q[8]=E*Z+i*P+o*_+t*$,Q[12]=E*CA+i*BA+o*j+t*AA,Q[1]=e*R+a*l+s*L+n*W,Q[5]=e*J+a*N+s*O+n*v,Q[9]=e*Z+a*P+s*_+n*$,Q[13]=e*CA+a*BA+s*j+n*AA,Q[2]=S*R+w*l+r*L+h*W,Q[6]=S*J+w*N+r*O+h*v,Q[10]=S*Z+w*P+r*_+h*$,Q[14]=S*CA+w*BA+r*j+h*AA,Q[3]=M*R+G*l+K*L+d*W,Q[7]=M*J+G*N+K*O+d*v,Q[11]=M*Z+G*P+K*_+d*$,Q[15]=M*CA+G*BA+K*j+d*AA,this}multiplyScalar(A){const I=this.elements;return I[0]*=A,I[4]*=A,I[8]*=A,I[12]*=A,I[1]*=A,I[5]*=A,I[9]*=A,I[13]*=A,I[2]*=A,I[6]*=A,I[10]*=A,I[14]*=A,I[3]*=A,I[7]*=A,I[11]*=A,I[15]*=A,this}determinant(){const A=this.elements,I=A[0],g=A[4],C=A[8],Q=A[12],E=A[1],i=A[5],o=A[9],t=A[13],e=A[2],a=A[6],s=A[10],n=A[14],S=A[3],w=A[7],r=A[11],h=A[15];return S*(+Q*o*a-C*t*a-Q*i*s+g*t*s+C*i*n-g*o*n)+w*(+I*o*n-I*t*s+Q*E*s-C*E*n+C*t*e-Q*o*e)+r*(+I*t*a-I*i*n-Q*E*a+g*E*n+Q*i*e-g*t*e)+h*(-C*i*e-I*o*a+I*i*s+C*E*a-g*E*s+g*o*e)}transpose(){const A=this.elements;let I;return I=A[1],A[1]=A[4],A[4]=I,I=A[2],A[2]=A[8],A[8]=I,I=A[6],A[6]=A[9],A[9]=I,I=A[3],A[3]=A[12],A[12]=I,I=A[7],A[7]=A[13],A[13]=I,I=A[11],A[11]=A[14],A[14]=I,this}setPosition(A,I,g){const C=this.elements;return A.isVector3?(C[12]=A.x,C[13]=A.y,C[14]=A.z):(C[12]=A,C[13]=I,C[14]=g),this}invert(){const A=this.elements,I=A[0],g=A[1],C=A[2],Q=A[3],E=A[4],i=A[5],o=A[6],t=A[7],e=A[8],a=A[9],s=A[10],n=A[11],S=A[12],w=A[13],r=A[14],h=A[15],M=a*r*t-w*s*t+w*o*n-i*r*n-a*o*h+i*s*h,G=S*s*t-e*r*t-S*o*n+E*r*n+e*o*h-E*s*h,K=e*w*t-S*a*t+S*i*n-E*w*n-e*i*h+E*a*h,d=S*a*o-e*w*o-S*i*s+E*w*s+e*i*r-E*a*r,R=I*M+g*G+C*K+Q*d;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const J=1/R;return A[0]=M*J,A[1]=(w*s*Q-a*r*Q-w*C*n+g*r*n+a*C*h-g*s*h)*J,A[2]=(i*r*Q-w*o*Q+w*C*t-g*r*t-i*C*h+g*o*h)*J,A[3]=(a*o*Q-i*s*Q-a*C*t+g*s*t+i*C*n-g*o*n)*J,A[4]=G*J,A[5]=(e*r*Q-S*s*Q+S*C*n-I*r*n-e*C*h+I*s*h)*J,A[6]=(S*o*Q-E*r*Q-S*C*t+I*r*t+E*C*h-I*o*h)*J,A[7]=(E*s*Q-e*o*Q+e*C*t-I*s*t-E*C*n+I*o*n)*J,A[8]=K*J,A[9]=(S*a*Q-e*w*Q-S*g*n+I*w*n+e*g*h-I*a*h)*J,A[10]=(E*w*Q-S*i*Q+S*g*t-I*w*t-E*g*h+I*i*h)*J,A[11]=(e*i*Q-E*a*Q-e*g*t+I*a*t+E*g*n-I*i*n)*J,A[12]=d*J,A[13]=(e*w*C-S*a*C+S*g*s-I*w*s-e*g*r+I*a*r)*J,A[14]=(S*i*C-E*w*C-S*g*o+I*w*o+E*g*r-I*i*r)*J,A[15]=(E*a*C-e*i*C+e*g*o-I*a*o-E*g*s+I*i*s)*J,this}scale(A){const I=this.elements,g=A.x,C=A.y,Q=A.z;return I[0]*=g,I[4]*=C,I[8]*=Q,I[1]*=g,I[5]*=C,I[9]*=Q,I[2]*=g,I[6]*=C,I[10]*=Q,I[3]*=g,I[7]*=C,I[11]*=Q,this}getMaxScaleOnAxis(){const A=this.elements,I=A[0]*A[0]+A[1]*A[1]+A[2]*A[2],g=A[4]*A[4]+A[5]*A[5]+A[6]*A[6],C=A[8]*A[8]+A[9]*A[9]+A[10]*A[10];return Math.sqrt(Math.max(I,g,C))}makeTranslation(A,I,g){return A.isVector3?this.set(1,0,0,A.x,0,1,0,A.y,0,0,1,A.z,0,0,0,1):this.set(1,0,0,A,0,1,0,I,0,0,1,g,0,0,0,1),this}makeRotationX(A){const I=Math.cos(A),g=Math.sin(A);return this.set(1,0,0,0,0,I,-g,0,0,g,I,0,0,0,0,1),this}makeRotationY(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,0,g,0,0,1,0,0,-g,0,I,0,0,0,0,1),this}makeRotationZ(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,-g,0,0,g,I,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(A,I){const g=Math.cos(I),C=Math.sin(I),Q=1-g,E=A.x,i=A.y,o=A.z,t=Q*E,e=Q*i;return this.set(t*E+g,t*i-C*o,t*o+C*i,0,t*i+C*o,e*i+g,e*o-C*E,0,t*o-C*i,e*o+C*E,Q*o*o+g,0,0,0,0,1),this}makeScale(A,I,g){return this.set(A,0,0,0,0,I,0,0,0,0,g,0,0,0,0,1),this}makeShear(A,I,g,C,Q,E){return this.set(1,g,Q,0,A,1,E,0,I,C,1,0,0,0,0,1),this}compose(A,I,g){const C=this.elements,Q=I._x,E=I._y,i=I._z,o=I._w,t=Q+Q,e=E+E,a=i+i,s=Q*t,n=Q*e,S=Q*a,w=E*e,r=E*a,h=i*a,M=o*t,G=o*e,K=o*a,d=g.x,R=g.y,J=g.z;return C[0]=(1-(w+h))*d,C[1]=(n+K)*d,C[2]=(S-G)*d,C[3]=0,C[4]=(n-K)*R,C[5]=(1-(s+h))*R,C[6]=(r+M)*R,C[7]=0,C[8]=(S+G)*J,C[9]=(r-M)*J,C[10]=(1-(s+w))*J,C[11]=0,C[12]=A.x,C[13]=A.y,C[14]=A.z,C[15]=1,this}decompose(A,I,g){const C=this.elements;let Q=uC.set(C[0],C[1],C[2]).length();const E=uC.set(C[4],C[5],C[6]).length(),i=uC.set(C[8],C[9],C[10]).length();this.determinant()<0&&(Q=-Q),A.x=C[12],A.y=C[13],A.z=C[14],sg.copy(this);const t=1/Q,e=1/E,a=1/i;return sg.elements[0]*=t,sg.elements[1]*=t,sg.elements[2]*=t,sg.elements[4]*=e,sg.elements[5]*=e,sg.elements[6]*=e,sg.elements[8]*=a,sg.elements[9]*=a,sg.elements[10]*=a,I.setFromRotationMatrix(sg),g.x=Q,g.y=E,g.z=i,this}makePerspective(A,I,g,C,Q,E,i=bg){const o=this.elements,t=2*Q/(I-A),e=2*Q/(g-C),a=(I+A)/(I-A),s=(g+C)/(g-C);let n,S;if(i===bg)n=-(E+Q)/(E-Q),S=-2*E*Q/(E-Q);else if(i===TQ)n=-E/(E-Q),S=-E*Q/(E-Q);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+i);return o[0]=t,o[4]=0,o[8]=a,o[12]=0,o[1]=0,o[5]=e,o[9]=s,o[13]=0,o[2]=0,o[6]=0,o[10]=n,o[14]=S,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(A,I,g,C,Q,E,i=bg){const o=this.elements,t=1/(I-A),e=1/(g-C),a=1/(E-Q),s=(I+A)*t,n=(g+C)*e;let S,w;if(i===bg)S=(E+Q)*a,w=-2*a;else if(i===TQ)S=Q*a,w=-1*a;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+i);return o[0]=2*t,o[4]=0,o[8]=0,o[12]=-s,o[1]=0,o[5]=2*e,o[9]=0,o[13]=-n,o[2]=0,o[6]=0,o[10]=w,o[14]=-S,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(A){const I=this.elements,g=A.elements;for(let C=0;C<16;C++)if(I[C]!==g[C])return!1;return!0}fromArray(A,I=0){for(let g=0;g<16;g++)this.elements[g]=A[g+I];return this}toArray(A=[],I=0){const g=this.elements;return A[I]=g[0],A[I+1]=g[1],A[I+2]=g[2],A[I+3]=g[3],A[I+4]=g[4],A[I+5]=g[5],A[I+6]=g[6],A[I+7]=g[7],A[I+8]=g[8],A[I+9]=g[9],A[I+10]=g[10],A[I+11]=g[11],A[I+12]=g[12],A[I+13]=g[13],A[I+14]=g[14],A[I+15]=g[15],A}}const uC=new Y,sg=new vA,bD=new Y(0,0,0),xD=new Y(1,1,1),Xg=new Y,oQ=new Y,$I=new Y,Et=new vA,it=new wg;class $Q{constructor(A=0,I=0,g=0,C=$Q.DEFAULT_ORDER){this.isEuler=!0,this._x=A,this._y=I,this._z=g,this._order=C}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get order(){return this._order}set order(A){this._order=A,this._onChangeCallback()}set(A,I,g,C=this._order){return this._x=A,this._y=I,this._z=g,this._order=C,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(A){return this._x=A._x,this._y=A._y,this._z=A._z,this._order=A._order,this._onChangeCallback(),this}setFromRotationMatrix(A,I=this._order,g=!0){const C=A.elements,Q=C[0],E=C[4],i=C[8],o=C[1],t=C[5],e=C[9],a=C[2],s=C[6],n=C[10];switch(I){case"XYZ":this._y=Math.asin(_I(i,-1,1)),Math.abs(i)<.9999999?(this._x=Math.atan2(-e,n),this._z=Math.atan2(-E,Q)):(this._x=Math.atan2(s,t),this._z=0);break;case"YXZ":this._x=Math.asin(-_I(e,-1,1)),Math.abs(e)<.9999999?(this._y=Math.atan2(i,n),this._z=Math.atan2(o,t)):(this._y=Math.atan2(-a,Q),this._z=0);break;case"ZXY":this._x=Math.asin(_I(s,-1,1)),Math.abs(s)<.9999999?(this._y=Math.atan2(-a,n),this._z=Math.atan2(-E,t)):(this._y=0,this._z=Math.atan2(o,Q));break;case"ZYX":this._y=Math.asin(-_I(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(s,n),this._z=Math.atan2(o,Q)):(this._x=0,this._z=Math.atan2(-E,t));break;case"YZX":this._z=Math.asin(_I(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-e,t),this._y=Math.atan2(-a,Q)):(this._x=0,this._y=Math.atan2(i,n));break;case"XZY":this._z=Math.asin(-_I(E,-1,1)),Math.abs(E)<.9999999?(this._x=Math.atan2(s,t),this._y=Math.atan2(i,Q)):(this._x=Math.atan2(-e,n),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+I)}return this._order=I,g===!0&&this._onChangeCallback(),this}setFromQuaternion(A,I,g){return Et.makeRotationFromQuaternion(A),this.setFromRotationMatrix(Et,I,g)}setFromVector3(A,I=this._order){return this.set(A.x,A.y,A.z,I)}reorder(A){return it.setFromEuler(this),this.setFromQuaternion(it,A)}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._order===this._order}fromArray(A){return this._x=A[0],this._y=A[1],this._z=A[2],A[3]!==void 0&&(this._order=A[3]),this._onChangeCallback(),this}toArray(A=[],I=0){return A[I]=this._x,A[I+1]=this._y,A[I+2]=this._z,A[I+3]=this._order,A}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$Q.DEFAULT_ORDER="XYZ";class ue{constructor(){this.mask=1}set(A){this.mask=(1<<A|0)>>>0}enable(A){this.mask|=1<<A|0}enableAll(){this.mask=-1}toggle(A){this.mask^=1<<A|0}disable(A){this.mask&=~(1<<A|0)}disableAll(){this.mask=0}test(A){return(this.mask&A.mask)!==0}isEnabled(A){return(this.mask&(1<<A|0))!==0}}let OD=0;const ot=new Y,mC=new wg,Yg=new vA,tQ=new Y,UB=new Y,_D=new Y,ZD=new wg,tt=new Y(1,0,0),et=new Y(0,1,0),at=new Y(0,0,1),vD={type:"added"},WD={type:"removed"};class aI extends pC{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:OD++}),this.uuid=Sg(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=aI.DEFAULT_UP.clone();const A=new Y,I=new $Q,g=new wg,C=new Y(1,1,1);function Q(){g.setFromEuler(I,!1)}function E(){I.setFromQuaternion(g,void 0,!1)}I._onChange(Q),g._onChange(E),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:A},rotation:{configurable:!0,enumerable:!0,value:I},quaternion:{configurable:!0,enumerable:!0,value:g},scale:{configurable:!0,enumerable:!0,value:C},modelViewMatrix:{value:new vA},normalMatrix:{value:new _A}}),this.matrix=new vA,this.matrixWorld=new vA,this.matrixAutoUpdate=aI.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=aI.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ue,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(A){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(A),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(A){return this.quaternion.premultiply(A),this}setRotationFromAxisAngle(A,I){this.quaternion.setFromAxisAngle(A,I)}setRotationFromEuler(A){this.quaternion.setFromEuler(A,!0)}setRotationFromMatrix(A){this.quaternion.setFromRotationMatrix(A)}setRotationFromQuaternion(A){this.quaternion.copy(A)}rotateOnAxis(A,I){return mC.setFromAxisAngle(A,I),this.quaternion.multiply(mC),this}rotateOnWorldAxis(A,I){return mC.setFromAxisAngle(A,I),this.quaternion.premultiply(mC),this}rotateX(A){return this.rotateOnAxis(tt,A)}rotateY(A){return this.rotateOnAxis(et,A)}rotateZ(A){return this.rotateOnAxis(at,A)}translateOnAxis(A,I){return ot.copy(A).applyQuaternion(this.quaternion),this.position.add(ot.multiplyScalar(I)),this}translateX(A){return this.translateOnAxis(tt,A)}translateY(A){return this.translateOnAxis(et,A)}translateZ(A){return this.translateOnAxis(at,A)}localToWorld(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(this.matrixWorld)}worldToLocal(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(Yg.copy(this.matrixWorld).invert())}lookAt(A,I,g){A.isVector3?tQ.copy(A):tQ.set(A,I,g);const C=this.parent;this.updateWorldMatrix(!0,!1),UB.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yg.lookAt(UB,tQ,this.up):Yg.lookAt(tQ,UB,this.up),this.quaternion.setFromRotationMatrix(Yg),C&&(Yg.extractRotation(C.matrixWorld),mC.setFromRotationMatrix(Yg),this.quaternion.premultiply(mC.invert()))}add(A){if(arguments.length>1){for(let I=0;I<arguments.length;I++)this.add(arguments[I]);return this}return A===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",A),this):(A&&A.isObject3D?(A.parent!==null&&A.parent.remove(A),A.parent=this,this.children.push(A),A.dispatchEvent(vD)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",A),this)}remove(A){if(arguments.length>1){for(let g=0;g<arguments.length;g++)this.remove(arguments[g]);return this}const I=this.children.indexOf(A);return I!==-1&&(A.parent=null,this.children.splice(I,1),A.dispatchEvent(WD)),this}removeFromParent(){const A=this.parent;return A!==null&&A.remove(this),this}clear(){return this.remove(...this.children)}attach(A){return this.updateWorldMatrix(!0,!1),Yg.copy(this.matrixWorld).invert(),A.parent!==null&&(A.parent.updateWorldMatrix(!0,!1),Yg.multiply(A.parent.matrixWorld)),A.applyMatrix4(Yg),this.add(A),A.updateWorldMatrix(!1,!0),this}getObjectById(A){return this.getObjectByProperty("id",A)}getObjectByName(A){return this.getObjectByProperty("name",A)}getObjectByProperty(A,I){if(this[A]===I)return this;for(let g=0,C=this.children.length;g<C;g++){const E=this.children[g].getObjectByProperty(A,I);if(E!==void 0)return E}}getObjectsByProperty(A,I,g=[]){this[A]===I&&g.push(this);const C=this.children;for(let Q=0,E=C.length;Q<E;Q++)C[Q].getObjectsByProperty(A,I,g);return g}getWorldPosition(A){return this.updateWorldMatrix(!0,!1),A.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(UB,A,_D),A}getWorldScale(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(UB,ZD,A),A}getWorldDirection(A){this.updateWorldMatrix(!0,!1);const I=this.matrixWorld.elements;return A.set(I[8],I[9],I[10]).normalize()}raycast(){}traverse(A){A(this);const I=this.children;for(let g=0,C=I.length;g<C;g++)I[g].traverse(A)}traverseVisible(A){if(this.visible===!1)return;A(this);const I=this.children;for(let g=0,C=I.length;g<C;g++)I[g].traverseVisible(A)}traverseAncestors(A){const I=this.parent;I!==null&&(A(I),I.traverseAncestors(A))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(A){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||A)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,A=!0);const I=this.children;for(let g=0,C=I.length;g<C;g++){const Q=I[g];(Q.matrixWorldAutoUpdate===!0||A===!0)&&Q.updateMatrixWorld(A)}}updateWorldMatrix(A,I){const g=this.parent;if(A===!0&&g!==null&&g.matrixWorldAutoUpdate===!0&&g.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),I===!0){const C=this.children;for(let Q=0,E=C.length;Q<E;Q++){const i=C[Q];i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!1,!0)}}}toJSON(A){const I=A===void 0||typeof A=="string",g={};I&&(A={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},g.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const C={};C.uuid=this.uuid,C.type=this.type,this.name!==""&&(C.name=this.name),this.castShadow===!0&&(C.castShadow=!0),this.receiveShadow===!0&&(C.receiveShadow=!0),this.visible===!1&&(C.visible=!1),this.frustumCulled===!1&&(C.frustumCulled=!1),this.renderOrder!==0&&(C.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(C.userData=this.userData),C.layers=this.layers.mask,C.matrix=this.matrix.toArray(),C.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(C.matrixAutoUpdate=!1),this.isInstancedMesh&&(C.type="InstancedMesh",C.count=this.count,C.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(C.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(C.type="BatchedMesh",C.perObjectFrustumCulled=this.perObjectFrustumCulled,C.sortObjects=this.sortObjects,C.drawRanges=this._drawRanges,C.reservedRanges=this._reservedRanges,C.visibility=this._visibility,C.active=this._active,C.bounds=this._bounds.map(i=>({boxInitialized:i.boxInitialized,boxMin:i.box.min.toArray(),boxMax:i.box.max.toArray(),sphereInitialized:i.sphereInitialized,sphereRadius:i.sphere.radius,sphereCenter:i.sphere.center.toArray()})),C.maxGeometryCount=this._maxGeometryCount,C.maxVertexCount=this._maxVertexCount,C.maxIndexCount=this._maxIndexCount,C.geometryInitialized=this._geometryInitialized,C.geometryCount=this._geometryCount,C.matricesTexture=this._matricesTexture.toJSON(A),this.boundingSphere!==null&&(C.boundingSphere={center:C.boundingSphere.center.toArray(),radius:C.boundingSphere.radius}),this.boundingBox!==null&&(C.boundingBox={min:C.boundingBox.min.toArray(),max:C.boundingBox.max.toArray()}));function Q(i,o){return i[o.uuid]===void 0&&(i[o.uuid]=o.toJSON(A)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?C.background=this.background.toJSON():this.background.isTexture&&(C.background=this.background.toJSON(A).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(C.environment=this.environment.toJSON(A).uuid);else if(this.isMesh||this.isLine||this.isPoints){C.geometry=Q(A.geometries,this.geometry);const i=this.geometry.parameters;if(i!==void 0&&i.shapes!==void 0){const o=i.shapes;if(Array.isArray(o))for(let t=0,e=o.length;t<e;t++){const a=o[t];Q(A.shapes,a)}else Q(A.shapes,o)}}if(this.isSkinnedMesh&&(C.bindMode=this.bindMode,C.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(Q(A.skeletons,this.skeleton),C.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const i=[];for(let o=0,t=this.material.length;o<t;o++)i.push(Q(A.materials,this.material[o]));C.material=i}else C.material=Q(A.materials,this.material);if(this.children.length>0){C.children=[];for(let i=0;i<this.children.length;i++)C.children.push(this.children[i].toJSON(A).object)}if(this.animations.length>0){C.animations=[];for(let i=0;i<this.animations.length;i++){const o=this.animations[i];C.animations.push(Q(A.animations,o))}}if(I){const i=E(A.geometries),o=E(A.materials),t=E(A.textures),e=E(A.images),a=E(A.shapes),s=E(A.skeletons),n=E(A.animations),S=E(A.nodes);i.length>0&&(g.geometries=i),o.length>0&&(g.materials=o),t.length>0&&(g.textures=t),e.length>0&&(g.images=e),a.length>0&&(g.shapes=a),s.length>0&&(g.skeletons=s),n.length>0&&(g.animations=n),S.length>0&&(g.nodes=S)}return g.object=C,g;function E(i){const o=[];for(const t in i){const e=i[t];delete e.metadata,o.push(e)}return o}}clone(A){return new this.constructor().copy(this,A)}copy(A,I=!0){if(this.name=A.name,this.up.copy(A.up),this.position.copy(A.position),this.rotation.order=A.rotation.order,this.quaternion.copy(A.quaternion),this.scale.copy(A.scale),this.matrix.copy(A.matrix),this.matrixWorld.copy(A.matrixWorld),this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrixWorldAutoUpdate=A.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=A.matrixWorldNeedsUpdate,this.layers.mask=A.layers.mask,this.visible=A.visible,this.castShadow=A.castShadow,this.receiveShadow=A.receiveShadow,this.frustumCulled=A.frustumCulled,this.renderOrder=A.renderOrder,this.animations=A.animations.slice(),this.userData=JSON.parse(JSON.stringify(A.userData)),I===!0)for(let g=0;g<A.children.length;g++){const C=A.children[g];this.add(C.clone())}return this}}aI.DEFAULT_UP=new Y(0,1,0);aI.DEFAULT_MATRIX_AUTO_UPDATE=!0;aI.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Dg=new Y,Lg=new Y,pE=new Y,fg=new Y,TC=new Y,bC=new Y,st=new Y,dE=new Y,YE=new Y,LE=new Y;class Ug{constructor(A=new Y,I=new Y,g=new Y){this.a=A,this.b=I,this.c=g}static getNormal(A,I,g,C){C.subVectors(g,I),Dg.subVectors(A,I),C.cross(Dg);const Q=C.lengthSq();return Q>0?C.multiplyScalar(1/Math.sqrt(Q)):C.set(0,0,0)}static getBarycoord(A,I,g,C,Q){Dg.subVectors(C,I),Lg.subVectors(g,I),pE.subVectors(A,I);const E=Dg.dot(Dg),i=Dg.dot(Lg),o=Dg.dot(pE),t=Lg.dot(Lg),e=Lg.dot(pE),a=E*t-i*i;if(a===0)return Q.set(0,0,0),null;const s=1/a,n=(t*o-i*e)*s,S=(E*e-i*o)*s;return Q.set(1-n-S,S,n)}static containsPoint(A,I,g,C){return this.getBarycoord(A,I,g,C,fg)===null?!1:fg.x>=0&&fg.y>=0&&fg.x+fg.y<=1}static getInterpolation(A,I,g,C,Q,E,i,o){return this.getBarycoord(A,I,g,C,fg)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(Q,fg.x),o.addScaledVector(E,fg.y),o.addScaledVector(i,fg.z),o)}static isFrontFacing(A,I,g,C){return Dg.subVectors(g,I),Lg.subVectors(A,I),Dg.cross(Lg).dot(C)<0}set(A,I,g){return this.a.copy(A),this.b.copy(I),this.c.copy(g),this}setFromPointsAndIndices(A,I,g,C){return this.a.copy(A[I]),this.b.copy(A[g]),this.c.copy(A[C]),this}setFromAttributeAndIndices(A,I,g,C){return this.a.fromBufferAttribute(A,I),this.b.fromBufferAttribute(A,g),this.c.fromBufferAttribute(A,C),this}clone(){return new this.constructor().copy(this)}copy(A){return this.a.copy(A.a),this.b.copy(A.b),this.c.copy(A.c),this}getArea(){return Dg.subVectors(this.c,this.b),Lg.subVectors(this.a,this.b),Dg.cross(Lg).length()*.5}getMidpoint(A){return A.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(A){return Ug.getNormal(this.a,this.b,this.c,A)}getPlane(A){return A.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(A,I){return Ug.getBarycoord(A,this.a,this.b,this.c,I)}getInterpolation(A,I,g,C,Q){return Ug.getInterpolation(A,this.a,this.b,this.c,I,g,C,Q)}containsPoint(A){return Ug.containsPoint(A,this.a,this.b,this.c)}isFrontFacing(A){return Ug.isFrontFacing(this.a,this.b,this.c,A)}intersectsBox(A){return A.intersectsTriangle(this)}closestPointToPoint(A,I){const g=this.a,C=this.b,Q=this.c;let E,i;TC.subVectors(C,g),bC.subVectors(Q,g),dE.subVectors(A,g);const o=TC.dot(dE),t=bC.dot(dE);if(o<=0&&t<=0)return I.copy(g);YE.subVectors(A,C);const e=TC.dot(YE),a=bC.dot(YE);if(e>=0&&a<=e)return I.copy(C);const s=o*a-e*t;if(s<=0&&o>=0&&e<=0)return E=o/(o-e),I.copy(g).addScaledVector(TC,E);LE.subVectors(A,Q);const n=TC.dot(LE),S=bC.dot(LE);if(S>=0&&n<=S)return I.copy(Q);const w=n*t-o*S;if(w<=0&&t>=0&&S<=0)return i=t/(t-S),I.copy(g).addScaledVector(bC,i);const r=e*S-n*a;if(r<=0&&a-e>=0&&n-S>=0)return st.subVectors(Q,C),i=(a-e)/(a-e+(n-S)),I.copy(C).addScaledVector(st,i);const h=1/(r+w+s);return E=w*h,i=s*h,I.copy(g).addScaledVector(TC,E).addScaledVector(bC,i)}equals(A){return A.a.equals(this.a)&&A.b.equals(this.b)&&A.c.equals(this.c)}}const me={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zg={h:0,s:0,l:0},eQ={h:0,s:0,l:0};function fE(B,A,I){return I<0&&(I+=1),I>1&&(I-=1),I<1/6?B+(A-B)*6*I:I<1/2?A:I<2/3?B+(A-B)*6*(2/3-I):B}class dA{constructor(A,I,g){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(A,I,g)}set(A,I,g){if(I===void 0&&g===void 0){const C=A;C&&C.isColor?this.copy(C):typeof C=="number"?this.setHex(C):typeof C=="string"&&this.setStyle(C)}else this.setRGB(A,I,g);return this}setScalar(A){return this.r=A,this.g=A,this.b=A,this}setHex(A,I=kI){return A=Math.floor(A),this.r=(A>>16&255)/255,this.g=(A>>8&255)/255,this.b=(A&255)/255,II.toWorkingColorSpace(this,I),this}setRGB(A,I,g,C=II.workingColorSpace){return this.r=A,this.g=I,this.b=g,II.toWorkingColorSpace(this,C),this}setHSL(A,I,g,C=II.workingColorSpace){if(A=Yi(A,1),I=_I(I,0,1),g=_I(g,0,1),I===0)this.r=this.g=this.b=g;else{const Q=g<=.5?g*(1+I):g+I-g*I,E=2*g-Q;this.r=fE(E,Q,A+1/3),this.g=fE(E,Q,A),this.b=fE(E,Q,A-1/3)}return II.toWorkingColorSpace(this,C),this}setStyle(A,I=kI){function g(Q){Q!==void 0&&parseFloat(Q)<1&&console.warn("THREE.Color: Alpha component of "+A+" will be ignored.")}let C;if(C=/^(\w+)\(([^\)]*)\)/.exec(A)){let Q;const E=C[1],i=C[2];switch(E){case"rgb":case"rgba":if(Q=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return g(Q[4]),this.setRGB(Math.min(255,parseInt(Q[1],10))/255,Math.min(255,parseInt(Q[2],10))/255,Math.min(255,parseInt(Q[3],10))/255,I);if(Q=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return g(Q[4]),this.setRGB(Math.min(100,parseInt(Q[1],10))/100,Math.min(100,parseInt(Q[2],10))/100,Math.min(100,parseInt(Q[3],10))/100,I);break;case"hsl":case"hsla":if(Q=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return g(Q[4]),this.setHSL(parseFloat(Q[1])/360,parseFloat(Q[2])/100,parseFloat(Q[3])/100,I);break;default:console.warn("THREE.Color: Unknown color model "+A)}}else if(C=/^\#([A-Fa-f\d]+)$/.exec(A)){const Q=C[1],E=Q.length;if(E===3)return this.setRGB(parseInt(Q.charAt(0),16)/15,parseInt(Q.charAt(1),16)/15,parseInt(Q.charAt(2),16)/15,I);if(E===6)return this.setHex(parseInt(Q,16),I);console.warn("THREE.Color: Invalid hex color "+A)}else if(A&&A.length>0)return this.setColorName(A,I);return this}setColorName(A,I=kI){const g=me[A.toLowerCase()];return g!==void 0?this.setHex(g,I):console.warn("THREE.Color: Unknown color "+A),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(A){return this.r=A.r,this.g=A.g,this.b=A.b,this}copySRGBToLinear(A){return this.r=CB(A.r),this.g=CB(A.g),this.b=CB(A.b),this}copyLinearToSRGB(A){return this.r=ME(A.r),this.g=ME(A.g),this.b=ME(A.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(A=kI){return II.fromWorkingColorSpace(xI.copy(this),A),Math.round(_I(xI.r*255,0,255))*65536+Math.round(_I(xI.g*255,0,255))*256+Math.round(_I(xI.b*255,0,255))}getHexString(A=kI){return("000000"+this.getHex(A).toString(16)).slice(-6)}getHSL(A,I=II.workingColorSpace){II.fromWorkingColorSpace(xI.copy(this),I);const g=xI.r,C=xI.g,Q=xI.b,E=Math.max(g,C,Q),i=Math.min(g,C,Q);let o,t;const e=(i+E)/2;if(i===E)o=0,t=0;else{const a=E-i;switch(t=e<=.5?a/(E+i):a/(2-E-i),E){case g:o=(C-Q)/a+(C<Q?6:0);break;case C:o=(Q-g)/a+2;break;case Q:o=(g-C)/a+4;break}o/=6}return A.h=o,A.s=t,A.l=e,A}getRGB(A,I=II.workingColorSpace){return II.fromWorkingColorSpace(xI.copy(this),I),A.r=xI.r,A.g=xI.g,A.b=xI.b,A}getStyle(A=kI){II.fromWorkingColorSpace(xI.copy(this),A);const I=xI.r,g=xI.g,C=xI.b;return A!==kI?`color(${A} ${I.toFixed(3)} ${g.toFixed(3)} ${C.toFixed(3)})`:`rgb(${Math.round(I*255)},${Math.round(g*255)},${Math.round(C*255)})`}offsetHSL(A,I,g){return this.getHSL(zg),this.setHSL(zg.h+A,zg.s+I,zg.l+g)}add(A){return this.r+=A.r,this.g+=A.g,this.b+=A.b,this}addColors(A,I){return this.r=A.r+I.r,this.g=A.g+I.g,this.b=A.b+I.b,this}addScalar(A){return this.r+=A,this.g+=A,this.b+=A,this}sub(A){return this.r=Math.max(0,this.r-A.r),this.g=Math.max(0,this.g-A.g),this.b=Math.max(0,this.b-A.b),this}multiply(A){return this.r*=A.r,this.g*=A.g,this.b*=A.b,this}multiplyScalar(A){return this.r*=A,this.g*=A,this.b*=A,this}lerp(A,I){return this.r+=(A.r-this.r)*I,this.g+=(A.g-this.g)*I,this.b+=(A.b-this.b)*I,this}lerpColors(A,I,g){return this.r=A.r+(I.r-A.r)*g,this.g=A.g+(I.g-A.g)*g,this.b=A.b+(I.b-A.b)*g,this}lerpHSL(A,I){this.getHSL(zg),A.getHSL(eQ);const g=HB(zg.h,eQ.h,I),C=HB(zg.s,eQ.s,I),Q=HB(zg.l,eQ.l,I);return this.setHSL(g,C,Q),this}setFromVector3(A){return this.r=A.x,this.g=A.y,this.b=A.z,this}applyMatrix3(A){const I=this.r,g=this.g,C=this.b,Q=A.elements;return this.r=Q[0]*I+Q[3]*g+Q[6]*C,this.g=Q[1]*I+Q[4]*g+Q[7]*C,this.b=Q[2]*I+Q[5]*g+Q[8]*C,this}equals(A){return A.r===this.r&&A.g===this.g&&A.b===this.b}fromArray(A,I=0){return this.r=A[I],this.g=A[I+1],this.b=A[I+2],this}toArray(A=[],I=0){return A[I]=this.r,A[I+1]=this.g,A[I+2]=this.b,A}fromBufferAttribute(A,I){return this.r=A.getX(I),this.g=A.getY(I),this.b=A.getZ(I),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xI=new dA;dA.NAMES=me;let PD=0;class Ng extends pC{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:PD++}),this.uuid=Sg(),this.name="",this.type="Material",this.blending=gB,this.side=Og,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qi,this.blendDst=Ei,this.blendEquation=cC,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new dA(0,0,0),this.blendAlpha=0,this.depthFunc=YQ,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$o,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=dC,this.stencilZFail=dC,this.stencilZPass=dC,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(A){this._alphaTest>0!=A>0&&this.version++,this._alphaTest=A}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(A){if(A!==void 0)for(const I in A){const g=A[I];if(g===void 0){console.warn(`THREE.Material: parameter '${I}' has value of undefined.`);continue}const C=this[I];if(C===void 0){console.warn(`THREE.Material: '${I}' is not a property of THREE.${this.type}.`);continue}C&&C.isColor?C.set(g):C&&C.isVector3&&g&&g.isVector3?C.copy(g):this[I]=g}}toJSON(A){const I=A===void 0||typeof A=="string";I&&(A={textures:{},images:{}});const g={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};g.uuid=this.uuid,g.type=this.type,this.name!==""&&(g.name=this.name),this.color&&this.color.isColor&&(g.color=this.color.getHex()),this.roughness!==void 0&&(g.roughness=this.roughness),this.metalness!==void 0&&(g.metalness=this.metalness),this.sheen!==void 0&&(g.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(g.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(g.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(g.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(g.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(g.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(g.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(g.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(g.shininess=this.shininess),this.clearcoat!==void 0&&(g.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(g.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(g.clearcoatMap=this.clearcoatMap.toJSON(A).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(g.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(A).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(g.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(A).uuid,g.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(g.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(g.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(g.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(g.iridescenceMap=this.iridescenceMap.toJSON(A).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(g.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(A).uuid),this.anisotropy!==void 0&&(g.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(g.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(g.anisotropyMap=this.anisotropyMap.toJSON(A).uuid),this.map&&this.map.isTexture&&(g.map=this.map.toJSON(A).uuid),this.matcap&&this.matcap.isTexture&&(g.matcap=this.matcap.toJSON(A).uuid),this.alphaMap&&this.alphaMap.isTexture&&(g.alphaMap=this.alphaMap.toJSON(A).uuid),this.lightMap&&this.lightMap.isTexture&&(g.lightMap=this.lightMap.toJSON(A).uuid,g.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(g.aoMap=this.aoMap.toJSON(A).uuid,g.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(g.bumpMap=this.bumpMap.toJSON(A).uuid,g.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(g.normalMap=this.normalMap.toJSON(A).uuid,g.normalMapType=this.normalMapType,g.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(g.displacementMap=this.displacementMap.toJSON(A).uuid,g.displacementScale=this.displacementScale,g.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(g.roughnessMap=this.roughnessMap.toJSON(A).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(g.metalnessMap=this.metalnessMap.toJSON(A).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(g.emissiveMap=this.emissiveMap.toJSON(A).uuid),this.specularMap&&this.specularMap.isTexture&&(g.specularMap=this.specularMap.toJSON(A).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(g.specularIntensityMap=this.specularIntensityMap.toJSON(A).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(g.specularColorMap=this.specularColorMap.toJSON(A).uuid),this.envMap&&this.envMap.isTexture&&(g.envMap=this.envMap.toJSON(A).uuid,this.combine!==void 0&&(g.combine=this.combine)),this.envMapIntensity!==void 0&&(g.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(g.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(g.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(g.gradientMap=this.gradientMap.toJSON(A).uuid),this.transmission!==void 0&&(g.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(g.transmissionMap=this.transmissionMap.toJSON(A).uuid),this.thickness!==void 0&&(g.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(g.thicknessMap=this.thicknessMap.toJSON(A).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(g.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(g.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(g.size=this.size),this.shadowSide!==null&&(g.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(g.sizeAttenuation=this.sizeAttenuation),this.blending!==gB&&(g.blending=this.blending),this.side!==Og&&(g.side=this.side),this.vertexColors===!0&&(g.vertexColors=!0),this.opacity<1&&(g.opacity=this.opacity),this.transparent===!0&&(g.transparent=!0),this.blendSrc!==Qi&&(g.blendSrc=this.blendSrc),this.blendDst!==Ei&&(g.blendDst=this.blendDst),this.blendEquation!==cC&&(g.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(g.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(g.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(g.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(g.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(g.blendAlpha=this.blendAlpha),this.depthFunc!==YQ&&(g.depthFunc=this.depthFunc),this.depthTest===!1&&(g.depthTest=this.depthTest),this.depthWrite===!1&&(g.depthWrite=this.depthWrite),this.colorWrite===!1&&(g.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(g.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$o&&(g.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(g.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(g.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==dC&&(g.stencilFail=this.stencilFail),this.stencilZFail!==dC&&(g.stencilZFail=this.stencilZFail),this.stencilZPass!==dC&&(g.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(g.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(g.rotation=this.rotation),this.polygonOffset===!0&&(g.polygonOffset=!0),this.polygonOffsetFactor!==0&&(g.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(g.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(g.linewidth=this.linewidth),this.dashSize!==void 0&&(g.dashSize=this.dashSize),this.gapSize!==void 0&&(g.gapSize=this.gapSize),this.scale!==void 0&&(g.scale=this.scale),this.dithering===!0&&(g.dithering=!0),this.alphaTest>0&&(g.alphaTest=this.alphaTest),this.alphaHash===!0&&(g.alphaHash=!0),this.alphaToCoverage===!0&&(g.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(g.premultipliedAlpha=!0),this.forceSinglePass===!0&&(g.forceSinglePass=!0),this.wireframe===!0&&(g.wireframe=!0),this.wireframeLinewidth>1&&(g.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(g.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(g.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(g.flatShading=!0),this.visible===!1&&(g.visible=!1),this.toneMapped===!1&&(g.toneMapped=!1),this.fog===!1&&(g.fog=!1),Object.keys(this.userData).length>0&&(g.userData=this.userData);function C(Q){const E=[];for(const i in Q){const o=Q[i];delete o.metadata,E.push(o)}return E}if(I){const Q=C(A.textures),E=C(A.images);Q.length>0&&(g.textures=Q),E.length>0&&(g.images=E)}return g}clone(){return new this.constructor().copy(this)}copy(A){this.name=A.name,this.blending=A.blending,this.side=A.side,this.vertexColors=A.vertexColors,this.opacity=A.opacity,this.transparent=A.transparent,this.blendSrc=A.blendSrc,this.blendDst=A.blendDst,this.blendEquation=A.blendEquation,this.blendSrcAlpha=A.blendSrcAlpha,this.blendDstAlpha=A.blendDstAlpha,this.blendEquationAlpha=A.blendEquationAlpha,this.blendColor.copy(A.blendColor),this.blendAlpha=A.blendAlpha,this.depthFunc=A.depthFunc,this.depthTest=A.depthTest,this.depthWrite=A.depthWrite,this.stencilWriteMask=A.stencilWriteMask,this.stencilFunc=A.stencilFunc,this.stencilRef=A.stencilRef,this.stencilFuncMask=A.stencilFuncMask,this.stencilFail=A.stencilFail,this.stencilZFail=A.stencilZFail,this.stencilZPass=A.stencilZPass,this.stencilWrite=A.stencilWrite;const I=A.clippingPlanes;let g=null;if(I!==null){const C=I.length;g=new Array(C);for(let Q=0;Q!==C;++Q)g[Q]=I[Q].clone()}return this.clippingPlanes=g,this.clipIntersection=A.clipIntersection,this.clipShadows=A.clipShadows,this.shadowSide=A.shadowSide,this.colorWrite=A.colorWrite,this.precision=A.precision,this.polygonOffset=A.polygonOffset,this.polygonOffsetFactor=A.polygonOffsetFactor,this.polygonOffsetUnits=A.polygonOffsetUnits,this.dithering=A.dithering,this.alphaTest=A.alphaTest,this.alphaHash=A.alphaHash,this.alphaToCoverage=A.alphaToCoverage,this.premultipliedAlpha=A.premultipliedAlpha,this.forceSinglePass=A.forceSinglePass,this.visible=A.visible,this.toneMapped=A.toneMapped,this.userData=JSON.parse(JSON.stringify(A.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(A){A===!0&&this.version++}}class lC extends Ng{constructor(A){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new dA(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=le,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.specularMap=A.specularMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.combine=A.combine,this.reflectivity=A.reflectivity,this.refractionRatio=A.refractionRatio,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.fog=A.fog,this}}const MI=new Y,aQ=new ZA;class jI{constructor(A,I,g=!1){if(Array.isArray(A))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=A,this.itemSize=I,this.count=A!==void 0?A.length/I:0,this.normalized=g,this.usage=ai,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Mg,this.version=0}onUploadCallback(){}set needsUpdate(A){A===!0&&this.version++}get updateRange(){return KC("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(A){return this.usage=A,this}addUpdateRange(A,I){this.updateRanges.push({start:A,count:I})}clearUpdateRanges(){this.updateRanges.length=0}copy(A){return this.name=A.name,this.array=new A.array.constructor(A.array),this.itemSize=A.itemSize,this.count=A.count,this.normalized=A.normalized,this.usage=A.usage,this.gpuType=A.gpuType,this}copyAt(A,I,g){A*=this.itemSize,g*=I.itemSize;for(let C=0,Q=this.itemSize;C<Q;C++)this.array[A+C]=I.array[g+C];return this}copyArray(A){return this.array.set(A),this}applyMatrix3(A){if(this.itemSize===2)for(let I=0,g=this.count;I<g;I++)aQ.fromBufferAttribute(this,I),aQ.applyMatrix3(A),this.setXY(I,aQ.x,aQ.y);else if(this.itemSize===3)for(let I=0,g=this.count;I<g;I++)MI.fromBufferAttribute(this,I),MI.applyMatrix3(A),this.setXYZ(I,MI.x,MI.y,MI.z);return this}applyMatrix4(A){for(let I=0,g=this.count;I<g;I++)MI.fromBufferAttribute(this,I),MI.applyMatrix4(A),this.setXYZ(I,MI.x,MI.y,MI.z);return this}applyNormalMatrix(A){for(let I=0,g=this.count;I<g;I++)MI.fromBufferAttribute(this,I),MI.applyNormalMatrix(A),this.setXYZ(I,MI.x,MI.y,MI.z);return this}transformDirection(A){for(let I=0,g=this.count;I<g;I++)MI.fromBufferAttribute(this,I),MI.transformDirection(A),this.setXYZ(I,MI.x,MI.y,MI.z);return this}set(A,I=0){return this.array.set(A,I),this}getComponent(A,I){let g=this.array[A*this.itemSize+I];return this.normalized&&(g=rg(g,this.array)),g}setComponent(A,I,g){return this.normalized&&(g=BI(g,this.array)),this.array[A*this.itemSize+I]=g,this}getX(A){let I=this.array[A*this.itemSize];return this.normalized&&(I=rg(I,this.array)),I}setX(A,I){return this.normalized&&(I=BI(I,this.array)),this.array[A*this.itemSize]=I,this}getY(A){let I=this.array[A*this.itemSize+1];return this.normalized&&(I=rg(I,this.array)),I}setY(A,I){return this.normalized&&(I=BI(I,this.array)),this.array[A*this.itemSize+1]=I,this}getZ(A){let I=this.array[A*this.itemSize+2];return this.normalized&&(I=rg(I,this.array)),I}setZ(A,I){return this.normalized&&(I=BI(I,this.array)),this.array[A*this.itemSize+2]=I,this}getW(A){let I=this.array[A*this.itemSize+3];return this.normalized&&(I=rg(I,this.array)),I}setW(A,I){return this.normalized&&(I=BI(I,this.array)),this.array[A*this.itemSize+3]=I,this}setXY(A,I,g){return A*=this.itemSize,this.normalized&&(I=BI(I,this.array),g=BI(g,this.array)),this.array[A+0]=I,this.array[A+1]=g,this}setXYZ(A,I,g,C){return A*=this.itemSize,this.normalized&&(I=BI(I,this.array),g=BI(g,this.array),C=BI(C,this.array)),this.array[A+0]=I,this.array[A+1]=g,this.array[A+2]=C,this}setXYZW(A,I,g,C,Q){return A*=this.itemSize,this.normalized&&(I=BI(I,this.array),g=BI(g,this.array),C=BI(C,this.array),Q=BI(Q,this.array)),this.array[A+0]=I,this.array[A+1]=g,this.array[A+2]=C,this.array[A+3]=Q,this}onUpload(A){return this.onUploadCallback=A,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const A={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(A.name=this.name),this.usage!==ai&&(A.usage=this.usage),A}}class Te extends jI{constructor(A,I,g){super(new Uint16Array(A),I,g)}}class be extends jI{constructor(A,I,g){super(new Uint32Array(A),I,g)}}class xg extends jI{constructor(A,I,g){super(new Float32Array(A),I,g)}}let jD=0;const Bg=new vA,HE=new aI,xC=new Y,Ag=new Kg,NB=new Kg,qI=new Y;class Jg extends pC{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jD++}),this.uuid=Sg(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(A){return Array.isArray(A)?this.index=new(Ye(A)?be:Te)(A,1):this.index=A,this}getAttribute(A){return this.attributes[A]}setAttribute(A,I){return this.attributes[A]=I,this}deleteAttribute(A){return delete this.attributes[A],this}hasAttribute(A){return this.attributes[A]!==void 0}addGroup(A,I,g=0){this.groups.push({start:A,count:I,materialIndex:g})}clearGroups(){this.groups=[]}setDrawRange(A,I){this.drawRange.start=A,this.drawRange.count=I}applyMatrix4(A){const I=this.attributes.position;I!==void 0&&(I.applyMatrix4(A),I.needsUpdate=!0);const g=this.attributes.normal;if(g!==void 0){const Q=new _A().getNormalMatrix(A);g.applyNormalMatrix(Q),g.needsUpdate=!0}const C=this.attributes.tangent;return C!==void 0&&(C.transformDirection(A),C.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(A){return Bg.makeRotationFromQuaternion(A),this.applyMatrix4(Bg),this}rotateX(A){return Bg.makeRotationX(A),this.applyMatrix4(Bg),this}rotateY(A){return Bg.makeRotationY(A),this.applyMatrix4(Bg),this}rotateZ(A){return Bg.makeRotationZ(A),this.applyMatrix4(Bg),this}translate(A,I,g){return Bg.makeTranslation(A,I,g),this.applyMatrix4(Bg),this}scale(A,I,g){return Bg.makeScale(A,I,g),this.applyMatrix4(Bg),this}lookAt(A){return HE.lookAt(A),HE.updateMatrix(),this.applyMatrix4(HE.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xC).negate(),this.translate(xC.x,xC.y,xC.z),this}setFromPoints(A){const I=[];for(let g=0,C=A.length;g<C;g++){const Q=A[g];I.push(Q.x,Q.y,Q.z||0)}return this.setAttribute("position",new xg(I,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kg);const A=this.attributes.position,I=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(A!==void 0){if(this.boundingBox.setFromBufferAttribute(A),I)for(let g=0,C=I.length;g<C;g++){const Q=I[g];Ag.setFromBufferAttribute(Q),this.morphTargetsRelative?(qI.addVectors(this.boundingBox.min,Ag.min),this.boundingBox.expandByPoint(qI),qI.addVectors(this.boundingBox.max,Ag.max),this.boundingBox.expandByPoint(qI)):(this.boundingBox.expandByPoint(Ag.min),this.boundingBox.expandByPoint(Ag.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fg);const A=this.attributes.position,I=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Y,1/0);return}if(A){const g=this.boundingSphere.center;if(Ag.setFromBufferAttribute(A),I)for(let Q=0,E=I.length;Q<E;Q++){const i=I[Q];NB.setFromBufferAttribute(i),this.morphTargetsRelative?(qI.addVectors(Ag.min,NB.min),Ag.expandByPoint(qI),qI.addVectors(Ag.max,NB.max),Ag.expandByPoint(qI)):(Ag.expandByPoint(NB.min),Ag.expandByPoint(NB.max))}Ag.getCenter(g);let C=0;for(let Q=0,E=A.count;Q<E;Q++)qI.fromBufferAttribute(A,Q),C=Math.max(C,g.distanceToSquared(qI));if(I)for(let Q=0,E=I.length;Q<E;Q++){const i=I[Q],o=this.morphTargetsRelative;for(let t=0,e=i.count;t<e;t++)qI.fromBufferAttribute(i,t),o&&(xC.fromBufferAttribute(A,t),qI.add(xC)),C=Math.max(C,g.distanceToSquared(qI))}this.boundingSphere.radius=Math.sqrt(C),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const A=this.index,I=this.attributes;if(A===null||I.position===void 0||I.normal===void 0||I.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const g=A.array,C=I.position.array,Q=I.normal.array,E=I.uv.array,i=C.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jI(new Float32Array(4*i),4));const o=this.getAttribute("tangent").array,t=[],e=[];for(let l=0;l<i;l++)t[l]=new Y,e[l]=new Y;const a=new Y,s=new Y,n=new Y,S=new ZA,w=new ZA,r=new ZA,h=new Y,M=new Y;function G(l,N,P){a.fromArray(C,l*3),s.fromArray(C,N*3),n.fromArray(C,P*3),S.fromArray(E,l*2),w.fromArray(E,N*2),r.fromArray(E,P*2),s.sub(a),n.sub(a),w.sub(S),r.sub(S);const BA=1/(w.x*r.y-r.x*w.y);isFinite(BA)&&(h.copy(s).multiplyScalar(r.y).addScaledVector(n,-w.y).multiplyScalar(BA),M.copy(n).multiplyScalar(w.x).addScaledVector(s,-r.x).multiplyScalar(BA),t[l].add(h),t[N].add(h),t[P].add(h),e[l].add(M),e[N].add(M),e[P].add(M))}let K=this.groups;K.length===0&&(K=[{start:0,count:g.length}]);for(let l=0,N=K.length;l<N;++l){const P=K[l],BA=P.start,L=P.count;for(let O=BA,_=BA+L;O<_;O+=3)G(g[O+0],g[O+1],g[O+2])}const d=new Y,R=new Y,J=new Y,Z=new Y;function CA(l){J.fromArray(Q,l*3),Z.copy(J);const N=t[l];d.copy(N),d.sub(J.multiplyScalar(J.dot(N))).normalize(),R.crossVectors(Z,N);const BA=R.dot(e[l])<0?-1:1;o[l*4]=d.x,o[l*4+1]=d.y,o[l*4+2]=d.z,o[l*4+3]=BA}for(let l=0,N=K.length;l<N;++l){const P=K[l],BA=P.start,L=P.count;for(let O=BA,_=BA+L;O<_;O+=3)CA(g[O+0]),CA(g[O+1]),CA(g[O+2])}}computeVertexNormals(){const A=this.index,I=this.getAttribute("position");if(I!==void 0){let g=this.getAttribute("normal");if(g===void 0)g=new jI(new Float32Array(I.count*3),3),this.setAttribute("normal",g);else for(let s=0,n=g.count;s<n;s++)g.setXYZ(s,0,0,0);const C=new Y,Q=new Y,E=new Y,i=new Y,o=new Y,t=new Y,e=new Y,a=new Y;if(A)for(let s=0,n=A.count;s<n;s+=3){const S=A.getX(s+0),w=A.getX(s+1),r=A.getX(s+2);C.fromBufferAttribute(I,S),Q.fromBufferAttribute(I,w),E.fromBufferAttribute(I,r),e.subVectors(E,Q),a.subVectors(C,Q),e.cross(a),i.fromBufferAttribute(g,S),o.fromBufferAttribute(g,w),t.fromBufferAttribute(g,r),i.add(e),o.add(e),t.add(e),g.setXYZ(S,i.x,i.y,i.z),g.setXYZ(w,o.x,o.y,o.z),g.setXYZ(r,t.x,t.y,t.z)}else for(let s=0,n=I.count;s<n;s+=3)C.fromBufferAttribute(I,s+0),Q.fromBufferAttribute(I,s+1),E.fromBufferAttribute(I,s+2),e.subVectors(E,Q),a.subVectors(C,Q),e.cross(a),g.setXYZ(s+0,e.x,e.y,e.z),g.setXYZ(s+1,e.x,e.y,e.z),g.setXYZ(s+2,e.x,e.y,e.z);this.normalizeNormals(),g.needsUpdate=!0}}normalizeNormals(){const A=this.attributes.normal;for(let I=0,g=A.count;I<g;I++)qI.fromBufferAttribute(A,I),qI.normalize(),A.setXYZ(I,qI.x,qI.y,qI.z)}toNonIndexed(){function A(i,o){const t=i.array,e=i.itemSize,a=i.normalized,s=new t.constructor(o.length*e);let n=0,S=0;for(let w=0,r=o.length;w<r;w++){i.isInterleavedBufferAttribute?n=o[w]*i.data.stride+i.offset:n=o[w]*e;for(let h=0;h<e;h++)s[S++]=t[n++]}return new jI(s,e,a)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const I=new Jg,g=this.index.array,C=this.attributes;for(const i in C){const o=C[i],t=A(o,g);I.setAttribute(i,t)}const Q=this.morphAttributes;for(const i in Q){const o=[],t=Q[i];for(let e=0,a=t.length;e<a;e++){const s=t[e],n=A(s,g);o.push(n)}I.morphAttributes[i]=o}I.morphTargetsRelative=this.morphTargetsRelative;const E=this.groups;for(let i=0,o=E.length;i<o;i++){const t=E[i];I.addGroup(t.start,t.count,t.materialIndex)}return I}toJSON(){const A={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(A.uuid=this.uuid,A.type=this.type,this.name!==""&&(A.name=this.name),Object.keys(this.userData).length>0&&(A.userData=this.userData),this.parameters!==void 0){const o=this.parameters;for(const t in o)o[t]!==void 0&&(A[t]=o[t]);return A}A.data={attributes:{}};const I=this.index;I!==null&&(A.data.index={type:I.array.constructor.name,array:Array.prototype.slice.call(I.array)});const g=this.attributes;for(const o in g){const t=g[o];A.data.attributes[o]=t.toJSON(A.data)}const C={};let Q=!1;for(const o in this.morphAttributes){const t=this.morphAttributes[o],e=[];for(let a=0,s=t.length;a<s;a++){const n=t[a];e.push(n.toJSON(A.data))}e.length>0&&(C[o]=e,Q=!0)}Q&&(A.data.morphAttributes=C,A.data.morphTargetsRelative=this.morphTargetsRelative);const E=this.groups;E.length>0&&(A.data.groups=JSON.parse(JSON.stringify(E)));const i=this.boundingSphere;return i!==null&&(A.data.boundingSphere={center:i.center.toArray(),radius:i.radius}),A}clone(){return new this.constructor().copy(this)}copy(A){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const I={};this.name=A.name;const g=A.index;g!==null&&this.setIndex(g.clone(I));const C=A.attributes;for(const t in C){const e=C[t];this.setAttribute(t,e.clone(I))}const Q=A.morphAttributes;for(const t in Q){const e=[],a=Q[t];for(let s=0,n=a.length;s<n;s++)e.push(a[s].clone(I));this.morphAttributes[t]=e}this.morphTargetsRelative=A.morphTargetsRelative;const E=A.groups;for(let t=0,e=E.length;t<e;t++){const a=E[t];this.addGroup(a.start,a.count,a.materialIndex)}const i=A.boundingBox;i!==null&&(this.boundingBox=i.clone());const o=A.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=A.drawRange.start,this.drawRange.count=A.drawRange.count,this.userData=A.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Dt=new vA,DC=new zQ,sQ=new Fg,nt=new Y,OC=new Y,_C=new Y,ZC=new Y,uE=new Y,DQ=new Y,nQ=new ZA,hQ=new ZA,rQ=new ZA,ht=new Y,rt=new Y,St=new Y,SQ=new Y,wQ=new Y;class VI extends aI{constructor(A=new Jg,I=new lC){super(),this.isMesh=!0,this.type="Mesh",this.geometry=A,this.material=I,this.updateMorphTargets()}copy(A,I){return super.copy(A,I),A.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=A.morphTargetInfluences.slice()),A.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},A.morphTargetDictionary)),this.material=Array.isArray(A.material)?A.material.slice():A.material,this.geometry=A.geometry,this}updateMorphTargets(){const I=this.geometry.morphAttributes,g=Object.keys(I);if(g.length>0){const C=I[g[0]];if(C!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let Q=0,E=C.length;Q<E;Q++){const i=C[Q].name||String(Q);this.morphTargetInfluences.push(0),this.morphTargetDictionary[i]=Q}}}}getVertexPosition(A,I){const g=this.geometry,C=g.attributes.position,Q=g.morphAttributes.position,E=g.morphTargetsRelative;I.fromBufferAttribute(C,A);const i=this.morphTargetInfluences;if(Q&&i){DQ.set(0,0,0);for(let o=0,t=Q.length;o<t;o++){const e=i[o],a=Q[o];e!==0&&(uE.fromBufferAttribute(a,A),E?DQ.addScaledVector(uE,e):DQ.addScaledVector(uE.sub(I),e))}I.add(DQ)}return I}raycast(A,I){const g=this.geometry,C=this.material,Q=this.matrixWorld;C!==void 0&&(g.boundingSphere===null&&g.computeBoundingSphere(),sQ.copy(g.boundingSphere),sQ.applyMatrix4(Q),DC.copy(A.ray).recast(A.near),!(sQ.containsPoint(DC.origin)===!1&&(DC.intersectSphere(sQ,nt)===null||DC.origin.distanceToSquared(nt)>(A.far-A.near)**2))&&(Dt.copy(Q).invert(),DC.copy(A.ray).applyMatrix4(Dt),!(g.boundingBox!==null&&DC.intersectsBox(g.boundingBox)===!1)&&this._computeIntersections(A,I,DC)))}_computeIntersections(A,I,g){let C;const Q=this.geometry,E=this.material,i=Q.index,o=Q.attributes.position,t=Q.attributes.uv,e=Q.attributes.uv1,a=Q.attributes.normal,s=Q.groups,n=Q.drawRange;if(i!==null)if(Array.isArray(E))for(let S=0,w=s.length;S<w;S++){const r=s[S],h=E[r.materialIndex],M=Math.max(r.start,n.start),G=Math.min(i.count,Math.min(r.start+r.count,n.start+n.count));for(let K=M,d=G;K<d;K+=3){const R=i.getX(K),J=i.getX(K+1),Z=i.getX(K+2);C=cQ(this,h,A,g,t,e,a,R,J,Z),C&&(C.faceIndex=Math.floor(K/3),C.face.materialIndex=r.materialIndex,I.push(C))}}else{const S=Math.max(0,n.start),w=Math.min(i.count,n.start+n.count);for(let r=S,h=w;r<h;r+=3){const M=i.getX(r),G=i.getX(r+1),K=i.getX(r+2);C=cQ(this,E,A,g,t,e,a,M,G,K),C&&(C.faceIndex=Math.floor(r/3),I.push(C))}}else if(o!==void 0)if(Array.isArray(E))for(let S=0,w=s.length;S<w;S++){const r=s[S],h=E[r.materialIndex],M=Math.max(r.start,n.start),G=Math.min(o.count,Math.min(r.start+r.count,n.start+n.count));for(let K=M,d=G;K<d;K+=3){const R=K,J=K+1,Z=K+2;C=cQ(this,h,A,g,t,e,a,R,J,Z),C&&(C.faceIndex=Math.floor(K/3),C.face.materialIndex=r.materialIndex,I.push(C))}}else{const S=Math.max(0,n.start),w=Math.min(o.count,n.start+n.count);for(let r=S,h=w;r<h;r+=3){const M=r,G=r+1,K=r+2;C=cQ(this,E,A,g,t,e,a,M,G,K),C&&(C.faceIndex=Math.floor(r/3),I.push(C))}}}}function VD(B,A,I,g,C,Q,E,i){let o;if(A.side===XI?o=g.intersectTriangle(E,Q,C,!0,i):o=g.intersectTriangle(C,Q,E,A.side===Og,i),o===null)return null;wQ.copy(i),wQ.applyMatrix4(B.matrixWorld);const t=I.ray.origin.distanceTo(wQ);return t<I.near||t>I.far?null:{distance:t,point:wQ.clone(),object:B}}function cQ(B,A,I,g,C,Q,E,i,o,t){B.getVertexPosition(i,OC),B.getVertexPosition(o,_C),B.getVertexPosition(t,ZC);const e=VD(B,A,I,g,OC,_C,ZC,SQ);if(e){C&&(nQ.fromBufferAttribute(C,i),hQ.fromBufferAttribute(C,o),rQ.fromBufferAttribute(C,t),e.uv=Ug.getInterpolation(SQ,OC,_C,ZC,nQ,hQ,rQ,new ZA)),Q&&(nQ.fromBufferAttribute(Q,i),hQ.fromBufferAttribute(Q,o),rQ.fromBufferAttribute(Q,t),e.uv1=Ug.getInterpolation(SQ,OC,_C,ZC,nQ,hQ,rQ,new ZA),e.uv2=e.uv1),E&&(ht.fromBufferAttribute(E,i),rt.fromBufferAttribute(E,o),St.fromBufferAttribute(E,t),e.normal=Ug.getInterpolation(SQ,OC,_C,ZC,ht,rt,St,new Y),e.normal.dot(g.direction)>0&&e.normal.multiplyScalar(-1));const a={a:i,b:o,c:t,normal:new Y,materialIndex:0};Ug.getNormal(OC,_C,ZC,a.normal),e.face=a}return e}class jB extends Jg{constructor(A=1,I=1,g=1,C=1,Q=1,E=1){super(),this.type="BoxGeometry",this.parameters={width:A,height:I,depth:g,widthSegments:C,heightSegments:Q,depthSegments:E};const i=this;C=Math.floor(C),Q=Math.floor(Q),E=Math.floor(E);const o=[],t=[],e=[],a=[];let s=0,n=0;S("z","y","x",-1,-1,g,I,A,E,Q,0),S("z","y","x",1,-1,g,I,-A,E,Q,1),S("x","z","y",1,1,A,g,I,C,E,2),S("x","z","y",1,-1,A,g,-I,C,E,3),S("x","y","z",1,-1,A,I,g,C,Q,4),S("x","y","z",-1,-1,A,I,-g,C,Q,5),this.setIndex(o),this.setAttribute("position",new xg(t,3)),this.setAttribute("normal",new xg(e,3)),this.setAttribute("uv",new xg(a,2));function S(w,r,h,M,G,K,d,R,J,Z,CA){const l=K/J,N=d/Z,P=K/2,BA=d/2,L=R/2,O=J+1,_=Z+1;let j=0,W=0;const v=new Y;for(let $=0;$<_;$++){const AA=$*N-BA;for(let nA=0;nA<O;nA++){const RA=nA*l-P;v[w]=RA*M,v[r]=AA*G,v[h]=L,t.push(v.x,v.y,v.z),v[w]=0,v[r]=0,v[h]=R>0?1:-1,e.push(v.x,v.y,v.z),a.push(nA/J),a.push(1-$/Z),j+=1}}for(let $=0;$<Z;$++)for(let AA=0;AA<J;AA++){const nA=s+AA+O*$,RA=s+AA+O*($+1),x=s+(AA+1)+O*($+1),z=s+(AA+1)+O*$;o.push(nA,RA,z),o.push(RA,x,z),W+=6}i.addGroup(n,W,CA),n+=W,s+=j}}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new jB(A.width,A.height,A.depth,A.widthSegments,A.heightSegments,A.depthSegments)}}function aB(B){const A={};for(const I in B){A[I]={};for(const g in B[I]){const C=B[I][g];C&&(C.isColor||C.isMatrix3||C.isMatrix4||C.isVector2||C.isVector3||C.isVector4||C.isTexture||C.isQuaternion)?C.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),A[I][g]=null):A[I][g]=C.clone():Array.isArray(C)?A[I][g]=C.slice():A[I][g]=C}}return A}function WI(B){const A={};for(let I=0;I<B.length;I++){const g=aB(B[I]);for(const C in g)A[C]=g[C]}return A}function XD(B){const A=[];for(let I=0;I<B.length;I++)A.push(B[I].clone());return A}function xe(B){return B.getRenderTarget()===null?B.outputColorSpace:II.workingColorSpace}const zD={clone:aB,merge:WI};var $D=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,An=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class iC extends Ng{constructor(A){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$D,this.fragmentShader=An,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,A!==void 0&&this.setValues(A)}copy(A){return super.copy(A),this.fragmentShader=A.fragmentShader,this.vertexShader=A.vertexShader,this.uniforms=aB(A.uniforms),this.uniformsGroups=XD(A.uniformsGroups),this.defines=Object.assign({},A.defines),this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.fog=A.fog,this.lights=A.lights,this.clipping=A.clipping,this.extensions=Object.assign({},A.extensions),this.glslVersion=A.glslVersion,this}toJSON(A){const I=super.toJSON(A);I.glslVersion=this.glslVersion,I.uniforms={};for(const C in this.uniforms){const E=this.uniforms[C].value;E&&E.isTexture?I.uniforms[C]={type:"t",value:E.toJSON(A).uuid}:E&&E.isColor?I.uniforms[C]={type:"c",value:E.getHex()}:E&&E.isVector2?I.uniforms[C]={type:"v2",value:E.toArray()}:E&&E.isVector3?I.uniforms[C]={type:"v3",value:E.toArray()}:E&&E.isVector4?I.uniforms[C]={type:"v4",value:E.toArray()}:E&&E.isMatrix3?I.uniforms[C]={type:"m3",value:E.toArray()}:E&&E.isMatrix4?I.uniforms[C]={type:"m4",value:E.toArray()}:I.uniforms[C]={value:E}}Object.keys(this.defines).length>0&&(I.defines=this.defines),I.vertexShader=this.vertexShader,I.fragmentShader=this.fragmentShader,I.lights=this.lights,I.clipping=this.clipping;const g={};for(const C in this.extensions)this.extensions[C]===!0&&(g[C]=!0);return Object.keys(g).length>0&&(I.extensions=g),I}}let Oe=class extends aI{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vA,this.projectionMatrix=new vA,this.projectionMatrixInverse=new vA,this.coordinateSystem=bg}copy(A,I){return super.copy(A,I),this.matrixWorldInverse.copy(A.matrixWorldInverse),this.projectionMatrix.copy(A.projectionMatrix),this.projectionMatrixInverse.copy(A.projectionMatrixInverse),this.coordinateSystem=A.coordinateSystem,this}getWorldDirection(A){return super.getWorldDirection(A).negate()}updateMatrixWorld(A){super.updateMatrixWorld(A),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(A,I){super.updateWorldMatrix(A,I),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const $g=new Y,wt=new ZA,ct=new ZA;class PI extends Oe{constructor(A=50,I=1,g=.1,C=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=A,this.zoom=1,this.near=g,this.far=C,this.focus=10,this.aspect=I,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(A,I){return super.copy(A,I),this.fov=A.fov,this.zoom=A.zoom,this.near=A.near,this.far=A.far,this.focus=A.focus,this.aspect=A.aspect,this.view=A.view===null?null:Object.assign({},A.view),this.filmGauge=A.filmGauge,this.filmOffset=A.filmOffset,this}setFocalLength(A){const I=.5*this.getFilmHeight()/A;this.fov=eB*2*Math.atan(I),this.updateProjectionMatrix()}getFocalLength(){const A=Math.tan(fB*.5*this.fov);return .5*this.getFilmHeight()/A}getEffectiveFOV(){return eB*2*Math.atan(Math.tan(fB*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(A,I,g){$g.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),I.set($g.x,$g.y).multiplyScalar(-A/$g.z),$g.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),g.set($g.x,$g.y).multiplyScalar(-A/$g.z)}getViewSize(A,I){return this.getViewBounds(A,wt,ct),I.subVectors(ct,wt)}setViewOffset(A,I,g,C,Q,E){this.aspect=A/I,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=I,this.view.offsetX=g,this.view.offsetY=C,this.view.width=Q,this.view.height=E,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=this.near;let I=A*Math.tan(fB*.5*this.fov)/this.zoom,g=2*I,C=this.aspect*g,Q=-.5*C;const E=this.view;if(this.view!==null&&this.view.enabled){const o=E.fullWidth,t=E.fullHeight;Q+=E.offsetX*C/o,I-=E.offsetY*g/t,C*=E.width/o,g*=E.height/t}const i=this.filmOffset;i!==0&&(Q+=A*i/this.getFilmWidth()),this.projectionMatrix.makePerspective(Q,Q+C,I,I-g,A,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const I=super.toJSON(A);return I.object.fov=this.fov,I.object.zoom=this.zoom,I.object.near=this.near,I.object.far=this.far,I.object.focus=this.focus,I.object.aspect=this.aspect,this.view!==null&&(I.object.view=Object.assign({},this.view)),I.object.filmGauge=this.filmGauge,I.object.filmOffset=this.filmOffset,I}}const vC=-90,WC=1;class In extends aI{constructor(A,I,g){super(),this.type="CubeCamera",this.renderTarget=g,this.coordinateSystem=null,this.activeMipmapLevel=0;const C=new PI(vC,WC,A,I);C.layers=this.layers,this.add(C);const Q=new PI(vC,WC,A,I);Q.layers=this.layers,this.add(Q);const E=new PI(vC,WC,A,I);E.layers=this.layers,this.add(E);const i=new PI(vC,WC,A,I);i.layers=this.layers,this.add(i);const o=new PI(vC,WC,A,I);o.layers=this.layers,this.add(o);const t=new PI(vC,WC,A,I);t.layers=this.layers,this.add(t)}updateCoordinateSystem(){const A=this.coordinateSystem,I=this.children.concat(),[g,C,Q,E,i,o]=I;for(const t of I)this.remove(t);if(A===bg)g.up.set(0,1,0),g.lookAt(1,0,0),C.up.set(0,1,0),C.lookAt(-1,0,0),Q.up.set(0,0,-1),Q.lookAt(0,1,0),E.up.set(0,0,1),E.lookAt(0,-1,0),i.up.set(0,1,0),i.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(A===TQ)g.up.set(0,-1,0),g.lookAt(-1,0,0),C.up.set(0,-1,0),C.lookAt(1,0,0),Q.up.set(0,0,1),Q.lookAt(0,1,0),E.up.set(0,0,-1),E.lookAt(0,-1,0),i.up.set(0,-1,0),i.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+A);for(const t of I)this.add(t),t.updateMatrixWorld()}update(A,I){this.parent===null&&this.updateMatrixWorld();const{renderTarget:g,activeMipmapLevel:C}=this;this.coordinateSystem!==A.coordinateSystem&&(this.coordinateSystem=A.coordinateSystem,this.updateCoordinateSystem());const[Q,E,i,o,t,e]=this.children,a=A.getRenderTarget(),s=A.getActiveCubeFace(),n=A.getActiveMipmapLevel(),S=A.xr.enabled;A.xr.enabled=!1;const w=g.texture.generateMipmaps;g.texture.generateMipmaps=!1,A.setRenderTarget(g,0,C),A.render(I,Q),A.setRenderTarget(g,1,C),A.render(I,E),A.setRenderTarget(g,2,C),A.render(I,i),A.setRenderTarget(g,3,C),A.render(I,o),A.setRenderTarget(g,4,C),A.render(I,t),g.texture.generateMipmaps=w,A.setRenderTarget(g,5,C),A.render(I,e),A.setRenderTarget(a,s,n),A.xr.enabled=S,g.texture.needsPMREMUpdate=!0}}class _e extends YI{constructor(A,I,g,C,Q,E,i,o,t,e){A=A!==void 0?A:[],I=I!==void 0?I:QB,super(A,I,g,C,Q,E,i,o,t,e),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(A){this.image=A}}class gn extends FC{constructor(A=1,I={}){super(A,A,I),this.isWebGLCubeRenderTarget=!0;const g={width:A,height:A,depth:1},C=[g,g,g,g,g,g];I.encoding!==void 0&&(KC("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),I.colorSpace=I.encoding===NC?kI:eg),this.texture=new _e(C,I.mapping,I.wrapS,I.wrapT,I.magFilter,I.minFilter,I.format,I.type,I.anisotropy,I.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=I.generateMipmaps!==void 0?I.generateMipmaps:!1,this.texture.minFilter=I.minFilter!==void 0?I.minFilter:OI}fromEquirectangularTexture(A,I){this.texture.type=I.type,this.texture.colorSpace=I.colorSpace,this.texture.generateMipmaps=I.generateMipmaps,this.texture.minFilter=I.minFilter,this.texture.magFilter=I.magFilter;const g={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},C=new jB(5,5,5),Q=new iC({name:"CubemapFromEquirect",uniforms:aB(g.uniforms),vertexShader:g.vertexShader,fragmentShader:g.fragmentShader,side:XI,blending:BC});Q.uniforms.tEquirect.value=I;const E=new VI(C,Q),i=I.minFilter;return I.minFilter===Tg&&(I.minFilter=OI),new In(1,10,this).update(A,E),I.minFilter=i,E.geometry.dispose(),E.material.dispose(),this}clear(A,I,g,C){const Q=A.getRenderTarget();for(let E=0;E<6;E++)A.setRenderTarget(this,E),A.clear(I,g,C);A.setRenderTarget(Q)}}const mE=new Y,Cn=new Y,Bn=new _A;class SC{constructor(A=new Y(1,0,0),I=0){this.isPlane=!0,this.normal=A,this.constant=I}set(A,I){return this.normal.copy(A),this.constant=I,this}setComponents(A,I,g,C){return this.normal.set(A,I,g),this.constant=C,this}setFromNormalAndCoplanarPoint(A,I){return this.normal.copy(A),this.constant=-I.dot(this.normal),this}setFromCoplanarPoints(A,I,g){const C=mE.subVectors(g,I).cross(Cn.subVectors(A,I)).normalize();return this.setFromNormalAndCoplanarPoint(C,A),this}copy(A){return this.normal.copy(A.normal),this.constant=A.constant,this}normalize(){const A=1/this.normal.length();return this.normal.multiplyScalar(A),this.constant*=A,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(A){return this.normal.dot(A)+this.constant}distanceToSphere(A){return this.distanceToPoint(A.center)-A.radius}projectPoint(A,I){return I.copy(A).addScaledVector(this.normal,-this.distanceToPoint(A))}intersectLine(A,I){const g=A.delta(mE),C=this.normal.dot(g);if(C===0)return this.distanceToPoint(A.start)===0?I.copy(A.start):null;const Q=-(A.start.dot(this.normal)+this.constant)/C;return Q<0||Q>1?null:I.copy(A.start).addScaledVector(g,Q)}intersectsLine(A){const I=this.distanceToPoint(A.start),g=this.distanceToPoint(A.end);return I<0&&g>0||g<0&&I>0}intersectsBox(A){return A.intersectsPlane(this)}intersectsSphere(A){return A.intersectsPlane(this)}coplanarPoint(A){return A.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(A,I){const g=I||Bn.getNormalMatrix(A),C=this.coplanarPoint(mE).applyMatrix4(A),Q=this.normal.applyMatrix3(g).normalize();return this.constant=-C.dot(Q),this}translate(A){return this.constant-=A.dot(this.normal),this}equals(A){return A.normal.equals(this.normal)&&A.constant===this.constant}clone(){return new this.constructor().copy(this)}}const nC=new Fg,GQ=new Y;class Li{constructor(A=new SC,I=new SC,g=new SC,C=new SC,Q=new SC,E=new SC){this.planes=[A,I,g,C,Q,E]}set(A,I,g,C,Q,E){const i=this.planes;return i[0].copy(A),i[1].copy(I),i[2].copy(g),i[3].copy(C),i[4].copy(Q),i[5].copy(E),this}copy(A){const I=this.planes;for(let g=0;g<6;g++)I[g].copy(A.planes[g]);return this}setFromProjectionMatrix(A,I=bg){const g=this.planes,C=A.elements,Q=C[0],E=C[1],i=C[2],o=C[3],t=C[4],e=C[5],a=C[6],s=C[7],n=C[8],S=C[9],w=C[10],r=C[11],h=C[12],M=C[13],G=C[14],K=C[15];if(g[0].setComponents(o-Q,s-t,r-n,K-h).normalize(),g[1].setComponents(o+Q,s+t,r+n,K+h).normalize(),g[2].setComponents(o+E,s+e,r+S,K+M).normalize(),g[3].setComponents(o-E,s-e,r-S,K-M).normalize(),g[4].setComponents(o-i,s-a,r-w,K-G).normalize(),I===bg)g[5].setComponents(o+i,s+a,r+w,K+G).normalize();else if(I===TQ)g[5].setComponents(i,a,w,G).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+I);return this}intersectsObject(A){if(A.boundingSphere!==void 0)A.boundingSphere===null&&A.computeBoundingSphere(),nC.copy(A.boundingSphere).applyMatrix4(A.matrixWorld);else{const I=A.geometry;I.boundingSphere===null&&I.computeBoundingSphere(),nC.copy(I.boundingSphere).applyMatrix4(A.matrixWorld)}return this.intersectsSphere(nC)}intersectsSprite(A){return nC.center.set(0,0,0),nC.radius=.7071067811865476,nC.applyMatrix4(A.matrixWorld),this.intersectsSphere(nC)}intersectsSphere(A){const I=this.planes,g=A.center,C=-A.radius;for(let Q=0;Q<6;Q++)if(I[Q].distanceToPoint(g)<C)return!1;return!0}intersectsBox(A){const I=this.planes;for(let g=0;g<6;g++){const C=I[g];if(GQ.x=C.normal.x>0?A.max.x:A.min.x,GQ.y=C.normal.y>0?A.max.y:A.min.y,GQ.z=C.normal.z>0?A.max.z:A.min.z,C.distanceToPoint(GQ)<0)return!1}return!0}containsPoint(A){const I=this.planes;for(let g=0;g<6;g++)if(I[g].distanceToPoint(A)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ze(){let B=null,A=!1,I=null,g=null;function C(Q,E){I(Q,E),g=B.requestAnimationFrame(C)}return{start:function(){A!==!0&&I!==null&&(g=B.requestAnimationFrame(C),A=!0)},stop:function(){B.cancelAnimationFrame(g),A=!1},setAnimationLoop:function(Q){I=Q},setContext:function(Q){B=Q}}}function Qn(B,A){const I=A.isWebGL2,g=new WeakMap;function C(t,e){const a=t.array,s=t.usage,n=a.byteLength,S=B.createBuffer();B.bindBuffer(e,S),B.bufferData(e,a,s),t.onUploadCallback();let w;if(a instanceof Float32Array)w=B.FLOAT;else if(a instanceof Uint16Array)if(t.isFloat16BufferAttribute)if(I)w=B.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else w=B.UNSIGNED_SHORT;else if(a instanceof Int16Array)w=B.SHORT;else if(a instanceof Uint32Array)w=B.UNSIGNED_INT;else if(a instanceof Int32Array)w=B.INT;else if(a instanceof Int8Array)w=B.BYTE;else if(a instanceof Uint8Array)w=B.UNSIGNED_BYTE;else if(a instanceof Uint8ClampedArray)w=B.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+a);return{buffer:S,type:w,bytesPerElement:a.BYTES_PER_ELEMENT,version:t.version,size:n}}function Q(t,e,a){const s=e.array,n=e._updateRange,S=e.updateRanges;if(B.bindBuffer(a,t),n.count===-1&&S.length===0&&B.bufferSubData(a,0,s),S.length!==0){for(let w=0,r=S.length;w<r;w++){const h=S[w];I?B.bufferSubData(a,h.start*s.BYTES_PER_ELEMENT,s,h.start,h.count):B.bufferSubData(a,h.start*s.BYTES_PER_ELEMENT,s.subarray(h.start,h.start+h.count))}e.clearUpdateRanges()}n.count!==-1&&(I?B.bufferSubData(a,n.offset*s.BYTES_PER_ELEMENT,s,n.offset,n.count):B.bufferSubData(a,n.offset*s.BYTES_PER_ELEMENT,s.subarray(n.offset,n.offset+n.count)),n.count=-1),e.onUploadCallback()}function E(t){return t.isInterleavedBufferAttribute&&(t=t.data),g.get(t)}function i(t){t.isInterleavedBufferAttribute&&(t=t.data);const e=g.get(t);e&&(B.deleteBuffer(e.buffer),g.delete(t))}function o(t,e){if(t.isGLBufferAttribute){const s=g.get(t);(!s||s.version<t.version)&&g.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version});return}t.isInterleavedBufferAttribute&&(t=t.data);const a=g.get(t);if(a===void 0)g.set(t,C(t,e));else if(a.version<t.version){if(a.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");Q(a.buffer,t,e),a.version=t.version}}return{get:E,remove:i,update:o}}class AE extends Jg{constructor(A=1,I=1,g=1,C=1){super(),this.type="PlaneGeometry",this.parameters={width:A,height:I,widthSegments:g,heightSegments:C};const Q=A/2,E=I/2,i=Math.floor(g),o=Math.floor(C),t=i+1,e=o+1,a=A/i,s=I/o,n=[],S=[],w=[],r=[];for(let h=0;h<e;h++){const M=h*s-E;for(let G=0;G<t;G++){const K=G*a-Q;S.push(K,-M,0),w.push(0,0,1),r.push(G/i),r.push(1-h/o)}}for(let h=0;h<o;h++)for(let M=0;M<i;M++){const G=M+t*h,K=M+t*(h+1),d=M+1+t*(h+1),R=M+1+t*h;n.push(G,K,R),n.push(K,d,R)}this.setIndex(n),this.setAttribute("position",new xg(S,3)),this.setAttribute("normal",new xg(w,3)),this.setAttribute("uv",new xg(r,2))}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new AE(A.width,A.height,A.widthSegments,A.heightSegments)}}var En=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,on=`#ifdef USE_ALPHAHASH
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
#endif`,tn=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,en=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,an=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sn=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dn=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,nn=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hn=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,rn=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Sn=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wn=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cn=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Gn=`#ifdef USE_IRIDESCENCE
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
#endif`,ln=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,kn=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,yn=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mn=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Un=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nn=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Kn=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Fn=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Jn=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Rn=`#define PI 3.141592653589793
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
} // validated`,qn=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,pn=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,dn=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yn=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ln=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fn=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hn="gl_FragColor = linearToOutputTexel( gl_FragColor );",un=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,mn=`#ifdef USE_ENVMAP
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
#endif`,Tn=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bn=`#ifdef USE_ENVMAP
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
#endif`,xn=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,On=`#ifdef USE_ENVMAP
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
#endif`,_n=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zn=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vn=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wn=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pn=`#ifdef USE_GRADIENTMAP
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
}`,jn=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Vn=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xn=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zn=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$n=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,Ah=`#ifdef USE_ENVMAP
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
#endif`,Ih=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ch=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
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
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Eh=`struct PhysicalMaterial {
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
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,ih=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,oh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,th=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,eh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ah=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Dh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,nh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sh=`#if defined( USE_POINTS_UV )
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
#endif`,wh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ch=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lh=`#ifdef USE_MORPHNORMALS
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
#endif`,kh=`#ifdef USE_MORPHTARGETS
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
#endif`,yh=`#ifdef USE_MORPHTARGETS
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
#endif`,Mh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Uh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Nh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Jh=`#ifdef USE_NORMALMAP
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
#endif`,Rh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ph=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lh=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Th=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Oh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_h=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Zh=`float getShadowMask() {
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
}`,vh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ph=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jh=`#ifdef USE_SKINNING
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
#endif`,Vh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$h=`#ifndef saturate
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ar=`#ifdef USE_TRANSMISSION
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
#endif`,Ir=`#ifdef USE_TRANSMISSION
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
#endif`,gr=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cr=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Br=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qr=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Er=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ir=`uniform sampler2D t2D;
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
}`,or=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tr=`#ifdef ENVMAP_TYPE_CUBE
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
}`,er=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ar=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sr=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
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
}`,Dr=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
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
}`,nr=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
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
}`,hr=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,rr=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sr=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wr=`uniform float scale;
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
}`,cr=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gr=`#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
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
}`,lr=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,kr=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
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
}`,yr=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Mr=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
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
}`,Ur=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Nr=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
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
}`,Kr=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Fr=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
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
}`,Jr=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Rr=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
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
}`,qr=`#define STANDARD
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pr=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
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
}`,dr=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Yr=`uniform float size;
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
}`,Lr=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,fr=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
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
}`,Hr=`uniform vec3 color;
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
}`,ur=`uniform float rotation;
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
}`,mr=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,mA={alphahash_fragment:En,alphahash_pars_fragment:on,alphamap_fragment:tn,alphamap_pars_fragment:en,alphatest_fragment:an,alphatest_pars_fragment:sn,aomap_fragment:Dn,aomap_pars_fragment:nn,batching_pars_vertex:hn,batching_vertex:rn,begin_vertex:Sn,beginnormal_vertex:wn,bsdfs:cn,iridescence_fragment:Gn,bumpmap_pars_fragment:ln,clipping_planes_fragment:kn,clipping_planes_pars_fragment:yn,clipping_planes_pars_vertex:Mn,clipping_planes_vertex:Un,color_fragment:Nn,color_pars_fragment:Kn,color_pars_vertex:Fn,color_vertex:Jn,common:Rn,cube_uv_reflection_fragment:qn,defaultnormal_vertex:pn,displacementmap_pars_vertex:dn,displacementmap_vertex:Yn,emissivemap_fragment:Ln,emissivemap_pars_fragment:fn,colorspace_fragment:Hn,colorspace_pars_fragment:un,envmap_fragment:mn,envmap_common_pars_fragment:Tn,envmap_pars_fragment:bn,envmap_pars_vertex:xn,envmap_physical_pars_fragment:Ah,envmap_vertex:On,fog_vertex:_n,fog_pars_vertex:Zn,fog_fragment:vn,fog_pars_fragment:Wn,gradientmap_pars_fragment:Pn,lightmap_fragment:jn,lightmap_pars_fragment:Vn,lights_lambert_fragment:Xn,lights_lambert_pars_fragment:zn,lights_pars_begin:$n,lights_toon_fragment:Ih,lights_toon_pars_fragment:gh,lights_phong_fragment:Ch,lights_phong_pars_fragment:Bh,lights_physical_fragment:Qh,lights_physical_pars_fragment:Eh,lights_fragment_begin:ih,lights_fragment_maps:oh,lights_fragment_end:th,logdepthbuf_fragment:eh,logdepthbuf_pars_fragment:ah,logdepthbuf_pars_vertex:sh,logdepthbuf_vertex:Dh,map_fragment:nh,map_pars_fragment:hh,map_particle_fragment:rh,map_particle_pars_fragment:Sh,metalnessmap_fragment:wh,metalnessmap_pars_fragment:ch,morphcolor_vertex:Gh,morphnormal_vertex:lh,morphtarget_pars_vertex:kh,morphtarget_vertex:yh,normal_fragment_begin:Mh,normal_fragment_maps:Uh,normal_pars_fragment:Nh,normal_pars_vertex:Kh,normal_vertex:Fh,normalmap_pars_fragment:Jh,clearcoat_normal_fragment_begin:Rh,clearcoat_normal_fragment_maps:qh,clearcoat_pars_fragment:ph,iridescence_pars_fragment:dh,opaque_fragment:Yh,packing:Lh,premultiplied_alpha_fragment:fh,project_vertex:Hh,dithering_fragment:uh,dithering_pars_fragment:mh,roughnessmap_fragment:Th,roughnessmap_pars_fragment:bh,shadowmap_pars_fragment:xh,shadowmap_pars_vertex:Oh,shadowmap_vertex:_h,shadowmask_pars_fragment:Zh,skinbase_vertex:vh,skinning_pars_vertex:Wh,skinning_vertex:Ph,skinnormal_vertex:jh,specularmap_fragment:Vh,specularmap_pars_fragment:Xh,tonemapping_fragment:zh,tonemapping_pars_fragment:$h,transmission_fragment:Ar,transmission_pars_fragment:Ir,uv_pars_fragment:gr,uv_pars_vertex:Cr,uv_vertex:Br,worldpos_vertex:Qr,background_vert:Er,background_frag:ir,backgroundCube_vert:or,backgroundCube_frag:tr,cube_vert:er,cube_frag:ar,depth_vert:sr,depth_frag:Dr,distanceRGBA_vert:nr,distanceRGBA_frag:hr,equirect_vert:rr,equirect_frag:Sr,linedashed_vert:wr,linedashed_frag:cr,meshbasic_vert:Gr,meshbasic_frag:lr,meshlambert_vert:kr,meshlambert_frag:yr,meshmatcap_vert:Mr,meshmatcap_frag:Ur,meshnormal_vert:Nr,meshnormal_frag:Kr,meshphong_vert:Fr,meshphong_frag:Jr,meshphysical_vert:Rr,meshphysical_frag:qr,meshtoon_vert:pr,meshtoon_frag:dr,points_vert:Yr,points_frag:Lr,shadow_vert:fr,shadow_frag:Hr,sprite_vert:ur,sprite_frag:mr},iA={common:{diffuse:{value:new dA(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _A},alphaMap:{value:null},alphaMapTransform:{value:new _A},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _A}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _A}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _A}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _A},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _A},normalScale:{value:new ZA(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _A},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _A}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _A}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _A}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dA(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new dA(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _A},alphaTest:{value:0},uvTransform:{value:new _A}},sprite:{diffuse:{value:new dA(16777215)},opacity:{value:1},center:{value:new ZA(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _A},alphaMap:{value:null},alphaMapTransform:{value:new _A},alphaTest:{value:0}}},lg={basic:{uniforms:WI([iA.common,iA.specularmap,iA.envmap,iA.aomap,iA.lightmap,iA.fog]),vertexShader:mA.meshbasic_vert,fragmentShader:mA.meshbasic_frag},lambert:{uniforms:WI([iA.common,iA.specularmap,iA.envmap,iA.aomap,iA.lightmap,iA.emissivemap,iA.bumpmap,iA.normalmap,iA.displacementmap,iA.fog,iA.lights,{emissive:{value:new dA(0)}}]),vertexShader:mA.meshlambert_vert,fragmentShader:mA.meshlambert_frag},phong:{uniforms:WI([iA.common,iA.specularmap,iA.envmap,iA.aomap,iA.lightmap,iA.emissivemap,iA.bumpmap,iA.normalmap,iA.displacementmap,iA.fog,iA.lights,{emissive:{value:new dA(0)},specular:{value:new dA(1118481)},shininess:{value:30}}]),vertexShader:mA.meshphong_vert,fragmentShader:mA.meshphong_frag},standard:{uniforms:WI([iA.common,iA.envmap,iA.aomap,iA.lightmap,iA.emissivemap,iA.bumpmap,iA.normalmap,iA.displacementmap,iA.roughnessmap,iA.metalnessmap,iA.fog,iA.lights,{emissive:{value:new dA(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mA.meshphysical_vert,fragmentShader:mA.meshphysical_frag},toon:{uniforms:WI([iA.common,iA.aomap,iA.lightmap,iA.emissivemap,iA.bumpmap,iA.normalmap,iA.displacementmap,iA.gradientmap,iA.fog,iA.lights,{emissive:{value:new dA(0)}}]),vertexShader:mA.meshtoon_vert,fragmentShader:mA.meshtoon_frag},matcap:{uniforms:WI([iA.common,iA.bumpmap,iA.normalmap,iA.displacementmap,iA.fog,{matcap:{value:null}}]),vertexShader:mA.meshmatcap_vert,fragmentShader:mA.meshmatcap_frag},points:{uniforms:WI([iA.points,iA.fog]),vertexShader:mA.points_vert,fragmentShader:mA.points_frag},dashed:{uniforms:WI([iA.common,iA.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mA.linedashed_vert,fragmentShader:mA.linedashed_frag},depth:{uniforms:WI([iA.common,iA.displacementmap]),vertexShader:mA.depth_vert,fragmentShader:mA.depth_frag},normal:{uniforms:WI([iA.common,iA.bumpmap,iA.normalmap,iA.displacementmap,{opacity:{value:1}}]),vertexShader:mA.meshnormal_vert,fragmentShader:mA.meshnormal_frag},sprite:{uniforms:WI([iA.sprite,iA.fog]),vertexShader:mA.sprite_vert,fragmentShader:mA.sprite_frag},background:{uniforms:{uvTransform:{value:new _A},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mA.background_vert,fragmentShader:mA.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:mA.backgroundCube_vert,fragmentShader:mA.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mA.cube_vert,fragmentShader:mA.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mA.equirect_vert,fragmentShader:mA.equirect_frag},distanceRGBA:{uniforms:WI([iA.common,iA.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mA.distanceRGBA_vert,fragmentShader:mA.distanceRGBA_frag},shadow:{uniforms:WI([iA.lights,iA.fog,{color:{value:new dA(0)},opacity:{value:1}}]),vertexShader:mA.shadow_vert,fragmentShader:mA.shadow_frag}};lg.physical={uniforms:WI([lg.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _A},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _A},clearcoatNormalScale:{value:new ZA(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _A},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _A},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _A},sheen:{value:0},sheenColor:{value:new dA(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _A},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _A},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _A},transmissionSamplerSize:{value:new ZA},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _A},attenuationDistance:{value:0},attenuationColor:{value:new dA(0)},specularColor:{value:new dA(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _A},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _A},anisotropyVector:{value:new ZA},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _A}}]),vertexShader:mA.meshphysical_vert,fragmentShader:mA.meshphysical_frag};const lQ={r:0,b:0,g:0};function Tr(B,A,I,g,C,Q,E){const i=new dA(0);let o=Q===!0?0:1,t,e,a=null,s=0,n=null;function S(r,h){let M=!1,G=h.isScene===!0?h.background:null;G&&G.isTexture&&(G=(h.backgroundBlurriness>0?I:A).get(G)),G===null?w(i,o):G&&G.isColor&&(w(G,1),M=!0);const K=B.xr.getEnvironmentBlendMode();K==="additive"?g.buffers.color.setClear(0,0,0,1,E):K==="alpha-blend"&&g.buffers.color.setClear(0,0,0,0,E),(B.autoClear||M)&&B.clear(B.autoClearColor,B.autoClearDepth,B.autoClearStencil),G&&(G.isCubeTexture||G.mapping===VQ)?(e===void 0&&(e=new VI(new jB(1,1,1),new iC({name:"BackgroundCubeMaterial",uniforms:aB(lg.backgroundCube.uniforms),vertexShader:lg.backgroundCube.vertexShader,fragmentShader:lg.backgroundCube.fragmentShader,side:XI,depthTest:!1,depthWrite:!1,fog:!1})),e.geometry.deleteAttribute("normal"),e.geometry.deleteAttribute("uv"),e.onBeforeRender=function(d,R,J){this.matrixWorld.copyPosition(J.matrixWorld)},Object.defineProperty(e.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),C.update(e)),e.material.uniforms.envMap.value=G,e.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,e.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,e.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,e.material.toneMapped=II.getTransfer(G.colorSpace)!==DI,(a!==G||s!==G.version||n!==B.toneMapping)&&(e.material.needsUpdate=!0,a=G,s=G.version,n=B.toneMapping),e.layers.enableAll(),r.unshift(e,e.geometry,e.material,0,0,null)):G&&G.isTexture&&(t===void 0&&(t=new VI(new AE(2,2),new iC({name:"BackgroundMaterial",uniforms:aB(lg.background.uniforms),vertexShader:lg.background.vertexShader,fragmentShader:lg.background.fragmentShader,side:Og,depthTest:!1,depthWrite:!1,fog:!1})),t.geometry.deleteAttribute("normal"),Object.defineProperty(t.material,"map",{get:function(){return this.uniforms.t2D.value}}),C.update(t)),t.material.uniforms.t2D.value=G,t.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,t.material.toneMapped=II.getTransfer(G.colorSpace)!==DI,G.matrixAutoUpdate===!0&&G.updateMatrix(),t.material.uniforms.uvTransform.value.copy(G.matrix),(a!==G||s!==G.version||n!==B.toneMapping)&&(t.material.needsUpdate=!0,a=G,s=G.version,n=B.toneMapping),t.layers.enableAll(),r.unshift(t,t.geometry,t.material,0,0,null))}function w(r,h){r.getRGB(lQ,xe(B)),g.buffers.color.setClear(lQ.r,lQ.g,lQ.b,h,E)}return{getClearColor:function(){return i},setClearColor:function(r,h=1){i.set(r),o=h,w(i,o)},getClearAlpha:function(){return o},setClearAlpha:function(r){o=r,w(i,o)},render:S}}function br(B,A,I,g){const C=B.getParameter(B.MAX_VERTEX_ATTRIBS),Q=g.isWebGL2?null:A.get("OES_vertex_array_object"),E=g.isWebGL2||Q!==null,i={},o=r(null);let t=o,e=!1;function a(L,O,_,j,W){let v=!1;if(E){const $=w(j,_,O);t!==$&&(t=$,n(t.object)),v=h(L,j,_,W),v&&M(L,j,_,W)}else{const $=O.wireframe===!0;(t.geometry!==j.id||t.program!==_.id||t.wireframe!==$)&&(t.geometry=j.id,t.program=_.id,t.wireframe=$,v=!0)}W!==null&&I.update(W,B.ELEMENT_ARRAY_BUFFER),(v||e)&&(e=!1,Z(L,O,_,j),W!==null&&B.bindBuffer(B.ELEMENT_ARRAY_BUFFER,I.get(W).buffer))}function s(){return g.isWebGL2?B.createVertexArray():Q.createVertexArrayOES()}function n(L){return g.isWebGL2?B.bindVertexArray(L):Q.bindVertexArrayOES(L)}function S(L){return g.isWebGL2?B.deleteVertexArray(L):Q.deleteVertexArrayOES(L)}function w(L,O,_){const j=_.wireframe===!0;let W=i[L.id];W===void 0&&(W={},i[L.id]=W);let v=W[O.id];v===void 0&&(v={},W[O.id]=v);let $=v[j];return $===void 0&&($=r(s()),v[j]=$),$}function r(L){const O=[],_=[],j=[];for(let W=0;W<C;W++)O[W]=0,_[W]=0,j[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:_,attributeDivisors:j,object:L,attributes:{},index:null}}function h(L,O,_,j){const W=t.attributes,v=O.attributes;let $=0;const AA=_.getAttributes();for(const nA in AA)if(AA[nA].location>=0){const x=W[nA];let z=v[nA];if(z===void 0&&(nA==="instanceMatrix"&&L.instanceMatrix&&(z=L.instanceMatrix),nA==="instanceColor"&&L.instanceColor&&(z=L.instanceColor)),x===void 0||x.attribute!==z||z&&x.data!==z.data)return!0;$++}return t.attributesNum!==$||t.index!==j}function M(L,O,_,j){const W={},v=O.attributes;let $=0;const AA=_.getAttributes();for(const nA in AA)if(AA[nA].location>=0){let x=v[nA];x===void 0&&(nA==="instanceMatrix"&&L.instanceMatrix&&(x=L.instanceMatrix),nA==="instanceColor"&&L.instanceColor&&(x=L.instanceColor));const z={};z.attribute=x,x&&x.data&&(z.data=x.data),W[nA]=z,$++}t.attributes=W,t.attributesNum=$,t.index=j}function G(){const L=t.newAttributes;for(let O=0,_=L.length;O<_;O++)L[O]=0}function K(L){d(L,0)}function d(L,O){const _=t.newAttributes,j=t.enabledAttributes,W=t.attributeDivisors;_[L]=1,j[L]===0&&(B.enableVertexAttribArray(L),j[L]=1),W[L]!==O&&((g.isWebGL2?B:A.get("ANGLE_instanced_arrays"))[g.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,O),W[L]=O)}function R(){const L=t.newAttributes,O=t.enabledAttributes;for(let _=0,j=O.length;_<j;_++)O[_]!==L[_]&&(B.disableVertexAttribArray(_),O[_]=0)}function J(L,O,_,j,W,v,$){$===!0?B.vertexAttribIPointer(L,O,_,W,v):B.vertexAttribPointer(L,O,_,j,W,v)}function Z(L,O,_,j){if(g.isWebGL2===!1&&(L.isInstancedMesh||j.isInstancedBufferGeometry)&&A.get("ANGLE_instanced_arrays")===null)return;G();const W=j.attributes,v=_.getAttributes(),$=O.defaultAttributeValues;for(const AA in v){const nA=v[AA];if(nA.location>=0){let RA=W[AA];if(RA===void 0&&(AA==="instanceMatrix"&&L.instanceMatrix&&(RA=L.instanceMatrix),AA==="instanceColor"&&L.instanceColor&&(RA=L.instanceColor)),RA!==void 0){const x=RA.normalized,z=RA.itemSize,eA=I.get(RA);if(eA===void 0)continue;const MA=eA.buffer,UA=eA.type,rA=eA.bytesPerElement,zA=g.isWebGL2===!0&&(UA===B.INT||UA===B.UNSIGNED_INT||RA.gpuType===ye);if(RA.isInterleavedBufferAttribute){const LA=RA.data,H=LA.stride,fI=RA.offset;if(LA.isInstancedInterleavedBuffer){for(let kA=0;kA<nA.locationSize;kA++)d(nA.location+kA,LA.meshPerAttribute);L.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=LA.meshPerAttribute*LA.count)}else for(let kA=0;kA<nA.locationSize;kA++)K(nA.location+kA);B.bindBuffer(B.ARRAY_BUFFER,MA);for(let kA=0;kA<nA.locationSize;kA++)J(nA.location+kA,z/nA.locationSize,UA,x,H*rA,(fI+z/nA.locationSize*kA)*rA,zA)}else{if(RA.isInstancedBufferAttribute){for(let LA=0;LA<nA.locationSize;LA++)d(nA.location+LA,RA.meshPerAttribute);L.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=RA.meshPerAttribute*RA.count)}else for(let LA=0;LA<nA.locationSize;LA++)K(nA.location+LA);B.bindBuffer(B.ARRAY_BUFFER,MA);for(let LA=0;LA<nA.locationSize;LA++)J(nA.location+LA,z/nA.locationSize,UA,x,z*rA,z/nA.locationSize*LA*rA,zA)}}else if($!==void 0){const x=$[AA];if(x!==void 0)switch(x.length){case 2:B.vertexAttrib2fv(nA.location,x);break;case 3:B.vertexAttrib3fv(nA.location,x);break;case 4:B.vertexAttrib4fv(nA.location,x);break;default:B.vertexAttrib1fv(nA.location,x)}}}}R()}function CA(){P();for(const L in i){const O=i[L];for(const _ in O){const j=O[_];for(const W in j)S(j[W].object),delete j[W];delete O[_]}delete i[L]}}function l(L){if(i[L.id]===void 0)return;const O=i[L.id];for(const _ in O){const j=O[_];for(const W in j)S(j[W].object),delete j[W];delete O[_]}delete i[L.id]}function N(L){for(const O in i){const _=i[O];if(_[L.id]===void 0)continue;const j=_[L.id];for(const W in j)S(j[W].object),delete j[W];delete _[L.id]}}function P(){BA(),e=!0,t!==o&&(t=o,n(t.object))}function BA(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:a,reset:P,resetDefaultState:BA,dispose:CA,releaseStatesOfGeometry:l,releaseStatesOfProgram:N,initAttributes:G,enableAttribute:K,disableUnusedAttributes:R}}function xr(B,A,I,g){const C=g.isWebGL2;let Q;function E(e){Q=e}function i(e,a){B.drawArrays(Q,e,a),I.update(a,Q,1)}function o(e,a,s){if(s===0)return;let n,S;if(C)n=B,S="drawArraysInstanced";else if(n=A.get("ANGLE_instanced_arrays"),S="drawArraysInstancedANGLE",n===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}n[S](Q,e,a,s),I.update(a,Q,s)}function t(e,a,s){if(s===0)return;const n=A.get("WEBGL_multi_draw");if(n===null)for(let S=0;S<s;S++)this.render(e[S],a[S]);else{n.multiDrawArraysWEBGL(Q,e,0,a,0,s);let S=0;for(let w=0;w<s;w++)S+=a[w];I.update(S,Q,1)}}this.setMode=E,this.render=i,this.renderInstances=o,this.renderMultiDraw=t}function Or(B,A,I){let g;function C(){if(g!==void 0)return g;if(A.has("EXT_texture_filter_anisotropic")===!0){const J=A.get("EXT_texture_filter_anisotropic");g=B.getParameter(J.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else g=0;return g}function Q(J){if(J==="highp"){if(B.getShaderPrecisionFormat(B.VERTEX_SHADER,B.HIGH_FLOAT).precision>0&&B.getShaderPrecisionFormat(B.FRAGMENT_SHADER,B.HIGH_FLOAT).precision>0)return"highp";J="mediump"}return J==="mediump"&&B.getShaderPrecisionFormat(B.VERTEX_SHADER,B.MEDIUM_FLOAT).precision>0&&B.getShaderPrecisionFormat(B.FRAGMENT_SHADER,B.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const E=typeof WebGL2RenderingContext<"u"&&B.constructor.name==="WebGL2RenderingContext";let i=I.precision!==void 0?I.precision:"highp";const o=Q(i);o!==i&&(console.warn("THREE.WebGLRenderer:",i,"not supported, using",o,"instead."),i=o);const t=E||A.has("WEBGL_draw_buffers"),e=I.logarithmicDepthBuffer===!0,a=B.getParameter(B.MAX_TEXTURE_IMAGE_UNITS),s=B.getParameter(B.MAX_VERTEX_TEXTURE_IMAGE_UNITS),n=B.getParameter(B.MAX_TEXTURE_SIZE),S=B.getParameter(B.MAX_CUBE_MAP_TEXTURE_SIZE),w=B.getParameter(B.MAX_VERTEX_ATTRIBS),r=B.getParameter(B.MAX_VERTEX_UNIFORM_VECTORS),h=B.getParameter(B.MAX_VARYING_VECTORS),M=B.getParameter(B.MAX_FRAGMENT_UNIFORM_VECTORS),G=s>0,K=E||A.has("OES_texture_float"),d=G&&K,R=E?B.getParameter(B.MAX_SAMPLES):0;return{isWebGL2:E,drawBuffers:t,getMaxAnisotropy:C,getMaxPrecision:Q,precision:i,logarithmicDepthBuffer:e,maxTextures:a,maxVertexTextures:s,maxTextureSize:n,maxCubemapSize:S,maxAttributes:w,maxVertexUniforms:r,maxVaryings:h,maxFragmentUniforms:M,vertexTextures:G,floatFragmentTextures:K,floatVertexTextures:d,maxSamples:R}}function _r(B){const A=this;let I=null,g=0,C=!1,Q=!1;const E=new SC,i=new _A,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(a,s){const n=a.length!==0||s||g!==0||C;return C=s,g=a.length,n},this.beginShadows=function(){Q=!0,e(null)},this.endShadows=function(){Q=!1},this.setGlobalState=function(a,s){I=e(a,s,0)},this.setState=function(a,s,n){const S=a.clippingPlanes,w=a.clipIntersection,r=a.clipShadows,h=B.get(a);if(!C||S===null||S.length===0||Q&&!r)Q?e(null):t();else{const M=Q?0:g,G=M*4;let K=h.clippingState||null;o.value=K,K=e(S,s,G,n);for(let d=0;d!==G;++d)K[d]=I[d];h.clippingState=K,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=M}};function t(){o.value!==I&&(o.value=I,o.needsUpdate=g>0),A.numPlanes=g,A.numIntersection=0}function e(a,s,n,S){const w=a!==null?a.length:0;let r=null;if(w!==0){if(r=o.value,S!==!0||r===null){const h=n+w*4,M=s.matrixWorldInverse;i.getNormalMatrix(M),(r===null||r.length<h)&&(r=new Float32Array(h));for(let G=0,K=n;G!==w;++G,K+=4)E.copy(a[G]).applyMatrix4(M,i),E.normal.toArray(r,K),r[K+3]=E.constant}o.value=r,o.needsUpdate=!0}return A.numPlanes=w,A.numIntersection=0,r}}function Zr(B){let A=new WeakMap;function I(E,i){return i===ii?E.mapping=QB:i===oi&&(E.mapping=EB),E}function g(E){if(E&&E.isTexture){const i=E.mapping;if(i===ii||i===oi)if(A.has(E)){const o=A.get(E).texture;return I(o,E.mapping)}else{const o=E.image;if(o&&o.height>0){const t=new gn(o.height);return t.fromEquirectangularTexture(B,E),A.set(E,t),E.addEventListener("dispose",C),I(t.texture,E.mapping)}else return null}}return E}function C(E){const i=E.target;i.removeEventListener("dispose",C);const o=A.get(i);o!==void 0&&(A.delete(i),o.dispose())}function Q(){A=new WeakMap}return{get:g,dispose:Q}}class fi extends Oe{constructor(A=-1,I=1,g=1,C=-1,Q=.1,E=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=A,this.right=I,this.top=g,this.bottom=C,this.near=Q,this.far=E,this.updateProjectionMatrix()}copy(A,I){return super.copy(A,I),this.left=A.left,this.right=A.right,this.top=A.top,this.bottom=A.bottom,this.near=A.near,this.far=A.far,this.zoom=A.zoom,this.view=A.view===null?null:Object.assign({},A.view),this}setViewOffset(A,I,g,C,Q,E){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=I,this.view.offsetX=g,this.view.offsetY=C,this.view.width=Q,this.view.height=E,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=(this.right-this.left)/(2*this.zoom),I=(this.top-this.bottom)/(2*this.zoom),g=(this.right+this.left)/2,C=(this.top+this.bottom)/2;let Q=g-A,E=g+A,i=C+I,o=C-I;if(this.view!==null&&this.view.enabled){const t=(this.right-this.left)/this.view.fullWidth/this.zoom,e=(this.top-this.bottom)/this.view.fullHeight/this.zoom;Q+=t*this.view.offsetX,E=Q+t*this.view.width,i-=e*this.view.offsetY,o=i-e*this.view.height}this.projectionMatrix.makeOrthographic(Q,E,i,o,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const I=super.toJSON(A);return I.object.zoom=this.zoom,I.object.left=this.left,I.object.right=this.right,I.object.top=this.top,I.object.bottom=this.bottom,I.object.near=this.near,I.object.far=this.far,this.view!==null&&(I.object.view=Object.assign({},this.view)),I}}const AB=4,Gt=[.125,.215,.35,.446,.526,.582],GC=20,TE=new fi,lt=new dA;let bE=null,xE=0,OE=0;const wC=(1+Math.sqrt(5))/2,PC=1/wC,kt=[new Y(1,1,1),new Y(-1,1,1),new Y(1,1,-1),new Y(-1,1,-1),new Y(0,wC,PC),new Y(0,wC,-PC),new Y(PC,0,wC),new Y(-PC,0,wC),new Y(wC,PC,0),new Y(-wC,PC,0)];class yt{constructor(A){this._renderer=A,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(A,I=0,g=.1,C=100){bE=this._renderer.getRenderTarget(),xE=this._renderer.getActiveCubeFace(),OE=this._renderer.getActiveMipmapLevel(),this._setSize(256);const Q=this._allocateTargets();return Q.depthBuffer=!0,this._sceneToCubeUV(A,g,C,Q),I>0&&this._blur(Q,0,0,I),this._applyPMREM(Q),this._cleanup(Q),Q}fromEquirectangular(A,I=null){return this._fromTexture(A,I)}fromCubemap(A,I=null){return this._fromTexture(A,I)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nt(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ut(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(A){this._lodMax=Math.floor(Math.log2(A)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let A=0;A<this._lodPlanes.length;A++)this._lodPlanes[A].dispose()}_cleanup(A){this._renderer.setRenderTarget(bE,xE,OE),A.scissorTest=!1,kQ(A,0,0,A.width,A.height)}_fromTexture(A,I){A.mapping===QB||A.mapping===EB?this._setSize(A.image.length===0?16:A.image[0].width||A.image[0].image.width):this._setSize(A.image.width/4),bE=this._renderer.getRenderTarget(),xE=this._renderer.getActiveCubeFace(),OE=this._renderer.getActiveMipmapLevel();const g=I||this._allocateTargets();return this._textureToCubeUV(A,g),this._applyPMREM(g),this._cleanup(g),g}_allocateTargets(){const A=3*Math.max(this._cubeSize,112),I=4*this._cubeSize,g={magFilter:OI,minFilter:OI,generateMipmaps:!1,type:TB,format:tg,colorSpace:LI,depthBuffer:!1},C=Mt(A,I,g);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==A||this._pingPongRenderTarget.height!==I){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mt(A,I,g);const{_lodMax:Q}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vr(Q)),this._blurMaterial=Wr(Q,A,I)}return C}_compileMaterial(A){const I=new VI(this._lodPlanes[0],A);this._renderer.compile(I,TE)}_sceneToCubeUV(A,I,g,C){const i=new PI(90,1,I,g),o=[1,-1,1,1,1,1],t=[1,1,1,-1,-1,-1],e=this._renderer,a=e.autoClear,s=e.toneMapping;e.getClearColor(lt),e.toneMapping=QC,e.autoClear=!1;const n=new lC({name:"PMREM.Background",side:XI,depthWrite:!1,depthTest:!1}),S=new VI(new jB,n);let w=!1;const r=A.background;r?r.isColor&&(n.color.copy(r),A.background=null,w=!0):(n.color.copy(lt),w=!0);for(let h=0;h<6;h++){const M=h%3;M===0?(i.up.set(0,o[h],0),i.lookAt(t[h],0,0)):M===1?(i.up.set(0,0,o[h]),i.lookAt(0,t[h],0)):(i.up.set(0,o[h],0),i.lookAt(0,0,t[h]));const G=this._cubeSize;kQ(C,M*G,h>2?G:0,G,G),e.setRenderTarget(C),w&&e.render(S,i),e.render(A,i)}S.geometry.dispose(),S.material.dispose(),e.toneMapping=s,e.autoClear=a,A.background=r}_textureToCubeUV(A,I){const g=this._renderer,C=A.mapping===QB||A.mapping===EB;C?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nt()),this._cubemapMaterial.uniforms.flipEnvMap.value=A.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ut());const Q=C?this._cubemapMaterial:this._equirectMaterial,E=new VI(this._lodPlanes[0],Q),i=Q.uniforms;i.envMap.value=A;const o=this._cubeSize;kQ(I,0,0,3*o,2*o),g.setRenderTarget(I),g.render(E,TE)}_applyPMREM(A){const I=this._renderer,g=I.autoClear;I.autoClear=!1;for(let C=1;C<this._lodPlanes.length;C++){const Q=Math.sqrt(this._sigmas[C]*this._sigmas[C]-this._sigmas[C-1]*this._sigmas[C-1]),E=kt[(C-1)%kt.length];this._blur(A,C-1,C,Q,E)}I.autoClear=g}_blur(A,I,g,C,Q){const E=this._pingPongRenderTarget;this._halfBlur(A,E,I,g,C,"latitudinal",Q),this._halfBlur(E,A,g,g,C,"longitudinal",Q)}_halfBlur(A,I,g,C,Q,E,i){const o=this._renderer,t=this._blurMaterial;E!=="latitudinal"&&E!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const e=3,a=new VI(this._lodPlanes[C],t),s=t.uniforms,n=this._sizeLods[g]-1,S=isFinite(Q)?Math.PI/(2*n):2*Math.PI/(2*GC-1),w=Q/S,r=isFinite(Q)?1+Math.floor(e*w):GC;r>GC&&console.warn(`sigmaRadians, ${Q}, is too large and will clip, as it requested ${r} samples when the maximum is set to ${GC}`);const h=[];let M=0;for(let J=0;J<GC;++J){const Z=J/w,CA=Math.exp(-Z*Z/2);h.push(CA),J===0?M+=CA:J<r&&(M+=2*CA)}for(let J=0;J<h.length;J++)h[J]=h[J]/M;s.envMap.value=A.texture,s.samples.value=r,s.weights.value=h,s.latitudinal.value=E==="latitudinal",i&&(s.poleAxis.value=i);const{_lodMax:G}=this;s.dTheta.value=S,s.mipInt.value=G-g;const K=this._sizeLods[C],d=3*K*(C>G-AB?C-G+AB:0),R=4*(this._cubeSize-K);kQ(I,d,R,3*K,2*K),o.setRenderTarget(I),o.render(a,TE)}}function vr(B){const A=[],I=[],g=[];let C=B;const Q=B-AB+1+Gt.length;for(let E=0;E<Q;E++){const i=Math.pow(2,C);I.push(i);let o=1/i;E>B-AB?o=Gt[E-B+AB-1]:E===0&&(o=0),g.push(o);const t=1/(i-2),e=-t,a=1+t,s=[e,e,a,e,a,a,e,e,a,a,e,a],n=6,S=6,w=3,r=2,h=1,M=new Float32Array(w*S*n),G=new Float32Array(r*S*n),K=new Float32Array(h*S*n);for(let R=0;R<n;R++){const J=R%3*2/3-1,Z=R>2?0:-1,CA=[J,Z,0,J+2/3,Z,0,J+2/3,Z+1,0,J,Z,0,J+2/3,Z+1,0,J,Z+1,0];M.set(CA,w*S*R),G.set(s,r*S*R);const l=[R,R,R,R,R,R];K.set(l,h*S*R)}const d=new Jg;d.setAttribute("position",new jI(M,w)),d.setAttribute("uv",new jI(G,r)),d.setAttribute("faceIndex",new jI(K,h)),A.push(d),C>AB&&C--}return{lodPlanes:A,sizeLods:I,sigmas:g}}function Mt(B,A,I){const g=new FC(B,A,I);return g.texture.mapping=VQ,g.texture.name="PMREM.cubeUv",g.scissorTest=!0,g}function kQ(B,A,I,g,C){B.viewport.set(A,I,g,C),B.scissor.set(A,I,g,C)}function Wr(B,A,I){const g=new Float32Array(GC),C=new Y(0,1,0);return new iC({name:"SphericalGaussianBlur",defines:{n:GC,CUBEUV_TEXEL_WIDTH:1/A,CUBEUV_TEXEL_HEIGHT:1/I,CUBEUV_MAX_MIP:`${B}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:g},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:C}},vertexShader:Hi(),fragmentShader:`

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
		`,blending:BC,depthTest:!1,depthWrite:!1})}function Ut(){return new iC({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hi(),fragmentShader:`

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
		`,blending:BC,depthTest:!1,depthWrite:!1})}function Nt(){return new iC({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hi(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:BC,depthTest:!1,depthWrite:!1})}function Hi(){return`

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
	`}function Pr(B){let A=new WeakMap,I=null;function g(i){if(i&&i.isTexture){const o=i.mapping,t=o===ii||o===oi,e=o===QB||o===EB;if(t||e)if(i.isRenderTargetTexture&&i.needsPMREMUpdate===!0){i.needsPMREMUpdate=!1;let a=A.get(i);return I===null&&(I=new yt(B)),a=t?I.fromEquirectangular(i,a):I.fromCubemap(i,a),A.set(i,a),a.texture}else{if(A.has(i))return A.get(i).texture;{const a=i.image;if(t&&a&&a.height>0||e&&a&&C(a)){I===null&&(I=new yt(B));const s=t?I.fromEquirectangular(i):I.fromCubemap(i);return A.set(i,s),i.addEventListener("dispose",Q),s.texture}else return null}}}return i}function C(i){let o=0;const t=6;for(let e=0;e<t;e++)i[e]!==void 0&&o++;return o===t}function Q(i){const o=i.target;o.removeEventListener("dispose",Q);const t=A.get(o);t!==void 0&&(A.delete(o),t.dispose())}function E(){A=new WeakMap,I!==null&&(I.dispose(),I=null)}return{get:g,dispose:E}}function jr(B){const A={};function I(g){if(A[g]!==void 0)return A[g];let C;switch(g){case"WEBGL_depth_texture":C=B.getExtension("WEBGL_depth_texture")||B.getExtension("MOZ_WEBGL_depth_texture")||B.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":C=B.getExtension("EXT_texture_filter_anisotropic")||B.getExtension("MOZ_EXT_texture_filter_anisotropic")||B.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":C=B.getExtension("WEBGL_compressed_texture_s3tc")||B.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||B.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":C=B.getExtension("WEBGL_compressed_texture_pvrtc")||B.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:C=B.getExtension(g)}return A[g]=C,C}return{has:function(g){return I(g)!==null},init:function(g){g.isWebGL2?(I("EXT_color_buffer_float"),I("WEBGL_clip_cull_distance")):(I("WEBGL_depth_texture"),I("OES_texture_float"),I("OES_texture_half_float"),I("OES_texture_half_float_linear"),I("OES_standard_derivatives"),I("OES_element_index_uint"),I("OES_vertex_array_object"),I("ANGLE_instanced_arrays")),I("OES_texture_float_linear"),I("EXT_color_buffer_half_float"),I("WEBGL_multisampled_render_to_texture")},get:function(g){const C=I(g);return C===null&&console.warn("THREE.WebGLRenderer: "+g+" extension not supported."),C}}}function Vr(B,A,I,g){const C={},Q=new WeakMap;function E(a){const s=a.target;s.index!==null&&A.remove(s.index);for(const S in s.attributes)A.remove(s.attributes[S]);for(const S in s.morphAttributes){const w=s.morphAttributes[S];for(let r=0,h=w.length;r<h;r++)A.remove(w[r])}s.removeEventListener("dispose",E),delete C[s.id];const n=Q.get(s);n&&(A.remove(n),Q.delete(s)),g.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,I.memory.geometries--}function i(a,s){return C[s.id]===!0||(s.addEventListener("dispose",E),C[s.id]=!0,I.memory.geometries++),s}function o(a){const s=a.attributes;for(const S in s)A.update(s[S],B.ARRAY_BUFFER);const n=a.morphAttributes;for(const S in n){const w=n[S];for(let r=0,h=w.length;r<h;r++)A.update(w[r],B.ARRAY_BUFFER)}}function t(a){const s=[],n=a.index,S=a.attributes.position;let w=0;if(n!==null){const M=n.array;w=n.version;for(let G=0,K=M.length;G<K;G+=3){const d=M[G+0],R=M[G+1],J=M[G+2];s.push(d,R,R,J,J,d)}}else if(S!==void 0){const M=S.array;w=S.version;for(let G=0,K=M.length/3-1;G<K;G+=3){const d=G+0,R=G+1,J=G+2;s.push(d,R,R,J,J,d)}}else return;const r=new(Ye(s)?be:Te)(s,1);r.version=w;const h=Q.get(a);h&&A.remove(h),Q.set(a,r)}function e(a){const s=Q.get(a);if(s){const n=a.index;n!==null&&s.version<n.version&&t(a)}else t(a);return Q.get(a)}return{get:i,update:o,getWireframeAttribute:e}}function Xr(B,A,I,g){const C=g.isWebGL2;let Q;function E(n){Q=n}let i,o;function t(n){i=n.type,o=n.bytesPerElement}function e(n,S){B.drawElements(Q,S,i,n*o),I.update(S,Q,1)}function a(n,S,w){if(w===0)return;let r,h;if(C)r=B,h="drawElementsInstanced";else if(r=A.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",r===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}r[h](Q,S,i,n*o,w),I.update(S,Q,w)}function s(n,S,w){if(w===0)return;const r=A.get("WEBGL_multi_draw");if(r===null)for(let h=0;h<w;h++)this.render(n[h]/o,S[h]);else{r.multiDrawElementsWEBGL(Q,S,0,i,n,0,w);let h=0;for(let M=0;M<w;M++)h+=S[M];I.update(h,Q,1)}}this.setMode=E,this.setIndex=t,this.render=e,this.renderInstances=a,this.renderMultiDraw=s}function zr(B){const A={geometries:0,textures:0},I={frame:0,calls:0,triangles:0,points:0,lines:0};function g(Q,E,i){switch(I.calls++,E){case B.TRIANGLES:I.triangles+=i*(Q/3);break;case B.LINES:I.lines+=i*(Q/2);break;case B.LINE_STRIP:I.lines+=i*(Q-1);break;case B.LINE_LOOP:I.lines+=i*Q;break;case B.POINTS:I.points+=i*Q;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",E);break}}function C(){I.calls=0,I.triangles=0,I.points=0,I.lines=0}return{memory:A,render:I,programs:null,autoReset:!0,reset:C,update:g}}function $r(B,A){return B[0]-A[0]}function AS(B,A){return Math.abs(A[1])-Math.abs(B[1])}function IS(B,A,I){const g={},C=new Float32Array(8),Q=new WeakMap,E=new oI,i=[];for(let t=0;t<8;t++)i[t]=[t,0];function o(t,e,a){const s=t.morphTargetInfluences;if(A.isWebGL2===!0){const n=e.morphAttributes.position||e.morphAttributes.normal||e.morphAttributes.color,S=n!==void 0?n.length:0;let w=Q.get(e);if(w===void 0||w.count!==S){let L=function(){P.dispose(),Q.delete(e),e.removeEventListener("dispose",L)};w!==void 0&&w.texture.dispose();const M=e.morphAttributes.position!==void 0,G=e.morphAttributes.normal!==void 0,K=e.morphAttributes.color!==void 0,d=e.morphAttributes.position||[],R=e.morphAttributes.normal||[],J=e.morphAttributes.color||[];let Z=0;M===!0&&(Z=1),G===!0&&(Z=2),K===!0&&(Z=3);let CA=e.attributes.position.count*Z,l=1;CA>A.maxTextureSize&&(l=Math.ceil(CA/A.maxTextureSize),CA=A.maxTextureSize);const N=new Float32Array(CA*l*4*S),P=new He(N,CA,l,S);P.type=Mg,P.needsUpdate=!0;const BA=Z*4;for(let O=0;O<S;O++){const _=d[O],j=R[O],W=J[O],v=CA*l*4*O;for(let $=0;$<_.count;$++){const AA=$*BA;M===!0&&(E.fromBufferAttribute(_,$),N[v+AA+0]=E.x,N[v+AA+1]=E.y,N[v+AA+2]=E.z,N[v+AA+3]=0),G===!0&&(E.fromBufferAttribute(j,$),N[v+AA+4]=E.x,N[v+AA+5]=E.y,N[v+AA+6]=E.z,N[v+AA+7]=0),K===!0&&(E.fromBufferAttribute(W,$),N[v+AA+8]=E.x,N[v+AA+9]=E.y,N[v+AA+10]=E.z,N[v+AA+11]=W.itemSize===4?E.w:1)}}w={count:S,texture:P,size:new ZA(CA,l)},Q.set(e,w),e.addEventListener("dispose",L)}let r=0;for(let M=0;M<s.length;M++)r+=s[M];const h=e.morphTargetsRelative?1:1-r;a.getUniforms().setValue(B,"morphTargetBaseInfluence",h),a.getUniforms().setValue(B,"morphTargetInfluences",s),a.getUniforms().setValue(B,"morphTargetsTexture",w.texture,I),a.getUniforms().setValue(B,"morphTargetsTextureSize",w.size)}else{const n=s===void 0?0:s.length;let S=g[e.id];if(S===void 0||S.length!==n){S=[];for(let G=0;G<n;G++)S[G]=[G,0];g[e.id]=S}for(let G=0;G<n;G++){const K=S[G];K[0]=G,K[1]=s[G]}S.sort(AS);for(let G=0;G<8;G++)G<n&&S[G][1]?(i[G][0]=S[G][0],i[G][1]=S[G][1]):(i[G][0]=Number.MAX_SAFE_INTEGER,i[G][1]=0);i.sort($r);const w=e.morphAttributes.position,r=e.morphAttributes.normal;let h=0;for(let G=0;G<8;G++){const K=i[G],d=K[0],R=K[1];d!==Number.MAX_SAFE_INTEGER&&R?(w&&e.getAttribute("morphTarget"+G)!==w[d]&&e.setAttribute("morphTarget"+G,w[d]),r&&e.getAttribute("morphNormal"+G)!==r[d]&&e.setAttribute("morphNormal"+G,r[d]),C[G]=R,h+=R):(w&&e.hasAttribute("morphTarget"+G)===!0&&e.deleteAttribute("morphTarget"+G),r&&e.hasAttribute("morphNormal"+G)===!0&&e.deleteAttribute("morphNormal"+G),C[G]=0)}const M=e.morphTargetsRelative?1:1-h;a.getUniforms().setValue(B,"morphTargetBaseInfluence",M),a.getUniforms().setValue(B,"morphTargetInfluences",C)}}return{update:o}}function gS(B,A,I,g){let C=new WeakMap;function Q(o){const t=g.render.frame,e=o.geometry,a=A.get(o,e);if(C.get(a)!==t&&(A.update(a),C.set(a,t)),o.isInstancedMesh&&(o.hasEventListener("dispose",i)===!1&&o.addEventListener("dispose",i),C.get(o)!==t&&(I.update(o.instanceMatrix,B.ARRAY_BUFFER),o.instanceColor!==null&&I.update(o.instanceColor,B.ARRAY_BUFFER),C.set(o,t))),o.isSkinnedMesh){const s=o.skeleton;C.get(s)!==t&&(s.update(),C.set(s,t))}return a}function E(){C=new WeakMap}function i(o){const t=o.target;t.removeEventListener("dispose",i),I.remove(t.instanceMatrix),t.instanceColor!==null&&I.remove(t.instanceColor)}return{update:Q,dispose:E}}class ve extends YI{constructor(A,I,g,C,Q,E,i,o,t,e){if(e=e!==void 0?e:UC,e!==UC&&e!==oB)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");g===void 0&&e===UC&&(g=gC),g===void 0&&e===oB&&(g=MC),super(null,C,Q,E,i,o,e,g,t),this.isDepthTexture=!0,this.image={width:A,height:I},this.magFilter=i!==void 0?i:dI,this.minFilter=o!==void 0?o:dI,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(A){return super.copy(A),this.compareFunction=A.compareFunction,this}toJSON(A){const I=super.toJSON(A);return this.compareFunction!==null&&(I.compareFunction=this.compareFunction),I}}const We=new YI,Pe=new ve(1,1);Pe.compareFunction=de;const je=new He,Ve=new mD,Xe=new _e,Kt=[],Ft=[],Jt=new Float32Array(16),Rt=new Float32Array(9),qt=new Float32Array(4);function SB(B,A,I){const g=B[0];if(g<=0||g>0)return B;const C=A*I;let Q=Kt[C];if(Q===void 0&&(Q=new Float32Array(C),Kt[C]=Q),A!==0){g.toArray(Q,0);for(let E=1,i=0;E!==A;++E)i+=I,B[E].toArray(Q,i)}return Q}function KI(B,A){if(B.length!==A.length)return!1;for(let I=0,g=B.length;I<g;I++)if(B[I]!==A[I])return!1;return!0}function FI(B,A){for(let I=0,g=A.length;I<g;I++)B[I]=A[I]}function IE(B,A){let I=Ft[A];I===void 0&&(I=new Int32Array(A),Ft[A]=I);for(let g=0;g!==A;++g)I[g]=B.allocateTextureUnit();return I}function CS(B,A){const I=this.cache;I[0]!==A&&(B.uniform1f(this.addr,A),I[0]=A)}function BS(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(B.uniform2f(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(KI(I,A))return;B.uniform2fv(this.addr,A),FI(I,A)}}function QS(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(B.uniform3f(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else if(A.r!==void 0)(I[0]!==A.r||I[1]!==A.g||I[2]!==A.b)&&(B.uniform3f(this.addr,A.r,A.g,A.b),I[0]=A.r,I[1]=A.g,I[2]=A.b);else{if(KI(I,A))return;B.uniform3fv(this.addr,A),FI(I,A)}}function ES(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(B.uniform4f(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(KI(I,A))return;B.uniform4fv(this.addr,A),FI(I,A)}}function iS(B,A){const I=this.cache,g=A.elements;if(g===void 0){if(KI(I,A))return;B.uniformMatrix2fv(this.addr,!1,A),FI(I,A)}else{if(KI(I,g))return;qt.set(g),B.uniformMatrix2fv(this.addr,!1,qt),FI(I,g)}}function oS(B,A){const I=this.cache,g=A.elements;if(g===void 0){if(KI(I,A))return;B.uniformMatrix3fv(this.addr,!1,A),FI(I,A)}else{if(KI(I,g))return;Rt.set(g),B.uniformMatrix3fv(this.addr,!1,Rt),FI(I,g)}}function tS(B,A){const I=this.cache,g=A.elements;if(g===void 0){if(KI(I,A))return;B.uniformMatrix4fv(this.addr,!1,A),FI(I,A)}else{if(KI(I,g))return;Jt.set(g),B.uniformMatrix4fv(this.addr,!1,Jt),FI(I,g)}}function eS(B,A){const I=this.cache;I[0]!==A&&(B.uniform1i(this.addr,A),I[0]=A)}function aS(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(B.uniform2i(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(KI(I,A))return;B.uniform2iv(this.addr,A),FI(I,A)}}function sS(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(B.uniform3i(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else{if(KI(I,A))return;B.uniform3iv(this.addr,A),FI(I,A)}}function DS(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(B.uniform4i(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(KI(I,A))return;B.uniform4iv(this.addr,A),FI(I,A)}}function nS(B,A){const I=this.cache;I[0]!==A&&(B.uniform1ui(this.addr,A),I[0]=A)}function hS(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(B.uniform2ui(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(KI(I,A))return;B.uniform2uiv(this.addr,A),FI(I,A)}}function rS(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(B.uniform3ui(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else{if(KI(I,A))return;B.uniform3uiv(this.addr,A),FI(I,A)}}function SS(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(B.uniform4ui(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(KI(I,A))return;B.uniform4uiv(this.addr,A),FI(I,A)}}function wS(B,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(B.uniform1i(this.addr,C),g[0]=C);const Q=this.type===B.SAMPLER_2D_SHADOW?Pe:We;I.setTexture2D(A||Q,C)}function cS(B,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(B.uniform1i(this.addr,C),g[0]=C),I.setTexture3D(A||Ve,C)}function GS(B,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(B.uniform1i(this.addr,C),g[0]=C),I.setTextureCube(A||Xe,C)}function lS(B,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(B.uniform1i(this.addr,C),g[0]=C),I.setTexture2DArray(A||je,C)}function kS(B){switch(B){case 5126:return CS;case 35664:return BS;case 35665:return QS;case 35666:return ES;case 35674:return iS;case 35675:return oS;case 35676:return tS;case 5124:case 35670:return eS;case 35667:case 35671:return aS;case 35668:case 35672:return sS;case 35669:case 35673:return DS;case 5125:return nS;case 36294:return hS;case 36295:return rS;case 36296:return SS;case 35678:case 36198:case 36298:case 36306:case 35682:return wS;case 35679:case 36299:case 36307:return cS;case 35680:case 36300:case 36308:case 36293:return GS;case 36289:case 36303:case 36311:case 36292:return lS}}function yS(B,A){B.uniform1fv(this.addr,A)}function MS(B,A){const I=SB(A,this.size,2);B.uniform2fv(this.addr,I)}function US(B,A){const I=SB(A,this.size,3);B.uniform3fv(this.addr,I)}function NS(B,A){const I=SB(A,this.size,4);B.uniform4fv(this.addr,I)}function KS(B,A){const I=SB(A,this.size,4);B.uniformMatrix2fv(this.addr,!1,I)}function FS(B,A){const I=SB(A,this.size,9);B.uniformMatrix3fv(this.addr,!1,I)}function JS(B,A){const I=SB(A,this.size,16);B.uniformMatrix4fv(this.addr,!1,I)}function RS(B,A){B.uniform1iv(this.addr,A)}function qS(B,A){B.uniform2iv(this.addr,A)}function pS(B,A){B.uniform3iv(this.addr,A)}function dS(B,A){B.uniform4iv(this.addr,A)}function YS(B,A){B.uniform1uiv(this.addr,A)}function LS(B,A){B.uniform2uiv(this.addr,A)}function fS(B,A){B.uniform3uiv(this.addr,A)}function HS(B,A){B.uniform4uiv(this.addr,A)}function uS(B,A,I){const g=this.cache,C=A.length,Q=IE(I,C);KI(g,Q)||(B.uniform1iv(this.addr,Q),FI(g,Q));for(let E=0;E!==C;++E)I.setTexture2D(A[E]||We,Q[E])}function mS(B,A,I){const g=this.cache,C=A.length,Q=IE(I,C);KI(g,Q)||(B.uniform1iv(this.addr,Q),FI(g,Q));for(let E=0;E!==C;++E)I.setTexture3D(A[E]||Ve,Q[E])}function TS(B,A,I){const g=this.cache,C=A.length,Q=IE(I,C);KI(g,Q)||(B.uniform1iv(this.addr,Q),FI(g,Q));for(let E=0;E!==C;++E)I.setTextureCube(A[E]||Xe,Q[E])}function bS(B,A,I){const g=this.cache,C=A.length,Q=IE(I,C);KI(g,Q)||(B.uniform1iv(this.addr,Q),FI(g,Q));for(let E=0;E!==C;++E)I.setTexture2DArray(A[E]||je,Q[E])}function xS(B){switch(B){case 5126:return yS;case 35664:return MS;case 35665:return US;case 35666:return NS;case 35674:return KS;case 35675:return FS;case 35676:return JS;case 5124:case 35670:return RS;case 35667:case 35671:return qS;case 35668:case 35672:return pS;case 35669:case 35673:return dS;case 5125:return YS;case 36294:return LS;case 36295:return fS;case 36296:return HS;case 35678:case 36198:case 36298:case 36306:case 35682:return uS;case 35679:case 36299:case 36307:return mS;case 35680:case 36300:case 36308:case 36293:return TS;case 36289:case 36303:case 36311:case 36292:return bS}}class OS{constructor(A,I,g){this.id=A,this.addr=g,this.cache=[],this.type=I.type,this.setValue=kS(I.type)}}class _S{constructor(A,I,g){this.id=A,this.addr=g,this.cache=[],this.type=I.type,this.size=I.size,this.setValue=xS(I.type)}}class ZS{constructor(A){this.id=A,this.seq=[],this.map={}}setValue(A,I,g){const C=this.seq;for(let Q=0,E=C.length;Q!==E;++Q){const i=C[Q];i.setValue(A,I[i.id],g)}}}const _E=/(\w+)(\])?(\[|\.)?/g;function pt(B,A){B.seq.push(A),B.map[A.id]=A}function vS(B,A,I){const g=B.name,C=g.length;for(_E.lastIndex=0;;){const Q=_E.exec(g),E=_E.lastIndex;let i=Q[1];const o=Q[2]==="]",t=Q[3];if(o&&(i=i|0),t===void 0||t==="["&&E+2===C){pt(I,t===void 0?new OS(i,B,A):new _S(i,B,A));break}else{let a=I.map[i];a===void 0&&(a=new ZS(i),pt(I,a)),I=a}}}class pQ{constructor(A,I){this.seq=[],this.map={};const g=A.getProgramParameter(I,A.ACTIVE_UNIFORMS);for(let C=0;C<g;++C){const Q=A.getActiveUniform(I,C),E=A.getUniformLocation(I,Q.name);vS(Q,E,this)}}setValue(A,I,g,C){const Q=this.map[I];Q!==void 0&&Q.setValue(A,g,C)}setOptional(A,I,g){const C=I[g];C!==void 0&&this.setValue(A,g,C)}static upload(A,I,g,C){for(let Q=0,E=I.length;Q!==E;++Q){const i=I[Q],o=g[i.id];o.needsUpdate!==!1&&i.setValue(A,o.value,C)}}static seqWithValue(A,I){const g=[];for(let C=0,Q=A.length;C!==Q;++C){const E=A[C];E.id in I&&g.push(E)}return g}}function dt(B,A,I){const g=B.createShader(A);return B.shaderSource(g,I),B.compileShader(g),g}const WS=37297;let PS=0;function jS(B,A){const I=B.split(`
`),g=[],C=Math.max(A-6,0),Q=Math.min(A+6,I.length);for(let E=C;E<Q;E++){const i=E+1;g.push(`${i===A?">":" "} ${i}: ${I[E]}`)}return g.join(`
`)}function VS(B){const A=II.getPrimaries(II.workingColorSpace),I=II.getPrimaries(B);let g;switch(A===I?g="":A===mQ&&I===uQ?g="LinearDisplayP3ToLinearSRGB":A===uQ&&I===mQ&&(g="LinearSRGBToLinearDisplayP3"),B){case LI:case XQ:return[g,"LinearTransferOETF"];case kI:case di:return[g,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",B),[g,"LinearTransferOETF"]}}function Yt(B,A,I){const g=B.getShaderParameter(A,B.COMPILE_STATUS),C=B.getShaderInfoLog(A).trim();if(g&&C==="")return"";const Q=/ERROR: 0:(\d+)/.exec(C);if(Q){const E=parseInt(Q[1]);return I.toUpperCase()+`

`+C+`

`+jS(B.getShaderSource(A),E)}else return C}function XS(B,A){const I=VS(A);return`vec4 ${B}( vec4 value ) { return ${I[0]}( ${I[1]}( value ) ); }`}function zS(B,A){let I;switch(A){case _s:I="Linear";break;case Zs:I="Reinhard";break;case vs:I="OptimizedCineon";break;case Ws:I="ACESFilmic";break;case js:I="AgX";break;case Ps:I="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",A),I="Linear"}return"vec3 "+B+"( vec3 color ) { return "+I+"ToneMapping( color ); }"}function $S(B){return[B.extensionDerivatives||B.envMapCubeUVHeight||B.bumpMap||B.normalMapTangentSpace||B.clearcoatNormalMap||B.flatShading||B.alphaToCoverage||B.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(B.extensionFragDepth||B.logarithmicDepthBuffer)&&B.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",B.extensionDrawBuffers&&B.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(B.extensionShaderTextureLOD||B.envMap||B.transmission)&&B.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(IB).join(`
`)}function Aw(B){return[B.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",B.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(IB).join(`
`)}function Iw(B){const A=[];for(const I in B){const g=B[I];g!==!1&&A.push("#define "+I+" "+g)}return A.join(`
`)}function gw(B,A){const I={},g=B.getProgramParameter(A,B.ACTIVE_ATTRIBUTES);for(let C=0;C<g;C++){const Q=B.getActiveAttrib(A,C),E=Q.name;let i=1;Q.type===B.FLOAT_MAT2&&(i=2),Q.type===B.FLOAT_MAT3&&(i=3),Q.type===B.FLOAT_MAT4&&(i=4),I[E]={type:Q.type,location:B.getAttribLocation(A,E),locationSize:i}}return I}function IB(B){return B!==""}function Lt(B,A){const I=A.numSpotLightShadows+A.numSpotLightMaps-A.numSpotLightShadowsWithMaps;return B.replace(/NUM_DIR_LIGHTS/g,A.numDirLights).replace(/NUM_SPOT_LIGHTS/g,A.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,A.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,I).replace(/NUM_RECT_AREA_LIGHTS/g,A.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,A.numPointLights).replace(/NUM_HEMI_LIGHTS/g,A.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,A.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,A.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,A.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,A.numPointLightShadows)}function ft(B,A){return B.replace(/NUM_CLIPPING_PLANES/g,A.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,A.numClippingPlanes-A.numClipIntersection)}const Cw=/^[ \t]*#include +<([\w\d./]+)>/gm;function ni(B){return B.replace(Cw,Qw)}const Bw=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Qw(B,A){let I=mA[A];if(I===void 0){const g=Bw.get(A);if(g!==void 0)I=mA[g],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',A,g);else throw new Error("Can not resolve #include <"+A+">")}return ni(I)}const Ew=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ht(B){return B.replace(Ew,iw)}function iw(B,A,I,g){let C="";for(let Q=parseInt(A);Q<parseInt(I);Q++)C+=g.replace(/\[\s*i\s*\]/g,"[ "+Q+" ]").replace(/UNROLLED_LOOP_INDEX/g,Q);return C}function ut(B){let A=`precision ${B.precision} float;
	precision ${B.precision} int;
	precision ${B.precision} sampler2D;
	precision ${B.precision} samplerCube;
	`;return B.isWebGL2&&(A+=`precision ${B.precision} sampler3D;
		precision ${B.precision} sampler2DArray;
		precision ${B.precision} sampler2DShadow;
		precision ${B.precision} samplerCubeShadow;
		precision ${B.precision} sampler2DArrayShadow;
		precision ${B.precision} isampler2D;
		precision ${B.precision} isampler3D;
		precision ${B.precision} isamplerCube;
		precision ${B.precision} isampler2DArray;
		precision ${B.precision} usampler2D;
		precision ${B.precision} usampler3D;
		precision ${B.precision} usamplerCube;
		precision ${B.precision} usampler2DArray;
		`),B.precision==="highp"?A+=`
#define HIGH_PRECISION`:B.precision==="mediump"?A+=`
#define MEDIUM_PRECISION`:B.precision==="lowp"&&(A+=`
#define LOW_PRECISION`),A}function ow(B){let A="SHADOWMAP_TYPE_BASIC";return B.shadowMapType===Ge?A="SHADOWMAP_TYPE_PCF":B.shadowMapType===ws?A="SHADOWMAP_TYPE_PCF_SOFT":B.shadowMapType===ug&&(A="SHADOWMAP_TYPE_VSM"),A}function tw(B){let A="ENVMAP_TYPE_CUBE";if(B.envMap)switch(B.envMapMode){case QB:case EB:A="ENVMAP_TYPE_CUBE";break;case VQ:A="ENVMAP_TYPE_CUBE_UV";break}return A}function ew(B){let A="ENVMAP_MODE_REFLECTION";if(B.envMap)switch(B.envMapMode){case EB:A="ENVMAP_MODE_REFRACTION";break}return A}function aw(B){let A="ENVMAP_BLENDING_NONE";if(B.envMap)switch(B.combine){case le:A="ENVMAP_BLENDING_MULTIPLY";break;case xs:A="ENVMAP_BLENDING_MIX";break;case Os:A="ENVMAP_BLENDING_ADD";break}return A}function sw(B){const A=B.envMapCubeUVHeight;if(A===null)return null;const I=Math.log2(A)-2,g=1/A;return{texelWidth:1/(3*Math.max(Math.pow(2,I),7*16)),texelHeight:g,maxMip:I}}function Dw(B,A,I,g){const C=B.getContext(),Q=I.defines;let E=I.vertexShader,i=I.fragmentShader;const o=ow(I),t=tw(I),e=ew(I),a=aw(I),s=sw(I),n=I.isWebGL2?"":$S(I),S=Aw(I),w=Iw(Q),r=C.createProgram();let h,M,G=I.glslVersion?"#version "+I.glslVersion+`
`:"";I.isRawShaderMaterial?(h=["#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,w].filter(IB).join(`
`),h.length>0&&(h+=`
`),M=[n,"#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,w].filter(IB).join(`
`),M.length>0&&(M+=`
`)):(h=[ut(I),"#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,w,I.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",I.batching?"#define USE_BATCHING":"",I.instancing?"#define USE_INSTANCING":"",I.instancingColor?"#define USE_INSTANCING_COLOR":"",I.useFog&&I.fog?"#define USE_FOG":"",I.useFog&&I.fogExp2?"#define FOG_EXP2":"",I.map?"#define USE_MAP":"",I.envMap?"#define USE_ENVMAP":"",I.envMap?"#define "+e:"",I.lightMap?"#define USE_LIGHTMAP":"",I.aoMap?"#define USE_AOMAP":"",I.bumpMap?"#define USE_BUMPMAP":"",I.normalMap?"#define USE_NORMALMAP":"",I.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",I.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",I.displacementMap?"#define USE_DISPLACEMENTMAP":"",I.emissiveMap?"#define USE_EMISSIVEMAP":"",I.anisotropy?"#define USE_ANISOTROPY":"",I.anisotropyMap?"#define USE_ANISOTROPYMAP":"",I.clearcoatMap?"#define USE_CLEARCOATMAP":"",I.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",I.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",I.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",I.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",I.specularMap?"#define USE_SPECULARMAP":"",I.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",I.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",I.roughnessMap?"#define USE_ROUGHNESSMAP":"",I.metalnessMap?"#define USE_METALNESSMAP":"",I.alphaMap?"#define USE_ALPHAMAP":"",I.alphaHash?"#define USE_ALPHAHASH":"",I.transmission?"#define USE_TRANSMISSION":"",I.transmissionMap?"#define USE_TRANSMISSIONMAP":"",I.thicknessMap?"#define USE_THICKNESSMAP":"",I.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",I.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",I.mapUv?"#define MAP_UV "+I.mapUv:"",I.alphaMapUv?"#define ALPHAMAP_UV "+I.alphaMapUv:"",I.lightMapUv?"#define LIGHTMAP_UV "+I.lightMapUv:"",I.aoMapUv?"#define AOMAP_UV "+I.aoMapUv:"",I.emissiveMapUv?"#define EMISSIVEMAP_UV "+I.emissiveMapUv:"",I.bumpMapUv?"#define BUMPMAP_UV "+I.bumpMapUv:"",I.normalMapUv?"#define NORMALMAP_UV "+I.normalMapUv:"",I.displacementMapUv?"#define DISPLACEMENTMAP_UV "+I.displacementMapUv:"",I.metalnessMapUv?"#define METALNESSMAP_UV "+I.metalnessMapUv:"",I.roughnessMapUv?"#define ROUGHNESSMAP_UV "+I.roughnessMapUv:"",I.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+I.anisotropyMapUv:"",I.clearcoatMapUv?"#define CLEARCOATMAP_UV "+I.clearcoatMapUv:"",I.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+I.clearcoatNormalMapUv:"",I.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+I.clearcoatRoughnessMapUv:"",I.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+I.iridescenceMapUv:"",I.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+I.iridescenceThicknessMapUv:"",I.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+I.sheenColorMapUv:"",I.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+I.sheenRoughnessMapUv:"",I.specularMapUv?"#define SPECULARMAP_UV "+I.specularMapUv:"",I.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+I.specularColorMapUv:"",I.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+I.specularIntensityMapUv:"",I.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+I.transmissionMapUv:"",I.thicknessMapUv?"#define THICKNESSMAP_UV "+I.thicknessMapUv:"",I.vertexTangents&&I.flatShading===!1?"#define USE_TANGENT":"",I.vertexColors?"#define USE_COLOR":"",I.vertexAlphas?"#define USE_COLOR_ALPHA":"",I.vertexUv1s?"#define USE_UV1":"",I.vertexUv2s?"#define USE_UV2":"",I.vertexUv3s?"#define USE_UV3":"",I.pointsUvs?"#define USE_POINTS_UV":"",I.flatShading?"#define FLAT_SHADED":"",I.skinning?"#define USE_SKINNING":"",I.morphTargets?"#define USE_MORPHTARGETS":"",I.morphNormals&&I.flatShading===!1?"#define USE_MORPHNORMALS":"",I.morphColors&&I.isWebGL2?"#define USE_MORPHCOLORS":"",I.morphTargetsCount>0&&I.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",I.morphTargetsCount>0&&I.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+I.morphTextureStride:"",I.morphTargetsCount>0&&I.isWebGL2?"#define MORPHTARGETS_COUNT "+I.morphTargetsCount:"",I.doubleSided?"#define DOUBLE_SIDED":"",I.flipSided?"#define FLIP_SIDED":"",I.shadowMapEnabled?"#define USE_SHADOWMAP":"",I.shadowMapEnabled?"#define "+o:"",I.sizeAttenuation?"#define USE_SIZEATTENUATION":"",I.numLightProbes>0?"#define USE_LIGHT_PROBES":"",I.useLegacyLights?"#define LEGACY_LIGHTS":"",I.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",I.logarithmicDepthBuffer&&I.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(IB).join(`
`),M=[n,ut(I),"#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,w,I.useFog&&I.fog?"#define USE_FOG":"",I.useFog&&I.fogExp2?"#define FOG_EXP2":"",I.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",I.map?"#define USE_MAP":"",I.matcap?"#define USE_MATCAP":"",I.envMap?"#define USE_ENVMAP":"",I.envMap?"#define "+t:"",I.envMap?"#define "+e:"",I.envMap?"#define "+a:"",s?"#define CUBEUV_TEXEL_WIDTH "+s.texelWidth:"",s?"#define CUBEUV_TEXEL_HEIGHT "+s.texelHeight:"",s?"#define CUBEUV_MAX_MIP "+s.maxMip+".0":"",I.lightMap?"#define USE_LIGHTMAP":"",I.aoMap?"#define USE_AOMAP":"",I.bumpMap?"#define USE_BUMPMAP":"",I.normalMap?"#define USE_NORMALMAP":"",I.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",I.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",I.emissiveMap?"#define USE_EMISSIVEMAP":"",I.anisotropy?"#define USE_ANISOTROPY":"",I.anisotropyMap?"#define USE_ANISOTROPYMAP":"",I.clearcoat?"#define USE_CLEARCOAT":"",I.clearcoatMap?"#define USE_CLEARCOATMAP":"",I.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",I.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",I.iridescence?"#define USE_IRIDESCENCE":"",I.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",I.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",I.specularMap?"#define USE_SPECULARMAP":"",I.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",I.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",I.roughnessMap?"#define USE_ROUGHNESSMAP":"",I.metalnessMap?"#define USE_METALNESSMAP":"",I.alphaMap?"#define USE_ALPHAMAP":"",I.alphaTest?"#define USE_ALPHATEST":"",I.alphaHash?"#define USE_ALPHAHASH":"",I.sheen?"#define USE_SHEEN":"",I.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",I.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",I.transmission?"#define USE_TRANSMISSION":"",I.transmissionMap?"#define USE_TRANSMISSIONMAP":"",I.thicknessMap?"#define USE_THICKNESSMAP":"",I.vertexTangents&&I.flatShading===!1?"#define USE_TANGENT":"",I.vertexColors||I.instancingColor?"#define USE_COLOR":"",I.vertexAlphas?"#define USE_COLOR_ALPHA":"",I.vertexUv1s?"#define USE_UV1":"",I.vertexUv2s?"#define USE_UV2":"",I.vertexUv3s?"#define USE_UV3":"",I.pointsUvs?"#define USE_POINTS_UV":"",I.gradientMap?"#define USE_GRADIENTMAP":"",I.flatShading?"#define FLAT_SHADED":"",I.doubleSided?"#define DOUBLE_SIDED":"",I.flipSided?"#define FLIP_SIDED":"",I.shadowMapEnabled?"#define USE_SHADOWMAP":"",I.shadowMapEnabled?"#define "+o:"",I.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",I.numLightProbes>0?"#define USE_LIGHT_PROBES":"",I.useLegacyLights?"#define LEGACY_LIGHTS":"",I.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",I.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",I.logarithmicDepthBuffer&&I.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",I.toneMapping!==QC?"#define TONE_MAPPING":"",I.toneMapping!==QC?mA.tonemapping_pars_fragment:"",I.toneMapping!==QC?zS("toneMapping",I.toneMapping):"",I.dithering?"#define DITHERING":"",I.opaque?"#define OPAQUE":"",mA.colorspace_pars_fragment,XS("linearToOutputTexel",I.outputColorSpace),I.useDepthPacking?"#define DEPTH_PACKING "+I.depthPacking:"",`
`].filter(IB).join(`
`)),E=ni(E),E=Lt(E,I),E=ft(E,I),i=ni(i),i=Lt(i,I),i=ft(i,I),E=Ht(E),i=Ht(i),I.isWebGL2&&I.isRawShaderMaterial!==!0&&(G=`#version 300 es
`,h=[S,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,M=["precision mediump sampler2DArray;","#define varying in",I.glslVersion===At?"":"layout(location = 0) out highp vec4 pc_fragColor;",I.glslVersion===At?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const K=G+h+E,d=G+M+i,R=dt(C,C.VERTEX_SHADER,K),J=dt(C,C.FRAGMENT_SHADER,d);C.attachShader(r,R),C.attachShader(r,J),I.index0AttributeName!==void 0?C.bindAttribLocation(r,0,I.index0AttributeName):I.morphTargets===!0&&C.bindAttribLocation(r,0,"position"),C.linkProgram(r);function Z(P){if(B.debug.checkShaderErrors){const BA=C.getProgramInfoLog(r).trim(),L=C.getShaderInfoLog(R).trim(),O=C.getShaderInfoLog(J).trim();let _=!0,j=!0;if(C.getProgramParameter(r,C.LINK_STATUS)===!1)if(_=!1,typeof B.debug.onShaderError=="function")B.debug.onShaderError(C,r,R,J);else{const W=Yt(C,R,"vertex"),v=Yt(C,J,"fragment");console.error("THREE.WebGLProgram: Shader Error "+C.getError()+" - VALIDATE_STATUS "+C.getProgramParameter(r,C.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+BA+`
`+W+`
`+v)}else BA!==""?console.warn("THREE.WebGLProgram: Program Info Log:",BA):(L===""||O==="")&&(j=!1);j&&(P.diagnostics={runnable:_,programLog:BA,vertexShader:{log:L,prefix:h},fragmentShader:{log:O,prefix:M}})}C.deleteShader(R),C.deleteShader(J),CA=new pQ(C,r),l=gw(C,r)}let CA;this.getUniforms=function(){return CA===void 0&&Z(this),CA};let l;this.getAttributes=function(){return l===void 0&&Z(this),l};let N=I.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=C.getProgramParameter(r,WS)),N},this.destroy=function(){g.releaseStatesOfProgram(this),C.deleteProgram(r),this.program=void 0},this.type=I.shaderType,this.name=I.shaderName,this.id=PS++,this.cacheKey=A,this.usedTimes=1,this.program=r,this.vertexShader=R,this.fragmentShader=J,this}let nw=0;class hw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(A){const I=A.vertexShader,g=A.fragmentShader,C=this._getShaderStage(I),Q=this._getShaderStage(g),E=this._getShaderCacheForMaterial(A);return E.has(C)===!1&&(E.add(C),C.usedTimes++),E.has(Q)===!1&&(E.add(Q),Q.usedTimes++),this}remove(A){const I=this.materialCache.get(A);for(const g of I)g.usedTimes--,g.usedTimes===0&&this.shaderCache.delete(g.code);return this.materialCache.delete(A),this}getVertexShaderID(A){return this._getShaderStage(A.vertexShader).id}getFragmentShaderID(A){return this._getShaderStage(A.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(A){const I=this.materialCache;let g=I.get(A);return g===void 0&&(g=new Set,I.set(A,g)),g}_getShaderStage(A){const I=this.shaderCache;let g=I.get(A);return g===void 0&&(g=new rw(A),I.set(A,g)),g}}class rw{constructor(A){this.id=nw++,this.code=A,this.usedTimes=0}}function Sw(B,A,I,g,C,Q,E){const i=new ue,o=new hw,t=new Set,e=[],a=C.isWebGL2,s=C.logarithmicDepthBuffer,n=C.vertexTextures;let S=C.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function r(l){return t.add(l),l===0?"uv":`uv${l}`}function h(l,N,P,BA,L){const O=BA.fog,_=L.geometry,j=l.isMeshStandardMaterial?BA.environment:null,W=(l.isMeshStandardMaterial?I:A).get(l.envMap||j),v=W&&W.mapping===VQ?W.image.height:null,$=w[l.type];l.precision!==null&&(S=C.getMaxPrecision(l.precision),S!==l.precision&&console.warn("THREE.WebGLProgram.getParameters:",l.precision,"not supported, using",S,"instead."));const AA=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,nA=AA!==void 0?AA.length:0;let RA=0;_.morphAttributes.position!==void 0&&(RA=1),_.morphAttributes.normal!==void 0&&(RA=2),_.morphAttributes.color!==void 0&&(RA=3);let x,z,eA,MA;if($){const tI=lg[$];x=tI.vertexShader,z=tI.fragmentShader}else x=l.vertexShader,z=l.fragmentShader,o.update(l),eA=o.getVertexShaderID(l),MA=o.getFragmentShaderID(l);const UA=B.getRenderTarget(),rA=L.isInstancedMesh===!0,zA=L.isBatchedMesh===!0,LA=!!l.map,H=!!l.matcap,fI=!!W,kA=!!l.aoMap,qA=!!l.lightMap,cA=!!l.bumpMap,rI=!!l.normalMap,HA=!!l.displacementMap,y=!!l.emissiveMap,c=!!l.metalnessMap,u=!!l.roughnessMap,gA=l.anisotropy>0,V=l.clearcoat>0,IA=l.iridescence>0,SA=l.sheen>0,oA=l.transmission>0,sA=gA&&!!l.anisotropyMap,KA=V&&!!l.clearcoatMap,bA=V&&!!l.clearcoatNormalMap,X=V&&!!l.clearcoatRoughnessMap,QI=IA&&!!l.iridescenceMap,WA=IA&&!!l.iridescenceThicknessMap,pA=SA&&!!l.sheenColorMap,GA=SA&&!!l.sheenRoughnessMap,DA=!!l.specularMap,uA=!!l.specularColorMap,gI=!!l.specularIntensityMap,sI=oA&&!!l.transmissionMap,jA=oA&&!!l.thicknessMap,EI=!!l.gradientMap,U=!!l.alphaMap,QA=l.alphaTest>0,EA=!!l.alphaHash,hA=!!l.extensions;let yA=QC;l.toneMapped&&(UA===null||UA.isXRRenderTarget===!0)&&(yA=B.toneMapping);const CI={isWebGL2:a,shaderID:$,shaderType:l.type,shaderName:l.name,vertexShader:x,fragmentShader:z,defines:l.defines,customVertexShaderID:eA,customFragmentShaderID:MA,isRawShaderMaterial:l.isRawShaderMaterial===!0,glslVersion:l.glslVersion,precision:S,batching:zA,instancing:rA,instancingColor:rA&&L.instanceColor!==null,supportsVertexTextures:n,outputColorSpace:UA===null?B.outputColorSpace:UA.isXRRenderTarget===!0?UA.texture.colorSpace:LI,alphaToCoverage:!!l.alphaToCoverage,map:LA,matcap:H,envMap:fI,envMapMode:fI&&W.mapping,envMapCubeUVHeight:v,aoMap:kA,lightMap:qA,bumpMap:cA,normalMap:rI,displacementMap:n&&HA,emissiveMap:y,normalMapObjectSpace:rI&&l.normalMapType===aD,normalMapTangentSpace:rI&&l.normalMapType===pe,metalnessMap:c,roughnessMap:u,anisotropy:gA,anisotropyMap:sA,clearcoat:V,clearcoatMap:KA,clearcoatNormalMap:bA,clearcoatRoughnessMap:X,iridescence:IA,iridescenceMap:QI,iridescenceThicknessMap:WA,sheen:SA,sheenColorMap:pA,sheenRoughnessMap:GA,specularMap:DA,specularColorMap:uA,specularIntensityMap:gI,transmission:oA,transmissionMap:sI,thicknessMap:jA,gradientMap:EI,opaque:l.transparent===!1&&l.blending===gB&&l.alphaToCoverage===!1,alphaMap:U,alphaTest:QA,alphaHash:EA,combine:l.combine,mapUv:LA&&r(l.map.channel),aoMapUv:kA&&r(l.aoMap.channel),lightMapUv:qA&&r(l.lightMap.channel),bumpMapUv:cA&&r(l.bumpMap.channel),normalMapUv:rI&&r(l.normalMap.channel),displacementMapUv:HA&&r(l.displacementMap.channel),emissiveMapUv:y&&r(l.emissiveMap.channel),metalnessMapUv:c&&r(l.metalnessMap.channel),roughnessMapUv:u&&r(l.roughnessMap.channel),anisotropyMapUv:sA&&r(l.anisotropyMap.channel),clearcoatMapUv:KA&&r(l.clearcoatMap.channel),clearcoatNormalMapUv:bA&&r(l.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&r(l.clearcoatRoughnessMap.channel),iridescenceMapUv:QI&&r(l.iridescenceMap.channel),iridescenceThicknessMapUv:WA&&r(l.iridescenceThicknessMap.channel),sheenColorMapUv:pA&&r(l.sheenColorMap.channel),sheenRoughnessMapUv:GA&&r(l.sheenRoughnessMap.channel),specularMapUv:DA&&r(l.specularMap.channel),specularColorMapUv:uA&&r(l.specularColorMap.channel),specularIntensityMapUv:gI&&r(l.specularIntensityMap.channel),transmissionMapUv:sI&&r(l.transmissionMap.channel),thicknessMapUv:jA&&r(l.thicknessMap.channel),alphaMapUv:U&&r(l.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(rI||gA),vertexColors:l.vertexColors,vertexAlphas:l.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!_.attributes.uv&&(LA||U),fog:!!O,useFog:l.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:l.flatShading===!0,sizeAttenuation:l.sizeAttenuation===!0,logarithmicDepthBuffer:s,skinning:L.isSkinnedMesh===!0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:nA,morphTextureStride:RA,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:E.numPlanes,numClipIntersection:E.numIntersection,dithering:l.dithering,shadowMapEnabled:B.shadowMap.enabled&&P.length>0,shadowMapType:B.shadowMap.type,toneMapping:yA,useLegacyLights:B._useLegacyLights,decodeVideoTexture:LA&&l.map.isVideoTexture===!0&&II.getTransfer(l.map.colorSpace)===DI,premultipliedAlpha:l.premultipliedAlpha,doubleSided:l.side===yg,flipSided:l.side===XI,useDepthPacking:l.depthPacking>=0,depthPacking:l.depthPacking||0,index0AttributeName:l.index0AttributeName,extensionDerivatives:hA&&l.extensions.derivatives===!0,extensionFragDepth:hA&&l.extensions.fragDepth===!0,extensionDrawBuffers:hA&&l.extensions.drawBuffers===!0,extensionShaderTextureLOD:hA&&l.extensions.shaderTextureLOD===!0,extensionClipCullDistance:hA&&l.extensions.clipCullDistance===!0&&g.has("WEBGL_clip_cull_distance"),extensionMultiDraw:hA&&l.extensions.multiDraw===!0&&g.has("WEBGL_multi_draw"),rendererExtensionFragDepth:a||g.has("EXT_frag_depth"),rendererExtensionDrawBuffers:a||g.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:a||g.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:g.has("KHR_parallel_shader_compile"),customProgramCacheKey:l.customProgramCacheKey()};return CI.vertexUv1s=t.has(1),CI.vertexUv2s=t.has(2),CI.vertexUv3s=t.has(3),t.clear(),CI}function M(l){const N=[];if(l.shaderID?N.push(l.shaderID):(N.push(l.customVertexShaderID),N.push(l.customFragmentShaderID)),l.defines!==void 0)for(const P in l.defines)N.push(P),N.push(l.defines[P]);return l.isRawShaderMaterial===!1&&(G(N,l),K(N,l),N.push(B.outputColorSpace)),N.push(l.customProgramCacheKey),N.join()}function G(l,N){l.push(N.precision),l.push(N.outputColorSpace),l.push(N.envMapMode),l.push(N.envMapCubeUVHeight),l.push(N.mapUv),l.push(N.alphaMapUv),l.push(N.lightMapUv),l.push(N.aoMapUv),l.push(N.bumpMapUv),l.push(N.normalMapUv),l.push(N.displacementMapUv),l.push(N.emissiveMapUv),l.push(N.metalnessMapUv),l.push(N.roughnessMapUv),l.push(N.anisotropyMapUv),l.push(N.clearcoatMapUv),l.push(N.clearcoatNormalMapUv),l.push(N.clearcoatRoughnessMapUv),l.push(N.iridescenceMapUv),l.push(N.iridescenceThicknessMapUv),l.push(N.sheenColorMapUv),l.push(N.sheenRoughnessMapUv),l.push(N.specularMapUv),l.push(N.specularColorMapUv),l.push(N.specularIntensityMapUv),l.push(N.transmissionMapUv),l.push(N.thicknessMapUv),l.push(N.combine),l.push(N.fogExp2),l.push(N.sizeAttenuation),l.push(N.morphTargetsCount),l.push(N.morphAttributeCount),l.push(N.numDirLights),l.push(N.numPointLights),l.push(N.numSpotLights),l.push(N.numSpotLightMaps),l.push(N.numHemiLights),l.push(N.numRectAreaLights),l.push(N.numDirLightShadows),l.push(N.numPointLightShadows),l.push(N.numSpotLightShadows),l.push(N.numSpotLightShadowsWithMaps),l.push(N.numLightProbes),l.push(N.shadowMapType),l.push(N.toneMapping),l.push(N.numClippingPlanes),l.push(N.numClipIntersection),l.push(N.depthPacking)}function K(l,N){i.disableAll(),N.isWebGL2&&i.enable(0),N.supportsVertexTextures&&i.enable(1),N.instancing&&i.enable(2),N.instancingColor&&i.enable(3),N.matcap&&i.enable(4),N.envMap&&i.enable(5),N.normalMapObjectSpace&&i.enable(6),N.normalMapTangentSpace&&i.enable(7),N.clearcoat&&i.enable(8),N.iridescence&&i.enable(9),N.alphaTest&&i.enable(10),N.vertexColors&&i.enable(11),N.vertexAlphas&&i.enable(12),N.vertexUv1s&&i.enable(13),N.vertexUv2s&&i.enable(14),N.vertexUv3s&&i.enable(15),N.vertexTangents&&i.enable(16),N.anisotropy&&i.enable(17),N.alphaHash&&i.enable(18),N.batching&&i.enable(19),l.push(i.mask),i.disableAll(),N.fog&&i.enable(0),N.useFog&&i.enable(1),N.flatShading&&i.enable(2),N.logarithmicDepthBuffer&&i.enable(3),N.skinning&&i.enable(4),N.morphTargets&&i.enable(5),N.morphNormals&&i.enable(6),N.morphColors&&i.enable(7),N.premultipliedAlpha&&i.enable(8),N.shadowMapEnabled&&i.enable(9),N.useLegacyLights&&i.enable(10),N.doubleSided&&i.enable(11),N.flipSided&&i.enable(12),N.useDepthPacking&&i.enable(13),N.dithering&&i.enable(14),N.transmission&&i.enable(15),N.sheen&&i.enable(16),N.opaque&&i.enable(17),N.pointsUvs&&i.enable(18),N.decodeVideoTexture&&i.enable(19),N.alphaToCoverage&&i.enable(20),l.push(i.mask)}function d(l){const N=w[l.type];let P;if(N){const BA=lg[N];P=zD.clone(BA.uniforms)}else P=l.uniforms;return P}function R(l,N){let P;for(let BA=0,L=e.length;BA<L;BA++){const O=e[BA];if(O.cacheKey===N){P=O,++P.usedTimes;break}}return P===void 0&&(P=new Dw(B,N,l,Q),e.push(P)),P}function J(l){if(--l.usedTimes===0){const N=e.indexOf(l);e[N]=e[e.length-1],e.pop(),l.destroy()}}function Z(l){o.remove(l)}function CA(){o.dispose()}return{getParameters:h,getProgramCacheKey:M,getUniforms:d,acquireProgram:R,releaseProgram:J,releaseShaderCache:Z,programs:e,dispose:CA}}function ww(){let B=new WeakMap;function A(Q){let E=B.get(Q);return E===void 0&&(E={},B.set(Q,E)),E}function I(Q){B.delete(Q)}function g(Q,E,i){B.get(Q)[E]=i}function C(){B=new WeakMap}return{get:A,remove:I,update:g,dispose:C}}function cw(B,A){return B.groupOrder!==A.groupOrder?B.groupOrder-A.groupOrder:B.renderOrder!==A.renderOrder?B.renderOrder-A.renderOrder:B.material.id!==A.material.id?B.material.id-A.material.id:B.z!==A.z?B.z-A.z:B.id-A.id}function mt(B,A){return B.groupOrder!==A.groupOrder?B.groupOrder-A.groupOrder:B.renderOrder!==A.renderOrder?B.renderOrder-A.renderOrder:B.z!==A.z?A.z-B.z:B.id-A.id}function Tt(){const B=[];let A=0;const I=[],g=[],C=[];function Q(){A=0,I.length=0,g.length=0,C.length=0}function E(a,s,n,S,w,r){let h=B[A];return h===void 0?(h={id:a.id,object:a,geometry:s,material:n,groupOrder:S,renderOrder:a.renderOrder,z:w,group:r},B[A]=h):(h.id=a.id,h.object=a,h.geometry=s,h.material=n,h.groupOrder=S,h.renderOrder=a.renderOrder,h.z=w,h.group=r),A++,h}function i(a,s,n,S,w,r){const h=E(a,s,n,S,w,r);n.transmission>0?g.push(h):n.transparent===!0?C.push(h):I.push(h)}function o(a,s,n,S,w,r){const h=E(a,s,n,S,w,r);n.transmission>0?g.unshift(h):n.transparent===!0?C.unshift(h):I.unshift(h)}function t(a,s){I.length>1&&I.sort(a||cw),g.length>1&&g.sort(s||mt),C.length>1&&C.sort(s||mt)}function e(){for(let a=A,s=B.length;a<s;a++){const n=B[a];if(n.id===null)break;n.id=null,n.object=null,n.geometry=null,n.material=null,n.group=null}}return{opaque:I,transmissive:g,transparent:C,init:Q,push:i,unshift:o,finish:e,sort:t}}function Gw(){let B=new WeakMap;function A(g,C){const Q=B.get(g);let E;return Q===void 0?(E=new Tt,B.set(g,[E])):C>=Q.length?(E=new Tt,Q.push(E)):E=Q[C],E}function I(){B=new WeakMap}return{get:A,dispose:I}}function lw(){const B={};return{get:function(A){if(B[A.id]!==void 0)return B[A.id];let I;switch(A.type){case"DirectionalLight":I={direction:new Y,color:new dA};break;case"SpotLight":I={position:new Y,direction:new Y,color:new dA,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":I={position:new Y,color:new dA,distance:0,decay:0};break;case"HemisphereLight":I={direction:new Y,skyColor:new dA,groundColor:new dA};break;case"RectAreaLight":I={color:new dA,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return B[A.id]=I,I}}}function kw(){const B={};return{get:function(A){if(B[A.id]!==void 0)return B[A.id];let I;switch(A.type){case"DirectionalLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ZA};break;case"SpotLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ZA};break;case"PointLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ZA,shadowCameraNear:1,shadowCameraFar:1e3};break}return B[A.id]=I,I}}}let yw=0;function Mw(B,A){return(A.castShadow?2:0)-(B.castShadow?2:0)+(A.map?1:0)-(B.map?1:0)}function Uw(B,A){const I=new lw,g=kw(),C={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)C.probe.push(new Y);const Q=new Y,E=new vA,i=new vA;function o(e,a){let s=0,n=0,S=0;for(let P=0;P<9;P++)C.probe[P].set(0,0,0);let w=0,r=0,h=0,M=0,G=0,K=0,d=0,R=0,J=0,Z=0,CA=0;e.sort(Mw);const l=a===!0?Math.PI:1;for(let P=0,BA=e.length;P<BA;P++){const L=e[P],O=L.color,_=L.intensity,j=L.distance,W=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)s+=O.r*_*l,n+=O.g*_*l,S+=O.b*_*l;else if(L.isLightProbe){for(let v=0;v<9;v++)C.probe[v].addScaledVector(L.sh.coefficients[v],_);CA++}else if(L.isDirectionalLight){const v=I.get(L);if(v.color.copy(L.color).multiplyScalar(L.intensity*l),L.castShadow){const $=L.shadow,AA=g.get(L);AA.shadowBias=$.bias,AA.shadowNormalBias=$.normalBias,AA.shadowRadius=$.radius,AA.shadowMapSize=$.mapSize,C.directionalShadow[w]=AA,C.directionalShadowMap[w]=W,C.directionalShadowMatrix[w]=L.shadow.matrix,K++}C.directional[w]=v,w++}else if(L.isSpotLight){const v=I.get(L);v.position.setFromMatrixPosition(L.matrixWorld),v.color.copy(O).multiplyScalar(_*l),v.distance=j,v.coneCos=Math.cos(L.angle),v.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),v.decay=L.decay,C.spot[h]=v;const $=L.shadow;if(L.map&&(C.spotLightMap[J]=L.map,J++,$.updateMatrices(L),L.castShadow&&Z++),C.spotLightMatrix[h]=$.matrix,L.castShadow){const AA=g.get(L);AA.shadowBias=$.bias,AA.shadowNormalBias=$.normalBias,AA.shadowRadius=$.radius,AA.shadowMapSize=$.mapSize,C.spotShadow[h]=AA,C.spotShadowMap[h]=W,R++}h++}else if(L.isRectAreaLight){const v=I.get(L);v.color.copy(O).multiplyScalar(_),v.halfWidth.set(L.width*.5,0,0),v.halfHeight.set(0,L.height*.5,0),C.rectArea[M]=v,M++}else if(L.isPointLight){const v=I.get(L);if(v.color.copy(L.color).multiplyScalar(L.intensity*l),v.distance=L.distance,v.decay=L.decay,L.castShadow){const $=L.shadow,AA=g.get(L);AA.shadowBias=$.bias,AA.shadowNormalBias=$.normalBias,AA.shadowRadius=$.radius,AA.shadowMapSize=$.mapSize,AA.shadowCameraNear=$.camera.near,AA.shadowCameraFar=$.camera.far,C.pointShadow[r]=AA,C.pointShadowMap[r]=W,C.pointShadowMatrix[r]=L.shadow.matrix,d++}C.point[r]=v,r++}else if(L.isHemisphereLight){const v=I.get(L);v.skyColor.copy(L.color).multiplyScalar(_*l),v.groundColor.copy(L.groundColor).multiplyScalar(_*l),C.hemi[G]=v,G++}}M>0&&(A.isWebGL2?B.has("OES_texture_float_linear")===!0?(C.rectAreaLTC1=iA.LTC_FLOAT_1,C.rectAreaLTC2=iA.LTC_FLOAT_2):(C.rectAreaLTC1=iA.LTC_HALF_1,C.rectAreaLTC2=iA.LTC_HALF_2):B.has("OES_texture_float_linear")===!0?(C.rectAreaLTC1=iA.LTC_FLOAT_1,C.rectAreaLTC2=iA.LTC_FLOAT_2):B.has("OES_texture_half_float_linear")===!0?(C.rectAreaLTC1=iA.LTC_HALF_1,C.rectAreaLTC2=iA.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),C.ambient[0]=s,C.ambient[1]=n,C.ambient[2]=S;const N=C.hash;(N.directionalLength!==w||N.pointLength!==r||N.spotLength!==h||N.rectAreaLength!==M||N.hemiLength!==G||N.numDirectionalShadows!==K||N.numPointShadows!==d||N.numSpotShadows!==R||N.numSpotMaps!==J||N.numLightProbes!==CA)&&(C.directional.length=w,C.spot.length=h,C.rectArea.length=M,C.point.length=r,C.hemi.length=G,C.directionalShadow.length=K,C.directionalShadowMap.length=K,C.pointShadow.length=d,C.pointShadowMap.length=d,C.spotShadow.length=R,C.spotShadowMap.length=R,C.directionalShadowMatrix.length=K,C.pointShadowMatrix.length=d,C.spotLightMatrix.length=R+J-Z,C.spotLightMap.length=J,C.numSpotLightShadowsWithMaps=Z,C.numLightProbes=CA,N.directionalLength=w,N.pointLength=r,N.spotLength=h,N.rectAreaLength=M,N.hemiLength=G,N.numDirectionalShadows=K,N.numPointShadows=d,N.numSpotShadows=R,N.numSpotMaps=J,N.numLightProbes=CA,C.version=yw++)}function t(e,a){let s=0,n=0,S=0,w=0,r=0;const h=a.matrixWorldInverse;for(let M=0,G=e.length;M<G;M++){const K=e[M];if(K.isDirectionalLight){const d=C.directional[s];d.direction.setFromMatrixPosition(K.matrixWorld),Q.setFromMatrixPosition(K.target.matrixWorld),d.direction.sub(Q),d.direction.transformDirection(h),s++}else if(K.isSpotLight){const d=C.spot[S];d.position.setFromMatrixPosition(K.matrixWorld),d.position.applyMatrix4(h),d.direction.setFromMatrixPosition(K.matrixWorld),Q.setFromMatrixPosition(K.target.matrixWorld),d.direction.sub(Q),d.direction.transformDirection(h),S++}else if(K.isRectAreaLight){const d=C.rectArea[w];d.position.setFromMatrixPosition(K.matrixWorld),d.position.applyMatrix4(h),i.identity(),E.copy(K.matrixWorld),E.premultiply(h),i.extractRotation(E),d.halfWidth.set(K.width*.5,0,0),d.halfHeight.set(0,K.height*.5,0),d.halfWidth.applyMatrix4(i),d.halfHeight.applyMatrix4(i),w++}else if(K.isPointLight){const d=C.point[n];d.position.setFromMatrixPosition(K.matrixWorld),d.position.applyMatrix4(h),n++}else if(K.isHemisphereLight){const d=C.hemi[r];d.direction.setFromMatrixPosition(K.matrixWorld),d.direction.transformDirection(h),r++}}}return{setup:o,setupView:t,state:C}}function bt(B,A){const I=new Uw(B,A),g=[],C=[];function Q(){g.length=0,C.length=0}function E(a){g.push(a)}function i(a){C.push(a)}function o(a){I.setup(g,a)}function t(a){I.setupView(g,a)}return{init:Q,state:{lightsArray:g,shadowsArray:C,lights:I},setupLights:o,setupLightsView:t,pushLight:E,pushShadow:i}}function Nw(B,A){let I=new WeakMap;function g(Q,E=0){const i=I.get(Q);let o;return i===void 0?(o=new bt(B,A),I.set(Q,[o])):E>=i.length?(o=new bt(B,A),i.push(o)):o=i[E],o}function C(){I=new WeakMap}return{get:g,dispose:C}}class Kw extends Ng{constructor(A){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tD,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(A)}copy(A){return super.copy(A),this.depthPacking=A.depthPacking,this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this}}class Fw extends Ng{constructor(A){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(A)}copy(A){return super.copy(A),this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this}}const Jw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rw=`uniform sampler2D shadow_pass;
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
}`;function qw(B,A,I){let g=new Li;const C=new ZA,Q=new ZA,E=new oI,i=new Kw({depthPacking:eD}),o=new Fw,t={},e=I.maxTextureSize,a={[Og]:XI,[XI]:Og,[yg]:yg},s=new iC({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ZA},radius:{value:4}},vertexShader:Jw,fragmentShader:Rw}),n=s.clone();n.defines.HORIZONTAL_PASS=1;const S=new Jg;S.setAttribute("position",new jI(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new VI(S,s),r=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ge;let h=this.type;this.render=function(R,J,Z){if(r.enabled===!1||r.autoUpdate===!1&&r.needsUpdate===!1||R.length===0)return;const CA=B.getRenderTarget(),l=B.getActiveCubeFace(),N=B.getActiveMipmapLevel(),P=B.state;P.setBlending(BC),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const BA=h!==ug&&this.type===ug,L=h===ug&&this.type!==ug;for(let O=0,_=R.length;O<_;O++){const j=R[O],W=j.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;C.copy(W.mapSize);const v=W.getFrameExtents();if(C.multiply(v),Q.copy(W.mapSize),(C.x>e||C.y>e)&&(C.x>e&&(Q.x=Math.floor(e/v.x),C.x=Q.x*v.x,W.mapSize.x=Q.x),C.y>e&&(Q.y=Math.floor(e/v.y),C.y=Q.y*v.y,W.mapSize.y=Q.y)),W.map===null||BA===!0||L===!0){const AA=this.type!==ug?{minFilter:dI,magFilter:dI}:{};W.map!==null&&W.map.dispose(),W.map=new FC(C.x,C.y,AA),W.map.texture.name=j.name+".shadowMap",W.camera.updateProjectionMatrix()}B.setRenderTarget(W.map),B.clear();const $=W.getViewportCount();for(let AA=0;AA<$;AA++){const nA=W.getViewport(AA);E.set(Q.x*nA.x,Q.y*nA.y,Q.x*nA.z,Q.y*nA.w),P.viewport(E),W.updateMatrices(j,AA),g=W.getFrustum(),K(J,Z,W.camera,j,this.type)}W.isPointLightShadow!==!0&&this.type===ug&&M(W,Z),W.needsUpdate=!1}h=this.type,r.needsUpdate=!1,B.setRenderTarget(CA,l,N)};function M(R,J){const Z=A.update(w);s.defines.VSM_SAMPLES!==R.blurSamples&&(s.defines.VSM_SAMPLES=R.blurSamples,n.defines.VSM_SAMPLES=R.blurSamples,s.needsUpdate=!0,n.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new FC(C.x,C.y)),s.uniforms.shadow_pass.value=R.map.texture,s.uniforms.resolution.value=R.mapSize,s.uniforms.radius.value=R.radius,B.setRenderTarget(R.mapPass),B.clear(),B.renderBufferDirect(J,null,Z,s,w,null),n.uniforms.shadow_pass.value=R.mapPass.texture,n.uniforms.resolution.value=R.mapSize,n.uniforms.radius.value=R.radius,B.setRenderTarget(R.map),B.clear(),B.renderBufferDirect(J,null,Z,n,w,null)}function G(R,J,Z,CA){let l=null;const N=Z.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(N!==void 0)l=N;else if(l=Z.isPointLight===!0?o:i,B.localClippingEnabled&&J.clipShadows===!0&&Array.isArray(J.clippingPlanes)&&J.clippingPlanes.length!==0||J.displacementMap&&J.displacementScale!==0||J.alphaMap&&J.alphaTest>0||J.map&&J.alphaTest>0){const P=l.uuid,BA=J.uuid;let L=t[P];L===void 0&&(L={},t[P]=L);let O=L[BA];O===void 0&&(O=l.clone(),L[BA]=O,J.addEventListener("dispose",d)),l=O}if(l.visible=J.visible,l.wireframe=J.wireframe,CA===ug?l.side=J.shadowSide!==null?J.shadowSide:J.side:l.side=J.shadowSide!==null?J.shadowSide:a[J.side],l.alphaMap=J.alphaMap,l.alphaTest=J.alphaTest,l.map=J.map,l.clipShadows=J.clipShadows,l.clippingPlanes=J.clippingPlanes,l.clipIntersection=J.clipIntersection,l.displacementMap=J.displacementMap,l.displacementScale=J.displacementScale,l.displacementBias=J.displacementBias,l.wireframeLinewidth=J.wireframeLinewidth,l.linewidth=J.linewidth,Z.isPointLight===!0&&l.isMeshDistanceMaterial===!0){const P=B.properties.get(l);P.light=Z}return l}function K(R,J,Z,CA,l){if(R.visible===!1)return;if(R.layers.test(J.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&l===ug)&&(!R.frustumCulled||g.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,R.matrixWorld);const BA=A.update(R),L=R.material;if(Array.isArray(L)){const O=BA.groups;for(let _=0,j=O.length;_<j;_++){const W=O[_],v=L[W.materialIndex];if(v&&v.visible){const $=G(R,v,CA,l);R.onBeforeShadow(B,R,J,Z,BA,$,W),B.renderBufferDirect(Z,null,BA,$,R,W),R.onAfterShadow(B,R,J,Z,BA,$,W)}}}else if(L.visible){const O=G(R,L,CA,l);R.onBeforeShadow(B,R,J,Z,BA,O,null),B.renderBufferDirect(Z,null,BA,O,R,null),R.onAfterShadow(B,R,J,Z,BA,O,null)}}const P=R.children;for(let BA=0,L=P.length;BA<L;BA++)K(P[BA],J,Z,CA,l)}function d(R){R.target.removeEventListener("dispose",d);for(const Z in t){const CA=t[Z],l=R.target.uuid;l in CA&&(CA[l].dispose(),delete CA[l])}}}function pw(B,A,I){const g=I.isWebGL2;function C(){let U=!1;const QA=new oI;let EA=null;const hA=new oI(0,0,0,0);return{setMask:function(yA){EA!==yA&&!U&&(B.colorMask(yA,yA,yA,yA),EA=yA)},setLocked:function(yA){U=yA},setClear:function(yA,CI,tI,HI,gg){gg===!0&&(yA*=HI,CI*=HI,tI*=HI),QA.set(yA,CI,tI,HI),hA.equals(QA)===!1&&(B.clearColor(yA,CI,tI,HI),hA.copy(QA))},reset:function(){U=!1,EA=null,hA.set(-1,0,0,0)}}}function Q(){let U=!1,QA=null,EA=null,hA=null;return{setTest:function(yA){yA?rA(B.DEPTH_TEST):zA(B.DEPTH_TEST)},setMask:function(yA){QA!==yA&&!U&&(B.depthMask(yA),QA=yA)},setFunc:function(yA){if(EA!==yA){switch(yA){case Ls:B.depthFunc(B.NEVER);break;case fs:B.depthFunc(B.ALWAYS);break;case Hs:B.depthFunc(B.LESS);break;case YQ:B.depthFunc(B.LEQUAL);break;case us:B.depthFunc(B.EQUAL);break;case ms:B.depthFunc(B.GEQUAL);break;case Ts:B.depthFunc(B.GREATER);break;case bs:B.depthFunc(B.NOTEQUAL);break;default:B.depthFunc(B.LEQUAL)}EA=yA}},setLocked:function(yA){U=yA},setClear:function(yA){hA!==yA&&(B.clearDepth(yA),hA=yA)},reset:function(){U=!1,QA=null,EA=null,hA=null}}}function E(){let U=!1,QA=null,EA=null,hA=null,yA=null,CI=null,tI=null,HI=null,gg=null;return{setTest:function(eI){U||(eI?rA(B.STENCIL_TEST):zA(B.STENCIL_TEST))},setMask:function(eI){QA!==eI&&!U&&(B.stencilMask(eI),QA=eI)},setFunc:function(eI,ZI,Gg){(EA!==eI||hA!==ZI||yA!==Gg)&&(B.stencilFunc(eI,ZI,Gg),EA=eI,hA=ZI,yA=Gg)},setOp:function(eI,ZI,Gg){(CI!==eI||tI!==ZI||HI!==Gg)&&(B.stencilOp(eI,ZI,Gg),CI=eI,tI=ZI,HI=Gg)},setLocked:function(eI){U=eI},setClear:function(eI){gg!==eI&&(B.clearStencil(eI),gg=eI)},reset:function(){U=!1,QA=null,EA=null,hA=null,yA=null,CI=null,tI=null,HI=null,gg=null}}}const i=new C,o=new Q,t=new E,e=new WeakMap,a=new WeakMap;let s={},n={},S=new WeakMap,w=[],r=null,h=!1,M=null,G=null,K=null,d=null,R=null,J=null,Z=null,CA=new dA(0,0,0),l=0,N=!1,P=null,BA=null,L=null,O=null,_=null;const j=B.getParameter(B.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,v=0;const $=B.getParameter(B.VERSION);$.indexOf("WebGL")!==-1?(v=parseFloat(/^WebGL (\d)/.exec($)[1]),W=v>=1):$.indexOf("OpenGL ES")!==-1&&(v=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),W=v>=2);let AA=null,nA={};const RA=B.getParameter(B.SCISSOR_BOX),x=B.getParameter(B.VIEWPORT),z=new oI().fromArray(RA),eA=new oI().fromArray(x);function MA(U,QA,EA,hA){const yA=new Uint8Array(4),CI=B.createTexture();B.bindTexture(U,CI),B.texParameteri(U,B.TEXTURE_MIN_FILTER,B.NEAREST),B.texParameteri(U,B.TEXTURE_MAG_FILTER,B.NEAREST);for(let tI=0;tI<EA;tI++)g&&(U===B.TEXTURE_3D||U===B.TEXTURE_2D_ARRAY)?B.texImage3D(QA,0,B.RGBA,1,1,hA,0,B.RGBA,B.UNSIGNED_BYTE,yA):B.texImage2D(QA+tI,0,B.RGBA,1,1,0,B.RGBA,B.UNSIGNED_BYTE,yA);return CI}const UA={};UA[B.TEXTURE_2D]=MA(B.TEXTURE_2D,B.TEXTURE_2D,1),UA[B.TEXTURE_CUBE_MAP]=MA(B.TEXTURE_CUBE_MAP,B.TEXTURE_CUBE_MAP_POSITIVE_X,6),g&&(UA[B.TEXTURE_2D_ARRAY]=MA(B.TEXTURE_2D_ARRAY,B.TEXTURE_2D_ARRAY,1,1),UA[B.TEXTURE_3D]=MA(B.TEXTURE_3D,B.TEXTURE_3D,1,1)),i.setClear(0,0,0,1),o.setClear(1),t.setClear(0),rA(B.DEPTH_TEST),o.setFunc(YQ),HA(!1),y(Go),rA(B.CULL_FACE),cA(BC);function rA(U){s[U]!==!0&&(B.enable(U),s[U]=!0)}function zA(U){s[U]!==!1&&(B.disable(U),s[U]=!1)}function LA(U,QA){return n[U]!==QA?(B.bindFramebuffer(U,QA),n[U]=QA,g&&(U===B.DRAW_FRAMEBUFFER&&(n[B.FRAMEBUFFER]=QA),U===B.FRAMEBUFFER&&(n[B.DRAW_FRAMEBUFFER]=QA)),!0):!1}function H(U,QA){let EA=w,hA=!1;if(U)if(EA=S.get(QA),EA===void 0&&(EA=[],S.set(QA,EA)),U.isWebGLMultipleRenderTargets){const yA=U.texture;if(EA.length!==yA.length||EA[0]!==B.COLOR_ATTACHMENT0){for(let CI=0,tI=yA.length;CI<tI;CI++)EA[CI]=B.COLOR_ATTACHMENT0+CI;EA.length=yA.length,hA=!0}}else EA[0]!==B.COLOR_ATTACHMENT0&&(EA[0]=B.COLOR_ATTACHMENT0,hA=!0);else EA[0]!==B.BACK&&(EA[0]=B.BACK,hA=!0);hA&&(I.isWebGL2?B.drawBuffers(EA):A.get("WEBGL_draw_buffers").drawBuffersWEBGL(EA))}function fI(U){return r!==U?(B.useProgram(U),r=U,!0):!1}const kA={[cC]:B.FUNC_ADD,[Gs]:B.FUNC_SUBTRACT,[ls]:B.FUNC_REVERSE_SUBTRACT};if(g)kA[Mo]=B.MIN,kA[Uo]=B.MAX;else{const U=A.get("EXT_blend_minmax");U!==null&&(kA[Mo]=U.MIN_EXT,kA[Uo]=U.MAX_EXT)}const qA={[ks]:B.ZERO,[ys]:B.ONE,[Ms]:B.SRC_COLOR,[Qi]:B.SRC_ALPHA,[Rs]:B.SRC_ALPHA_SATURATE,[Fs]:B.DST_COLOR,[Ns]:B.DST_ALPHA,[Us]:B.ONE_MINUS_SRC_COLOR,[Ei]:B.ONE_MINUS_SRC_ALPHA,[Js]:B.ONE_MINUS_DST_COLOR,[Ks]:B.ONE_MINUS_DST_ALPHA,[qs]:B.CONSTANT_COLOR,[ps]:B.ONE_MINUS_CONSTANT_COLOR,[ds]:B.CONSTANT_ALPHA,[Ys]:B.ONE_MINUS_CONSTANT_ALPHA};function cA(U,QA,EA,hA,yA,CI,tI,HI,gg,eI){if(U===BC){h===!0&&(zA(B.BLEND),h=!1);return}if(h===!1&&(rA(B.BLEND),h=!0),U!==cs){if(U!==M||eI!==N){if((G!==cC||R!==cC)&&(B.blendEquation(B.FUNC_ADD),G=cC,R=cC),eI)switch(U){case gB:B.blendFuncSeparate(B.ONE,B.ONE_MINUS_SRC_ALPHA,B.ONE,B.ONE_MINUS_SRC_ALPHA);break;case lo:B.blendFunc(B.ONE,B.ONE);break;case ko:B.blendFuncSeparate(B.ZERO,B.ONE_MINUS_SRC_COLOR,B.ZERO,B.ONE);break;case yo:B.blendFuncSeparate(B.ZERO,B.SRC_COLOR,B.ZERO,B.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case gB:B.blendFuncSeparate(B.SRC_ALPHA,B.ONE_MINUS_SRC_ALPHA,B.ONE,B.ONE_MINUS_SRC_ALPHA);break;case lo:B.blendFunc(B.SRC_ALPHA,B.ONE);break;case ko:B.blendFuncSeparate(B.ZERO,B.ONE_MINUS_SRC_COLOR,B.ZERO,B.ONE);break;case yo:B.blendFunc(B.ZERO,B.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}K=null,d=null,J=null,Z=null,CA.set(0,0,0),l=0,M=U,N=eI}return}yA=yA||QA,CI=CI||EA,tI=tI||hA,(QA!==G||yA!==R)&&(B.blendEquationSeparate(kA[QA],kA[yA]),G=QA,R=yA),(EA!==K||hA!==d||CI!==J||tI!==Z)&&(B.blendFuncSeparate(qA[EA],qA[hA],qA[CI],qA[tI]),K=EA,d=hA,J=CI,Z=tI),(HI.equals(CA)===!1||gg!==l)&&(B.blendColor(HI.r,HI.g,HI.b,gg),CA.copy(HI),l=gg),M=U,N=!1}function rI(U,QA){U.side===yg?zA(B.CULL_FACE):rA(B.CULL_FACE);let EA=U.side===XI;QA&&(EA=!EA),HA(EA),U.blending===gB&&U.transparent===!1?cA(BC):cA(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),i.setMask(U.colorWrite);const hA=U.stencilWrite;t.setTest(hA),hA&&(t.setMask(U.stencilWriteMask),t.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),t.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),u(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?rA(B.SAMPLE_ALPHA_TO_COVERAGE):zA(B.SAMPLE_ALPHA_TO_COVERAGE)}function HA(U){P!==U&&(U?B.frontFace(B.CW):B.frontFace(B.CCW),P=U)}function y(U){U!==rs?(rA(B.CULL_FACE),U!==BA&&(U===Go?B.cullFace(B.BACK):U===Ss?B.cullFace(B.FRONT):B.cullFace(B.FRONT_AND_BACK))):zA(B.CULL_FACE),BA=U}function c(U){U!==L&&(W&&B.lineWidth(U),L=U)}function u(U,QA,EA){U?(rA(B.POLYGON_OFFSET_FILL),(O!==QA||_!==EA)&&(B.polygonOffset(QA,EA),O=QA,_=EA)):zA(B.POLYGON_OFFSET_FILL)}function gA(U){U?rA(B.SCISSOR_TEST):zA(B.SCISSOR_TEST)}function V(U){U===void 0&&(U=B.TEXTURE0+j-1),AA!==U&&(B.activeTexture(U),AA=U)}function IA(U,QA,EA){EA===void 0&&(AA===null?EA=B.TEXTURE0+j-1:EA=AA);let hA=nA[EA];hA===void 0&&(hA={type:void 0,texture:void 0},nA[EA]=hA),(hA.type!==U||hA.texture!==QA)&&(AA!==EA&&(B.activeTexture(EA),AA=EA),B.bindTexture(U,QA||UA[U]),hA.type=U,hA.texture=QA)}function SA(){const U=nA[AA];U!==void 0&&U.type!==void 0&&(B.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function oA(){try{B.compressedTexImage2D.apply(B,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function sA(){try{B.compressedTexImage3D.apply(B,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function KA(){try{B.texSubImage2D.apply(B,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function bA(){try{B.texSubImage3D.apply(B,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function X(){try{B.compressedTexSubImage2D.apply(B,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function QI(){try{B.compressedTexSubImage3D.apply(B,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function WA(){try{B.texStorage2D.apply(B,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pA(){try{B.texStorage3D.apply(B,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function GA(){try{B.texImage2D.apply(B,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function DA(){try{B.texImage3D.apply(B,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function uA(U){z.equals(U)===!1&&(B.scissor(U.x,U.y,U.z,U.w),z.copy(U))}function gI(U){eA.equals(U)===!1&&(B.viewport(U.x,U.y,U.z,U.w),eA.copy(U))}function sI(U,QA){let EA=a.get(QA);EA===void 0&&(EA=new WeakMap,a.set(QA,EA));let hA=EA.get(U);hA===void 0&&(hA=B.getUniformBlockIndex(QA,U.name),EA.set(U,hA))}function jA(U,QA){const hA=a.get(QA).get(U);e.get(QA)!==hA&&(B.uniformBlockBinding(QA,hA,U.__bindingPointIndex),e.set(QA,hA))}function EI(){B.disable(B.BLEND),B.disable(B.CULL_FACE),B.disable(B.DEPTH_TEST),B.disable(B.POLYGON_OFFSET_FILL),B.disable(B.SCISSOR_TEST),B.disable(B.STENCIL_TEST),B.disable(B.SAMPLE_ALPHA_TO_COVERAGE),B.blendEquation(B.FUNC_ADD),B.blendFunc(B.ONE,B.ZERO),B.blendFuncSeparate(B.ONE,B.ZERO,B.ONE,B.ZERO),B.blendColor(0,0,0,0),B.colorMask(!0,!0,!0,!0),B.clearColor(0,0,0,0),B.depthMask(!0),B.depthFunc(B.LESS),B.clearDepth(1),B.stencilMask(4294967295),B.stencilFunc(B.ALWAYS,0,4294967295),B.stencilOp(B.KEEP,B.KEEP,B.KEEP),B.clearStencil(0),B.cullFace(B.BACK),B.frontFace(B.CCW),B.polygonOffset(0,0),B.activeTexture(B.TEXTURE0),B.bindFramebuffer(B.FRAMEBUFFER,null),g===!0&&(B.bindFramebuffer(B.DRAW_FRAMEBUFFER,null),B.bindFramebuffer(B.READ_FRAMEBUFFER,null)),B.useProgram(null),B.lineWidth(1),B.scissor(0,0,B.canvas.width,B.canvas.height),B.viewport(0,0,B.canvas.width,B.canvas.height),s={},AA=null,nA={},n={},S=new WeakMap,w=[],r=null,h=!1,M=null,G=null,K=null,d=null,R=null,J=null,Z=null,CA=new dA(0,0,0),l=0,N=!1,P=null,BA=null,L=null,O=null,_=null,z.set(0,0,B.canvas.width,B.canvas.height),eA.set(0,0,B.canvas.width,B.canvas.height),i.reset(),o.reset(),t.reset()}return{buffers:{color:i,depth:o,stencil:t},enable:rA,disable:zA,bindFramebuffer:LA,drawBuffers:H,useProgram:fI,setBlending:cA,setMaterial:rI,setFlipSided:HA,setCullFace:y,setLineWidth:c,setPolygonOffset:u,setScissorTest:gA,activeTexture:V,bindTexture:IA,unbindTexture:SA,compressedTexImage2D:oA,compressedTexImage3D:sA,texImage2D:GA,texImage3D:DA,updateUBOMapping:sI,uniformBlockBinding:jA,texStorage2D:WA,texStorage3D:pA,texSubImage2D:KA,texSubImage3D:bA,compressedTexSubImage2D:X,compressedTexSubImage3D:QI,scissor:uA,viewport:gI,reset:EI}}function dw(B,A,I,g,C,Q,E){const i=C.isWebGL2,o=A.has("WEBGL_multisampled_render_to_texture")?A.get("WEBGL_multisampled_render_to_texture"):null,t=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),e=new WeakMap;let a;const s=new WeakMap;let n=!1;try{n=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(y,c){return n?new OffscreenCanvas(y,c):xB("canvas")}function w(y,c,u,gA){let V=1;if((y.width>gA||y.height>gA)&&(V=gA/Math.max(y.width,y.height)),V<1||c===!0)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap){const IA=c?bQ:Math.floor,SA=IA(V*y.width),oA=IA(V*y.height);a===void 0&&(a=S(SA,oA));const sA=u?S(SA,oA):a;return sA.width=SA,sA.height=oA,sA.getContext("2d").drawImage(y,0,0,SA,oA),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+y.width+"x"+y.height+") to ("+SA+"x"+oA+")."),sA}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+y.width+"x"+y.height+")."),y;return y}function r(y){return Di(y.width)&&Di(y.height)}function h(y){return i?!1:y.wrapS!==og||y.wrapT!==og||y.minFilter!==dI&&y.minFilter!==OI}function M(y,c){return y.generateMipmaps&&c&&y.minFilter!==dI&&y.minFilter!==OI}function G(y){B.generateMipmap(y)}function K(y,c,u,gA,V=!1){if(i===!1)return c;if(y!==null){if(B[y]!==void 0)return B[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let IA=c;if(c===B.RED&&(u===B.FLOAT&&(IA=B.R32F),u===B.HALF_FLOAT&&(IA=B.R16F),u===B.UNSIGNED_BYTE&&(IA=B.R8)),c===B.RED_INTEGER&&(u===B.UNSIGNED_BYTE&&(IA=B.R8UI),u===B.UNSIGNED_SHORT&&(IA=B.R16UI),u===B.UNSIGNED_INT&&(IA=B.R32UI),u===B.BYTE&&(IA=B.R8I),u===B.SHORT&&(IA=B.R16I),u===B.INT&&(IA=B.R32I)),c===B.RG&&(u===B.FLOAT&&(IA=B.RG32F),u===B.HALF_FLOAT&&(IA=B.RG16F),u===B.UNSIGNED_BYTE&&(IA=B.RG8)),c===B.RGBA){const SA=V?HQ:II.getTransfer(gA);u===B.FLOAT&&(IA=B.RGBA32F),u===B.HALF_FLOAT&&(IA=B.RGBA16F),u===B.UNSIGNED_BYTE&&(IA=SA===DI?B.SRGB8_ALPHA8:B.RGBA8),u===B.UNSIGNED_SHORT_4_4_4_4&&(IA=B.RGBA4),u===B.UNSIGNED_SHORT_5_5_5_1&&(IA=B.RGB5_A1)}return(IA===B.R16F||IA===B.R32F||IA===B.RG16F||IA===B.RG32F||IA===B.RGBA16F||IA===B.RGBA32F)&&A.get("EXT_color_buffer_float"),IA}function d(y,c,u){return M(y,u)===!0||y.isFramebufferTexture&&y.minFilter!==dI&&y.minFilter!==OI?Math.log2(Math.max(c.width,c.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?c.mipmaps.length:1}function R(y){return y===dI||y===ti||y===XC?B.NEAREST:B.LINEAR}function J(y){const c=y.target;c.removeEventListener("dispose",J),CA(c),c.isVideoTexture&&e.delete(c)}function Z(y){const c=y.target;c.removeEventListener("dispose",Z),N(c)}function CA(y){const c=g.get(y);if(c.__webglInit===void 0)return;const u=y.source,gA=s.get(u);if(gA){const V=gA[c.__cacheKey];V.usedTimes--,V.usedTimes===0&&l(y),Object.keys(gA).length===0&&s.delete(u)}g.remove(y)}function l(y){const c=g.get(y);B.deleteTexture(c.__webglTexture);const u=y.source,gA=s.get(u);delete gA[c.__cacheKey],E.memory.textures--}function N(y){const c=y.texture,u=g.get(y),gA=g.get(c);if(gA.__webglTexture!==void 0&&(B.deleteTexture(gA.__webglTexture),E.memory.textures--),y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(u.__webglFramebuffer[V]))for(let IA=0;IA<u.__webglFramebuffer[V].length;IA++)B.deleteFramebuffer(u.__webglFramebuffer[V][IA]);else B.deleteFramebuffer(u.__webglFramebuffer[V]);u.__webglDepthbuffer&&B.deleteRenderbuffer(u.__webglDepthbuffer[V])}else{if(Array.isArray(u.__webglFramebuffer))for(let V=0;V<u.__webglFramebuffer.length;V++)B.deleteFramebuffer(u.__webglFramebuffer[V]);else B.deleteFramebuffer(u.__webglFramebuffer);if(u.__webglDepthbuffer&&B.deleteRenderbuffer(u.__webglDepthbuffer),u.__webglMultisampledFramebuffer&&B.deleteFramebuffer(u.__webglMultisampledFramebuffer),u.__webglColorRenderbuffer)for(let V=0;V<u.__webglColorRenderbuffer.length;V++)u.__webglColorRenderbuffer[V]&&B.deleteRenderbuffer(u.__webglColorRenderbuffer[V]);u.__webglDepthRenderbuffer&&B.deleteRenderbuffer(u.__webglDepthRenderbuffer)}if(y.isWebGLMultipleRenderTargets)for(let V=0,IA=c.length;V<IA;V++){const SA=g.get(c[V]);SA.__webglTexture&&(B.deleteTexture(SA.__webglTexture),E.memory.textures--),g.remove(c[V])}g.remove(c),g.remove(y)}let P=0;function BA(){P=0}function L(){const y=P;return y>=C.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+C.maxTextures),P+=1,y}function O(y){const c=[];return c.push(y.wrapS),c.push(y.wrapT),c.push(y.wrapR||0),c.push(y.magFilter),c.push(y.minFilter),c.push(y.anisotropy),c.push(y.internalFormat),c.push(y.format),c.push(y.type),c.push(y.generateMipmaps),c.push(y.premultiplyAlpha),c.push(y.flipY),c.push(y.unpackAlignment),c.push(y.colorSpace),c.join()}function _(y,c){const u=g.get(y);if(y.isVideoTexture&&rI(y),y.isRenderTargetTexture===!1&&y.version>0&&u.__version!==y.version){const gA=y.image;if(gA===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(gA.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{z(u,y,c);return}}I.bindTexture(B.TEXTURE_2D,u.__webglTexture,B.TEXTURE0+c)}function j(y,c){const u=g.get(y);if(y.version>0&&u.__version!==y.version){z(u,y,c);return}I.bindTexture(B.TEXTURE_2D_ARRAY,u.__webglTexture,B.TEXTURE0+c)}function W(y,c){const u=g.get(y);if(y.version>0&&u.__version!==y.version){z(u,y,c);return}I.bindTexture(B.TEXTURE_3D,u.__webglTexture,B.TEXTURE0+c)}function v(y,c){const u=g.get(y);if(y.version>0&&u.__version!==y.version){eA(u,y,c);return}I.bindTexture(B.TEXTURE_CUBE_MAP,u.__webglTexture,B.TEXTURE0+c)}const $={[iB]:B.REPEAT,[og]:B.CLAMP_TO_EDGE,[LQ]:B.MIRRORED_REPEAT},AA={[dI]:B.NEAREST,[ti]:B.NEAREST_MIPMAP_NEAREST,[XC]:B.NEAREST_MIPMAP_LINEAR,[OI]:B.LINEAR,[qQ]:B.LINEAR_MIPMAP_NEAREST,[Tg]:B.LINEAR_MIPMAP_LINEAR},nA={[sD]:B.NEVER,[wD]:B.ALWAYS,[DD]:B.LESS,[de]:B.LEQUAL,[nD]:B.EQUAL,[SD]:B.GEQUAL,[hD]:B.GREATER,[rD]:B.NOTEQUAL};function RA(y,c,u){if(c.type===Mg&&A.has("OES_texture_float_linear")===!1&&(c.magFilter===OI||c.magFilter===qQ||c.magFilter===XC||c.magFilter===Tg||c.minFilter===OI||c.minFilter===qQ||c.minFilter===XC||c.minFilter===Tg)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),u?(B.texParameteri(y,B.TEXTURE_WRAP_S,$[c.wrapS]),B.texParameteri(y,B.TEXTURE_WRAP_T,$[c.wrapT]),(y===B.TEXTURE_3D||y===B.TEXTURE_2D_ARRAY)&&B.texParameteri(y,B.TEXTURE_WRAP_R,$[c.wrapR]),B.texParameteri(y,B.TEXTURE_MAG_FILTER,AA[c.magFilter]),B.texParameteri(y,B.TEXTURE_MIN_FILTER,AA[c.minFilter])):(B.texParameteri(y,B.TEXTURE_WRAP_S,B.CLAMP_TO_EDGE),B.texParameteri(y,B.TEXTURE_WRAP_T,B.CLAMP_TO_EDGE),(y===B.TEXTURE_3D||y===B.TEXTURE_2D_ARRAY)&&B.texParameteri(y,B.TEXTURE_WRAP_R,B.CLAMP_TO_EDGE),(c.wrapS!==og||c.wrapT!==og)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),B.texParameteri(y,B.TEXTURE_MAG_FILTER,R(c.magFilter)),B.texParameteri(y,B.TEXTURE_MIN_FILTER,R(c.minFilter)),c.minFilter!==dI&&c.minFilter!==OI&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),c.compareFunction&&(B.texParameteri(y,B.TEXTURE_COMPARE_MODE,B.COMPARE_REF_TO_TEXTURE),B.texParameteri(y,B.TEXTURE_COMPARE_FUNC,nA[c.compareFunction])),A.has("EXT_texture_filter_anisotropic")===!0){const gA=A.get("EXT_texture_filter_anisotropic");if(c.magFilter===dI||c.minFilter!==XC&&c.minFilter!==Tg||c.type===Mg&&A.has("OES_texture_float_linear")===!1||i===!1&&c.type===TB&&A.has("OES_texture_half_float_linear")===!1)return;(c.anisotropy>1||g.get(c).__currentAnisotropy)&&(B.texParameterf(y,gA.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(c.anisotropy,C.getMaxAnisotropy())),g.get(c).__currentAnisotropy=c.anisotropy)}}function x(y,c){let u=!1;y.__webglInit===void 0&&(y.__webglInit=!0,c.addEventListener("dispose",J));const gA=c.source;let V=s.get(gA);V===void 0&&(V={},s.set(gA,V));const IA=O(c);if(IA!==y.__cacheKey){V[IA]===void 0&&(V[IA]={texture:B.createTexture(),usedTimes:0},E.memory.textures++,u=!0),V[IA].usedTimes++;const SA=V[y.__cacheKey];SA!==void 0&&(V[y.__cacheKey].usedTimes--,SA.usedTimes===0&&l(c)),y.__cacheKey=IA,y.__webglTexture=V[IA].texture}return u}function z(y,c,u){let gA=B.TEXTURE_2D;(c.isDataArrayTexture||c.isCompressedArrayTexture)&&(gA=B.TEXTURE_2D_ARRAY),c.isData3DTexture&&(gA=B.TEXTURE_3D);const V=x(y,c),IA=c.source;I.bindTexture(gA,y.__webglTexture,B.TEXTURE0+u);const SA=g.get(IA);if(IA.version!==SA.__version||V===!0){I.activeTexture(B.TEXTURE0+u);const oA=II.getPrimaries(II.workingColorSpace),sA=c.colorSpace===eg?null:II.getPrimaries(c.colorSpace),KA=c.colorSpace===eg||oA===sA?B.NONE:B.BROWSER_DEFAULT_WEBGL;B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,c.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,c.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,c.unpackAlignment),B.pixelStorei(B.UNPACK_COLORSPACE_CONVERSION_WEBGL,KA);const bA=h(c)&&r(c.image)===!1;let X=w(c.image,bA,!1,C.maxTextureSize);X=HA(c,X);const QI=r(X)||i,WA=Q.convert(c.format,c.colorSpace);let pA=Q.convert(c.type),GA=K(c.internalFormat,WA,pA,c.colorSpace,c.isVideoTexture);RA(gA,c,QI);let DA;const uA=c.mipmaps,gI=i&&c.isVideoTexture!==!0&&GA!==Je,sI=SA.__version===void 0||V===!0,jA=IA.dataReady,EI=d(c,X,QI);if(c.isDepthTexture)GA=B.DEPTH_COMPONENT,i?c.type===Mg?GA=B.DEPTH_COMPONENT32F:c.type===gC?GA=B.DEPTH_COMPONENT24:c.type===MC?GA=B.DEPTH24_STENCIL8:GA=B.DEPTH_COMPONENT16:c.type===Mg&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),c.format===UC&&GA===B.DEPTH_COMPONENT&&c.type!==Ri&&c.type!==gC&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),c.type=gC,pA=Q.convert(c.type)),c.format===oB&&GA===B.DEPTH_COMPONENT&&(GA=B.DEPTH_STENCIL,c.type!==MC&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),c.type=MC,pA=Q.convert(c.type))),sI&&(gI?I.texStorage2D(B.TEXTURE_2D,1,GA,X.width,X.height):I.texImage2D(B.TEXTURE_2D,0,GA,X.width,X.height,0,WA,pA,null));else if(c.isDataTexture)if(uA.length>0&&QI){gI&&sI&&I.texStorage2D(B.TEXTURE_2D,EI,GA,uA[0].width,uA[0].height);for(let U=0,QA=uA.length;U<QA;U++)DA=uA[U],gI?jA&&I.texSubImage2D(B.TEXTURE_2D,U,0,0,DA.width,DA.height,WA,pA,DA.data):I.texImage2D(B.TEXTURE_2D,U,GA,DA.width,DA.height,0,WA,pA,DA.data);c.generateMipmaps=!1}else gI?(sI&&I.texStorage2D(B.TEXTURE_2D,EI,GA,X.width,X.height),jA&&I.texSubImage2D(B.TEXTURE_2D,0,0,0,X.width,X.height,WA,pA,X.data)):I.texImage2D(B.TEXTURE_2D,0,GA,X.width,X.height,0,WA,pA,X.data);else if(c.isCompressedTexture)if(c.isCompressedArrayTexture){gI&&sI&&I.texStorage3D(B.TEXTURE_2D_ARRAY,EI,GA,uA[0].width,uA[0].height,X.depth);for(let U=0,QA=uA.length;U<QA;U++)DA=uA[U],c.format!==tg?WA!==null?gI?jA&&I.compressedTexSubImage3D(B.TEXTURE_2D_ARRAY,U,0,0,0,DA.width,DA.height,X.depth,WA,DA.data,0,0):I.compressedTexImage3D(B.TEXTURE_2D_ARRAY,U,GA,DA.width,DA.height,X.depth,0,DA.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):gI?jA&&I.texSubImage3D(B.TEXTURE_2D_ARRAY,U,0,0,0,DA.width,DA.height,X.depth,WA,pA,DA.data):I.texImage3D(B.TEXTURE_2D_ARRAY,U,GA,DA.width,DA.height,X.depth,0,WA,pA,DA.data)}else{gI&&sI&&I.texStorage2D(B.TEXTURE_2D,EI,GA,uA[0].width,uA[0].height);for(let U=0,QA=uA.length;U<QA;U++)DA=uA[U],c.format!==tg?WA!==null?gI?jA&&I.compressedTexSubImage2D(B.TEXTURE_2D,U,0,0,DA.width,DA.height,WA,DA.data):I.compressedTexImage2D(B.TEXTURE_2D,U,GA,DA.width,DA.height,0,DA.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):gI?jA&&I.texSubImage2D(B.TEXTURE_2D,U,0,0,DA.width,DA.height,WA,pA,DA.data):I.texImage2D(B.TEXTURE_2D,U,GA,DA.width,DA.height,0,WA,pA,DA.data)}else if(c.isDataArrayTexture)gI?(sI&&I.texStorage3D(B.TEXTURE_2D_ARRAY,EI,GA,X.width,X.height,X.depth),jA&&I.texSubImage3D(B.TEXTURE_2D_ARRAY,0,0,0,0,X.width,X.height,X.depth,WA,pA,X.data)):I.texImage3D(B.TEXTURE_2D_ARRAY,0,GA,X.width,X.height,X.depth,0,WA,pA,X.data);else if(c.isData3DTexture)gI?(sI&&I.texStorage3D(B.TEXTURE_3D,EI,GA,X.width,X.height,X.depth),jA&&I.texSubImage3D(B.TEXTURE_3D,0,0,0,0,X.width,X.height,X.depth,WA,pA,X.data)):I.texImage3D(B.TEXTURE_3D,0,GA,X.width,X.height,X.depth,0,WA,pA,X.data);else if(c.isFramebufferTexture){if(sI)if(gI)I.texStorage2D(B.TEXTURE_2D,EI,GA,X.width,X.height);else{let U=X.width,QA=X.height;for(let EA=0;EA<EI;EA++)I.texImage2D(B.TEXTURE_2D,EA,GA,U,QA,0,WA,pA,null),U>>=1,QA>>=1}}else if(uA.length>0&&QI){gI&&sI&&I.texStorage2D(B.TEXTURE_2D,EI,GA,uA[0].width,uA[0].height);for(let U=0,QA=uA.length;U<QA;U++)DA=uA[U],gI?jA&&I.texSubImage2D(B.TEXTURE_2D,U,0,0,WA,pA,DA):I.texImage2D(B.TEXTURE_2D,U,GA,WA,pA,DA);c.generateMipmaps=!1}else gI?(sI&&I.texStorage2D(B.TEXTURE_2D,EI,GA,X.width,X.height),jA&&I.texSubImage2D(B.TEXTURE_2D,0,0,0,WA,pA,X)):I.texImage2D(B.TEXTURE_2D,0,GA,WA,pA,X);M(c,QI)&&G(gA),SA.__version=IA.version,c.onUpdate&&c.onUpdate(c)}y.__version=c.version}function eA(y,c,u){if(c.image.length!==6)return;const gA=x(y,c),V=c.source;I.bindTexture(B.TEXTURE_CUBE_MAP,y.__webglTexture,B.TEXTURE0+u);const IA=g.get(V);if(V.version!==IA.__version||gA===!0){I.activeTexture(B.TEXTURE0+u);const SA=II.getPrimaries(II.workingColorSpace),oA=c.colorSpace===eg?null:II.getPrimaries(c.colorSpace),sA=c.colorSpace===eg||SA===oA?B.NONE:B.BROWSER_DEFAULT_WEBGL;B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,c.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,c.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,c.unpackAlignment),B.pixelStorei(B.UNPACK_COLORSPACE_CONVERSION_WEBGL,sA);const KA=c.isCompressedTexture||c.image[0].isCompressedTexture,bA=c.image[0]&&c.image[0].isDataTexture,X=[];for(let U=0;U<6;U++)!KA&&!bA?X[U]=w(c.image[U],!1,!0,C.maxCubemapSize):X[U]=bA?c.image[U].image:c.image[U],X[U]=HA(c,X[U]);const QI=X[0],WA=r(QI)||i,pA=Q.convert(c.format,c.colorSpace),GA=Q.convert(c.type),DA=K(c.internalFormat,pA,GA,c.colorSpace),uA=i&&c.isVideoTexture!==!0,gI=IA.__version===void 0||gA===!0,sI=V.dataReady;let jA=d(c,QI,WA);RA(B.TEXTURE_CUBE_MAP,c,WA);let EI;if(KA){uA&&gI&&I.texStorage2D(B.TEXTURE_CUBE_MAP,jA,DA,QI.width,QI.height);for(let U=0;U<6;U++){EI=X[U].mipmaps;for(let QA=0;QA<EI.length;QA++){const EA=EI[QA];c.format!==tg?pA!==null?uA?sI&&I.compressedTexSubImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+U,QA,0,0,EA.width,EA.height,pA,EA.data):I.compressedTexImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+U,QA,DA,EA.width,EA.height,0,EA.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):uA?sI&&I.texSubImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+U,QA,0,0,EA.width,EA.height,pA,GA,EA.data):I.texImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+U,QA,DA,EA.width,EA.height,0,pA,GA,EA.data)}}}else{EI=c.mipmaps,uA&&gI&&(EI.length>0&&jA++,I.texStorage2D(B.TEXTURE_CUBE_MAP,jA,DA,X[0].width,X[0].height));for(let U=0;U<6;U++)if(bA){uA?sI&&I.texSubImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,0,0,X[U].width,X[U].height,pA,GA,X[U].data):I.texImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,DA,X[U].width,X[U].height,0,pA,GA,X[U].data);for(let QA=0;QA<EI.length;QA++){const hA=EI[QA].image[U].image;uA?sI&&I.texSubImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+U,QA+1,0,0,hA.width,hA.height,pA,GA,hA.data):I.texImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+U,QA+1,DA,hA.width,hA.height,0,pA,GA,hA.data)}}else{uA?sI&&I.texSubImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,0,0,pA,GA,X[U]):I.texImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,DA,pA,GA,X[U]);for(let QA=0;QA<EI.length;QA++){const EA=EI[QA];uA?sI&&I.texSubImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+U,QA+1,0,0,pA,GA,EA.image[U]):I.texImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+U,QA+1,DA,pA,GA,EA.image[U])}}}M(c,WA)&&G(B.TEXTURE_CUBE_MAP),IA.__version=V.version,c.onUpdate&&c.onUpdate(c)}y.__version=c.version}function MA(y,c,u,gA,V,IA){const SA=Q.convert(u.format,u.colorSpace),oA=Q.convert(u.type),sA=K(u.internalFormat,SA,oA,u.colorSpace);if(!g.get(c).__hasExternalTextures){const bA=Math.max(1,c.width>>IA),X=Math.max(1,c.height>>IA);V===B.TEXTURE_3D||V===B.TEXTURE_2D_ARRAY?I.texImage3D(V,IA,sA,bA,X,c.depth,0,SA,oA,null):I.texImage2D(V,IA,sA,bA,X,0,SA,oA,null)}I.bindFramebuffer(B.FRAMEBUFFER,y),cA(c)?o.framebufferTexture2DMultisampleEXT(B.FRAMEBUFFER,gA,V,g.get(u).__webglTexture,0,qA(c)):(V===B.TEXTURE_2D||V>=B.TEXTURE_CUBE_MAP_POSITIVE_X&&V<=B.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&B.framebufferTexture2D(B.FRAMEBUFFER,gA,V,g.get(u).__webglTexture,IA),I.bindFramebuffer(B.FRAMEBUFFER,null)}function UA(y,c,u){if(B.bindRenderbuffer(B.RENDERBUFFER,y),c.depthBuffer&&!c.stencilBuffer){let gA=i===!0?B.DEPTH_COMPONENT24:B.DEPTH_COMPONENT16;if(u||cA(c)){const V=c.depthTexture;V&&V.isDepthTexture&&(V.type===Mg?gA=B.DEPTH_COMPONENT32F:V.type===gC&&(gA=B.DEPTH_COMPONENT24));const IA=qA(c);cA(c)?o.renderbufferStorageMultisampleEXT(B.RENDERBUFFER,IA,gA,c.width,c.height):B.renderbufferStorageMultisample(B.RENDERBUFFER,IA,gA,c.width,c.height)}else B.renderbufferStorage(B.RENDERBUFFER,gA,c.width,c.height);B.framebufferRenderbuffer(B.FRAMEBUFFER,B.DEPTH_ATTACHMENT,B.RENDERBUFFER,y)}else if(c.depthBuffer&&c.stencilBuffer){const gA=qA(c);u&&cA(c)===!1?B.renderbufferStorageMultisample(B.RENDERBUFFER,gA,B.DEPTH24_STENCIL8,c.width,c.height):cA(c)?o.renderbufferStorageMultisampleEXT(B.RENDERBUFFER,gA,B.DEPTH24_STENCIL8,c.width,c.height):B.renderbufferStorage(B.RENDERBUFFER,B.DEPTH_STENCIL,c.width,c.height),B.framebufferRenderbuffer(B.FRAMEBUFFER,B.DEPTH_STENCIL_ATTACHMENT,B.RENDERBUFFER,y)}else{const gA=c.isWebGLMultipleRenderTargets===!0?c.texture:[c.texture];for(let V=0;V<gA.length;V++){const IA=gA[V],SA=Q.convert(IA.format,IA.colorSpace),oA=Q.convert(IA.type),sA=K(IA.internalFormat,SA,oA,IA.colorSpace),KA=qA(c);u&&cA(c)===!1?B.renderbufferStorageMultisample(B.RENDERBUFFER,KA,sA,c.width,c.height):cA(c)?o.renderbufferStorageMultisampleEXT(B.RENDERBUFFER,KA,sA,c.width,c.height):B.renderbufferStorage(B.RENDERBUFFER,sA,c.width,c.height)}}B.bindRenderbuffer(B.RENDERBUFFER,null)}function rA(y,c){if(c&&c.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(I.bindFramebuffer(B.FRAMEBUFFER,y),!(c.depthTexture&&c.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!g.get(c.depthTexture).__webglTexture||c.depthTexture.image.width!==c.width||c.depthTexture.image.height!==c.height)&&(c.depthTexture.image.width=c.width,c.depthTexture.image.height=c.height,c.depthTexture.needsUpdate=!0),_(c.depthTexture,0);const gA=g.get(c.depthTexture).__webglTexture,V=qA(c);if(c.depthTexture.format===UC)cA(c)?o.framebufferTexture2DMultisampleEXT(B.FRAMEBUFFER,B.DEPTH_ATTACHMENT,B.TEXTURE_2D,gA,0,V):B.framebufferTexture2D(B.FRAMEBUFFER,B.DEPTH_ATTACHMENT,B.TEXTURE_2D,gA,0);else if(c.depthTexture.format===oB)cA(c)?o.framebufferTexture2DMultisampleEXT(B.FRAMEBUFFER,B.DEPTH_STENCIL_ATTACHMENT,B.TEXTURE_2D,gA,0,V):B.framebufferTexture2D(B.FRAMEBUFFER,B.DEPTH_STENCIL_ATTACHMENT,B.TEXTURE_2D,gA,0);else throw new Error("Unknown depthTexture format")}function zA(y){const c=g.get(y),u=y.isWebGLCubeRenderTarget===!0;if(y.depthTexture&&!c.__autoAllocateDepthBuffer){if(u)throw new Error("target.depthTexture not supported in Cube render targets");rA(c.__webglFramebuffer,y)}else if(u){c.__webglDepthbuffer=[];for(let gA=0;gA<6;gA++)I.bindFramebuffer(B.FRAMEBUFFER,c.__webglFramebuffer[gA]),c.__webglDepthbuffer[gA]=B.createRenderbuffer(),UA(c.__webglDepthbuffer[gA],y,!1)}else I.bindFramebuffer(B.FRAMEBUFFER,c.__webglFramebuffer),c.__webglDepthbuffer=B.createRenderbuffer(),UA(c.__webglDepthbuffer,y,!1);I.bindFramebuffer(B.FRAMEBUFFER,null)}function LA(y,c,u){const gA=g.get(y);c!==void 0&&MA(gA.__webglFramebuffer,y,y.texture,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,0),u!==void 0&&zA(y)}function H(y){const c=y.texture,u=g.get(y),gA=g.get(c);y.addEventListener("dispose",Z),y.isWebGLMultipleRenderTargets!==!0&&(gA.__webglTexture===void 0&&(gA.__webglTexture=B.createTexture()),gA.__version=c.version,E.memory.textures++);const V=y.isWebGLCubeRenderTarget===!0,IA=y.isWebGLMultipleRenderTargets===!0,SA=r(y)||i;if(V){u.__webglFramebuffer=[];for(let oA=0;oA<6;oA++)if(i&&c.mipmaps&&c.mipmaps.length>0){u.__webglFramebuffer[oA]=[];for(let sA=0;sA<c.mipmaps.length;sA++)u.__webglFramebuffer[oA][sA]=B.createFramebuffer()}else u.__webglFramebuffer[oA]=B.createFramebuffer()}else{if(i&&c.mipmaps&&c.mipmaps.length>0){u.__webglFramebuffer=[];for(let oA=0;oA<c.mipmaps.length;oA++)u.__webglFramebuffer[oA]=B.createFramebuffer()}else u.__webglFramebuffer=B.createFramebuffer();if(IA)if(C.drawBuffers){const oA=y.texture;for(let sA=0,KA=oA.length;sA<KA;sA++){const bA=g.get(oA[sA]);bA.__webglTexture===void 0&&(bA.__webglTexture=B.createTexture(),E.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(i&&y.samples>0&&cA(y)===!1){const oA=IA?c:[c];u.__webglMultisampledFramebuffer=B.createFramebuffer(),u.__webglColorRenderbuffer=[],I.bindFramebuffer(B.FRAMEBUFFER,u.__webglMultisampledFramebuffer);for(let sA=0;sA<oA.length;sA++){const KA=oA[sA];u.__webglColorRenderbuffer[sA]=B.createRenderbuffer(),B.bindRenderbuffer(B.RENDERBUFFER,u.__webglColorRenderbuffer[sA]);const bA=Q.convert(KA.format,KA.colorSpace),X=Q.convert(KA.type),QI=K(KA.internalFormat,bA,X,KA.colorSpace,y.isXRRenderTarget===!0),WA=qA(y);B.renderbufferStorageMultisample(B.RENDERBUFFER,WA,QI,y.width,y.height),B.framebufferRenderbuffer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+sA,B.RENDERBUFFER,u.__webglColorRenderbuffer[sA])}B.bindRenderbuffer(B.RENDERBUFFER,null),y.depthBuffer&&(u.__webglDepthRenderbuffer=B.createRenderbuffer(),UA(u.__webglDepthRenderbuffer,y,!0)),I.bindFramebuffer(B.FRAMEBUFFER,null)}}if(V){I.bindTexture(B.TEXTURE_CUBE_MAP,gA.__webglTexture),RA(B.TEXTURE_CUBE_MAP,c,SA);for(let oA=0;oA<6;oA++)if(i&&c.mipmaps&&c.mipmaps.length>0)for(let sA=0;sA<c.mipmaps.length;sA++)MA(u.__webglFramebuffer[oA][sA],y,c,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+oA,sA);else MA(u.__webglFramebuffer[oA],y,c,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+oA,0);M(c,SA)&&G(B.TEXTURE_CUBE_MAP),I.unbindTexture()}else if(IA){const oA=y.texture;for(let sA=0,KA=oA.length;sA<KA;sA++){const bA=oA[sA],X=g.get(bA);I.bindTexture(B.TEXTURE_2D,X.__webglTexture),RA(B.TEXTURE_2D,bA,SA),MA(u.__webglFramebuffer,y,bA,B.COLOR_ATTACHMENT0+sA,B.TEXTURE_2D,0),M(bA,SA)&&G(B.TEXTURE_2D)}I.unbindTexture()}else{let oA=B.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(i?oA=y.isWebGL3DRenderTarget?B.TEXTURE_3D:B.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),I.bindTexture(oA,gA.__webglTexture),RA(oA,c,SA),i&&c.mipmaps&&c.mipmaps.length>0)for(let sA=0;sA<c.mipmaps.length;sA++)MA(u.__webglFramebuffer[sA],y,c,B.COLOR_ATTACHMENT0,oA,sA);else MA(u.__webglFramebuffer,y,c,B.COLOR_ATTACHMENT0,oA,0);M(c,SA)&&G(oA),I.unbindTexture()}y.depthBuffer&&zA(y)}function fI(y){const c=r(y)||i,u=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let gA=0,V=u.length;gA<V;gA++){const IA=u[gA];if(M(IA,c)){const SA=y.isWebGLCubeRenderTarget?B.TEXTURE_CUBE_MAP:B.TEXTURE_2D,oA=g.get(IA).__webglTexture;I.bindTexture(SA,oA),G(SA),I.unbindTexture()}}}function kA(y){if(i&&y.samples>0&&cA(y)===!1){const c=y.isWebGLMultipleRenderTargets?y.texture:[y.texture],u=y.width,gA=y.height;let V=B.COLOR_BUFFER_BIT;const IA=[],SA=y.stencilBuffer?B.DEPTH_STENCIL_ATTACHMENT:B.DEPTH_ATTACHMENT,oA=g.get(y),sA=y.isWebGLMultipleRenderTargets===!0;if(sA)for(let KA=0;KA<c.length;KA++)I.bindFramebuffer(B.FRAMEBUFFER,oA.__webglMultisampledFramebuffer),B.framebufferRenderbuffer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+KA,B.RENDERBUFFER,null),I.bindFramebuffer(B.FRAMEBUFFER,oA.__webglFramebuffer),B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0+KA,B.TEXTURE_2D,null,0);I.bindFramebuffer(B.READ_FRAMEBUFFER,oA.__webglMultisampledFramebuffer),I.bindFramebuffer(B.DRAW_FRAMEBUFFER,oA.__webglFramebuffer);for(let KA=0;KA<c.length;KA++){IA.push(B.COLOR_ATTACHMENT0+KA),y.depthBuffer&&IA.push(SA);const bA=oA.__ignoreDepthValues!==void 0?oA.__ignoreDepthValues:!1;if(bA===!1&&(y.depthBuffer&&(V|=B.DEPTH_BUFFER_BIT),y.stencilBuffer&&(V|=B.STENCIL_BUFFER_BIT)),sA&&B.framebufferRenderbuffer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.RENDERBUFFER,oA.__webglColorRenderbuffer[KA]),bA===!0&&(B.invalidateFramebuffer(B.READ_FRAMEBUFFER,[SA]),B.invalidateFramebuffer(B.DRAW_FRAMEBUFFER,[SA])),sA){const X=g.get(c[KA]).__webglTexture;B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,X,0)}B.blitFramebuffer(0,0,u,gA,0,0,u,gA,V,B.NEAREST),t&&B.invalidateFramebuffer(B.READ_FRAMEBUFFER,IA)}if(I.bindFramebuffer(B.READ_FRAMEBUFFER,null),I.bindFramebuffer(B.DRAW_FRAMEBUFFER,null),sA)for(let KA=0;KA<c.length;KA++){I.bindFramebuffer(B.FRAMEBUFFER,oA.__webglMultisampledFramebuffer),B.framebufferRenderbuffer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+KA,B.RENDERBUFFER,oA.__webglColorRenderbuffer[KA]);const bA=g.get(c[KA]).__webglTexture;I.bindFramebuffer(B.FRAMEBUFFER,oA.__webglFramebuffer),B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0+KA,B.TEXTURE_2D,bA,0)}I.bindFramebuffer(B.DRAW_FRAMEBUFFER,oA.__webglMultisampledFramebuffer)}}function qA(y){return Math.min(C.maxSamples,y.samples)}function cA(y){const c=g.get(y);return i&&y.samples>0&&A.has("WEBGL_multisampled_render_to_texture")===!0&&c.__useRenderToTexture!==!1}function rI(y){const c=E.render.frame;e.get(y)!==c&&(e.set(y,c),y.update())}function HA(y,c){const u=y.colorSpace,gA=y.format,V=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||y.format===si||u!==LI&&u!==eg&&(II.getTransfer(u)===DI?i===!1?A.has("EXT_sRGB")===!0&&gA===tg?(y.format=si,y.minFilter=OI,y.generateMipmaps=!1):c=Le.sRGBToLinear(c):(gA!==tg||V!==EC)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",u)),c}this.allocateTextureUnit=L,this.resetTextureUnits=BA,this.setTexture2D=_,this.setTexture2DArray=j,this.setTexture3D=W,this.setTextureCube=v,this.rebindTextures=LA,this.setupRenderTarget=H,this.updateRenderTargetMipmap=fI,this.updateMultisampleRenderTarget=kA,this.setupDepthRenderbuffer=zA,this.setupFrameBufferTexture=MA,this.useMultisampledRTT=cA}function Yw(B,A,I){const g=I.isWebGL2;function C(Q,E=eg){let i;const o=II.getTransfer(E);if(Q===EC)return B.UNSIGNED_BYTE;if(Q===Me)return B.UNSIGNED_SHORT_4_4_4_4;if(Q===Ue)return B.UNSIGNED_SHORT_5_5_5_1;if(Q===Xs)return B.BYTE;if(Q===zs)return B.SHORT;if(Q===Ri)return B.UNSIGNED_SHORT;if(Q===ye)return B.INT;if(Q===gC)return B.UNSIGNED_INT;if(Q===Mg)return B.FLOAT;if(Q===TB)return g?B.HALF_FLOAT:(i=A.get("OES_texture_half_float"),i!==null?i.HALF_FLOAT_OES:null);if(Q===$s)return B.ALPHA;if(Q===tg)return B.RGBA;if(Q===AD)return B.LUMINANCE;if(Q===ID)return B.LUMINANCE_ALPHA;if(Q===UC)return B.DEPTH_COMPONENT;if(Q===oB)return B.DEPTH_STENCIL;if(Q===si)return i=A.get("EXT_sRGB"),i!==null?i.SRGB_ALPHA_EXT:null;if(Q===gD)return B.RED;if(Q===Ne)return B.RED_INTEGER;if(Q===CD)return B.RG;if(Q===Ke)return B.RG_INTEGER;if(Q===Fe)return B.RGBA_INTEGER;if(Q===SE||Q===wE||Q===cE||Q===GE)if(o===DI)if(i=A.get("WEBGL_compressed_texture_s3tc_srgb"),i!==null){if(Q===SE)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(Q===wE)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(Q===cE)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(Q===GE)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=A.get("WEBGL_compressed_texture_s3tc"),i!==null){if(Q===SE)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(Q===wE)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(Q===cE)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(Q===GE)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(Q===Ko||Q===Fo||Q===Jo||Q===Ro)if(i=A.get("WEBGL_compressed_texture_pvrtc"),i!==null){if(Q===Ko)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(Q===Fo)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(Q===Jo)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(Q===Ro)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(Q===Je)return i=A.get("WEBGL_compressed_texture_etc1"),i!==null?i.COMPRESSED_RGB_ETC1_WEBGL:null;if(Q===qo||Q===po)if(i=A.get("WEBGL_compressed_texture_etc"),i!==null){if(Q===qo)return o===DI?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(Q===po)return o===DI?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(Q===Yo||Q===Lo||Q===fo||Q===Ho||Q===uo||Q===mo||Q===To||Q===bo||Q===xo||Q===Oo||Q===_o||Q===Zo||Q===vo||Q===Wo)if(i=A.get("WEBGL_compressed_texture_astc"),i!==null){if(Q===Yo)return o===DI?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(Q===Lo)return o===DI?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(Q===fo)return o===DI?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(Q===Ho)return o===DI?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(Q===uo)return o===DI?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(Q===mo)return o===DI?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(Q===To)return o===DI?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(Q===bo)return o===DI?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(Q===xo)return o===DI?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(Q===Oo)return o===DI?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(Q===_o)return o===DI?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(Q===Zo)return o===DI?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(Q===vo)return o===DI?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(Q===Wo)return o===DI?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(Q===lE||Q===Po||Q===jo)if(i=A.get("EXT_texture_compression_bptc"),i!==null){if(Q===lE)return o===DI?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(Q===Po)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(Q===jo)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(Q===BD||Q===Vo||Q===Xo||Q===zo)if(i=A.get("EXT_texture_compression_rgtc"),i!==null){if(Q===lE)return i.COMPRESSED_RED_RGTC1_EXT;if(Q===Vo)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(Q===Xo)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(Q===zo)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return Q===MC?g?B.UNSIGNED_INT_24_8:(i=A.get("WEBGL_depth_texture"),i!==null?i.UNSIGNED_INT_24_8_WEBGL:null):B[Q]!==void 0?B[Q]:null}return{convert:C}}class Lw extends PI{constructor(A=[]){super(),this.isArrayCamera=!0,this.cameras=A}}class kC extends aI{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fw={type:"move"};class ZE{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kC,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kC,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kC,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(A){return this._targetRay!==null&&this._targetRay.dispatchEvent(A),this._grip!==null&&this._grip.dispatchEvent(A),this._hand!==null&&this._hand.dispatchEvent(A),this}connect(A){if(A&&A.hand){const I=this._hand;if(I)for(const g of A.hand.values())this._getHandJoint(I,g)}return this.dispatchEvent({type:"connected",data:A}),this}disconnect(A){return this.dispatchEvent({type:"disconnected",data:A}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(A,I,g){let C=null,Q=null,E=null;const i=this._targetRay,o=this._grip,t=this._hand;if(A&&I.session.visibilityState!=="visible-blurred"){if(t&&A.hand){E=!0;for(const w of A.hand.values()){const r=I.getJointPose(w,g),h=this._getHandJoint(t,w);r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=r.radius),h.visible=r!==null}const e=t.joints["index-finger-tip"],a=t.joints["thumb-tip"],s=e.position.distanceTo(a.position),n=.02,S=.005;t.inputState.pinching&&s>n+S?(t.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:A.handedness,target:this})):!t.inputState.pinching&&s<=n-S&&(t.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:A.handedness,target:this}))}else o!==null&&A.gripSpace&&(Q=I.getPose(A.gripSpace,g),Q!==null&&(o.matrix.fromArray(Q.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,Q.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(Q.linearVelocity)):o.hasLinearVelocity=!1,Q.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(Q.angularVelocity)):o.hasAngularVelocity=!1));i!==null&&(C=I.getPose(A.targetRaySpace,g),C===null&&Q!==null&&(C=Q),C!==null&&(i.matrix.fromArray(C.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,C.linearVelocity?(i.hasLinearVelocity=!0,i.linearVelocity.copy(C.linearVelocity)):i.hasLinearVelocity=!1,C.angularVelocity?(i.hasAngularVelocity=!0,i.angularVelocity.copy(C.angularVelocity)):i.hasAngularVelocity=!1,this.dispatchEvent(fw)))}return i!==null&&(i.visible=C!==null),o!==null&&(o.visible=Q!==null),t!==null&&(t.visible=E!==null),this}_getHandJoint(A,I){if(A.joints[I.jointName]===void 0){const g=new kC;g.matrixAutoUpdate=!1,g.visible=!1,A.joints[I.jointName]=g,A.add(g)}return A.joints[I.jointName]}}const Hw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,uw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}
