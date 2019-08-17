const assert = require('assert');
const loader = require('../build/bundle.js').lobayLoader;
const fs = require('fs');
const path = require('path')

const testpath = path.resolve(__dirname, '../demo/app.lobay');

describe('[lobay-loader]', function () {
  it('template should get content', async function () {
    const { template } = await loader(testpath);
    let tContent = fs.readFileSync(testpath).toString();
    tContent = tContent.match(/<template>[\s\S]*<\/template>/)[0].replace(/<\/?template>/g, '');
    assert.strictEqual(template, tContent);
  })
  it('components should has foo & bar', async function () {
    const { components } = await loader(testpath);
    let comdict = {
      foo: './components/foo.lobay',
      bar: './components/bar.lobay'
    };
    assert.deepEqual(components, comdict);
  })
  it('script should get content', async function () {
    const { script } = await loader(testpath);
    let tContent = fs.readFileSync(testpath).toString();
    tContent = tContent.match(/<script>[\s\S]*<\/script>/)[0].replace(/<\/?script>/g, '');
    assert.strictEqual(script, tContent);
  })
  it('style should get content', async function () {
    const { style } = await loader(testpath);
    let tContent = fs.readFileSync(testpath).toString();
    tContent = tContent.match(/<style>[\s\S]*<\/style>/)[0].replace(/<\/?style>/g, '');
    assert.strictEqual(style, tContent);
  })
})