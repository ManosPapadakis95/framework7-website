const path = require('path');
const pug = require('pug');
const fs = require('fs');

const rollup = require('rollup');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const replace = require('@rollup/plugin-replace');
const css = require('rollup-plugin-css-only');
const vue = require('rollup-plugin-vue');

const pugContent = fs.readFileSync('./src/pug/docs-demos/vue/_layout.pug', 'utf8');
const pugTemplate = pug.compile(pugContent);

function buildOne(name, cb) {
  if (name.indexOf('_') >= 0) {
    if (cb) cb();
    return Promise.resolve();
  }
  const time = Date.now();
  console.log(`Starting vue: ${name}`);

  const html = pugTemplate({
    F7_VUE_DEMO: name,
  });
  fs.writeFileSync(`./public/docs-demos/vue/${name}.html`, html);
  fs.writeFileSync(`./public/docs-demos/vue/${name}.css`, '');

  return rollup.rollup({
    input: './src/pug/docs-demos/vue/_main.js',
    plugins: [
      replace({
        delimiters: ['', ''],
        "from 'framework7/lite'": `from '${path.resolve(__dirname, '../public/packages/core/esm/framework7-lite-bundle.js')}'`,
        "from 'framework7-vue'": `from '${path.resolve(__dirname, '../public/packages/vue/esm/framework7-vue.js')}'`,
        F7_VUE_DEMO: name,
      }),
      vue({
        emitCss: true,
        compilerOptions: {
          dev: false,
        },
      }),
      css({
        output: `${name}.css`,
      }),
      nodeResolve({
        browser: true,
        dedupe: (importee) => importee === 'vue' || importee.startsWith('vue/'),
      }),
    ],
  }).then((bundle) => {
    return bundle.write({
      strict: true,
      file: `./public/docs-demos/vue/${name}.js`,
      format: 'umd',
      name,
      sourcemap: false,
      globals: {
        framework7: 'Framework7',
      },
    });
  }).then(() => {
    console.log(`Finished vue: ${name} in ${Date.now() - time}ms`);
    if (cb) cb();
  });
}

async function buildAll(cb) {
  const vueDemos = fs.readdirSync(path.resolve(__dirname, '../src/pug/docs-demos/vue'))
    .filter((f) => f.indexOf('.vue') >= 0)
    .filter((f) => f.indexOf('_') < 0)
    .map((f) => f.split('.vue')[0]);

  // eslint-disable-next-line
  for (name of vueDemos) {
    // eslint-disable-next-line
    await buildOne(name);
  }
  if (cb) cb();
}

module.exports = {
  one: buildOne,
  all: buildAll,
};
