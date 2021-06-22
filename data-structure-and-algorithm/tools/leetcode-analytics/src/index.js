const fs = require('fs');

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://leetcode.com/problemset/all/');

  const val = await page.evaluate(() => {
    return document.querySelector('.reactable-pagination select option:last-child').value;
  });
  await page.select('.reactable-pagination select', val);
  await page.waitForTimeout(5000);

  await page.click('.filterTags button');
  await page.waitForTimeout(1000);

  const topics = await page.evaluate(() => {
    const els = document.querySelectorAll('.filterTags .filter-list .filter-dropdown-menu-item span');
    const tmp = [];
    for (let i = 0; i < els.length; i += 1) {
      const el = els[i];
      const name = el.innerText.trim();
      tmp.push({
        name,
        slug: name.toLowerCase().replace(/ /g, '-'),
        count: {
          easy: 0,
          medium: 0,
          hard: 0,
        },
      });
    }
    return tmp;
  });

  for (let i = 0; i < topics.length; i += 1) {
    await page.goto('https://leetcode.com/problemset/all/');

    const topic = topics[i];
    const u = `https://leetcode.com/problemset/all/?topicSlugs=${topic.slug}`;

    await page.goto(u);
    await page.waitForTimeout(5000);

    const count = await page.evaluate(() => {
      const easy = document.querySelectorAll('.question-list-table tbody.reactable-data tr .label-success').length;
      const medium = document.querySelectorAll('.question-list-table tbody.reactable-data tr .label-warning').length;
      const hard = document.querySelectorAll('.question-list-table tbody.reactable-data tr .label-danger').length;

      return {
        easy,
        medium,
        hard,
      };
    });
    topic.count = count;
    console.log(topic);
  }

  fs.writeFileSync('./result.json', JSON.stringify(topics));

  await browser.close();
})();
