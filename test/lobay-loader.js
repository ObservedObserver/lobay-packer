const assert = require('assert');

const loader = require('../build/bundle.js').lobayLoader;

const fs = require('fs');

const path = require('path')

describe('[lobay-loader]', () => {
  const testpath = path.resolve(__dirname, '../demo/app.lobay')
  it('template should get content', async () => {
    const { template } = await loader(testpath);
    let tContent = fs.readFileSync(testpath).toString();
    tContent = tContent.match(/<template>[\s\S]*<\/template>/)[0].replace(/<\/?template>/g, '');
    assert.strictEqual(template, tContent);
  })
  it('components should has foo & bar', async () => {
    const { components } = await loader(testpath);
    let comlist = ['foo', 'bar'];
    assert.deepEqual(components, comlist);
  })
  it('script should get content', async () => {
    const { script } = await loader(testpath);
    let tContent = fs.readFileSync(testpath).toString();
    tContent = tContent.match(/<script>[\s\S]*<\/script>/)[0].replace(/<\/?script>/g, '');
    assert.strictEqual(script, tContent);
  })
  it('style should get content', async () => {
    const { style } = await loader(testpath);
    let tContent = fs.readFileSync(testpath).toString();
    tContent = tContent.match(/<style>[\s\S]*<\/style>/)[0].replace(/<\/?style>/g, '');
    assert.strictEqual(style, tContent);
  })
})