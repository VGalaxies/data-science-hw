# 数据科学基础大作业

> 司法大数据自动化标注与分析



## 数据来源

[中国裁判文书网](https://wenshu.court.gov.cn/)



## 基础

[Web Beginner Courses](https://space.bilibili.com/88270259/channel/detail?cid=82006)

CSS: https://www.bilibili.com/video/BV1YJ411a7dy



## 文件读写 using ActiveXObject 

> for IE
>
> **Deprecated**

https://cloud.tencent.com/developer/article/1392736



## Node.js 服务器端

https://www.jianshu.com/p/edce7af3691a

https://zhuanlan.zhihu.com/p/97336307



## 在网页中读取本地文件

https://developer.mozilla.org/zh-CN/docs/Web/API/File/Using_files_from_web_applications

https://zhuanlan.zhihu.com/p/50063001



## 生成文件 前端

> **Deprecated**

https://www.zhihu.com/question/420002222/answer/1462207254



## 分词

https://github.com/yanyiwu/nodejieba



- 载入词典

人名……

- 词性对照表

> source: [fxsjy/jieba](https://github.com/fxsjy/jieba)

| 标签 | 含义     | 标签 | 含义     | 标签 | 含义     | 标签 | 含义     |
| ---- | -------- | ---- | -------- | ---- | -------- | ---- | -------- |
| n    | 普通名词 | f    | 方位名词 | s    | 处所名词 | t    | 时间     |
| nr   | 人名     | ns   | 地名     | nt   | 机构名   | nw   | 作品名   |
| nz   | 其他专名 | v    | 普通动词 | vd   | 动副词   | vn   | 名动词   |
| a    | 形容词   | ad   | 副形词   | an   | 名形词   | d    | 副词     |
| m    | 数量词   | q    | 量词     | r    | 代词     | p    | 介词     |
| c    | 连词     | u    | 助词     | xc   | 其他虚词 | w    | 标点符号 |
| PER  | 人名     | LOC  | 地名     | ORG  | 机构名   | TIME | 时间     |



## 标签页切换

https://www.cnblogs.com/yuershuo/p/5699570.html



## 生成文件 后端

http://nodejs.cn/learn/writing-files-with-nodejs



## JQuery

即时读取 `textarea` 中的内容



## 通信约定

- 服务器 -> 浏览器
  - 以 `noun` 或 `verb` 开头，为分词列表
  - 否则为文件成功生成的提示信息
- 浏览器 -> 服务器
  - 以 `TAGINFO: ` 开头，为标注信息
  - 以 `TEXT: ` 开头，为案件文本（分词后）
  - 否则为案件文本（分词前）



## TODO

- 页面布局与美化
- 分词精确度



## More...

- [x] [Layui](https://www.layuiweb.com/)
- [ ] [A Vue 3 UI Framework | Element Plus](https://element-plus.gitee.io/zh-CN/)
- [ ] [ice.work](https://ice.work/)
- [ ] [Less.js](https://lesscss.org/#)
- [ ] [grabient](https://www.grabient.com/)

