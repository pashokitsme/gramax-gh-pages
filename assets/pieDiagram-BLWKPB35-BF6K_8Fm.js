import{p as U}from"./chunk-BAOP5US2-B8wQezhL.js";import{W as y,N as z,az as j,B as q,p as H,q as Z,s as J,g as K,c as Q,b as X,_ as u,l as W,v as Y,d as tt,D as et,H as at,a4 as rt,k as nt}from"./mermaid.core-DitX4JIy.js";import{p as it}from"./gitGraph-YCYPL57B-D87Z_kaD.js";import{d as P}from"./arc-DkqkpdK5.js";import{o as st}from"./ordinal-BENe2yWM.js";import"./index-CacRQlqH.js";import"./index-cO1ESdvl.js";import"./reduce-GgDlLckI.js";import"./min-dQcCcD2f.js";import"./clone-B0v_hRHM.js";import"./init-Gi6I4Gst.js";function ot(t,a){return a<t?-1:a>t?1:a>=t?0:NaN}function lt(t){return t}function ct(){var t=lt,a=ot,m=null,s=y(0),d=y(z),x=y(0);function i(e){var r,l=(e=j(e)).length,c,A,h=0,p=new Array(l),n=new Array(l),v=+s.apply(this,arguments),w=Math.min(z,Math.max(-z,d.apply(this,arguments)-v)),f,T=Math.min(Math.abs(w)/l,x.apply(this,arguments)),$=T*(w<0?-1:1),g;for(r=0;r<l;++r)(g=n[p[r]=r]=+t(e[r],r,e))>0&&(h+=g);for(a!=null?p.sort(function(S,D){return a(n[S],n[D])}):m!=null&&p.sort(function(S,D){return m(e[S],e[D])}),r=0,A=h?(w-l*$)/h:0;r<l;++r,v=f)c=p[r],g=n[c],f=v+(g>0?g*A:0)+$,n[c]={data:e[c],index:r,value:g,startAngle:v,endAngle:f,padAngle:T};return n}return i.value=function(e){return arguments.length?(t=typeof e=="function"?e:y(+e),i):t},i.sortValues=function(e){return arguments.length?(a=e,m=null,i):a},i.sort=function(e){return arguments.length?(m=e,a=null,i):m},i.startAngle=function(e){return arguments.length?(s=typeof e=="function"?e:y(+e),i):s},i.endAngle=function(e){return arguments.length?(d=typeof e=="function"?e:y(+e),i):d},i.padAngle=function(e){return arguments.length?(x=typeof e=="function"?e:y(+e),i):x},i}var R=q.pie,F={sections:new Map,showData:!1,config:R},b=F.sections,G=F.showData,pt=structuredClone(R),ut=u(()=>structuredClone(pt),"getConfig"),dt=u(()=>{b=new Map,G=F.showData,Y()},"clear"),gt=u(({label:t,value:a})=>{b.has(t)||(b.set(t,a),W.debug(`added new section: ${t}, with value: ${a}`))},"addSection"),ft=u(()=>b,"getSections"),mt=u(t=>{G=t},"setShowData"),ht=u(()=>G,"getShowData"),I={getConfig:ut,clear:dt,setDiagramTitle:H,getDiagramTitle:Z,setAccTitle:J,getAccTitle:K,setAccDescription:Q,getAccDescription:X,addSection:gt,getSections:ft,setShowData:mt,getShowData:ht},vt=u((t,a)=>{U(t,a),a.setShowData(t.showData),t.sections.map(a.addSection)},"populateDb"),St={parse:u(async t=>{const a=await it("pie",t);W.debug(a),vt(a,I)},"parse")},yt=u(t=>`
  .pieCircle{
    stroke: ${t.pieStrokeColor};
    stroke-width : ${t.pieStrokeWidth};
    opacity : ${t.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${t.pieOuterStrokeColor};
    stroke-width: ${t.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${t.pieTitleTextSize};
    fill: ${t.pieTitleTextColor};
    font-family: ${t.fontFamily};
  }
  .slice {
    font-family: ${t.fontFamily};
    fill: ${t.pieSectionTextColor};
    font-size:${t.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${t.pieLegendTextColor};
    font-family: ${t.fontFamily};
    font-size: ${t.pieLegendTextSize};
  }
`,"getStyles"),xt=yt,At=u(t=>{const a=[...t.entries()].map(s=>({label:s[0],value:s[1]})).sort((s,d)=>d.value-s.value);return ct().value(s=>s.value)(a)},"createPieArcs"),wt=u((t,a,m,s)=>{W.debug(`rendering pie chart
`+t);const d=s.db,x=tt(),i=et(d.getConfig(),x.pie),e=40,r=18,l=4,c=450,A=c,h=at(a),p=h.append("g");p.attr("transform","translate("+A/2+","+c/2+")");const{themeVariables:n}=x;let[v]=rt(n.pieOuterStrokeWidth);v??=2;const w=i.textPosition,f=Math.min(A,c)/2-e,T=P().innerRadius(0).outerRadius(f),$=P().innerRadius(f*w).outerRadius(f*w);p.append("circle").attr("cx",0).attr("cy",0).attr("r",f+v/2).attr("class","pieOuterCircle");const g=d.getSections(),S=At(g),D=[n.pie1,n.pie2,n.pie3,n.pie4,n.pie5,n.pie6,n.pie7,n.pie8,n.pie9,n.pie10,n.pie11,n.pie12],C=st(D);p.selectAll("mySlices").data(S).enter().append("path").attr("d",T).attr("fill",o=>C(o.data.label)).attr("class","pieCircle");let N=0;g.forEach(o=>{N+=o}),p.selectAll("mySlices").data(S).enter().append("text").text(o=>(o.data.value/N*100).toFixed(0)+"%").attr("transform",o=>"translate("+$.centroid(o)+")").style("text-anchor","middle").attr("class","slice"),p.append("text").text(d.getDiagramTitle()).attr("x",0).attr("y",-(c-50)/2).attr("class","pieTitleText");const M=p.selectAll(".legend").data(C.domain()).enter().append("g").attr("class","legend").attr("transform",(o,k)=>{const E=r+l,_=E*C.domain().length/2,B=12*r,V=k*E-_;return"translate("+B+","+V+")"});M.append("rect").attr("width",r).attr("height",r).style("fill",C).style("stroke",C),M.data(S).append("text").attr("x",r+l).attr("y",r-l).text(o=>{const{label:k,value:E}=o.data;return d.getShowData()?`${k} [${E}]`:k});const L=Math.max(...M.selectAll("text").nodes().map(o=>o?.getBoundingClientRect().width??0)),O=A+e+r+l+L;h.attr("viewBox",`0 0 ${O} ${c}`),nt(h,c,O,i.useMaxWidth)},"draw"),Dt={draw:wt},Nt={parser:St,db:I,renderer:Dt,styles:xt};export{Nt as diagram};
