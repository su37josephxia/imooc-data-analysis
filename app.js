const puppeteer = require('puppeteer');
const writeFile = require('./file.js');
var moment = require('moment');
moment.locale('zh-cn');

(async () => {
  const browser = await (puppeteer.launch({ //设置超时时间
    timeout: 15000,
    //如果是访问https页面 此属性会忽略https错误
    ignoreHTTPSErrors: true,
    // 打开开发者工具, 当此值为true时, headless总为false
    devtools: true,
    // 关闭headless模式, 不会打开浏览器
    headless: true
  }));
  const page = await browser.newPage();
  for (let i = 1; i < 400; i++) {
    let data = await getPageData(i)
    if (data !== null) {
      data.id = i
      data.time = moment().format('YYYY-MM-DD HH:mm:ss')
      console.log('抓起后数据', data)
      //文件写入
      writeFile(data);
    }
  }
  browser.close();

  /**
   * 获取数据
   * @param {*} id 
   */
  async function getPageData(id) {
    try {
      await page.goto(`https://coding.imooc.com/class/${id}.html`);
      // 浏览器内执行
      return await page.evaluate(() => {
        let name = document
          .querySelector('.course-class-infos .path span')
          .innerText
        let attr = Array
          .from(document.querySelectorAll('.static-item .meta-value strong'))
          .map(v => v.innerText)
        return {
          name,
          person: attr[2],
          difficulty: attr[0],
          duration: attr[1],
          score: attr[3],
        }
      });
    } catch (e) {
      return null
    }
  }
})();