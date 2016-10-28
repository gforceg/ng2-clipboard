let pckg = require('../package.json');

let configs = {
  'package': pckg,
  'tsc': require('../tsconfig.json'),
  'TMP_DIR': '.tmp',
  'IN_DIR': 'src',
  'OUT_DIR': `${pckg.name}`,
  'BUNDLE_DIR': 'bundles',
  'FACTORY_DIR': 'aot'
}

module.exports = configs;
