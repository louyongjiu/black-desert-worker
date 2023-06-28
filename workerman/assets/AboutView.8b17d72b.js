import{_ as r,o as c,c as h,a as e,r as d,F as b,b as a,d as i,w as o,e as v,f as p,p as g,g as m}from"./index.9c8dfa0e.js";const w={},f={class:"q"},k=a(" Q: "),_=a(" A: ");function y(n,u){return c(),h(b,null,[e("div",f,[k,d(n.$slots,"q",{},void 0,!0)]),e("div",null,[_,d(n.$slots,"default",{},void 0,!0)])],64)}const l=r(w,[["render",y],["__scopeId","data-v-02dd3424"]]),t=n=>(g("data-v-a954a09b"),n=n(),m(),n),x={class:"about"},j=t(()=>e("h2",null,"Q&A",-1)),q=a(" What is the purpose of this project? "),C=a(" Optimise your "),z=t(()=>e("a",{href:"https://discord.com/channels/371035077037129729/404532586246045696"},"#worker-empire",-1)),W=a(" to bring more silver. "),A=a(" Is there any video or guide? "),I=a(" Don't think so, the basic steps are: "),M=t(()=>e("li",null,"go to Settings, select your server and tax, select what items you keep instead of selling",-1)),P=t(()=>e("li",null,"go to Home, select a town, configure lodging, hire a worker, send to whatever node gives highest M$/day/CP, repeat",-1)),S=a(" ...or, if it seems too daunting, forget everything and just look at Plantzones page, it shows what nodes are good with no user input "),$=a(" What does "),N=t(()=>e("strong",null,"+efficiency",-1)),E=a(" column say in Send Worker dialog and why is it always negative for me? "),T=a(" It shows the change in total M$/day/CP of the empire after starting this job with this worker. It being always negative is good - means you already own all the best nodes, so remaining ones are less efficient. You want to spend all available CP anyway, so just select those that are least negative (= highest in list). "),B=a(" Why are node connections so bad? When building path from town "),V=t(()=>e("strong",null,"A",-1)),H=a(" to node "),L=t(()=>e("strong",null,"B",-1)),R=a(", it ignores the fact that there is already taken node "),U=t(()=>e("strong",null,"C",-1)),Y=a(" on the way. "),D=a(" Connections are resolved in same order the jobs were given. The worker who received the job first doesn't know yet about all others, and builds connection in a beeline. Each next worker sees and uses more and more connections made by previous workers in queue. You can push the worker at "),F=t(()=>e("strong",null,"B",-1)),G=a(" to the end of queue by restarting his job. His connection will then be built last, with full knowledge of previous connections including the one that activated "),O=t(()=>e("strong",null,"C",-1)),Q=a(". "),X=a(" Where does the drop data come from and how old? "),J=a(" Unlucky drops up to Eternal Winter: from an anonymous source somewhere on the internet, timestamped late 2021. I checked ~50 top profit nodes ingame and they matched, so the rest are assumed good."),Z=t(()=>e("br",null,null,-1)),K=a(" Unlucky drops in Eternal Winter: observed by me in mid 2022."),aa=t(()=>e("br",null,null,-1)),ea=a(" Lucky drops: observed by me in june 2023 - "),ta=t(()=>e("span",{class:"note"},"not exact yet, more observations needed",-1)),oa=t(()=>e("br",null,null,-1)),ia=a(" Morning Land drops: observed by me in june 2023 - regular nodes are fine, "),na=t(()=>e("span",{class:"warning"},"excavations use tentative values",-1)),la=a(", reasonably accurate measurements are going to take a while "),sa=v(`<h2 data-v-a954a09b>Tips &amp; tricks</h2><li data-v-a954a09b>Anywhere you see a \u25B6, click to expand. Also hover over <abbr title="water is wet" data-v-a954a09b>\u2139\uFE0F</abbr>&#39;s and other <abbr title="roses are blue" data-v-a954a09b>dot-underlined</abbr> things to see useful info</li><li data-v-a954a09b>Spend some time on item valuation: set <strong data-v-a954a09b>Custom</strong> value above market price for bottlenecked stuff, reduce the value for mats you don&#39;t want</li><li data-v-a954a09b>Use <strong data-v-a954a09b>optimize</strong> button inside a working worker&#39;s editor and see what skills to roll to maximize profit, then <strong data-v-a954a09b>revert</strong> back</li><li data-v-a954a09b>If you have nodes invested for grinding, mark them with <strong data-v-a954a09b>zero-cost connection</strong> checkbox - this will make nearby plantzones more desirable</li><ul data-v-a954a09b><li data-v-a954a09b>just like with ordinary nodes, order matters - if they don&#39;t want to chain properly, try to reorder (ex: Olun before Crypt). Order is shown in <strong data-v-a954a09b>Total CP</strong> pane</li></ul><li data-v-a954a09b>Use <strong data-v-a954a09b>import</strong> and <strong data-v-a954a09b>export</strong> buttons in <strong data-v-a954a09b>All towns/workers list</strong> to: <ul data-v-a954a09b><li data-v-a954a09b>compare different builds</li><li data-v-a954a09b>restore to a known state when messed up</li><li data-v-a954a09b>share your setup with other people</li><li data-v-a954a09b>pull actual worker stats from your PC (ty @Aman, @Thell, @Sbreeng, @thirtyeight):</li><ul data-v-a954a09b><li data-v-a954a09b>download and install <a href="https://www.python.org/" data-v-a954a09b>Python</a> 3.9+</li><li data-v-a954a09b>download the <a href="https://pastebin.com/ZHMC7fkE" data-v-a954a09b>Import Script</a>, unzip, run it through Python</li><li data-v-a954a09b>now head back to Workerman Home page and import the json file you just created by running the script</li></ul></ul></li><li data-v-a954a09b>Workloads (and therefore profits) depend on <strong data-v-a954a09b>Modifiers</strong>. The default value works well for highly contested nodes (they are popular for a reason - you probably want them too). Some niche nodes however can report up to 2x higher profit if you enter their real Modifiers. <ul data-v-a954a09b><li data-v-a954a09b>Each green bar ingame does not belong to single resource node, but to a piece of land (aka RegionGroup), which may can contain multiple resource nodes, so they share the modifier</li><li data-v-a954a09b>If you want to be really meticulous about it, switch to floating modifiers (in Modifiers &gt; Advanced) and track the ingame modifiers change over time. More observations - more accuracy</li><ul data-v-a954a09b><li data-v-a954a09b>With floating modifier, daily profit is calculated via the chance of reaching relevant workload breakpoints on each cycle. Detailed view available in edit worker dialog</li><li data-v-a954a09b>Workloads shown in ~XXX format refer to median (50% chance) value</li><li data-v-a954a09b>You can specify to use either constant or floating modifier for each RegionGroup</li></ul></ul></li><h2 data-v-a954a09b>Changelog</h2><li data-v-a954a09b>[2023-05-31 patch] big rework</li><ul data-v-a954a09b><li data-v-a954a09b>level cap 40, +2 skill slots</li><li data-v-a954a09b>humans got +3 luck</li></ul><li data-v-a954a09b>fixed warehouse slot requirements to require lucky items too + 1 slot required to be free</li><li data-v-a954a09b>[2023-06-14 patch] new region</li><li data-v-a954a09b>in darkmode, buttons are now actually dark</li><li data-v-a954a09b>[2023-05-31 patch] new luck drops (v3 - assuming same droprates across a whole node kind)</li><ul data-v-a954a09b><li data-v-a954a09b>all nodes of kind 4 (plant growing) and 6 (plant gathering): all luck drops replaced with 0.25x item 1024</li><li data-v-a954a09b>all nodes of kind 7 (mining): all luck drops replaced with 3.51x item 1025</li><li data-v-a954a09b>all nodes of kind 8 (lumbering): all luck drops replaced with 0.94x item 5005, 0.45x 5006, 0.13x item 5007, 2.19x item 5008, 1x item 5011</li><li data-v-a954a09b>all nodes of kind 11 (dried fish): all luck drops replaced with 0.16x item 1027, 0.65x item 6501</li><li data-v-a954a09b>all nodes of kind 15 (excavation): all luck drops replaced with 3.92x item 1026</li><li data-v-a954a09b>nodes 1675, 1677, 1776: unlucky drop increased to 8</li><li data-v-a954a09b>nodes 1565, 1779: added 2x luck procs</li></ul><li data-v-a954a09b>[2023-05-31 patch] added sack items with auto-calculated prices</li><ul data-v-a954a09b><li data-v-a954a09b>item 1024 = equal chance of 1x any fruit</li><li data-v-a954a09b>item 1025 = equal chance of 1x any gem</li><li data-v-a954a09b>item 1026 = equal chance of 1x any trace</li><li data-v-a954a09b>item 1027 = equal chance of 1x any coral</li></ul><li data-v-a954a09b>you don&#39;t buy houses anymore, lodging &amp; storage provided automatically</li><ul data-v-a954a09b><li data-v-a954a09b>be careful to not exceed the town limits, profits will show NaN&#39;s and ?&#39;s if you do</li><li data-v-a954a09b>for easier prototyping, only working workers consume lodging</li></ul><li data-v-a954a09b>[2023-05-03 patch] reduced 10 fences cost to 80 CP</li><li data-v-a954a09b>reimplemented workshop jobs to stay after worker reimport</li><ul data-v-a954a09b><li data-v-a954a09b>each house can be set up in <strong data-v-a954a09b>Settings &gt; Workshops config</strong> and stored separately from worker data</li><li data-v-a954a09b>previously assigned <strong data-v-a954a09b>\u{1F3ED}Workshop</strong> jobs have been converted into <strong data-v-a954a09b>\u270D\uFE0FCustom</strong> jobs</li></ul><li data-v-a954a09b>on town/node click, map pans to its location</li><li data-v-a954a09b>removed 13 nodes that are invisible ingame</li><li data-v-a954a09b>added a ranking of untaken nodes in Empire pane</li><li data-v-a954a09b>[2023-02-21 patch] updated node CP costs</li><li data-v-a954a09b>job efficiency now includes lodging cost: income / (connectionCost + lodgingCost)</li><ul data-v-a954a09b><li data-v-a954a09b>lodging costs are shared proportionally to job income values, same way as connections</li></ul><li data-v-a954a09b>added more worker types + seamless transition between</li><li data-v-a954a09b>can specify a zero-cost connection in node properties (when invested for droprate)</li><li data-v-a954a09b>individual plantzone efficiency via cashflow</li><ul data-v-a954a09b><li data-v-a954a09b>ex: if a connection node is simultaneously used by a 4M$/day job and a 1M$/day job, they own it in 80/20 fashion</li></ul><li data-v-a954a09b>added farming and workshop job types in Send Worker dialog</li><li data-v-a954a09b>/plantzones page tweaks</li><ul data-v-a954a09b><li data-v-a954a09b>node name link navigates to its map location (upd: with permalinks)</li><li data-v-a954a09b>item link navigates to its settings price row</li><li data-v-a954a09b>shows item names to allow in-browser search</li><li data-v-a954a09b>selects nearest town by CP instead of distance</li></ul><li data-v-a954a09b>removed Blue Maned Lion&#39;s Manor</li><li data-v-a954a09b>~floating modifiers support</li><li data-v-a954a09b>selecting a node highlights connection path</li><li data-v-a954a09b>worker job assignment moves to the end of connection queue</li><li data-v-a954a09b>worker editor: added button to suggest best skills for current job</li><li data-v-a954a09b>map: color active/inactive links</li><li data-v-a954a09b>updated connection algorithm to encourage existing paths reuse</li><li data-v-a954a09b>[2022-10-26 patch] updated house CP costs</li><li data-v-a954a09b>worker revert button, plantzone luck effect indicator</li><li data-v-a954a09b>configurable default worker for hire</li><li data-v-a954a09b>send worker dialog: show worker stats</li><li data-v-a954a09b>worker editor: when on job, show profit changes while editing</li><li data-v-a954a09b>node info: show/edit the workload modifier</li><li data-v-a954a09b>Ancado lodging now requires other town connection (nearest chosen automatically)</li><li data-v-a954a09b>added nodes 911..914 &amp; 1604 (ty @Ayashi)</li><li data-v-a954a09b>added total daily items summary</li><li data-v-a954a09b>added workers+lodging import/export to json file</li><li data-v-a954a09b>[2022-09-21 patch] updated several node distances</li><li data-v-a954a09b>added worker management</li><li data-v-a954a09b>combined repeated items in node 1035 (ty @Yazel)</li><li data-v-a954a09b>[2022-08-31 patch] modified nodes 463 &amp; 487 for lucky drop 5422 instead of 5402</li><h2 data-v-a954a09b>Todo</h2><li data-v-a954a09b>on first run, pick server using geoip</li><li data-v-a954a09b>morningland has made up worker levelup stats, find correct values</li><li data-v-a954a09b>[2023-05-31 patch]</li><ul data-v-a954a09b><li data-v-a954a09b>giants +68.4% yield for (some??) items</li><ul data-v-a954a09b><li data-v-a954a09b>rounding down - need to recalculate all distributions to account for that (ex: 0.5x1 + 0.5x2 = 1.5 mean -&gt; 0.5x1 + 0.5x3 = 2 mean)</li></ul><li data-v-a954a09b>implement species-restricted planzones/workshops</li><li data-v-a954a09b>output redirection (available for any worker at lvl 40)</li></ul><li data-v-a954a09b>Active Jobs Ranking sorting can get janky when NaNs/Infs are involved</li><li data-v-a954a09b>when exporting/importing, show what exactly is being -ported (maybe even choose?)</li><li data-v-a954a09b>remove mspdBase from export, it&#39;s redundant</li><li data-v-a954a09b>remote town workshop job should require connection</li><li data-v-a954a09b>when connection node selected, sort shared job list by %</li><li data-v-a954a09b>split out personal items storage CP in totals</li><li data-v-a954a09b>enforce daily shipbuilding limit</li><li data-v-a954a09b>add lodgage cost to untaken ranking</li><li data-v-a954a09b>+1/+3 pack_xxx skills should improve profit when packing</li><li data-v-a954a09b>add intracity distances (currently all 0) (use notes at bottom)</li><li data-v-a954a09b>when optimizing skills, try to keep new skill of same type at same position as old one</li><ul data-v-a954a09b><li data-v-a954a09b>don&#39;t optimize +2 wspd into +2 wspd with no benefit</li></ul><li data-v-a954a09b>find a consistent fast way to build optimal connections (orderless)</li><li data-v-a954a09b>workshop support for lodgage</li><li data-v-a954a09b>on item icon hover: show name and price</li><li data-v-a954a09b>workerlist: show drops instead of pzname</li><li data-v-a954a09b>grade towns/workers graphically with bar charts</li><li data-v-a954a09b>map tweaks <ul data-v-a954a09b><li data-v-a954a09b>node hover: highlight potential path to town</li><li data-v-a954a09b>save zoom too in addition to pos</li><li data-v-a954a09b>deal with missing tiles</li><li data-v-a954a09b>a setting to hide all inactive elements</li></ul></li><li data-v-a954a09b>profit calculation: include feed cost</li><li data-v-a954a09b>smart worker-job rearrangement within a town</li><ul data-v-a954a09b><li data-v-a954a09b>take both innate stat, current skills and potential reroll prospects into account</li></ul><li data-v-a954a09b>show RegionGroups on the map</li><li data-v-a954a09b>unify strings - Erdal Farm shows &quot;gathering&quot; while ingame workerlist shows &quot;silk production&quot;</li><li data-v-a954a09b>introduce skill roll chances somehow</li><ul data-v-a954a09b><li data-v-a954a09b>help decide which skills should and should not be rerolled?</li><li data-v-a954a09b>ex: for existing worker skill, show if it&#39;s going to get better or worse after 5 rerolls</li></ul><li data-v-a954a09b>do something smart using current market offers divided by lifetime volume</li><li data-v-a954a09b>detect and apply price floors and ceilings (\xB17.5%)</li><li data-v-a954a09b>show market fetch timestamp</li><h2 data-v-a954a09b>Notes</h2><pre class="fsxs" data-v-a954a09b>1-5-2 / hk=2557     
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
efer 17949</pre><h2 data-v-a954a09b>Misc</h2>`,93),da=a("All Towns Lodging (deprecated)"),ra=a("House Usage"),ca=a("HouseCraft Viewer"),ha=a("Droprates"),ua={__name:"AboutView",setup(n){return(u,ba)=>{const s=p("RouterLink");return c(),h("div",x,[j,i(l,null,{q:o(()=>[q]),default:o(()=>[C,z,W]),_:1}),i(l,null,{q:o(()=>[A]),default:o(()=>[I,M,P,S]),_:1}),i(l,null,{q:o(()=>[$,N,E]),default:o(()=>[T]),_:1}),i(l,null,{q:o(()=>[B,V,H,L,R,U,Y]),default:o(()=>[D,F,G,O,Q]),_:1}),i(l,null,{q:o(()=>[X]),default:o(()=>[J,Z,K,aa,ea,ta,oa,ia,na,la]),_:1}),sa,e("p",null,[i(s,{to:"/lodging"},{default:o(()=>[da]),_:1})]),e("p",null,[i(s,{to:"/workshops"},{default:o(()=>[ra]),_:1})]),e("p",null,[i(s,{to:"/housecraft"},{default:o(()=>[ca]),_:1})]),e("p",null,[i(s,{to:"/droprates"},{default:o(()=>[ha]),_:1})])])}}},pa=r(ua,[["__scopeId","data-v-a954a09b"]]);export{pa as default};