import loadFile from '../lobay-loader/index.js';
import path from 'path';

const FILE_TYPES = ['lobay', 'lb'];
// @entrance must be absolute path.
function hasType (filepath) {
  const filename = filepath.split('/').slice(-1)[0];
  return filename.search(new RegExp(`.${FILE_TYPES.join('|')}`)) > -1;
}

async function buildTree (entrance) {
  const dirpath =  entrance.split('/').slice(0, -1).join('/');
  const filename = entrance.split('/').slice(-1)[0];
  const { template, script, style, components } = await loadFile(entrance);
  let node = {
    name: filename.replace(new RegExp(`.${FILE_TYPES.join('|')}`), ''),
    children: [],
    template,
    script,
    style
  };
  const comList = Object.values(components);
  for (let com of comList) {
    const compath = path.resolve(dirpath, com + (hasType(com) ? '' : '.lobay'));
    const child = await buildTree(compath);
    node.children.push(child);
  }
  return node;
}

export default buildTree;
