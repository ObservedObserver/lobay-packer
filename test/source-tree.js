const assert = require('assert');
const buildTree = require('../build/bundle.js').buildTree;
const path = require('path');

const testpath = path.resolve(__dirname, '../demo/app.lobay');

describe('[lobay-tree]', function () {
  it('build tree', async function () {
    const tree = await buildTree(testpath);
    const ans = {
      name: 'app',
      children: [
        { name: 'foo', children: [] },
        { name: 'bar', children: [
          {
            name: 'foo',
            children: []
          }
        ] }
      ]
    };
    assert.deepEqual(tree, ans);
  })
})