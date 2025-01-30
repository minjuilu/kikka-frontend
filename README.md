# Kikka Hirado - 住宿網站前端專案
此專案為 Kikka Hirado 酒店的官方網站實現，專注於用戶註冊、登入、密碼重置以及動態視覺效果的實現。網站的前端使用 Vue.js 框架，並整合了 Firebase 來管理用戶驗證，後端資料儲存於 Firebase 中。網站主頁提供了一個帶有圖片輪播的視覺體驗，並使用 Toastify 來展示各種提示消息。


## 專案目的
此專案的主要目的是練習 Firebase 的用戶認證和資料儲存功能，同時提高對 Tailwind CSS 的使用能力。
透過這個專案，我熟悉了如何使用 Firebase 提供的各種功能（如註冊、登入、密碼重置等）以及如何用 Tailwind CSS 構建網頁設計。


## 功能介紹
- 用戶註冊與登入：實現了基於電子郵件和密碼的用戶註冊與登入功能。
- 忘記密碼：用戶可通過 Firebase 實現密碼重置功能。
- 小眼睛顯示密碼功能：為提高用戶體驗，提供顯示/隱藏密碼的功能。
- Google 登入：集成了 Google 認證，允許用戶使用 Google 帳戶登入。
- 動態提示彈窗：使用 Toastify 進行彈窗提示，反饋註冊、登入和其他操作結果。
- 輪播圖效果：使用 Swiper 進行主頁圖片的滑動展示，增強網站的視覺效果。


## 技術
- 前端框架：Vue.js 3
- 樣式框架：Tailwind CSS
- 資料庫與身份驗證：Firebase
- 圖片輪播：Swiper
- 彈窗提示：Toastify
- 打包工具：Vite


## 安裝與運行
1. clone 此專案：
```sh
git clone https://github.com/minjuilu/kikka-frontend.git
```
2. 進入專案目錄：
```sh
cd frontend
```
3. 安裝套件：
```sh
npm install
```
4. 創建一個 .env 文件，並在其中添加 Firebase 配置
5. 啟動開發伺服器：
```sh
npm run dev
```
6. 在瀏覽器中打開 http://localhost:3000


## 相關資源
- Vue.js 官方網站
- Firebase 官方網站
- Swiper 官方網站
- Toastify 官方網站

