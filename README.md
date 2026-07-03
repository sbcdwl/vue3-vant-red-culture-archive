# 红色文化收藏档案馆

## 所用依赖和版本
* vue3
* vant4
* router4

## 依赖安装
如果文件夹内没有node_modules文件夹，请使用以下命令安装依赖:

```
npm i
```

---

## 所有模块对应组件

### 以下组件存放在/src/views

- Home.vue:首页模块
- Login.vue:登录模块
- Register.vue:注册模块
- Introduction.vue:档案馆简介模块
- Collection.vue:藏品展示模块
- CollectionDetail.vue:藏品展示详细模块
- News.vue:新闻咨询模块
- Tour.vue:旅游地点售卖模块
- TourDetail.vue:旅游地点细节模块
- Personal.vue:个人主页模块
- MyOrder.vue:查看订单模块

### 以下组件存放在/src/layout

- Tabbar.vue:底部标签栏

### 以下组件作为localstorage的存储,存放在src/data

- Colection.js:存储产品展示模块要用到的数据
- News.js:存储新闻资讯模块要用到的数据
- tour.js:存储旅游模块需要用到的数据

---

## 所有组件对应功能

### Tabbar.vue
- 使用vant的tabbar，实现可跳转首页、藏品展示、新闻咨询、旅游地点售卖、个人主页

### Home.vue
- 暂时只是用vant的card，内嵌显示档案馆简介模块
- 有一些文字

### Login.vue
- 登录
- 表单使用van-form,输入框使用van-field,按钮使用van-button
- 使用localStorage.getItem取出localstorage的名和值进行对比
- 可跳转到注册

### Register.vue
- 注册，使用vant的 ？同上
- 正则表达式检测用户输入的密码格式，需要有英文大小写加数字
- 使用localStorage.setItem保存到localstoreage
- 可跳转到登录

### Introduction.vue
- 作为首页的内嵌
- 使用vant的card组件，做档案馆的简介

### Collection.vue
- 使用localstorage提取Collection.js里的数据
- 使用vant的van-swipe实现上半部分的轮播图
- 使用vant的van-grid实现下半部分的产品网格展示
- 内嵌CollectionDetail,点击van-grid-item路由跳转到该组件,通过/collection/:id跳转CollectionDetail

### CollectionDetail.vue
- 使用localstorage提取Collection.js里的数据
- 使用vant的van-card实现，有图片，有描述，有年代，有历史价值

### News.vue
- 使用vant的card
- 使用localstorage提取News.js里的数据
- 最上面是一个大的图片以及内容，用div包起来
- 中下部分是其它一些新闻

### Tour.vue
- 使用localstorage读取tour.js里的数据
- 使用vant的list列出整体
- 使用vant的card展示每一项的旅游地点的图片，描述，价格
- 使用路由跳转,/tour/:id的方式内嵌TourDetail.vue

### TourDetail.vue
- 使用vant的button作为按钮
- 使用localstorage,根据传进来的id决定渲染哪个具体的
- 需要有大图，描述，价格，数据不变，但是样式更大个
- 使用vant的dialog,点击下单，下单后给出二维码
- 手动点击支付完成，通过localstorage保存为MyOrder，以及相关数据

### MyOrder.vue
- 使用localstorage获取MyOrder的键值对
- 使用vant的list和card渲染
- 按钮删除某个订单

### Personal.vue
- 使用vant cell组件，暂时只跳转到登录，注册，查看我的订单组件

---

## 功能需求编号

### req:A Tabbar模块

- req:A-001 使用vant的tabbar实现底部导航
- req:A-002 实现首页、藏品展示、新闻资讯、旅游地点售卖、个人主页跳转

### req:B Home模块

- req:B-001 内嵌“使用vant的card展示档案馆简介模块”
- req:B-002 展示首页文字内容

### req:C Login模块

- req:C-001 使用van-form、van-field、van-button实现登录表单
- req:C-002 使用localStorage.getItem读取用户数据并验证
- req:C-003 跳转注册页面

### req:D Register模块

- req:D-001 使用van-form、van-field、van-button实现注册表单
- req:D-002 使用正则表达式验证密码格式
- req:D-003 使用localStorage.setItem保存用户数据
- req:D-004 跳转登录页面

### req:E Introduction模块

- req:E-001 作为Home内嵌简介组件
- req:E-002 使用vant card展示档案馆简介

### req:F Collection模块

- req:F-001 使用localStorage读取Collection.js数据
- req:F-002 使用van-swipe实现藏品轮播图
- req:F-003 使用van-grid实现藏品网格展示
- req:F-004 点击藏品跳转CollectionDetail,通过/collection/:id跳转CollectionDetail

### req:G CollectionDetail模块

- req:G-001 使用localStorage读取藏品数据
- req:G-002 使用van-card展示图片、描述、年代、历史价值

### req:H News模块

- req:H-001 使用localStorage读取News.js数据
- req:H-002 使用ai生成样式展示新闻内容
- req:H-003 展示顶部重点新闻图片和内容
- req:H-004 展示中下部新闻

### req:I Tour模块

- req:I-001 使用localStorage读取tour.js数据
- req:I-002 使用van-list展示旅游地点列表
- req:I-003 使用van-card展示图片、描述、价格
- req:I-004 通过/tour/:id跳转TourDetail

### req:J TourDetail模块

- req:J-001 根据id读取localStorage对应旅游数据
- req:J-002 展示旅游地点大图、描述、价格
- req:J-003 使用van-button实现下单操作
- req:J-004 使用van-dialog展示二维码支付
- req:J-005 支付完成后通过localstorage保存MyOrder订单数据

### req:K MyOrder模块

- req:K-001 使用localStorage获取MyOrder数据
- req:K-002 使用van-list和van-card展示订单
- req:K-003 支持删除订单

### req:L Personal模块

- req:L-001 使用van-cell展示个人中心入口
- req:L-002 提供登录入口
- req:L-003 提供注册入口
- req:L-004 提供我的订单入口
