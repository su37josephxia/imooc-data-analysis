
###  安装
``` bash
npm init
cnpm i --save puppeteer
cnpm i --save nodemon
```

### HelloWorld
``` js
const puppeteer = require('puppeteer');

(async () => {
  const browser = await (puppeteer.launch({ //设置超时时间
    timeout: 15000,
    //如果是访问https页面 此属性会忽略https错误
    ignoreHTTPSErrors: true,
    // 打开开发者工具, 当此值为true时, headless总为false
    devtools: true,
    // 关闭headless模式, 不会打开浏览器
    headless: false
  }));
  const page = await browser.newPage();
  await page.goto('https://coding.imooc.com/class/282.html');

  // browser.close();
})();

```