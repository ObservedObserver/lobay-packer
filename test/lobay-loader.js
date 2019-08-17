const assert = require('assert');

const loader = require('../src/lobay-loader/index.js');

const fs = require('fs');

const path = require('path')

describe('[lobay-loader]', () => {
  it('template should get content', async () => {
    const testpath = path.resolve(__dirname, '../demo/app.lobay')
    const { template } = await loader(testpath);
    let tContent = fs.readFileSync(testpath).toString();
    tContent = tContent.match(/<template>[\s\S]*<\/template>/)[0].replace(/<\/?template>/g, '');
    assert.strictEqual(template, tContent);
  })
  it('script should get content', async () => {
    const testpath = path.resolve(__dirname, '../demo/app.lobay')
    const { script } = await loader(testpath);
    let tContent = fs.readFileSync(testpath).toString();
    tContent = tContent.match(/<script>[\s\S]*<\/script>/)[0].replace(/<\/?script>/g, '');
    assert.strictEqual(script, tContent);
  })
  it('style should get content', async () => {
    const testpath = path.resolve(__dirname, '../demo/app.lobay')
    const { style } = await loader(testpath);
    let tContent = fs.readFileSync(testpath).toString();
    tContent = tContent.match(/<style>[\s\S]*<\/style>/)[0].replace(/<\/?style>/g, '');
    assert.strictEqual(style, tContent);
  })
})