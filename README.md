大致上的內容和https://www.youtube.com/watch?v=zqV7NIFGDrQ&t=8080s所教的差不多，但是有更動一些地方，更動點如下:
D:\REACT\react-crash-course\src\index.js更動點:
React 18 之後，官方棄用了 ReactDOM.render()，改為 createRoot().render()。
ReactDOM.createRoot() 創建的是 並發模式（Concurrent Mode） 的 root，優化效能。
D:\REACT\react-crash-course\src\global\constants.js 更動點：
API 伺服器端口變更：
老師的版本使用 http://localhost:3000
我的版本改為 http://localhost:5000，需確保 json-server 端口一致。
新增 API_DELETE_ITEM 變數：
老師的程式碼未定義
我的版本定義為 http://localhost:5000/posts/1/data，
但可能應該改為 http://localhost:5000/posts/1 以符合 RESTful API 規範。
D:\REACT\New-React\src\pages\Home\index.js 更動點：
fetchSetData 函式內的 data 結構不同:
老師的版本：直接傳入 data，用 { data } 更新 API。
我的版本：先取得完整的 json，再更新其中的 data，保留原始結構。
功能上差異不大，但我的版本確保 API 結構不變，以避免資料遺失問題。
D:\REACT\react-crash-course\src\pages\Home\components\Edit.js 更動點：
老師的版本：直接用 setState 更新 prevData，不與後端同步。
我的版本：
新增 API 請求，使用 fetch 取得 db.json 的現有資料，並透過 PUT 更新後端。
確保資料不遺失，只更新 data，保留原始 API 結構。
完成後才更新 React state，確保前端與後端資料同步。
D:\REACT\react-crash-course\src\pages\Home\components\Item.js 更動點：
老師的版本：只在前端用 setState 直接刪除資料，沒有同步到後端。
我的版本：
新增 API 請求，使用 fetch 先取得 db.json 的現有資料。
確保刪除資料同步到後端，透過 PUT 更新 db.json。
刪除後才更新 React state，確保前端與後端一致。
D:\REACT\react-crash-course\src\pages\Home\components\List.js 更動點：
老師的版本：直接使用 listData，沒有額外處理 undefined 值。
我的版本：
加入預設值，確保 note、date、time 不為 undefined，避免顯示錯誤。
當 listData 為空時，顯示 "暫無備忘錄"。
