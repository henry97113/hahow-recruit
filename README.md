# Superheroes Demo

Hahow 徵才小專案，可以至 [https://superherosdemo.netlify.com](https://superherosdemo.netlify.com) 查看線上版本

## 專案特點

- 使用[自行製作](https://github.com/henry97113/typescript-create-react-app)的 TypeScript React template
- 沒有使用第三方 library 管理共用狀態，單純使用 React 內建工具 & Hooks API
- 全部 components 皆為 functional component，搭配 Hooks 管理狀態、副作用

## 基本環境需求

- node
- yarn

## 使用方式

### 安裝所需套件

```sh
yarn
```

### 開啟 localhost

```sh
yarn start
# 在瀏覽器開啟 http://localhost:8080
```

### 打包專案

```sh
yarn build
# 專案資料夾中會產生 dist 資料夾
```

## 使用工具

專案從無到有所使用的工具/技術

### 使用技術

- [React.js](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org/)
  - 為 JavaScript 定義型別，以減少出現 bug 的機會，例如定義傳入 component 的 props，一但多傳/少傳，或是傳入的型別不正確 TS 都會報錯
  - 在 TS 可以使用在其他強型別語言才有的類型，像是 interface, enum 等等。透過 TypeScript 的編譯器將 TS 轉為一般 JS，而上面提到 JS 沒有的類型則不會出現在編譯後的程式碼。
- [React Router](https://github.com/ReactTraining/react-router)
  - 設定前端路由使用，是製作 SPA 不可或缺的工具選項之一
  - 可以選擇在 component 中設定路徑，或是使用 `react-router-config` 集中管理
  - 雖然好用但文件寫得不好，可以作為借鑒
- [Styled Components](https://www.styled-components.com/)
  - component 的概念將 HTML - CSS - JS 結合在一起，而樣式撰寫改為以 CSS-in-JS 的方式，而 styled-components 為解決方案之一
  - 將樣式寫為獨立的 component，以方便重複使用
  - 比起使用一般 CSS - className 設定樣式的方式的好處是可以存取該 component 的 props/state 進而設定對應樣式，反之需要使用 inline style 的方式設定，而 inline style 寫起來不方便且容易顯得雜亂，我認為非必要應盡量避免
- [Tailwind CSS](https://tailwindcss.com/)
  - 由於同時使用 styled-components 以及 tailwind 設定樣式，我將使用時機區分為
    - 「排版」使用 tailwind
    - 「樣式」使用 styled-components
  - 雖然排版使用 styled-components 也可以做到相同效果，但使用這種 utility-first CSS 在排版可以省下不少調整的時間

### 專案部署

- [Netlify](https://www.netlify.com/)

## 專案架構

我的分類邏輯是：

- 根目錄主要放環境/全域設定相關的檔案
- web 開發相關項目都放在 `src` 資料夾

### 根目錄

各種工具的設定檔居多

    .
    |____node_modules
    |____.git
    |____README.md
    |____yarn.lock
    |____package.json
    |____.gitignore
    |____tsconfig.json
    |____.eslintrc.js
    |____.prettierrc.js
    |____tailwind.config.js
    |____postcss.config.js
    |____webpack.common.js
    |____webpack.dev.js
    |____webpack.prod.js
    |____src

- `tsconfig.json`: TypeScript 設定，例如編譯方式以及要編譯的檔案類型
- `prettierrc`: 設定 Prettier。使用 Prettier 格式化程式碼
- `.eslintrc.js`: 設定 ESLint。因為有使用 TypeScript & Prettier，ESLint 內要另外設定一下，否則 Prettier 格式化的結果可能會與 ESLint 衝突
- `tailwind.config.js`: 客製化 Tailwind CSS 用
- `postcss.config.js`: 設定 postcss。專案內用於處理 Tailwind CSS 使用。會將 tailwind.css 轉為一般 CSS，並產生檔案 index.css
- Webpack: 共三個設定檔案
  - `webpack.common.js`: 處理開發/打包共通的項目
  - `webpack.dev.js`: 開發需要＆打包時不需要的項目
  - `webpack.prod.js`: 打包需要＆開發時不需要的項目
  使用 `webpack-merge` 合併 common & dev/prod 設定

### `src` 資料夾

web 的主要結構

    .
    |____components
    | |____Hero
    | |____shared
    |____constants
    |____context
    |____hooks
    |____images
    |____models
    |____routing
    |____styles
    |____utilities
    |____index.css
    |____index.tsx
    |____index.html

依照不同功能及需求創建資料夾＆檔案：

- `/components`: 將所有 components 集中管理，
  - 一般 component 如主題相關集中存放在同一資料夾
  - 會共用的 component 都放置在 `/shared` 資料夾
- `/constants`: 放置一但賦值即不會更改的 constants，例如 API endpoint 或是 reducer 中 action 的 type
- `/context`: 此專案沒有使用 Redux 管理共用的狀態，而是使用 React 原生的 context & hooks。此資料夾存放不同主題的 context
- `/hooks`: 放置 custom hooks
- `/images`: 放置所有圖片類型的檔案
- `/models`: 放置定義型別的 interface
- `/routing`: 集中管理前端路由的路徑
- `/styles`: 放置第三方 CSS 框架的樣式
- `/utilities`: 可以共用的 helper functions 都放在這裡，可以再依不同類型分檔案
- `index.html`: 網站使用的 HTML 模板
- `index.tsx`: 整個網站的進入點
- `index.css`: 第三方 CSS 框架的樣式會被一起被 Post CSS 處理並放在這裡

## 寫註解的原則

原則上我認為好的程式碼不需要有註解，或是應該追求不需要註解也能理解程式內容

但如果需要寫，我會遵守以下原則：

- 為何我要這麼做，而非我做了什麼

這份程式我只寫了一段註解：

```javascript
/**
 * CustomLoader 外層的元素需要有屬性 position: relative 作為錨點
 */
```

原因是 CustomLoader 中有設定 `position: absolute`，因此外層需要有錨點作為參考依據。為了避免其他人使用時困難故加上註解。

## 遇到的困難/問題

### 設定第三方 CSS 框架

由於是第一次引用第三方 CSS 框架到專案中，遵照 Tailwind 官網的教學一開始有點看不懂，後來搜尋網路教學文章，看完且理解後建置完成。再回去看官網教學就看得懂了

### 該使用 Tailwind 還是 styled-components 設定樣式

一開始用 Tailwind 設定得很開心，後來驚覺我都沒有用到 styled-components，想一下後確定了兩者分別適合的使用時機

### 路由問題造成 `bundle.js` 無法讀取

遇到的問題與[網友](https://stackoverflow.com/questions/47894330/error-if-direct-url-of-react-router-with-params-is-passed-to-browser)相同就不贅述了，測試後發現是 webpack 設定問題，造成 `bundle.js` 無法被讀取到，修改路徑後解決問題

### 使用 React Hooks

這次想要藉機玩一下不熟悉的 react hooks，就在一開始確定了只用 functional component + hooks 取代 class component。剛開始有點不熟悉，但後來慣後漸漸上手就順手許多。我覺得這樣寫起來語意十分清楚，搭配 custom hooks 後 component 顯得清爽許多

### 使用 React.context + hooks 管理共用狀態

會想使用 React.context + hooks 管理共用狀態是因為[這篇文章](https://kentcdodds.com/blog/application-state-management-with-react)，作者強力推薦這種方式，好處是不用另外使用第三方 library 且可以應用與 Redux 相同的概念

雖然因為需要共同使用的狀態太少，我實際應用的時間很少，但跟 Hooks 一樣，當清楚邏輯後就變得十分好用

我覺得這種方式在小型程式蠻適用的，但還不確定大型應用使否可行

目前對 hooks 非常有興趣，希望有人一起討論其它更有趣的用法 🤓

### 部署到 Netlify 後網址無法訪問

這個問題跟專案本身沒有太多關係，發生原因是 Netlify 有自己的 [轉址規則](https://www.netlify.com/docs/redirects/)，造成如果有使用前端路由的話會出錯。解決方法是加入 `_redirects` 檔案到 build 之後的資料夾中，讓 Netlify 依照指定規則轉址。

期間為了研究如何複製檔案至 build 後的資料夾，再次複習了 Webpack 以及學習使用 `copy-webpack-plugin`

### 心得

這次做下來雖然遇到比我預期的還多問題，但解決問題的過程還是學到不少東西，像是更熟悉 Webpack 設定、學習 Tailwind 等等

## 其它

我有偷偷放一個小驚喜！找找看吧！

- 在網址 `/heroes` 可以被觸發
- 鍵盤事件觸發

[原始專案說明](frontend.md)
