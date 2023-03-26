# 登入機制

## 功能
- 帳密檢查機制
- 保存使用者登入狀態


## 開始使用
1. 請先確認本地端有安裝 Node.js 及 npm

2. 將專案 git clone 至本地端

3. 開啟終端機移動至專案資料夾

`cd <專案資料夾位置>`

4. 安裝需要的套件

`npm install`

5. 安裝完成後，設定環境變數，連線 MongoDB

`MONGODB_URI=mongodb+srv://<Your MongoDB Account>:<Your MongoDB Password>@cluster0.xxxx.xxxx.net/<Your MongoDB Table>?retryWrites=true&w=majority`

6. 執行專案

`npm run start`

7. 若出現此訊息表示執行順利，在瀏覽器輸入以下網址開始使用

`App is running on http://localhost:3000
mongodb connected!`

8. 如果要暫停使用，請在終端機輸入以下指令，並關閉瀏覽器

`ctrl + c`

9. 如有需要生成種子資料請輸入以下指令

`npm run seed`

## 開發工具
- Node.js ^18.14.2
- Nodemon
- Express ^4.18.2
- Express-handlebars ^7.0.2
- MongoDB
- mongoose ^7.0.2
- dotenv ^16.0.3
- cookie-parser ^1.4.6
- Bootstrap