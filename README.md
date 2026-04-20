# 🌸 Bloom CRM — 療程堂數管理系統

> 專為物理治療師、SPA、芳療、按摩業者設計的客戶堂數管理系統

[![GitHub Pages](https://img.shields.io/badge/Demo-GitHub%20Pages-teal?style=flat-square)](https://your-username.github.io/bloom-crm)

---

## ✨ 功能特色

| 功能 | 說明 |
|------|------|
| 📋 客戶管理 | 建立客戶檔案，記錄姓名、手機、生日、性別、健康備註 |
| 💳 堂數儲值 | 支援快速套餐（5/10/20堂）或自訂堂數與金額 |
| ✂️ 課程扣堂 | 記錄每次療程使用，自動更新剩餘堂數，防呆防扣超額 |
| 🔍 快速搜尋 | 可用姓名或手機號碼即時搜尋客戶 |
| 🎂 生日提醒 | 自動計算 30 天內生日客戶，顯示倒數天數 |
| ⚠️ 堂數預警 | 剩餘 ≤2 堂時自動標示警示，建議主動聯繫儲值 |
| 📊 儀表板 | 即時顯示總客戶數、總剩餘堂數、累計儲值金額 |
| 💾 本地儲存 | 所有資料儲存於瀏覽器 localStorage，不需後端伺服器 |

---

## 🚀 部署到 GitHub Pages

### 方法一：直接上傳（最簡單）

1. 在 GitHub 建立一個新的 Repository（例如：`bloom-crm`）
2. 上傳以下三個檔案：
   - `index.html`
   - `style.css`
   - `app.js`
3. 進入 Repository → **Settings** → **Pages**
4. Source 選擇 `Deploy from a branch`，Branch 選 `main`，Folder 選 `/ (root)`
5. 點 **Save**，等待約 1 分鐘後即可透過以下網址訪問：
   ```
   https://your-username.github.io/bloom-crm
   ```

### 方法二：使用 Git 指令

```bash
git init
git add .
git commit -m "Initial commit: Bloom CRM"
git remote add origin https://github.com/your-username/bloom-crm.git
git push -u origin main
```

---

## 📁 檔案結構

```
bloom-crm/
├── index.html   # 主要 HTML 架構
├── style.css    # 所有樣式（CSS 變數、RWD、動畫）
├── app.js       # 所有邏輯（資料、渲染、事件處理）
└── README.md    # 本說明文件
```

---

## 🛠️ 技術說明

- **純前端**：零依賴，不需要 Node.js、React 或任何框架
- **字型**：DM Serif Display + DM Sans（Google Fonts）
- **資料儲存**：瀏覽器 `localStorage`，重整頁面資料不會遺失
- **響應式設計**：支援桌機、平板、手機

---

## 💡 未來可擴充功能

- [ ] 資料匯出為 CSV / Excel
- [ ] 預約日曆整合
- [ ] LINE Notify 生日提醒
- [ ] 多位治療師帳號管理
- [ ] 深色模式（Dark Mode）
- [ ] PWA 離線支援

---

## 📄 License

MIT License — 自由使用、修改、商業部署。
