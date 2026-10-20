/* ---------- content: edit here ---------- */
const SOCIAL=[
 {id:"x",name:"X",url:"https://x.com/openfortsec",cls:"x",blurb:"Security news, short takes and new Insights posts."},
 {id:"ig",name:"Instagram",url:"https://www.instagram.com/openfortsec",cls:"ig",blurb:"Company updates and behind-the-scenes from OpenFortSec."}
];

/* People: add real people here. Same role + same level = shown side by side. */
const PEOPLE={
 william:{name:"William",initial:"W",badge:"Founder",roles:["Founder","Chairman","CEO"],bio:"William founded OpenFortSec and leads the company as Chairman and Chief Executive Officer, setting its strategy and direction and running it day to day.",expertise:[],linkedin:""}
};
/* Org levels, top to bottom. Each group is one role; list everyone who shares it. */
const ORG=[
 {id:"exec",level:"Our team",desc:"The people building OpenFortSec",groups:[{role:"Founder",people:["william"],title:"Founder, Chairman & Chief Executive Officer"}]}
];

const INSIGHTS=[
 ["Cybersecurity news","What is happening in the threat landscape and why it matters to your organisation."],
 ["Vulnerability research","Analysis of newly disclosed weaknesses, who they affect and how to respond."],
 ["Technical write-ups","Detailed walkthroughs of techniques, tools and defensive configurations."],
 ["Security best practices","Practical guidance for strengthening everyday defences."],
 ["Threat intelligence","Emerging threats and attacker behaviour, and how to prepare for them."],
 ["Cloud and network security","Securing modern infrastructure, from cloud accounts to network edges."],
 ["Educational guides","Clear explainers for readers who are new to security."]
];

const D={ /* service diagrams: stroke-based line art, 200x200 */
consulting:`<svg viewBox="0 0 200 200" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M30 160h40v-35h40V90h40V50" /><circle cx="30" cy="160" r="6" fill="currentColor"/><circle cx="110" cy="125" r="6"/><circle cx="150" cy="90" r="6"/><path d="M140 50h20M150 40v20" /><path d="M30 175h140" stroke-opacity=".55"/></svg>`,
"penetration-testing":`<svg viewBox="0 0 200 200" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M60 80V40h110v120H60v-40" stroke-opacity=".6"/><path d="M20 100h70l20-30h30" stroke-dasharray="6 8"/><circle cx="20" cy="100" r="6" fill="currentColor"/><circle cx="148" cy="70" r="12"/><circle cx="148" cy="70" r="4" fill="currentColor"/></svg>`,
"vulnerability-assessments":`<svg viewBox="0 0 200 200" fill="none" stroke="currentColor" stroke-width="3"><g stroke-opacity=".6"><rect x="35" y="35" width="30" height="30" rx="4"/><rect x="85" y="35" width="30" height="30" rx="4"/><rect x="35" y="85" width="30" height="30" rx="4"/><rect x="135" y="85" width="30" height="30" rx="4"/><rect x="85" y="135" width="30" height="30" rx="4"/><rect x="135" y="135" width="30" height="30" rx="4"/></g><rect x="135" y="35" width="30" height="30" rx="4" fill="currentColor"/><rect x="85" y="85" width="30" height="30" rx="4" fill="currentColor" fill-opacity=".5"/><rect x="35" y="135" width="30" height="30" rx="4" fill="currentColor" fill-opacity=".25"/></svg>`,
"security-auditing":`<svg viewBox="0 0 200 200" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><rect x="45" y="25" width="110" height="150" rx="8" stroke-opacity=".65"/><path d="m65 65 8 8 14-16M65 105l8 8 14-16M65 145l8 8 14-16"/><path d="M100 68h35M100 108h35M100 148h20" stroke-opacity=".5"/></svg>`,
"cloud-security":`<svg viewBox="0 0 200 200" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M55 140a30 30 0 0 1 4-60 40 40 0 0 1 76-8 32 32 0 0 1 10 68Z" stroke-opacity=".65"/><circle cx="80" cy="115" r="7" fill="currentColor"/><circle cx="120" cy="100" r="7"/><circle cx="140" cy="125" r="7"/><path d="M87 112l26-9M126 105l9 13"/></svg>`,
"network-security":`<svg viewBox="0 0 200 200" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><rect x="20" y="40" width="70" height="120" rx="8" stroke-opacity=".6"/><rect x="110" y="40" width="70" height="120" rx="8" stroke-opacity=".6"/><circle cx="55" cy="75" r="8" fill="currentColor"/><circle cx="55" cy="125" r="8"/><circle cx="145" cy="100" r="8" fill="currentColor"/><path d="M63 75l74 25M63 125l40-14" /><path d="M100 30v140" stroke-dasharray="4 7"/></svg>`,
"incident-response":`<svg viewBox="0 0 200 200" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M20 120h160" stroke-opacity=".6"/><path d="M20 120h30l12-50 16 90 14-60 10 20h78"/><circle cx="62" cy="70" r="7" fill="currentColor"/><path d="M110 60v-20M150 60v-20" stroke-opacity=".5"/><circle cx="150" cy="120" r="7" fill="currentColor"/></svg>`,
"security-architecture":`<svg viewBox="0 0 200 200" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"><path d="M100 30 170 65 100 100 30 65Z" fill="currentColor" fill-opacity=".9"/><path d="M30 100l70 35 70-35" /><path d="M30 135l70 35 70-35" stroke-opacity=".65"/></svg>`
};

const SI={consulting:"compass","penetration-testing":"cross","vulnerability-assessments":"search","security-auditing":"gov","cloud-security":"cloud","network-security":"net","incident-response":"bell","security-architecture":"layers"};
const S=[
{slug:"consulting",name:"Cybersecurity Consulting",short:"Guidance on building a security programme that fits your organisation.",
 overview:"Independent advice on where your security stands, where it needs to be and how to get there in sensible steps.",
 problems:[["No clear picture", "You don’t know where your biggest security risks are.", "We map your risks and rank them."], ["Money in the wrong places", "Security spending isn’t linked to real threats.", "We tie every recommendation to a real risk."], ["Unsure where to start", "There’s a lot to do and no obvious first step.", "You get a step-by-step roadmap."]],
 involves:["Interviews with key people and a review of existing controls","Assessment of risks against your business priorities","A prioritised roadmap with realistic timescales"],
 deliverables:["A written assessment of current security posture","A prioritised improvement roadmap","A presentation of findings to leadership"],
 suits:"Organisations without a dedicated security lead, or those wanting an independent view before making investment decisions."},
{slug:"penetration-testing",name:"Penetration Testing",short:"Authorised, controlled testing that shows how an attacker could get in.",
 overview:"We simulate the techniques real attackers use, under strict rules of engagement, to show which weaknesses can actually be exploited.",
 problems:[["Hidden weaknesses", "Flaws an attacker could exploit in your apps or systems.", "We find them first, safely and with permission."], ["Untested defences", "Your security has never faced a realistic attack.", "We test it under controlled conditions."], ["Customers asking for proof", "Clients or partners want evidence of independent testing.", "You get a report you can share."]],
 involves:["Agreeing scope, timing and rules of engagement in writing","Manual and tool-assisted testing within those limits","Careful handling of any data or access obtained"],
 deliverables:["An executive summary for decision-makers","Detailed technical findings with evidence and risk ratings","Remediation guidance and an optional retest"],
 suits:"Organisations launching new systems, making significant changes or needing assurance for customers and partners."},
{slug:"vulnerability-assessments",name:"Vulnerability Assessments",short:"Systematic identification and prioritisation of weaknesses across your systems.",
 overview:"A broad, structured review that finds known weaknesses across your estate and ranks them so effort goes where it matters.",
 problems:[["Forgotten systems", "Unpatched or misconfigured systems you don’t know about.", "We find them and list them."], ["Too many alerts", "Lots of issues and no way to tell which ones matter.", "We rank every finding by real risk."], ["Unknown exposure", "It’s unclear what can be seen from the internet.", "We show you what an attacker can see."]],
 involves:["Building an inventory of in-scope systems","Scanning and manual validation to remove false positives","Ranking findings by severity and business impact"],
 deliverables:["A prioritised list of verified vulnerabilities","Practical remediation steps for each finding","Recommendations for ongoing vulnerability management"],
 suits:"Organisations wanting a regular, broad view of their weaknesses, or a starting point before deeper testing."},
{slug:"security-auditing",name:"Security Auditing",short:"Independent review of controls, configuration and policy against good practice.",
 overview:"We check how your security controls are designed and operated, and whether they match your policies and recognised good practice.",
 problems:[["Policy vs practice", "What’s written down doesn’t match what really happens.", "We check how your controls actually work."], ["Scrutiny coming up", "Certification or customer due diligence is on the way.", "We help you prepare with evidence."], ["Controls that don’t work", "Controls exist on paper but aren’t effective.", "We test them and flag the gaps."]],
 involves:["Reviewing policies, procedures and configuration","Sampling evidence that controls are operating","Comparing results against an agreed reference framework"],
 deliverables:["An audit report with observations and gaps","A gap analysis against the chosen framework","Recommendations to close each gap"],
 suits:"Organisations preparing for certification, responding to customer questionnaires or checking their controls are effective."},
{slug:"cloud-security",name:"Cloud Security",short:"Secure configuration and review of cloud environments and identities.",
 overview:"A review of how your cloud environments are configured, who can access what, and where misconfiguration creates risk.",
 problems:[["Too much access", "People and services can do more than they need to.", "We tighten permissions."], ["Accidental exposure", "Storage or services are open to the internet by mistake.", "We find them and help you close them."], ["Inconsistent setup", "Each account or environment is configured differently.", "We set secure baselines for all of them."]],
 involves:["Reviewing identity and access management","Checking configuration against security baselines","Assessing logging, monitoring and data protection"],
 deliverables:["A list of misconfigurations ranked by risk","Recommended configuration changes","Guidance on guardrails to prevent recurrence"],
 suits:"Organisations running workloads in public cloud, especially after rapid growth or migration."},
{slug:"network-security",name:"Network Security",short:"Assessment and hardening of network design, access and monitoring.",
 overview:"We assess how your network is designed, segmented and monitored, and how an intruder could move through it.",
 problems:[["Flat network", "One break-in could reach everything.", "We recommend how to separate key systems."], ["Weak entry points", "Remote access and firewall rules have drifted over time.", "We review and harden them."], ["No visibility", "Suspicious activity could go unnoticed.", "We help you improve monitoring."]],
 involves:["Reviewing network architecture and segmentation","Assessing firewall rules, remote access and exposed services","Evaluating logging and detection coverage"],
 deliverables:["Findings on design, configuration and exposure","Hardening recommendations in priority order","Suggested improvements to monitoring"],
 suits:"Organisations with on-premises or hybrid networks, or those planning a network redesign."},
{slug:"incident-response",name:"Incident Response",short:"Preparation and support for detecting, containing and recovering from incidents.",
 overview:"Help to prepare for security incidents before they happen, with a plan your team can follow under pressure.",
 problems:[["No plan", "There are no agreed steps for when something goes wrong.", "We write a clear response plan."], ["Unclear roles", "People don’t know who does what in a crisis.", "We define roles and contacts."], ["Missing evidence", "Logs aren’t available when you need them.", "We make sure the right data is kept."]],
 involves:["Reviewing current readiness and logging","Writing or improving an incident response plan","Running tabletop exercises with your team"],
 deliverables:["An incident response plan and playbooks","Exercise results with lessons learned","Recommendations to improve detection and recovery"],
 suits:"Organisations that want to be prepared for an incident, or that have recently had one and want to improve."},
{slug:"security-architecture",name:"Security Architecture",short:"Designing systems with security built in from the beginning.",
 overview:"We review designs for new and changing systems so security is built in rather than added afterwards.",
 problems:[["Security as an afterthought", "New systems are designed without security input.", "We review designs early."], ["Late, costly fixes", "Problems surface near launch, when they’re expensive.", "We catch them at the design stage."], ["Inconsistent patterns", "Each team solves security differently.", "We give you reusable patterns."]],
 involves:["Reviewing designs, data flows and trust boundaries","Threat modelling key components","Recommending patterns and controls that fit the design"],
 deliverables:["A design review with risks and recommendations","A threat model for the reviewed system","Reusable security patterns for future projects"],
 suits:"Organisations building new products or platforms, or making major architectural changes."}
];

/* ---------- rendering ---------- */
const $=s=>document.querySelector(s)||document.createElement("div");
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const ext='target="_blank" rel="noopener noreferrer"';
const handle=u=>"@"+u.replace(/\/$/,"").split("/").pop();

$("#svc-panel").innerHTML=S.map(s=>`<a href="${s.slug}.html"><b>${esc(s.name)}</b><span>${esc(s.short)}</span></a>`).join("")+`<a class="all" href="services.html">All services</a>`;
$("#f-svc").innerHTML=S.map(s=>`<li><a href="${s.slug}.html">${esc(s.name)}</a></li>`).join("");
$("#f-soc").innerHTML=SOCIAL.map(s=>`<li><a ${ext} href="${s.url}" aria-label="OpenFortSec on ${s.name}"><svg aria-hidden="true"><use href="#${s.id}"/></svg></a></li>`).join("");
const TICK='<svg aria-hidden="true" viewBox="0 0 24 24"><path d="m5 12.5 4.5 4.5L19 7.5" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
$("#svlist").innerHTML=S.map((s,i)=>{const k=[1,0,2,3,4,5,6,7][i];s=S[k];return `<a class="scard spot rv${i%2?" d1":""}${i===0?" feat":i===7?" feat rev":""}" href="${s.slug}.html"><div class="sart" aria-hidden="true"><span class="sic"><svg><use href="#i-${SI[s.slug]}"/></svg></span>${D[s.slug]}</div><div class="sbody"><h2>${esc(s.name)}</h2><p>${esc(i===0||i===7?s.overview:s.short)}</p><ul>${s.deliverables.slice(0,i===0||i===7?3:2).map(d=>`<li>${TICK}${esc(d)}</li>`).join("")}</ul><span class="more">Explore ${esc(s.name.toLowerCase())}<svg><use href="#chev"/></svg></span></div></a>`}).join("");
function art(n){const W=320,H=200;let m="";
 if(n===0){for(let i=0;i<6;i++)m+=`<rect x="36" y="${44+i*20}" width="${[180,240,150,220,120,200][i]}" height="6" rx="3" fill="#cfe3ff" opacity="${i?0.35:0.9}"/>`;m+=`<circle cx="262" cy="64" r="22" fill="none" stroke="#7cc4ff" stroke-width="3"/><circle cx="262" cy="64" r="6" fill="#7cc4ff"/>`}
 else if(n===1){for(let x=0;x<7;x++)for(let y=0;y<4;y++){const hot=x===4&&y===1;m+=`<rect x="${40+x*36}" y="${36+y*34}" width="26" height="24" rx="4" fill="${hot?"#1a6ff0":"#cfe3ff"}" opacity="${hot?1:0.22}"/>`}m+=`<circle cx="197" cy="82" r="30" fill="none" stroke="#7cc4ff" stroke-width="2.5"/>`}
 else if(n===2){m+=`<rect x="70" y="40" width="150" height="120" rx="8" fill="#cfe3ff" opacity=".15"/><rect x="100" y="56" width="150" height="120" rx="8" fill="#163a66" stroke="#7cc4ff" stroke-width="2"/>`;for(let i=0;i<4;i++)m+=`<rect x="118" y="${78+i*20}" width="${[96,112,70,100][i]}" height="6" rx="3" fill="#cfe3ff" opacity=".6"/>`}
 else if(n===3){for(let i=0;i<3;i++){m+=`<circle cx="70" cy="${60+i*42}" r="13" fill="#1a6ff0"/><path d="m63 ${60+i*42} 5 5 9-10" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><rect x="98" y="${57+i*42}" width="${[170,130,150][i]}" height="7" rx="3.5" fill="#cfe3ff" opacity=".45"/>`}}
 else if(n===4){m+=`<g fill="none" stroke="#7cc4ff">${[30,60,90].map(r=>`<circle cx="160" cy="100" r="${r}" opacity=".5"/>`).join("")}</g><path d="M160 100 L235 60 A90 90 0 0 1 250 100Z" fill="#1a6ff0" opacity=".55"/><circle cx="205" cy="70" r="5" fill="#fff"/><circle cx="110" cy="130" r="4" fill="#7cc4ff"/>`}
 else if(n===5){const P=[[60,60],[130,120],[200,50],[260,130],[110,170],[230,180]];[[0,1],[1,2],[2,3],[1,4],[3,5],[4,5]].forEach(([a,b])=>m+=`<line x1="${P[a][0]}" y1="${P[a][1]}" x2="${P[b][0]}" y2="${P[b][1]}" stroke="#7cc4ff" stroke-width="2" opacity=".55"/>`);P.forEach((p,i)=>m+=`<circle cx="${p[0]}" cy="${p[1]}" r="${i===1?11:7}" fill="${i===1?"#1a6ff0":"#cfe3ff"}"/>`)}
 else{for(let i=0;i<4;i++)m+=`<rect x="${60+i*52}" y="${150-i*28}" width="44" height="${20+i*28}" rx="4" fill="${i===3?"#1a6ff0":"#cfe3ff"}" opacity="${i===3?1:.3+i*.12}"/>`}
 return `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet" aria-hidden="true"><defs><linearGradient id="ag${n}_${++artN}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#14365f"/><stop offset="1" stop-color="#0b1d33"/></linearGradient></defs><rect width="${W}" height="${H}" fill="url(#ag${n}_${artN})"/>${m}</svg>`}
let artN=0;const insRow=(i)=>{const n=INSIGHTS.indexOf(i);return `<li><div class="thumb">${art(n)}</div><div><h3>${esc(i[0])}</h3><p>${esc(i[1])}</p></div></li>`};
$("#ins-home").innerHTML=INSIGHTS.slice(0,4).map(insRow).join("");
$("#ins-all").innerHTML=INSIGHTS.map((i,n)=>`<article class="card2 icard spot rv${n%3?" d"+(n%3):""}${n===0||n===6?" wide":""}"><div class="cban" aria-hidden="true">${art(n)}</div><div class="cb"><h3>${esc(i[0])}</h3><p>${esc(i[1])}</p></div></article>`).join("");
const LG=document.querySelector(".brand img").getAttribute("src");
$("#social").innerHTML=SOCIAL.map((s,i)=>`<a class="pcard ${s.cls} rv${i?" d1":""}" ${ext} href="${s.url}" aria-label="Follow OpenFortSec on ${s.name} (${handle(s.url)})"><div class="pban" aria-hidden="true"><span class="plat"><svg><use href="#${s.id}"/></svg>Official account</span><svg class="wm"><use href="#${s.id}"/></svg></div><div class="pbody"><div class="ptop"><div class="pav">${s.cls==="ig"?`<span><img src="${LG}" alt=""></span>`:`<img src="${LG}" alt="">`}</div><span class="fbtn">Follow</span></div><h2>OpenFortSec</h2><p class="hd">${handle(s.url)}</p><p class="bio">${esc(s.blurb)}</p><ul class="pmeta"><li><svg><use href="#i-lock"/></svg>Cybersecurity</li><li><svg><use href="#${s.cls==="x"?"i-doc":"i-bell"}"/></svg>${s.cls==="x"?"Security news":"Company updates"}</li></ul></div></a>`).join("");

function personHTML(id,title){const p=PEOPLE[id];
 const chips=(p.roles||[]).map(x=>`<li><svg><use href="#i-user"/></svg>${esc(x)}</li>`).join("")+p.expertise.map(e=>`<li><svg><use href="#i-target"/></svg>${esc(e)}</li>`).join("");
 return `<article class="fcard spot"><div class="fban" aria-hidden="true"><span class="plat">${esc(p.badge||"Team")}</span><img src="${document.querySelector('.brand img').getAttribute('src')}" alt=""></div><div class="fbody"><div class="fav" aria-hidden="true">${esc(p.initial)}</div><h3>${esc(p.name)}</h3><p class="ptitle">${esc(title)}</p><p class="bio">${esc(p.bio)}</p>${chips?`<ul class="pmeta">${chips}</ul>`:""}${p.linkedin?`<p style="margin:18px 0 0"><a class="li" ${ext} href="${p.linkedin}"><svg aria-hidden="true"><use href="#li"/></svg>LinkedIn profile</a></p>`:""}</div></article>`}
$("#lead-prev").innerHTML=personHTML("william","Founder, Chairman & CEO");
$("#org").innerHTML=ORG.map(t=>t.link?`<div class="link-down rv"><span>${esc(t.link)}</span></div>`:
 `<section class="tier ${t.id} rv" aria-labelledby="t-${t.id}"><div class="tierhead"><h2 id="t-${t.id}">${esc(t.level)}</h2><p>${esc(t.desc)}</p></div><div class="tierbox"><div class="groups">${t.groups.map(g=>`<div class="group"><h3>${esc(g.people.length>1?g.plural||g.role+"s":g.role)}</h3><div class="people">${g.people.map(id=>personHTML(id,g.title||g.role)).join("")}</div></div>`).join("")}</div></div></section>`).join("")
 ;



/* cursor spotlight */
document.addEventListener("pointermove",e=>{const el=e.target.closest&&e.target.closest(".spot");if(!el)return;const b=el.getBoundingClientRect();el.style.setProperty("--mx",(e.clientX-b.left)+"px");el.style.setProperty("--my",(e.clientY-b.top)+"px")});
/* illustrative terminal */
(function(){const el=document.getElementById("term");if(!el)return;
 const L=[["p","$ "],["","openfortsec assess --scope example.org\n"],["ok","✓ "],["","Scope confirmed: 3 domains, 12 hosts\n"],["p","→ "],["","Mapping exposed services\n"],["p","→ "],["","Testing authentication controls\n"],["w","! "],["","1 high, 3 medium findings\n"],["ok","✓ "],["","Report drafted for review\n"]];
 const full=L.map(([c,s])=>c?`<span class="${c}">${s}</span>`:esc(s)).join("");
 if(matchMedia("(prefers-reduced-motion: reduce)").matches){el.innerHTML=full;return}
 let seg=0,ch=0;const cur='<span class="cur"></span>';
 function tick(){if(seg>=L.length){el.innerHTML=full+cur;setTimeout(()=>{seg=0;ch=0;tick()},4200);return}
  const [c,s]=L[seg];ch++;
  const done=L.slice(0,seg).map(([c2,s2])=>c2?`<span class="${c2}">${s2}</span>`:esc(s2)).join("");
  const part=s.slice(0,ch);el.innerHTML=done+(c?`<span class="${c}">${part}</span>`:esc(part))+cur;
  if(ch>=s.length){seg++;ch=0;setTimeout(tick,c?60:s.endsWith("\n")?420:30)}else setTimeout(tick,seg===1?38:16)}
 tick()})();
/* isometric illustration */
function isoSVG(uid){const s=46,c=Math.cos(Math.PI/6),sn=.5,P=(x,y,z)=>[(x-y)*c*s,(x+y)*sn*s-z*s],pt=a=>a.map(p=>p.map(v=>v.toFixed(1)).join(",")).join(" ");
 let o="",pts=[];
 const box=(x,y,z,w,d,h,top,lft,rgt)=>{const A=P(x,y+d,z),B=P(x+w,y+d,z),C=P(x+w,y,z),T1=P(x,y,z+h),T2=P(x+w,y,z+h),T3=P(x+w,y+d,z+h),T4=P(x,y+d,z+h),A2=P(x,y+d,z+h),B2=P(x+w,y+d,z+h),C2=P(x+w,y,z+h);
  pts.push(A,B,C,T1,T2,T3,T4);
  o+=`<polygon points="${pt([P(x,y+d,z),P(x+w,y+d,z),B2,A2])}" fill="${lft}"/><polygon points="${pt([P(x+w,y,z),P(x+w,y+d,z),B2,C2])}" fill="${rgt}"/><polygon points="${pt([T1,T2,T3,T4])}" fill="${top}"/>`};
 box(-.6,-.6,-.3,5.6,2.4,.3,"#eaf1fd","#c3d5f2","#a9c2ea");
 const racks=[[0,0],[1.75,0],[3.5,0]];
 racks.forEach(([x,y],k)=>{box(x,y,0,1.2,1.2,k===1?2.6:2.1,"#2a4a75","#163659","#0f2944");
  const h=k===1?2.6:2.1;for(let z=.35;z<h-.2;z+=.38){const a=P(x+.15,y+1.2,z),b=P(x+.85,y+1.2,z);o+=`<line x1="${a[0].toFixed(1)}" y1="${a[1].toFixed(1)}" x2="${b[0].toFixed(1)}" y2="${b[1].toFixed(1)}" stroke="#2f5888" stroke-width="3" stroke-linecap="round"/>`;const l=P(x+1.02,y+1.2,z);o+=`<circle class="led" cx="${l[0].toFixed(1)}" cy="${(l[1]).toFixed(1)}" r="2.6" style="animation-delay:${((x+z)*.7%2.4).toFixed(2)}s"/>`}});
 const t0=P(.6,.6,2.1),t1=P(2.35,.6,2.6),t2=P(4.1,.6,2.1);
 o+=`<path class="flow" d="M${t0[0].toFixed(1)} ${t0[1].toFixed(1)} Q${((t0[0]+t1[0])/2).toFixed(1)} ${(t1[1]-30).toFixed(1)} ${t1[0].toFixed(1)} ${t1[1].toFixed(1)} T${t2[0].toFixed(1)} ${t2[1].toFixed(1)}" fill="none" stroke="#1a6ff0" stroke-width="2" stroke-dasharray="5 5"/>`;
 const lg=P(2.35,.6,4.1),sh=P(2.35,.6,2.6);
 o+=`<ellipse cx="${sh[0].toFixed(1)}" cy="${sh[1].toFixed(1)}" rx="30" ry="9" fill="#1a6ff0" opacity=".25"/><image class="fl" href="${document.querySelector('.brand img').getAttribute('src')}" x="${(lg[0]-34).toFixed(1)}" y="${(lg[1]-40).toFixed(1)}" width="68" height="68"/>`;
 pts.push([lg[0]-40,lg[1]-50]);
 const xs=pts.map(p=>p[0]),ys=pts.map(p=>p[1]),mx=Math.min(...xs)-10,my=Math.min(...ys)-10,W=Math.max(...xs)-mx+10,H=Math.max(...ys)-my+10;
 return `<svg viewBox="${mx.toFixed(0)} ${my.toFixed(0)} ${W.toFixed(0)} ${H.toFixed(0)}" role="img" aria-label="Illustration of server infrastructure protected by OpenFortSec">${o}</svg>`}
["iso1","iso2"].forEach(id=>{const el=document.getElementById(id);if(el)el.innerHTML=isoSVG(id)});
/* hero network map */
(function(){
 const cx=280,cy=240,nodes=[["Cloud",-90],["Applications",-30],["Endpoints",30],["Data",90],["Identity",150],["Network",210]];
 let lines="",pk="",labels="";
 nodes.forEach(([n,a],i)=>{const r=a*Math.PI/180,x=cx+212*Math.cos(r),y=cy+200*Math.sin(r),ix=cx+150*Math.cos(r),iy=cy+150*Math.sin(r);
  lines+=`<line x1="${x.toFixed(1)}" y1="${y.toFixed(1)}" x2="${ix.toFixed(1)}" y2="${iy.toFixed(1)}"/>`;
  pk+=`<circle class="pk" r="3.5" style="offset-path:path('M${x.toFixed(1)} ${y.toFixed(1)} L${ix.toFixed(1)} ${iy.toFixed(1)}');animation-delay:${(i*.8).toFixed(1)}s"/>`;
  const ax=Math.cos(r)>.3?"start":Math.cos(r)<-.3?"end":"middle",lx=x+Math.cos(r)*16,ly=y+Math.sin(r)*16+(Math.sin(r)>.5?10:Math.sin(r)<-.5?-2:4);
  labels+=`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="7" fill="#0b1d33" stroke="#7cc4ff" stroke-width="2"/><text class="lbl" x="${lx.toFixed(1)}" y="${ly.toFixed(1)}" text-anchor="${ax}">${n}</text>`});
 $("#map").innerHTML=`<svg viewBox="0 0 560 480" role="img" aria-label="Diagram of an organisation's attack surface (cloud, applications, endpoints, data, identity and network) surrounded by layered defences">
 <g fill="none" stroke="#7cc4ff">
 <circle cx="${cx}" cy="${cy}" r="150" stroke-opacity=".5" stroke-dasharray="3 9" class="spin"/>
 <circle cx="${cx}" cy="${cy}" r="118" stroke-opacity=".55"/>
 <circle cx="${cx}" cy="${cy}" r="88" stroke-opacity=".7"/>
 <circle cx="${cx}" cy="${cy}" r="88" stroke-opacity=".6" class="pulse"/>
 <g stroke-opacity=".6" stroke-dasharray="3 6">${lines}</g></g>
 ${pk}${labels}
 <image class="core" href="logo.webp" x="${cx-56}" y="${cy-56}" width="112" height="112"/></svg>`;
})();

/* service explorer tabs */
const tabs=$("#tabs"),tp=$("#tp");
tabs.innerHTML=S.map((s,i)=>`<button role="tab" id="tab-${s.slug}" aria-controls="tp" aria-selected="${i===0}" tabindex="${i===0?0:-1}"><svg aria-hidden="true"><use href="#i-${SI[s.slug]}"/></svg>${esc(s.name)}</button>`).join("");
function showTab(i,focus){const s=S[i];
 [...tabs.children].forEach((b,j)=>{b.setAttribute("aria-selected",j===i);b.tabIndex=j===i?0:-1});
 tp.setAttribute("aria-labelledby","tab-"+s.slug);
 tp.innerHTML=`<div><h3>${esc(s.name)}</h3><p class="lead">${esc(s.overview)}</p><ul>${s.deliverables.map(d=>`<li>${esc(d)}</li>`).join("")}</ul><a class="btn" href="${s.slug}.html">About ${esc(s.name.toLowerCase())}</a></div><div class="dia" aria-hidden="true">${D[s.slug]}</div>`;
 tp.classList.remove("swap");void tp.offsetWidth;tp.classList.add("swap");
 if(focus)tabs.children[i].focus()}
tabs.addEventListener("click",e=>{const b=e.target.closest("button");if(b)showTab([...tabs.children].indexOf(b))});
tabs.addEventListener("keydown",e=>{const i=[...tabs.children].indexOf(document.activeElement);if(i<0)return;
 const k={ArrowDown:1,ArrowRight:1,ArrowUp:-1,ArrowLeft:-1}[e.key];
 if(k){e.preventDefault();showTab((i+k+S.length)%S.length,true)}else if(e.key==="Home"){e.preventDefault();showTab(0,true)}else if(e.key==="End"){e.preventDefault();showTab(S.length-1,true)}});
showTab(0);

/* service detail page */
function socIcons(){return SOCIAL.map(s=>`<a ${ext} href="${s.url}" aria-label="OpenFortSec on ${s.name}"><svg aria-hidden="true"><use href="#${s.id}"/></svg></a>`).join("")}
document.querySelectorAll(".closing .sicons").forEach(e=>e.innerHTML=socIcons());
function renderService(s){const pg=$("#svc-page");
 pg.dataset.title=`${s.name} | OpenFortSec`;pg.dataset.desc=`${s.overview}`;
 pg.innerHTML=`<section class="phd svc dark"><div class="wrap"><div><p class="crumb"><a href="index.html">Home</a> / <a href="services.html">Services</a> / ${esc(s.name)}</p><h1>${esc(s.name)}</h1><p class="lead">${esc(s.overview)}</p><div class="acts"><a class="btn" href="find-us.html">Discuss ${esc(s.name.toLowerCase())}</a></div></div><div class="dia" aria-hidden="true">${D[s.slug]}</div></div></section>
 <section class="sec off"><div class="wrap detail"><div>
 <section class="dblock rv"><h2>Problems it addresses</h2><div class="pfx-head" aria-hidden="true"><span>The problem</span><span>How we help</span></div><div class="pfx">${s.problems.map(([h,d,fx])=>`<div class="pfx-row"><div class="pfx-p"><span class="icn" aria-hidden="true"><svg><use href="#i-warn"/></svg></span><div><h3>${esc(h)}</h3><p>${esc(d)}</p></div></div><div class="pfx-a" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 12h13m-5-6 6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg></div><div class="pfx-s"><span class="icn" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="m5 12.5 4.5 4.5L19 7.5" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg></span><p><span class="sr">How we help: </span>${esc(fx)}</p></div></div>`).join("")}</div></section>
 <section class="dblock rv"><h2>What the engagement involves</h2><div class="stepc">${s.involves.map(p=>`<div><p>${esc(p)}</p></div>`).join("")}</div></section>
 <section class="dblock rv"><h2>What you receive</h2><div class="cgrid">${s.deliverables.map((p,i)=>`<div class="card2 spot"><div class="cban" style="height:110px" aria-hidden="true"><svg class="bigi" style="width:44px;height:44px"><use href="#i-${["doc","search","gov"][i%3]}"/></svg></div><div class="cb" style="padding:20px 22px 22px"><p style="color:var(--ink);font-weight:500">${esc(p)}</p></div></div>`).join("")}</div></section>
 <section class="dblock rv" style="margin:0"><h2>Who it is for</h2><div class="who"><span class="icn" aria-hidden="true"><svg><use href="#i-user"/></svg></span><p>${esc(s.suits)}</p></div></section>
 </div><aside class="rv d1" aria-label="Enquire and other services"><div class="sticky">
 <div class="acard spot"><span class="icn" aria-hidden="true"><svg><use href="#i-${SI[s.slug]}"/></svg></span><h3>Talk to us about ${esc(s.name.toLowerCase())}</h3><p>Reach OpenFortSec through our official channels to discuss scope and timing.</p><a class="btn" href="find-us.html">Find Us</a><div class="sicons"><span>Or follow us</span>${socIcons()}</div></div>
 <nav class="ocard" aria-label="Other services"><h3>All services</h3>${S.map(o=>`<a href="${o.slug}.html"${o.slug===s.slug?' aria-current="page"':""}><svg aria-hidden="true"><use href="#i-${SI[o.slug]}"/></svg>${esc(o.name)}</a>`).join("")}</nav>
 </div></aside></div></section>`;
 observe(pg)}

/* reveal on scroll */
const motion=!matchMedia("(prefers-reduced-motion: reduce)").matches&&"IntersectionObserver" in window;
const io=motion?new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{rootMargin:"0px 0px -8% 0px",threshold:.08}):null;
function observe(root){root.querySelectorAll(".rv:not(.in)").forEach(el=>io?io.observe(el):el.classList.add("in"));
 const st=root.querySelector("#steps");if(st&&io)io.observe(st);else if(st)st.classList.add("in")}

/* nav, dropdown, router */
const mb=$(".menu"),list=$("#nav-list"),dd=$(".dd>button"),panel=$("#svc-panel"),desc=$('meta[name=description]');
function closeDD(){panel.classList.remove("open");dd.setAttribute("aria-expanded","false")}
dd.addEventListener("click",e=>{e.stopPropagation();const o=!panel.classList.contains("open");panel.classList.toggle("open",o);dd.setAttribute("aria-expanded",o)});
document.addEventListener("click",e=>{if(!e.target.closest(".dd"))closeDD()});
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&panel.classList.contains("open")){closeDD();dd.focus()}});
mb.addEventListener("click",()=>{const o=list.classList.toggle("open");mb.setAttribute("aria-expanded",o);mb.textContent=o?"Close":"Menu"});
const pages=[...document.querySelectorAll(".page")];
function route(){
 const parts=location.hash.replace(/^#\/?/,"").split("/").filter(Boolean);let key=parts[0]||"",p;
 if(key==="services"&&parts[1]){const s=S.find(x=>x.slug===parts[1]);if(s){renderService(s);p=$("#svc-page")}}
 else p=pages.find(x=>x.dataset.route===key&&key!=="service"&&key!=="404");
 if(!p)p=pages.find(x=>x.dataset.route==="404");
 pages.forEach(x=>x.classList.toggle("on",x===p));
 document.title=p.dataset.title.replace(/&amp;/g,"&");desc.content=p.dataset.desc;
 document.querySelectorAll("[data-nav]").forEach(a=>{const on=a.dataset.nav===key;if(a.tagName==="A")on?a.setAttribute("aria-current","page"):a.removeAttribute("aria-current");else a.classList.toggle("cur",on)});
 closeDD();list.classList.remove("open");mb.setAttribute("aria-expanded","false");mb.textContent="Menu";
 window.scrollTo(0,0);if(location.hash)$("#main").focus({preventScroll:true});
 observe(p)}
observe(document.querySelector(".page.on")||document.body);
