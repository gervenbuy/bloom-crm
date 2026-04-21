# 🌸 Bloom CRM v2 — 療程堂數管理系統

> 物理治療師 / SPA / 芳療 / 按摩業者專用

---

## 📁 檔案清單

| 檔案 | 說明 |
|------|------|
| `index.html` | CRM 管理後台（你使用）|
| `style.css` | 所有樣式 |
| `app.js` | 所有邏輯 |
| `intake-form.html` | 病患自填病歷表單（給病患的連結）|

---

## ✨ 新增功能（v2）

### 📋 病歷表單（`intake-form.html`）
- 5 步驟分頁填寫，手機也好用
- 基本資料、主訴部位、症狀描述、病史、預約方案
- 疼痛程度色階（1-10）
- 填完自動存入 localStorage，CRM 後台可收到

### 📬 新進病歷審核
- CRM 側邊欄有「新進病歷」頁面，顯示病患提交的表單
- 紅點提示未讀數量
- 點「審核建檔」自動建立客戶檔案
- 若手機號碼已存在，自動關聯

### 💳 五大方案快速選擇
- 體驗價 $799
- 部位處理 $899
- 全身調理 $1,800
- 身體重建計畫 5次 $7,500
- 長期結構調整會員 10次 $12,500

### 🔗 堂數共享（點數轉贈）
**方式一：直接轉給指定手機號碼**
- 輸入對方手機號碼，選擇轉贈堂數
- 若對方已建檔，自動入帳
- 若對方未建檔，建檔後可入帳

**方式二：產生分享碼**
- 產生 6 位英數碼，48 小時有效
- 分享給親友，對方在系統輸入兌換

### LINE@ 整合說明
目前版本已預留 LINE 整合位置：
1. `intake-form.html` 完成後的感謝頁面有「加入 LINE 官方帳號」按鈕
2. 請將按鈕的 `onclick` 改為：`window.open('https://line.me/R/ti/p/@你的LINE@ID')`

完整 LINE Login 需要 LINE Developers 後端設定，建議之後搭配 Netlify / Vercel 部署。

---

## 🚀 部署到 GitHub Pages

1. 建立新 Repository（如 `bloom-crm`）
2. 上傳全部 4 個檔案
3. Settings → Pages → main / root → Save
4. 你的 CRM：`https://你的帳號.github.io/bloom-crm/`
5. 病患表單：`https://你的帳號.github.io/bloom-crm/intake-form.html`

**把病患表單連結放在：**
- LINE@ 選單
- 預約確認訊息中
- Instagram bio 連結

---

## 💡 使用流程

```
病患掃碼/點連結 → 填寫 intake-form.html
       ↓
你開啟 index.html → 側邊欄「新進病歷」看到新提交
       ↓
點「審核建檔」→ 自動建立客戶檔案
       ↓
客戶到診 → 選方案儲值 → 每次療程扣堂
       ↓
客戶可分享堂數給親友（轉贈 / 分享碼）
```

---

## 📄 License
MIT — 自由使用、修改、商業部署。
