/* ============================================================
   Bloom CRM — app.js
   Pure Vanilla JS — no dependencies required
   ============================================================ */

'use strict';

// ─── SVG Icons ──────────────────────────────────────────────────────────────
const ICON = {
  trendingUp:   `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
  users:        `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  zap:          `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  alertCircle:  `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
  creditCard:   `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>`,
  gift:         `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>`,
  history:      `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-5H1"/></svg>`,
  arrowUpRight: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>`,
  arrowDownLeft:`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="17" y1="7" x2="7" y2="17"/><polyline points="17 17 7 17 7 7"/></svg>`,
  chevronRight: `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`,
  chevronLeft:  `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>`,
  plus:         `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  phone:        `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.89 9.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.82 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  calendar:     `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  fileText:     `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
  award:        `<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>`,
  checkCircle:  `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
  search:       `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  historyLg:    `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-5H1"/></svg>`,
};

// ─── Data Store ──────────────────────────────────────────────────────────────
const STORAGE_KEY_C = 'bloom_customers';
const STORAGE_KEY_T = 'bloom_transactions';

const SEED_CUSTOMERS = [
  { id: 1, name: '王大明', phone: '0912-345-678', birthday: '1990-04-25', gender: '男', notes: '右肩旋轉肌發炎，注意按壓力度。偏好中度力道。', createdAt: '2026-01-10' },
  { id: 2, name: '林小美', phone: '0987-654-321', birthday: '1988-05-15', gender: '女', notes: '長期肩頸痠痛，喜歡精油按摩，勿使用薰衣草。', createdAt: '2026-01-15' },
  { id: 3, name: '陳建國', phone: '0933-111-222', birthday: '1975-12-10', gender: '男', notes: '運動傷害修復（膝關節），建議熱石療法。', createdAt: '2026-02-01' },
  { id: 4, name: '張雅婷', phone: '0966-777-888', birthday: '1995-07-03', gender: '女', notes: '初次客戶，全身放鬆為主。', createdAt: '2026-04-19' },
];

const SEED_TRANSACTIONS = [
  { id: 1, customerId: 1, type: 'topup',  sessions: 10, amount: 6500,  date: '2026-03-01T10:00:00', note: '10堂肩頸舒緩方案' },
  { id: 2, customerId: 1, type: 'usage',  sessions: 1,  amount: 0,     date: '2026-03-15T14:00:00', note: '徒手治療（肩部）' },
  { id: 3, customerId: 1, type: 'usage',  sessions: 1,  amount: 0,     date: '2026-04-02T10:30:00', note: '超音波治療（肩部）' },
  { id: 4, customerId: 2, type: 'topup',  sessions: 20, amount: 12000, date: '2026-02-10T11:00:00', note: 'VIP 芳療 20 堂方案' },
  { id: 5, customerId: 2, type: 'usage',  sessions: 2,  amount: 0,     date: '2026-03-20T15:30:00', note: '全身深層精油按摩（扣2堂）' },
  { id: 6, customerId: 2, type: 'usage',  sessions: 1,  amount: 0,     date: '2026-04-10T09:00:00', note: '熱石療法' },
  { id: 7, customerId: 3, type: 'topup',  sessions: 5,  amount: 3500,  date: '2026-04-01T14:00:00', note: '膝關節修復5堂方案' },
  { id: 8, customerId: 3, type: 'usage',  sessions: 1,  amount: 0,     date: '2026-04-18T13:00:00', note: '肌筋膜鬆動術' },
  { id: 9, customerId: 4, type: 'topup',  sessions: 5,  amount: 3500,  date: '2026-04-19T16:00:00', note: '初次儲值5堂' },
];

const PRESET_PLANS = [
  { sessions: 5,  price: 3500  },
  { sessions: 10, price: 6500  },
  { sessions: 20, price: 12000 },
];

const AVATAR_COLORS = ['avatar-teal','avatar-purple','avatar-rose','avatar-gold','avatar-blue'];

// ─── State ───────────────────────────────────────────────────────────────────
let state = {
  customers: [],
  transactions: [],
  currentPage: 'dashboard',
  selectedCustomerId: null,
  txType: 'topup',
  txTargetId: null,
  selectedPlan: null,
};

// ─── Storage ─────────────────────────────────────────────────────────────────
function loadData() {
  try {
    const c = localStorage.getItem(STORAGE_KEY_C);
    const t = localStorage.getItem(STORAGE_KEY_T);
    state.customers    = c ? JSON.parse(c) : JSON.parse(JSON.stringify(SEED_CUSTOMERS));
    state.transactions = t ? JSON.parse(t) : JSON.parse(JSON.stringify(SEED_TRANSACTIONS));
  } catch(e) {
    state.customers    = JSON.parse(JSON.stringify(SEED_CUSTOMERS));
    state.transactions = JSON.parse(JSON.stringify(SEED_TRANSACTIONS));
  }
}
function saveData() {
  localStorage.setItem(STORAGE_KEY_C, JSON.stringify(state.customers));
  localStorage.setItem(STORAGE_KEY_T, JSON.stringify(state.transactions));
}

// ─── Helpers ─────────────────────────────────────────────────────────────────
function avatarColor(name) {
  return AVATAR_COLORS[(name.charCodeAt(0) || 0) % AVATAR_COLORS.length];
}

function getBalance(customerId) {
  return state.transactions
    .filter(t => t.customerId === customerId)
    .reduce((a, t) => t.type === 'topup' ? a + t.sessions : a - t.sessions, 0);
}

function getTotalSessions(customerId) {
  return state.transactions
    .filter(t => t.customerId === customerId && t.type === 'topup')
    .reduce((a, t) => a + t.sessions, 0);
}

function getTotalSpend(customerId) {
  return state.transactions
    .filter(t => t.customerId === customerId && t.type === 'topup')
    .reduce((a, t) => a + t.amount, 0);
}

function formatDate(iso) {
  return new Date(iso).toLocaleString('zh-TW', {
    year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit'
  });
}

function daysBetween(d1, d2) {
  return Math.round((d2 - d1) / 86400000);
}

function getUpcomingBirthdays() {
  const today = new Date(); today.setHours(0,0,0,0);
  return state.customers
    .filter(c => c.birthday)
    .map(c => {
      const [,m,d] = c.birthday.split('-').map(Number);
      let bday = new Date(today.getFullYear(), m - 1, d);
      if (bday < today) bday = new Date(today.getFullYear() + 1, m - 1, d);
      return { ...c, bdayDate: bday, daysLeft: daysBetween(today, bday) };
    })
    .filter(c => c.daysLeft <= 30)
    .sort((a, b) => a.daysLeft - b.daysLeft);
}

function getLowSessionCustomers() {
  return state.customers.filter(c => {
    const b = getBalance(c.id);
    return b >= 0 && b <= 2;
  });
}

function barClass(balance) {
  if (balance === 0) return 'red';
  if (balance <= 2)  return 'amber';
  return 'green';
}

function badgeClass(balance) {
  if (balance === 0) return 'badge-red';
  if (balance <= 2)  return 'badge-amber';
  return 'badge-green';
}

// ─── Navigation ───────────────────────────────────────────────────────────────
function navigate(page, customerId) {
  state.currentPage = page;
  if (customerId) state.selectedCustomerId = customerId;

  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');

  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.classList.toggle('active',
      btn.dataset.page === page || (page === 'profile' && btn.dataset.page === 'customers')
    );
  });

  const breadcrumb = document.getElementById('breadcrumb');
  const mainTitle  = document.getElementById('main-title');

  if (page === 'dashboard') {
    breadcrumb.textContent = '主頁';
    mainTitle.innerHTML = '<span>總覽</span> 儀表板';
    renderDashboard();
  } else if (page === 'customers') {
    breadcrumb.textContent = '客戶管理';
    mainTitle.innerHTML = '客戶<span>管理</span>';
    renderCustomers();
  } else if (page === 'profile') {
    breadcrumb.textContent = '客戶管理 / 詳細資料';
    const c = state.customers.find(x => x.id === state.selectedCustomerId);
    mainTitle.innerHTML = c ? `<span>${c.name}</span>` : '客戶詳情';
    renderProfile();
  }
  updateNotifBadge();
}

// ─── Notification Badge ───────────────────────────────────────────────────────
function updateNotifBadge() {
  const count = getUpcomingBirthdays().length + getLowSessionCustomers().length;
  const badge = document.getElementById('nav-notif-badge');
  const dot   = document.getElementById('notif-dot');
  if (count > 0) {
    badge.textContent = count; badge.style.display = 'inline-flex';
    dot.style.display = 'block';
  } else {
    badge.style.display = 'none';
    dot.style.display = 'none';
  }
}

// ─── Dashboard ────────────────────────────────────────────────────────────────
function renderDashboard() {
  const el = document.getElementById('page-dashboard');
  const totalBalance = state.customers.reduce((a, c) => a + getBalance(c.id), 0);
  const totalRevenue = state.transactions.filter(t => t.type === 'topup').reduce((a,t) => a + t.amount, 0);
  const birthdays    = getUpcomingBirthdays();
  const lowSessions  = getLowSessionCustomers();
  const recentTxs    = [...state.transactions].sort((a,b) => new Date(b.date) - new Date(a.date)).slice(0, 8);

  el.innerHTML = `
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
        <div class="kpi-value">${totalBalance}</div>
        <div class="kpi-delta up">${ICON.trendingUp} 全客戶合計</div>
        <div class="kpi-bg-icon">${ICON.zap}</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-icon rose">${ICON.alertCircle}</div>
        <div class="kpi-label">堂數即將用盡</div>
        <div class="kpi-value">${lowSessions.length}</div>
        <div class="kpi-delta warn">${ICON.alertCircle} 建議主動聯繫</div>
        <div class="kpi-bg-icon">${ICON.alertCircle}</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-icon gold">${ICON.creditCard}</div>
        <div class="kpi-label">累計總儲值金額</div>
        <div class="kpi-value" style="font-size:18px">NT$ ${totalRevenue.toLocaleString()}</div>
        <div class="kpi-delta up">${ICON.trendingUp} 歷史累計</div>
        <div class="kpi-bg-icon">${ICON.creditCard}</div>
      </div>
    </div>

    <div class="three-col">
      <div class="panel">
        <div class="panel-header">
          ${ICON.history}
          <span class="panel-title">最近交易紀錄</span>
          <button class="btn btn-ghost btn-sm" style="margin-left:auto" onclick="navigate('customers')">查看所有客戶 →</button>
        </div>
        <div class="panel-body">
          ${recentTxs.length === 0 ? `<div class="empty-state">${ICON.historyLg}<div class="empty-title">尚無交易記錄</div></div>` :
            recentTxs.map(tx => {
              const c = state.customers.find(x => x.id === tx.customerId);
              return `
              <div class="tx-row">
                <div class="tx-icon ${tx.type}">${tx.type === 'topup' ? ICON.arrowUpRight : ICON.arrowDownLeft}</div>
                <div class="avatar ${c ? avatarColor(c.name) : 'avatar-teal'}" style="width:30px;height:30px;font-size:12px;border-radius:8px;flex-shrink:0">${c ? c.name[0] : '?'}</div>
                <div class="tx-info">
                  <div class="tx-title">${c ? c.name : '未知'} <span style="font-weight:400;color:var(--ink-3)">— ${tx.note}</span></div>
                  <div class="tx-sub">${formatDate(tx.date)}</div>
                </div>
                <div class="tx-amount ${tx.type}">
                  ${tx.type === 'topup' ? '+' : '-'}${tx.sessions} 堂
                  ${tx.type === 'topup' ? `<div class="tx-money">NT$ ${tx.amount.toLocaleString()}</div>` : ''}
                </div>
              </div>`;
            }).join('')
          }
        </div>
      </div>

      <div style="display:flex;flex-direction:column;gap:16px">
        <div class="panel">
          <div class="panel-header">
            ${ICON.gift}
            <span class="panel-title">近 30 天生日</span>
            <span class="badge badge-red" style="margin-left:auto">${birthdays.length}</span>
          </div>
          <div class="panel-body" style="padding:12px 16px">
            ${birthdays.length === 0
              ? `<div class="empty-state" style="padding:24px">${ICON.checkCircle}<div class="empty-title" style="margin-top:8px">近期無生日</div></div>`
              : birthdays.map(c => `
                <div class="bday-row" onclick="navigate('profile',${c.id})">
                  <div class="bday-date-badge">${c.birthday.substring(5).replace('-','/')}</div>
                  <div style="flex:1">
                    <div style="font-weight:500;font-size:13.5px">${c.name}</div>
                    <div style="font-size:11.5px;color:#9f1239;margin-top:1px">${c.daysLeft === 0 ? '🎂 今天生日！' : `還有 ${c.daysLeft} 天`}</div>
                  </div>
                  ${ICON.chevronRight}
                </div>`).join('')
            }
          </div>
        </div>

        <div class="panel">
          <div class="panel-header">${ICON.alertCircle}<span class="panel-title">堂數不足預警</span></div>
          <div class="panel-body" style="padding:12px 16px">
            ${lowSessions.length === 0
              ? `<div class="empty-state" style="padding:24px">${ICON.checkCircle}<div class="empty-title" style="margin-top:8px">目前無客戶堂數不足</div></div>`
              : lowSessions.map(c => {
                  const b = getBalance(c.id);
                  return `
                  <div style="display:flex;align-items:center;gap:10px;padding:10px 0;border-bottom:1px solid var(--border)">
                    <div class="avatar ${avatarColor(c.name)}">${c.name[0]}</div>
                    <div style="flex:1">
                      <div style="font-size:13px;font-weight:500">${c.name}</div>
                      <div style="font-size:11.5px;color:var(--ink-3);margin-top:1px">${c.phone}</div>
                    </div>
                    <span class="${badgeClass(b)} badge">${b} 堂</span>
                    <button class="btn btn-sm btn-primary" onclick="openTxModal(${c.id},'topup')">儲值</button>
                  </div>`;
                }).join('')
            }
          </div>
        </div>
      </div>
    </div>
  `;
}

// ─── Customers ────────────────────────────────────────────────────────────────
function renderCustomers(query) {
  const el = document.getElementById('page-customers');
  const q  = (query || '').toLowerCase().replace(/-/g,'');
  const list = state.customers.filter(c =>
    c.name.includes(query || '') ||
    c.phone.replace(/-/g,'').includes(q)
  );

  el.innerHTML = `
    <div class="search-row">
      <div class="search-wrap">
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <input class="search-input" id="customer-search" placeholder="以姓名或手機號碼搜尋客戶..." oninput="renderCustomers(this.value)" value="${query || ''}" />
      </div>
      <button class="btn btn-primary" onclick="openModal('add-customer')">
        ${ICON.plus} 新增客戶
      </button>
    </div>

    <div class="panel">
      <table class="customer-table">
        <thead>
          <tr>
            <th>客戶</th>
            <th>手機號碼</th>
            <th>生日</th>
            <th>剩餘堂數</th>
            <th>累計儲值</th>
            <th style="text-align:right">操作</th>
          </tr>
        </thead>
        <tbody>
          ${list.length === 0
            ? `<tr><td colspan="6"><div class="empty-state">${ICON.search}<div class="empty-title">找不到符合的客戶</div><div class="empty-sub">請嘗試其他姓名或手機號碼</div></div></td></tr>`
            : list.map(c => {
                const balance = getBalance(c.id);
                const total   = getTotalSessions(c.id);
                const spend   = getTotalSpend(c.id);
                const pct     = total > 0 ? Math.round((balance / total) * 100) : 0;
                return `
                <tr onclick="navigate('profile',${c.id})" title="${c.name} の詳細資料">
                  <td>
                    <div style="display:flex;align-items:center;gap:10px">
                      <div class="avatar ${avatarColor(c.name)}">${c.name[0]}</div>
                      <div>
                        <div style="font-weight:500;font-size:13.5px">${c.name}</div>
                        <div style="font-size:11.5px;color:var(--ink-3);margin-top:1px">${c.gender}</div>
                      </div>
                    </div>
                  </td>
                  <td style="color:var(--ink-2);font-size:13.5px">${c.phone}</td>
                  <td style="color:var(--ink-3);font-size:13px">${c.birthday || '—'}</td>
                  <td style="min-width:140px">
                    <div style="font-weight:600;font-size:14px;margin-bottom:5px">
                      ${balance} <span style="font-weight:400;font-size:12px;color:var(--ink-3)">/ ${total} 堂</span>
                    </div>
                    <div class="session-meter">
                      <div class="session-bar-bg">
                        <div class="session-bar ${barClass(balance)}" style="width:${Math.max(pct,0)}%"></div>
                      </div>
                    </div>
                  </td>
                  <td style="color:var(--ink-2);font-size:13px">NT$ ${spend.toLocaleString()}</td>
                  <td style="text-align:right">
                    <div style="display:flex;gap:6px;justify-content:flex-end" onclick="event.stopPropagation()">
                      <button class="btn btn-sm btn-primary" onclick="openTxModal(${c.id},'topup')">儲值</button>
                      <button class="btn btn-sm" onclick="openTxModal(${c.id},'usage')">扣堂</button>
                      <button class="btn btn-sm btn-ghost" onclick="navigate('profile',${c.id})">${ICON.chevronRight}</button>
                    </div>
                  </td>
                </tr>`;
              }).join('')
          }
        </tbody>
      </table>
    </div>
  `;
}

// ─── Profile ─────────────────────────────────────────────────────────────────
function renderProfile() {
  const el = document.getElementById('page-profile');
  const c  = state.customers.find(x => x.id === state.selectedCustomerId);
  if (!c) { el.innerHTML = '<p>找不到客戶</p>'; return; }

  const balance = getBalance(c.id);
  const total   = getTotalSessions(c.id);
  const spend   = getTotalSpend(c.id);
  const pct     = total > 0 ? Math.round((balance / total) * 100) : 0;
  const txList  = state.transactions
    .filter(t => t.customerId === c.id)
    .sort((a,b) => new Date(b.date) - new Date(a.date));

  el.innerHTML = `
    <button class="btn btn-ghost btn-sm" style="margin-bottom:16px" onclick="navigate('customers')">
      ${ICON.chevronLeft} 返回列表
    </button>
    <div class="profile-grid">
      <div>
        <div class="profile-card">
          <div class="profile-card-header">
            <div class="avatar avatar-lg ${avatarColor(c.name)}" style="margin:0 auto">${c.name[0]}</div>
            <div class="profile-name">${c.name}</div>
            <div class="profile-meta">${c.gender} · 加入日期 ${c.createdAt || '—'}</div>
          </div>
          <div class="profile-card-body">
            <div class="profile-field">
              <div class="profile-field-icon">${ICON.phone}</div>
              <div>
                <div class="profile-field-label">手機號碼</div>
                <div class="profile-field-value">${c.phone}</div>
              </div>
            </div>
            <div class="profile-field">
              <div class="profile-field-icon">${ICON.gift}</div>
              <div>
                <div class="profile-field-label">生日</div>
                <div class="profile-field-value">${c.birthday || '未提供'}</div>
              </div>
            </div>
            <div class="profile-field">
              <div class="profile-field-icon">${ICON.fileText}</div>
              <div>
                <div class="profile-field-label">備註 / 健康狀況</div>
                <div class="profile-field-value">${c.notes || '無'}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="balance-card">
          <div class="balance-inner">
            <div class="balance-eyebrow">目前剩餘堂數</div>
            <div class="balance-number">${balance}</div>
            <div class="balance-label">已使用 ${total - balance} 堂 / 總儲值 ${total} 堂</div>
            <div class="balance-progress">
              <div class="session-bar-bg">
                <div class="session-bar ${barClass(balance)}" style="width:${Math.max(pct,0)}%"></div>
              </div>
            </div>
            <div class="balance-spend">累計儲值金額：NT$ ${spend.toLocaleString()}</div>
            <div class="balance-actions">
              <button class="balance-btn primary" onclick="openTxModal(${c.id},'topup')">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                儲值堂數
              </button>
              <button class="balance-btn secondary" onclick="openTxModal(${c.id},'usage')">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="17" y1="7" x2="7" y2="17"/><polyline points="17 17 7 17 7 7"/></svg>
                使用扣堂
              </button>
            </div>
          </div>
          <div class="balance-bg-icon">${ICON.award}</div>
        </div>
      </div>

      <div class="profile-tx-panel">
        <div class="panel-header">
          ${ICON.history}
          <span class="panel-title">交易記錄</span>
          <span style="margin-left:auto;font-size:12px;color:var(--ink-3)">${txList.length} 筆</span>
        </div>
        <div class="profile-tx-body">
          ${txList.length === 0
            ? `<div class="empty-state">${ICON.historyLg}<div class="empty-title" style="margin-top:8px">尚無交易記錄</div></div>`
            : txList.map(tx => `
              <div class="tx-row">
                <div class="tx-icon ${tx.type}">${tx.type === 'topup' ? ICON.arrowUpRight : ICON.arrowDownLeft}</div>
                <div class="tx-info">
                  <div class="tx-title">${tx.type === 'topup' ? '方案儲值' : '課程使用'}<span style="font-weight:400;color:var(--ink-3);margin-left:6px">— ${tx.note}</span></div>
                  <div class="tx-sub">${formatDate(tx.date)}</div>
                </div>
                <div class="tx-amount ${tx.type}">
                  ${tx.type === 'topup' ? '+' : '-'}${tx.sessions} 堂
                  ${tx.type === 'topup' ? `<div class="tx-money">NT$ ${tx.amount.toLocaleString()}</div>` : ''}
                </div>
              </div>`).join('')
          }
        </div>
      </div>
    </div>
  `;
}

// ─── Modals ───────────────────────────────────────────────────────────────────
function openModal(name) {
  document.getElementById('modal-' + name).style.display = 'flex';
}
function closeModal(name) {
  document.getElementById('modal-' + name).style.display = 'none';
}
function closeModalOutside(e, id) {
  if (e.target === e.currentTarget) closeModal(id.replace('modal-',''));
}

// Transaction modal
function openTxModal(customerId, type) {
  state.txTargetId = customerId;
  state.txType     = type;
  state.selectedPlan = null;
  const c = state.customers.find(x => x.id === customerId);
  if (!c) return;
  const balance = getBalance(customerId);

  // Title
  document.getElementById('tx-modal-title').textContent = type === 'topup' ? '為客戶儲值' : '記錄課程使用';
  document.getElementById('tx-modal-subtitle').innerHTML = `
    <div class="avatar ${avatarColor(c.name)}" style="width:18px;height:18px;font-size:9px;border-radius:4px;flex-shrink:0">${c.name[0]}</div>
    ${c.name} · ${c.phone}
  `;

  // Balance alert
  const alertEl = document.getElementById('tx-balance-alert');
  const textEl  = document.getElementById('tx-balance-text');
  if (type === 'usage') {
    alertEl.style.display = 'flex';
    textEl.innerHTML = `目前剩餘 <strong>${balance}</strong> 堂，請確認堂數充足後再扣除。`;
  } else {
    alertEl.style.display = 'none';
  }

  // Plan section
  const planSection = document.getElementById('tx-plan-section');
  if (type === 'topup') {
    planSection.style.display = 'block';
    renderPlanGrid();
  } else {
    planSection.style.display = 'none';
  }

  // Amount field
  const amtGroup = document.getElementById('tx-amount-group');
  amtGroup.style.display = type === 'topup' ? 'block' : 'none';
  if (type === 'topup') document.getElementById('tx-amount').required = true;
  else                  document.getElementById('tx-amount').required = false;

  // Labels
  document.getElementById('tx-sessions-label').textContent = type === 'topup' ? '增加堂數 *' : '扣除堂數 *';
  document.getElementById('tx-note').placeholder = type === 'topup' ? '例：10堂肩頸舒緩方案' : '例：熱石深層按摩';
  document.getElementById('tx-sessions').max = type === 'usage' ? balance : 999;
  document.getElementById('tx-sessions').value = 1;
  document.getElementById('tx-amount').value = '';
  document.getElementById('tx-note').value = '';

  // Submit button
  const submitBtn = document.getElementById('tx-submit-btn');
  submitBtn.textContent = type === 'topup' ? '確認儲值' : '確認扣除';
  submitBtn.className = 'btn ' + (type === 'topup' ? 'btn-primary' : 'btn-danger');

  openModal('transaction');
}

function renderPlanGrid() {
  const grid = document.getElementById('plan-grid');
  grid.innerHTML = PRESET_PLANS.map(p => `
    <div class="plan-pill ${state.selectedPlan && state.selectedPlan.sessions === p.sessions ? 'selected' : ''}"
         onclick="selectPlan(${p.sessions},${p.price})">
      <div class="plan-pill-sessions">${p.sessions}</div>
      <div class="plan-pill-unit">堂</div>
      <div class="plan-pill-price">NT$ ${p.price.toLocaleString()}</div>
    </div>
  `).join('');
}

function selectPlan(sessions, price) {
  state.selectedPlan = { sessions, price };
  document.getElementById('tx-sessions').value = sessions;
  document.getElementById('tx-amount').value   = price;
  renderPlanGrid();
}

// ─── Form Handlers ────────────────────────────────────────────────────────────
function handleAddCustomer(e) {
  e.preventDefault();
  const f = new FormData(e.target);
  const today = new Date().toISOString().split('T')[0];
  const c = {
    id:        Date.now(),
    name:      f.get('name').trim(),
    phone:     f.get('phone').trim(),
    birthday:  f.get('birthday') || '',
    gender:    f.get('gender'),
    notes:     f.get('notes').trim(),
    createdAt: today,
  };
  state.customers = [c, ...state.customers];
  saveData();
  closeModal('add-customer');
  e.target.reset();
  showToast('✓ 客戶已建立');
  if (state.currentPage === 'customers') renderCustomers();
  if (state.currentPage === 'dashboard') renderDashboard();
  updateNotifBadge();
}

function handleTransaction(e) {
  e.preventDefault();
  const f        = new FormData(e.target);
  const sessions = parseInt(f.get('sessions'), 10);
  const type     = state.txType;
  const balance  = getBalance(state.txTargetId);

  if (type === 'usage' && sessions > balance) {
    showToast('⚠ 剩餘堂數不足，無法扣除');
    return;
  }
  const amount = type === 'topup' ? (parseInt(f.get('amount') || 0, 10)) : 0;
  const tx = {
    id:         Date.now(),
    customerId: state.txTargetId,
    type,
    sessions,
    amount,
    date:       new Date().toISOString(),
    note:       f.get('note').trim(),
  };
  state.transactions = [tx, ...state.transactions];
  saveData();
  closeModal('transaction');
  e.target.reset();
  state.selectedPlan = null;
  showToast(type === 'topup' ? '✓ 儲值成功' : '✓ 已記錄使用');

  if (state.currentPage === 'profile') renderProfile();
  if (state.currentPage === 'customers') renderCustomers();
  if (state.currentPage === 'dashboard') renderDashboard();
  updateNotifBadge();
}

// ─── Toast ────────────────────────────────────────────────────────────────────
let toastTimer;
function showToast(msg) {
  const el = document.getElementById('toast');
  document.getElementById('toast-msg').textContent = msg;
  el.style.display = 'flex';
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { el.style.display = 'none'; }, 3000);
}

// ─── Init ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  loadData();

  // Today date
  document.getElementById('today-date').textContent =
    new Date().toLocaleDateString('zh-TW');

  // Initial render
  navigate('dashboard');
});
