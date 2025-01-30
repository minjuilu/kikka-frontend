# Kikka Hirado - 住宿網站專案： Vue + Firebase
此專案為 Kikka Hirado 住宿網站實現，專注於用戶註冊、登入、密碼重置以及主頁動態視覺效果的實現。
網站的前端使用 Vue.js 框架，並整合了 Firebase 來管理用戶驗證，後端資料儲存於 Firebase 中。
網站主頁提供了一個帶有圖片輪播的視覺體驗，並使用 Toastify 來展示各種提示。


## 專案目的
此專案的主要目的是練習 Firebase 的用戶認證和資料儲存功能，同時提高對 Tailwind CSS 的使用能力。


## 功能介紹
- 用戶註冊與登入
- Google 登入
- 忘記密碼 (密碼重置)
- 小眼睛顯示/隱藏密碼功能
- Toastify 動態彈窗提示
- 主頁 Swiper 輪播圖效果

## 技術
- 前端框架：Vue.js 3
- 樣式框架：Tailwind CSS
- 後端框架：Express.js
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

