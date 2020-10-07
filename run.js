const inquirer = require('inquirer');
const fs = require('fs');
const mkdirp = require('mkdirp');
const yeoman = require('yeoman-environment');

const generators = fs.readdirSync(`${__dirname}/generators`)
  .map(f => {
    let meta = require(`./generators/${f}/meta.json`);
    return {
      name: `${f}: ${meta.description}`,
      value: f,
      short: f,
      sort: meta.sort
    }
  })
const runGenerator = async (generatorPath, { name = '', cwd = process.cwd(), args = {} }) => {
  return new Promise(resolve => {
    if (name) {
      mkdirp.sync(name);
      cwd = path.join(cwd, name);
    }
    const Generator = require(generatorPath);
    const env = yeoman.createEnv([], {
      cwd
    });
    const generator = new Generator({
      name,
      env,
      resolved: require.resolve(generatorPath),
      args
    })
    return generator.run(() => {
      if (name) {
        if (process.platform !== 'linux' || process.env.DISPLAY) {

        }
      }
      resolve(true);
    })
  })
}
const run = async config => {
  let { type } = config;
  if (!type) {
    // 未指定generator
    const answers = await inquirer.prompt([
      {
        name: 'type',
        message: '请选择模板进行初始化',
        type: 'list',
        choices: generators
      }
    ])
    type = answers.type;
  }
  try {
    return runGenerator(`./generators/${type}`, config);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}
module.exports = run;
