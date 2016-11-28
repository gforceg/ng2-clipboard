let pckg = require('../package.json');

let configs = {
  'package_config': pckg,
  'tsc_config': require('./tsconfig.json'),
  'aot_config': require('./tsconfig-aot.json'),
  'TMP_DIR': '.tmp',
  'IN_DIR': 'src',
  'OUT_DIR': `${pckg.name}`,
  'BUNDLE_DIR': 'bundles',
  'FACTORY_DIR': 'ngfactory'
}

module.exports = configs;
