const fs = require('fs');

const TEMPLATE = /<template>[\s\S]*<\/template>/;
const SCRIPT = /<script>[\s\S]*<\/script>/
const STYLE = /<style>[\s\S]*<\/style>/

const readFile = function (filepath) {
  return new Promise((reslove, reject) => {
    fs.readFile(filepath, (error, data) => {
      if (error) {
        console.error(error);
        reject(error);
      } else {
        reslove(data.toString());
      }
    })
  })
}

async function loadFile(filepath) {
  try {
    const content = await readFile(filepath);
    let template = '';
    let script = '';
    let style = '';
    if (content.match(TEMPLATE).length > 0) {
      template = content.match(TEMPLATE)[0].slice('<template>'.length, -'<\/template>'.length);
    }
    if (content.match(SCRIPT).length > 0) {
      script = content.match(SCRIPT)[0].slice('<script>'.length, -'<\/script>'.length);
    }
    if (content.match(STYLE).length > 0) {
      style = content.match(STYLE)[0].slice('<style>'.length, -'<\/style>'.length);
    }
    return { template, script, style };
  } catch (error) {
    return error;
  }
}

module.exports = loadFile;