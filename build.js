const process = require('child_process');
const fs = require('fs');
const path = require('path');

// clean
// process.execSync('rm -rf build es dist');
process.execSync('rm -rf build es');
// 编译
process.execSync('node_modules/.bin/tsc');
// 将编译好的文件移至目标目录
// process.execSync('cp -r build/dist/components dist');
process.execSync('cp -r build/dist/components es');
// 复制scss文件
process.execSync('cp -r src/assets ./');
const dirs = fs.readdirSync('./src/components');
dirs.forEach(dir => {
  const src = path.join(__dirname, 'src/components', dir, 'index.scss');
  const dist = path.join(__dirname, 'es', dir);
  const isExist = fs.existsSync(src);
  isExist && process.execSync(`cp ${src} ${dist}`);
});
// 清除不需要的目录
process.execSync('rm -rf es/lp-header es/lp-siderbar es/lp-content assets/fonts assets/images');
deleteLines('./es/index.d.ts');
deleteLines('./es/index.js');

function deleteLines(file) {
  const data = fs.readFileSync(file, 'utf8');
  const lines = data.split('\n').filter(l => {
    return l !== 'export { default as LpHeader } from \'./lp-header\';'
      && l !== 'export { default as LpContent } from \'./lp-content\';'
      && l !== 'export { default as LpSiderbar } from \'./lp-siderbar\';'
  }).join('\n');
  fs.writeFile(file, lines);
}