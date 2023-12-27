import{_ as r,o as h,c as p,a,r as u,F as m,b as e,u as y,d as _,e as w,w as i,t as k,f as t,g as v,p as b,h as K}from"./index.9658aa62.js";const x={},j={class:"q"},q=e(" Q: "),z=e(" A: ");function S(d,f){return h(),p(m,null,[a("div",j,[q,u(d.$slots,"q",{},void 0,!0)]),a("div",null,[z,u(d.$slots,"default",{},void 0,!0)])],64)}const s=r(x,[["render",S],["__scopeId","data-v-02dd3424"]]),C={setup(){return{gameStore:y()}},props:{nodeKey:Number}};function P(d,f,c,l,Zt,eo){const g=_("RouterLink");return h(),w(g,{tag:"a",to:{path:"./",hash:"#node"+c.nodeKey}},{default:i(()=>[e(k(l.gameStore.plantzoneName(c.nodeKey)),1)]),_:1},8,["to"])}const o=r(C,[["render",P]]),n=d=>(b("data-v-f34cd813"),d=d(),K(),d),W={class:"about"},A=n(()=>a("h2",null,"Q&A",-1)),M=e(" What is the purpose of this project? "),I=e(" Optimize your "),E=n(()=>a("a",{href:"https://discord.com/channels/371035077037129729/404532586246045696"},"#worker-empire",-1)),U=e(" to bring more silver. "),B=e(" How to use? "),L=e(" First of all go to "),$=n(()=>a("strong",{class:"notranslate"},"Settings",-1)),H=e(", select your server and tax. After that, two options are available: "),T=n(()=>a("li",null,[e("Quick and simple: do nothing and just look at "),a("strong",{class:"notranslate"},"Plantzones"),e(" page - nodes at the top are good, nodes at the bottom are bad. Use Plantzones page if just starting out.")],-1)),N=n(()=>a("li",null,[e("Personalized and nuanced: go to "),a("strong",{class:"notranslate"},"Home"),e(" page, select a town, hire a worker, send to whatever node gives highest efficiency, repeat. Use Home page if you want to improve or rework an existing empire.")],-1)),V=e(" Is there any video or guide? "),R=n(()=>a("a",{href:"https://youtu.be/EknUHU1Lvq0"},"Setup and Usage by Yura",-1)),F=e(", "),Q=n(()=>a("a",{href:"https://youtu.be/sEHK7cX4SIE"},"Best Workers Video by Summer",-1)),G=e(" How do i make an empire optimized for cooking/alchemy? "),O=e(" Only difference is you don't tax cooking/alchemy mats. "),Y=e(" What does "),D=n(()=>a("strong",{class:"notranslate"},"+efficiency",-1)),X=e(" column mean and why is it always negative for me? "),J=e(" It shows the change in total efficiency (M$/day/CP) of the empire after starting this job with this worker. It being always negative is good - means you already own all the best nodes, so remaining ones are less efficient. You want to spend all available CP anyway, so just select those that are least negative (= highest in list). "),Z=e(" Why are node connections so bad? When building path from town "),ee=n(()=>a("strong",{class:"notranslate"},"A",-1)),te=e(" to node "),oe=n(()=>a("strong",{class:"notranslate"},"B",-1)),ae=e(", it ignores the fact that there is already taken node "),ne=n(()=>a("strong",{class:"notranslate"},"C",-1)),ie=e(" on the way. "),de=e(" Connections are resolved in same order the jobs were given. The worker who received the job first doesn't know yet about all others, and builds connection in a beeline. Each next worker sees and uses more and more connections made by previous workers in queue. You can push the worker at "),se=n(()=>a("strong",{class:"notranslate"},"B",-1)),le=e(" to the end of queue by restarting his job. His connection will then be built last, with full knowledge of previous connections including the one that activated "),ce=n(()=>a("strong",{class:"notranslate"},"C",-1)),re=e(". "),he=e(" Where does the drop data come from and how old? "),fe=e(" Unlucky drops up to Eternal Winter: from an anonymous source somewhere on the internet, timestamped late 2021. I checked ~50 top profit nodes ingame and they matched, so the rest are assumed good. Might have changed in the meantime."),ue=n(()=>a("br",null,null,-1)),pe=e(" Unlucky drops in Eternal Winter: observed near mid 2022."),_e=n(()=>a("br",null,null,-1)),ve=e(" Lucky drops across all regions: observed in june 2023."),ge=n(()=>a("br",null,null,-1)),me=e(" Morning Land drops: observed at summer 2023 - regular nodes are fine, excavations are approximate, too rare to judge confidently "),ye=n(()=>a("li",null,[e("circumstantial evidence added in for more volume: "),a("a",{href:"https://discord.com/channels/371035077037129729/404532586246045696/1126036873450631198"},"1"),e(", "),a("a",{href:"https://discord.com/channels/371035077037129729/404532586246045696/1142011540648763403"},"2")],-1)),we=e(" Also, it is currently unclear how giant bonus interacts with sacks - giants bring just a bit more (but stastically significant) sacks than theoretically expected, reason unknown "),ke=v('<h2 data-v-f34cd813>Tips &amp; tricks</h2><ul style="padding-left:16px;" data-v-f34cd813><li data-v-f34cd813><details data-v-f34cd813><summary data-v-f34cd813>Anywhere you see a right facing triangle, click to expand</summary> click again to hide </details></li><li data-v-f34cd813>Also hover over <abbr class="tooltip" title="water is wet" data-v-f34cd813>\u2139\uFE0F</abbr>&#39;s and other <abbr class="tooltip" title="roses are blue" data-v-f34cd813>dot-underlined</abbr> things to see useful info</li><li data-v-f34cd813>Spend some time on item valuation on Settings page: set <strong class="notranslate" data-v-f34cd813>Custom</strong> value above market price for bottlenecked stuff, reduce the value for mats you don&#39;t want</li><li data-v-f34cd813>Home page &gt; <strong class="notranslate" data-v-f34cd813>Empire</strong> pane has some useful stats. Get rid of <strong class="notranslate" data-v-f34cd813>Worst Taken</strong> and acquire <strong class="notranslate" data-v-f34cd813>Best Untaken</strong></li><li data-v-f34cd813>Use <strong class="notranslate" data-v-f34cd813>optimize</strong> button inside a working worker&#39;s editor and see what skills to roll to maximize profit, then <strong class="notranslate" data-v-f34cd813>revert</strong> back</li><ul data-v-f34cd813><li data-v-f34cd813>if you&#39;re not max level though, level up with \u{1F815} button first to see what the &quot;endgame&quot; optimal skills are as opposed to currently optimal skills</li><li data-v-f34cd813>you can also change the type of worker here and the stats will be recalculated as if levelled from scratch with same stat rolls</li></ul><li data-v-f34cd813>If you have nodes invested for grinding, mark them with <strong class="notranslate" data-v-f34cd813>zero-cost connection</strong> checkbox - this will make nearby plantzones more desirable</li><ul data-v-f34cd813><li data-v-f34cd813>just like with ordinary nodes, order matters - if they don&#39;t want to chain properly, try to reorder (ex: activate Olun before Crypt). Order is shown in <strong class="notranslate" data-v-f34cd813>Total CP</strong> pane</li><li data-v-f34cd813>if a zero-cost connects to a wrong town, assign a whole chain of zero-costs along the path you want (usually just 1 dummy halfway is enough)</li></ul><li data-v-f34cd813>Use <strong class="notranslate" data-v-f34cd813>import</strong> and <strong class="notranslate" data-v-f34cd813>export</strong> buttons in <strong class="notranslate" data-v-f34cd813>All towns/workers list</strong> to: <ul data-v-f34cd813><li data-v-f34cd813>compare different builds</li><li data-v-f34cd813>restore to a known state when messed up</li><li data-v-f34cd813>share your setup with other people</li><li data-v-f34cd813>pull actual worker stats from your PC (ty @Aman, @Thell, @Sbreeng, @thirtyeight):</li><ul data-v-f34cd813><li data-v-f34cd813>download and install <a href="https://www.python.org/" data-v-f34cd813>Python</a> 3.9+</li><li data-v-f34cd813>download the <a href="https://pastebin.com/yuQQmFDW" data-v-f34cd813>Import Script</a>, and run it through Python</li><li data-v-f34cd813>now head back to Workerman Home page &gt; All towns/workers list &gt; import the json file you just created by running the script</li></ul><li data-v-f34cd813>warning: if the amount of workers you have ingame is outside the F2P town limits, enter P2W lodging in town config <u data-v-f34cd813>before</u> importing, or the housing will not resolve</li></ul></li><li data-v-f34cd813>Workloads (and therefore profits) depend on <strong class="notranslate" data-v-f34cd813>Modifiers</strong>. The default value works well for highly contested nodes (they are popular for a reason - you probably want them too). Some niche nodes however can report up to 2x higher profit if you enter their real Modifiers. <ul data-v-f34cd813><li data-v-f34cd813>Each green bar ingame does not belong to single resource node, but to a piece of land (aka RegionGroup), which may can contain multiple resource nodes, so they share the modifier</li><li data-v-f34cd813>If you want to be really meticulous about it, switch to floating modifiers (in Modifiers &gt; Advanced) and track the ingame modifiers change over time. More observations - more accuracy</li><ul data-v-f34cd813><li data-v-f34cd813>With floating modifier, daily profit is calculated via the chance of reaching relevant workload breakpoints on each cycle. Detailed view available in edit worker dialog</li><li data-v-f34cd813>Workloads shown in ~XXX format refer to median (50% chance) value. This is for reference only and is not used in profit calculations, the whole dataset is</li><li data-v-f34cd813>You can specify to use either constant or floating modifier for each RegionGroup</li></ul></ul></li></ul><h2 data-v-f34cd813>Changelog</h2><li data-v-f34cd813>added JP language</li>',4),be=e("[2023-11-08 patch] replaced junk yields with ores at "),Ke=n(()=>a("summary",null,"10 excavation nodes. yields are approximate",-1)),xe=e(", "),je=e(", "),qe=e(", "),ze=e(", "),Se=e(", "),Ce=e(", "),Pe=e(", "),We=e(", "),Ae=e(", "),Me=e("[2023-11-08 patch] increased lumbering byproducts yields by set multipliers at "),Ie=n(()=>a("summary",null,"17 lumbering nodes",-1)),Ee=e(", "),Ue=e(", "),Be=e(", "),Le=e(", "),$e=e(", "),He=e(", "),Te=e(", "),Ne=e(", "),Ve=e(", "),Re=e(", "),Fe=e(", "),Qe=e(", "),Ge=e(", "),Oe=e(", "),Ye=e(", "),De=e(", "),Xe=n(()=>a("li",null,"[2023-11-01 patch] increased all trace yields",-1)),Je=n(()=>a("summary",null,"Main continent: x2",-1)),Ze=e(", "),et=e(", "),tt=e(", "),ot=e(", "),at=e(", "),nt=e(", "),it=e(", "),dt=e(", "),st=e(", "),lt=e(", "),ct=e(", "),rt=e(", "),ht=e(", "),ft=e(", "),ut=e(", "),pt=n(()=>a("summary",null,"Morningland: x5",-1)),_t=e(", "),vt=e(", "),gt=e(", "),mt=e(", "),yt=n(()=>a("li",null,"[2023-11-01 patch] increased all sap yields",-1)),wt=n(()=>a("summary",null,"Maple & Pine Sap: x1.5",-1)),kt=e(", "),bt=e(", "),Kt=e(", "),xt=n(()=>a("summary",null,"Snowfield Cedar Sap: x5",-1)),jt=e(", "),qt=n(()=>a("summary",null,"Other Sap: x2",-1)),zt=e(", "),St=e(", "),Ct=e(", "),Pt=e(", "),Wt=e(", "),At=e(", "),Mt=e(", "),It=e(", "),Et=e(", "),Ut=e(", "),Bt=e(", "),Lt=e(", "),$t=e(", "),Ht=e(", "),Tt=e(", "),Nt=e(", "),Vt=e(", "),Rt=e(", "),Ft=e(", "),Qt=e(", "),Gt=v(`<li data-v-f34cd813>implemented manual output redirection (available at any worker level for easier prototyping)</li><li data-v-f34cd813>added separate VP setting to add 16 P2W slots to every town</li><li data-v-f34cd813>[2023-05-31 patch] new luck drops (current version: 12 aka the final one. data collection stopped)</li><ul data-v-f34cd813><li data-v-f34cd813>all nodes of kind 4 (plant growing): all luck drops replaced with item 1024</li><li data-v-f34cd813>all nodes of kind 6 (plant gathering): all luck drops replaced with item 1024</li><li data-v-f34cd813>all nodes of kind 7 (mining): all luck drops replaced with item 1025</li><li data-v-f34cd813>all nodes of kind 8 (lumbering): all luck drops replaced with items 5005, 5006, 5007, 5008, 5011</li><li data-v-f34cd813>all nodes of kind 11 (dried fish): all luck drops replaced with items 1027, 6501</li><li data-v-f34cd813>all nodes of kind 15 (excavation): all luck drops replaced with item 1026</li><li data-v-f34cd813>nodes 1675, 1677, 1776: unlucky drop increased to 8 (maybe happened earlier, didn&#39;t pay attention)</li><li data-v-f34cd813>nodes 1565, 1779: added 2x luck procs</li></ul><li data-v-f34cd813>[2023-08-23 patch] added new region with 0 plantzones</li><li data-v-f34cd813>added KR language</li><li data-v-f34cd813>[2023-03-10 patch] item 4206 yields tripled at 3 plantzones</li><li data-v-f34cd813>housing config &gt; items are now sorted exactly as ingame</li><li data-v-f34cd813>home page &gt; added worker icon, level, and optional stat rank (also always shown in editor)</li><li data-v-f34cd813>added lodgage costs to Empire &gt; Best Untaken</li><li data-v-f34cd813>skip unknown (event?) plantzone jobs when importing - will display as an idle worker instead</li><li data-v-f34cd813>Empire &gt; Best Untaken selects best species automatically</li><li data-v-f34cd813>[2023-06-05 patch] added node 1833</li><li data-v-f34cd813>[2023-05-31 patch] big rework</li><ul data-v-f34cd813><li data-v-f34cd813>level cap 40, +2 skill slots</li><li data-v-f34cd813>humans got +3 luck</li><li data-v-f34cd813>giants got +68.4% yield of <s data-v-f34cd813>all</s> all unlucky drops, rounded down</li></ul><li data-v-f34cd813>fixed warehouse slot calculations to require lucky items too + 1 slot required to be free</li><li data-v-f34cd813>[2023-06-14 patch] added LotML region with 24 nodes</li><li data-v-f34cd813>in darkmode, buttons are now actually dark</li><li data-v-f34cd813>[2023-05-31 patch] added sack items with auto-calculated prices</li><ul data-v-f34cd813><li data-v-f34cd813>item 1024 = equal chance of 1x any fruit</li><li data-v-f34cd813>item 1025 = equal chance of 1x any gem</li><li data-v-f34cd813>item 1026 = equal chance of 1x any trace</li><li data-v-f34cd813>item 1027 = equal chance of 1x any coral</li></ul><li data-v-f34cd813>you don&#39;t buy houses anymore, optimal lodging &amp; storage provided automatically</li><ul data-v-f34cd813><li data-v-f34cd813>check town <strong class="notranslate" data-v-f34cd813>config</strong> to see which houses to buy</li><li data-v-f34cd813>be careful to not exceed the town limits, profits will show <strong class="notranslate" data-v-f34cd813>NaN</strong>&#39;s and <strong class="notranslate" data-v-f34cd813>?</strong>&#39;s if you do, and whole town marked red in town list</li><li data-v-f34cd813>for easier prototyping, idle workers do not consume lodging</li></ul><li data-v-f34cd813>[2023-05-03 patch] reduced 10 fences cost to 80 CP</li><li data-v-f34cd813>reimplemented workshop jobs to stay after worker reimport</li><ul data-v-f34cd813><li data-v-f34cd813>each house can be set up in <strong class="notranslate" data-v-f34cd813>Settings &gt; Workshops config</strong> and stored separately from worker data</li><li data-v-f34cd813>previously assigned <strong class="notranslate" data-v-f34cd813>\u{1F3ED}Workshop</strong> jobs have been converted into <strong class="notranslate" data-v-f34cd813>\u270D\uFE0FCustom</strong> jobs</li></ul><li data-v-f34cd813>on town/node click, map pans to its location</li><li data-v-f34cd813>removed 13 nodes that are invisible ingame</li><li data-v-f34cd813>added a ranking of untaken nodes in Empire pane</li><li data-v-f34cd813>[2023-02-21 patch] updated node CP costs</li><li data-v-f34cd813>job efficiency now includes lodging cost: eff = income / (connectionCost + lodgingCost)</li><ul data-v-f34cd813><li data-v-f34cd813>lodging costs are shared proportionally to job income values, same way as connections</li></ul><li data-v-f34cd813>added more worker types + seamless transition between</li><li data-v-f34cd813>can specify a zero-cost connection in node properties (when invested for droprate)</li><li data-v-f34cd813>individual plantzone efficiency via cashflow</li><ul data-v-f34cd813><li data-v-f34cd813>ex: if a connection node is simultaneously used by a 4M$/day job and a 1M$/day job, they own it in 80/20 fashion</li></ul><li data-v-f34cd813>added farming and workshop job types in Send Worker dialog</li><li data-v-f34cd813>/plantzones page tweaks</li><ul data-v-f34cd813><li data-v-f34cd813>node name link navigates to its map location (upd: with permalinks)</li><li data-v-f34cd813>item link navigates to its settings price row</li><li data-v-f34cd813>shows item names to allow in-browser search</li><li data-v-f34cd813>selects nearest town by CP instead of distance</li></ul><li data-v-f34cd813>removed Blue Maned Lion&#39;s Manor</li><li data-v-f34cd813>~floating modifiers support</li><li data-v-f34cd813>selecting a node highlights connection path</li><li data-v-f34cd813>worker job assignment moves to the end of connection queue</li><li data-v-f34cd813>worker editor: added button to suggest best skills for current job</li><li data-v-f34cd813>map: color active/inactive links</li><li data-v-f34cd813>updated connection algorithm to encourage existing paths reuse</li><li data-v-f34cd813>[2022-10-26 patch] updated house CP costs</li><li data-v-f34cd813>worker revert button, plantzone luck effect indicator</li><li data-v-f34cd813>configurable default worker for hire</li><li data-v-f34cd813>send worker dialog: show worker stats</li><li data-v-f34cd813>worker editor: when on job, show profit changes while editing</li><li data-v-f34cd813>node info: show/edit the workload modifier</li><li data-v-f34cd813>Ancado lodging now requires other town connection (nearest chosen automatically)</li><li data-v-f34cd813>added nodes 911..914 &amp; 1604 (ty @Ayashi)</li><li data-v-f34cd813>added total daily items summary</li><li data-v-f34cd813>added workers+lodging import/export to json file</li><li data-v-f34cd813>[2022-09-21 patch] updated several node distances</li><li data-v-f34cd813>added worker management</li><li data-v-f34cd813>combined repeated items in node 1035 (ty @Yazel)</li><li data-v-f34cd813>[2022-08-31 patch] modified nodes 463 &amp; 487 for lucky drop 5422 instead of 5402</li><h2 data-v-f34cd813>Todo</h2><li data-v-f34cd813>Plantzones page &gt; add town filter</li><li data-v-f34cd813>need to rethink default &quot;random art gob&quot; hire since gobs are not BiS anymore</li><li data-v-f34cd813>totals &gt; split out personal items storage CP</li><li data-v-f34cd813>handle lodging/storage in steps (like in AstroAllano&#39;s sheet) instead of linear sharing</li><ul data-v-f34cd813><li data-v-f34cd813>same idea with connections</li></ul><li data-v-f34cd813>worker editor &gt; hide charkeys not hireable in current town</li><li data-v-f34cd813>smart worker\u2194job rearrangement within a town</li><ul data-v-f34cd813><li data-v-f34cd813>take both innate stat, current skills and potential reroll prospects into account</li></ul><li data-v-f34cd813>on first run, pick server using geoip</li><li data-v-f34cd813>some of morningland workers&#39; levelup stats still unknown, using values from older regions</li><li data-v-f34cd813>[2023-05-31 patch]</li><ul data-v-f34cd813><li data-v-f34cd813>implement species-restricted plantzones and workshops</li></ul><li data-v-f34cd813>when exporting/importing, show what exactly is being -ported (maybe even choose?)</li><li data-v-f34cd813>remote town workshop job should require a connection</li><li data-v-f34cd813>+1/+3 pack_xxx skills should improve profit when packing</li><ul data-v-f34cd813><li data-v-f34cd813>add +1 skills</li></ul><li data-v-f34cd813>add intracity distances for workshops (currently all 0) (use notes at bottom)</li><ul data-v-f34cd813><li data-v-f34cd813>show real house positions in housecraft viewer</li></ul><li data-v-f34cd813>when optimizing skills, try to keep new skill of same type at same position as old one</li><ul data-v-f34cd813><li data-v-f34cd813>don&#39;t optimize +2 wspd into +2 wspd with no benefit</li></ul><li data-v-f34cd813>find a consistent fast way to build optimal connections (orderless)</li><li data-v-f34cd813>add lodgage support to workshop system</li><li data-v-f34cd813>on item icon hover: show name and price</li><li data-v-f34cd813>workerlist: show drops instead of pzname</li><li data-v-f34cd813>grade towns/workers graphically with bar charts</li><li data-v-f34cd813>map tweaks <ul data-v-f34cd813><li data-v-f34cd813>node hover: highlight potential path to town</li><li data-v-f34cd813>save zoom too in addition to pos</li><li data-v-f34cd813>deal with missing tiles</li><li data-v-f34cd813>a setting to hide all inactive elements</li></ul></li><li data-v-f34cd813>profit calculation: include feed cost</li><li data-v-f34cd813>map: optionally show RegionGroups</li><li data-v-f34cd813>unify strings - Erdal Farm shows &quot;gathering&quot; while ingame workerlist shows &quot;silk production&quot;</li><li data-v-f34cd813>introduce skill roll chances somehow</li><ul data-v-f34cd813><li data-v-f34cd813>help decide which skills should and should not be rerolled?</li><li data-v-f34cd813>ex: for existing worker skill, show if it&#39;s going to get better or worse after 5 rerolls</li></ul><li data-v-f34cd813>detect unsellable items using current market offers divided by lifetime volume</li><ul data-v-f34cd813><li data-v-f34cd813>different items have different lifetime though</li></ul><li data-v-f34cd813>detect and apply price floors and ceilings (\xB17.5%)</li><li data-v-f34cd813>show market fetch timestamp</li><h2 data-v-f34cd813>Notes</h2><pre class="fsxs" data-v-f34cd813>1-5-2 / hk=2557     
cal 278 (s curve, left, down)
efer 2223
val 16808

1-1-3 / hk=2603    
cal 43 (right next to town centre)
efer 2031
val 16617

2-4-1 / hk=3012
val 150
cal 16535
efer 17949</pre><h2 data-v-f34cd813>Misc</h2>`,98),Ot=e("House Usage"),Yt=e("HouseCraft Viewer"),Dt=e("Droprates"),Xt=e("All Towns Lodging (deprecated)"),Jt={__name:"AboutView",setup(d){return(f,c)=>{const l=_("RouterLink");return h(),p("div",W,[A,t(s,null,{q:i(()=>[M]),default:i(()=>[I,E,U]),_:1}),t(s,null,{q:i(()=>[B]),default:i(()=>[L,$,H,T,N]),_:1}),t(s,null,{q:i(()=>[V]),default:i(()=>[R,F,Q]),_:1}),t(s,null,{q:i(()=>[G]),default:i(()=>[O]),_:1}),t(s,null,{q:i(()=>[Y,D,X]),default:i(()=>[J]),_:1}),t(s,null,{q:i(()=>[Z,ee,te,oe,ae,ne,ie]),default:i(()=>[de,se,le,ce,re]),_:1}),t(s,null,{q:i(()=>[he]),default:i(()=>[fe,ue,pe,_e,ve,ge,me,ye,we]),_:1}),ke,a("li",null,[be,a("details",null,[Ke,t(o,{nodeKey:144}),xe,t(o,{nodeKey:480}),je,t(o,{nodeKey:488}),qe,t(o,{nodeKey:842}),ze,t(o,{nodeKey:902}),Se,t(o,{nodeKey:912}),Ce,t(o,{nodeKey:1220}),Pe,t(o,{nodeKey:1553}),We,t(o,{nodeKey:1687}),Ae,t(o,{nodeKey:1688})])]),a("li",null,[Me,a("details",null,[Ie,t(o,{nodeKey:142}),Ee,t(o,{nodeKey:167}),Ue,t(o,{nodeKey:183}),Be,t(o,{nodeKey:455}),Le,t(o,{nodeKey:464}),$e,t(o,{nodeKey:834}),He,t(o,{nodeKey:855}),Te,t(o,{nodeKey:905}),Ne,t(o,{nodeKey:908}),Ve,t(o,{nodeKey:952}),Re,t(o,{nodeKey:1212}),Fe,t(o,{nodeKey:1215}),Qe,t(o,{nodeKey:1216}),Ge,t(o,{nodeKey:1219}),Oe,t(o,{nodeKey:1777}),Ye,t(o,{nodeKey:1820}),De,t(o,{nodeKey:1821})])]),Xe,a("ul",null,[a("li",null,[a("details",null,[Je,t(o,{nodeKey:144}),Ze,t(o,{nodeKey:480}),et,t(o,{nodeKey:488}),tt,t(o,{nodeKey:842}),ot,t(o,{nodeKey:902}),at,t(o,{nodeKey:912}),nt,t(o,{nodeKey:1220}),it,t(o,{nodeKey:1553}),dt,t(o,{nodeKey:1637}),st,t(o,{nodeKey:1687}),lt,t(o,{nodeKey:1688}),ct,t(o,{nodeKey:1709}),rt,t(o,{nodeKey:1716}),ht,t(o,{nodeKey:1720}),ft,t(o,{nodeKey:1770}),ut,t(o,{nodeKey:1778})])]),a("li",null,[a("details",null,[pt,t(o,{nodeKey:1807}),_t,t(o,{nodeKey:1808}),vt,t(o,{nodeKey:1809}),gt,t(o,{nodeKey:1823}),mt,t(o,{nodeKey:1830})])])]),yt,a("ul",null,[a("li",null,[a("details",null,[wt,t(o,{nodeKey:443}),kt,t(o,{nodeKey:910}),bt,t(o,{nodeKey:1216}),Kt,t(o,{nodeKey:1685})])]),a("li",null,[a("details",null,[xt,t(o,{nodeKey:1771}),jt,t(o,{nodeKey:1780})])]),a("li",null,[a("details",null,[qt,t(o,{nodeKey:160}),zt,t(o,{nodeKey:840}),St,t(o,{nodeKey:901}),Ct,t(o,{nodeKey:903}),Pt,t(o,{nodeKey:907}),Wt,t(o,{nodeKey:1212}),At,t(o,{nodeKey:1215}),Mt,t(o,{nodeKey:1219}),It,t(o,{nodeKey:1502}),Et,t(o,{nodeKey:1504}),Ut,t(o,{nodeKey:1512}),Bt,t(o,{nodeKey:1516}),Lt,t(o,{nodeKey:1526}),$t,t(o,{nodeKey:1635}),Ht,t(o,{nodeKey:1638}),Tt,t(o,{nodeKey:1683}),Nt,t(o,{nodeKey:1684}),Vt,t(o,{nodeKey:1686}),Rt,t(o,{nodeKey:1712}),Ft,t(o,{nodeKey:1715}),Qt,t(o,{nodeKey:1560})])])]),Gt,a("p",null,[t(l,{to:"/workshops"},{default:i(()=>[Ot]),_:1})]),a("p",null,[t(l,{to:"/housecraft"},{default:i(()=>[Yt]),_:1})]),a("p",null,[t(l,{to:"/droprates"},{default:i(()=>[Dt]),_:1})]),a("p",null,[t(l,{to:"/lodging"},{default:i(()=>[Xt]),_:1})])])}}},oo=r(Jt,[["__scopeId","data-v-f34cd813"]]);export{oo as default};