import { ReactivateConfig } from '../../../interfaces/ReactivateConfig';
import pipeMerge from '../../../config/utils/pipe-merge';
import value from '../../../config/utils/value';
import entry from '../../../config/entry';
import output from '../../../config/output';
import extensions from '../../../config/resolve/extensions';
import reactivateResolve from '../../../config/resolve/reactivate';
import babel from '../../../config/rule/babel';
import vue from '../../../config/rule/vue';
import styles from '../../../config/rule/styles';
import fonts from '../../../config/rule/fonts';
import images from '../../../config/rule/images';
import vendors from '../../../config/rule/vendors';
import htmlTemplate from '../../../config/plugin/template';

export default (config: ReactivateConfig) => {
  const { context, reactivateContext, template } = config;

  const baseConfig = [
    value({ mode: 'development' }),
    entry(config.entry,{ context }),
    output(config.output, { context }),
    extensions(['.js']),
    reactivateResolve({ context, reactivateContext }),
    babel(),
    styles(config.styles),
    fonts(),
    images(),
    vendors(),
  ];

  if (config.framework === 'vue') {
    baseConfig.push(vue());
  }

  if (template) {
    baseConfig.push(htmlTemplate({ template }, { context }));
  }

  return pipeMerge({}, ...baseConfig);
};
