const assert = require('assert');
const buildTree = require('../build/bundle.js').buildTree;
const loader = require('../build/bundle.js').lobayLoader;
const path = require('path');

const testpath = path.resolve(__dirname, '../demo/app.lobay');

describe('[lobay-tree]', function () {
  it('build tree', async function () {
    const tree = await buildTree(testpath);
    const app = loader(testpath);
    const foo = loader(path.resolve(__dirname, '../demo/components/foo.lobay'));
    const bar = loader(path.resolve(__dirname, '../demo/components/bar.lobay'));
    const { template: appTemp, script: appScript, style: appStyle } = await app;
    const { template: fooTemp, script: fooScript, style: fooStyle } = await foo;
    const { template: barTemp, script: barScript, style: barStyle } = await bar;
    const ans = {
      name: 'app',
      children: [
        {
          name: 'foo',
          children: [],
          template: fooTemp,
          script: fooScript,
          style: fooStyle
        },
        {
          name: 'bar',
          children: [
            {
              name: 'foo',
              children: [],
              template: fooTemp,
              script: fooScript,
              style: fooStyle
            }
          ],
          template: barTemp,
          script: barScript,
          style: barStyle
        }
      ],
      template: appTemp,
      script: appScript,
      style: appStyle
    };
    assert.deepEqual(tree, ans);
  })
})