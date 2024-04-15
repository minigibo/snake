(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const L=()=>{const e=document.getElementById("gameGrid");if(!e)return;const o=e.clientWidth,r=e.clientHeight;let n,t;o>=768?(n=22,t=15):(n=10,t=20);const s=o/n,c=r/t;e.style.display="grid",e.style.gridTemplateColumns=`repeat(${n}, ${s}px)`,e.style.gridTemplateRows=`repeat(${t}, ${c}px)`;for(let p=0;p<t;p++)for(let g=0;g<n;g++){const m=document.createElement("div");m.classList.add("gridCell"),m.style.width=`${s}px`,m.style.height=`${c}px`,e.appendChild(m)}},x=()=>{const e=document.querySelectorAll(".gridCell"),o=[];for(let c=0;c<e.length;c++)e[c].classList.contains("snakeSegment")||o.push(c);const r=o[Math.floor(Math.random()*o.length)],n=document.createElement("img");n.src="./Banana.png";const t=e[r];t.classList.add("fruit");const s=window.innerWidth>=768?22:10;t.appendChild(n),t.setAttribute("data-x",(r%s).toString()),t.setAttribute("data-y",Math.floor(r/s).toString())};var i=(e=>(e[e.SPACE=32]="SPACE",e[e.LEFT=37]="LEFT",e[e.UP=38]="UP",e[e.RIGHT=39]="RIGHT",e[e.DOWN=40]="DOWN",e))(i||{});let d=null,a=null,l=[],f=0,u=200;const w=()=>({numColumns:window.innerWidth>=768?22:10,numRows:window.innerWidth>=768?15:20}),y=()=>{document.addEventListener("keydown",e=>{switch(e.keyCode){case i.SPACE:E(i.RIGHT),H(),document.removeEventListener("keydown",y);break}})},E=e=>{const o=document.querySelector(".play");o&&(o.style.display="none",b(e))},b=e=>{d!==null&&clearInterval(d),a=e,l=[];const o=0,r=3,n=3;for(let t=0;t<n;t++)l.push({x:o+t,y:r});d=setInterval(C,u),document.addEventListener("keydown",I)},I=e=>{switch(e.keyCode){case i.LEFT:a!==i.RIGHT&&(a=i.LEFT);break;case i.RIGHT:a!==i.LEFT&&(a=i.RIGHT);break;case i.UP:a!==i.DOWN&&(a=i.UP);break;case i.DOWN:a!==i.UP&&(a=i.DOWN);break}},C=()=>{const{numColumns:e,numRows:o}=w(),r=l[0];let n={x:r.x,y:r.y};switch(a){case i.LEFT:n.x-=1;break;case i.RIGHT:n.x+=1;break;case i.UP:n.y-=1;break;case i.DOWN:n.y+=1;break}if(n.x<0||n.x>=e||n.y<0||n.y>=o){O();return}const t=v();t&&n.x===t.x&&n.y===t.y?(l.unshift({x:t.x,y:t.y}),P(),T(),x(),l.unshift(n),l.pop(),h(),u-=5,clearInterval(d),d=setInterval(C,u)):(l.unshift(n),l.pop(),h(),D())},h=()=>{const e=document.querySelectorAll(".gridCell"),o=window.innerWidth>=768?22:10;e.forEach(r=>r.classList.remove("snakeSegment","snakeHead")),l.forEach((r,n)=>{const t=r.y*o+r.x,s=e[t];s.classList.add("snakeSegment"),n===0&&s.classList.add("snakeHead")})},v=()=>{const e=document.querySelector(".gridCell.fruit");if(e){const o=parseInt(e.getAttribute("data-x")||"0",10),r=parseInt(e.getAttribute("data-y")||"0",10);return{x:o,y:r}}else return null},P=()=>{const e=document.querySelector(".gridCell.fruit");e&&(e.classList.remove("fruit"),e.innerHTML="")},S=()=>{const e=document.querySelector(".score");e&&(e.textContent=`SCORE: ${f}`)},T=()=>{f+=1,S()},H=()=>{f=0,u=200,S()},D=()=>{if(l.length<=3)return!1;const e=l[0],o=l.slice(1);for(const r of o)e.x===r.x&&e.y===r.y&&k()},k=()=>{const e=document.querySelector(".play");e&&(e.style.display="flex",e.style.flexDirection="column",e.textContent=`Snake-ception achieved! Your score: ${f}`,clearInterval(d),document.addEventListener("keydown",y),u=200,e.insertAdjacentHTML("beforeend","<p>Press space to play again</p>"))},O=()=>{const e=document.querySelector(".play");e&&(e.style.display="flex",e.style.flexDirection="column",e.textContent=`Splatttt! Your score: ${f}`,clearInterval(d),document.addEventListener("keydown",y),u=200,e.insertAdjacentHTML("beforeend","<p>Press space to play again</p>"))};L();y();x();v();
