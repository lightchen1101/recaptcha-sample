# reCAPTCHA v2 v3 sample

[v2 Sample demo](https://lightchen1101.github.io/recaptcha-sample/)

[v3 Sample demo](https://lightchen1101.github.io/recaptcha-sample/recapchat-v3.html)

# v2說明

1. **獲取 API 金鑰：**
   - 前往 [Google Recaptcha 管理員介面](https://www.google.com/recaptcha)。
   - 使用你的 Google 帳戶登入。
   - 點選「+」按鈕以新增一個網站。
   - 選擇「reCAPTCHA v2」，然後選擇「我不是機器人」。
   - 在網站主機名稱（Domains）下輸入你的網站域名。
   - 接下來，你可以選擇 reCAPTCHA 的類型。通常有「reCAPTCHA v2」和「Invisible reCAPTCHA」，請根據你的需求選擇。
   - 完成後，你會獲得一個 Site Key 和 Secret Key。這兩個金鑰是你與 Google Recaptcha API 進行通信的關鍵。

2. **在網站中整合 Recaptcha：**
   - 在你的網站 HTML 檔案中，將 Recaptcha 的 JavaScript 驅動程式加入。
   ```html
   <!-- 在 <head> 標籤中加入以下程式碼 -->
   <script src="https://www.google.com/recaptcha/api.js" async defer></script>
   ```
   - 在你希望加入 Recaptcha 的表單中，加入以下的 HTML 元素，使用你在第一步中獲得的 Site Key。
   ```html
   <!-- 在表單中加入 Recaptcha 元素 -->
   <div class="g-recaptcha" data-sitekey="YOUR_SITE_KEY"></div>
   ```

3. **驗證回應：**
   - 在你的後端程式中，當使用者提交表單時，檢查 Recaptcha 的回應。
   - 將使用者提交的 Recaptcha 回應（通常是一個 token）和你在第一步中獲得的 Secret Key 一起提交到 Google Recaptcha API 進行驗證。
   - Google Recaptcha API 會回應一個 JSON 物件，你需要解析這個物件並檢查其中的 `success` 欄位，確認使用者是否通過驗證。

以上是一個簡單的 Google Recaptcha V2 整合流程。請注意，由於技術細節可能隨時間而改變，建議查閱 Google Recaptcha 的[官方文件](https://developers.google.com/recaptcha/intro)以獲取最新的資訊和整合步驟。

**_以上內容由 ChatGPT產生_**

# v3 說明

使用 Google Recaptcha V3 的整合流程相對於 V2 有所不同。Recaptcha V3 不再使用傳統的 "I'm not a robot" 复选框，而是通過分配每個使用者一個分數（score）來評估使用者是否為機器人。以下是整合 Google Recaptcha V3 的基本流程：

1. **獲取 API 金鑰：**
   - 前往 [Google Recaptcha 管理員介面](https://www.google.com/recaptcha)。
   - 使用你的 Google 帳戶登入。
   - 點選「+」按鈕以新增一個網站。
   - 選擇「reCAPTCHA v3」。
   - 在網站主機名稱（Domains）下輸入你的網站域名。
   - 在 "reCAPTCHA 驗證" 選項中，選擇 "不是機器人"。
   - 完成後，你會獲得一個 Site Key 和 Secret Key。這兩個金鑰是你與 Google Recaptcha API 進行通信的關鍵。

2. **在網站中整合 Recaptcha：**
   - 在你的網站 HTML 檔案中，將 Recaptcha 的 JavaScript 驅動程式加入。
   ```html
   <!-- 在 <head> 標籤中加入以下程式碼 -->
   <script src="https://www.google.com/recaptcha/api.js?render=YOUR_SITE_KEY"></script>
   ```
   - 在你的網頁中，使用以下 JavaScript 代碼獲取 Recaptcha 分數。
   ```html
   <script>
     grecaptcha.ready(function() {
       grecaptcha.execute('YOUR_SITE_KEY', {action: 'submit_form'}).then(function(token) {
         // 在這裡處理 Recaptcha 回應（token）
       });
     });
   </script>
   ```
   - 注意：`'submit_form'` 是你希望 Recaptcha 保護的操作名稱，你可以根據實際情況修改。

3. **驗證回應：**
   - 在你的後端程式中，接收由前端提交的 Recaptcha 分數（token）。
   - 將使用者提交的 Recaptcha 分數和你在第一步中獲得的 Secret Key 一起提交到 Google Recaptcha API 進行驗證。
   - Google Recaptcha API 會回應一個 JSON 物件，你需要解析這個物件並檢查其中的 `success` 欄位和 `score` 欄位，確認使用者是否通過驗證並取得分數。

這是一個基本的 Google Recaptcha V3 整合流程。同樣，由於技術細節可能隨時間而改變，建議查閱 Google Recaptcha 的[官方文件](https://developers.google.com/recaptcha/docs/v3)以獲取最新的資訊和整合步驟。

_**以上內容由 ChatGPT產生**_

# 補充說明

### sample code 說明 

專案有引用的lib

1. jquery 強大輕量的js lib
1. axios 強大輕量API串接的lib (使用在v3)
1. script.google google的輕量應用程式開發,可以用來處理小型專案的後端需求(使用在v3)

sample 在
html 下recaptcha的tag,func 調用在js/main.js (有註解)
可以再自行改動調用

### api金鑰說明

***開發時請注意***

取得api key都須建立domain的白名單

sample code 的key 僅設定 localhost跟sample code demo網址

####  v3驗證

v3右下角會有個標章,標章可以換位置也可以隱藏,不過通常會露出來,表示其實是有驗證機制的,跟現在很多大網站會告知說會存取cookie的觀念一樣)

有做google的驗證分數回傳,可以測試驗證分數



