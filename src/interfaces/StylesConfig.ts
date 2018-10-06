type Preprocessors = 'css' | 'less' | 'scss' | 'sass' | 'stylus';

export interface StylesConfig {
  preprocessor: Preprocessors;
  modules: boolean;
}
