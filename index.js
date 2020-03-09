const express = require('express');
const app = new express();

// http请求，直接返回文件。
app.use(express.static(__dirname));

app.listen(8000, () => {
  console.log("正在监听8000端口...");
});