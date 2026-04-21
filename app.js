'use strict';

// ─── Icons ──────────────────────────────────────────────────────────────────
const ICON = {
  trendingUp:   `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
  users:        `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  zap:          `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  alertCircle:  `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
  creditCard:   `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>`,
  gift:         `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>`,
  history:      `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-5H1"/></svg>`,
  fileText:     `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>`,
  share2:       `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>`,
  arrowUpRight: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>`,
  arrowDownLeft:`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="17" y1="7" x2="7" y2="17"/><polyline points="17 17 7 17 7 7"/></svg>`,
  chevronRight: `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`,
  chevronLeft:  `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>`,
  plus:         `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  check:        `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  award:        `<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>`,
  historyLg:    `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-5H1"/></svg>`,
  checkLg:      `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
  phone:        `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.89 9.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.82 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  calendar:     `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  fileTextLg:   `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
};

// ─── Constants ───────────────────────────────────────────────────────────────
const SK_C = 'bloom_customers';
const SK_T = 'bloom_transactions';
const SK_I = 'bloom_pending_intakes';
const SK_CODES = 'bloom_share_codes';

const PLANS = [
  { name:'體驗價',      sessions:1,  price:799  },
  { name:'部位處理',    sessions:1,  price:899  },
  { name:'全身調理',    sessions:1,  price:1800 },
  { name:'身體重建計畫',sessions:5,  price:7500 },
  { name:'長期結構調整',sessions:10, price:12500},
];

const AVATAR_COLORS = ['avatar-teal','avatar-purple','avatar-rose','avatar-gold','avatar-blue'];
const avatarColor = n => AVATAR_COLORS[(n.charCodeAt(0)||0) % AVATAR_COLORS.length];

const SEED_C = [
  {id:1,name:'王大明',phone:'0912-345-678',birthday:'1990-04-25',gender:'男',notes:'右肩旋轉肌發炎，注意按壓力度。偏好中度力道。',createdAt:'2026-01-10'},
  {id:2,name:'林小美',phone:'0987-654-321',birthday:'1988-05-15',gender:'女',notes:'長期肩頸痠痛，喜歡精油按摩，勿使用薰衣草。',createdAt:'2026-01-15'},
  {id:3,name:'陳建國',phone:'0933-111-222',birthday:'1975-12-10',gender:'男',notes:'運動傷害修復（膝關節）。',createdAt:'2026-02-01'},
  {id:4,name:'張雅婷',phone:'0966-777-888',birthday:'1995-07-03',gender:'女',notes:'初次客戶，全身放鬆為主。',createdAt:'2026-04-19'},
];
const SEED_T = [
  {id:1,customerId:1,type:'topup',sessions:10,amount:6500,date:'2026-03-01T10:00:00',note:'10堂肩頸舒緩方案'},
  {id:2,customerId:1,type:'usage',sessions:1,amount:0,date:'2026-03-15T14:00:00',note:'徒手治療（肩部）'},
  {id:3,customerId:1,type:'usage',sessions:1,amount:0,date:'2026-04-02T10:30:00',note:'超音波治療（肩部）'},
  {id:4,customerId:2,type:'topup',sessions:20,amount:12000,date:'2026-02-10T11:00:00',note:'VIP 芳療 20 堂方案'},
  {id:5,customerId:2,type:'usage',sessions:2,amount:0,date:'2026-03-20T15:30:00',note:'全身深層精油按摩'},
  {id:6,customerId:2,type:'usage',sessions:1,amount:0,date:'2026-04-10T09:00:00',note:'熱石療法'},
  {id:7,customerId:3,type:'topup',sessions:5,amount:3500,date:'2026-04-01T14:00:00',note:'膝關節修復5堂方案'},
  {id:8,customerId:3,type:'usage',sessions:1,amount:0,date:'2026-04-18T13:00:00',note:'肌筋膜鬆動術'},
  {id:9,customerId:4,type:'topup',sessions:5,amount:3500,date:'2026-04-19T16:00:00',note:'初次儲值5堂'},
];

// ─── State ───────────────────────────────────────────────────────────────────
let state = {
  customers:[], transactions:[], intakes:[], shareCodes:[],
  currentPage:'dashboard', selectedCustomerId:null,
  txType:'topup', txTargetId:null, selectedPlan:null,
  shareTargetId:null, shareTab:'phone',
  redeemTargetId:null,
};

// ─── Storage ─────────────────────────────────────────────────────────────────
function loadData() {
  try {
    state.customers    = JSON.parse(localStorage.getItem(SK_C)) || JSON.parse(JSON.stringify(SEED_C));
    state.transactions = JSON.parse(localStorage.getItem(SK_T)) || JSON.parse(JSON.stringify(SEED_T));
    state.intakes      = JSON.parse(localStorage.getItem(SK_I)) || [];
    state.shareCodes   = JSON.parse(localStorage.getItem(SK_CODES)) || [];
  } catch(e) {
    state.customers=JSON.parse(JSON.stringify(SEED_C));
    state.transactions=JSON.parse(JSON.stringify(SEED_T));
    state.intakes=[]; state.shareCodes=[];
  }
}
function save() {
  localStorage.setItem(SK_C, JSON.stringify(state.customers));
  localStorage.setItem(SK_T, JSON.stringify(state.transactions));
  localStorage.setItem(SK_I, JSON.stringify(state.intakes));
  localStorage.setItem(SK_CODES, JSON.stringify(state.shareCodes));
}

// ─── Helpers ─────────────────────────────────────────────────────────────────
function getBalance(id){ return state.transactions.filter(t=>t.customerId===id).reduce((a,t)=>t.type==='topup'?a+t.sessions:a-t.sessions,0); }
function getTotalSessions(id){ return state.transactions.filter(t=>t.customerId===id&&t.type==='topup').reduce((a,t)=>a+t.sessions,0); }
function getTotalSpend(id){ return state.transactions.filter(t=>t.customerId===id&&t.type==='topup').reduce((a,t)=>a+t.amount,0); }
function formatDate(iso){ return new Date(iso).toLocaleString('zh-TW',{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit'}); }
function daysBetween(d1,d2){ return Math.round((d2-d1)/86400000); }
function barClass(b){ return b===0?'red':b<=2?'amber':'green'; }
function badgeClass(b){ return b===0?'badge-red':b<=2?'badge-amber':'badge-green'; }
function genCode(){ return Math.random().toString(36).substring(2,8).toUpperCase(); }

function getUpcomingBirthdays(){
  const today=new Date(); today.setHours(0,0,0,0);
  return state.customers.filter(c=>c.birthday).map(c=>{
    const [,m,d]=c.birthday.split('-').map(Number);
    let bday=new Date(today.getFullYear(),m-1,d);
    if(bday<today) bday=new Date(today.getFullYear()+1,m-1,d);
    return {...c,bdayDate:bday,daysLeft:daysBetween(today,bday)};
  }).filter(c=>c.daysLeft<=30).sort((a,b)=>a.daysLeft-b.daysLeft);
}
function getLowSession(){ return state.customers.filter(c=>getBalance(c.id)>=0&&getBalance(c.id)<=2); }
function getUnreviewedIntakes(){ return state.intakes.filter(i=>!i.reviewed); }

// ─── Navigation ───────────────────────────────────────────────────────────────
function navigate(page, customerId) {
  state.currentPage=page;
  if(customerId) state.selectedCustomerId=customerId;
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById('page-'+page).classList.add('active');
  document.querySelectorAll('.nav-item').forEach(btn=>{
    btn.classList.toggle('active', btn.dataset.page===page||(page==='profile'&&btn.dataset.page==='customers'));
  });
  const bc=document.getElementById('breadcrumb');
  const mt=document.getElementById('main-title');
  if(page==='dashboard'){bc.textContent='主頁';mt.innerHTML='<span>總覽</span> 儀表板';renderDashboard();}
  else if(page==='customers'){bc.textContent='客戶管理';mt.innerHTML='客戶<span>管理</span>';renderCustomers();}
  else if(page==='profile'){bc.textContent='客戶 / 詳細資料';const c=state.customers.find(x=>x.id===state.selectedCustomerId);mt.innerHTML=c?`<span>${c.name}</span>`:'詳情';renderProfile();}
  else if(page==='intakes'){bc.textContent='新進病歷';mt.innerHTML='新進<span>病歷</span>';renderIntakes();}
  updateNotifBadge();
}

function updateNotifBadge(){
  const total=getUpcomingBirthdays().length+getLowSession().length;
  const intakeCount=getUnreviewedIntakes().length;
  const badge=document.getElementById('nav-notif-badge');
  const dot=document.getElementById('notif-dot');
  const ibadge=document.getElementById('nav-intake-badge');
  if(total>0){badge.textContent=total;badge.style.display='inline-flex';dot.style.display='block';}
  else{badge.style.display='none';dot.style.display='none';}
  if(intakeCount>0){ibadge.textContent=intakeCount;ibadge.style.display='inline-flex';}
  else ibadge.style.display='none';
}

// ─── Dashboard ────────────────────────────────────────────────────────────────
function renderDashboard(){
  const el=document.getElementById('page-dashboard');
  const totalBal=state.customers.reduce((a,c)=>a+getBalance(c.id),0);
  const totalRev=state.transactions.filter(t=>t.type==='topup').reduce((a,t)=>a+t.amount,0);
  const births=getUpcomingBirthdays();
  const lows=getLowSession();
  const newIntakes=getUnreviewedIntakes();
  const recent=[...state.transactions].sort((a,b)=>new Date(b.date)-new Date(a.date)).slice(0,6);

  el.innerHTML=`
  <div class="kpi-grid">
    <div class="kpi-card accent">
      <div class="kpi-icon white">${ICON.users}</div>
      <div class="kpi-label">總客戶數</div>
      <div class="kpi-value">${state.customers.length}</div>
      <div class="kpi-delta up">${ICON.trendingUp} 持續成長中</div>
      <div class="kpi-bg-icon">${ICON.users}</div>
    </div>
    <div class="kpi-card">
      <div class="kpi-icon teal">${ICON.zap}</div>
      <div class="kpi-label">系統總剩餘堂數</div>
      <div class="kpi-value">${totalBal}</div>
      <div class="kpi-delta up">${ICON.trendingUp} 全客戶合計</div>
    </div>
    <div class="kpi-card">
      <div class="kpi-icon rose">${ICON.fileText}</div>
      <div class="kpi-label">待審核病歷</div>
      <div class="kpi-value" style="${newIntakes.length>0?'color:var(--rose)':''}">${newIntakes.length}</div>
      <div class="kpi-delta ${newIntakes.length>0?'warn':'up'}">${newIntakes.length>0?ICON.alertCircle+' 需要審核':ICON.check+' 全部已讀'}</div>
    </div>
    <div class="kpi-card">
      <div class="kpi-icon gold">${ICON.creditCard}</div>
      <div class="kpi-label">累計總儲值金額</div>
      <div class="kpi-value" style="font-size:18px">NT$${totalRev.toLocaleString()}</div>
      <div class="kpi-delta up">${ICON.trendingUp} 歷史累計</div>
    </div>
  </div>

  ${newIntakes.length>0?`
  <div class="panel" style="border-left:3px solid var(--rose);margin-bottom:16px">
    <div class="panel-header" style="justify-content:space-between">
      <div style="display:flex;align-items:center;gap:8px">${ICON.fileText}<span class="panel-title">新進病歷 — 待審核</span><span class="badge badge-red">${newIntakes.length}</span></div>
      <button class="btn btn-sm btn-primary" onclick="navigate('intakes')">全部查看 →</button>
    </div>
    <div class="panel-body" style="padding:8px 16px">
      ${newIntakes.slice(0,3).map(i=>`
        <div class="intake-row" onclick="navigate('intakes')">
          <div class="intake-dot"></div>
          <div class="intake-info">
            <div class="intake-name">${i.name}</div>
            <div class="intake-meta">${i.phone}${i.parts&&i.parts.length?' · 主訴：'+i.parts.slice(0,3).join('、'):''}</div>
            <div class="intake-plan">${i.plan||'方案未選'}</div>
          </div>
          <div class="intake-time">${i.submittedAt?formatDate(i.submittedAt):''}</div>
        </div>`).join('')}
    </div>
  </div>`:''
  }

  <div class="three-col">
    <div class="panel">
      <div class="panel-header" style="justify-content:space-between">
        <div style="display:flex;align-items:center;gap:8px">${ICON.history}<span class="panel-title">最近交易紀錄</span></div>
        <button class="btn btn-ghost btn-sm" onclick="navigate('customers')">查看所有 →</button>
      </div>
      <div class="panel-body">
        ${recent.map(tx=>{
          const c=state.customers.find(x=>x.id===tx.customerId);
          return `<div class="tx-row">
            <div class="tx-icon ${tx.type}">${tx.type==='topup'?ICON.arrowUpRight:ICON.arrowDownLeft}</div>
            <div class="avatar ${c?avatarColor(c.name):'avatar-teal'}" style="width:30px;height:30px;font-size:12px;border-radius:8px;flex-shrink:0">${c?c.name[0]:'?'}</div>
            <div class="tx-info"><div class="tx-title">${c?c.name:'未知'} <span style="font-weight:400;color:var(--ink-3)">— ${tx.note}</span></div><div class="tx-sub">${formatDate(tx.date)}</div></div>
            <div class="tx-amount ${tx.type}">${tx.type==='topup'?'+':'-'}${tx.sessions}堂${tx.type==='topup'?`<div class="tx-money">NT$${tx.amount.toLocaleString()}</div>`:''}</div>
          </div>`;
        }).join('')}
      </div>
    </div>
    <div style="display:flex;flex-direction:column;gap:16px">
      <div class="panel">
        <div class="panel-header">${ICON.gift}<span class="panel-title">近30天生日</span><span class="badge badge-red" style="margin-left:auto">${births.length}</span></div>
        <div class="panel-body" style="padding:10px 14px">
          ${births.length===0?`<div class="empty-state" style="padding:20px">${ICON.checkLg}<div class="empty-title" style="margin-top:8px">近期無生日</div></div>`:
            births.map(c=>`<div class="bday-row" onclick="navigate('profile',${c.id})">
              <div class="bday-date-badge">${c.birthday.substring(5).replace('-','/')}</div>
              <div style="flex:1"><div style="font-weight:500;font-size:13px">${c.name}</div><div style="font-size:11.5px;color:#9f1239;margin-top:1px">${c.daysLeft===0?'今天生日！':'還有 '+c.daysLeft+' 天'}</div></div>
              ${ICON.chevronRight}</div>`).join('')}
        </div>
      </div>
      <div class="panel">
        <div class="panel-header">${ICON.alertCircle}<span class="panel-title">堂數不足預警</span></div>
        <div class="panel-body" style="padding:10px 14px">
          ${lows.length===0?`<div class="empty-state" style="padding:20px">${ICON.checkLg}<div class="empty-title" style="margin-top:8px">目前無不足客戶</div></div>`:
            lows.map(c=>{const b=getBalance(c.id);return`<div style="display:flex;align-items:center;gap:10px;padding:9px 0;border-bottom:0.5px solid var(--border)">
              <div class="avatar ${avatarColor(c.name)}">${c.name[0]}</div>
              <div style="flex:1"><div style="font-size:13px;font-weight:500">${c.name}</div><div style="font-size:11px;color:var(--ink-3)">${c.phone}</div></div>
              <span class="${badgeClass(b)} badge">${b}堂</span>
              <button class="btn btn-sm btn-primary" onclick="openTxModal(${c.id},'topup')">儲值</button>
            </div>`;}).join('')}
        </div>
      </div>
    </div>
  </div>`;
}

// ─── Customer List ────────────────────────────────────────────────────────────
function renderCustomers(query){
  const el=document.getElementById('page-customers');
  const q=(query||'').toLowerCase().replace(/-/g,'');
  const list=state.customers.filter(c=>c.name.includes(query||'')||c.phone.replace(/-/g,'').includes(q));
  el.innerHTML=`
  <div class="search-row">
    <div class="search-wrap">
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
      <input class="search-input" placeholder="以姓名或手機號碼搜尋..." oninput="renderCustomers(this.value)" value="${query||''}"/>
    </div>
    <button class="btn btn-primary" onclick="openModal('add-customer')">${ICON.plus} 新增客戶</button>
  </div>
  <div class="panel">
    <table class="customer-table">
      <thead><tr><th>客戶</th><th>手機號碼</th><th>生日</th><th>剩餘堂數</th><th>累計儲值</th><th style="text-align:right">操作</th></tr></thead>
      <tbody>
        ${list.length===0?`<tr><td colspan="6"><div class="empty-state"><div class="empty-title">找不到符合的客戶</div></div></td></tr>`:
          list.map(c=>{
            const b=getBalance(c.id),tot=getTotalSessions(c.id),sp=getTotalSpend(c.id);
            const pct=tot>0?Math.round(b/tot*100):0;
            return `<tr onclick="navigate('profile',${c.id})">
              <td><div style="display:flex;align-items:center;gap:10px"><div class="avatar ${avatarColor(c.name)}">${c.name[0]}</div><div><div style="font-weight:500;font-size:13.5px">${c.name}</div><div style="font-size:11.5px;color:var(--ink-3)">${c.gender||''}</div></div></div></td>
              <td style="color:var(--ink-2);font-size:13.5px">${c.phone}</td>
              <td style="color:var(--ink-3);font-size:13px">${c.birthday||'—'}</td>
              <td style="min-width:130px"><div style="font-weight:600;font-size:14px;margin-bottom:4px">${b}<span style="font-weight:400;font-size:12px;color:var(--ink-3)"> / ${tot}堂</span></div><div class="session-meter"><div class="session-bar-bg"><div class="session-bar ${barClass(b)}" style="width:${Math.max(pct,0)}%"></div></div></div></td>
              <td style="color:var(--ink-2);font-size:13px">NT$${sp.toLocaleString()}</td>
              <td style="text-align:right"><div style="display:flex;gap:6px;justify-content:flex-end" onclick="event.stopPropagation()">
                <button class="btn btn-sm btn-primary" onclick="openTxModal(${c.id},'topup')">儲值</button>
                <button class="btn btn-sm" onclick="openTxModal(${c.id},'usage')">扣堂</button>
                <button class="btn btn-sm btn-ghost" onclick="navigate('profile',${c.id})">${ICON.chevronRight}</button>
              </div></td>
            </tr>`;
          }).join('')}
      </tbody>
    </table>
  </div>`;
}

// ─── Profile ─────────────────────────────────────────────────────────────────
function renderProfile(){
  const el=document.getElementById('page-profile');
  const c=state.customers.find(x=>x.id===state.selectedCustomerId);
  if(!c){el.innerHTML='<p>找不到客戶</p>';return;}
  const b=getBalance(c.id),tot=getTotalSessions(c.id),sp=getTotalSpend(c.id);
  const pct=tot>0?Math.round(b/tot*100):0;
  const txList=[...state.transactions].filter(t=>t.customerId===c.id).sort((a,b)=>new Date(b.date)-new Date(a.date));
  const intakes=state.intakes.filter(i=>i.phone&&i.phone.replace(/-/g,'')===c.phone.replace(/-/g,''));

  el.innerHTML=`
  <button class="btn btn-ghost btn-sm" style="margin-bottom:16px" onclick="navigate('customers')">${ICON.chevronLeft} 返回列表</button>
  <div class="profile-grid">
    <div>
      <div class="profile-card">
        <div class="profile-card-header">
          <div class="avatar avatar-lg ${avatarColor(c.name)}" style="margin:0 auto">${c.name[0]}</div>
          <div class="profile-name">${c.name}</div>
          <div class="profile-meta">${c.gender||''} · 加入 ${c.createdAt||'—'}</div>
        </div>
        <div class="profile-card-body">
          <div class="profile-field"><div class="profile-field-icon">${ICON.phone}</div><div><div class="profile-field-label">手機號碼</div><div class="profile-field-value">${c.phone}</div></div></div>
          <div class="profile-field"><div class="profile-field-icon">${ICON.gift}</div><div><div class="profile-field-label">生日</div><div class="profile-field-value">${c.birthday||'未提供'}</div></div></div>
          <div class="profile-field"><div class="profile-field-icon">${ICON.fileTextLg}</div><div><div class="profile-field-label">備註 / 健康狀況</div><div class="profile-field-value">${c.notes||'無'}</div></div></div>
        </div>
      </div>

      <div class="balance-card">
        <div class="balance-inner">
          <div class="balance-eyebrow">目前剩餘堂數</div>
          <div class="balance-number">${b}</div>
          <div class="balance-label">已使用 ${tot-b}堂 / 總儲值 ${tot}堂</div>
          <div class="balance-progress"><div class="session-bar-bg"><div class="session-bar ${barClass(b)}" style="width:${Math.max(pct,0)}%"></div></div></div>
          <div class="balance-spend">累計儲值金額：NT$${sp.toLocaleString()}</div>
          <div class="balance-actions">
            <button class="balance-btn primary" onclick="openTxModal(${c.id},'topup')">${ICON.plus} 儲值堂數</button>
            <button class="balance-btn secondary" onclick="openTxModal(${c.id},'usage')">${ICON.arrowDownLeft} 使用扣堂</button>
          </div>
          <div style="display:flex;gap:8px;margin-top:10px">
            <button class="balance-btn secondary" onclick="openShareModal(${c.id})">${ICON.share2} 分享堂數給親友</button>
            <button class="balance-btn secondary" onclick="openRedeemModal(${c.id})">${ICON.gift} 兌換分享碼</button>
          </div>
        </div>
        <div class="balance-bg-icon">${ICON.award}</div>
      </div>

      ${intakes.length>0?`
      <div class="panel">
        <div class="panel-header">${ICON.fileText}<span class="panel-title">病歷表單紀錄</span><span style="margin-left:auto;font-size:12px;color:var(--ink-3)">${intakes.length}份</span></div>
        <div class="panel-body" style="padding:0 16px">
          ${intakes.map((i,idx)=>`
            <div style="padding:12px 0;border-bottom:0.5px solid var(--border)${idx===intakes.length-1?';border:none':''}">
              <div style="font-size:12px;color:var(--ink-3);margin-bottom:6px">${i.submittedAt?formatDate(i.submittedAt):''}</div>
              ${i.parts&&i.parts.length?'<div style="margin-bottom:4px">'+i.parts.map(p=>`<span class="intake-chip">${p}</span>`).join('')+'</div>':''}
              ${i.symptoms&&i.symptoms.length?'<div>'+i.symptoms.map(s=>`<span class="intake-chip symptom">${s}</span>`).join('')+'</div>':''}
              ${i.painLevel?'<div style="font-size:12px;color:var(--ink-3);margin-top:4px">疼痛程度：'+i.painLevel+'/10</div>':''}
            </div>`).join('')}
        </div>
      </div>`:''
      }
    </div>

    <div class="profile-tx-panel">
      <div class="panel-header">${ICON.history}<span class="panel-title">交易記錄</span><span style="margin-left:auto;font-size:12px;color:var(--ink-3)">${txList.length}筆</span></div>
      <div class="profile-tx-body">
        ${txList.length===0?`<div class="empty-state">${ICON.historyLg}<div class="empty-title" style="margin-top:8px">尚無交易記錄</div></div>`:
          txList.map(tx=>`<div class="tx-row">
            <div class="tx-icon ${tx.type}">${tx.type==='topup'?ICON.arrowUpRight:ICON.arrowDownLeft}</div>
            <div class="tx-info"><div class="tx-title">${tx.type==='topup'?'方案儲值':'課程使用'}<span style="font-weight:400;color:var(--ink-3);margin-left:6px">— ${tx.note}</span></div><div class="tx-sub">${formatDate(tx.date)}</div></div>
            <div class="tx-amount ${tx.type}">${tx.type==='topup'?'+':'-'}${tx.sessions}堂${tx.type==='topup'?`<div class="tx-money">NT$${tx.amount.toLocaleString()}</div>`:''}</div>
          </div>`).join('')}
      </div>
    </div>
  </div>`;
}

// ─── Intakes ──────────────────────────────────────────────────────────────────
function renderIntakes(){
  const el=document.getElementById('page-intakes');
  const pending=state.intakes.filter(i=>!i.reviewed);
  const done=state.intakes.filter(i=>i.reviewed);

  el.innerHTML=`
  <div style="display:flex;gap:10px;margin-bottom:16px;align-items:center">
    <div style="font-size:13px;color:var(--ink-3)">共 <strong>${state.intakes.length}</strong> 份病歷，<strong style="color:var(--rose)">${pending.length}</strong> 份待審核</div>
    <button class="btn btn-sm" style="margin-left:auto" onclick="clearAllIntakes()">清除已審核</button>
  </div>

  ${pending.length>0?`
  <div class="panel" style="margin-bottom:16px">
    <div class="panel-header">${ICON.fileText}<span class="panel-title">待審核</span><span class="badge badge-red" style="margin-left:auto">${pending.length}</span></div>
    <div>
      ${pending.map((i,idx)=>renderIntakeRow(i,idx,'pending')).join('')}
    </div>
  </div>`:''
  }

  ${done.length>0?`
  <div class="panel">
    <div class="panel-header">${ICON.check}<span class="panel-title">已審核</span></div>
    <div>
      ${done.map((i,idx)=>renderIntakeRow(i,idx,'done')).join('')}
    </div>
  </div>`:''
  }

  ${state.intakes.length===0?`
  <div class="panel"><div class="empty-state">${ICON.historyLg}<div class="empty-title">尚無病歷表單</div><div class="empty-sub">病患填寫表單後將顯示於此</div><a href="intake-form.html" target="_blank" class="btn btn-primary btn-sm" style="text-decoration:none;margin-top:12px;display:inline-flex">開啟病歷表單連結</a></div></div>`:''
  }`;
}

function renderIntakeRow(i, idx, group){
  const matchedCustomer=state.customers.find(c=>c.phone.replace(/-/g,'')===((i.phone||'').replace(/-/g,'')));
  return `<div class="intake-row">
    <div class="intake-dot ${i.reviewed?'reviewed':''}"></div>
    <div class="intake-info">
      <div class="intake-name">${i.name||'未知'} <span style="font-size:11px;color:var(--ink-3)">${i.phone||''}</span></div>
      <div style="margin:4px 0 2px">${(i.parts||[]).map(p=>`<span class="intake-chip">${p}</span>`).join('')}</div>
      <div>${(i.symptoms||[]).map(s=>`<span class="intake-chip symptom">${s}</span>`).join('')}</div>
      ${i.painLevel?`<div style="font-size:12px;color:var(--ink-3);margin-top:3px">疼痛：${i.painLevel}/10</div>`:''}
      <div class="intake-plan">${i.plan||''}</div>
      ${i.extra?`<div style="font-size:12px;color:var(--ink-3);margin-top:2px">"${i.extra}"</div>`:''}
    </div>
    <div style="display:flex;flex-direction:column;gap:6px;align-items:flex-end;flex-shrink:0">
      <div class="intake-time">${i.submittedAt?formatDate(i.submittedAt):''}</div>
      ${!i.reviewed?`<button class="btn btn-sm btn-primary" onclick="reviewIntake(${idx},event)">${ICON.check} 審核建檔</button>`:''}
      ${matchedCustomer?`<button class="btn btn-sm btn-ghost" onclick="navigate('profile',${matchedCustomer.id})">查看客戶 →</button>`:''}
    </div>
  </div>`;
}

function reviewIntake(idx, e){
  if(e) e.stopPropagation();
  const pending=state.intakes.filter(i=>!i.reviewed);
  const intake=pending[idx];
  if(!intake) return;
  const globalIdx=state.intakes.indexOf(intake);

  // Check if customer exists
  const existing=state.customers.find(c=>c.phone.replace(/-/g,'')===(intake.phone||'').replace(/-/g,''));
  if(!existing && intake.name && intake.phone){
    state.customers=[{
      id:Date.now(),name:intake.name,phone:intake.phone,
      birthday:intake.birthday||'',gender:intake.gender||'',
      notes:(intake.parts||[]).join('，')+(intake.symptoms?'；症狀：'+(intake.symptoms||[]).join('，'):''),
      createdAt:new Date().toISOString().split('T')[0]
    },...state.customers];
    showToast('✓ 已自動建立客戶檔案：'+intake.name);
  } else if(existing){
    showToast('✓ 已標記為已審核（客戶已存在）');
  }
  state.intakes[globalIdx].reviewed=true;
  save();
  renderIntakes();
  updateNotifBadge();
}

function clearAllIntakes(){
  state.intakes=state.intakes.filter(i=>!i.reviewed);
  save();
  renderIntakes();
}

// ─── Modals ───────────────────────────────────────────────────────────────────
function openModal(name){ document.getElementById('modal-'+name).style.display='flex'; }
function closeModal(name){ document.getElementById('modal-'+name).style.display='none'; }
function closeModalOutside(e,id){ if(e.target===e.currentTarget) closeModal(id.replace('modal-','')); }

function openTxModal(customerId, type){
  state.txTargetId=customerId; state.txType=type; state.selectedPlan=null;
  const c=state.customers.find(x=>x.id===customerId);
  if(!c) return;
  const balance=getBalance(customerId);
  document.getElementById('tx-modal-title').textContent=type==='topup'?'為客戶儲值':'記錄課程使用';
  document.getElementById('tx-modal-subtitle').innerHTML=`<div class="avatar ${avatarColor(c.name)}" style="width:18px;height:18px;font-size:9px;border-radius:4px;flex-shrink:0">${c.name[0]}</div>${c.name} · ${c.phone}`;
  const alertEl=document.getElementById('tx-balance-alert');
  if(type==='usage'){alertEl.style.display='flex';document.getElementById('tx-balance-text').innerHTML=`目前剩餘 <strong>${balance}</strong> 堂`;}
  else alertEl.style.display='none';
  const planSec=document.getElementById('tx-plan-section');
  if(type==='topup'){planSec.style.display='block';renderPlanGrid();}
  else planSec.style.display='none';
  const amtGrp=document.getElementById('tx-amount-group');
  amtGrp.style.display=type==='topup'?'block':'none';
  document.getElementById('tx-amount').required=type==='topup';
  document.getElementById('tx-sessions-label').textContent=type==='topup'?'增加堂數 *':'扣除堂數 *';
  document.getElementById('tx-note').placeholder=type==='topup'?'例：10堂肩頸舒緩方案':'例：熱石深層按摩';
  document.getElementById('tx-sessions').max=type==='usage'?balance:999;
  document.getElementById('tx-sessions').value=1;
  document.getElementById('tx-amount').value='';
  document.getElementById('tx-note').value='';
  const sb=document.getElementById('tx-submit-btn');
  sb.textContent=type==='topup'?'確認儲值':'確認扣除';
  sb.className='btn '+(type==='topup'?'btn-primary':'btn-danger');
  openModal('transaction');
}

function renderPlanGrid(){
  document.getElementById('plan-grid').innerHTML=PLANS.map(p=>`
    <div class="plan-pill ${state.selectedPlan&&state.selectedPlan.name===p.name?'selected':''}" onclick="selectPlan('${p.name}',${p.sessions},${p.price})">
      <div class="plan-pill-sessions">${p.sessions}</div>
      <div class="plan-pill-unit">堂</div>
      <div class="plan-pill-price">NT$${p.price.toLocaleString()}</div>
      <div style="font-size:10px;color:var(--ink-3);margin-top:1px">${p.name}</div>
    </div>`).join('');
}

function selectPlan(name, sessions, price){
  state.selectedPlan={name,sessions,price};
  document.getElementById('tx-sessions').value=sessions;
  document.getElementById('tx-amount').value=price;
  renderPlanGrid();
}

// Share modal
function openShareModal(customerId){
  state.shareTargetId=customerId;
  const c=state.customers.find(x=>x.id===customerId);
  if(!c) return;
  const b=getBalance(customerId);
  document.getElementById('share-modal-subtitle').innerHTML=`${c.name} · 目前剩餘 <strong>${b}</strong> 堂`;
  document.getElementById('share-balance-hint').textContent=`最多可轉贈 ${b} 堂`;
  document.getElementById('share-amount').max=b;
  document.getElementById('share-to-phone').value='';
  document.getElementById('share-amount').value='';
  document.getElementById('code-amount').value='';
  document.getElementById('share-code-result').style.display='none';
  switchShareTab('phone');
  openModal('share');
}

function switchShareTab(tab){
  state.shareTab=tab;
  document.getElementById('share-phone-panel').style.display=tab==='phone'?'block':'none';
  document.getElementById('share-code-panel').style.display=tab==='code'?'block':'none';
  document.getElementById('tab-phone').style.cssText=tab==='phone'?'flex:1;padding:8px;border:none;background:var(--color-background-info);color:var(--color-text-info);font-size:13px;cursor:pointer;font-family:var(--font-body)':'flex:1;padding:8px;border:none;background:var(--color-background-secondary);color:var(--color-text-secondary);font-size:13px;cursor:pointer;font-family:var(--font-body)';
  document.getElementById('tab-code').style.cssText=tab==='code'?'flex:1;padding:8px;border:none;background:var(--color-background-info);color:var(--color-text-info);font-size:13px;cursor:pointer;font-family:var(--font-body)':'flex:1;padding:8px;border:none;background:var(--color-background-secondary);color:var(--color-text-secondary);font-size:13px;cursor:pointer;font-family:var(--font-body)';
}

function generateShareCode(){
  const amt=parseInt(document.getElementById('code-amount').value||0);
  if(!amt||amt<1){showToast('⚠ 請輸入堂數');return;}
  const b=getBalance(state.shareTargetId);
  if(amt>b){showToast('⚠ 堂數不足');return;}
  const code=genCode();
  const expiry=new Date(Date.now()+48*3600*1000).toISOString();
  state.shareCodes.push({code,fromId:state.shareTargetId,sessions:amt,expiry,used:false});
  // Deduct from sender
  state.transactions.push({id:Date.now(),customerId:state.shareTargetId,type:'usage',sessions:amt,amount:0,date:new Date().toISOString(),note:`分享碼 ${code} — 轉贈 ${amt} 堂`});
  save();
  document.getElementById('gen-code').textContent=code;
  document.getElementById('gen-code-info').textContent=`${amt} 堂 · 48小時內有效`;
  document.getElementById('share-code-result').style.display='block';
  if(state.currentPage==='profile') renderProfile();
}

// Redeem modal
function openRedeemModal(customerId){
  state.redeemTargetId=customerId;
  const c=state.customers.find(x=>x.id===customerId);
  document.getElementById('redeem-subtitle').textContent=c?c.name+' 兌換分享碼':'';
  document.getElementById('redeem-code-input').value='';
  document.getElementById('redeem-result').style.display='none';
  openModal('redeem');
}

// ─── Form Handlers ────────────────────────────────────────────────────────────
function handleAddCustomer(e){
  e.preventDefault();
  const f=new FormData(e.target);
  state.customers=[{id:Date.now(),name:f.get('name').trim(),phone:f.get('phone').trim(),birthday:f.get('birthday')||'',gender:f.get('gender'),notes:f.get('notes').trim(),createdAt:new Date().toISOString().split('T')[0]},...state.customers];
  save(); closeModal('add-customer'); e.target.reset();
  showToast('✓ 客戶已建立');
  if(state.currentPage==='customers') renderCustomers();
  if(state.currentPage==='dashboard') renderDashboard();
  updateNotifBadge();
}

function handleTransaction(e){
  e.preventDefault();
  const f=new FormData(e.target);
  const sessions=parseInt(f.get('sessions'),10);
  if(state.txType==='usage'&&sessions>getBalance(state.txTargetId)){showToast('⚠ 剩餘堂數不足');return;}
  const amount=state.txType==='topup'?parseInt(f.get('amount')||0,10):0;
  state.transactions=[{id:Date.now(),customerId:state.txTargetId,type:state.txType,sessions,amount,date:new Date().toISOString(),note:f.get('note').trim()},...state.transactions];
  save(); closeModal('transaction'); e.target.reset(); state.selectedPlan=null;
  showToast(state.txType==='topup'?'✓ 儲值成功':'✓ 已記錄使用');
  if(state.currentPage==='profile') renderProfile();
  if(state.currentPage==='customers') renderCustomers();
  if(state.currentPage==='dashboard') renderDashboard();
  updateNotifBadge();
}

function handleSharePhone(e){
  e.preventDefault();
  const f=new FormData(e.target);
  const toPhone=f.get('toPhone').trim().replace(/-/g,'');
  const amt=parseInt(f.get('shareAmt'),10);
  const msg=f.get('shareMsg');
  if(!amt||amt<1){showToast('⚠ 請輸入堂數');return;}
  const b=getBalance(state.shareTargetId);
  if(amt>b){showToast('⚠ 堂數不足');return;}
  // Find or note target
  const targetCustomer=state.customers.find(c=>c.phone.replace(/-/g,'')===toPhone);
  // Deduct from sender
  const sender=state.customers.find(x=>x.id===state.shareTargetId);
  state.transactions.push({id:Date.now(),customerId:state.shareTargetId,type:'usage',sessions:amt,amount:0,date:new Date().toISOString(),note:`轉贈 ${amt}堂 → ${toPhone}${msg?' ('+msg+')':''}`});
  // Add to receiver
  if(targetCustomer){
    state.transactions.push({id:Date.now()+1,customerId:targetCustomer.id,type:'topup',sessions:amt,amount:0,date:new Date().toISOString(),note:`${sender?sender.name:'某人'}轉贈 ${amt}堂${msg?' — '+msg:''}`});
    showToast(`✓ 已轉贈 ${amt}堂 給 ${targetCustomer.name}`);
  } else {
    showToast(`✓ 已扣除 ${amt}堂，對方(${toPhone})建檔後可入帳`);
  }
  save(); closeModal('share');
  if(state.currentPage==='profile') renderProfile();
  if(state.currentPage==='dashboard') renderDashboard();
}

function handleRedeem(e){
  e.preventDefault();
  const code=document.getElementById('redeem-code-input').value.trim().toUpperCase();
  const idx=state.shareCodes.findIndex(c=>c.code===code&&!c.used);
  if(idx===-1){
    document.getElementById('redeem-result').style.display='block';
    document.getElementById('redeem-result').innerHTML='<div style="color:var(--rose);font-size:13px;padding:8px 0">⚠ 分享碼無效、已使用或已過期</div>';
    return;
  }
  const sc=state.shareCodes[idx];
  if(new Date(sc.expiry)<new Date()){
    document.getElementById('redeem-result').innerHTML='<div style="color:var(--rose);font-size:13px;padding:8px 0">⚠ 此分享碼已過期（限48小時）</div>';
    document.getElementById('redeem-result').style.display='block';
    return;
  }
  state.shareCodes[idx].used=true;
  state.transactions.push({id:Date.now(),customerId:state.redeemTargetId,type:'topup',sessions:sc.sessions,amount:0,date:new Date().toISOString(),note:`兌換分享碼 ${code} — +${sc.sessions}堂`});
  save(); closeModal('redeem');
  showToast(`✓ 兌換成功！獲得 ${sc.sessions} 堂`);
  if(state.currentPage==='profile') renderProfile();
}

// ─── Toast ────────────────────────────────────────────────────────────────────
let toastTimer;
function showToast(msg){
  const el=document.getElementById('toast');
  document.getElementById('toast-msg').textContent=msg;
  el.style.display='flex'; clearTimeout(toastTimer);
  toastTimer=setTimeout(()=>{el.style.display='none';},3000);
}

// ─── Init ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded',()=>{
  loadData();
  document.getElementById('today-date').textContent=new Date().toLocaleDateString('zh-TW');
  navigate('dashboard');
});
