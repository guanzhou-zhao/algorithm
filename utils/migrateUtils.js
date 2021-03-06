const fs = require('fs');
const path = require('path');

function getFuncName(challengeSeedFunc) {
  return challengeSeedFunc[0].slice(challengeSeedFunc[0].indexOf(' ') + 1, challengeSeedFunc[0].indexOf('('));
}

function getFuncString(challengeSeedFunc) {
  challengeSeedFunc[0] = `export default ${challengeSeedFunc[0]}`;

  challengeSeedFunc.splice(challengeSeedFunc.length - 1, 1);

  return challengeSeedFunc.join('\n');
}

function getFuncDirectory(funcName, level) {
  return `${__dirname}/../src/${level}/${funcName}.js`;
}

function createFile(directory, content) {
  const folder = path.dirname(directory);
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder);
  }
  fs.closeSync(fs.openSync(directory, 'w'));
  fs.writeFile(directory, content, 'utf8', (err) => {
    if (err) throw err;
    console.log(`${directory} is saved`);
  });
}

function getTestDesc(test) {
  return test.split('message: ').pop().replace(/\'\);/g, '').replace(/<[\/]?code>/g, '');
}

function getStringOfTest(challenge, level, funcName) {
  const arr = [];
  const tests = challenge.tests;

  const th = `import { assert } from 'chai';\nimport ${funcName} from '../../src/${level}/${funcName}.js';\n\ndescribe('${challenge.title}', () => {\n`;
  arr.push(th);

  tests.forEach((test) => {
    const testDesc = getTestDesc(test);
    arr.push(`  it('${testDesc}', () => {\n    ${test}\n  });\n`);
  });

  arr.push('});\n');

  return arr.join('');
}

function getDirectoryOfTest(funcName, level) {
  return `${__dirname}/../test/${level}/${funcName}.test.js`;
}

function migrate(challenges, level) {
  challenges.forEach((challenge) => {
    const challengeSeedFunc = challenge.challengeSeed;
    const funcName = getFuncName(challengeSeedFunc);
    const funcDirectory = getFuncDirectory(funcName, level);
    const funcString = getFuncString(challengeSeedFunc);

    createFile(funcDirectory, funcString);

    const stringOfTest = getStringOfTest(challenge, level, funcName);
    const directoryOfTest = getDirectoryOfTest(funcName, level);

    createFile(directoryOfTest, stringOfTest);
  });
}

module.exports = migrate;
