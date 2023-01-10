import type * as Stylelint from 'stylelint';
import type * as Rollup from 'rollup';
import type { CreateFilter } from '@rollup/pluginutils';

export type FilterPattern = string | string[];
export type Filter = ReturnType<CreateFilter>;

export interface StylelintPluginOptions extends Stylelint.LinterOptions {
  dev: boolean;
  build: boolean;
  cache: boolean;
  cacheLocation: string;
  include: FilterPattern;
  exclude: FilterPattern;
  stylelintPath: string;
  formatter: Stylelint.FormatterType | Stylelint.Formatter;
  lintInWorker: boolean;
  lintOnStart: boolean;
  chokidar: boolean;
  emitError: boolean;
  emitErrorAsWarning: boolean;
  emitWarning: boolean;
  emitWarningAsError: boolean;
}
export type StylelintPluginUserOptions = Partial<StylelintPluginOptions>;

export type StylelintLinterOptions = Stylelint.LinterOptions;
export type StylelintInstance = Stylelint.PublicApi;
export type StylelintFormatter = Stylelint.Formatter;
export type StylelintLinterResult = Stylelint.LinterResult;
export type StylelintLintResult = Stylelint.LintResult;
export type StylelintLintResults = StylelintLintResult[];

export type LintFiles = (files: FilterPattern, context?: Rollup.PluginContext) => Promise<void>;

export type TextType = 'error' | 'warning' | 'plugin';
